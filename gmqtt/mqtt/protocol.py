import asyncio
import itertools
from asyncio import Task
from logging import getLogger
from typing import AsyncGenerator, Awaitable, Callable, Final, Optional, Sequence, Tuple

from gmqtt.connection import MQTTConnection
from gmqtt.mqtt.connect import (
    ConnectionResult,
    pack_connect_packet,
    pack_disconnect_packet,
    parse_connack_packet,
    parse_disconnect_packet,
)
from gmqtt.mqtt.packet import FixedHeader, PacketType, parse_fixed_header
from gmqtt.mqtt.properties import Properties
from gmqtt.mqtt.publish import (
    PublishResult,
    pack_puback_packet,
    pack_pubcomp_packet,
    pack_publish_packet,
    pack_pubrel_packet,
    parse_puback_packet,
    parse_pubcomp_packet,
    parse_publish_packet,
    parse_pubrec_packet,
    parse_pubrel_packet,
)
from gmqtt.mqtt.subscribe import (
    SubscribeResult,
    UnsubscribeResult,
    pack_subscription_packet,
    pack_unsubscribe_packet,
    parse_suback_packet,
    parse_unsubscribe_packet,
)

logger = getLogger(__name__)

BUFFER_SIZE: Final[int] = 1024
READ_AT_MOST_BYTES: Final[int] = 128


_CURRENT_ID = 0


def get_next_id() -> int:
    # TODO: rewrite this
    global _CURRENT_ID

    _CURRENT_ID = (_CURRENT_ID + 1) % 2**16

    return _CURRENT_ID


async def build_reader_stream(
    connection: MQTTConnection,
) -> AsyncGenerator[bytes, None]:
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


class MQTTProtocol:
    def __init__(self, messages: asyncio.Queue) -> None:
        self._connection: Optional[MQTTConnection] = None
        self._read_loop_task: Optional[Task[None]] = None

        self._connection_future: Optional[asyncio.Future] = None

        self._publish_packet_futures: dict[int, asyncio.Future] = {}

        self._command_packet_futures: dict[int, asyncio.Future] = {}

        self._messages_queue = messages

        self._disconnected = asyncio.Event()

    async def __read_loop__(self) -> None:
        assert self._connection

        stream = build_reader_stream(self._connection)

        while header := await parse_fixed_header(stream):
            handler: Callable[
                [FixedHeader, AsyncGenerator[bytes, None]], Awaitable[None]
            ]

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
                continue
            elif header.packet_type == PacketType.DISCONNECT:
                handler = self.handle_disconnect_packet
            elif header.packet_type == PacketType.AUTH:
                continue
            else:
                raise ValueError(f"Invalid packet type: {header.packet_type}")

            try:
                await handler(header, stream)
            except Exception as exc:
                logger.error("mqtt_protocol.handle_incoming_packet.error", exc_info=exc)

        self._messages_queue.put_nowait(None)

    def set_connection(self, connection: MQTTConnection):
        self._connection = connection
        self._connection_future = asyncio.Future()

        self._read_loop_task = asyncio.create_task(
            self.__read_loop__(), name="mqtt-protocol-read-loop"
        )

    async def authorize(
        self, client_id: str, username: Optional[str], password: Optional[str]
    ) -> ConnectionResult:
        assert self._connection

        login_packet = pack_connect_packet(client_id, username, password, True, True)

        await self._connection.write(login_packet)

        assert self._connection_future
        await self._connection_future

        return self._connection_future.result()

    async def handle_disconnect_packet(
        self, fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
    ) -> None:
        assert self._connection

        _ = await parse_disconnect_packet(fixed_header, stream)
        await self._connection.disconnect()

        for future in itertools.chain(
            self._publish_packet_futures.values(), self._command_packet_futures.values()
        ):
            future.set_result(None)

    async def disconnect(self, reason: int):
        assert self._connection

        await self._connection.write(pack_disconnect_packet(reason))
        await self._connection.disconnect()

        if read_loop_task := self._read_loop_task:
            await read_loop_task
            self._read_loop_task = None

        for future in itertools.chain(
            list(self._publish_packet_futures.values()),
            list(self._command_packet_futures.values()),
        ):
            future.set_result(None)

    async def handle_connack_packet(
        self, fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
    ) -> None:
        assert self._connection_future

        connection_result = await parse_connack_packet(fixed_header, stream)
        self._connection_future.set_result(connection_result)

    async def publish(
        self,
        topic: str,
        payload: bytes,
        qos: int = 0,
        retain: bool = False,
        properties: Optional[Properties] = None,
    ) -> Optional[PublishResult]:
        assert self._connection

        if self._connection.is_closing():
            return None

        mid = get_next_id()

        if qos == 1:
            self._publish_packet_futures[mid] = asyncio.Future()

        publish_packet = pack_publish_packet(
            mid, topic, payload, qos, retain, False, properties  # TODO: generate
        )

        if self._connection.is_closing():
            return None

        await self._connection.write(publish_packet)

        if puback_result_future := self._publish_packet_futures.get(mid):
            if self._connection.is_closing():
                return None
            await puback_result_future
            return self._publish_packet_futures.pop(mid).result()

        return None

    async def handle_publish_packet(
        self, fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
    ) -> None:
        assert self._connection

        publish_result = await parse_publish_packet(fixed_header, stream)

        await self._messages_queue.put(publish_result)

        logger.info("mqtt_protocol.incoming_publish_packet: %s", publish_result)

        if publish_result.qos:
            assert publish_result.packet_identifier

            await self._connection.write(
                pack_puback_packet(publish_result.packet_identifier, 0, {})
            )

    async def handle_puback_packet(
        self, fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
    ) -> None:
        puback_result = await parse_puback_packet(fixed_header, stream)

        self._publish_packet_futures[puback_result.packet_identifier].set_result(
            puback_result
        )

    async def handle_pubrec_packet(
        self, fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
    ) -> None:
        assert self._connection

        pubrec_packet = await parse_pubrec_packet(fixed_header, stream)
        # TODO: here we need to properly implement QOS2 flow

        await self._connection.write(
            pack_pubrel_packet(pubrec_packet.packet_identifier, 0x0, {})
        )

    async def handle_pubrel_packet(
        self, fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
    ):
        assert self._connection

        pubrel_result = await parse_pubrel_packet(fixed_header, stream)

        # TODO: here we need to properly implement QOS2 flow

        await self._connection.write(
            pack_pubcomp_packet(pubrel_result.packet_identifier, 0x0, {})
        )

    async def handle_pubcomp_packet(
        self, fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
    ):
        assert self._connection

        _ = await parse_pubcomp_packet(fixed_header, stream)

        # TODO: here we need to properly implement QOS2 flow
        # Discard stored state

    async def subscribe(self, topics: Sequence[Tuple[str, int]]) -> SubscribeResult:
        assert self._connection

        packet_identifier = 0xBEAF  # TODO: implement generator of identifiers
        self._command_packet_futures[packet_identifier] = asyncio.Future()

        subscribe_packet = pack_subscription_packet(packet_identifier, topics)

        await self._connection.write(subscribe_packet)

        await self._command_packet_futures[packet_identifier]
        return self._command_packet_futures.pop(packet_identifier).result()

    async def handle_suback_packet(
        self, fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
    ) -> None:
        result = await parse_suback_packet(fixed_header, stream)
        self._command_packet_futures[result.packet_identifier].set_result(result)

    async def unsubscribe(self, topics: Sequence[str]) -> UnsubscribeResult:
        assert self._connection
        packet_identifier = 0xDEAD

        self._command_packet_futures[packet_identifier] = asyncio.Future()

        unsubscribe_packet = pack_unsubscribe_packet(packet_identifier, topics)

        await self._connection.write(unsubscribe_packet)

        await self._command_packet_futures[packet_identifier]
        return self._command_packet_futures.pop(packet_identifier).result()

    async def handle_unsuback_packet(
        self, fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
    ) -> None:
        result = await parse_unsubscribe_packet(fixed_header, stream)
        self._command_packet_futures[result.packet_identifier].set_result(result)
