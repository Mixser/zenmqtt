"""Graceful shutdown: disconnect(timeout=...) waits for messages in flight."""
import asyncio
import logging

import pytest

from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    expect,
    expect_disconnect,
    expect_nothing_sent,
    expect_publish,
    pack_connack,
)
from tests.unit.test_reconnect import (  # noqa: F401
    FakeBroker,
    build_client,
    close_clients,
    connect,
)
from zenmqtt.exceptions import ConnectionLostError, NotConnectedError
from zenmqtt.mqtt.packet import PacketType
from zenmqtt.mqtt.publish import (
    PubAckResult,
    pack_puback_packet,
    pack_pubcomp_packet,
    pack_pubrec_packet,
)


@pytest.fixture
def broker() -> FakeBroker:
    return FakeBroker()


async def test_disconnect_waits_for_puback(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    publish = asyncio.create_task(client.publish("a/b", b"payload", qos=1))
    sent = await expect_publish(transport)

    disconnect = asyncio.create_task(client.disconnect(timeout=TIMEOUT))
    await expect_nothing_sent(transport)
    assert not disconnect.done()

    transport.feed(pack_puback_packet(sent.packet_identifier, 0, {}))

    assert await asyncio.wait_for(publish, TIMEOUT) == PubAckResult(
        sent.packet_identifier, 0, {}
    )
    await expect_disconnect(transport, 0)
    assert await asyncio.wait_for(disconnect, TIMEOUT) == 0


async def test_disconnect_waits_for_pubcomp(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    publish = asyncio.create_task(client.publish("a/b", b"payload", qos=2))
    sent = await expect_publish(transport)

    disconnect = asyncio.create_task(client.disconnect(timeout=TIMEOUT))

    transport.feed(pack_pubrec_packet(sent.packet_identifier, 0, {}))
    await expect(transport, PacketType.PUBREL)
    await expect_nothing_sent(transport)
    assert not disconnect.done()

    transport.feed(pack_pubcomp_packet(sent.packet_identifier, 0, {}))

    await asyncio.wait_for(publish, TIMEOUT)
    await expect_disconnect(transport, 0)
    assert await asyncio.wait_for(disconnect, TIMEOUT) == 0


async def test_disconnect_after_timeout_keeps_messages_in_session(broker, caplog):
    client = build_client()
    transport, _ = await connect(client, broker)

    publish = asyncio.create_task(client.publish("a/b", b"payload", qos=1))
    await expect_publish(transport)

    with caplog.at_level(logging.WARNING, logger="zenmqtt.client"):
        assert await client.disconnect(timeout=0.05) == 1

    await expect_disconnect(transport, 0)
    assert "1 outgoing QoS 1/2 messages" in caplog.text

    with pytest.raises(ConnectionLostError):
        await asyncio.wait_for(publish, TIMEOUT)


async def test_new_operations_are_rejected_while_disconnecting(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    publish = asyncio.create_task(client.publish("a/b", b"first", qos=1))
    sent = await expect_publish(transport)

    disconnect = asyncio.create_task(client.disconnect(timeout=TIMEOUT))
    await asyncio.sleep(0.01)

    with pytest.raises(NotConnectedError, match="disconnecting"):
        await client.publish("a/b", b"second", qos=1)

    with pytest.raises(NotConnectedError, match="disconnecting"):
        await client.publish("a/b", b"qos 0")

    with pytest.raises(NotConnectedError, match="disconnecting"):
        await client.subscribe([("a/b", 1)])

    await expect_nothing_sent(transport)

    transport.feed(pack_puback_packet(sent.packet_identifier, 0, {}))
    await asyncio.wait_for(publish, TIMEOUT)
    assert await asyncio.wait_for(disconnect, TIMEOUT) == 0


async def test_qos0_isnt_waited_for(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    await client.publish("a/b", b"payload")
    await expect_publish(transport)

    assert await asyncio.wait_for(client.disconnect(timeout=TIMEOUT), 0.1) == 0
    await expect_disconnect(transport, 0)


async def test_disconnect_waits_across_reconnect(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    publish = asyncio.create_task(client.publish("a/b", b"payload", qos=1))
    await expect_publish(transport)

    disconnect = asyncio.create_task(client.disconnect(timeout=TIMEOUT))
    await asyncio.sleep(0.01)

    # the connection is lost while the client waits for PUBACK
    transport.drop()
    transport, _ = await broker.accept(pack_connack(session_present=True))

    resent = await expect_publish(transport)
    assert resent.dup
    assert not disconnect.done()

    transport.feed(pack_puback_packet(resent.packet_identifier, 0, {}))

    await asyncio.wait_for(publish, TIMEOUT)
    await expect_disconnect(transport, 0)
    assert await asyncio.wait_for(disconnect, TIMEOUT) == 0


async def test_disconnect_without_reconnect_stops_when_connection_is_lost(broker):
    client = build_client(reconnect=None)
    transport, _ = await connect(client, broker)

    publish = asyncio.create_task(client.publish("a/b", b"payload", qos=1))
    await expect_publish(transport)

    disconnect = asyncio.create_task(client.disconnect(timeout=TIMEOUT * 10))
    await asyncio.sleep(0.01)

    # nothing will connect again, so there is nothing to wait for
    transport.drop()

    assert await asyncio.wait_for(disconnect, TIMEOUT) == 1

    with pytest.raises(ConnectionLostError):
        await asyncio.wait_for(publish, TIMEOUT)


async def test_disconnect_without_timeout_is_immediate(broker):
    client = build_client()
    transport, _ = await connect(client, broker)

    publish = asyncio.create_task(client.publish("a/b", b"payload", qos=1))
    await expect_publish(transport)

    assert await asyncio.wait_for(client.disconnect(), TIMEOUT) == 1
    await expect_disconnect(transport, 0)

    with pytest.raises(ConnectionLostError):
        await asyncio.wait_for(publish, TIMEOUT)
