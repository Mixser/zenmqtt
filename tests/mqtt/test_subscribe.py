import pytest

from gmqtt.mqtt.packet import PacketType, parse_fixed_header
from gmqtt.mqtt.subscribe import (
    SubscribeResult,
    UnsubscribeResult,
    pack_subscription_packet,
    pack_unsubscribe_packet,
    parse_suback_packet,
    parse_unsubscribe_packet,
)
from tests.mqtt.utils import build_async_generator

pytestmark = pytest.mark.asyncio


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (
            b"\x90\x04\xbe\xaf\x00\x01",
            SubscribeResult(packet_identifier=48815, properties={}, reason_codes=[1]),
        ),
    ),
)
async def test_parse_suback_packet(input, expected_result):
    stream = build_async_generator(input)

    fixed_header = await parse_fixed_header(stream)
    assert fixed_header.packet_type == PacketType.SUBACK

    assert await parse_suback_packet(fixed_header, stream) == expected_result


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (
            b"\xb0\x04\xbe\xae\x00\x01",
            UnsubscribeResult(packet_identifier=48814, properties={}, reason_codes=[1]),
        ),
    ),
)
async def test_parse_unsubscribe_packet(input, expected_result):
    stream = build_async_generator(input)

    fixed_header = await parse_fixed_header(stream)
    assert fixed_header.packet_type == PacketType.UNSUBACK

    assert await parse_unsubscribe_packet(fixed_header, stream) == expected_result


@pytest.mark.parametrize(
    "packet_identifier, topics, expected_result",
    (
        (
            1,
            [
                ("mitu/test", 0),
            ],
            b"\x82\x0f\x00\x01\x00\x00\tmitu/test\x00",
        ),
        (
            0xDEAD,
            [
                ("mitu/test", 1),
            ],
            b"\x82\x0f\xde\xad\x00\x00\tmitu/test\x01",
        ),
        (
            0xBEAF,
            [("mitu/test", 1), ("niel/test", 2)],
            b"\x82\x1b\xbe\xaf\x00\x00\tmitu/test\x01\x00\tniel/test\x02",
        ),
    ),
)
def test_pack_subscribe_packet(packet_identifier, topics, expected_result):
    assert pack_subscription_packet(packet_identifier, topics) == expected_result


@pytest.mark.parametrize(
    "packet_identifier, topics, expected_result",
    (
        (1, ["mitu/test"], b"\xa2\x0e\x00\x01\x00\x00\tmitu/test"),
        (
            0xDEAD,
            [
                "mitu/test",
            ],
            b"\xa2\x0e\xde\xad\x00\x00\tmitu/test",
        ),
        (
            0xBEAF,
            ["mitu/test", "niel/test"],
            b"\xa2\x19\xbe\xaf\x00\x00\tmitu/test\x00\tniel/test",
        ),
    ),
)
def test_pack_unsubscribe_packet(packet_identifier, topics, expected_result):
    assert pack_unsubscribe_packet(packet_identifier, topics) == expected_result
