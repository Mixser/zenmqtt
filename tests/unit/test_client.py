import asyncio
import struct

from tests.unit.mqtt.protocol.helpers import TIMEOUT, FakeTransport, pack_connack
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
