"""The read loop doesn't wait for a slow application."""
import asyncio
import logging

from tests.unit.mqtt.protocol.helpers import (
    PINGRESP,
    TIMEOUT,
    FakeTransport,
    RecordingMetrics,
    build_protocol,
    connect,
    expect,
    expect_nothing_sent,
    expect_puback,
    expect_publish,
    expect_pubrec,
    pack_publish,
    receive,
    set_buffered_messages_warning,
    wait_for_connection_lost,
)
from zenmqtt.mqtt.packet import PacketType
from zenmqtt.mqtt.publish import PubAckResult, pack_puback_packet


async def feed(transport: FakeTransport, *packets: bytes) -> None:
    """Feeds packets one by one, so each is handled before the next one."""
    for packet in packets:
        transport.feed(packet)
        await asyncio.sleep(0.01)


async def test_control_packets_are_handled_while_nobody_reads():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    # nobody reads the messages
    await feed(transport, *(pack_publish(0, 0, b"%d" % i) for i in range(5)))

    task = asyncio.create_task(protocol.ping())
    await expect(transport, PacketType.PINGREQ)
    transport.feed(PINGRESP)

    await asyncio.wait_for(task, TIMEOUT)

    task = asyncio.create_task(protocol.publish("c/d", b"out", qos=1))
    publish = await expect_publish(transport)
    transport.feed(pack_puback_packet(publish.packet_identifier, 0, {}))

    assert isinstance(await asyncio.wait_for(task, TIMEOUT), PubAckResult)


async def test_slow_consumer_is_reported(caplog):
    metrics = RecordingMetrics()
    protocol, _, messages = build_protocol(metrics=metrics)
    set_buffered_messages_warning(protocol, 2)
    transport = await connect(protocol)

    with caplog.at_level(logging.WARNING, logger="zenmqtt.instrumentation"):
        await feed(transport, *(pack_publish(0, 0, b"%d" % i) for i in range(6)))

    # nothing is dropped; the size is reported when the buffer reaches the
    # threshold, the next reports are rate-limited
    assert metrics.get("on_messages_buffered") == [(2,)]
    # the warning is rate-limited too
    assert caplog.text.count("slow_consumer") == 1

    assert [(await receive(messages)).payload for _ in range(6)] == [
        b"%d" % i for i in range(6)
    ]

    # reported once more when the buffer falls below the threshold
    assert metrics.get("on_messages_buffered") == [(2,), (1,)]


async def test_buffer_size_is_reported_periodically():
    metrics = RecordingMetrics()
    protocol, _, _ = build_protocol(metrics=metrics)
    set_buffered_messages_warning(protocol, 2)
    transport = await connect(protocol)

    await feed(transport, *(pack_publish(0, 0, b"%d" % i) for i in range(4)))
    assert metrics.get("on_messages_buffered") == [(2,)]

    # the buffer is still above the threshold after the report interval
    await asyncio.sleep(0.15)
    await feed(transport, pack_publish(0, 0, b"4"))

    assert metrics.get("on_messages_buffered") == [(2,), (5,)]


async def test_acks_keep_the_order_with_duplicates():
    protocol, session, messages = build_protocol()
    transport = await connect(protocol)

    # PUBREC for message 2 was sent before, PUBREL is not received yet
    assert await session.register_incoming_message(2)

    await feed(
        transport,
        pack_publish(0, 0, b"filler"),
        pack_publish(1, 1, b"1"),
        pack_publish(2, 2, b"2", dup=True),
    )

    # PUBREC of the duplicate waits for PUBACK of the earlier message
    await expect_nothing_sent(transport)

    await receive(messages)
    message = await receive(messages)
    assert message.payload == b"1"
    await expect_nothing_sent(transport)

    await protocol.ack(message)

    puback = await expect_puback(transport)
    pubrec = await expect_pubrec(transport)
    assert (puback.packet_identifier, pubrec.packet_identifier) == (1, 2)

    # the duplicate isn't delivered
    await asyncio.sleep(0.01)
    assert messages.empty()


async def test_connection_lost_drops_buffered_qos1_and_keeps_qos0():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    await feed(
        transport,
        pack_publish(0, 0, b"first"),
        pack_publish(1, 1, b"1"),
        pack_publish(2, 1, b"2"),
        pack_publish(0, 0, b"qos0"),
    )

    transport.drop()
    await wait_for_connection_lost(protocol)

    payloads = []
    while (message := await receive(messages)) is not None:
        payloads.append(message.payload)

    # the server re-sends messages 1 and 2, they aren't acknowledged
    assert payloads == [b"first", b"qos0"]
