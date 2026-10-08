import abc
import asyncio
import dataclasses
import logging
from dataclasses import dataclass
from enum import IntEnum
from typing import Final, Optional, Protocol, Sequence, TypedDict

from gmqtt.mqtt.publish import PublishProperties

PacketIdentifier = int

MAX_PACKET_IDENTIFIER: Final[int] = 2**16 - 1

logger = logging.getLogger(__name__)


class OutgoingMessageState(IntEnum):
    # PUBLISH was sent, waiting for PUBACK (QoS 1) or PUBREC (QoS 2)
    AWAITING_ACK = 1
    # PUBREL was sent, waiting for PUBCOMP (QoS 2)
    AWAITING_COMP = 2


@dataclass(frozen=True)
class OutgoingMessage:
    __slots__ = (
        "packet_identifier",
        "topic",
        "payload",
        "qos",
        "retain",
        "properties",
        "state",
    )

    packet_identifier: PacketIdentifier
    topic: str
    payload: bytes
    qos: int
    retain: bool
    properties: PublishProperties
    state: OutgoingMessageState


class MQTTSession(Protocol):
    """
    Client side session state (MQTT 5, section 4.1):

    * QoS 1 and QoS 2 messages which have been sent to the server,
      but have not been completely acknowledged;
    * QoS 2 messages which have been received from the server,
      but have not been completely acknowledged.

    The session also owns packet identifiers: an identifier stays acquired
    while its outgoing message is pending, so a persistent implementation
    must not hand out identifiers of restored pending messages.

    Custom storages should rather inherit from BaseSession.
    """

    async def reset(self) -> None:
        """Discard the whole session state."""
        ...

    async def acquire_packet_identifier(self) -> PacketIdentifier:
        ...

    async def release_packet_identifier(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        """Release identifier which isn't bound to a message (SUBSCRIBE, ...)."""
        ...

    async def store_outgoing_message(self, message: OutgoingMessage) -> None:
        """Called before the PUBLISH packet with QoS > 0 is sent."""
        ...

    async def mark_outgoing_message_released(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        """Called on successful PUBREC; the message keeps its original order."""
        ...

    async def complete_outgoing_message(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        """
        Called on PUBACK, PUBCOMP or PUBREC with an error reason code.
        Removes the message and releases its packet identifier.
        """
        ...

    async def get_pending_outgoing_messages(self) -> Sequence[OutgoingMessage]:
        """Pending messages in the order they were stored."""
        ...

    async def register_incoming_message(
        self, packet_identifier: PacketIdentifier
    ) -> bool:
        """
        Called on incoming PUBLISH with QoS 2.
        Returns False if the message was already received (duplicate).
        """
        ...

    async def complete_incoming_message(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        """Called on incoming PUBREL."""
        ...


class SessionOptions(TypedDict, total=False):
    # how long to wait for a free packet identifier, seconds
    timeout: float


_DEFAULT_SESSION_OPTIONS: Final[SessionOptions] = {
    "timeout": 10,
}


class BaseSession(MQTTSession, abc.ABC):
    """
    Common session logic: packet identifiers, state transitions, duplicates
    detection. Implementations only provide the storage primitives below.

    The packet identifiers pool is built on the first use and skips
    identifiers of the stored pending messages, so a restored session
    doesn't reuse them.
    """

    def __init__(self, options: Optional[SessionOptions] = None) -> None:
        self._options: SessionOptions = {
            **_DEFAULT_SESSION_OPTIONS,
            **(options or {}),
        }

        self._packet_identifiers_pool: Optional[asyncio.Queue[PacketIdentifier]] = None
        self._packet_identifiers_pool_lock = asyncio.Lock()
        self._acquired_packet_identifiers: set[PacketIdentifier] = set()

    async def reset(self) -> None:
        logger.debug("mqtt_session.reset")

        await self._clear()

        # return identifiers to the same pool, so pending acquirers are not lost
        for packet_identifier in list(self._acquired_packet_identifiers):
            self._release(packet_identifier)

    async def acquire_packet_identifier(self) -> PacketIdentifier:
        pool = await self._get_packet_identifiers_pool()

        packet_identifier = await asyncio.wait_for(
            pool.get(), timeout=self._options["timeout"]
        )
        self._acquired_packet_identifiers.add(packet_identifier)

        logger.debug("mqtt_session.acquire_packet_identifier pid:%s", packet_identifier)
        return packet_identifier

    async def release_packet_identifier(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        logger.debug("mqtt_session.release_packet_identifier pid:%s", packet_identifier)
        self._release(packet_identifier)

    async def store_outgoing_message(self, message: OutgoingMessage) -> None:
        logger.debug(
            "mqtt_session.store_outgoing_message pid:%s", message.packet_identifier
        )
        await self._save_outgoing_message(message)

    async def mark_outgoing_message_released(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        logger.debug(
            "mqtt_session.mark_outgoing_message_released pid:%s", packet_identifier
        )

        if message := await self._load_outgoing_message(packet_identifier):
            await self._save_outgoing_message(
                dataclasses.replace(message, state=OutgoingMessageState.AWAITING_COMP)
            )

    async def complete_outgoing_message(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        logger.debug("mqtt_session.complete_outgoing_message pid:%s", packet_identifier)

        if await self._delete_outgoing_message(packet_identifier):
            self._release(packet_identifier)

    async def get_pending_outgoing_messages(self) -> Sequence[OutgoingMessage]:
        return await self._load_outgoing_messages()

    async def register_incoming_message(
        self, packet_identifier: PacketIdentifier
    ) -> bool:
        logger.debug("mqtt_session.register_incoming_message pid:%s", packet_identifier)

        if await self._has_incoming_message(packet_identifier):
            return False

        await self._save_incoming_message(packet_identifier)
        return True

    async def complete_incoming_message(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        logger.debug("mqtt_session.complete_incoming_message pid:%s", packet_identifier)
        await self._delete_incoming_message(packet_identifier)

    # storage primitives, implemented by subclasses

    @abc.abstractmethod
    async def _save_outgoing_message(self, message: OutgoingMessage) -> None:
        """Insert the message or update it in place, keeping its order."""

    @abc.abstractmethod
    async def _load_outgoing_message(
        self, packet_identifier: PacketIdentifier
    ) -> Optional[OutgoingMessage]:
        ...

    @abc.abstractmethod
    async def _load_outgoing_messages(self) -> Sequence[OutgoingMessage]:
        """All stored messages in the order they were inserted."""

    @abc.abstractmethod
    async def _delete_outgoing_message(
        self, packet_identifier: PacketIdentifier
    ) -> bool:
        """Returns False if there was no such message."""

    @abc.abstractmethod
    async def _save_incoming_message(self, packet_identifier: PacketIdentifier) -> None:
        ...

    @abc.abstractmethod
    async def _has_incoming_message(self, packet_identifier: PacketIdentifier) -> bool:
        ...

    @abc.abstractmethod
    async def _delete_incoming_message(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        ...

    @abc.abstractmethod
    async def _clear(self) -> None:
        """Delete all outgoing and incoming messages."""

    async def _get_packet_identifiers_pool(self) -> asyncio.Queue[PacketIdentifier]:
        async with self._packet_identifiers_pool_lock:
            if self._packet_identifiers_pool is None:
                pending = {
                    message.packet_identifier
                    for message in await self._load_outgoing_messages()
                }

                pool: asyncio.Queue[PacketIdentifier] = asyncio.Queue(
                    maxsize=MAX_PACKET_IDENTIFIER
                )

                for packet_identifier in range(1, MAX_PACKET_IDENTIFIER + 1):
                    if packet_identifier not in pending:
                        pool.put_nowait(packet_identifier)

                self._acquired_packet_identifiers.update(pending)
                self._packet_identifiers_pool = pool

        return self._packet_identifiers_pool

    def _release(self, packet_identifier: PacketIdentifier) -> None:
        # releasing is idempotent, so the pool never contains duplicates
        if packet_identifier in self._acquired_packet_identifiers:
            assert self._packet_identifiers_pool

            self._acquired_packet_identifiers.remove(packet_identifier)
            self._packet_identifiers_pool.put_nowait(packet_identifier)


class InMemorySession(BaseSession):
    def __init__(self, options: Optional[SessionOptions] = None) -> None:
        super().__init__(options)

        # dict keeps the insertion order, re-assigning a key doesn't change it
        self._outgoing_messages: dict[PacketIdentifier, OutgoingMessage] = {}
        self._incoming_messages: set[PacketIdentifier] = set()

    async def _save_outgoing_message(self, message: OutgoingMessage) -> None:
        self._outgoing_messages[message.packet_identifier] = message

    async def _load_outgoing_message(
        self, packet_identifier: PacketIdentifier
    ) -> Optional[OutgoingMessage]:
        return self._outgoing_messages.get(packet_identifier)

    async def _load_outgoing_messages(self) -> Sequence[OutgoingMessage]:
        return list(self._outgoing_messages.values())

    async def _delete_outgoing_message(
        self, packet_identifier: PacketIdentifier
    ) -> bool:
        return self._outgoing_messages.pop(packet_identifier, None) is not None

    async def _save_incoming_message(self, packet_identifier: PacketIdentifier) -> None:
        self._incoming_messages.add(packet_identifier)

    async def _has_incoming_message(self, packet_identifier: PacketIdentifier) -> bool:
        return packet_identifier in self._incoming_messages

    async def _delete_incoming_message(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        self._incoming_messages.discard(packet_identifier)

    async def _clear(self) -> None:
        self._outgoing_messages = {}
        self._incoming_messages = set()


def build_default_session() -> MQTTSession:
    return InMemorySession()
