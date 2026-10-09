"""Metrics events of the protocol."""
import asyncio
import struct

import pytest

from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    RecordingMetrics,
    build_protocol,
    connect,
    connect_with_keep_alive,
    expect,
    expect_publish,
    pack_connack,
    pack_suback,
    receive_and_ack,
    receive_maximum,
    wait_for_connection_lost,
)
from zenmqtt.exceptions import ConnectionLostError
from zenmqtt.mqtt.packet import PacketType
from zenmqtt.mqtt.publish import (
    pack_puback_packet,
    pack_pubcomp_packet,
    pack_publish_packet,
    pack_pubrec_packet,
)


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
    protocol, _, messages = build_protocol(metrics)
    transport = await connect(protocol)

    transport.feed(pack_publish_packet(0, "a/b", b"0", 0, False, False, {}))
    transport.feed(pack_publish_packet(1, "a/b", b"1", 1, False, False, {}))
    await receive_and_ack(protocol, messages)
    await receive_and_ack(protocol, messages)
    await expect(transport, PacketType.PUBACK)

    transport.feed(pack_publish_packet(2, "a/b", b"2", 2, False, False, {}))
    await receive_and_ack(protocol, messages)
    await expect(transport, PacketType.PUBREC)

    transport.feed(pack_publish_packet(2, "a/b", b"2", 2, False, True, {}))
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
    _, reader = await expect(transport, PacketType.SUBSCRIBE)
    packet_identifier = reader.read_uint16()
    transport.feed(pack_suback(packet_identifier, 0x01, 0x80))
    await asyncio.wait_for(task, TIMEOUT)

    task = asyncio.create_task(protocol.unsubscribe(["a/b"]))
    _, reader = await expect(transport, PacketType.UNSUBSCRIBE)
    packet_identifier = reader.read_uint16()
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
