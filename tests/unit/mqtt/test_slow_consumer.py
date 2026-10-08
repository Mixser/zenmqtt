import asyncio
import logging

import pytest
import pytest_asyncio

from gmqtt.mqtt.packet import PacketType
from gmqtt.mqtt.protocol import MQTTProtocol
from gmqtt.mqtt.publish import (
    PubAckResult,
    pack_puback_packet,
    pack_publish_packet,
    parse_puback_packet,
    parse_pubrec_packet,
)
from gmqtt.mqtt.session import InMemorySession
from tests.unit.mqtt.test_protocol import (
    TIMEOUT,
    FakeTransport,
    RecordingMetrics,
    connect,
    expect,
    expect_publish,
    wait_for_connection_lost,
)

pytestmark = pytest.mark.asyncio

_protocols: list[MQTTProtocol] = []


@pytest_asyncio.fixture(autouse=True)
async def close_protocols():
    yield

    while _protocols:
        protocol = _protocols.pop()

        if protocol._connection:
            await asyncio.wait_for(protocol.disconnect(reason=0), TIMEOUT)


def build_protocol(**kwargs):
    """The messages queue holds one message, like a slow application."""
    session = InMemorySession()
    messages: asyncio.Queue = asyncio.Queue(maxsize=1)

    protocol = MQTTProtocol(messages, session, **kwargs)
    _protocols.append(protocol)

    return protocol, session, messages


def pack_publish(
    packet_identifier: int, qos: int, payload: bytes, dup: bool = False
) -> bytes:
    return pack_publish_packet(packet_identifier, "a/b", payload, qos, False, dup, {})


async def feed(transport: FakeTransport, *packets: bytes) -> None:
    """Feeds packets one by one, so the delivery task runs in between."""
    for packet in packets:
        transport.feed(packet)
        await asyncio.sleep(0.01)


async def receive(messages: asyncio.Queue):
    return await asyncio.wait_for(messages.get(), TIMEOUT)


async def expect_nothing_sent(transport: FakeTransport) -> None:
    await asyncio.sleep(0.01)
    assert not transport.has_sent_packets()


async def test_control_packets_are_handled_while_queue_is_full():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    # nobody reads the messages
    await feed(transport, *(pack_publish(0, 0, b"%d" % i) for i in range(5)))

    task = asyncio.create_task(protocol.ping())
    await expect(transport, PacketType.PINGREQ)
    transport.feed(b"\xd0\x00")

    await asyncio.wait_for(task, TIMEOUT)

    task = asyncio.create_task(protocol.publish("c/d", b"out", qos=1))
    publish = await expect_publish(transport)
    transport.feed(pack_puback_packet(publish.packet_identifier, 0, {}))

    assert isinstance(await asyncio.wait_for(task, TIMEOUT), PubAckResult)


async def test_message_is_acknowledged_when_its_put_into_queue():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    await feed(transport, pack_publish(0, 0, b"filler"), pack_publish(1, 1, b"1"))

    # the QoS 1 message waits for the application
    await expect_nothing_sent(transport)

    assert (await receive(messages)).payload == b"filler"

    puback = await parse_puback_packet(*await expect(transport, PacketType.PUBACK))
    assert puback.packet_identifier == 1
    assert (await receive(messages)).payload == b"1"


async def test_slow_consumer_is_reported(caplog):
    metrics = RecordingMetrics()
    protocol, _, messages = build_protocol(metrics=metrics)
    protocol._buffered_messages_warning = 2
    transport = await connect(protocol)

    with caplog.at_level(logging.WARNING, logger="gmqtt.mqtt.protocol"):
        # 1 in the queue, 1 waits to be put, the rest in the buffer
        await feed(transport, *(pack_publish(0, 0, b"%d" % i) for i in range(6)))

    # nothing is dropped, the buffer size is reported above the threshold
    assert metrics.get("on_messages_buffered") == [(2,), (3,), (4,)]
    # the warning is rate-limited
    assert caplog.text.count("slow_consumer") == 1

    assert [(await receive(messages)).payload for _ in range(6)] == [
        b"%d" % i for i in range(6)
    ]

    # reported once more when the buffer falls below the threshold
    assert metrics.get("on_messages_buffered")[3:] == [(3,), (2,), (1,)]


async def test_acks_follow_delivery_order():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    await feed(transport, *(pack_publish(i, 1, b"%d" % i) for i in range(1, 6)))

    assert [(await receive(messages)).payload for _ in range(5)] == [
        b"1",
        b"2",
        b"3",
        b"4",
        b"5",
    ]

    for packet_identifier in range(1, 6):
        puback = await parse_puback_packet(*await expect(transport, PacketType.PUBACK))
        assert puback.packet_identifier == packet_identifier


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

    puback = await parse_puback_packet(*await expect(transport, PacketType.PUBACK))
    pubrec = await parse_pubrec_packet(*await expect(transport, PacketType.PUBREC))
    assert (puback.packet_identifier, pubrec.packet_identifier) == (1, 2)

    # the duplicate isn't delivered
    assert (await receive(messages)).payload == b"1"
    await asyncio.sleep(0.01)
    assert messages.empty()


async def test_connection_lost_while_qos2_message_is_handed_over():
    protocol, _, messages = build_protocol(wait_across_reconnect=True)
    transport = await connect(protocol)

    await feed(transport, pack_publish(0, 0, b"filler"), pack_publish(5, 2, b"5"))

    # the QoS 2 message waits for space in the queue, PUBREC isn't sent
    transport.drop()
    await wait_for_connection_lost(protocol)

    transport = await connect(protocol, session_present=True)

    # the server re-sends the message, it was registered before the handover
    await feed(transport, pack_publish(5, 2, b"5", dup=True))

    assert (await receive(messages)).payload == b"filler"
    assert (await receive(messages)).payload == b"5"

    # PUBREC of the duplicate is sent after the original is handed over
    pubrec = await parse_pubrec_packet(*await expect(transport, PacketType.PUBREC))
    assert pubrec.packet_identifier == 5

    # delivered once
    await asyncio.sleep(0.01)
    assert messages.empty()


async def test_connection_lost_drops_buffered_qos1_and_keeps_qos0():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    await feed(
        transport,
        pack_publish(0, 0, b"filler"),
        pack_publish(1, 1, b"1"),  # waits to be put into the queue
        pack_publish(2, 1, b"2"),  # in the buffer
        pack_publish(0, 0, b"qos0"),  # in the buffer
    )

    transport.drop()
    await wait_for_connection_lost(protocol)

    payloads = []
    while (message := await receive(messages)) is not None:
        payloads.append(message.payload)

    # the server re-sends message 2, it isn't acknowledged
    assert payloads == [b"filler", b"1", b"qos0"]
