"""
Tracing of messages: a producer span for every publish, and a consumer span for
the processing of a received message. The trace context travels in the user
properties of PUBLISH, so a consumer span continues the trace of the producer.

Tracing is the base class with no-op methods; the OpenTelemetry implementation
is zenmqtt.instrumentation.opentelemetry.OpenTelemetryTracing.
"""
from contextlib import AbstractContextManager, nullcontext
from types import TracebackType
from typing import Optional

from zenmqtt.instrumentation.guard import HookErrors
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

    def trace(
        self, client_id: str, message: PublishResult
    ) -> AbstractContextManager[None]:
        """
        Wraps the processing of a received message, see MQTTClient.trace().
        """
        return nullcontext()


class _GuardedPublishTrace(PublishTrace):
    def __init__(self, trace: PublishTrace, errors: HookErrors) -> None:
        super().__init__(trace.properties)
        self._trace = trace
        self._errors = errors

    def end(
        self,
        result: Optional[PublishAcknowledgement],
        error: Optional[BaseException],
    ) -> None:
        try:
            self._trace.end(result, error)
        except Exception as exc:
            self._errors.report("PublishTrace.end", exc)


class _GuardedTrace(AbstractContextManager[None]):
    """
    Exceptions of the tracing context are reported, and it never suppresses an
    exception of the processing.
    """

    def __init__(
        self, context: AbstractContextManager[None], errors: HookErrors
    ) -> None:
        self._context = context
        self._errors = errors
        self._entered = False

    def __enter__(self) -> None:
        try:
            self._context.__enter__()
            self._entered = True
        except Exception as exc:
            self._errors.report("trace.__enter__", exc)

    def __exit__(
        self,
        exc_type: Optional[type[BaseException]],
        exc: Optional[BaseException],
        traceback: Optional[TracebackType],
    ) -> None:
        if not self._entered:
            return

        try:
            self._context.__exit__(exc_type, exc, traceback)
        except Exception as error:
            self._errors.report("trace.__exit__", error)


class _GuardedTracing(Tracing):
    """
    Calls a tracing implementation, its exceptions are reported and never
    reach the client: e.g. a publish which the server acknowledged doesn't
    fail because its span couldn't be ended.
    """

    def __init__(self, tracing: Tracing) -> None:
        self.wrapped = tracing
        self._errors = HookErrors(type(tracing).__name__, "mqtt_tracing.hook_error")

    @property
    def errors(self) -> dict[str, int]:
        """Number of exceptions per hook."""
        return self._errors.errors

    def start_publish(
        self,
        client_id: str,
        topic: str,
        payload: bytes,
        qos: int,
        retain: bool,
        properties: PublishProperties,
    ) -> PublishTrace:
        try:
            trace = self.wrapped.start_publish(
                client_id, topic, payload, qos, retain, properties
            )
        except Exception as exc:
            self._errors.report("start_publish", exc)
            return PublishTrace(properties)

        return _GuardedPublishTrace(trace, self._errors)

    def trace(
        self, client_id: str, message: PublishResult
    ) -> AbstractContextManager[None]:
        try:
            context = self.wrapped.trace(client_id, message)
        except Exception as exc:
            self._errors.report("trace", exc)
            return nullcontext()

        return _GuardedTrace(context, self._errors)


def guard_tracing(tracing: Optional[Tracing]) -> Optional[Tracing]:
    """
    Wraps a tracing implementation, so its exceptions never reach the client;
    None and a guarded one are returned as they are.
    """
    if tracing is None or isinstance(tracing, _GuardedTracing):
        return tracing

    return _GuardedTracing(tracing)
