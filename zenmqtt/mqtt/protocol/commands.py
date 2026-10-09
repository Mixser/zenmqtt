import asyncio
from dataclasses import dataclass
from logging import getLogger
from typing import Any, Optional, Sequence, TypeVar, Union

from zenmqtt.exceptions import NotConnectedError, ServerLimitError
from zenmqtt.mqtt.packet import BytesReader, FixedHeader
from zenmqtt.mqtt.protocol.context import ProtocolContext
from zenmqtt.mqtt.session import MQTTSession, PacketIdentifier
from zenmqtt.mqtt.subscribe import (
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

CommandResult = Union[SubscribeResult, UnsubscribeResult]

_Result = TypeVar("_Result", SubscribeResult, UnsubscribeResult)


@dataclass(slots=True)
class _PendingCommand:
    # the future of SUBACK or UNSUBACK
    future: asyncio.Future[Any]
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
        future: asyncio.Future[SubscribeResult] = self._create_future()

        return await self._send(
            packet_identifier,
            pack_subscription_packet(packet_identifier, topics, properties),
            future,
        )

    async def unsubscribe(
        self, topics: Sequence[str], properties: Optional[UnsubscribeProperties] = None
    ) -> UnsubscribeResult:
        self._context.ensure_connected()

        properties = properties or {}

        packet_identifier = await self._session.acquire_packet_identifier()
        future: asyncio.Future[UnsubscribeResult] = self._create_future()

        return await self._send(
            packet_identifier,
            pack_unsubscribe_packet(packet_identifier, topics, properties),
            future,
        )

    async def handle_suback(
        self, fixed_header: FixedHeader, reader: BytesReader
    ) -> None:
        suback_packet = parse_suback_packet(fixed_header, reader)

        logger.debug("mqtt_protocol.handle_suback_packet packet:%s", suback_packet)

        await self._complete(suback_packet.packet_identifier, suback_packet)

    async def handle_unsuback(
        self, fixed_header: FixedHeader, reader: BytesReader
    ) -> None:
        unsuback_packet = parse_unsubscribe_packet(fixed_header, reader)

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

    @staticmethod
    def _create_future() -> asyncio.Future[Any]:
        return asyncio.get_running_loop().create_future()

    async def _send(
        self,
        packet_identifier: PacketIdentifier,
        packet: bytes,
        future: asyncio.Future[_Result],
    ) -> _Result:
        try:
            self._context.server_limits.check_packet_size(packet)
            connection = self._context.ensure_connected()
        except (NotConnectedError, ServerLimitError):
            await self._session.release_packet_identifier(packet_identifier)
            raise

        self._pending[packet_identifier] = _PendingCommand(future, self._context.now())

        await self._context.write(connection, packet)

        return await future

    async def _complete(
        self, packet_identifier: PacketIdentifier, result: CommandResult
    ) -> None:
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
