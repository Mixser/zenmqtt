"""Limits of the server from CONNACK."""
import asyncio
import logging
import struct

import pytest

from gmqtt.exceptions import (
    ConnectionLostError,
    FeatureNotSupportedError,
    PacketTooLargeError,
    QoSNotSupportedError,
)
from gmqtt.mqtt.packet import PacketType
from gmqtt.mqtt.publish import (
    pack_puback_packet,
    pack_publish_packet,
    pack_pubrec_packet,
)
from gmqtt.mqtt.subscribe import Subscription
from gmqtt.mqtt.utils import read
from tests.unit.mqtt.protocol.helpers import (
    RETAIN_AVAILABLE,
    SHARED_SUBSCRIPTION_AVAILABLE,
    SUBSCRIPTION_IDENTIFIER_AVAILABLE,
    TIMEOUT,
    WILDCARD_SUBSCRIPTION_AVAILABLE,
    assert_nothing_leaked,
    build_protocol,
    connect,
    expect,
    expect_publish,
    maximum_packet_size,
    maximum_qos,
    pack_suback,
    server_flag,
    topic_alias_maximum,
    wait_for_connection_lost,
)

pytestmark = pytest.mark.asyncio


async def test_publish_respects_server_maximum_qos():
    protocol, session, _ = build_protocol()
    transport = await connect(protocol, properties=maximum_qos(1))

    with pytest.raises(QoSNotSupportedError):
        await asyncio.wait_for(protocol.publish("a/b", b"payload", qos=2), TIMEOUT)

    assert not transport.has_sent_packets()
    assert session._acquired_packet_identifiers == set()

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=1))
    publish = await expect_publish(transport)
    transport.feed(pack_puback_packet(publish.packet_identifier, 0, {}))
    await asyncio.wait_for(task, TIMEOUT)


async def test_maximum_qos_is_reset_on_reconnect():
    protocol, _, _ = build_protocol()
    transport = await connect(protocol, properties=maximum_qos(0))

    transport.drop()
    await wait_for_connection_lost(protocol)

    # the new server doesn't limit QoS
    transport = await connect(protocol)

    task = asyncio.create_task(protocol.publish("a/b", b"payload", qos=2))
    publish = await expect_publish(transport)
    assert publish.qos == 2

    transport.feed(pack_pubrec_packet(publish.packet_identifier, 0x80, {}))
    await asyncio.wait_for(task, TIMEOUT)


@pytest.mark.parametrize("qos", (0, 1, 2))
async def test_publish_bigger_than_maximum_packet_size(qos):
    protocol, session, _ = build_protocol()
    transport = await connect(protocol, properties=maximum_packet_size(30))

    with pytest.raises(PacketTooLargeError):
        await asyncio.wait_for(protocol.publish("a/b", b"x" * 30, qos=qos), TIMEOUT)

    await assert_nothing_leaked(transport, session)

    # a packet of exactly maximum size is sent
    empty = pack_publish_packet(1, "a/b", b"", qos, False, False, {})
    payload = b"x" * (30 - len(empty))
    task = asyncio.create_task(protocol.publish("a/b", payload, qos=qos))
    publish = await expect_publish(transport)
    assert publish.payload == payload

    if qos == 1:
        transport.feed(pack_puback_packet(publish.packet_identifier, 0, {}))
    elif qos == 2:
        transport.feed(pack_pubrec_packet(publish.packet_identifier, 0x80, {}))

    await asyncio.wait_for(task, TIMEOUT)


async def test_publish_retain_not_available():
    protocol, session, _ = build_protocol()
    transport = await connect(protocol, properties=server_flag(RETAIN_AVAILABLE, False))

    for qos in (0, 1):
        with pytest.raises(FeatureNotSupportedError):
            await asyncio.wait_for(
                protocol.publish("a/b", b"payload", qos=qos, retain=True), TIMEOUT
            )

    await assert_nothing_leaked(transport, session)

    await protocol.publish("a/b", b"payload", qos=0, retain=False)
    await expect_publish(transport)


async def test_publish_topic_alias_limits():
    protocol, session, _ = build_protocol()
    transport = await connect(protocol)

    # the server didn't send "Topic Alias Maximum", so aliases aren't allowed
    with pytest.raises(FeatureNotSupportedError):
        await protocol.publish("a/b", b"payload", properties={"topic_alias": 1})

    await assert_nothing_leaked(transport, session)

    transport.drop()
    await wait_for_connection_lost(protocol)

    transport = await connect(protocol, properties=topic_alias_maximum(2))

    for topic_alias in (0, 3):
        with pytest.raises(FeatureNotSupportedError):
            await asyncio.wait_for(
                protocol.publish(
                    "a/b", b"payload", qos=1, properties={"topic_alias": topic_alias}
                ),
                TIMEOUT,
            )

    await assert_nothing_leaked(transport, session)

    await protocol.publish("a/b", b"payload", properties={"topic_alias": 2})
    publish = await expect_publish(transport)
    assert publish.properties["topic_alias"] == 2


@pytest.mark.parametrize(
    "connack_properties, topics, properties",
    (
        (
            server_flag(WILDCARD_SUBSCRIPTION_AVAILABLE, False),
            [("a/b", 0), ("a/+", 0)],
            {},
        ),
        (
            server_flag(SHARED_SUBSCRIPTION_AVAILABLE, False),
            [("$share/group/a/b", 0)],
            {},
        ),
        (
            server_flag(SUBSCRIPTION_IDENTIFIER_AVAILABLE, False),
            [("a/b", 0)],
            {"subscription_identifier": 1},
        ),
    ),
)
async def test_subscribe_feature_not_available(connack_properties, topics, properties):
    protocol, session, _ = build_protocol()
    transport = await connect(protocol, properties=connack_properties)

    with pytest.raises(FeatureNotSupportedError):
        await asyncio.wait_for(protocol.subscribe(topics, properties), TIMEOUT)

    await assert_nothing_leaked(transport, session)


async def test_subscribe_and_unsubscribe_bigger_than_maximum_packet_size():
    protocol, session, _ = build_protocol()
    transport = await connect(protocol, properties=maximum_packet_size(20))

    with pytest.raises(PacketTooLargeError):
        await asyncio.wait_for(protocol.subscribe([("a" * 20, 0)]), TIMEOUT)

    with pytest.raises(PacketTooLargeError):
        await asyncio.wait_for(protocol.unsubscribe(["a" * 20]), TIMEOUT)

    await assert_nothing_leaked(transport, session)


async def test_limits_are_reset_on_reconnect():
    protocol, _, _ = build_protocol()
    transport = await connect(
        protocol,
        properties=server_flag(RETAIN_AVAILABLE, False) + maximum_packet_size(20),
    )

    transport.drop()
    await wait_for_connection_lost(protocol)

    # the new CONNACK has no limits
    transport = await connect(protocol)

    await protocol.publish("a/b", b"x" * 100, qos=0, retain=True)
    publish = await expect_publish(transport)
    assert publish.retain


async def test_resend_discards_messages_which_break_new_limits(caplog):
    protocol, session, _ = build_protocol()
    transport = await connect(protocol)

    big = asyncio.create_task(protocol.publish("a/b", b"x" * 100, qos=1))
    big_publish = await expect_publish(transport)

    retained = asyncio.create_task(protocol.publish("a/b", b"r", qos=1, retain=True))
    retained_publish = await expect_publish(transport)

    small = asyncio.create_task(protocol.publish("a/b", b"small", qos=1))
    small_publish = await expect_publish(transport)

    transport.drop()
    await wait_for_connection_lost(protocol)

    for task in (big, retained, small):
        with pytest.raises(ConnectionLostError):
            await task

    with caplog.at_level(logging.WARNING, logger="gmqtt.mqtt.protocol"):
        transport = await connect(
            protocol,
            session_present=True,
            properties=maximum_packet_size(50) + server_flag(RETAIN_AVAILABLE, False),
        )

    # only the message which fits the new limits is re-sent
    resent = await expect_publish(transport)
    assert resent.packet_identifier == small_publish.packet_identifier
    assert not transport.has_sent_packets()

    for publish in (big_publish, retained_publish):
        assert f"discard pid:{publish.packet_identifier}" in caplog.text

    transport.feed(pack_puback_packet(small_publish.packet_identifier, 0, {}))

    ping = asyncio.create_task(protocol.ping())
    await expect(transport, PacketType.PINGREQ)
    transport.feed(b"\xd0\x00")
    await asyncio.wait_for(ping, TIMEOUT)

    assert await session.get_pending_outgoing_messages() == []
    assert session._acquired_packet_identifiers == set()


async def test_subscription_objects_are_checked_by_server_limits():
    protocol, session, _ = build_protocol()
    transport = await connect(
        protocol, properties=server_flag(WILDCARD_SUBSCRIPTION_AVAILABLE, False)
    )

    with pytest.raises(FeatureNotSupportedError):
        await asyncio.wait_for(
            protocol.subscribe([Subscription("a/#", qos=1, no_local=True)]), TIMEOUT
        )

    await assert_nothing_leaked(transport, session)

    task = asyncio.create_task(protocol.subscribe([Subscription("a/b", qos=1)]))
    _, stream = await expect(transport, PacketType.SUBSCRIBE)
    (packet_identifier,) = struct.unpack("!H", await read(stream, 2))
    transport.feed(pack_suback(packet_identifier, 0x01))
    await asyncio.wait_for(task, TIMEOUT)
