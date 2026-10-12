"""
OpenTelemetry metrics and tracing for the client, requires
`pip install zenmqtt[otel]`.

Messaging metrics and spans follow the OpenTelemetry semantic conventions, MQTT
specific metrics use the `zenmqtt.` prefix. They can be exported with any
OpenTelemetry exporter: OTLP, Prometheus, console, etc.

Topics are not used as metric attributes: the number of topics isn't limited,
so it would make the number of time series unlimited too. For the same reason
span names don't contain the topic, it's the attribute
`messaging.destination.name` of the span.
"""

import asyncio
from contextlib import contextmanager
from typing import Iterator, Mapping, Optional, Sequence, Tuple, cast

from opentelemetry import context, propagate, trace
from opentelemetry.metrics import Meter, get_meter
from opentelemetry.propagators.textmap import Getter, TextMapPropagator
from opentelemetry.trace import Span, SpanKind, Status, StatusCode, TracerProvider
from opentelemetry.util.types import AttributeValue

from zenmqtt.instrumentation.metrics import MetricsCollector
from zenmqtt.instrumentation.tracing import PublishTrace, Tracing
from zenmqtt.mqtt.packet import PacketType
from zenmqtt.mqtt.publish import (
    PublishAcknowledgement,
    PublishProperties,
    PublishResult,
)
from zenmqtt.mqtt.reason_codes import FAILURE_REASON_CODE

# recommended by the semantic conventions for durations in seconds
# packet sizes in bytes
_SIZE_BUCKETS = (16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576)

_DURATION_BUCKETS = (
    0.005,
    0.01,
    0.025,
    0.05,
    0.075,
    0.1,
    0.25,
    0.5,
    0.75,
    1.0,
    2.5,
    5.0,
    7.5,
    10.0,
)


class OpenTelemetryMetrics(MetricsCollector):
    def __init__(
        self,
        meter: Optional[Meter] = None,
        attributes: Optional[Mapping[str, AttributeValue]] = None,
    ) -> None:
        """
        :param meter: meter to create instruments, the global one by default
        :param attributes: added to every measurement, e.g. a client name
        """
        meter = meter or get_meter("zenmqtt")

        self._attributes: dict[str, AttributeValue] = {
            "messaging.system": "mqtt",
            **(attributes or {}),
        }

        self._operation_duration = meter.create_histogram(
            "messaging.client.operation.duration",
            unit="s",
            description="Duration of publish, subscribe and unsubscribe operations",
            explicit_bucket_boundaries_advisory=_DURATION_BUCKETS,
        )
        self._sent_messages = meter.create_counter(
            "messaging.client.sent.messages",
            unit="{message}",
            description="Number of published messages",
        )
        self._consumed_messages = meter.create_counter(
            "messaging.client.consumed.messages",
            unit="{message}",
            description="Number of messages delivered to the application",
        )

        self._connect_duration = meter.create_histogram(
            "zenmqtt.connect.duration",
            unit="s",
            description="Time from sending CONNECT to receiving CONNACK",
            explicit_bucket_boundaries_advisory=_DURATION_BUCKETS,
        )
        self._active_connections = meter.create_up_down_counter(
            "zenmqtt.connections.active",
            unit="{connection}",
            description="Number of established connections",
        )
        self._closed_connections = meter.create_counter(
            "zenmqtt.connections.closed",
            unit="{connection}",
            description="Number of closed connections",
        )
        # one histogram instead of counters of packets and bytes: every
        # measurement has a fixed cost in the SDK, and a histogram gives both,
        # the number of packets (count) and of bytes (sum)
        self._sent_packets = meter.create_histogram(
            "zenmqtt.packets.sent",
            unit="By",
            description="Sizes of sent packets: count of packets, sum of bytes",
            explicit_bucket_boundaries_advisory=_SIZE_BUCKETS,
        )
        self._received_packets = meter.create_histogram(
            "zenmqtt.packets.received",
            unit="By",
            description="Sizes of received packets: count of packets, sum of bytes",
            explicit_bucket_boundaries_advisory=_SIZE_BUCKETS,
        )

        # attributes are built once, not for every measurement
        self._packet_attributes: dict[PacketType, dict[str, AttributeValue]] = {
            packet_type: {**self._attributes, "mqtt.packet.type": packet_type.name}
            for packet_type in PacketType
        }
        self._received_attributes: dict[int, dict[str, AttributeValue]] = {
            qos: {
                **self._attributes,
                "messaging.operation.name": "receive",
                "messaging.operation.type": "receive",
                "mqtt.qos": qos,
            }
            for qos in (0, 1, 2)
        }
        self._published_attributes: dict[
            tuple[int, int], dict[str, AttributeValue]
        ] = {}
        self._buffered_messages = meter.create_gauge(
            "zenmqtt.messages.buffered",
            unit="{message}",
            description=(
                "Number of incoming messages waiting for the application, "
                "reported while it's above the warning threshold"
            ),
        )
        self._send_quota_wait = meter.create_histogram(
            "zenmqtt.send_quota.wait.duration",
            unit="s",
            description='Time a publish waited because of the server "Receive Maximum"',
            explicit_bucket_boundaries_advisory=_DURATION_BUCKETS,
        )
        self._resent_messages = meter.create_counter(
            "zenmqtt.messages.resent",
            unit="{message}",
            description="Number of pending messages re-sent after reconnect",
        )
        self._duplicated_messages = meter.create_counter(
            "zenmqtt.messages.duplicated",
            unit="{message}",
            description="Number of duplicated QoS 2 messages, not delivered again",
        )
        self._ping_duration = meter.create_histogram(
            "zenmqtt.ping.duration",
            unit="s",
            description="Time from sending PINGREQ to receiving PINGRESP",
            explicit_bucket_boundaries_advisory=_DURATION_BUCKETS,
        )
        self._reconnect_attempts = meter.create_counter(
            "zenmqtt.reconnect.attempts",
            unit="{attempt}",
            description="Number of automatic reconnect attempts",
        )
        self._reconnect_give_ups = meter.create_counter(
            "zenmqtt.reconnect.give_ups",
            unit="{event}",
            description="Number of times automatic reconnect stopped for good",
        )
        self._ping_timeouts = meter.create_counter(
            "zenmqtt.ping.timeouts",
            unit="{timeout}",
            description="Number of connections closed by keep alive",
        )

    def on_connect(self, reason_code: int, duration: float) -> None:
        attributes = self._with_reason_code(reason_code)

        self._connect_duration.record(duration, attributes)

        if reason_code < FAILURE_REASON_CODE:
            self._active_connections.add(1, self._attributes)

    def on_connection_closed(self, lost: bool) -> None:
        self._active_connections.add(-1, self._attributes)
        self._closed_connections.add(
            1, {**self._attributes, "zenmqtt.connection.lost": lost}
        )

    def on_packet_sent(self, packet_type: PacketType, size: int) -> None:
        self._sent_packets.record(size, self._packet_attributes[packet_type])

    def on_packet_received(self, packet_type: PacketType, size: int) -> None:
        self._received_packets.record(size, self._packet_attributes[packet_type])

    def on_publish_completed(self, qos: int, reason_code: int, duration: float) -> None:
        if (attributes := self._published_attributes.get((qos, reason_code))) is None:
            attributes = {
                **self._with_reason_code(reason_code),
                "messaging.operation.name": "publish",
                "messaging.operation.type": "send",
                "mqtt.qos": qos,
            }
            self._published_attributes[(qos, reason_code)] = attributes

        self._operation_duration.record(duration, attributes)
        self._sent_messages.add(1, attributes)

    def on_message_received(self, qos: int, duplicate: bool) -> None:
        attributes = self._received_attributes[qos]

        if duplicate:
            self._duplicated_messages.add(1, attributes)
        else:
            self._consumed_messages.add(1, attributes)

    def on_messages_buffered(self, count: int) -> None:
        self._buffered_messages.set(count, self._attributes)

    def on_send_quota_wait(self, duration: float) -> None:
        self._send_quota_wait.record(duration, self._attributes)

    def on_messages_resent(self, count: int) -> None:
        self._resent_messages.add(count, self._attributes)

    def on_ping(self, duration: float) -> None:
        self._ping_duration.record(duration, self._attributes)

    def on_reconnect_attempt(self, attempt: int, delay: float) -> None:
        self._reconnect_attempts.add(1, self._attributes)

    def on_reconnect_gave_up(self) -> None:
        self._reconnect_give_ups.add(1, self._attributes)

    def on_ping_timeout(self) -> None:
        self._ping_timeouts.add(1, self._attributes)

    def on_subscribe_completed(
        self, reason_codes: Sequence[int], duration: float
    ) -> None:
        self._record_command("subscribe", reason_codes, duration)

    def on_unsubscribe_completed(
        self, reason_codes: Sequence[int], duration: float
    ) -> None:
        self._record_command("unsubscribe", reason_codes, duration)

    def _record_command(
        self, operation: str, reason_codes: Sequence[int], duration: float
    ) -> None:
        attributes: dict[str, AttributeValue] = {
            **self._attributes,
            "messaging.operation.name": operation,
        }

        # one reason code per topic, the operation failed if any topic failed
        if failed := [code for code in reason_codes if code >= FAILURE_REASON_CODE]:
            attributes["error.type"] = _format_reason_code(failed[0])

        self._operation_duration.record(duration, attributes)

    def _with_reason_code(self, reason_code: int) -> dict[str, AttributeValue]:
        attributes: dict[str, AttributeValue] = {
            **self._attributes,
            "mqtt.reason_code": reason_code,
        }

        if reason_code >= FAILURE_REASON_CODE:
            attributes["error.type"] = _format_reason_code(reason_code)

        return attributes


def _format_reason_code(reason_code: int) -> str:
    return f"0x{reason_code:02X}"


UserProperties = Sequence[Tuple[str, str]]


# mypy runs without site packages, so Getter is Any for it
class _UserPropertiesGetter(Getter[UserProperties]):  # type: ignore[misc,unused-ignore]
    """Reads the trace context from MQTT 5 user properties, (key, value) pairs."""

    def get(self, carrier: UserProperties, key: str) -> Optional[list[str]]:
        return [value for name, value in carrier if name == key] or None

    def keys(self, carrier: UserProperties) -> list[str]:
        return [name for name, _ in carrier]


_USER_PROPERTIES_GETTER = _UserPropertiesGetter()


class _PublishSpan(PublishTrace):
    def __init__(self, properties: PublishProperties, span: Span) -> None:
        super().__init__(properties)
        self._span = span

    def end(
        self,
        result: Optional[PublishAcknowledgement],
        error: Optional[BaseException],
    ) -> None:
        span = self._span

        # a cancelled QoS 1/2 call doesn't cancel the delivery, it's not an error
        if error is not None and not isinstance(error, asyncio.CancelledError):
            span.record_exception(error)
            span.set_attribute("error.type", type(error).__qualname__)
            span.set_status(Status(StatusCode.ERROR, str(error)))
        elif result is not None:
            span.set_attribute("mqtt.reason_code", result.reason_code)

            if result.reason_code >= FAILURE_REASON_CODE:
                span.set_attribute(
                    "error.type", _format_reason_code(result.reason_code)
                )
                span.set_status(Status(StatusCode.ERROR))

        span.end()


class OpenTelemetryTracing(Tracing):
    """
    Spans of the messaging semantic conventions:

    - "publish" (PRODUCER) for every publish call: until the packet is written
      for QoS 0, until the final acknowledgement for QoS 1/2. Its context is
      injected into the user properties of PUBLISH.
    - "process" (CONSUMER) for MQTTClient.trace(): the context from the
      user properties of the message is its parent, so the processing
      continues the trace of the producer.
    """

    def __init__(
        self,
        tracer_provider: Optional[TracerProvider] = None,
        propagator: Optional[TextMapPropagator] = None,
        attributes: Optional[Mapping[str, AttributeValue]] = None,
    ) -> None:
        """
        :param tracer_provider: the global one by default
        :param propagator: format of the trace context in user properties, the
            global one by default (W3C traceparent and baggage)
        :param attributes: added to every span, e.g. a client name
        """
        self._tracer = trace.get_tracer("zenmqtt", tracer_provider=tracer_provider)
        self._propagator = propagator

        self._attributes: dict[str, AttributeValue] = {
            "messaging.system": "mqtt",
            **(attributes or {}),
        }

    def start_publish(
        self,
        client_id: str,
        topic: str,
        payload: bytes,
        qos: int,
        retain: bool,
        properties: PublishProperties,
    ) -> PublishTrace:
        span = self._tracer.start_span(
            "publish",
            kind=SpanKind.PRODUCER,
            attributes={
                **self._attributes,
                "messaging.operation.name": "publish",
                "messaging.operation.type": "send",
                "messaging.destination.name": topic,
                "messaging.client.id": client_id,
                "messaging.message.body.size": len(payload),
                "mqtt.qos": qos,
                "mqtt.retain": retain,
            },
        )

        carrier: dict[str, str] = {}
        self._get_propagator().inject(carrier, trace.set_span_in_context(span))

        if carrier:
            # the context replaces a context of the application, e.g. of a
            # message which is forwarded
            user_properties = [
                (name, value)
                for name, value in properties.get("user_property", ())
                if name not in carrier
            ]
            user_properties.extend(carrier.items())

            properties = cast(
                PublishProperties, {**properties, "user_property": user_properties}
            )

        return _PublishSpan(properties, span)

    @contextmanager
    def trace(self, client_id: str, message: PublishResult) -> Iterator[None]:
        # without a context in the message, the current span is the parent
        parent = self._get_propagator().extract(
            message.properties.get("user_property", ()),
            context.get_current(),
            getter=_USER_PROPERTIES_GETTER,
        )

        with self._tracer.start_as_current_span(
            "process",
            context=parent,
            kind=SpanKind.CONSUMER,
            attributes={
                **self._attributes,
                "messaging.operation.name": "process",
                "messaging.operation.type": "process",
                "messaging.destination.name": message.topic,
                "messaging.client.id": client_id,
                "messaging.message.body.size": len(message.payload),
                "mqtt.qos": message.qos,
                "mqtt.retain": message.retain,
                "mqtt.dup": message.dup,
            },
        ):
            yield

    def _get_propagator(self) -> TextMapPropagator:
        # the global propagator may be configured after the client is created
        return self._propagator or propagate.get_global_textmap()
