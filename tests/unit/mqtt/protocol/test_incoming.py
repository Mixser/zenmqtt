"""Incoming PUBLISH: QoS 1/2, topic aliases, receive maximum."""
import asyncio

import pytest

from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    build_protocol,
    connect,
    expect,
    expect_disconnect,
    pack_qos0,
    receive_and_ack,
    wait_for_connection_lost,
)
from zenmqtt.mqtt.connect import ConnectProperties
from zenmqtt.mqtt.packet import PacketType
from zenmqtt.mqtt.publish import (
    pack_publish_packet,
    pack_pubrel_packet,
    parse_pubcomp_packet,
)

pytestmark = pytest.mark.asyncio


async def test_incoming_qos1_message():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish_packet(7, "a/b", b"payload", 1, False, False, {}))

    message = await receive_and_ack(protocol, messages)
    assert message.payload == b"payload"

    await expect(transport, PacketType.PUBACK)


async def test_incoming_qos2_duplicate_is_delivered_once():
    protocol, session, messages = build_protocol()
    transport = await connect(protocol)

    packet = pack_publish_packet(7, "a/b", b"payload", 2, False, False, {})

    transport.feed(packet)
    await receive_and_ack(protocol, messages)
    await expect(transport, PacketType.PUBREC)

    # the duplicate is acknowledged without delivery
    transport.feed(pack_publish_packet(7, "a/b", b"payload", 2, False, True, {}))
    await expect(transport, PacketType.PUBREC)

    transport.feed(pack_pubrel_packet(7, 0, {}))
    await expect(transport, PacketType.PUBCOMP)

    assert messages.empty()
    # the flow is completed, so the identifier may be reused by the server
    assert await session.register_incoming_message(7)


async def test_incoming_topic_alias_is_resolved():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol, {"topic_alias_maximum": 2})

    transport.feed(pack_qos0("a/b", b"1", topic_alias=1))
    transport.feed(pack_qos0("", b"2", topic_alias=1))
    # the alias is re-assigned to another topic
    transport.feed(pack_qos0("c/d", b"3", topic_alias=1))
    transport.feed(pack_qos0("", b"4", topic_alias=1))

    received = [await asyncio.wait_for(messages.get(), TIMEOUT) for _ in range(4)]

    assert [(m.topic, m.payload) for m in received] == [
        ("a/b", b"1"),
        ("a/b", b"2"),
        ("c/d", b"3"),
        ("c/d", b"4"),
    ]


@pytest.mark.parametrize(
    "topic_alias_maximum, topic, topic_alias, reason_code",
    (
        # the client didn't allow topic aliases
        (None, "a/b", 1, 0x94),
        (2, "a/b", 3, 0x94),
        (2, "a/b", 0, 0x94),
        # unknown alias without topic
        (2, "", 1, 0x82),
        # neither topic nor alias
        (2, "", None, 0x82),
    ),
)
async def test_invalid_incoming_topic_alias_closes_connection(
    topic_alias_maximum, topic, topic_alias, reason_code
):
    connect_properties: ConnectProperties = {}
    if topic_alias_maximum is not None:
        connect_properties["topic_alias_maximum"] = topic_alias_maximum

    protocol, _, messages = build_protocol()
    transport = await connect(protocol, connect_properties)

    transport.feed(pack_qos0(topic, b"payload", topic_alias=topic_alias))

    await expect_disconnect(transport, reason_code)
    await wait_for_connection_lost(protocol)

    assert await asyncio.wait_for(messages.get(), TIMEOUT) is None


async def test_incoming_topic_aliases_are_reset_on_reconnect():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol, {"topic_alias_maximum": 2})

    transport.feed(pack_qos0("a/b", b"1", topic_alias=1))
    transport.drop()
    await wait_for_connection_lost(protocol)

    transport = await connect(protocol, {"topic_alias_maximum": 2})
    transport.feed(pack_qos0("", b"2", topic_alias=1))

    await expect_disconnect(transport, 0x82)


async def test_pubrel_with_unknown_packet_identifier():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_pubrel_packet(42, 0, {}))

    pubcomp = parse_pubcomp_packet(*await expect(transport, PacketType.PUBCOMP))
    assert pubcomp.packet_identifier == 42
    assert pubcomp.reason_code == 0x92


async def test_pubrel_with_known_packet_identifier():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish_packet(7, "a/b", b"payload", 2, False, False, {}))
    await receive_and_ack(protocol, messages)
    await expect(transport, PacketType.PUBREC)

    transport.feed(pack_pubrel_packet(7, 0, {}))

    pubcomp = parse_pubcomp_packet(*await expect(transport, PacketType.PUBCOMP))
    assert pubcomp.reason_code == 0x00


async def test_client_receive_maximum():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol, {"receive_maximum": 1})
    payloads = []

    transport.feed(pack_publish_packet(1, "a/b", b"1", 2, False, False, {}))
    payloads.append((await receive_and_ack(protocol, messages)).payload)
    await expect(transport, PacketType.PUBREC)

    # the re-sent message keeps its slot
    transport.feed(pack_publish_packet(1, "a/b", b"1", 2, False, True, {}))
    await expect(transport, PacketType.PUBREC)

    # PUBCOMP frees the slot
    transport.feed(pack_pubrel_packet(1, 0, {}))
    await expect(transport, PacketType.PUBCOMP)

    transport.feed(pack_publish_packet(2, "a/b", b"2", 1, False, False, {}))
    payloads.append((await receive_and_ack(protocol, messages)).payload)
    await expect(transport, PacketType.PUBACK)

    transport.feed(pack_publish_packet(3, "a/b", b"3", 2, False, False, {}))
    payloads.append((await receive_and_ack(protocol, messages)).payload)
    await expect(transport, PacketType.PUBREC)

    # the slot is held by the QoS 2 message
    transport.feed(pack_publish_packet(4, "a/b", b"4", 1, False, False, {}))
    await expect_disconnect(transport, 0x93)
    await wait_for_connection_lost(protocol)

    assert await asyncio.wait_for(messages.get(), TIMEOUT) is None
    assert payloads == [b"1", b"2", b"3"]


async def test_client_receive_maximum_is_reset_on_reconnect():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol, {"receive_maximum": 1})

    transport.feed(pack_publish_packet(1, "a/b", b"1", 2, False, False, {}))
    await receive_and_ack(protocol, messages)
    await expect(transport, PacketType.PUBREC)

    transport.drop()
    await wait_for_connection_lost(protocol)
    assert await asyncio.wait_for(messages.get(), TIMEOUT) is None

    transport = await connect(protocol, {"receive_maximum": 1}, session_present=True)

    # a new message before the server re-sends PUBREL for the old one
    transport.feed(pack_publish_packet(2, "a/b", b"2", 2, False, False, {}))
    await receive_and_ack(protocol, messages)
    await expect(transport, PacketType.PUBREC)

    transport.feed(pack_pubrel_packet(1, 0, {}))
    await expect(transport, PacketType.PUBCOMP)
