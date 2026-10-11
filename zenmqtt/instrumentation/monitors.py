"""
Monitors which watch the state of the client and report problems by logs and
metrics. They don't change the behaviour of the client.
"""
import asyncio
from logging import getLogger
from typing import Callable, Final, Optional

from zenmqtt.instrumentation.metrics import MetricsCollector
from zenmqtt.mqtt.publish import PublishResult

logger = getLogger(__name__)

# number of messages waiting for the application, starting from which the
# client warns about a slow application
BUFFERED_MESSAGES_WARNING: Final[int] = 1000
# seconds between warnings about a slow application
_WARNING_INTERVAL: Final[float] = 10.0
# seconds between reports of the buffer size to metrics while it's above the
# warning threshold; it changes with every message, the last value is enough
_REPORT_INTERVAL: Final[float] = 0.1

# seconds after which a not acknowledged message which holds back acks of
# later messages is logged
ACK_BLOCKED_WARNING: Final[float] = 30.0


def _now() -> float:
    return asyncio.get_running_loop().time()


class BufferMonitor:
    """
    Watches the size of the buffer of incoming messages: while at least
    `threshold` messages wait for the application, a warning is logged and the
    size is reported by metrics.
    """

    def __init__(self, metrics: MetricsCollector) -> None:
        self._metrics = metrics

        self.threshold = BUFFERED_MESSAGES_WARNING
        # the buffer reached the threshold
        self._overloaded = False
        self._reported_at: Optional[float] = None
        self._warned_at: Optional[float] = None

    def update(self, size: int) -> None:
        """
        Called on every change of the buffer. Reports the size when it reaches
        the threshold, then at most every _REPORT_INTERVAL while it's above,
        and once when it falls below.
        """
        if size < self.threshold:
            if self._overloaded:
                self._overloaded = False
                self._metrics.on_messages_buffered(size)

            return

        now = _now()

        if (
            not self._overloaded
            or self._reported_at is None
            or now - self._reported_at >= _REPORT_INTERVAL
        ):
            self._metrics.on_messages_buffered(size)
            self._reported_at = now

        self._overloaded = True

        if self._warned_at is None or now - self._warned_at >= _WARNING_INTERVAL:
            logger.warning(
                "mqtt_protocol.slow_consumer: %s incoming messages wait for the "
                "application, it doesn't read client.messages fast enough",
                size,
            )
            self._warned_at = now


class AckBlockedMonitor:
    """
    Acks are sent in the order of receiving (MQTT 5, 4.6), so one message which
    isn't acknowledged holds back the acks of later ones. Logs a warning once
    per message when it does so for ACK_BLOCKED_WARNING seconds; one timer for
    the current first message, not per message.
    """

    def __init__(self) -> None:
        self._message: Optional[PublishResult] = None
        self._timer: Optional[asyncio.TimerHandle] = None

    def watch(
        self,
        message: PublishResult,
        received_at: float,
        waiting: Callable[[], Optional[int]],
    ) -> None:
        """
        Called when `message` holds back acks of later messages.

        :param received_at: loop time
        :param waiting: the number of messages which wait for `message`, None
            when it doesn't hold back acks anymore
        """
        if message is self._message:
            return

        if self._timer:
            self._timer.cancel()

        self._message = message
        self._timer = asyncio.get_running_loop().call_at(
            received_at + ACK_BLOCKED_WARNING, self._warn, received_at, waiting
        )

    def _warn(self, received_at: float, waiting: Callable[[], Optional[int]]) -> None:
        self._timer = None
        message = self._message

        # acknowledged meanwhile or received by the previous connection
        if message is None or (count := waiting()) is None:
            return

        logger.warning(
            "mqtt_protocol.ack_blocked: the message pid:%s topic:%s isn't "
            "acknowledged for %.0f s; acks are sent in the order of receiving, "
            "so %s later messages wait for it",
            message.packet_identifier,
            message.topic,
            _now() - received_at,
            count,
        )
