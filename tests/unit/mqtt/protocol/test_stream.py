"""Reading of whole packets from the connection."""
import asyncio
import logging

import pytest

from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    FakeTransport,
    build_protocol,
    connect,
    expect,
    expect_disconnect,
    pack_connack,
    wait_for_connection_lost,
)
from zenmqtt.connection import MQTTConnection
from zenmqtt.exceptions import IncomingPacketTooLargeError, MalformedPacketError
from zenmqtt.mqtt.packet import FixedHeader, PacketType
from zenmqtt.mqtt.protocol.stream import PacketReader
from zenmqtt.mqtt.publish import pack_publish_packet

pytestmark = pytest.mark.asyncio

PUBLISH = pack_publish_packet(0, "a/b", b"payload", 0, False, False, {})


class FailingTransport(FakeTransport):
    """Read fails when fail() is called."""

    def fail(self, exc: Exception) -> None:
        self._incoming.put_nowait(exc)  # type: ignore[arg-type]

    async def read(self, size: int = -1) -> bytes:
        data = await super().read(size)

        if isinstance(data, Exception):
            raise data

        return data


def build_reader(*chunks: bytes) -> PacketReader:
    transport = FakeTransport()

    for chunk in chunks:
        transport.feed(chunk)

    return PacketReader(MQTTConnection(transport))


async def read_packet(reader: PacketReader):
    return await asyncio.wait_for(reader.read_packet(), TIMEOUT)


async def test_packets_in_one_read():
    reader = build_reader(b"\xd0\x00" + PUBLISH + b"\xd0\x00")

    header, packet_body, size = await read_packet(reader)
    assert (header, packet_body.read_rest(), size) == (
        FixedHeader(PacketType.PINGRESP, 0, 0),
        b"",
        2,
    )

    header, packet_body, size = await read_packet(reader)
    assert header.packet_type == PacketType.PUBLISH
    assert packet_body.read_rest() == PUBLISH[2:]
    assert size == len(PUBLISH)

    header, _, _ = await read_packet(reader)
    assert header.packet_type == PacketType.PINGRESP


async def test_packet_split_between_reads():
    # the remaining length is split too
    big = pack_publish_packet(0, "a/b", b"x" * 200, 0, False, False, {})
    reader = build_reader(*(big[i : i + 1] for i in range(len(big))))

    header, packet_body, size = await read_packet(reader)

    assert header.length == len(big) - 3
    assert packet_body.read_rest() == big[3:]
    assert size == len(big)


async def test_packet_split_between_reads_after_other_packets():
    # the second packet is completed by the next read: returned packets are
    # dropped from the buffer before it's filled
    data = b"\xd0\x00" + PUBLISH
    reader = build_reader(data[:5], data[5:])

    header, _, _ = await read_packet(reader)
    assert header.packet_type == PacketType.PINGRESP

    header, packet_body, _ = await read_packet(reader)
    assert header.packet_type == PacketType.PUBLISH
    assert packet_body.read_rest() == PUBLISH[2:]


@pytest.mark.parametrize("chunks", ((b"",), (b"\x30\x05ab", b"")))
async def test_closed_connection(chunks):
    # at a packet boundary or in the middle of a packet
    assert await read_packet(build_reader(*chunks)) is None


async def test_remaining_length_longer_than_4_bytes():
    reader = build_reader(b"\x30\x80\x80\x80\x80\x01")

    with pytest.raises(MalformedPacketError):
        await read_packet(reader)


async def test_packet_bigger_than_maximum_packet_size():
    transport = FakeTransport()
    # only the fixed header, the body isn't sent
    transport.feed(b"\x30\x80\x01")

    reader = PacketReader(MQTTConnection(transport))
    reader.maximum_packet_size = 100

    with pytest.raises(IncomingPacketTooLargeError):
        await read_packet(reader)


async def test_read_error_is_raised():
    transport = FailingTransport()
    transport.feed(b"\xd0")
    transport.fail(ConnectionResetError("reset by peer"))

    with pytest.raises(ConnectionResetError):
        await read_packet(PacketReader(MQTTConnection(transport)))


async def test_read_error_closes_the_connection(caplog):
    protocol, _, messages = build_protocol()

    transport = FailingTransport()
    protocol.set_connection(MQTTConnection(transport))
    task = asyncio.create_task(protocol.connect("client-id", None, None))
    await expect(transport, PacketType.CONNECT)
    transport.feed(pack_connack())
    await asyncio.wait_for(task, TIMEOUT)

    with caplog.at_level(logging.ERROR, logger="zenmqtt.mqtt.protocol"):
        transport.fail(ConnectionResetError("reset by peer"))
        await wait_for_connection_lost(protocol)

    # the reason of the lost connection is logged by the read loop
    assert "read_loop.error" in caplog.text
    assert "reset by peer" in caplog.text
    assert await asyncio.wait_for(messages.get(), TIMEOUT) is None


async def test_client_maximum_packet_size_is_enforced():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol, {"maximum_packet_size": 20})

    small = pack_publish_packet(0, "a/b", b"1", 0, False, False, {})
    big = pack_publish_packet(0, "a/b", b"x" * 50, 0, False, False, {})
    transport.feed(small + big)

    assert (await asyncio.wait_for(messages.get(), TIMEOUT)).payload == b"1"

    # Packet too large
    await expect_disconnect(transport, 0x95)
    await wait_for_connection_lost(protocol)


async def test_malformed_remaining_length_closes_the_connection():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    transport.feed(b"\x30\x80\x80\x80\x80\x01")

    # Malformed Packet
    await expect_disconnect(transport, 0x81)
    await wait_for_connection_lost(protocol)
