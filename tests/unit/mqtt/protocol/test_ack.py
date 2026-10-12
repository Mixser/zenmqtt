"""Acknowledgement of incoming messages by ack()."""

import asyncio
import logging

import pytest

from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    build_protocol,
    connect,
    expect,
    expect_disconnect,
    expect_nothing_sent,
    expect_packet,
    expect_puback,
    expect_pubrec,
    incoming_inflight,
    pack_publish,
    receive,
    wait_for_connection_lost,
)
from zenmqtt.instrumentation import monitors
from zenmqtt.mqtt.packet import PacketType
from zenmqtt.mqtt.publish import PubCompResult, pack_publish_packet, pack_pubrel_packet


async def test_qos1_is_acknowledged_by_ack():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish(1, qos=1))
    message = await receive(messages)

    await expect_nothing_sent(transport)

    await protocol.ack(message)

    puback = await expect_puback(transport)
    assert (puback.packet_identifier, puback.reason_code) == (1, 0)


async def test_qos2_is_acknowledged_by_ack():
    protocol, session, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish(1, qos=2))
    message = await receive(messages)

    await expect_nothing_sent(transport)
    # registered only when PUBREC is sent
    assert not await session.has_incoming_message(1)

    await protocol.ack(message)

    pubrec = await expect_pubrec(transport)
    assert (pubrec.packet_identifier, pubrec.reason_code) == (1, 0)
    assert await session.has_incoming_message(1)

    transport.feed(pack_pubrel_packet(1, 0, {}))
    pubcomp = await expect_packet(transport, PubCompResult)
    assert pubcomp.reason_code == 0
    assert not await session.has_incoming_message(1)


async def test_acks_are_sent_in_order_of_receiving():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish(1, qos=2))
    transport.feed(pack_publish(2, qos=1))
    transport.feed(pack_publish(3, qos=1))

    first, second, third = [await receive(messages) for _ in range(3)]

    await protocol.ack(third)
    await protocol.ack(second)
    await expect_nothing_sent(transport)

    await protocol.ack(first)

    assert (await expect_pubrec(transport)).packet_identifier == 1
    assert (await expect_puback(transport)).packet_identifier == 2
    assert (await expect_puback(transport)).packet_identifier == 3


async def test_duplicate_qos2_is_acknowledged_without_delivery():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish(1, qos=2))
    await protocol.ack(await receive(messages))
    await expect_pubrec(transport)

    # PUBREC was lost, the server re-sends the message
    transport.feed(pack_publish_packet(1, "a/b", b"x", 2, False, True, {}))

    assert (await expect_pubrec(transport)).packet_identifier == 1
    assert messages.empty()


@pytest.mark.parametrize("qos", (1, 2))
async def test_duplicate_before_ack_isnt_delivered_again(qos):
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish(1, qos=qos))
    first = await receive(messages)

    # the server sends the message again before the ack
    transport.feed(pack_publish(1, qos=qos, dup=True))
    await expect_nothing_sent(transport)
    assert messages.empty()

    # the ack of the first copy answers both
    await protocol.ack(first)

    if qos == 1:
        assert (await expect_puback(transport)).packet_identifier == 1
    else:
        assert (await expect_pubrec(transport)).packet_identifier == 1

        transport.feed(pack_pubrel_packet(1, 0, {}))
        await expect(transport, PacketType.PUBCOMP)

    await expect_nothing_sent(transport)
    assert incoming_inflight(protocol) == set()


async def test_qos1_sent_again_after_puback_is_delivered_again():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish(1, qos=1))
    await protocol.ack(await receive(messages))
    await expect_puback(transport)

    # QoS 1 is "at least once": the server may send the message again
    transport.feed(pack_publish(1, qos=1, dup=True))
    again = await receive(messages)
    assert again.dup

    await protocol.ack(again)
    assert (await expect_puback(transport)).packet_identifier == 1


async def test_blocked_ack_is_logged_once(monkeypatch, caplog):
    monkeypatch.setattr(monitors, "ACK_BLOCKED_WARNING", 0.05)
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    for packet_identifier in (1, 2, 3):
        transport.feed(pack_publish(packet_identifier, qos=1))

    first, second, third = [await receive(messages) for _ in range(3)]

    with caplog.at_level(logging.WARNING, logger="zenmqtt.instrumentation"):
        await protocol.ack(second)
        await protocol.ack(third)
        await asyncio.sleep(0.15)

    warnings = [
        record.getMessage()
        for record in caplog.records
        if "ack_blocked" in record.getMessage()
    ]
    assert len(warnings) == 1
    assert "pid:1 topic:a/b" in warnings[0]
    assert "so 2 later messages wait for it" in warnings[0]

    # nothing is sent until the first message is acknowledged
    await expect_nothing_sent(transport)
    await protocol.ack(first)

    for packet_identifier in (1, 2, 3):
        assert (await expect_puback(transport)).packet_identifier == packet_identifier


async def test_ack_in_time_isnt_logged(monkeypatch, caplog):
    monkeypatch.setattr(monitors, "ACK_BLOCKED_WARNING", 0.05)
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish(1, qos=1))
    transport.feed(pack_publish(2, qos=1))
    first, second = await receive(messages), await receive(messages)

    with caplog.at_level(logging.WARNING, logger="zenmqtt.instrumentation"):
        await protocol.ack(second)
        await protocol.ack(first)
        await asyncio.sleep(0.1)

    assert "ack_blocked" not in caplog.text
    assert (await expect_puback(transport)).packet_identifier == 1
    assert (await expect_puback(transport)).packet_identifier == 2


@pytest.mark.parametrize("qos", (1, 2))
async def test_rejected_message(qos):
    protocol, session, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish(1, qos=qos))
    await protocol.ack(await receive(messages), reason_code=0x99)

    if qos == 1:
        ack = await expect_puback(transport)
    else:
        ack = await expect_pubrec(transport)
        # the flow ends with PUBREC, there is no PUBREL
        assert not await session.has_incoming_message(1)

    assert ack.reason_code == 0x99
    assert incoming_inflight(protocol) == set()


async def test_not_acknowledged_messages_count_to_receive_maximum():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol, {"receive_maximum": 1})

    transport.feed(pack_publish(1, qos=1))
    await protocol.ack(await receive(messages))
    await expect_puback(transport)

    transport.feed(pack_publish(2, qos=1))
    await receive(messages)

    # the second message isn't acknowledged yet
    transport.feed(pack_publish(3, qos=1))

    await expect_disconnect(transport, 0x93)
    await wait_for_connection_lost(protocol)


async def test_ack_of_previous_connection_is_ignored():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish(1, qos=1))
    message = await receive(messages)

    transport.drop()
    await wait_for_connection_lost(protocol)
    await asyncio.wait_for(messages.get(), TIMEOUT)  # end of the stream

    transport = await connect(protocol, session_present=True)

    await protocol.ack(message)
    await expect_nothing_sent(transport)

    # the server re-sends the message, it's delivered again
    transport.feed(pack_publish_packet(1, "a/b", b"x", 1, False, True, {}))
    redelivered = await receive(messages)
    assert redelivered.dup

    await protocol.ack(redelivered)
    assert (await expect_puback(transport)).packet_identifier == 1


async def test_ack_twice_and_ack_of_qos0():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish(0, qos=0))
    await protocol.ack(await receive(messages))

    transport.feed(pack_publish(1, qos=1))
    message = await receive(messages)

    await protocol.ack(message)
    await protocol.ack(message)

    await expect_puback(transport)
    await expect_nothing_sent(transport)


async def test_ack_validation():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(pack_publish(1, qos=1))
    message = await receive(messages)

    # 0x10 (No matching subscribers) is sent only by the server
    with pytest.raises(ValueError):
        await protocol.ack(message, reason_code=0x10)

    await expect_nothing_sent(transport)
