import asyncio
from asyncio import Task
from logging import getLogger
from typing import Awaitable, Callable, Optional, Sequence

from zenmqtt.connection import MQTTConnection
from zenmqtt.exceptions import ConnectionLostError, MalformedPacketError, ProtocolError
from zenmqtt.instrumentation.metrics import MetricsCollector
from zenmqtt.mqtt.connect import (
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
from zenmqtt.mqtt.limits import ServerLimits
from zenmqtt.mqtt.packet import BytesReader, FixedHeader, PacketType
from zenmqtt.mqtt.protocol.commands import Commands
from zenmqtt.mqtt.protocol.context import ProtocolContext
from zenmqtt.mqtt.protocol.incoming import IncomingFlow
from zenmqtt.mqtt.protocol.keepalive import KeepAlive
from zenmqtt.mqtt.protocol.outgoing import OutgoingFlow
from zenmqtt.mqtt.protocol.part import ConnectionInfo, ProtocolPart
from zenmqtt.mqtt.protocol.stream import PacketReader
from zenmqtt.mqtt.publish import (
    PublishAcknowledgement,
    PublishProperties,
    PublishResult,
)
from zenmqtt.mqtt.reason_codes import FAILURE_REASON_CODE, IMPLEMENTATION_SPECIFIC_ERROR
from zenmqtt.mqtt.session import MQTTSession
from zenmqtt.mqtt.subscribe import (
    SubscribeResult,
    SubscriptionProperties,
    SubscriptionRequest,
    UnsubscribeProperties,
    UnsubscribeResult,
)

logger = getLogger(__name__)

PacketHandler = Callable[[FixedHeader, BytesReader], Awaitable[None]]


class MQTTProtocol:
    """
    MQTT 5 client protocol: the connection lifecycle and the read loop, which
    passes incoming packets to the parts of the protocol: outgoing and
    incoming PUBLISH flows, SUBSCRIBE/UNSUBSCRIBE and keep alive.
    """

    def __init__(
        self,
        session: MQTTSession,
        metrics: Optional[MetricsCollector] = None,
    ) -> None:
        """
        A lost connection doesn't end anything: QoS 1/2 publish calls keep
        waiting for the acknowledgement of the message re-sent on the next
        connect, and next_message() keeps waiting. The owner calls close()
        when nothing will connect anymore.
        """
        self._session = session
        self._context = ProtocolContext(metrics or MetricsCollector())

        self._incoming = IncomingFlow(self._context, session)
        self._outgoing = OutgoingFlow(self._context, session)
        self._commands = Commands(self._context, session)
        self._keep_alive = KeepAlive(self._context)

        # the order in which the parts are called:
        # - on connect, outgoing re-sends stored messages before keep alive
        #   starts and before new publish calls are sent;
        # - on connection lost, commands are last: they release packet
        #   identifiers with an await, after the other parts handled the loss
        self._parts: tuple[ProtocolPart, ...] = (
            self._outgoing,
            self._incoming,
            self._keep_alive,
            self._commands,
        )

        self._read_loop_task: Optional[Task[None]] = None
        self._packet_reader: Optional[PacketReader] = None
        self._connection_future: Optional[asyncio.Future[ConnectionResult]] = None

        # True if the connection is closed by disconnect call
        self._disconnecting = False

        # DISCONNECT of the server for the current/last connection
        self.server_disconnect: Optional[DisconnectResult] = None

        # "Authentication Method" of the last CONNECT
        self._authentication_method: Optional[str] = None

        self._handlers: dict[PacketType, PacketHandler] = {
            PacketType.CONNACK: self._handle_connack,
            PacketType.PUBLISH: self._incoming.handle_publish,
            PacketType.PUBACK: self._outgoing.handle_puback,
            PacketType.PUBREC: self._outgoing.handle_pubrec,
            PacketType.PUBREL: self._incoming.handle_pubrel,
            PacketType.PUBCOMP: self._outgoing.handle_pubcomp,
            PacketType.SUBACK: self._commands.handle_suback,
            PacketType.UNSUBACK: self._commands.handle_unsuback,
            PacketType.PINGRESP: self._keep_alive.handle_pingresp,
            PacketType.DISCONNECT: self._handle_disconnect,
            PacketType.AUTH: self._handle_auth,
        }

    @property
    def is_connected(self) -> bool:
        """True between successful CONNACK and loss of the connection."""
        return self._context.connected

    def set_connection(self, connection: MQTTConnection) -> None:
        self._context.connection = connection
        self._connection_future = asyncio.get_running_loop().create_future()
        self._disconnecting = False
        self.server_disconnect = None

        self._packet_reader = PacketReader(connection)
        self._read_loop_task = asyncio.create_task(
            self._read_loop(connection, self._packet_reader),
            name="mqtt-protocol-read-loop",
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
        connection = self._context.connection
        assert connection
        assert self._connection_future

        properties = properties or {}

        self._authentication_method = properties.get("authentication_method")

        for part in self._parts:
            part.on_connecting(properties)

        if self._packet_reader:
            self._packet_reader.maximum_packet_size = properties.get(
                "maximum_packet_size"
            )

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
        sent_at = self._context.now()
        await self._context.write(connection, login_packet)

        connection_result = await self._connection_future

        self._context.metrics.on_connect(
            connection_result.result_code, self._context.now() - sent_at
        )

        if connection_result.result_code >= FAILURE_REASON_CODE:
            return connection_result

        if not connection_result.session_present:
            await self._discard_session()

        self._context.server_limits = ServerLimits.from_connack(
            connection_result.properties
        )

        info = ConnectionInfo(
            connection_result,
            connection_result.properties.get("server_keep_alive", keepalive),
        )

        for part in self._parts:
            await part.on_connected(info)

        self._context.connected = True

        return connection_result

    async def disconnect(
        self, reason: int, properties: Optional[DisconnectProperties] = None
    ) -> None:
        connection = self._context.connection
        assert connection

        self._disconnecting = True

        if not connection.is_closing():
            logger.debug("mqtt_protocol.send_disconnect_packet")
            await self._context.write(
                connection, pack_disconnect_packet(reason, properties or {})
            )

            await connection.disconnect()

        if read_loop_task := self._read_loop_task:
            await read_loop_task
            self._read_loop_task = None

    async def wait_closed(self) -> None:
        """Waits until the current connection is closed and handled."""
        if read_loop_task := self._read_loop_task:
            await asyncio.shield(read_loop_task)

    async def close(self, exc: Exception) -> None:
        """
        Nothing will connect anymore: fails publish calls which wait for
        acknowledgements and ends the messages.
        """
        for part in self._parts:
            part.close(exc)

    async def publish(
        self,
        topic: str,
        payload: bytes,
        qos: int = 0,
        retain: bool = False,
        properties: Optional[PublishProperties] = None,
    ) -> Optional[PublishAcknowledgement]:
        return await self._outgoing.publish(topic, payload, qos, retain, properties)

    async def next_message(self) -> Optional[PublishResult]:
        """
        The next incoming message, None after close(); QoS 1/2 messages must
        be acknowledged by ack(). Meant for one reader, see MQTTClient.messages.
        """
        return await self._incoming.next_message()

    async def ack(self, message: PublishResult, reason_code: int = 0) -> None:
        await self._incoming.ack(message, reason_code)

    async def subscribe(
        self,
        topics: Sequence[SubscriptionRequest],
        properties: Optional[SubscriptionProperties] = None,
    ) -> SubscribeResult:
        return await self._commands.subscribe(topics, properties)

    async def unsubscribe(
        self, topics: Sequence[str], properties: Optional[UnsubscribeProperties] = None
    ) -> UnsubscribeResult:
        return await self._commands.unsubscribe(topics, properties)

    async def ping(self) -> None:
        await self._keep_alive.ping()

    async def _discard_session(self) -> None:
        """The server has no session, so the client must discard its own."""
        if pending := await self._session.get_pending_outgoing_messages():
            logger.warning(
                "mqtt_protocol.session_not_present.discard_pending_messages "
                "count:%s, set session_expiry_interval > 0 to keep them",
                len(pending),
            )

        await self._session.reset()

    async def _handle_connack(
        self, fixed_header: FixedHeader, reader: BytesReader
    ) -> None:
        assert self._connection_future

        connection_result = parse_connack_packet(fixed_header, reader)

        logger.debug("mqtt_protocol.handle_connack_packet packet:%s", connection_result)

        if not self._connection_future.done():
            self._connection_future.set_result(connection_result)

    async def _handle_disconnect(
        self, fixed_header: FixedHeader, reader: BytesReader
    ) -> None:
        connection = self._context.connection
        assert connection

        disconnect_packet = parse_disconnect_packet(fixed_header, reader)

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
        await connection.disconnect()

    async def _handle_auth(
        self, fixed_header: FixedHeader, reader: BytesReader
    ) -> None:
        # the server sends AUTH only if CONNECT had an "Authentication Method"
        # (MQTT 5, 4.12)
        if self._authentication_method is None:
            raise ProtocolError("AUTH without authentication method in CONNECT")

        # closes the connection with "Implementation specific error"
        raise NotImplementedError("Enhanced authentication isn't supported")

    async def _read_loop(
        self, connection: MQTTConnection, packet_reader: PacketReader
    ) -> None:
        try:
            while packet := await packet_reader.read_packet():
                header, reader, size = packet

                logger.debug(
                    "mqtt_protocol.read_loop.new_packet_received header:%s", header
                )

                self._context.metrics.on_packet_received(header.packet_type, size)

                if (handler := self._handlers.get(header.packet_type)) is None:
                    # type 0 is reserved, the others are sent only by clients
                    raise (
                        MalformedPacketError
                        if header.packet_type == PacketType.RESERVED
                        else ProtocolError
                    )(f"Unexpected packet type: {header.packet_type.name}")

                try:
                    await handler(header, reader)
                except ProtocolError:
                    raise
                except Exception as exc:
                    # e.g. the session storage failed: the state of the flow
                    # is unknown, so the connection is closed; after reconnect
                    # the session and the server re-send what isn't completed
                    logger.error(
                        "mqtt_protocol.handle_incoming_packet.error", exc_info=exc
                    )
                    await self._abort(connection, IMPLEMENTATION_SPECIFIC_ERROR)
                    return
        except ProtocolError as exc:
            logger.error("mqtt_protocol.protocol_error", exc_info=exc)
            await self._abort(connection, exc.reason_code)
        except Exception as exc:
            logger.error("mqtt_protocol.read_loop.error", exc_info=exc)
        finally:
            await self._handle_connection_lost(connection)

    async def _abort(self, connection: MQTTConnection, reason_code: int) -> None:
        await self._context.write(connection, pack_disconnect_packet(reason_code, {}))
        await connection.disconnect()

    async def _handle_connection_lost(self, connection: MQTTConnection) -> None:
        logger.debug("mqtt_protocol.handle_connection_lost")

        # everything up to the first await is synchronous, so no new
        # futures can be registered after the parts handled the loss
        if self._context.connected:
            self._context.metrics.on_connection_closed(lost=not self._disconnecting)

        self._context.connected = False
        exc = ConnectionLostError(self.server_disconnect)

        if self._connection_future and not self._connection_future.done():
            self._connection_future.set_exception(exc)

        for part in self._parts:
            await part.on_connection_lost(exc)

        if not connection.is_closing():
            await connection.disconnect()
