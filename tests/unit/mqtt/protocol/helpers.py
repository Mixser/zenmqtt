"""Shared helpers of the protocol tests."""
import asyncio
import struct
from typing import Optional

from zenmqtt.connection import MQTTConnection, MQTTConnectionTransport
from zenmqtt.exceptions import ConnectionLostError
from zenmqtt.instrumentation.metrics import MetricsCollector
from zenmqtt.mqtt.connect import (
    ConnectProperties,
    DisconnectResult,
    parse_disconnect_packet,
)
from zenmqtt.mqtt.packet import PacketType, split_packet
from zenmqtt.mqtt.protocol import MQTTProtocol
from zenmqtt.mqtt.publish import (
    PublishResult,
    pack_publish_packet,
    parse_publish_packet,
)
from zenmqtt.mqtt.session import InMemorySession

TIMEOUT = 1


class FakeTransport(MQTTConnectionTransport):
    def __init__(self) -> None:
        self._incoming: asyncio.Queue[bytes] = asyncio.Queue()
        self._sent: asyncio.Queue[bytes] = asyncio.Queue()
        self._closing = False

    async def write(self, payload: bytes) -> None:
        self._sent.put_nowait(payload)

    async def read(self, size: int = -1) -> bytes:
        return await self._incoming.get()

    def is_closing(self) -> bool:
        return self._closing

    async def close(self) -> None:
        self._closing = True
        self._incoming.put_nowait(b"")

    def feed(self, payload: bytes) -> None:
        self._incoming.put_nowait(payload)

    def drop(self) -> None:
        # the server side went away without DISCONNECT
        self._incoming.put_nowait(b"")

    async def next_packet(self, timeout: float = TIMEOUT):
        payload = await asyncio.wait_for(self._sent.get(), timeout)

        return split_packet(payload)

    def has_sent_packets(self) -> bool:
        return not self._sent.empty()


def pack_connack(
    session_present: bool = False, reason_code: int = 0, properties: bytes = b""
):
    payload = (
        struct.pack("!BBB", int(session_present), reason_code, len(properties))
        + properties
    )
    return bytes([PacketType.CONNACK << 4, len(payload)]) + payload


def receive_maximum(value: int) -> bytes:
    return struct.pack("!BH", 0x21, value)


def topic_alias_maximum(value: int) -> bytes:
    return struct.pack("!BH", 0x22, value)


def maximum_qos(value: int) -> bytes:
    return struct.pack("!BB", 0x24, value)


def maximum_packet_size(value: int) -> bytes:
    return struct.pack("!BL", 0x27, value)


def server_flag(code: int, value: bool) -> bytes:
    return struct.pack("!BB", code, int(value))


RETAIN_AVAILABLE = 0x25


WILDCARD_SUBSCRIPTION_AVAILABLE = 0x28


SUBSCRIPTION_IDENTIFIER_AVAILABLE = 0x29


SHARED_SUBSCRIPTION_AVAILABLE = 0x2A


def server_keep_alive(value: int) -> bytes:
    return struct.pack("!BH", 0x13, value)


def pack_suback(packet_identifier: int, *reason_codes: int) -> bytes:
    payload = struct.pack("!HB", packet_identifier, 0) + bytes(reason_codes)
    return bytes([PacketType.SUBACK << 4, len(payload)]) + payload


def pack_qos0(topic: str, payload: bytes, topic_alias=None) -> bytes:
    properties = {} if topic_alias is None else {"topic_alias": topic_alias}
    return pack_publish_packet(0, topic, payload, 0, False, False, properties)


def close_when_lost(protocol: MQTTProtocol) -> None:
    """
    Like the client without reconnect: when the connection is lost, publish
    calls fail and the messages queue ends.
    """

    async def watch() -> None:
        await protocol.wait_closed()
        await protocol.close(ConnectionLostError(protocol.server_disconnect))

    _watchers.append(asyncio.create_task(watch()))


async def connect(
    protocol: MQTTProtocol,
    connect_properties: Optional[ConnectProperties] = None,
    *,
    reconnect: bool = False,
    **connack_kwargs,
) -> FakeTransport:
    """
    :param reconnect: the state survives a lost connection, like with the
        client's automatic reconnect
    """
    transport = FakeTransport()
    protocol.set_connection(MQTTConnection(transport))

    task = asyncio.create_task(
        protocol.connect("client-id", None, None, properties=connect_properties)
    )

    fixed_header, _ = await transport.next_packet()
    assert fixed_header.packet_type == PacketType.CONNECT

    transport.feed(pack_connack(**connack_kwargs))
    await asyncio.wait_for(task, TIMEOUT)

    if not reconnect:
        close_when_lost(protocol)

    return transport


async def connect_with_keep_alive(
    protocol: MQTTProtocol, keepalive: int, **connack_kwargs
) -> FakeTransport:
    transport = FakeTransport()
    protocol.set_connection(MQTTConnection(transport))

    task = asyncio.create_task(
        protocol.connect("client-id", None, None, keepalive=keepalive)
    )

    await expect(transport, PacketType.CONNECT)

    transport.feed(pack_connack(**connack_kwargs))
    await asyncio.wait_for(task, TIMEOUT)
    close_when_lost(protocol)

    return transport


async def wait_for_connection_lost(protocol: MQTTProtocol, timeout: float = TIMEOUT):
    await asyncio.wait_for(protocol.wait_closed(), timeout)


async def expect(transport: FakeTransport, packet_type: PacketType):
    fixed_header, reader = await transport.next_packet()
    assert fixed_header.packet_type == packet_type

    return fixed_header, reader


async def receive_and_ack(protocol: MQTTProtocol, messages: "Messages"):
    message = await asyncio.wait_for(messages.get(), TIMEOUT)
    await protocol.ack(message)
    return message


async def expect_publish(transport: FakeTransport):
    return parse_publish_packet(*await expect(transport, PacketType.PUBLISH))


async def expect_disconnect(transport: FakeTransport, reason_code: int):
    fixed_header, reader = await expect(transport, PacketType.DISCONNECT)
    assert parse_disconnect_packet(fixed_header, reader) == DisconnectResult(
        reason_code, {}
    )


async def assert_nothing_leaked(transport: FakeTransport, session: InMemorySession):
    await asyncio.sleep(0)

    assert not transport.has_sent_packets()
    assert acquired_packet_identifiers(session) == set()
    assert await session.get_pending_outgoing_messages() == []


class RecordingMetrics(MetricsCollector):
    def __init__(self) -> None:
        self.events: list[tuple] = []

    def __getattribute__(self, name):
        if name.startswith("on_"):
            return lambda *args, **kwargs: self.events.append((name, args, kwargs))

        return super().__getattribute__(name)

    def get(self, name: str) -> list[tuple]:
        return [args for event, args, _ in self.events if event == name]


_protocols: list[MQTTProtocol] = []
_watchers: list[asyncio.Task[None]] = []


class Messages:
    """Incoming messages of the protocol, read like the application does."""

    def __init__(self, protocol: MQTTProtocol) -> None:
        self._protocol = protocol

    async def get(self) -> Optional[PublishResult]:
        return await self._protocol.next_message()

    def empty(self) -> bool:
        return not buffered_messages(self._protocol)


def build_protocol(metrics: Optional[MetricsCollector] = None):
    session = InMemorySession()

    protocol = MQTTProtocol(session, metrics)
    _protocols.append(protocol)

    return protocol, session, Messages(protocol)


def pack_publish(
    packet_identifier: int, qos: int, payload: bytes = b"x", dup: bool = False
) -> bytes:
    return pack_publish_packet(packet_identifier, "a/b", payload, qos, False, dup, {})


async def receive(messages: Messages):
    return await asyncio.wait_for(messages.get(), TIMEOUT)


async def expect_nothing_sent(transport: FakeTransport) -> None:
    await asyncio.sleep(0.01)
    assert not transport.has_sent_packets()


# Internal state which tests check; it's read only here, so a refactoring of
# the internals changes these functions, not the tests.


def has_connection(protocol: MQTTProtocol) -> bool:
    return protocol._context.connection is not None


def keep_alive_task(protocol: MQTTProtocol) -> Optional[asyncio.Task]:
    return protocol._keep_alive.task


def ping_in_flight(protocol: MQTTProtocol) -> bool:
    return protocol._keep_alive.ping_future is not None


def incoming_inflight(protocol: MQTTProtocol) -> set[int]:
    """Incoming QoS 1/2 messages which count to the client "Receive Maximum"."""
    return set(protocol._incoming.inflight)


def set_buffered_messages_warning(protocol: MQTTProtocol, value: int) -> None:
    protocol._incoming.buffer_monitor.threshold = value


def buffered_messages(protocol: MQTTProtocol) -> int:
    """Messages which wait for the application."""
    return len(protocol._incoming._buffer)


def acquired_packet_identifiers(session: InMemorySession) -> set[int]:
    return set(session._acquired_packet_identifiers)


def free_packet_identifiers(session: InMemorySession) -> int:
    return session._packet_identifiers_pool.qsize()
