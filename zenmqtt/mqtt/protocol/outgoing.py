import asyncio
from collections import deque
from dataclasses import dataclass
from logging import getLogger
from typing import Final, Optional, cast

from zenmqtt.connection import MQTTConnection
from zenmqtt.exceptions import (
    ConnectionLostError,
    NotConnectedError,
    ServerLimitError,
    SessionLostError,
)
from zenmqtt.mqtt.connect import ConnectionResult
from zenmqtt.mqtt.packet import AsyncDataSequence, FixedHeader
from zenmqtt.mqtt.protocol.context import ProtocolContext
from zenmqtt.mqtt.publish import (
    PublishAcknowledgement,
    PublishProperties,
    pack_publish_packet,
    pack_pubrel_packet,
    parse_puback_packet,
    parse_pubcomp_packet,
    parse_pubrec_packet,
)
from zenmqtt.mqtt.reason_codes import FAILURE_REASON_CODE, PACKET_IDENTIFIER_NOT_FOUND
from zenmqtt.mqtt.session import (
    MQTTSession,
    OutgoingMessage,
    OutgoingMessageState,
    PacketIdentifier,
)

logger = getLogger(__name__)

# default value of "Receive Maximum" if the server doesn't send it
DEFAULT_RECEIVE_MAXIMUM: Final[int] = 2**16 - 1


class _SendQuota:
    """
    Flow control (MQTT 5, section 4.9): limits the number of QoS 1/2
    publications which are not acknowledged yet by "Receive Maximum".
    """

    def __init__(self, limit: int) -> None:
        self._available = limit
        self._holders: set[PacketIdentifier] = set()
        self._waiters: deque[asyncio.Future[None]] = deque()

    async def acquire(self, packet_identifier: PacketIdentifier) -> bool:
        """
        Returns True if the caller had to wait for a free slot.
        """
        waited = False

        if self._available > 0 and not self._waiters:
            self._available -= 1
        else:
            waited = True
            waiter: asyncio.Future[None] = asyncio.get_running_loop().create_future()
            self._waiters.append(waiter)

            try:
                await waiter
            except asyncio.CancelledError:
                # the slot was handed to us right before cancellation
                if waiter.done() and not waiter.cancelled():
                    self._wake_up_or_return()
                raise

        self._holders.add(packet_identifier)

        return waited

    def release(self, packet_identifier: PacketIdentifier) -> None:
        # only messages sent within this connection hold a slot
        if packet_identifier in self._holders:
            self._holders.remove(packet_identifier)
            self._wake_up_or_return()

    def abort(self, exc: Exception) -> None:
        while self._waiters:
            if not (waiter := self._waiters.popleft()).done():
                waiter.set_exception(exc)

    def _wake_up_or_return(self) -> None:
        while self._waiters:
            if not (waiter := self._waiters.popleft()).done():
                waiter.set_result(None)
                return

        self._available += 1


@dataclass(slots=True)
class _PendingPublish:
    qos: int
    # there is no future for messages re-sent from the session of a previous run
    future: Optional[asyncio.Future[PublishAcknowledgement]] = None
    # loop time when the packet was sent within the current connection
    sent_at: Optional[float] = None


def _strip_topic_alias(properties: PublishProperties) -> PublishProperties:
    # topic aliases don't survive the reconnect
    return cast(
        PublishProperties, {k: v for k, v in properties.items() if k != "topic_alias"}
    )


class OutgoingFlow:
    """
    Outgoing PUBLISH: QoS 1/2 messages are stored in the session until the
    final acknowledgement and re-sent after reconnect.
    """

    def __init__(
        self,
        context: ProtocolContext,
        session: MQTTSession,
        wait_across_reconnect: bool,
    ) -> None:
        self._context = context
        self._session = session
        self._wait_across_reconnect = wait_across_reconnect

        self._pending: dict[PacketIdentifier, _PendingPublish] = {}
        self._send_quota: Optional[_SendQuota] = None

    async def publish(
        self,
        topic: str,
        payload: bytes,
        qos: int = 0,
        retain: bool = False,
        properties: Optional[PublishProperties] = None,
    ) -> Optional[PublishAcknowledgement]:
        if qos not in (0, 1, 2):
            raise ValueError(f"Invalid QoS: {qos}")

        connection = self._context.ensure_connected()
        properties = properties or {}

        # all limits are checked before the packet identifier is acquired
        self._context.server_limits.check_publish(qos, retain, properties)

        if qos == 0:
            packet = pack_publish_packet(
                0, topic, payload, qos, retain, False, properties
            )
            self._context.server_limits.check_packet_size(packet)

            logger.debug("mqtt_protocol.send_publish_packet")
            sent_at = self._context.now()
            await self._context.write(connection, packet)
            self._context.metrics.on_publish_completed(
                0, 0, self._context.now() - sent_at
            )
            return None

        packet_identifier = await self._session.acquire_packet_identifier()

        try:
            packet = pack_publish_packet(
                packet_identifier, topic, payload, qos, retain, False, properties
            )
            connection = await self._reserve(packet_identifier, packet)
        except BaseException:
            await self._session.release_packet_identifier(packet_identifier)
            raise

        await self._session.store_outgoing_message(
            OutgoingMessage(
                packet_identifier=packet_identifier,
                topic=topic,
                payload=payload,
                qos=qos,
                retain=retain,
                properties=properties,
                state=OutgoingMessageState.AWAITING_ACK,
            )
        )

        # from here the message belongs to the session: if the connection was
        # lost meanwhile, it'll be re-sent on the next connect
        return await self._send_stored(packet_identifier, qos, packet, connection)

    async def on_connected(self, connection_result: ConnectionResult) -> None:
        """Called after successful CONNACK, before the client is connected."""
        # publish calls wait while the server's "Receive Maximum" is reached
        self._send_quota = _SendQuota(
            connection_result.properties.get("receive_maximum", DEFAULT_RECEIVE_MAXIMUM)
        )

        await self._resend_pending_messages()

    def on_session_lost(self) -> None:
        """The server didn't keep the session, stored messages are discarded."""
        self._fail_all(SessionLostError())

    def on_connection_lost(self, exc: ConnectionLostError) -> None:
        if self._send_quota:
            # messages waiting for the quota weren't stored nor sent
            self._send_quota.abort(NotConnectedError())
            self._send_quota = None

        if self._wait_across_reconnect:
            # QoS 1/2 messages are re-sent from the session and publish calls
            # get the acknowledgement of the re-sent message
            for pending in self._pending.values():
                pending.sent_at = None
        else:
            self._fail_all(exc)

    def close(self, exc: Exception) -> None:
        """The client stops for good, publish calls don't wait anymore."""
        self._fail_all(exc)

    async def handle_puback(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        puback_result = await parse_puback_packet(fixed_header, stream)

        logger.debug("mqtt_protocol.handle_puback_packet packet:%s", puback_result)

        await self._complete(puback_result.packet_identifier, puback_result)

    async def handle_pubrec(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        connection = self._context.connection
        assert connection

        pubrec_packet = await parse_pubrec_packet(fixed_header, stream)
        packet_identifier = pubrec_packet.packet_identifier

        logger.debug("mqtt_protocol.handle_pubrec_packet packet:%s", pubrec_packet)

        if pubrec_packet.reason_code >= FAILURE_REASON_CODE:
            # the server rejected the message, the flow ends here
            await self._complete(packet_identifier, pubrec_packet)
            return

        if await self._session.mark_outgoing_message_released(packet_identifier):
            reason_code = 0x0
        else:
            logger.warning(
                "mqtt_protocol.handle_pubrec_packet.unknown pid:%s", packet_identifier
            )
            reason_code = PACKET_IDENTIFIER_NOT_FOUND

        await self._context.write(
            connection, pack_pubrel_packet(packet_identifier, reason_code, {})
        )

    async def handle_pubcomp(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        pubcomp_packet = await parse_pubcomp_packet(fixed_header, stream)

        logger.debug("mqtt_protocol.handle_pubcomp_packet packet:%s", pubcomp_packet)

        await self._complete(pubcomp_packet.packet_identifier, pubcomp_packet)

    async def _reserve(
        self, packet_identifier: PacketIdentifier, packet: bytes
    ) -> MQTTConnection:
        """Checks the packet and takes a slot of the send quota."""
        self._context.server_limits.check_packet_size(packet)

        self._context.ensure_connected()

        if self._send_quota:
            await self._acquire_send_quota(self._send_quota, packet_identifier)

        # the connection could be lost while the call waited for the quota
        return self._context.ensure_connected()

    async def _send_stored(
        self,
        packet_identifier: PacketIdentifier,
        qos: int,
        packet: bytes,
        connection: MQTTConnection,
    ) -> PublishAcknowledgement:
        connected = self._context.connected

        if not connected and not self._wait_across_reconnect:
            raise ConnectionLostError()

        future: asyncio.Future[
            PublishAcknowledgement
        ] = asyncio.get_running_loop().create_future()
        pending = _PendingPublish(qos, future)
        self._pending[packet_identifier] = pending

        if connected:
            logger.debug("mqtt_protocol.send_publish_packet pid:%s", packet_identifier)
            pending.sent_at = self._context.now()

            try:
                await self._context.write(connection, packet)
            except Exception:
                if not self._wait_across_reconnect:
                    raise

                logger.debug(
                    "mqtt_protocol.send_publish_packet.failed pid:%s, "
                    "it'll be re-sent after reconnect",
                    packet_identifier,
                )

        return await future

    async def _resend_pending_messages(self) -> None:
        connection = self._context.connection
        assert connection

        messages = await self._session.get_pending_outgoing_messages()

        if messages:
            self._context.metrics.on_messages_resent(len(messages))

        for message in messages:
            packet_identifier = message.packet_identifier

            if message.state == OutgoingMessageState.AWAITING_ACK:
                properties = _strip_topic_alias(message.properties)
                packet = pack_publish_packet(
                    packet_identifier,
                    message.topic,
                    message.payload,
                    message.qos,
                    message.retain,
                    True,
                    properties,
                )

                try:
                    self._context.server_limits.check_publish(
                        message.qos, message.retain, properties
                    )
                    self._context.server_limits.check_packet_size(packet)
                except ServerLimitError as exc:
                    # the server would close the connection on every re-send
                    logger.warning(
                        "mqtt_protocol.resend_pending_message.discard pid:%s "
                        "reason:%s",
                        packet_identifier,
                        exc,
                    )
                    await self._session.complete_outgoing_message(packet_identifier)

                    if discarded := self._pending.pop(packet_identifier, None):
                        self._fail(discarded, exc)

                    continue

                if self._send_quota:
                    await self._acquire_send_quota(self._send_quota, packet_identifier)
            else:
                packet = pack_pubrel_packet(packet_identifier, 0x0, {})

            logger.debug(
                "mqtt_protocol.resend_pending_message pid:%s state:%s",
                packet_identifier,
                message.state.name,
            )

            pending = self._pending.setdefault(
                packet_identifier, _PendingPublish(message.qos)
            )
            pending.sent_at = self._context.now()

            await self._context.write(connection, packet)

    async def _complete(
        self, packet_identifier: PacketIdentifier, result: PublishAcknowledgement
    ) -> None:
        await self._session.complete_outgoing_message(packet_identifier)

        pending = self._pending.pop(packet_identifier, None)

        if pending and pending.sent_at is not None:
            self._context.metrics.on_publish_completed(
                pending.qos, result.reason_code, self._context.now() - pending.sent_at
            )

        if self._send_quota:
            self._send_quota.release(packet_identifier)

        if pending and pending.future and not pending.future.done():
            pending.future.set_result(result)

    async def _acquire_send_quota(
        self, send_quota: _SendQuota, packet_identifier: PacketIdentifier
    ) -> None:
        started_at = self._context.now()

        if await send_quota.acquire(packet_identifier):
            self._context.metrics.on_send_quota_wait(self._context.now() - started_at)

    def _fail_all(self, exc: Exception) -> None:
        pending, self._pending = self._pending, {}

        for publish in pending.values():
            self._fail(publish, exc)

    @staticmethod
    def _fail(pending: _PendingPublish, exc: Exception) -> None:
        if pending.future and not pending.future.done():
            pending.future.set_exception(exc)
