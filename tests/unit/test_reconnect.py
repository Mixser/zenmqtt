import asyncio
import logging
import struct

import pytest
import pytest_asyncio

from gmqtt.client import MQTTClient
from gmqtt.connection import register_implementation
from gmqtt.exceptions import ConnectionLostError, NotConnectedError, SessionLostError
from gmqtt.mqtt.connect import pack_disconnect_packet
from gmqtt.mqtt.packet import PacketType
from gmqtt.mqtt.publish import PubAckResult, pack_puback_packet, pack_publish_packet
from gmqtt.mqtt.subscribe import Subscription
from gmqtt.mqtt.utils import read
from gmqtt.reconnect import ReconnectPolicy
from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    FakeTransport,
    RecordingMetrics,
    expect,
    expect_publish,
    pack_connack,
    pack_suback,
)

pytestmark = pytest.mark.asyncio

URL = "fakebroker://broker"

FAST = ReconnectPolicy(
    initial_delay=0.01, max_delay=0.02, jitter=0, connect_timeout=0.2
)

SESSION = {"session_expiry_interval": 60}

CLEAN_START_FLAG = 0x02


class FakeBroker:
    def __init__(self) -> None:
        self.connections: asyncio.Queue[FakeTransport] = asyncio.Queue()
        self.down = False
        # number of next connects to refuse
        self.refuse = 0

        register_implementation("fakebroker", self.factory)

    async def factory(self, url, options):
        if self.down or self.refuse:
            self.refuse = max(self.refuse - 1, 0)
            raise ConnectionRefusedError()

        transport = FakeTransport()
        self.connections.put_nowait(transport)
        return transport

    async def accept(
        self, connack: bytes = pack_connack(), timeout: float = TIMEOUT
    ) -> tuple[FakeTransport, bytes]:
        """Returns the transport and the CONNECT packet without fixed header."""
        transport = await asyncio.wait_for(self.connections.get(), timeout)

        fixed_header, stream = await expect(transport, PacketType.CONNECT)
        connect = await read(stream, fixed_header.length)

        transport.feed(connack)

        return transport, connect

    async def assert_no_connections(self, wait: float = 0.1) -> None:
        await asyncio.sleep(wait)
        assert self.connections.empty()


def connect_flags(connect: bytes) -> int:
    # protocol name (2 + 4), protocol version (1), connect flags (1)
    return connect[7]


def connect_client_id(connect: bytes) -> str:
    # protocol name, version, flags, keep alive, properties
    offset = 2 + 4 + 1 + 1 + 2
    properties_length = connect[offset]
    offset += 1 + properties_length

    (length,) = struct.unpack("!H", connect[offset : offset + 2])
    return connect[offset + 2 : offset + 2 + length].decode()


async def subscribed_topics(transport: FakeTransport) -> tuple[int, list[str]]:
    fixed_header, stream = await expect(transport, PacketType.SUBSCRIBE)
    payload = await read(stream, fixed_header.length)

    (packet_identifier,) = struct.unpack("!H", payload[:2])
    offset = 2 + 1 + payload[2]  # properties length (single byte here)

    topics = []
    while offset < len(payload):
        (length,) = struct.unpack("!H", payload[offset : offset + 2])
        topics.append(payload[offset + 2 : offset + 2 + length].decode())
        offset += 2 + length + 1  # options byte

    return packet_identifier, topics


async def wait_disconnected(client: MQTTClient) -> None:
    """Waits until the client notices that the connection is lost."""

    async def wait():
        while client.is_connected:
            await asyncio.sleep(0.001)

    await asyncio.wait_for(wait(), TIMEOUT)


def pack_unsuback(packet_identifier: int, *reason_codes: int) -> bytes:
    payload = struct.pack("!HB", packet_identifier, 0) + bytes(reason_codes)
    return bytes([PacketType.UNSUBACK << 4, len(payload)]) + payload


_clients: list[MQTTClient] = []


@pytest_asyncio.fixture(autouse=True)
async def close_clients():
    yield

    while _clients:
        client = _clients.pop()

        try:
            await asyncio.wait_for(client.disconnect(), TIMEOUT)
        except Exception:
            pass


@pytest.fixture
def broker() -> FakeBroker:
    return FakeBroker()


def build_client(**kwargs) -> MQTTClient:
    kwargs.setdefault("reconnect", FAST)
    client = MQTTClient("client-id", **kwargs)
    _clients.append(client)
    return client


async def connect(
    client: MQTTClient, broker: FakeBroker, connack: bytes = pack_connack(), **kwargs
) -> tuple[FakeTransport, bytes]:
    kwargs.setdefault("properties", SESSION)
    task = asyncio.create_task(client.connect(URL, keepalive=0, **kwargs))

    transport, connect_packet = await broker.accept(connack)
    await asyncio.wait_for(task, TIMEOUT)

    return transport, connect_packet


def test_policy_delays():
    policy = ReconnectPolicy(
        initial_delay=1, max_delay=5, multiplier=2, jitter=0, max_attempts=5
    )
    assert list(policy.delays()) == [1, 2, 4, 5, 5]

    policy = ReconnectPolicy(initial_delay=1, jitter=0.5, max_attempts=100)
    first_delays = [next(policy.delays()) for _ in range(100)]
    assert all(0.5 <= delay <= 1 for delay in first_delays)


@pytest.mark.parametrize(
    "kwargs",
    (
        {"initial_delay": -1},
        {"initial_delay": 10, "max_delay": 1},
        {"multiplier": 0.5},
        {"jitter": 2},
        {"max_attempts": 0},
        {"connect_timeout": 0},
    ),
)
def test_policy_validation(kwargs):
    with pytest.raises(ValueError):
        ReconnectPolicy(**kwargs)


async def test_reconnects_after_connection_lost(broker):
    client = build_client()
    connected, disconnected = [], []
    client.on_connect = connected.append

    async def on_disconnect(exc):
        disconnected.append(exc)

    client.on_disconnect = on_disconnect

    transport, _ = await connect(
        client,
        broker,
        pack_connack(properties=struct.pack("!BH", 0x12, 7) + b"auto-42"),
        clean_session=True,
    )
    assert client.is_connected
    assert client.client_id == "auto-42"

    transport.drop()

    # without Clean Start and with the assigned client id
    _, connect_packet = await broker.accept()
    assert not connect_flags(connect_packet) & CLEAN_START_FLAG
    assert connect_client_id(connect_packet) == "auto-42"

    await asyncio.wait_for(client.wait_connected(), TIMEOUT)

    assert client.is_connected
    assert len(connected) == 2
    assert len(disconnected) == 1
    assert isinstance(disconnected[0], ConnectionLostError)


async def test_retries_while_the_broker_is_down(broker):
    metrics = RecordingMetrics()
    client = build_client(metrics=metrics)
    transport, _ = await connect(client, broker)

    broker.refuse = 2
    transport.drop()

    await broker.accept()
    await asyncio.wait_for(client.wait_connected(), TIMEOUT)

    assert [attempt for attempt, _ in metrics.get("on_reconnect_attempt")] == [1, 2, 3]


async def test_retries_when_connack_doesnt_come(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    transport.drop()

    # the first attempt gets no CONNACK and is closed after connect_timeout
    silent = await asyncio.wait_for(broker.connections.get(), TIMEOUT)
    await expect(silent, PacketType.CONNECT)

    await broker.accept()
    await asyncio.wait_for(client.wait_connected(), TIMEOUT)

    assert silent.is_closing()


async def test_retries_when_server_is_busy(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    transport.drop()

    await broker.accept(pack_connack(reason_code=0x89))
    await broker.accept()

    await asyncio.wait_for(client.wait_connected(), TIMEOUT)


async def test_gives_up_after_max_attempts(broker):
    metrics = RecordingMetrics()
    client = build_client(
        metrics=metrics,
        reconnect=ReconnectPolicy(initial_delay=0.01, jitter=0, max_attempts=2),
    )
    transport, _ = await connect(client, broker)

    inflight = asyncio.create_task(client.publish("a/b", b"1", qos=1))
    await expect_publish(transport)

    broker.down = True
    transport.drop()

    with pytest.raises(ConnectionLostError):
        await asyncio.wait_for(inflight, TIMEOUT)

    assert len(metrics.get("on_reconnect_attempt")) == 2
    assert metrics.get("on_reconnect_gave_up") == [()]
    assert not client.is_connected

    with pytest.raises(NotConnectedError):
        await asyncio.wait_for(client.publish("a/b", b"2"), TIMEOUT)

    # the messages iterator ends
    with pytest.raises(StopAsyncIteration):
        await asyncio.wait_for(anext(client.messages), TIMEOUT)


@pytest.mark.parametrize("reason_code", (0x8E, 0x87, 0x9C))
async def test_doesnt_reconnect_after_non_retryable_disconnect(broker, reason_code):
    client = build_client()
    disconnected = []
    client.on_disconnect = disconnected.append

    transport, _ = await connect(client, broker)

    transport.feed(pack_disconnect_packet(reason_code, {}))

    with pytest.raises(StopAsyncIteration):
        await asyncio.wait_for(anext(client.messages), TIMEOUT)

    await broker.assert_no_connections()
    assert not client.is_connected
    assert disconnected[0].server_disconnect.reason_code == reason_code


async def test_reconnects_after_retryable_disconnect(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    # Server shutting down
    transport.feed(pack_disconnect_packet(0x8B, {}))

    await broker.accept()
    await asyncio.wait_for(client.wait_connected(), TIMEOUT)


async def test_stops_on_non_retryable_connack(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    transport.drop()

    # Bad User Name or Password
    await broker.accept(pack_connack(reason_code=0x86))

    with pytest.raises(NotConnectedError):
        await asyncio.wait_for(client.wait_connected(), TIMEOUT)

    await broker.assert_no_connections()


async def test_first_connect_failure_is_raised(broker):
    client = build_client()
    broker.down = True

    with pytest.raises(ConnectionRefusedError):
        await client.connect(URL)

    await broker.assert_no_connections()
    assert client._reconnect_task is None


async def test_inflight_publish_waits_across_reconnect(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    task = asyncio.create_task(client.publish("a/b", b"payload", qos=1))
    publish = await expect_publish(transport)

    transport.drop()

    transport, _ = await broker.accept(pack_connack(session_present=True))

    resent = await expect_publish(transport)
    assert resent.dup and resent.packet_identifier == publish.packet_identifier

    transport.feed(pack_puback_packet(publish.packet_identifier, 0, {}))

    result = await asyncio.wait_for(task, TIMEOUT)
    assert isinstance(result, PubAckResult)


async def test_inflight_publish_fails_when_session_is_lost(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    task = asyncio.create_task(client.publish("a/b", b"payload", qos=1))
    await expect_publish(transport)

    transport.drop()

    await broker.accept(pack_connack(session_present=False))

    with pytest.raises(SessionLostError):
        await asyncio.wait_for(task, TIMEOUT)


@pytest.mark.parametrize("qos", (0, 1))
async def test_publish_waits_while_reconnecting(broker, qos):
    client = build_client()
    transport, _ = await connect(client, broker)

    broker.down = True
    transport.drop()
    await wait_disconnected(client)

    task = asyncio.create_task(client.publish("a/b", b"payload", qos=qos))
    await asyncio.sleep(0.05)
    assert not task.done()

    broker.down = False
    transport, _ = await broker.accept()

    publish = await expect_publish(transport)
    assert publish.payload == b"payload"

    if qos:
        transport.feed(pack_puback_packet(publish.packet_identifier, 0, {}))

    await asyncio.wait_for(task, TIMEOUT)


async def test_subscribe_is_repeated_after_reconnect(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    task = asyncio.create_task(client.subscribe([("a/b", 1)]))
    await subscribed_topics(transport)

    # lost before SUBACK
    transport.drop()

    transport, _ = await broker.accept()
    packet_identifier, topics = await subscribed_topics(transport)
    assert topics == ["a/b"]

    transport.feed(pack_suback(packet_identifier, 0x01))
    result = await asyncio.wait_for(task, TIMEOUT)
    assert result.reason_codes == [0x01]


@pytest.mark.parametrize("session_present", (False, True))
async def test_subscriptions_are_restored_when_session_is_lost(broker, session_present):
    client = build_client()
    transport, _ = await connect(client, broker)

    task = asyncio.create_task(
        client.subscribe(
            [("a/b", 1), Subscription("c/d", qos=2, no_local=True), ("e/f", 0)]
        )
    )
    packet_identifier, _ = await subscribed_topics(transport)
    # e/f is rejected by the server
    transport.feed(pack_suback(packet_identifier, 0x01, 0x02, 0x87))
    await asyncio.wait_for(task, TIMEOUT)

    task = asyncio.create_task(client.unsubscribe(["c/d"]))
    _, stream = await expect(transport, PacketType.UNSUBSCRIBE)
    (packet_identifier,) = struct.unpack("!H", await read(stream, 2))
    transport.feed(pack_unsuback(packet_identifier, 0x00))
    await asyncio.wait_for(task, TIMEOUT)

    transport.drop()

    transport, _ = await broker.accept(pack_connack(session_present=session_present))

    if session_present:
        # the server keeps subscriptions in the session
        await asyncio.wait_for(client.wait_connected(), TIMEOUT)
        await asyncio.sleep(0.05)
        assert not transport.has_sent_packets()
        return

    packet_identifier, topics = await subscribed_topics(transport)
    assert topics == ["a/b"]

    transport.feed(pack_suback(packet_identifier, 0x01))
    await asyncio.wait_for(client.wait_connected(), TIMEOUT)


async def test_messages_continue_across_reconnect(broker):
    client = build_client()
    transport, _ = await connect(client, broker)
    messages = client.messages

    transport.feed(pack_publish_packet(0, "a/b", b"1", 0, False, False, {}))
    assert (await asyncio.wait_for(anext(messages), TIMEOUT)).payload == b"1"

    transport.drop()
    transport, _ = await broker.accept()

    transport.feed(pack_publish_packet(0, "a/b", b"2", 0, False, False, {}))
    assert (await asyncio.wait_for(anext(messages), TIMEOUT)).payload == b"2"


async def test_disconnect_stops_reconnect(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    await asyncio.wait_for(client.disconnect(), TIMEOUT)
    await expect(transport, PacketType.DISCONNECT)

    await broker.assert_no_connections()
    assert not client.is_connected

    with pytest.raises(StopAsyncIteration):
        await asyncio.wait_for(anext(client.messages), TIMEOUT)

    with pytest.raises(NotConnectedError):
        await client.publish("a/b", b"payload")


async def test_disconnect_while_reconnecting(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    broker.down = True
    transport.drop()
    await wait_disconnected(client)

    waiting = asyncio.create_task(client.publish("a/b", b"payload"))
    await asyncio.sleep(0.05)
    assert not waiting.done()

    await asyncio.wait_for(client.disconnect(), TIMEOUT)

    with pytest.raises(NotConnectedError):
        await asyncio.wait_for(waiting, TIMEOUT)

    broker.down = False
    await broker.assert_no_connections()


async def test_reconnect_disabled(broker):
    client = build_client(reconnect=None)
    transport, _ = await connect(client, broker)

    transport.drop()

    with pytest.raises(StopAsyncIteration):
        await asyncio.wait_for(anext(client.messages), TIMEOUT)

    with pytest.raises(NotConnectedError):
        await client.publish("a/b", b"payload")

    await broker.assert_no_connections()


async def test_warning_without_session_expiry(broker, caplog):
    client = build_client()

    with caplog.at_level(logging.WARNING, logger="gmqtt.client"):
        await connect(client, broker, properties={})

    assert "session_expiry_interval" in caplog.text


async def test_callback_errors_dont_break_reconnect(broker):
    client = build_client()

    def broken(_):
        raise RuntimeError("boom")

    client.on_connect = broken
    client.on_disconnect = broken

    transport, _ = await connect(client, broker)
    transport.drop()

    await broker.accept()
    await asyncio.wait_for(client.wait_connected(), TIMEOUT)


async def test_ack_across_reconnect(broker):
    client = build_client()
    transport, _ = await connect(client, broker)
    messages = client.messages

    transport.feed(pack_publish_packet(1, "a/b", b"1", 1, False, False, {}))
    message = await asyncio.wait_for(anext(messages), TIMEOUT)

    # lost before the message is processed
    transport.drop()
    transport, _ = await broker.accept(pack_connack(session_present=True))
    await asyncio.wait_for(client.wait_connected(), TIMEOUT)

    # the ack of the old delivery is ignored
    await client.ack(message)
    await asyncio.sleep(0.01)
    assert not transport.has_sent_packets()

    transport.feed(pack_publish_packet(1, "a/b", b"1", 1, False, True, {}))
    redelivered = await asyncio.wait_for(anext(messages), TIMEOUT)
    assert redelivered.dup

    await client.ack(redelivered)
    await expect(transport, PacketType.PUBACK)
