from unittest.mock import ANY

import pytest

from gmqtt.mqtt.packet import PacketType, parse_fixed_header
from gmqtt.mqtt.publish import (
    PubAckResult,
    PublishResult,
    pack_puback_packet,
    pack_publish_packet,
    parse_puback_packet,
    parse_publish_packet,
)
from tests.mqtt.utils import build_async_generator

pytestmark = pytest.mark.asyncio


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (
            b"2\x1e\x00\tmitu/test\x00\x01\x00Hello, world!!!!",
            PublishResult(
                dup=0,
                qos=1,
                retain=0,
                packet_identifier=1,
                topic="mitu/test",
                payload=b"Hello, world!!!!",
                properties={},
            ),
        ),
    ),
)
async def test_parse_publish_packet_from_bytes(input: bytes, expected_result):
    stream = build_async_generator(input)

    fixed_header = await parse_fixed_header(stream)
    assert fixed_header.packet_type == PacketType.PUBLISH

    assert await parse_publish_packet(fixed_header, stream) == expected_result


@pytest.mark.parametrize(
    "packet_identifier, topic, payload, qos, retain, dup, properties, expected_result",
    (
        (
            ANY,
            "mitu/test",
            b"Hello, world!",
            0,
            False,
            False,
            {},
            b"0\x19\x00\tmitu/test\x00Hello, world!",
        ),
        (
            0xDEAD,
            "mitu/test",
            b"Hello, world!",
            1,
            False,
            False,
            {},
            b"2\x1b\x00\tmitu/test\xDE\xAD\x00Hello, world!",
        ),
        (
            0xDEAD,
            "mitu/test",
            b"Hello, MQTT!",
            1,
            False,
            False,
            {},
            b"2\x1a\x00\tmitu/test\xDE\xAD\x00Hello, MQTT!",
        ),
        (
            0xDEAD,
            "mitu/test",
            b"Hello, MQTT!",
            1,
            True,
            False,
            {},
            b"3\x1a\x00\tmitu/test\xDE\xAD\x00Hello, MQTT!",
        ),
        (
            0xDEAD,
            "mitu/test",
            b"Hello, MQTT!",
            1,
            True,
            True,
            {},
            b";\x1a\x00\tmitu/test\xDE\xAD\x00Hello, MQTT!",
        ),
        (
            0xDEAD,
            "mitu/test",
            b"Hello, MQTT!",
            2,
            True,
            True,
            {},
            b"=\x1a\x00\tmitu/test\xDE\xAD\x00Hello, MQTT!",
        ),
    ),
)
def test_pack_publish_packet(
    packet_identifier, topic, payload, qos, retain, dup, properties, expected_result
):
    assert (
        pack_publish_packet(
            packet_identifier, topic, payload, qos, retain, dup, properties
        )
        == expected_result
    )


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (b"@\x04\xDE\xAD\x01\x00", PubAckResult(0xDEAD, 1, {})),
        (b"@\x04\xBE\xAF\x02\x00", PubAckResult(0xBEAF, 2, {})),
    ),
)
async def test_parse_puback_packet(input, expected_result):
    stream = build_async_generator(input)

    fixed_header = await parse_fixed_header(stream)

    assert fixed_header.packet_type == PacketType.PUBACK

    assert await parse_puback_packet(fixed_header, stream) == expected_result


@pytest.mark.parametrize(
    "packet_identifier, reason_code, expected_result",
    (
        (0x0001, 0x1, b"@\x04\x00\x01\x01\x00"),
        (0xFADE, 0x2, b"@\x04\xfa\xde\x02\x00"),
    ),
)
def test_pack_puback_packet(packet_identifier, reason_code, expected_result):
    assert pack_puback_packet(packet_identifier, reason_code) == expected_result
