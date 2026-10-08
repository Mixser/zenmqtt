"""Byte stream of the connection."""
import asyncio
import logging

import pytest

from gmqtt.connection import MQTTConnection
from gmqtt.mqtt.packet import PacketType
from gmqtt.mqtt.protocol.stream import build_data_sequence
from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    FakeTransport,
    build_protocol,
    connect,
    expect,
    pack_connack,
    wait_for_connection_lost,
)

pytestmark = pytest.mark.asyncio


class BrokenTransport(FakeTransport):
    """Fails on read after the fed data is read."""

    async def read(self, size: int = -1) -> bytes:
        if self._incoming.empty():
            raise ConnectionResetError("reset by peer")

        return await super().read(size)


def reader_tasks() -> list[asyncio.Task]:
    return [
        task
        for task in asyncio.all_tasks()
        if task.get_name() == "mqtt-protocol-buffered-reader" and not task.done()
    ]


async def test_read_error_is_raised_by_the_stream():
    transport = BrokenTransport()
    transport.feed(b"\x01\x02")

    stream = build_data_sequence(MQTTConnection(transport))

    assert [await anext(stream), await anext(stream)] == [b"\x01", b"\x02"]

    with pytest.raises(ConnectionResetError):
        await asyncio.wait_for(anext(stream), TIMEOUT)


async def test_reader_is_stopped_when_the_stream_is_closed():
    transport = FakeTransport()
    transport.feed(b"\x01")

    stream = build_data_sequence(MQTTConnection(transport))
    assert await anext(stream) == b"\x01"

    # the reader waits for more data
    [reader] = reader_tasks()

    await stream.aclose()
    await asyncio.sleep(0)

    assert reader.cancelled()


class FailingTransport(FakeTransport):
    """Read fails when fail() is called."""

    def fail(self, exc: Exception) -> None:
        self._incoming.put_nowait(exc)  # type: ignore[arg-type]

    async def read(self, size: int = -1) -> bytes:
        data = await super().read(size)

        if isinstance(data, Exception):
            raise data

        return data


async def test_read_error_closes_the_connection(caplog):
    protocol, _, messages = build_protocol()

    transport = FailingTransport()
    protocol.set_connection(MQTTConnection(transport))
    task = asyncio.create_task(protocol.connect("client-id", None, None))
    await expect(transport, PacketType.CONNECT)
    transport.feed(pack_connack())
    await asyncio.wait_for(task, TIMEOUT)

    with caplog.at_level(logging.ERROR, logger="gmqtt.mqtt.protocol"):
        transport.fail(ConnectionResetError("reset by peer"))
        await wait_for_connection_lost(protocol)

    # the reason of the lost connection is logged by the read loop
    assert "read_loop.error" in caplog.text
    assert "reset by peer" in caplog.text
    assert await asyncio.wait_for(messages.get(), TIMEOUT) is None
    assert not reader_tasks()


async def test_reader_is_stopped_after_protocol_error():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    # PUBLISH with QoS 3 is malformed, the client closes the connection
    transport.feed(bytes([PacketType.PUBLISH << 4 | 0x6, 0]))
    await wait_for_connection_lost(protocol)

    assert not reader_tasks()
