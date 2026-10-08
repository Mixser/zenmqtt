import asyncio
from dataclasses import dataclass
from logging import getLogger
from typing import Optional, Sequence

from gmqtt.exceptions import NotConnectedError, ServerLimitError
from gmqtt.mqtt.packet import AsyncDataSequence, FixedHeader
from gmqtt.mqtt.protocol.context import ProtocolContext
from gmqtt.mqtt.session import MQTTSession, PacketIdentifier
from gmqtt.mqtt.subscribe import (
    SubscribeResult,
    SubscriptionProperties,
    SubscriptionRequest,
    UnsubscribeProperties,
    UnsubscribeResult,
    pack_subscription_packet,
    pack_unsubscribe_packet,
    parse_suback_packet,
    parse_unsubscribe_packet,
)

logger = getLogger(__name__)


@dataclass(slots=True)
class _PendingCommand:
    future: asyncio.Future
    sent_at: float


class Commands:
    """SUBSCRIBE and UNSUBSCRIBE, which wait for SUBACK and UNSUBACK."""

    def __init__(self, context: ProtocolContext, session: MQTTSession) -> None:
        self._context = context
        self._session = session

        self._pending: dict[PacketIdentifier, _PendingCommand] = {}

    async def subscribe(
        self,
        topics: Sequence[SubscriptionRequest],
        properties: Optional[SubscriptionProperties] = None,
    ) -> SubscribeResult:
        self._context.ensure_connected()

        properties = properties or {}

        self._context.server_limits.check_subscribe(topics, properties)

        packet_identifier = await self._session.acquire_packet_identifier()

        return await self._send(
            packet_identifier,
            pack_subscription_packet(packet_identifier, topics, properties),
        )

    async def unsubscribe(
        self, topics: Sequence[str], properties: Optional[UnsubscribeProperties] = None
    ) -> UnsubscribeResult:
        self._context.ensure_connected()

        properties = properties or {}

        packet_identifier = await self._session.acquire_packet_identifier()

        return await self._send(
            packet_identifier,
            pack_unsubscribe_packet(packet_identifier, topics, properties),
        )

    async def handle_suback(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        suback_packet = await parse_suback_packet(fixed_header, stream)

        logger.debug("mqtt_protocol.handle_suback_packet packet:%s", suback_packet)

        await self._complete(suback_packet.packet_identifier, suback_packet)

    async def handle_unsuback(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        unsuback_packet = await parse_unsubscribe_packet(fixed_header, stream)

        logger.debug("mqtt_protocol.handle_unsuback_packet packet:%s", unsuback_packet)

        await self._complete(unsuback_packet.packet_identifier, unsuback_packet)

    def on_connection_lost(self, exc: Exception) -> list[PacketIdentifier]:
        """
        Fails waiting commands, they aren't re-sent. Returns their packet
        identifiers, which must be released.
        """
        pending, self._pending = self._pending, {}

        for command in pending.values():
            if not command.future.done():
                command.future.set_exception(exc)

        return list(pending)

    async def _send(self, packet_identifier: PacketIdentifier, packet: bytes):
        try:
            self._context.server_limits.check_packet_size(packet)
            connection = self._context.ensure_connected()
        except (NotConnectedError, ServerLimitError):
            await self._session.release_packet_identifier(packet_identifier)
            raise

        future: asyncio.Future = asyncio.get_running_loop().create_future()
        self._pending[packet_identifier] = _PendingCommand(future, self._context.now())

        await self._context.write(connection, packet)

        return await future

    async def _complete(self, packet_identifier: PacketIdentifier, result) -> None:
        await self._session.release_packet_identifier(packet_identifier)

        if (command := self._pending.pop(packet_identifier, None)) is None:
            return

        duration = self._context.now() - command.sent_at
        metrics = self._context.metrics

        if isinstance(result, SubscribeResult):
            metrics.on_subscribe_completed(result.reason_codes, duration)
        else:
            metrics.on_unsubscribe_completed(result.reason_codes, duration)

        if not command.future.done():
            command.future.set_result(result)
