import asyncio
from typing import Optional

from zenmqtt.connection import MQTTConnection
from zenmqtt.exceptions import NotConnectedError
from zenmqtt.instrumentation.metrics import MetricsCollector
from zenmqtt.mqtt.limits import DEFAULT_SERVER_LIMITS, ServerLimits
from zenmqtt.mqtt.packet import PacketType


class ProtocolContext:
    """
    State shared by the parts of the protocol: the current connection, limits
    of the server and metrics.

    The state is changed only by MQTTProtocol, with the methods below; the
    parts read it through the read-only properties.
    """

    def __init__(self, metrics: MetricsCollector) -> None:
        self.metrics = metrics

        self._connection: Optional[MQTTConnection] = None
        self._connected = False
        self._server_limits: ServerLimits = DEFAULT_SERVER_LIMITS

    @property
    def connection(self) -> Optional[MQTTConnection]:
        """The current connection, also before CONNACK and after its loss."""
        return self._connection

    @property
    def connected(self) -> bool:
        """True only between successful CONNACK and loss of the connection."""
        return self._connected

    @property
    def server_limits(self) -> ServerLimits:
        """Limits of the server from the last CONNACK."""
        return self._server_limits

    # called by MQTTProtocol only

    def set_connection(self, connection: MQTTConnection) -> None:
        self._connection = connection

    def set_server_limits(self, server_limits: ServerLimits) -> None:
        self._server_limits = server_limits

    def mark_connected(self) -> None:
        self._connected = True

    def mark_disconnected(self) -> None:
        self._connected = False

    def ensure_connected(self) -> MQTTConnection:
        connection = self._connection

        if not self._connected or not connection or connection.is_closing():
            raise NotConnectedError()

        return connection

    async def write(self, connection: MQTTConnection, packet: bytes) -> None:
        await connection.write(packet)

        self.metrics.on_packet_sent(PacketType(packet[0] >> 4), len(packet))

    @staticmethod
    def now() -> float:
        return asyncio.get_running_loop().time()
