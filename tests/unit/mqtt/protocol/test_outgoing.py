"""Outgoing PUBLISH: QoS 1/2 flows, session, flow control."""
import asyncio

import pytest

from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    build_protocol,
    connect,
    expect,
    expect_publish,
    receive_maximum,
    topic_alias_maximum,
    wait_for_connection_lost,
)
from zenmqtt.exceptions import ConnectionLostError, NotConnectedError
from zenmqtt.mqtt.packet import PacketType
from zenmqtt.mqtt.publish import (
    PubAckResult,
    PubCompResult,
    PubRecResult,
    pack_puback_packet,
    pack_pubcomp_packet,
    pack_pubrec_packet,
    parse_pubrel_packet,
)
from zenmqtt.mqtt.session import OutgoingMessageState


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

    pubrel = parse_pubrel_packet(*await expect(transport, PacketType.PUBREL))
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
    transport = await connect(protocol, properties=topic_alias_maximum(10))

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
    pubrel = parse_pubrel_packet(*await expect(transport, PacketType.PUBREL))
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
    assert await asyncio.wait_for(messages.get(), TIMEOUT) is None


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


@pytest.mark.parametrize("qos", (-1, 3, 8))
async def test_publish_with_invalid_qos(qos):
    protocol, session, _ = build_protocol()
    transport = await connect(protocol)

    with pytest.raises(ValueError):
        await asyncio.wait_for(protocol.publish("a/b", b"payload", qos=qos), TIMEOUT)

    assert not transport.has_sent_packets()
    assert session._acquired_packet_identifiers == set()


async def test_pubrec_with_unknown_packet_identifier():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_pubrec_packet(42, 0, {}))

    pubrel = parse_pubrel_packet(*await expect(transport, PacketType.PUBREL))
    assert pubrel.packet_identifier == 42
    assert pubrel.reason_code == 0x92
