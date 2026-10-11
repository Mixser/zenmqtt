from logging import getLogger
from typing import Final, Optional

from zenmqtt.mqtt.protocol.context import ProtocolContext

logger = getLogger(__name__)

# number of messages waiting for the application, starting from which the
# client warns about a slow application
BUFFERED_MESSAGES_WARNING: Final[int] = 1000
# seconds between warnings about a slow application
_WARNING_INTERVAL: Final[float] = 10.0
# seconds between reports of the buffer size to metrics while it's above the
# warning threshold; it changes with every message, the last value is enough
_REPORT_INTERVAL: Final[float] = 0.1


class BufferMonitor:
    """
    Watches the size of the buffer of incoming messages: while at least
    `threshold` messages wait for the application, a warning is logged and the
    size is reported by metrics.
    """

    def __init__(self, context: ProtocolContext) -> None:
        self._context = context

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
                self._context.metrics.on_messages_buffered(size)

            return

        now = self._context.now()

        if (
            not self._overloaded
            or self._reported_at is None
            or now - self._reported_at >= _REPORT_INTERVAL
        ):
            self._context.metrics.on_messages_buffered(size)
            self._reported_at = now

        self._overloaded = True

        if self._warned_at is None or now - self._warned_at >= _WARNING_INTERVAL:
            logger.warning(
                "mqtt_protocol.slow_consumer: %s incoming messages wait for the "
                "application, it doesn't read client.messages fast enough",
                size,
            )
            self._warned_at = now
