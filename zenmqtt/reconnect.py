import asyncio
import random
from dataclasses import dataclass
from logging import getLogger
from typing import Awaitable, Callable, Final, Iterator, Optional

from zenmqtt.exceptions import ClientConnectionError, ConnectionLostError
from zenmqtt.instrumentation.metrics import MetricsCollector
from zenmqtt.mqtt.connect import ConnectionResult
from zenmqtt.mqtt.protocol import MQTTProtocol
from zenmqtt.mqtt.reason_codes import FAILURE_REASON_CODE

logger = getLogger(__name__)

# CONNACK reason codes which mean that a retry can't help: the client has to
# change its configuration (credentials, client id, will, ...)
NON_RETRYABLE_CONNACK_REASON_CODES: Final[frozenset[int]] = frozenset(
    {
        0x81,  # Malformed Packet
        0x82,  # Protocol Error
        0x84,  # Unsupported Protocol Version
        0x85,  # Client Identifier not valid
        0x86,  # Bad User Name or Password
        0x87,  # Not authorized
        0x8A,  # Banned
        0x8C,  # Bad authentication method
        0x90,  # Topic Name invalid (will topic)
        0x95,  # Packet too large
        0x99,  # Payload format invalid (will payload)
        0x9A,  # Retain not supported (will retain)
        0x9B,  # QoS not supported (will QoS)
        0x9C,  # Use another server
        0x9D,  # Server moved
    }
)

# DISCONNECT reason codes of the server after which the client doesn't reconnect
NON_RETRYABLE_DISCONNECT_REASON_CODES: Final[frozenset[int]] = frozenset(
    {
        0x87,  # Not authorized
        # another client connected with the same client id: reconnecting would
        # take the session back, and both clients would kick each other forever
        0x8E,  # Session taken over
        0x9C,  # Use another server
        0x9D,  # Server moved
    }
)


@dataclass(frozen=True, slots=True)
class ReconnectPolicy:
    """
    Exponential backoff between reconnect attempts: the first attempt is made
    after initial_delay, every next delay is multiplied by multiplier up to
    max_delay. Each delay is reduced by a random part up to jitter (0.5 means
    up to 50%), so many clients don't reconnect to a restarted server at the
    same moment.

    Times are in seconds.
    """

    initial_delay: float = 1.0
    max_delay: float = 60.0
    multiplier: float = 2.0
    jitter: float = 0.5
    # None means the client never gives up
    max_attempts: Optional[int] = None
    # time for TCP/TLS connect and CONNACK of one attempt
    connect_timeout: float = 10.0

    def __post_init__(self) -> None:
        if self.initial_delay < 0 or self.max_delay < self.initial_delay:
            raise ValueError("Expected 0 <= initial_delay <= max_delay")

        if self.multiplier < 1:
            raise ValueError("Expected multiplier >= 1")

        if not 0 <= self.jitter <= 1:
            raise ValueError("Expected 0 <= jitter <= 1")

        if self.max_attempts is not None and self.max_attempts < 1:
            raise ValueError("Expected max_attempts >= 1 or None")

        if self.connect_timeout <= 0:
            raise ValueError("Expected connect_timeout > 0")

    def delays(self) -> Iterator[float]:
        """Delays before each attempt."""
        delay = self.initial_delay
        attempt = 0

        while self.max_attempts is None or attempt < self.max_attempts:
            yield delay * (1 - self.jitter * random.random())

            attempt += 1
            delay = min(delay * self.multiplier, self.max_delay)


DEFAULT_RECONNECT_POLICY: Final[ReconnectPolicy] = ReconnectPolicy()


class Reconnector:
    """
    Waits until the connection is lost and reconnects with exponential backoff
    of the policy. It stops after a non-retryable reason code of the server or
    when there are no attempts left.

    The owner reacts to the events:

    - connect: makes one connection attempt (without Clean Start);
    - connection_lost: the connection is lost, before the first attempt;
    - reconnected: an attempt succeeded;
    - gave_up: the reconnector stopped for good.
    """

    def __init__(
        self,
        policy: ReconnectPolicy,
        protocol: MQTTProtocol,
        metrics: MetricsCollector,
        *,
        connect: Callable[[], Awaitable[ConnectionResult]],
        connection_lost: Callable[[ConnectionLostError], Awaitable[None]],
        reconnected: Callable[[ConnectionResult], Awaitable[None]],
        gave_up: Callable[[Exception], Awaitable[None]],
    ) -> None:
        self._policy = policy
        self._protocol = protocol
        self._metrics = metrics

        self._connect = connect
        self._connection_lost = connection_lost
        self._reconnected = reconnected
        self._gave_up = gave_up

        self._task: Optional[asyncio.Task[None]] = None

    @property
    def running(self) -> bool:
        return self._task is not None and not self._task.done()

    def start(self) -> None:
        self._task = asyncio.create_task(self._run(), name="mqtt-client-reconnect")

    async def stop(self) -> None:
        if task := self._task:
            self._task = None
            task.cancel()

            try:
                await task
            except asyncio.CancelledError:
                pass

    async def _run(self) -> None:
        try:
            await self._reconnect_forever()
        except Exception as exc:
            logger.error("mqtt_client.reconnect.error", exc_info=exc)
            await self._give_up(ConnectionLostError())

    async def _reconnect_forever(self) -> None:
        while True:
            await self._protocol.wait_closed()

            server_disconnect = self._protocol.server_disconnect
            lost = ConnectionLostError(server_disconnect)

            logger.warning("mqtt_client.connection_lost: %s", lost)
            await self._connection_lost(lost)

            if (
                server_disconnect
                and server_disconnect.reason_code
                in NON_RETRYABLE_DISCONNECT_REASON_CODES
            ):
                logger.error(
                    "mqtt_client.reconnect.stopped: the server closed the "
                    "connection with reason 0x%02X",
                    server_disconnect.reason_code,
                )
                await self._give_up(lost)
                return

            if not await self._reconnect_with_backoff(lost):
                return

    async def _reconnect_with_backoff(self, lost: ConnectionLostError) -> bool:
        """Returns False if the reconnector gave up."""
        for attempt, delay in enumerate(self._policy.delays(), start=1):
            self._metrics.on_reconnect_attempt(attempt, delay)
            await asyncio.sleep(delay)

            logger.info("mqtt_client.reconnect.attempt: %s", attempt)

            try:
                connack = await asyncio.wait_for(
                    self._connect(), self._policy.connect_timeout
                )
            except (OSError, asyncio.TimeoutError, ClientConnectionError) as exc:
                logger.warning("mqtt_client.reconnect.failed: %r", exc)
                continue

            if connack.reason_code >= FAILURE_REASON_CODE:
                if connack.reason_code in NON_RETRYABLE_CONNACK_REASON_CODES:
                    logger.error(
                        "mqtt_client.reconnect.stopped: the server rejected the "
                        "connection with reason 0x%02X",
                        connack.reason_code,
                    )
                    await self._give_up(lost)
                    return False

                logger.warning(
                    "mqtt_client.reconnect.rejected: reason 0x%02X",
                    connack.reason_code,
                )
                continue

            logger.info("mqtt_client.reconnect.succeeded: attempt %s", attempt)

            await self._reconnected(connack)
            return True

        logger.error("mqtt_client.reconnect.stopped: no attempts left")
        await self._give_up(lost)
        return False

    async def _give_up(self, exc: Exception) -> None:
        # the task ends after this, the owner may connect again
        self._task = None
        self._metrics.on_reconnect_gave_up()

        await self._gave_up(exc)
