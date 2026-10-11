"""
Tracing of messages: a producer span for every publish, and a consumer span for
the processing of a received message. The trace context travels in the user
properties of PUBLISH, so a consumer span continues the trace of the producer.

Tracing is the base class with no-op methods; the OpenTelemetry implementation
is zenmqtt.instrumentation.opentelemetry.OpenTelemetryTracing.
"""
from contextlib import AbstractContextManager, nullcontext
from typing import Optional

from zenmqtt.mqtt.publish import (
    PublishAcknowledgement,
    PublishProperties,
    PublishResult,
)


class PublishTrace:
    """
    The trace of one publish call. `properties` are sent instead of the
    properties of the call, e.g. with the trace context in user properties.
    """

    def __init__(self, properties: PublishProperties) -> None:
        self.properties = properties

    def end(
        self,
        result: Optional[PublishAcknowledgement],
        error: Optional[BaseException],
    ) -> None:
        """
        Called once when the publish call returns: `result` is the final
        acknowledgement (None for QoS 0), `error` is the exception of the call.
        """


class Tracing:
    def start_publish(
        self,
        client_id: str,
        topic: str,
        payload: bytes,
        qos: int,
        retain: bool,
        properties: PublishProperties,
    ) -> PublishTrace:
        """Called when a publish call starts, before it waits for a connection."""
        return PublishTrace(properties)

    def processing(
        self, client_id: str, message: PublishResult
    ) -> AbstractContextManager[None]:
        """
        Wraps the processing of a received message, see MQTTClient.processing().
        """
        return nullcontext()
