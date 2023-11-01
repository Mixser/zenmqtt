from unittest.mock import ANY

import pytest

from gmqtt.mqtt.packet import PacketType, parse_fixed_header
from gmqtt.mqtt.publish import (
    PubAckResult,
    PubCompResult,
    PublishResult,
    PubRecResult,
    PubRelResult,
    pack_puback_packet,
    pack_pubcomp_packet,
    pack_publish_packet,
    pack_pubrec_packet,
    pack_pubrel_packet,
    parse_puback_packet,
    parse_pubcomp_packet,
    parse_publish_packet,
    parse_pubrec_packet,
    parse_pubrel_packet,
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
            {"payload_format_indicator": True},
            b"=\x1c\x00\tmitu/test\xde\xad\x02\x01\x01Hello, MQTT!",
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
    "packet_identifier, reason_code, properties, expected_result",
    (
        (0x0001, 0x0, {}, b"\x40\x02\x00\x01"),
        (0x0001, 0x1, {}, b"\x40\x03\x00\x01\x01"),
        (0xFADE, 0x2, {"user_property": [("field", "value")]}, b"\x40\x13\xfa\xde\x02\x0f&\x00\x05field\x00\x05value"),
    ),
)
def test_pack_puback_packet(
    packet_identifier, reason_code, properties, expected_result
):
    assert (
        pack_puback_packet(packet_identifier, reason_code, properties)
        == expected_result
    )


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (b"\x50\x04\xDE\xAD\x01\x00", PubRecResult(0xDEAD, 0x1, {})),
        (b"\x50\x0B\xDE\xAD\x01\x07\x1f\x00\x04text", PubRecResult(0xDEAD, 0x1, {"reason_string": "text"})),
        (b"\x50\x13\xDE\xAD\x02\x0f\x26\x00\x05field\x00\x05value", PubRecResult(0xDEAD, 0x2, {"user_property": [("field", "value")]})),
    ),
)
async def test_parse_pubrec_packet(input, expected_result):
    stream = build_async_generator(input)

    fixed_header = await parse_fixed_header(stream)

    assert fixed_header.packet_type == PacketType.PUBREC

    assert await parse_pubrec_packet(fixed_header, stream) == expected_result


@pytest.mark.parametrize(
    "packet_identifier, reason_code, properties, expected_result",
    (
        (0xDEAD, 0x1, {}, b"\x50\x03\xde\xad\x01"),
        (0xBEAF, 0x1, {"reason_string": "smth"}, b"\x50\x0b\xbe\xaf\x01\x07\x1f\x00\x04smth"),
    ),
)
def test_pack_pubrec_packet(
    packet_identifier, reason_code, properties, expected_result
):
    assert (
        pack_pubrec_packet(packet_identifier, reason_code, properties)
        == expected_result
    )


@pytest.mark.parametrize(
    "packet_identifier, reason_code, properties, expected_result",
    (
        (0xDEAD, 0x0, {}, b"\x62\x02\xde\xad"),
        (0xDEAD, 0x0, {"reason_string": "value"}, b"\x62\x0c\xde\xad\x00\x08\x1f\x00\x05value"),
        (0xBEAF, 0x1, {}, b"\x62\x03\xbe\xaf\x01"),
        (0xBEAF, 0x2, {}, b"\x62\x03\xbe\xaf\x02"),
    ),
)
def test_pack_pubrel_packet(
    packet_identifier, reason_code, properties, expected_result
):
    assert (
        pack_pubrel_packet(packet_identifier, reason_code, properties)
        == expected_result
    )


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (
            b"\x62\x02\xde\xad",
            PubRelResult(packet_identifier=0xDEAD, reason_code=0x0, properties={}),
        ),
        (
            b"\x62\x04\xbe\xaf\x01\x00",
            PubRelResult(packet_identifier=0xBEAF, reason_code=0x1, properties={}),
        ),
        (
            b"\x62\x04\xbe\xaf\x02\x00",
            PubRelResult(packet_identifier=0xBEAF, reason_code=0x2, properties={}),
        ),
    ),
)
async def test_parse_pubrel_packet(input, expected_result):
    stream = build_async_generator(input)

    fixed_header = await parse_fixed_header(stream)

    assert fixed_header.packet_type == PacketType.PUBREL

    assert await parse_pubrel_packet(fixed_header, stream) == expected_result


@pytest.mark.parametrize(
    "packet_identifier, reason_code, properties, expected_result",
    (
        (0xDEAD, 0x0, {}, b"\x70\x02\xde\xad"),
        (0xDEAD, 0x0, {"reason_string": "value"}, b"\x70\x0c\xde\xad\x00\x08\x1f\x00\x05value"),
        (0xBEAF, 0x1, {}, b"\x70\x03\xbe\xaf\x01"),
        (0xBEAF, 0x2, {}, b"\x70\x03\xbe\xaf\x02"),
    ),
)
def test_pack_pubcomp_packet(
    packet_identifier, reason_code, properties, expected_result
):
    assert (
        pack_pubcomp_packet(packet_identifier, reason_code, properties)
        == expected_result
    )


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (
            b"\x70\x02\xde\xad",
            PubCompResult(packet_identifier=0xDEAD, reason_code=0x0, properties={}),
        ),
        (
            b"\x70\x04\xbe\xaf\x01\x00",
            PubCompResult(packet_identifier=0xBEAF, reason_code=0x1, properties={}),
        ),
        (
            b"\x70\x04\xbe\xaf\x02\x00",
            PubCompResult(packet_identifier=0xBEAF, reason_code=0x2, properties={}),
        ),
    ),
)
async def test_parse_pubcomp_packet(input, expected_result):
    stream = build_async_generator(input)

    fixed_header = await parse_fixed_header(stream)

    assert fixed_header.packet_type == PacketType.PUBCOMP

    assert await parse_pubcomp_packet(fixed_header, stream) == expected_result
