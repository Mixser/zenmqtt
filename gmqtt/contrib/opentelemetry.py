"""
OpenTelemetry metrics for the client, requires `pip install gmqtt[otel]`.

Messaging metrics follow the OpenTelemetry semantic conventions, MQTT
specific metrics use the `gmqtt.` prefix. Metrics can be exported with any
OpenTelemetry exporter: OTLP, Prometheus, console, etc.

Topics are not used as attributes: the number of topics isn't limited, so it
would make the number of time series unlimited too.
"""
from typing import Mapping, Optional, Sequence

from opentelemetry.metrics import Meter, get_meter
from opentelemetry.util.types import AttributeValue

from gmqtt.metrics import MetricsCollector
from gmqtt.mqtt.packet import PacketType
from gmqtt.mqtt.reason_codes import FAILURE_REASON_CODE

# recommended by the semantic conventions for durations in seconds
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
        meter = meter or get_meter("gmqtt")

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
            "gmqtt.connect.duration",
            unit="s",
            description="Time from sending CONNECT to receiving CONNACK",
            explicit_bucket_boundaries_advisory=_DURATION_BUCKETS,
        )
        self._active_connections = meter.create_up_down_counter(
            "gmqtt.connections.active",
            unit="{connection}",
            description="Number of established connections",
        )
        self._closed_connections = meter.create_counter(
            "gmqtt.connections.closed",
            unit="{connection}",
            description="Number of closed connections",
        )
        self._sent_packets = meter.create_counter(
            "gmqtt.packets.sent",
            unit="{packet}",
            description="Number of sent packets",
        )
        self._received_packets = meter.create_counter(
            "gmqtt.packets.received",
            unit="{packet}",
            description="Number of received packets",
        )
        self._sent_bytes = meter.create_counter(
            "gmqtt.bytes.sent",
            unit="By",
            description="Number of sent bytes",
        )
        self._received_bytes = meter.create_counter(
            "gmqtt.bytes.received",
            unit="By",
            description="Number of received bytes",
        )
        self._buffered_messages = meter.create_gauge(
            "gmqtt.messages.buffered",
            unit="{message}",
            description=(
                "Number of incoming messages waiting for the application, "
                "reported while it's above the warning threshold"
            ),
        )
        self._send_quota_wait = meter.create_histogram(
            "gmqtt.send_quota.wait.duration",
            unit="s",
            description='Time a publish waited because of the server "Receive Maximum"',
            explicit_bucket_boundaries_advisory=_DURATION_BUCKETS,
        )
        self._resent_messages = meter.create_counter(
            "gmqtt.messages.resent",
            unit="{message}",
            description="Number of pending messages re-sent after reconnect",
        )
        self._duplicated_messages = meter.create_counter(
            "gmqtt.messages.duplicated",
            unit="{message}",
            description="Number of duplicated QoS 2 messages, not delivered again",
        )
        self._ping_duration = meter.create_histogram(
            "gmqtt.ping.duration",
            unit="s",
            description="Time from sending PINGREQ to receiving PINGRESP",
            explicit_bucket_boundaries_advisory=_DURATION_BUCKETS,
        )
        self._reconnect_attempts = meter.create_counter(
            "gmqtt.reconnect.attempts",
            unit="{attempt}",
            description="Number of automatic reconnect attempts",
        )
        self._reconnect_give_ups = meter.create_counter(
            "gmqtt.reconnect.give_ups",
            unit="{event}",
            description="Number of times automatic reconnect stopped for good",
        )
        self._ping_timeouts = meter.create_counter(
            "gmqtt.ping.timeouts",
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
            1, {**self._attributes, "gmqtt.connection.lost": lost}
        )

    def on_packet_sent(self, packet_type: PacketType, size: int) -> None:
        attributes = {**self._attributes, "mqtt.packet.type": packet_type.name}

        self._sent_packets.add(1, attributes)
        self._sent_bytes.add(size, attributes)

    def on_packet_received(self, packet_type: PacketType, size: int) -> None:
        attributes = {**self._attributes, "mqtt.packet.type": packet_type.name}

        self._received_packets.add(1, attributes)
        self._received_bytes.add(size, attributes)

    def on_publish_completed(self, qos: int, reason_code: int, duration: float) -> None:
        attributes = {
            **self._with_reason_code(reason_code),
            "messaging.operation.name": "publish",
            "messaging.operation.type": "send",
            "mqtt.qos": qos,
        }

        self._operation_duration.record(duration, attributes)
        self._sent_messages.add(1, attributes)

    def on_message_received(self, qos: int, duplicate: bool) -> None:
        attributes = {
            **self._attributes,
            "messaging.operation.name": "receive",
            "messaging.operation.type": "receive",
            "mqtt.qos": qos,
        }

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
