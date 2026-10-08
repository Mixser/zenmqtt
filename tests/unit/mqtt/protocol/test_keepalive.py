"""PINGREQ/PINGRESP and keep alive."""
import asyncio

import pytest

from gmqtt.exceptions import ConnectionLostError, NotConnectedError
from gmqtt.mqtt.packet import PacketType
from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    build_protocol,
    connect,
    connect_with_keep_alive,
    expect,
    server_keep_alive,
    wait_for_connection_lost,
)

pytestmark = pytest.mark.asyncio


async def test_ping():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.ping())
    await expect(transport, PacketType.PINGREQ)

    transport.feed(b"\xd0\x00")

    assert await asyncio.wait_for(task, TIMEOUT) is None
    assert protocol._keep_alive.ping_future is None


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
    assert protocol._keep_alive.ping_future is None


async def test_unexpected_pingresp_is_ignored():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    transport.feed(b"\xd0\x00")

    # the read loop keeps working after PINGRESP without PINGREQ
    task = asyncio.create_task(protocol.ping())
    await expect(transport, PacketType.PINGREQ)

    transport.feed(b"\xd0\x00")
    await asyncio.wait_for(task, TIMEOUT)


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
    assert protocol._keep_alive.task is None
    assert await asyncio.wait_for(messages.get(), TIMEOUT) is None


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

    assert protocol._keep_alive.task is None


async def test_keep_alive_stops_on_disconnect():
    protocol, _, _ = build_protocol()
    await connect_with_keep_alive(protocol, keepalive=1)

    keep_alive_task = protocol._keep_alive.task
    assert keep_alive_task

    await asyncio.wait_for(protocol.disconnect(reason=0), TIMEOUT)

    assert keep_alive_task.cancelled()
    assert protocol._keep_alive.task is None
