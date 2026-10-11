import asyncio
import struct

import pytest

from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    FakeTransport,
    pack_connack,
    pack_qos0,
)
from zenmqtt.client import MQTTClient
from zenmqtt.connection import register_implementation
from zenmqtt.mqtt.packet import PacketType


def assigned_client_identifier(value: str) -> bytes:
    return struct.pack("!BH", 0x12, len(value)) + value.encode()


async def connect(client: MQTTClient, transport: FakeTransport, connack: bytes):
    """Returns the client id sent in CONNECT."""

    async def factory(url, options):
        return transport

    register_implementation("fake", factory)

    task = asyncio.create_task(client.connect("fake://broker", keepalive=0))

    fixed_header, reader = await transport.next_packet()
    body = reader.read_rest()
    assert fixed_header.packet_type == PacketType.CONNECT

    # protocol name, version, flags, keep alive, properties length
    offset = 2 + 4 + 1 + 1 + 2 + 1
    (client_id_length,) = struct.unpack_from("!H", body, offset)
    client_id = body[offset + 2 : offset + 2 + client_id_length].decode()

    transport.feed(connack)
    await asyncio.wait_for(task, TIMEOUT)

    return client_id


async def test_assigned_client_identifier_is_used_for_next_connect():
    client = MQTTClient("", reconnect=None)

    transport = FakeTransport()
    sent_client_id = await connect(
        client,
        transport,
        pack_connack(properties=assigned_client_identifier("auto-42")),
    )

    assert sent_client_id == ""
    assert client.client_id == "auto-42"

    transport.drop()

    async def wait_disconnected():
        while client.is_connected:
            await asyncio.sleep(0.001)

    await asyncio.wait_for(wait_disconnected(), TIMEOUT)

    transport = FakeTransport()
    sent_client_id = await connect(client, transport, pack_connack())

    assert sent_client_id == "auto-42"
    assert client.client_id == "auto-42"

    await asyncio.wait_for(client.disconnect(), TIMEOUT)


async def test_messages_are_read_by_one_task():
    client = MQTTClient("client-id", reconnect=None)
    transport = FakeTransport()
    await connect(client, transport, pack_connack())

    first = asyncio.create_task(anext(client.messages))
    await asyncio.sleep(0.01)

    # another task waits at the same time
    with pytest.raises(RuntimeError, match="read by another task"):
        await anext(client.messages)

    transport.feed(pack_qos0("a/b", b"1"))
    assert (await asyncio.wait_for(first, TIMEOUT)).payload == b"1"

    # one after another, from different tasks
    transport.feed(pack_qos0("a/b", b"2"))
    second = asyncio.create_task(anext(client.messages))
    assert (await asyncio.wait_for(second, TIMEOUT)).payload == b"2"

    await client.disconnect()


async def test_cancelled_read_frees_messages_for_another_task():
    client = MQTTClient("client-id", reconnect=None)
    transport = FakeTransport()
    await connect(client, transport, pack_connack())

    reader = asyncio.create_task(anext(client.messages))
    await asyncio.sleep(0.01)
    reader.cancel()

    with pytest.raises(asyncio.CancelledError):
        await reader

    transport.feed(pack_qos0("a/b", b"payload"))
    message = await asyncio.wait_for(anext(client.messages), TIMEOUT)
    assert message.payload == b"payload"

    await client.disconnect()
