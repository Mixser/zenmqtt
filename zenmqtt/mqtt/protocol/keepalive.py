import asyncio
from asyncio import Task
from logging import getLogger
from typing import Optional

from zenmqtt.exceptions import ConnectionLostError, NotConnectedError
from zenmqtt.mqtt.packet import BytesReader, FixedHeader
from zenmqtt.mqtt.ping import pack_pingreq_packet, parse_pingresp_packet
from zenmqtt.mqtt.protocol.context import ProtocolContext

logger = getLogger(__name__)


class KeepAlive:
    """PINGREQ/PINGRESP and keep alive (MQTT 5, 3.1.2.10)."""

    def __init__(self, context: ProtocolContext) -> None:
        self._context = context

        # PINGRESP has no packet identifier, so only one PINGREQ is in flight
        self.ping_future: Optional[asyncio.Future[None]] = None
        self._ping_sent_at = 0.0

        self.task: Optional[Task[None]] = None

    async def ping(self) -> None:
        connection = self._context.ensure_connected()

        # concurrent callers share the in-flight PINGREQ
        if (future := self.ping_future) is None:
            future = asyncio.get_running_loop().create_future()
            self.ping_future = future

            logger.debug("mqtt_protocol.send_pingreq_packet")
            self._ping_sent_at = self._context.now()
            try:
                await self._context.write(connection, pack_pingreq_packet())
            except BaseException:
                self.ping_future = None
                raise

        # cancellation of one caller must not affect the others
        await asyncio.shield(future)

    async def handle_pingresp(
        self, fixed_header: FixedHeader, reader: BytesReader
    ) -> None:
        parse_pingresp_packet(fixed_header, reader)

        logger.debug("mqtt_protocol.handle_pingresp_packet")

        future, self.ping_future = self.ping_future, None

        if future and not future.done():
            self._context.metrics.on_ping(self._context.now() - self._ping_sent_at)
            future.set_result(None)

    def start(self, keepalive: int) -> None:
        """
        :param keepalive: seconds between control packets sent by the client,
            0 disables keep alive
        """
        if keepalive:
            self.task = asyncio.create_task(
                self._keep_alive_loop(keepalive), name="mqtt-protocol-keep-alive"
            )

    def on_connection_lost(self, exc: Exception) -> None:
        if self.task:
            self.task.cancel()
            self.task = None

        future, self.ping_future = self.ping_future, None

        if future and not future.done():
            future.set_exception(exc)

    async def _keep_alive_loop(self, keepalive: int) -> None:
        """
        Sends PINGREQ if the client didn't send any packet within the keep alive
        period, and closes the connection if PINGRESP doesn't come in time.
        """
        connection = self._context.ensure_connected()
        loop = asyncio.get_running_loop()

        while True:
            last_write_at = connection.last_write_at or loop.time()
            delay = last_write_at + keepalive - loop.time()

            if delay > 0:
                await asyncio.sleep(delay)
                continue

            try:
                await asyncio.wait_for(self.ping(), keepalive)
            except asyncio.TimeoutError:
                logger.warning("mqtt_protocol.keep_alive.pingresp_timeout")
                self._context.metrics.on_ping_timeout()
                # the read loop handles the lost connection
                await connection.disconnect()
                return
            except (NotConnectedError, ConnectionLostError):
                return
