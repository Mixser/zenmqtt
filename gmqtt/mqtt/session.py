import asyncio
import logging
from typing import Final, Optional, Protocol

from gmqtt.mqtt.publish import PublishProperties, PubrelProperties

PacketIdentifier = int
PublishPacketDefinition = tuple[str, bytes, int, bool, Optional[PublishProperties]]
PubrelPacketDefinition = tuple[int, Optional[PubrelProperties]]

MAX_PACKET_IDENTIFIER: Final[int] = 2**16 - 1

logger = logging.getLogger(__name__)


def _initialize_packet_identifiers_pool(pool_size: int = MAX_PACKET_IDENTIFIER):
    assert pool_size <= MAX_PACKET_IDENTIFIER

    pool: asyncio.Queue[PacketIdentifier] = asyncio.Queue(maxsize=pool_size)

    for i in range(1, pool_size + 1):
        pool.put_nowait(i)

    return pool


class MQTTSession(Protocol):
    async def reset(self):
        ...

    async def acquire_packet_identifier(self) -> PacketIdentifier:
        ...

    async def release_packet_identifier(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        ...

    async def register_outgoing_publish_packet(
        self,
        packet_identifier: PacketIdentifier,
        topic: str,
        payload: bytes,
        qos: int,
        retain: bool,
        properties: Optional[PublishProperties],
    ) -> None:
        ...

    async def register_outgoing_pubrel_packet(
        self,
        packet_identifier: PacketIdentifier,
        reason_code: int,
        properties: Optional[PubrelProperties] = None,
    ) -> None:
        ...

    async def handle_publish_packet_acknowledge(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        ...

    async def handle_pubrel_packet_acknowledge(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        ...


class _InMemorySession(MQTTSession):
    def __init__(
        self,
    ) -> None:
        self._outgoing_publish_packets: dict[
            PacketIdentifier, PublishPacketDefinition
        ] = {}

        self._outgoing_pubrel_packets: dict[
            PacketIdentifier, PubrelPacketDefinition
        ] = {}

        self._packet_identifiers_pool = _initialize_packet_identifiers_pool()

    async def reset(self):
        self._packet_identifiers_pool = _initialize_packet_identifiers_pool()
        self._outgoing_pubrel_packets = {}
        self._outgoing_publish_packets = {}

    async def acquire_packet_identifier(self) -> PacketIdentifier:
        packet_identifier = await self._packet_identifiers_pool.get()
        logger.debug("mqtt_session.acquire_packet_identifier pid:%s", packet_identifier)
        return packet_identifier

    async def release_packet_identifier(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        logger.debug("mqtt_session.release_packet_identifier pid:%s", packet_identifier)
        await self._packet_identifiers_pool.put(packet_identifier)

    async def register_outgoing_publish_packet(
        self,
        packet_identifier: PacketIdentifier,
        topic: str,
        payload: bytes,
        qos: int,
        retain: bool,
        properties: Optional[PublishProperties],
    ) -> None:
        logger.debug(
            "mqtt_session.register_outgoing_publish_packet pid:%s", packet_identifier
        )
        self._outgoing_publish_packets[packet_identifier] = (
            topic,
            payload,
            qos,
            retain,
            properties,
        )

    async def register_outgoing_pubrel_packet(
        self,
        packet_identifier: PacketIdentifier,
        reason_code: int,
        properties: Optional[PubrelProperties] = None,
    ) -> None:
        logger.debug(
            "mqtt_session.register_outgoing_pubrel_packet pid:%s", packet_identifier
        )

        self._outgoing_pubrel_packets[packet_identifier] = (reason_code, properties)

    async def handle_publish_packet_acknowledge(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        logger.debug(
            "mqtt_session.handle_publish_packet_acknowledge pid:%s", packet_identifier
        )

        self._outgoing_publish_packets.pop(packet_identifier)

    async def handle_pubrel_packet_acknowledge(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        logger.debug(
            "mqtt_session.handle_pubrel_packet_acknowledge pid:%s", packet_identifier
        )

        self._outgoing_pubrel_packets.pop(packet_identifier)


def build_in_memory_session() -> MQTTSession:
    return _InMemorySession()
