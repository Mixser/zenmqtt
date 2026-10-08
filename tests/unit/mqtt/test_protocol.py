import asyncio
import logging
import struct
from typing import Optional

import pytest
import pytest_asyncio

from gmqtt.connection import MQTTConnection, MQTTConnectionTransport
from gmqtt.exceptions import (
    ConnectionLostError,
    NotConnectedError,
    QoSNotSupportedError,
)
from gmqtt.metrics import MetricsCollector
from gmqtt.mqtt.connect import DisconnectResult, WillMessage, parse_disconnect_packet
from gmqtt.mqtt.packet import PacketType, parse_fixed_header
from gmqtt.mqtt.protocol import MQTTProtocol
from gmqtt.mqtt.publish import (
    PubAckResult,
    PubCompResult,
    PubRecResult,
    pack_puback_packet,
    pack_pubcomp_packet,
    pack_publish_packet,
    pack_pubrec_packet,
    pack_pubrel_packet,
    parse_publish_packet,
    parse_pubrel_packet,
)
from gmqtt.mqtt.session import InMemorySession, OutgoingMessageState
from gmqtt.mqtt.utils import read
from tests.unit.mqtt.utils import build_async_generator

pytestmark = pytest.mark.asyncio

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

        stream = build_async_generator(payload)
        fixed_header = await parse_fixed_header(stream)
        assert fixed_header

        return fixed_header, stream

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


async def connect(protocol: MQTTProtocol, **connack_kwargs) -> FakeTransport:
    transport = FakeTransport()
    protocol.set_connection(MQTTConnection(transport))

    task = asyncio.create_task(protocol.connect("client-id", None, None))

    fixed_header, _ = await transport.next_packet()
    assert fixed_header.packet_type == PacketType.CONNECT

    transport.feed(pack_connack(**connack_kwargs))
    await asyncio.wait_for(task, TIMEOUT)

    return transport


async def wait_for_connection_lost(protocol: MQTTProtocol):
    assert protocol._read_loop_task
    await asyncio.wait_for(protocol._read_loop_task, TIMEOUT)


_protocols: list[MQTTProtocol] = []


@pytest_asyncio.fixture(autouse=True)
async def close_protocols():
    yield

    while _protocols:
        protocol = _protocols.pop()

        if protocol._connection:
            await asyncio.wait_for(protocol.disconnect(reason=0), TIMEOUT)


def build_protocol(metrics: Optional[MetricsCollector] = None):
    session = InMemorySession()
    messages: asyncio.Queue = asyncio.Queue()

    protocol = MQTTProtocol(messages, session, metrics)
    _protocols.append(protocol)

    return protocol, session, messages


async def expect(transport: FakeTransport, packet_type: PacketType):
    fixed_header, stream = await transport.next_packet()
    assert fixed_header.packet_type == packet_type

    return fixed_header, stream


async def expect_publish(transport: FakeTransport):
    return await parse_publish_packet(*await expect(transport, PacketType.PUBLISH))


async def test_qos1_publish_flow():
    protocol, session, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=1))

    publish = await expect_publish(transport)
    assert publish.qos == 1 and not publish.dup
    assert len(await session.get_pending_outgoing_messages()) == 1

    transport.feed(pack_puback_packet(publish.packet_identifier, 0, {}))

    result = await asyncio.wait_for(task, TIMEOUT)

    assert isinstance(result, PubAckResult)
    assert await session.get_pending_outgoing_messages() == []
    assert session._acquired_packet_identifiers == set()


async def test_qos2_publish_flow():
    protocol, session, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=2))

    publish = await expect_publish(transport)
    transport.feed(pack_pubrec_packet(publish.packet_identifier, 0, {}))

    pubrel = await parse_pubrel_packet(*await expect(transport, PacketType.PUBREL))
    assert pubrel.packet_identifier == publish.packet_identifier

    (pending,) = await session.get_pending_outgoing_messages()
    assert pending.state == OutgoingMessageState.AWAITING_COMP

    transport.feed(pack_pubcomp_packet(publish.packet_identifier, 0, {}))

    result = await asyncio.wait_for(task, TIMEOUT)

    assert isinstance(result, PubCompResult)
    assert await session.get_pending_outgoing_messages() == []
    assert session._acquired_packet_identifiers == set()


async def test_qos2_publish_rejected_by_pubrec():
    protocol, session, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=2))

    publish = await expect_publish(transport)
    transport.feed(pack_pubrec_packet(publish.packet_identifier, 0x87, {}))

    result = await asyncio.wait_for(task, TIMEOUT)

    assert isinstance(result, PubRecResult)
    assert result.reason_code == 0x87
    assert not transport.has_sent_packets()
    assert await session.get_pending_outgoing_messages() == []


async def test_publish_when_not_connected():
    protocol, _, _ = build_protocol()

    with pytest.raises(NotConnectedError):
        await protocol.publish("a/b", b"payload", qos=1)


async def test_connection_lost_then_resend_with_session_present():
    protocol, session, _ = build_protocol()
    transport = await connect(protocol)

    qos2_task = asyncio.create_task(protocol.publish("a/b", b"first", qos=2))
    qos2_publish = await expect_publish(transport)

    qos1_task = asyncio.create_task(
        protocol.publish("a/b", b"second", qos=1, properties={"topic_alias": 1})
    )
    qos1_publish = await expect_publish(transport)

    transport.feed(pack_pubrec_packet(qos2_publish.packet_identifier, 0, {}))
    await expect(transport, PacketType.PUBREL)

    transport.drop()
    await wait_for_connection_lost(protocol)

    for task in (qos2_task, qos1_task):
        with pytest.raises(ConnectionLostError):
            await task

    transport = await connect(protocol, session_present=True)

    # the original order is kept: PUBREL for the first message, then PUBLISH
    pubrel = await parse_pubrel_packet(*await expect(transport, PacketType.PUBREL))
    assert pubrel.packet_identifier == qos2_publish.packet_identifier

    resent = await expect_publish(transport)
    assert resent.dup
    assert resent.packet_identifier == qos1_publish.packet_identifier
    assert resent.payload == b"second"
    assert "topic_alias" not in resent.properties

    transport.feed(pack_pubcomp_packet(qos2_publish.packet_identifier, 0, {}))
    transport.feed(pack_puback_packet(qos1_publish.packet_identifier, 0, {}))

    # acks arrive for messages without futures; the session gets clean anyway
    task = asyncio.create_task(protocol.publish("a/b", b"third", qos=1))
    publish = await expect_publish(transport)
    transport.feed(pack_puback_packet(publish.packet_identifier, 0, {}))
    await asyncio.wait_for(task, TIMEOUT)

    assert await session.get_pending_outgoing_messages() == []
    assert session._acquired_packet_identifiers == set()


async def test_reconnect_without_session_present_discards_session():
    protocol, session, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=1))
    await expect_publish(transport)

    transport.drop()
    await wait_for_connection_lost(protocol)

    with pytest.raises(ConnectionLostError):
        await task

    transport = await connect(protocol, session_present=False)

    assert not transport.has_sent_packets()
    assert await session.get_pending_outgoing_messages() == []
    assert session._acquired_packet_identifiers == set()


async def test_incoming_qos1_message():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish_packet(7, "a/b", b"payload", 1, False, False, {}))

    await expect(transport, PacketType.PUBACK)
    assert messages.get_nowait().payload == b"payload"


async def test_incoming_qos2_duplicate_is_delivered_once():
    protocol, session, messages = build_protocol()
    transport = await connect(protocol)

    packet = pack_publish_packet(7, "a/b", b"payload", 2, False, False, {})

    transport.feed(packet)
    await expect(transport, PacketType.PUBREC)

    transport.feed(pack_publish_packet(7, "a/b", b"payload", 2, False, True, {}))
    await expect(transport, PacketType.PUBREC)

    transport.feed(pack_pubrel_packet(7, 0, {}))
    await expect(transport, PacketType.PUBCOMP)

    assert messages.qsize() == 1
    # the flow is completed, so the identifier may be reused by the server
    assert await session.register_incoming_message(7)


async def test_pending_subscribe_on_connection_lost():
    protocol, session, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.subscribe([("a/b", 1)]))
    await expect(transport, PacketType.SUBSCRIBE)

    transport.drop()

    with pytest.raises(ConnectionLostError):
        await asyncio.wait_for(task, TIMEOUT)

    await wait_for_connection_lost(protocol)
    assert session._acquired_packet_identifiers == set()


async def test_disconnect_with_pending_publish():
    protocol, session, messages = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=1))
    await expect_publish(transport)

    await asyncio.wait_for(protocol.disconnect(reason=0), TIMEOUT)
    await expect(transport, PacketType.DISCONNECT)

    with pytest.raises(ConnectionLostError):
        await task

    assert len(await session.get_pending_outgoing_messages()) == 1
    assert messages.get_nowait() is None


async def test_flow_control_limits_inflight_messages():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol, properties=receive_maximum(1))

    first = asyncio.create_task(protocol.publish("a/b", b"first", qos=1))
    first_publish = await expect_publish(transport)

    second = asyncio.create_task(protocol.publish("a/b", b"second", qos=1))
    await asyncio.sleep(0.01)
    assert not transport.has_sent_packets()

    transport.feed(pack_puback_packet(first_publish.packet_identifier, 0, {}))
    await asyncio.wait_for(first, TIMEOUT)

    second_publish = await expect_publish(transport)
    assert second_publish.payload == b"second"

    transport.feed(pack_puback_packet(second_publish.packet_identifier, 0, {}))
    await asyncio.wait_for(second, TIMEOUT)


async def test_failed_connack_is_returned():
    protocol, _, _ = build_protocol()
    transport = FakeTransport()
    protocol.set_connection(MQTTConnection(transport))

    task = asyncio.create_task(protocol.connect("client-id", None, None))
    await expect(transport, PacketType.CONNECT)
    transport.feed(pack_connack(reason_code=0x87))

    result = await asyncio.wait_for(task, TIMEOUT)
    assert result.result_code == 0x87

    with pytest.raises(NotConnectedError):
        await protocol.publish("a/b", b"payload")


async def test_ping():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.ping())
    await expect(transport, PacketType.PINGREQ)

    transport.feed(b"\xd0\x00")

    assert await asyncio.wait_for(task, TIMEOUT) is None
    assert protocol._ping_future is None


async def test_concurrent_pings_share_pingreq():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    tasks = [asyncio.create_task(protocol.ping()) for _ in range(3)]
    await expect(transport, PacketType.PINGREQ)
    await asyncio.sleep(0)

    assert not transport.has_sent_packets()

    transport.feed(b"\xd0\x00")

    await asyncio.wait_for(asyncio.gather(*tasks), TIMEOUT)


async def test_ping_when_not_connected():
    protocol, _, _ = build_protocol()

    with pytest.raises(NotConnectedError):
        await protocol.ping()


async def test_pending_ping_on_connection_lost():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.ping())
    await expect(transport, PacketType.PINGREQ)

    transport.drop()

    with pytest.raises(ConnectionLostError):
        await asyncio.wait_for(task, TIMEOUT)

    await wait_for_connection_lost(protocol)
    assert protocol._ping_future is None


async def test_unexpected_pingresp_is_ignored():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    transport.feed(b"\xd0\x00")

    # the read loop keeps working after PINGRESP without PINGREQ
    task = asyncio.create_task(protocol.ping())
    await expect(transport, PacketType.PINGREQ)

    transport.feed(b"\xd0\x00")
    await asyncio.wait_for(task, TIMEOUT)


async def test_connect_with_will():
    protocol, _, _ = build_protocol()
    transport = FakeTransport()
    protocol.set_connection(MQTTConnection(transport))

    will = WillMessage("a/b", b"bye", qos=1, retain=False, properties={})
    task = asyncio.create_task(protocol.connect("client-id", None, None, will=will))

    fixed_header, stream = await expect(transport, PacketType.CONNECT)
    packet = await read(stream, fixed_header.length)

    connect_flags = packet[7]
    assert connect_flags & 0x04  # will flag
    assert packet.endswith(b"\x00\x03a/b\x00\x03bye")

    transport.feed(pack_connack())
    await asyncio.wait_for(task, TIMEOUT)


def server_keep_alive(value: int) -> bytes:
    return struct.pack("!BH", 0x13, value)


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

    return transport


async def test_keep_alive_sends_pingreq_when_idle():
    protocol, _, _ = build_protocol()
    transport = await connect_with_keep_alive(protocol, keepalive=1)

    for _ in range(2):
        fixed_header, _ = await transport.next_packet(timeout=2)
        assert fixed_header.packet_type == PacketType.PINGREQ

        transport.feed(b"\xd0\x00")


async def test_keep_alive_is_postponed_by_other_packets():
    protocol, _, _ = build_protocol()
    transport = await connect_with_keep_alive(protocol, keepalive=1)

    await asyncio.sleep(0.6)
    await protocol.publish("a/b", b"payload", qos=0)
    await expect(transport, PacketType.PUBLISH)

    # 1.2s after CONNECT, but only 0.6s after PUBLISH
    await asyncio.sleep(0.6)
    assert not transport.has_sent_packets()

    fixed_header, _ = await transport.next_packet(timeout=1)
    assert fixed_header.packet_type == PacketType.PINGREQ


async def test_keep_alive_closes_connection_without_pingresp():
    protocol, _, messages = build_protocol()
    transport = await connect_with_keep_alive(protocol, keepalive=1)

    fixed_header, _ = await transport.next_packet(timeout=2)
    assert fixed_header.packet_type == PacketType.PINGREQ

    assert protocol._read_loop_task
    await asyncio.wait_for(protocol._read_loop_task, 2)

    assert transport.is_closing()
    assert protocol._keep_alive_task is None
    assert messages.get_nowait() is None


async def test_server_keep_alive_overrides_client_value():
    protocol, _, _ = build_protocol()
    transport = await connect_with_keep_alive(
        protocol, keepalive=0, properties=server_keep_alive(1)
    )

    fixed_header, _ = await transport.next_packet(timeout=2)
    assert fixed_header.packet_type == PacketType.PINGREQ

    transport.feed(b"\xd0\x00")


async def test_keep_alive_disabled():
    protocol, _, _ = build_protocol()
    await connect_with_keep_alive(protocol, keepalive=0)

    assert protocol._keep_alive_task is None


async def test_keep_alive_stops_on_disconnect():
    protocol, _, _ = build_protocol()
    await connect_with_keep_alive(protocol, keepalive=1)

    keep_alive_task = protocol._keep_alive_task
    assert keep_alive_task

    await asyncio.wait_for(protocol.disconnect(reason=0), TIMEOUT)

    assert keep_alive_task.cancelled()
    assert protocol._keep_alive_task is None


async def test_auth_packet_is_skipped():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    # AUTH with reason code 0x18 (Continue authentication) and
    # authentication method property, then PINGRESP right after it
    auth_body = b"\x18\x07\x15\x00\x04SCRA"
    transport.feed(bytes([PacketType.AUTH << 4, len(auth_body)]) + auth_body)

    task = asyncio.create_task(protocol.ping())
    await expect(transport, PacketType.PINGREQ)

    transport.feed(b"\xd0\x00")

    # PINGRESP is parsed correctly only if the AUTH body was skipped
    await asyncio.wait_for(task, TIMEOUT)
    assert protocol._connected


class RecordingMetrics(MetricsCollector):
    def __init__(self) -> None:
        self.events: list[tuple] = []

    def __getattribute__(self, name):
        if name.startswith("on_"):
            return lambda *args, **kwargs: self.events.append((name, args, kwargs))

        return super().__getattribute__(name)

    def get(self, name: str) -> list[tuple]:
        return [args for event, args, _ in self.events if event == name]


def pack_suback(packet_identifier: int, *reason_codes: int) -> bytes:
    payload = struct.pack("!HB", packet_identifier, 0) + bytes(reason_codes)
    return bytes([PacketType.SUBACK << 4, len(payload)]) + payload


async def test_metrics_connect_and_disconnect():
    metrics = RecordingMetrics()
    protocol, _, _ = build_protocol(metrics)
    transport = await connect(protocol)

    [(reason_code, duration)] = metrics.get("on_connect")
    assert reason_code == 0 and duration >= 0

    assert metrics.get("on_packet_received") == [
        (PacketType.CONNACK, len(pack_connack()))
    ]
    [(packet_type, size)] = metrics.get("on_packet_sent")
    assert packet_type == PacketType.CONNECT and size > 0

    await asyncio.wait_for(protocol.disconnect(reason=0), TIMEOUT)
    await expect(transport, PacketType.DISCONNECT)

    assert metrics.get("on_packet_sent")[-1] == (PacketType.DISCONNECT, 4)
    assert ("on_connection_closed", (), {"lost": False}) in metrics.events


async def test_metrics_connection_lost():
    metrics = RecordingMetrics()
    protocol, _, _ = build_protocol(metrics)
    transport = await connect(protocol)

    transport.drop()
    await wait_for_connection_lost(protocol)

    assert ("on_connection_closed", (), {"lost": True}) in metrics.events


async def test_metrics_failed_connect_is_not_closed_connection():
    metrics = RecordingMetrics()
    protocol, _, _ = build_protocol(metrics)
    await connect(protocol, reason_code=0x87)

    assert [code for code, _ in metrics.get("on_connect")] == [0x87]

    await asyncio.wait_for(protocol.disconnect(reason=0), TIMEOUT)

    assert metrics.get("on_connection_closed") == []


async def test_metrics_publish():
    metrics = RecordingMetrics()
    protocol, _, _ = build_protocol(metrics)
    transport = await connect(protocol)

    await protocol.publish("a/b", b"payload", qos=0)
    await expect_publish(transport)

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=1))
    publish = await expect_publish(transport)
    transport.feed(pack_puback_packet(publish.packet_identifier, 0x10, {}))
    await asyncio.wait_for(task, TIMEOUT)

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=2))
    publish = await expect_publish(transport)
    transport.feed(pack_pubrec_packet(publish.packet_identifier, 0, {}))
    await expect(transport, PacketType.PUBREL)
    transport.feed(pack_pubcomp_packet(publish.packet_identifier, 0, {}))
    await asyncio.wait_for(task, TIMEOUT)

    completed = metrics.get("on_publish_completed")
    assert [(qos, reason_code) for qos, reason_code, _ in completed] == [
        (0, 0),
        (1, 0x10),
        (2, 0),
    ]
    assert all(duration >= 0 for _, _, duration in completed)


async def test_metrics_incoming_messages():
    metrics = RecordingMetrics()
    protocol, _, _ = build_protocol(metrics)
    transport = await connect(protocol)

    transport.feed(pack_publish_packet(0, "a/b", b"0", 0, False, False, {}))
    transport.feed(pack_publish_packet(1, "a/b", b"1", 1, False, False, {}))
    await expect(transport, PacketType.PUBACK)

    for _ in range(2):
        transport.feed(pack_publish_packet(2, "a/b", b"2", 2, False, False, {}))
        await expect(transport, PacketType.PUBREC)

    assert metrics.get("on_message_received") == [
        (0, False),
        (1, False),
        (2, False),
        (2, True),
    ]


async def test_metrics_ping():
    metrics = RecordingMetrics()
    protocol, _, _ = build_protocol(metrics)
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.ping())
    await expect(transport, PacketType.PINGREQ)
    transport.feed(b"\xd0\x00")
    await asyncio.wait_for(task, TIMEOUT)

    [(duration,)] = metrics.get("on_ping")
    assert duration >= 0


async def test_metrics_ping_timeout():
    metrics = RecordingMetrics()
    protocol, _, _ = build_protocol(metrics)
    await connect_with_keep_alive(protocol, keepalive=1)

    assert protocol._read_loop_task
    await asyncio.wait_for(protocol._read_loop_task, 3)

    assert metrics.get("on_ping_timeout") == [()]
    assert ("on_connection_closed", (), {"lost": True}) in metrics.events


async def test_metrics_subscribe_and_unsubscribe():
    metrics = RecordingMetrics()
    protocol, _, _ = build_protocol(metrics)
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.subscribe([("a/b", 1), ("c/d", 2)]))
    _, stream = await expect(transport, PacketType.SUBSCRIBE)
    (packet_identifier,) = struct.unpack("!H", await read(stream, 2))
    transport.feed(pack_suback(packet_identifier, 0x01, 0x80))
    await asyncio.wait_for(task, TIMEOUT)

    task = asyncio.create_task(protocol.unsubscribe(["a/b"]))
    _, stream = await expect(transport, PacketType.UNSUBSCRIBE)
    (packet_identifier,) = struct.unpack("!H", await read(stream, 2))
    unsuback = struct.pack("!HBB", packet_identifier, 0, 0)
    transport.feed(bytes([PacketType.UNSUBACK << 4, len(unsuback)]) + unsuback)
    await asyncio.wait_for(task, TIMEOUT)

    [(reason_codes, _)] = metrics.get("on_subscribe_completed")
    assert reason_codes == [0x01, 0x80]

    [(reason_codes, _)] = metrics.get("on_unsubscribe_completed")
    assert reason_codes == [0x00]


async def test_metrics_send_quota_wait():
    metrics = RecordingMetrics()
    protocol, _, _ = build_protocol(metrics)
    transport = await connect(protocol, properties=receive_maximum(1))

    first = asyncio.create_task(protocol.publish("a/b", b"first", qos=1))
    first_publish = await expect_publish(transport)

    second = asyncio.create_task(protocol.publish("a/b", b"second", qos=1))
    await asyncio.sleep(0.01)

    transport.feed(pack_puback_packet(first_publish.packet_identifier, 0, {}))
    second_publish = await expect_publish(transport)
    transport.feed(pack_puback_packet(second_publish.packet_identifier, 0, {}))
    await asyncio.wait_for(asyncio.gather(first, second), TIMEOUT)

    [(duration,)] = metrics.get("on_send_quota_wait")
    assert duration >= 0.01


async def test_metrics_messages_resent():
    metrics = RecordingMetrics()
    protocol, _, _ = build_protocol(metrics)
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=1))
    publish = await expect_publish(transport)

    transport.drop()
    await wait_for_connection_lost(protocol)

    with pytest.raises(ConnectionLostError):
        await task

    transport = await connect(protocol, session_present=True)
    await expect_publish(transport)

    assert metrics.get("on_messages_resent") == [(1,)]

    # the re-sent message is completed by its acknowledgement
    transport.feed(pack_puback_packet(publish.packet_identifier, 0, {}))
    ping = asyncio.create_task(protocol.ping())
    await expect(transport, PacketType.PINGREQ)
    transport.feed(b"\xd0\x00")
    await asyncio.wait_for(ping, TIMEOUT)

    assert [qos for qos, _, _ in metrics.get("on_publish_completed")] == [1]


def maximum_qos(value: int) -> bytes:
    return struct.pack("!BB", 0x24, value)


@pytest.mark.parametrize("qos", (-1, 3, 8))
async def test_publish_with_invalid_qos(qos):
    protocol, session, _ = build_protocol()
    transport = await connect(protocol)

    with pytest.raises(ValueError):
        await asyncio.wait_for(protocol.publish("a/b", b"payload", qos=qos), TIMEOUT)

    assert not transport.has_sent_packets()
    assert session._acquired_packet_identifiers == set()


async def test_publish_respects_server_maximum_qos():
    protocol, session, _ = build_protocol()
    transport = await connect(protocol, properties=maximum_qos(1))

    with pytest.raises(QoSNotSupportedError):
        await asyncio.wait_for(protocol.publish("a/b", b"payload", qos=2), TIMEOUT)

    assert not transport.has_sent_packets()
    assert session._acquired_packet_identifiers == set()

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=1))
    publish = await expect_publish(transport)
    transport.feed(pack_puback_packet(publish.packet_identifier, 0, {}))
    await asyncio.wait_for(task, TIMEOUT)


async def test_maximum_qos_is_reset_on_reconnect():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol, properties=maximum_qos(0))

    transport.drop()
    await wait_for_connection_lost(protocol)

    # the new server doesn't limit QoS
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=2))
    publish = await expect_publish(transport)
    assert publish.qos == 2

    transport.feed(pack_pubrec_packet(publish.packet_identifier, 0x80, {}))
    await asyncio.wait_for(task, TIMEOUT)


async def test_incoming_publish_with_qos_3_closes_connection():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(b"\x36\x0a\x00\x03a/b\x00\x01\x00pay")

    fixed_header, stream = await expect(transport, PacketType.DISCONNECT)
    assert await parse_disconnect_packet(fixed_header, stream) == DisconnectResult(
        0x81, {}
    )

    await wait_for_connection_lost(protocol)

    assert transport.is_closing()
    # the malformed message isn't delivered
    assert messages.get_nowait() is None


async def test_discarded_pending_messages_are_logged(caplog):
    protocol, session, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=1))
    await expect_publish(transport)

    transport.drop()
    await wait_for_connection_lost(protocol)

    with pytest.raises(ConnectionLostError):
        await task

    with caplog.at_level(logging.WARNING, logger="gmqtt.mqtt.protocol"):
        await connect(protocol, session_present=False)

    assert "discard_pending_messages count:1" in caplog.text
    assert await session.get_pending_outgoing_messages() == []


async def test_nothing_is_logged_when_session_is_empty(caplog):
    protocol, _, _ = build_protocol()

    with caplog.at_level(logging.WARNING, logger="gmqtt.mqtt.protocol"):
        await connect(protocol, session_present=False)

    assert "discard_pending_messages" not in caplog.text


async def test_disconnect_with_reason():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    await asyncio.wait_for(
        protocol.disconnect(reason=0x04, properties={"reason_string": "bye"}),
        TIMEOUT,
    )

    fixed_header, stream = await expect(transport, PacketType.DISCONNECT)
    assert await parse_disconnect_packet(fixed_header, stream) == DisconnectResult(
        0x04, {"reason_string": "bye"}
    )


async def test_server_disconnect_is_exposed():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.subscribe([("a/b", 1)]))
    await expect(transport, PacketType.SUBSCRIBE)

    # 0x8B "Server shutting down"
    transport.feed(b"\xe0\x01\x8b")

    with pytest.raises(ConnectionLostError) as exc_info:
        await asyncio.wait_for(task, TIMEOUT)

    expected = DisconnectResult(0x8B, {})

    assert exc_info.value.server_disconnect == expected
    assert protocol.server_disconnect == expected

    await wait_for_connection_lost(protocol)

    # the next connection starts without it
    await connect(protocol)
    assert protocol.server_disconnect is None


async def test_server_disconnect_is_none_when_connection_dropped():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.subscribe([("a/b", 1)]))
    await expect(transport, PacketType.SUBSCRIBE)

    transport.drop()

    with pytest.raises(ConnectionLostError) as exc_info:
        await asyncio.wait_for(task, TIMEOUT)

    assert exc_info.value.server_disconnect is None
    assert protocol.server_disconnect is None
