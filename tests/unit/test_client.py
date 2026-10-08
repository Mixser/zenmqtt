import asyncio
import struct

import pytest

from gmqtt.client import MQTTClient
from gmqtt.connection import register_implementation
from gmqtt.mqtt.packet import PacketType
from gmqtt.mqtt.utils import read
from tests.unit.mqtt.protocol.helpers import TIMEOUT, FakeTransport, pack_connack

pytestmark = pytest.mark.asyncio


def assigned_client_identifier(value: str) -> bytes:
    return struct.pack("!BH", 0x12, len(value)) + value.encode()


async def connect(client: MQTTClient, transport: FakeTransport, connack: bytes):
    """Returns the client id sent in CONNECT."""

    async def factory(url, options):
        return transport

    register_implementation("fake", factory)

    task = asyncio.create_task(client.connect("fake://broker", keepalive=0))

    fixed_header, stream = await transport.next_packet()
    assert fixed_header.packet_type == PacketType.CONNECT

    # protocol name, version, flags, keep alive, properties length
    await read(stream, 2 + 4 + 1 + 1 + 2 + 1)
    (client_id_length,) = struct.unpack("!H", await read(stream, 2))
    client_id = (await read(stream, client_id_length)).decode()

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
    await asyncio.wait_for(client._protocol._read_loop_task, TIMEOUT)

    transport = FakeTransport()
    sent_client_id = await connect(client, transport, pack_connack())

    assert sent_client_id == "auto-42"
    assert client.client_id == "auto-42"

    await asyncio.wait_for(client.disconnect(), TIMEOUT)
