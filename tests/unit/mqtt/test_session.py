import pytest

from zenmqtt.mqtt.session import InMemorySession, OutgoingMessage, OutgoingMessageState


def build_message(packet_identifier: int, qos: int = 1) -> OutgoingMessage:
    return OutgoingMessage(
        packet_identifier=packet_identifier,
        topic="test/topic",
        payload=b"payload",
        qos=qos,
        retain=False,
        properties={},
        state=OutgoingMessageState.AWAITING_ACK,
    )


async def test_pending_messages_keep_original_order():
    session = InMemorySession()

    first = await session.acquire_packet_identifier()
    second = await session.acquire_packet_identifier()

    await session.store_outgoing_message(build_message(first, qos=2))
    await session.store_outgoing_message(build_message(second))

    await session.mark_outgoing_message_released(first)

    pending = await session.get_pending_outgoing_messages()

    assert [m.packet_identifier for m in pending] == [first, second]
    assert [m.state for m in pending] == [
        OutgoingMessageState.AWAITING_COMP,
        OutgoingMessageState.AWAITING_ACK,
    ]


async def test_complete_outgoing_message_releases_identifier():
    session = InMemorySession()

    packet_identifier = await session.acquire_packet_identifier()
    await session.store_outgoing_message(build_message(packet_identifier))

    await session.complete_outgoing_message(packet_identifier)
    # duplicated acknowledge must not put the identifier to the pool twice
    await session.complete_outgoing_message(packet_identifier)
    await session.release_packet_identifier(packet_identifier)

    assert await session.get_pending_outgoing_messages() == []
    assert session._acquired_packet_identifiers == set()
    assert session._packet_identifiers_pool.qsize() == 2**16 - 1


async def test_reset_discards_state_and_returns_identifiers():
    session = InMemorySession()

    packet_identifier = await session.acquire_packet_identifier()
    await session.store_outgoing_message(build_message(packet_identifier))
    await session.register_incoming_message(10)

    await session.reset()

    assert await session.get_pending_outgoing_messages() == []
    assert await session.register_incoming_message(10)
    assert session._packet_identifiers_pool.qsize() == 2**16 - 1


async def test_register_incoming_message_detects_duplicates():
    session = InMemorySession()

    assert await session.register_incoming_message(1)
    assert not await session.register_incoming_message(1)

    await session.complete_incoming_message(1)

    assert await session.register_incoming_message(1)


async def test_acquire_packet_identifier_timeout():
    session = InMemorySession({"timeout": 0.01})

    for _ in range(2**16 - 1):
        await session.acquire_packet_identifier()

    with pytest.raises(TimeoutError):
        await session.acquire_packet_identifier()


async def test_restored_pending_messages_keep_their_identifiers():
    session = InMemorySession()

    # e.g. loaded from a persistent storage before the first use
    await session.store_outgoing_message(build_message(1))
    await session.store_outgoing_message(build_message(3))

    acquired = [await session.acquire_packet_identifier() for _ in range(3)]
    assert acquired == [2, 4, 5]

    await session.complete_outgoing_message(1)
    assert 1 not in session._acquired_packet_identifiers


async def test_mark_outgoing_message_released_returns_if_found():
    session = InMemorySession()

    packet_identifier = await session.acquire_packet_identifier()
    await session.store_outgoing_message(build_message(packet_identifier, qos=2))

    assert await session.mark_outgoing_message_released(packet_identifier) is True
    assert await session.mark_outgoing_message_released(packet_identifier + 1) is False


async def test_complete_incoming_message_returns_if_found():
    session = InMemorySession()

    assert await session.register_incoming_message(7)

    assert await session.complete_incoming_message(7) is True
    assert await session.complete_incoming_message(7) is False
