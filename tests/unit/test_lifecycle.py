"""The lifecycle of the client: async with, credentials, client id."""
import asyncio

import pytest

from tests.unit.mqtt.protocol.helpers import TIMEOUT, expect, expect_publish
from tests.unit.test_reconnect import FAST, URL, FakeBroker, connect, connect_flags
from zenmqtt.client import MQTTClient
from zenmqtt.exceptions import ConnectionLostError, NotConnectedError
from zenmqtt.mqtt.packet import PacketType
from zenmqtt.mqtt.publish import pack_puback_packet

USERNAME_FLAG = 0x80
PASSWORD_FLAG = 0x40


@pytest.fixture
def broker() -> FakeBroker:
    return FakeBroker()


async def assert_stopped(client: MQTTClient, broker: FakeBroker) -> None:
    # not connected and doesn't reconnect
    with pytest.raises(NotConnectedError):
        await client.wait_connected()

    await broker.assert_no_connections()


async def test_async_with_disconnects_gracefully_on_exit(broker):
    published = asyncio.Event()

    async def ack_later(transport) -> None:
        publish = await expect_publish(transport)
        published.set()
        await asyncio.sleep(0.05)
        transport.feed(pack_puback_packet(publish.packet_identifier, 0, {}))

    async with MQTTClient("client-id", reconnect=FAST) as client:
        transport, _ = await connect(client, broker)
        acker = asyncio.create_task(ack_later(transport))
        publish = asyncio.create_task(client.publish("a/b", b"payload", qos=1))
        await asyncio.wait_for(published.wait(), TIMEOUT)

    # the exit waited for the acknowledgement, then sent DISCONNECT
    assert publish.done()
    assert (await publish).reason_code == 0
    await expect(transport, PacketType.DISCONNECT)
    await acker
    await assert_stopped(client, broker)


async def test_async_with_disconnects_at_once_on_exception(broker):
    with pytest.raises(KeyError):
        async with MQTTClient("client-id", reconnect=FAST) as client:
            transport, _ = await connect(client, broker)
            publish = asyncio.create_task(client.publish("a/b", b"payload", qos=1))
            await expect_publish(transport)

            raise KeyError("processing failed")

    # no wait for PUBACK: the message stays in the session
    await expect(transport, PacketType.DISCONNECT)

    with pytest.raises(ConnectionLostError):
        await asyncio.wait_for(publish, TIMEOUT)

    await assert_stopped(client, broker)


async def test_async_with_disconnects_on_cancellation(broker):
    entered = asyncio.Event()
    clients: list[MQTTClient] = []

    async def run() -> None:
        async with MQTTClient("client-id", reconnect=FAST) as client:
            clients.append(client)
            await connect(client, broker)
            entered.set()

            async for _ in client.messages:
                pass

    task = asyncio.create_task(run())
    await asyncio.wait_for(entered.wait(), TIMEOUT)
    task.cancel()

    with pytest.raises(asyncio.CancelledError):
        await asyncio.wait_for(task, TIMEOUT)

    await assert_stopped(clients[0], broker)


async def test_async_with_without_connect(broker):
    async with MQTTClient("client-id", reconnect=FAST):
        pass

    # the first connect failed: the error isn't hidden by the exit
    broker.down = True

    with pytest.raises(ConnectionRefusedError):
        async with MQTTClient("client-id", reconnect=FAST) as client:
            await client.connect(URL)

    await assert_stopped(client, broker)


async def test_credentials_are_sent_on_connect_and_reconnect(broker):
    async with MQTTClient("client-id", reconnect=FAST) as client:
        transport, packet = await connect(
            client, broker, username="user", password="secret"
        )

        for connect_packet in (packet, None):
            if connect_packet is None:
                # the same credentials on reconnect
                transport.drop()
                transport, connect_packet = await broker.accept()

            flags = connect_flags(connect_packet)
            assert flags & USERNAME_FLAG and flags & PASSWORD_FLAG
            assert b"\x00\x04user" in connect_packet
            assert b"\x00\x06secret" in connect_packet


async def test_client_id_is_read_only():
    client = MQTTClient("client-id")

    assert client.client_id == "client-id"

    with pytest.raises(AttributeError):
        client.client_id = "other"  # type: ignore[misc]
