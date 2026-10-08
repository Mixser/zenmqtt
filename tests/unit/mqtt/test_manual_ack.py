import asyncio

import pytest
import pytest_asyncio

from gmqtt.mqtt.packet import PacketType
from gmqtt.mqtt.protocol import MQTTProtocol
from gmqtt.mqtt.publish import (
    pack_publish_packet,
    pack_pubrel_packet,
    parse_puback_packet,
    parse_pubcomp_packet,
    parse_pubrec_packet,
)
from gmqtt.mqtt.session import InMemorySession
from tests.unit.mqtt.test_protocol import (
    TIMEOUT,
    FakeTransport,
    connect,
    expect,
    expect_disconnect,
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


def build_protocol(manual_ack: bool = True):
    session = InMemorySession()
    messages: asyncio.Queue = asyncio.Queue()

    protocol = MQTTProtocol(messages, session, manual_ack=manual_ack)
    _protocols.append(protocol)

    return protocol, session, messages


def pack_publish(packet_identifier: int, qos: int, payload: bytes = b"x") -> bytes:
    return pack_publish_packet(packet_identifier, "a/b", payload, qos, False, False, {})


async def receive(messages: asyncio.Queue):
    return await asyncio.wait_for(messages.get(), TIMEOUT)


async def expect_nothing_sent(transport: FakeTransport) -> None:
    await asyncio.sleep(0.01)
    assert not transport.has_sent_packets()


async def expect_puback(transport: FakeTransport):
    return await parse_puback_packet(*await expect(transport, PacketType.PUBACK))


async def expect_pubrec(transport: FakeTransport):
    return await parse_pubrec_packet(*await expect(transport, PacketType.PUBREC))


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
    pubcomp = await parse_pubcomp_packet(*await expect(transport, PacketType.PUBCOMP))
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
    assert protocol._incoming_inflight == set()


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


async def test_ack_without_manual_ack():
    protocol, _, messages = build_protocol(manual_ack=False)
    transport = await connect(protocol)

    transport.feed(pack_publish(1, qos=1))
    message = await receive(messages)

    # acknowledged automatically
    await expect_puback(transport)

    with pytest.raises(RuntimeError):
        await protocol.ack(message)
