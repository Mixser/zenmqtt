import asyncio
from typing import Optional

from gmqtt.connection import MQTTConnection
from gmqtt.exceptions import NotConnectedError
from gmqtt.metrics import MetricsCollector
from gmqtt.mqtt.limits import DEFAULT_SERVER_LIMITS, ServerLimits
from gmqtt.mqtt.packet import PacketType


class ProtocolContext:
    """
    State shared by the parts of the protocol: the current connection, limits
    of the server and metrics.
    """

    def __init__(self, metrics: MetricsCollector) -> None:
        self.metrics = metrics

        self.connection: Optional[MQTTConnection] = None
        # True only between successful CONNACK and loss of the connection
        self.connected = False

        # limits of the server from the last CONNACK
        self.server_limits: ServerLimits = DEFAULT_SERVER_LIMITS

    def ensure_connected(self) -> MQTTConnection:
        if not self.connected or not self.connection or self.connection.is_closing():
            raise NotConnectedError()

        return self.connection

    async def write(self, connection: MQTTConnection, packet: bytes) -> None:
        await connection.write(packet)

        self.metrics.on_packet_sent(PacketType(packet[0] >> 4), len(packet))

    @staticmethod
    def now() -> float:
        return asyncio.get_running_loop().time()
