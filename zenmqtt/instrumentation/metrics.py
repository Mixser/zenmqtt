from typing import Any, Callable, Final, Optional, Sequence

from zenmqtt.instrumentation.guard import HookErrors
from zenmqtt.mqtt.packet import PacketType


class MetricsCollector:
    """
    Receives events of the client to build metrics from them.

    The default implementation does nothing, subclasses override only the
    events they need. Methods are called from the event loop, so they must
    be fast and must not block.

    An exception in a method doesn't affect the client: it's logged with the
    traceback the first time, then at most once a minute with the number of
    errors. Methods are taken from the collector when the client is created.

    Durations are in seconds.
    """

    def on_connect(self, reason_code: int, duration: float) -> None:
        """CONNACK is received, duration is measured from sending CONNECT"""

    def on_connection_closed(self, lost: bool) -> None:
        """
        A connection which was established by CONNACK is closed;
        lost is False only if the client called disconnect
        """

    def on_packet_sent(self, packet_type: PacketType, size: int) -> None:
        """A packet is written to the connection, size includes the fixed header"""

    def on_packet_received(self, packet_type: PacketType, size: int) -> None:
        """A packet is read from the connection, size includes the fixed header"""

    def on_publish_completed(self, qos: int, reason_code: int, duration: float) -> None:
        """
        QoS 0: PUBLISH is written, duration is the time of writing;
        QoS 1/2: the final acknowledgement is received, duration is measured
        from sending PUBLISH
        """

    def on_message_received(self, qos: int, duplicate: bool) -> None:
        """
        An incoming PUBLISH is handled; duplicate is True for a QoS 2 message
        which was already delivered, and for a QoS 1/2 message which the
        server sent again before the ack; duplicates aren't delivered again
        """

    def on_messages_buffered(self, count: int) -> None:
        """
        Number of incoming messages which wait for the application, reported
        when it reaches the warning threshold of the client (the application
        reads messages too slowly), then at most every 0.1 s while it's above,
        and once when it falls below
        """

    def on_send_quota_wait(self, duration: float) -> None:
        """A QoS 1/2 publish waited because the server's "Receive Maximum" was reached"""

    def on_messages_resent(self, count: int) -> None:
        """Pending messages of the session are re-sent after reconnect"""

    def on_ping(self, duration: float) -> None:
        """PINGRESP is received, duration is measured from sending PINGREQ"""

    def on_reconnect_attempt(self, attempt: int, delay: float) -> None:
        """
        Automatic reconnect starts an attempt (1, 2, ...) after the delay;
        a successful attempt is followed by on_connect
        """

    def on_reconnect_gave_up(self) -> None:
        """Automatic reconnect stopped: no attempts left or a non-retryable error"""

    def on_ping_timeout(self) -> None:
        """Keep alive closes the connection because PINGRESP didn't come in time"""

    def on_subscribe_completed(
        self, reason_codes: Sequence[int], duration: float
    ) -> None:
        """SUBACK is received, duration is measured from sending SUBSCRIBE"""

    def on_unsubscribe_completed(
        self, reason_codes: Sequence[int], duration: float
    ) -> None:
        """UNSUBACK is received, duration is measured from sending UNSUBSCRIBE"""


class _GuardedMetrics(MetricsCollector):
    """
    Calls the hooks of a collector, an exception in a hook is logged and never
    reaches the client. Hooks which the collector doesn't override stay the
    no-op methods of MetricsCollector, without a wrapper.
    """

    def __init__(self, metrics: MetricsCollector) -> None:
        self.wrapped = metrics
        self._errors = HookErrors(type(metrics).__name__, "mqtt_metrics.hook_error")

        for name in _HOOKS:
            hook = getattr(metrics, name)

            if getattr(hook, "__func__", None) is not getattr(MetricsCollector, name):
                setattr(self, name, self._guard(name, hook))

    @property
    def errors(self) -> dict[str, int]:
        """Number of exceptions per hook."""
        return self._errors.errors

    def _guard(self, name: str, hook: Callable[..., None]) -> Callable[..., None]:
        report = self._errors.report

        def guarded(*args: Any, **kwargs: Any) -> None:
            try:
                hook(*args, **kwargs)
            except Exception as exc:
                report(name, exc)

        return guarded


_HOOKS: Final[tuple[str, ...]] = tuple(
    name for name in vars(MetricsCollector) if name.startswith("on_")
)


def guard_metrics(metrics: Optional[MetricsCollector]) -> MetricsCollector:
    """
    Wraps a collector, so its exceptions never reach the client; a guarded
    collector is returned as it is.
    """
    if metrics is None:
        return MetricsCollector()

    # nothing to guard: the default collector, or one guarded already
    if type(metrics) is MetricsCollector or isinstance(metrics, _GuardedMetrics):
        return metrics

    return _GuardedMetrics(metrics)
