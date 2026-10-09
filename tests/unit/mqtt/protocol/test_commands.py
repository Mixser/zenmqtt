"""SUBSCRIBE and UNSUBSCRIBE."""
import asyncio

import pytest

from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    build_protocol,
    connect,
    expect,
    wait_for_connection_lost,
)
from zenmqtt.exceptions import ConnectionLostError
from zenmqtt.mqtt.packet import PacketType


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
