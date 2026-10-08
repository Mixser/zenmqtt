import asyncio
import dataclasses
from asyncio import Task
from collections import deque
from logging import getLogger
from typing import Awaitable, Callable, Final, Optional, Sequence, Tuple, cast

from gmqtt.connection import MQTTConnection
from gmqtt.exceptions import (
    ConnectionLostError,
    NotConnectedError,
    ProtocolError,
    ReceiveMaximumExceededError,
    ServerLimitError,
    TopicAliasInvalidError,
)
from gmqtt.metrics import MetricsCollector
from gmqtt.mqtt.connect import (
    ConnectionResult,
    ConnectProperties,
    DisconnectProperties,
    DisconnectResult,
    WillMessage,
    pack_connect_packet,
    pack_disconnect_packet,
    parse_connack_packet,
    parse_disconnect_packet,
)
from gmqtt.mqtt.limits import DEFAULT_SERVER_LIMITS, ServerLimits
from gmqtt.mqtt.packet import (
    AsyncDataSequence,
    FixedHeader,
    PacketType,
    parse_fixed_header,
)
from gmqtt.mqtt.ping import pack_pingreq_packet, parse_pingresp_packet
from gmqtt.mqtt.publish import (
    PublishAcknowledgement,
    PublishProperties,
    PublishResult,
    pack_puback_packet,
    pack_pubcomp_packet,
    pack_publish_packet,
    pack_pubrec_packet,
    pack_pubrel_packet,
    parse_puback_packet,
    parse_pubcomp_packet,
    parse_publish_packet,
    parse_pubrec_packet,
    parse_pubrel_packet,
)
from gmqtt.mqtt.session import (
    MQTTSession,
    OutgoingMessage,
    OutgoingMessageState,
    PacketIdentifier,
)
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
from gmqtt.mqtt.utils import pack_variable_byte_integer, read

logger = getLogger(__name__)

BUFFER_SIZE: Final[int] = 1024
READ_AT_MOST_BYTES: Final[int] = 128

# CONNACK "Session Present" flag
SESSION_PRESENT_FLAG: Final[int] = 0x01
# reason codes >= 0x80 indicate failure
FAILURE_REASON_CODE: Final[int] = 0x80
# default value of "Receive Maximum" if the server doesn't send it
DEFAULT_RECEIVE_MAXIMUM: Final[int] = 2**16 - 1
# PUBREL/PUBCOMP reason code for an unknown packet identifier
PACKET_IDENTIFIER_NOT_FOUND: Final[int] = 0x92


async def build_data_sequence(
    connection: MQTTConnection,
) -> AsyncDataSequence:
    buffer: asyncio.Queue[bytes | None] = asyncio.Queue(maxsize=BUFFER_SIZE)

    async def _read_loop():
        try:
            while bs := await connection.read(size=READ_AT_MOST_BYTES):
                await buffer.put(bs)
        except Exception as exc:
            logger.error("mqtt_protocol.stream_reader.error", exc_info=exc)

        await buffer.put(None)

    asyncio.create_task(_read_loop(), name="mqtt-protocol-buffered-reader")

    while bytes_list := await buffer.get():
        for byte in bytes_list:
            yield byte.to_bytes()


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


def _strip_topic_alias(properties: PublishProperties) -> PublishProperties:
    # topic aliases don't survive the reconnect
    return cast(
        PublishProperties, {k: v for k, v in properties.items() if k != "topic_alias"}
    )


class MQTTProtocol:
    def __init__(
        self,
        messages: asyncio.Queue,
        session: MQTTSession,
        metrics: Optional[MetricsCollector] = None,
    ) -> None:
        self._session = session
        self._metrics = metrics or MetricsCollector()

        self._connection: Optional[MQTTConnection] = None
        self._read_loop_task: Optional[Task[None]] = None

        # True only between successful CONNACK and loss of the connection
        self._connected = False
        # True if the connection is closed by disconnect call
        self._disconnecting = False

        # DISCONNECT of the server for the current/last connection
        self.server_disconnect: Optional[DisconnectResult] = None

        self._connection_future: Optional[asyncio.Future[ConnectionResult]] = None

        self._publish_packet_futures: dict[
            PacketIdentifier, asyncio.Future[PublishAcknowledgement]
        ] = {}

        self._command_packet_futures: dict[PacketIdentifier, asyncio.Future] = {}

        # PINGRESP has no packet identifier, so only one PINGREQ is in flight
        self._ping_future: Optional[asyncio.Future[None]] = None

        self._keep_alive_task: Optional[Task[None]] = None

        # loop time when packets were sent, used to measure durations
        self._publish_sent_at: dict[PacketIdentifier, Tuple[int, float]] = {}
        self._command_sent_at: dict[PacketIdentifier, float] = {}
        self._ping_sent_at = 0.0

        self._send_quota: Optional[_SendQuota] = None

        # limits of the server from the last CONNACK
        self._server_limits: ServerLimits = DEFAULT_SERVER_LIMITS

        # limits for incoming messages sent by the client in CONNECT
        self._receive_maximum = DEFAULT_RECEIVE_MAXIMUM
        self._topic_alias_maximum = 0

        # per connection state of incoming messages
        self._incoming_topic_aliases: dict[int, str] = {}
        self._incoming_inflight: set[PacketIdentifier] = set()

        self._messages_queue = messages

    def set_connection(self, connection: MQTTConnection):
        self._connection = connection
        self._connection_future = asyncio.get_running_loop().create_future()
        self._disconnecting = False
        self.server_disconnect = None

        # topic aliases and the receive quota don't survive the reconnect
        self._incoming_topic_aliases = {}
        self._incoming_inflight = set()

        self._read_loop_task = asyncio.create_task(
            self.__read_loop__(), name="mqtt-protocol-read-loop"
        )

    async def connect(
        self,
        client_id: str,
        username: Optional[str],
        password: Optional[str],
        clean_session: bool = False,
        keepalive: int = 0,
        properties: Optional[ConnectProperties] = None,
        will: Optional[WillMessage] = None,
    ) -> ConnectionResult:
        """
        :param keepalive: seconds between control packets sent by the client,
            0 disables keep alive; "Server Keep Alive" from CONNACK overrides it
        """
        assert self._connection
        assert self._connection_future

        properties = properties or {}

        self._receive_maximum = properties.get(
            "receive_maximum", DEFAULT_RECEIVE_MAXIMUM
        )
        self._topic_alias_maximum = properties.get("topic_alias_maximum", 0)

        if clean_session:
            await self._session.reset()

        login_packet = pack_connect_packet(
            client_id,
            username,
            password,
            clean_session=clean_session,
            keepalive=keepalive,
            properties=properties,
            will=will,
        )

        logger.debug("mqtt_protocol.send_connect_packet")
        sent_at = self._now()
        await self._write(self._connection, login_packet)

        connection_result = await self._connection_future

        self._metrics.on_connect(connection_result.result_code, self._now() - sent_at)

        if connection_result.result_code >= FAILURE_REASON_CODE:
            return connection_result

        if not connection_result.flags & SESSION_PRESENT_FLAG:
            # the server has no session, so the client must discard its own
            if pending := await self._session.get_pending_outgoing_messages():
                logger.warning(
                    "mqtt_protocol.session_not_present.discard_pending_messages "
                    "count:%s, set session_expiry_interval > 0 to keep them",
                    len(pending),
                )

            await self._session.reset()

        self._server_limits = ServerLimits.from_connack(connection_result.properties)

        # publish calls wait while the server's "Receive Maximum" is reached
        self._send_quota = _SendQuota(
            connection_result.properties.get("receive_maximum", DEFAULT_RECEIVE_MAXIMUM)
        )

        await self._resend_pending_messages()

        self._connected = True

        keepalive = connection_result.properties.get("server_keep_alive", keepalive)

        if keepalive:
            self._keep_alive_task = asyncio.create_task(
                self._keep_alive_loop(keepalive), name="mqtt-protocol-keep-alive"
            )

        return connection_result

    async def disconnect(
        self, reason: int, properties: Optional[DisconnectProperties] = None
    ):
        assert self._connection

        properties = properties or {}

        self._disconnecting = True

        if not self._connection.is_closing():
            logger.debug("mqtt_protocol.send_disconnect_packet")
            await self._write(
                self._connection, pack_disconnect_packet(reason, properties)
            )

            await self._connection.disconnect()

        if read_loop_task := self._read_loop_task:
            await read_loop_task
            self._read_loop_task = None

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

        connection = self._ensure_connected()
        properties = properties or {}

        # all limits are checked before the packet identifier is acquired
        self._server_limits.check_publish(qos, retain, properties)

        if qos == 0:
            packet = pack_publish_packet(
                0, topic, payload, qos, retain, False, properties
            )
            self._server_limits.check_packet_size(packet)

            logger.debug("mqtt_protocol.send_publish_packet")
            sent_at = self._now()
            await self._write(connection, packet)
            self._metrics.on_publish_completed(0, 0, self._now() - sent_at)
            return None

        packet_identifier = await self._session.acquire_packet_identifier()

        try:
            packet = pack_publish_packet(
                packet_identifier, topic, payload, qos, retain, False, properties
            )
            self._server_limits.check_packet_size(packet)

            connection = self._ensure_connected()

            if self._send_quota:
                await self._acquire_send_quota(self._send_quota, packet_identifier)

            # the message isn't stored yet, so nobody else owns the identifier
            connection = self._ensure_connected()
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
        if not self._connected:
            raise ConnectionLostError()

        future: asyncio.Future[
            PublishAcknowledgement
        ] = asyncio.get_running_loop().create_future()
        self._publish_packet_futures[packet_identifier] = future

        logger.debug("mqtt_protocol.send_publish_packet pid:%s", packet_identifier)
        self._publish_sent_at[packet_identifier] = (qos, self._now())
        await self._write(connection, packet)

        return await future

    async def subscribe(
        self,
        topics: Sequence[SubscriptionRequest],
        properties: Optional[SubscriptionProperties] = None,
    ) -> SubscribeResult:
        self._ensure_connected()

        properties = properties or {}

        self._server_limits.check_subscribe(topics, properties)

        packet_identifier = await self._session.acquire_packet_identifier()

        subscribe_packet = pack_subscription_packet(
            packet_identifier, topics, properties
        )

        return await self._send_command(packet_identifier, subscribe_packet)

    async def unsubscribe(
        self, topics: Sequence[str], properties: Optional[UnsubscribeProperties] = None
    ) -> UnsubscribeResult:
        self._ensure_connected()

        properties = properties or {}

        packet_identifier = await self._session.acquire_packet_identifier()

        unsubscribe_packet = pack_unsubscribe_packet(
            packet_identifier, topics, properties
        )

        return await self._send_command(packet_identifier, unsubscribe_packet)

    async def ping(self) -> None:
        connection = self._ensure_connected()

        # concurrent callers share the in-flight PINGREQ
        if (future := self._ping_future) is None:
            future = asyncio.get_running_loop().create_future()
            self._ping_future = future

            logger.debug("mqtt_protocol.send_pingreq_packet")
            self._ping_sent_at = self._now()
            try:
                await self._write(connection, pack_pingreq_packet())
            except BaseException:
                self._ping_future = None
                raise

        # cancellation of one caller must not affect the others
        await asyncio.shield(future)

    async def handle_connack_packet(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        assert self._connection_future

        connection_result = await parse_connack_packet(fixed_header, stream)

        logger.debug("mqtt_protocol.handle_connack_packet packet:%s", connection_result)

        if not self._connection_future.done():
            self._connection_future.set_result(connection_result)

    async def handle_pingresp_packet(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        await parse_pingresp_packet(fixed_header, stream)

        logger.debug("mqtt_protocol.handle_pingresp_packet")

        future, self._ping_future = self._ping_future, None

        if future and not future.done():
            self._metrics.on_ping(self._now() - self._ping_sent_at)
            future.set_result(None)

    async def handle_disconnect_packet(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        assert self._connection

        disconnect_packet = await parse_disconnect_packet(fixed_header, stream)

        if disconnect_packet.reason_code >= FAILURE_REASON_CODE:
            logger.warning(
                "mqtt_protocol.handle_disconnect_packet packet:%s", disconnect_packet
            )
        else:
            logger.debug(
                "mqtt_protocol.handle_disconnect_packet packet:%s", disconnect_packet
            )

        self.server_disconnect = disconnect_packet

        # pending futures are failed by the read loop once the stream ends
        await self._connection.disconnect()

    async def handle_publish_packet(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        assert self._connection

        publish_result = self._resolve_topic_alias(
            await parse_publish_packet(fixed_header, stream)
        )

        logger.debug("mqtt_protocol.handle_publish_packet packet:%s", publish_result)

        if not publish_result.qos:
            self._metrics.on_message_received(0, False)
            await self._deliver_message(publish_result)
            return

        packet_identifier = publish_result.packet_identifier
        assert packet_identifier

        # QoS 1 is acknowledged right away, QoS 2 is in flight until PUBREL;
        # a re-sent QoS 2 message already holds its slot
        if packet_identifier not in self._incoming_inflight:
            if len(self._incoming_inflight) >= self._receive_maximum:
                raise ReceiveMaximumExceededError(
                    f"More than {self._receive_maximum} incoming messages in flight"
                )

            if publish_result.qos == 2:
                self._incoming_inflight.add(packet_identifier)

        if publish_result.qos == 1:
            self._metrics.on_message_received(1, False)
            await self._deliver_message(publish_result)

            logger.debug(
                "mqtt_protocol.handle_publish_packet.send_puback_packet pid:%s",
                packet_identifier,
            )
            await self._write(
                self._connection, pack_puback_packet(packet_identifier, 0, {})
            )
            return

        if await self._session.register_incoming_message(packet_identifier):
            self._metrics.on_message_received(2, False)
            await self._deliver_message(publish_result)
        else:
            self._metrics.on_message_received(2, True)
            logger.debug(
                "mqtt_protocol.handle_publish_packet.duplicate pid:%s",
                packet_identifier,
            )

        logger.debug(
            "mqtt_protocol.handle_publish_packet.send_pubrec_packet pid:%s",
            packet_identifier,
        )
        await self._write(
            self._connection, pack_pubrec_packet(packet_identifier, 0, {})
        )

    async def handle_puback_packet(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        puback_result = await parse_puback_packet(fixed_header, stream)

        logger.debug("mqtt_protocol.handle_puback_packet packet:%s", puback_result)

        await self._complete_outgoing_message(
            puback_result.packet_identifier, puback_result
        )

    async def handle_pubrec_packet(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        assert self._connection

        pubrec_packet = await parse_pubrec_packet(fixed_header, stream)
        packet_identifier = pubrec_packet.packet_identifier

        logger.debug("mqtt_protocol.handle_pubrec_packet packet:%s", pubrec_packet)

        if pubrec_packet.reason_code >= FAILURE_REASON_CODE:
            # the server rejected the message, the flow ends here
            await self._complete_outgoing_message(packet_identifier, pubrec_packet)
            return

        if await self._session.mark_outgoing_message_released(packet_identifier):
            reason_code = 0x0
        else:
            logger.warning(
                "mqtt_protocol.handle_pubrec_packet.unknown pid:%s", packet_identifier
            )
            reason_code = PACKET_IDENTIFIER_NOT_FOUND

        await self._write(
            self._connection, pack_pubrel_packet(packet_identifier, reason_code, {})
        )

    async def handle_pubrel_packet(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ):
        assert self._connection

        pubrel_result = await parse_pubrel_packet(fixed_header, stream)

        logger.debug("mqtt_protocol.handle_pubrel_packet packet:%s", pubrel_result)

        packet_identifier = pubrel_result.packet_identifier

        self._incoming_inflight.discard(packet_identifier)

        if await self._session.complete_incoming_message(packet_identifier):
            reason_code = 0x0
        else:
            logger.warning(
                "mqtt_protocol.handle_pubrel_packet.unknown pid:%s", packet_identifier
            )
            reason_code = PACKET_IDENTIFIER_NOT_FOUND

        await self._write(
            self._connection,
            pack_pubcomp_packet(packet_identifier, reason_code, {}),
        )

    async def handle_pubcomp_packet(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ):
        pubcomp_packet = await parse_pubcomp_packet(fixed_header, stream)

        logger.debug("mqtt_protocol.handle_pubcomp_packet packet:%s", pubcomp_packet)

        await self._complete_outgoing_message(
            pubcomp_packet.packet_identifier, pubcomp_packet
        )

    async def handle_suback_packet(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        suback_packet = await parse_suback_packet(fixed_header, stream)

        logger.debug("mqtt_protocol.handle_suback_packet packet:%s", suback_packet)

        await self._complete_command(suback_packet.packet_identifier, suback_packet)

    async def handle_unsuback_packet(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        unsuback_packet = await parse_unsubscribe_packet(fixed_header, stream)

        logger.debug("mqtt_protocol.handle_unsuback_packet packet:%s", unsuback_packet)

        await self._complete_command(unsuback_packet.packet_identifier, unsuback_packet)

    async def handle_unsupported_packet(
        self, fixed_header: FixedHeader, stream: AsyncDataSequence
    ) -> None:
        # the body must be read anyway, otherwise the stream goes out of sync
        await read(stream, fixed_header.length)

        logger.warning(
            "mqtt_protocol.handle_unsupported_packet type:%s",
            PacketType(fixed_header.packet_type).name,
        )

    async def __read_loop__(self) -> None:
        assert self._connection

        stream = build_data_sequence(self._connection)

        try:
            while header := await parse_fixed_header(stream):
                handler: Callable[[FixedHeader, AsyncDataSequence], Awaitable[None]]

                logger.debug(
                    "mqtt_protocol.read_loop.new_packet_received header:%s", header
                )

                self._metrics.on_packet_received(
                    PacketType(header.packet_type),
                    1 + len(pack_variable_byte_integer(header.length)) + header.length,
                )

                if header.packet_type == PacketType.CONNACK:
                    handler = self.handle_connack_packet
                elif header.packet_type == PacketType.PUBLISH:
                    handler = self.handle_publish_packet
                elif header.packet_type == PacketType.PUBACK:
                    handler = self.handle_puback_packet
                elif header.packet_type == PacketType.PUBREC:
                    handler = self.handle_pubrec_packet
                elif header.packet_type == PacketType.PUBREL:
                    handler = self.handle_pubrel_packet
                elif header.packet_type == PacketType.PUBCOMP:
                    handler = self.handle_pubcomp_packet
                elif header.packet_type == PacketType.SUBACK:
                    handler = self.handle_suback_packet
                elif header.packet_type == PacketType.UNSUBACK:
                    handler = self.handle_unsuback_packet
                elif header.packet_type == PacketType.PINGRESP:
                    handler = self.handle_pingresp_packet
                elif header.packet_type == PacketType.DISCONNECT:
                    handler = self.handle_disconnect_packet
                elif header.packet_type == PacketType.AUTH:
                    handler = self.handle_unsupported_packet
                else:
                    raise ValueError(f"Invalid packet type: {header.packet_type}")

                try:
                    await handler(header, stream)
                except ProtocolError as exc:
                    logger.error("mqtt_protocol.protocol_error", exc_info=exc)
                    await self._write(
                        self._connection,
                        pack_disconnect_packet(exc.reason_code, {}),
                    )
                    await self._connection.disconnect()
                    break
                except Exception as exc:
                    logger.error(
                        "mqtt_protocol.handle_incoming_packet.error", exc_info=exc
                    )
        except Exception as exc:
            logger.error("mqtt_protocol.read_loop.error", exc_info=exc)
        finally:
            await self._handle_connection_lost()

    async def _handle_connection_lost(self) -> None:
        logger.debug("mqtt_protocol.handle_connection_lost")

        # everything up to the first await is synchronous, so no new
        # futures can be registered after the snapshot below
        if self._connected:
            self._metrics.on_connection_closed(lost=not self._disconnecting)

        self._connected = False
        exc = ConnectionLostError(self.server_disconnect)

        self._publish_sent_at.clear()
        self._command_sent_at.clear()

        if self._keep_alive_task:
            self._keep_alive_task.cancel()
            self._keep_alive_task = None

        if self._connection_future and not self._connection_future.done():
            self._connection_future.set_exception(exc)

        publish_futures = list(self._publish_packet_futures.values())
        self._publish_packet_futures.clear()

        command_futures = dict(self._command_packet_futures)
        self._command_packet_futures.clear()

        ping_future, self._ping_future = self._ping_future, None

        for future in [*publish_futures, *command_futures.values(), ping_future]:
            if future and not future.done():
                future.set_exception(exc)

        if self._send_quota:
            # messages waiting for the quota weren't stored nor sent
            self._send_quota.abort(NotConnectedError())
            self._send_quota = None

        # publish packets stay in the session, commands aren't re-sent
        for packet_identifier in command_futures:
            await self._session.release_packet_identifier(packet_identifier)

        await self._messages_queue.put(None)

        if self._connection and not self._connection.is_closing():
            await self._connection.disconnect()

    async def _keep_alive_loop(self, keepalive: int) -> None:
        """
        Sends PINGREQ if the client didn't send any packet within the keep alive
        period, and closes the connection if PINGRESP doesn't come in time.
        """
        connection = self._ensure_connected()
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
                self._metrics.on_ping_timeout()
                # the read loop handles the lost connection
                await connection.disconnect()
                return
            except (NotConnectedError, ConnectionLostError):
                return

    def _ensure_connected(self) -> MQTTConnection:
        if not self._connected or not self._connection or self._connection.is_closing():
            raise NotConnectedError()

        return self._connection

    async def _resend_pending_messages(self) -> None:
        assert self._connection

        messages = await self._session.get_pending_outgoing_messages()

        if messages:
            self._metrics.on_messages_resent(len(messages))

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
                    self._server_limits.check_publish(
                        message.qos, message.retain, properties
                    )
                    self._server_limits.check_packet_size(packet)
                except ServerLimitError as exc:
                    # the server would close the connection on every re-send
                    logger.warning(
                        "mqtt_protocol.resend_pending_message.discard pid:%s "
                        "reason:%s",
                        packet_identifier,
                        exc,
                    )
                    await self._session.complete_outgoing_message(packet_identifier)
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
            self._publish_sent_at[packet_identifier] = (message.qos, self._now())
            await self._write(self._connection, packet)

    async def _complete_outgoing_message(
        self, packet_identifier: PacketIdentifier, result: PublishAcknowledgement
    ) -> None:
        await self._session.complete_outgoing_message(packet_identifier)

        if sent := self._publish_sent_at.pop(packet_identifier, None):
            qos, sent_at = sent
            self._metrics.on_publish_completed(
                qos, result.reason_code, self._now() - sent_at
            )

        if self._send_quota:
            self._send_quota.release(packet_identifier)

        # there is no future for messages re-sent from the previous connection
        future = self._publish_packet_futures.pop(packet_identifier, None)

        if future and not future.done():
            future.set_result(result)

    def _resolve_topic_alias(self, publish_result: PublishResult) -> PublishResult:
        topic_alias = publish_result.properties.get("topic_alias")

        if topic_alias is None:
            if not publish_result.topic:
                raise ProtocolError("PUBLISH without topic and topic alias")

            return publish_result

        if not 0 < topic_alias <= self._topic_alias_maximum:
            raise TopicAliasInvalidError(
                f"Topic alias {topic_alias} isn't in range "
                f"1..{self._topic_alias_maximum}"
            )

        if publish_result.topic:
            self._incoming_topic_aliases[topic_alias] = publish_result.topic
            return publish_result

        if (topic := self._incoming_topic_aliases.get(topic_alias)) is None:
            raise ProtocolError(f"Unknown topic alias {topic_alias}")

        return dataclasses.replace(publish_result, topic=topic)

    async def _deliver_message(self, publish_result: PublishResult) -> None:
        await self._messages_queue.put(publish_result)

    async def _send_command(self, packet_identifier: PacketIdentifier, packet: bytes):
        try:
            self._server_limits.check_packet_size(packet)
            connection = self._ensure_connected()
        except (NotConnectedError, ServerLimitError):
            await self._session.release_packet_identifier(packet_identifier)
            raise

        future: asyncio.Future = asyncio.get_running_loop().create_future()
        self._command_packet_futures[packet_identifier] = future

        self._command_sent_at[packet_identifier] = self._now()
        await self._write(connection, packet)

        return await future

    async def _complete_command(self, packet_identifier: PacketIdentifier, result):
        await self._session.release_packet_identifier(packet_identifier)

        if (sent_at := self._command_sent_at.pop(packet_identifier, None)) is not None:
            duration = self._now() - sent_at

            if isinstance(result, SubscribeResult):
                self._metrics.on_subscribe_completed(result.reason_codes, duration)
            else:
                self._metrics.on_unsubscribe_completed(result.reason_codes, duration)

        future = self._command_packet_futures.pop(packet_identifier, None)

        if future and not future.done():
            future.set_result(result)

    async def _write(self, connection: MQTTConnection, packet: bytes) -> None:
        await connection.write(packet)

        self._metrics.on_packet_sent(PacketType(packet[0] >> 4), len(packet))

    async def _acquire_send_quota(
        self, send_quota: _SendQuota, packet_identifier: PacketIdentifier
    ) -> None:
        started_at = self._now()

        if await send_quota.acquire(packet_identifier):
            self._metrics.on_send_quota_wait(self._now() - started_at)

    @staticmethod
    def _now() -> float:
        return asyncio.get_running_loop().time()
