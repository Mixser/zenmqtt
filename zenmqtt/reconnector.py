import asyncio
from logging import getLogger
from typing import Awaitable, Callable, Optional

from zenmqtt.exceptions import ConnectionLostError, MQTTConnectionError
from zenmqtt.metrics import MetricsCollector
from zenmqtt.mqtt.connect import ConnectionResult
from zenmqtt.mqtt.protocol import MQTTProtocol
from zenmqtt.mqtt.reason_codes import FAILURE_REASON_CODE
from zenmqtt.reconnect import (
    NON_RETRYABLE_CONNACK_REASON_CODES,
    NON_RETRYABLE_DISCONNECT_REASON_CODES,
    ReconnectPolicy,
)

logger = getLogger(__name__)


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
            except (OSError, asyncio.TimeoutError, MQTTConnectionError) as exc:
                logger.warning("mqtt_client.reconnect.failed: %r", exc)
                continue

            if connack.result_code >= FAILURE_REASON_CODE:
                if connack.result_code in NON_RETRYABLE_CONNACK_REASON_CODES:
                    logger.error(
                        "mqtt_client.reconnect.stopped: the server rejected the "
                        "connection with reason 0x%02X",
                        connack.result_code,
                    )
                    await self._give_up(lost)
                    return False

                logger.warning(
                    "mqtt_client.reconnect.rejected: reason 0x%02X",
                    connack.result_code,
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
