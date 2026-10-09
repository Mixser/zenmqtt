"""Connection lifecycle, the read loop and server DISCONNECT."""
import asyncio
import logging

import pytest

from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    FakeTransport,
    build_protocol,
    connect,
    expect,
    expect_publish,
    pack_connack,
    wait_for_connection_lost,
)
from zenmqtt.connection import MQTTConnection
from zenmqtt.exceptions import ConnectionLostError, NotConnectedError
from zenmqtt.mqtt.connect import DisconnectResult, WillMessage, parse_disconnect_packet
from zenmqtt.mqtt.packet import PacketType

pytestmark = pytest.mark.asyncio


async def test_failed_connack_is_returned():
    protocol, _, _ = build_protocol()
    transport = FakeTransport()
    protocol.set_connection(MQTTConnection(transport))

    task = asyncio.create_task(protocol.connect("client-id", None, None))
    await expect(transport, PacketType.CONNECT)
    transport.feed(pack_connack(reason_code=0x87))

    result = await asyncio.wait_for(task, TIMEOUT)
    assert result.result_code == 0x87

    with pytest.raises(NotConnectedError):
        await protocol.publish("a/b", b"payload")


async def test_connect_with_will():
    protocol, _, _ = build_protocol()
    transport = FakeTransport()
    protocol.set_connection(MQTTConnection(transport))

    will = WillMessage("a/b", b"bye", qos=1, retain=False, properties={})
    task = asyncio.create_task(protocol.connect("client-id", None, None, will=will))

    fixed_header, reader = await expect(transport, PacketType.CONNECT)
    packet = reader.read_rest()

    connect_flags = packet[7]
    assert connect_flags & 0x04  # will flag
    assert packet.endswith(b"\x00\x03a/b\x00\x03bye")

    transport.feed(pack_connack())
    await asyncio.wait_for(task, TIMEOUT)


async def test_auth_packet_is_skipped():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    # AUTH with reason code 0x18 (Continue authentication) and
    # authentication method property, then PINGRESP right after it
    auth_body = b"\x18\x07\x15\x00\x04SCRA"
    transport.feed(bytes([PacketType.AUTH << 4, len(auth_body)]) + auth_body)

    task = asyncio.create_task(protocol.ping())
    await expect(transport, PacketType.PINGREQ)

    transport.feed(b"\xd0\x00")

    # PINGRESP is parsed correctly only if the AUTH body was skipped
    await asyncio.wait_for(task, TIMEOUT)
    assert protocol.is_connected


async def test_incoming_publish_with_qos_3_closes_connection():
    protocol, _, messages = build_protocol()
    transport = await connect(protocol)

    transport.feed(b"\x36\x0b\x00\x03a/b\x00\x01\x00pay")

    fixed_header, reader = await expect(transport, PacketType.DISCONNECT)
    assert parse_disconnect_packet(fixed_header, reader) == DisconnectResult(0x81, {})

    await wait_for_connection_lost(protocol)

    assert transport.is_closing()
    # the malformed message isn't delivered
    assert await asyncio.wait_for(messages.get(), TIMEOUT) is None


async def test_discarded_pending_messages_are_logged(caplog):
    protocol, session, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=1))
    await expect_publish(transport)

    transport.drop()
    await wait_for_connection_lost(protocol)

    with pytest.raises(ConnectionLostError):
        await task

    with caplog.at_level(logging.WARNING, logger="zenmqtt.mqtt.protocol"):
        await connect(protocol, session_present=False)

    assert "discard_pending_messages count:1" in caplog.text
    assert await session.get_pending_outgoing_messages() == []


async def test_nothing_is_logged_when_session_is_empty(caplog):
    protocol, _, _ = build_protocol()

    with caplog.at_level(logging.WARNING, logger="zenmqtt.mqtt.protocol"):
        await connect(protocol, session_present=False)

    assert "discard_pending_messages" not in caplog.text


async def test_disconnect_with_reason():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    await asyncio.wait_for(
        protocol.disconnect(reason=0x04, properties={"reason_string": "bye"}),
        TIMEOUT,
    )

    fixed_header, reader = await expect(transport, PacketType.DISCONNECT)
    assert parse_disconnect_packet(fixed_header, reader) == DisconnectResult(
        0x04, {"reason_string": "bye"}
    )


async def test_server_disconnect_is_exposed():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.subscribe([("a/b", 1)]))
    await expect(transport, PacketType.SUBSCRIBE)

    # 0x8B "Server shutting down"
    transport.feed(b"\xe0\x01\x8b")

    with pytest.raises(ConnectionLostError) as exc_info:
        await asyncio.wait_for(task, TIMEOUT)

    expected = DisconnectResult(0x8B, {})

    assert exc_info.value.server_disconnect == expected
    assert protocol.server_disconnect == expected

    await wait_for_connection_lost(protocol)

    # the next connection starts without it
    await connect(protocol)
    assert protocol.server_disconnect is None


async def test_server_disconnect_is_none_when_connection_dropped():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.subscribe([("a/b", 1)]))
    await expect(transport, PacketType.SUBSCRIBE)

    transport.drop()

    with pytest.raises(ConnectionLostError) as exc_info:
        await asyncio.wait_for(task, TIMEOUT)

    assert exc_info.value.server_disconnect is None
    assert protocol.server_disconnect is None
