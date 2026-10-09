import pytest

from zenmqtt.mqtt.packet import PacketType, split_packet
from zenmqtt.mqtt.subscribe import (
    SubscribeResult,
    Subscription,
    UnsubscribeResult,
    pack_subscribe_packet,
    pack_unsubscribe_packet,
    parse_suback_packet,
    parse_unsuback_packet,
)


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (
            b"\x90\x04\xbe\xaf\x00\x01",
            SubscribeResult(packet_identifier=48815, properties={}, reason_codes=[1]),
        ),
        (
            b"\x90\x13\xbe\xaf\x0F\x26\x00\x05field\x00\x05value\x00",
            SubscribeResult(
                packet_identifier=0xBEAF,
                properties={
                    "user_property": [
                        ("field", "value"),
                    ]
                },
                reason_codes=[0],
            ),
        ),
    ),
)
async def test_parse_suback_packet(input, expected_result):
    fixed_header, reader = split_packet(input)
    assert fixed_header.packet_type == PacketType.SUBACK

    assert parse_suback_packet(fixed_header, reader) == expected_result


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (
            b"\xb0\x04\xbe\xae\x00\x01",
            UnsubscribeResult(packet_identifier=48814, properties={}, reason_codes=[1]),
        ),
    ),
)
async def test_parse_unsuback_packet(input, expected_result):
    fixed_header, reader = split_packet(input)
    assert fixed_header.packet_type == PacketType.UNSUBACK

    assert parse_unsuback_packet(fixed_header, reader) == expected_result


@pytest.mark.parametrize(
    "packet_identifier, topics, properties, expected_result",
    (
        (
            1,
            [
                ("mitu/test", 0),
            ],
            {},
            b"\x82\x0f\x00\x01\x00\x00\tmitu/test\x00",
        ),
        (
            0xDEAD,
            [
                ("mitu/test", 1),
            ],
            {"user_property": [("field", "value")]},
            b"\x82\x1e\xde\xad\x0f\x26\x00\x05field\x00\x05value\x00\tmitu/test\x01",
        ),
        (
            0xBEAF,
            [("mitu/test", 1), ("niel/test", 2)],
            {"user_property": [("field", "value")]},
            b"\x82*\xbe\xaf\x0f\x26\x00\x05field\x00\x05value\x00\tmitu/test\x01\x00\tniel/test\x02",
        ),
    ),
)
def test_pack_subscribe_packet(packet_identifier, topics, properties, expected_result):
    assert (
        pack_subscribe_packet(packet_identifier, topics, properties) == expected_result
    )


@pytest.mark.parametrize(
    "packet_identifier, topics, properties, expected_result",
    (
        (1, ["mitu/test"], {}, b"\xa2\x0e\x00\x01\x00\x00\tmitu/test"),
        (
            0xDEAD,
            [
                "mitu/test",
            ],
            {},
            b"\xa2\x0e\xde\xad\x00\x00\tmitu/test",
        ),
        (
            0xBEAF,
            ["mitu/test", "niel/test"],
            {},
            b"\xa2\x19\xbe\xaf\x00\x00\tmitu/test\x00\tniel/test",
        ),
    ),
)
def test_pack_unsubscribe_packet(
    packet_identifier, topics, properties, expected_result
):
    assert (
        pack_unsubscribe_packet(packet_identifier, topics, properties)
        == expected_result
    )


@pytest.mark.parametrize(
    "topics, expected_result",
    (
        (
            [
                Subscription(
                    "a/b",
                    qos=1,
                    no_local=True,
                    retain_as_published=True,
                    retain_handling=2,
                )
            ],
            b"\x82\x09\x00\x01\x00\x00\x03a/b\x2d",
        ),
        (
            [("a/b", 0), Subscription("c/d", qos=2, retain_handling=1)],
            b"\x82\x0f\x00\x01\x00\x00\x03a/b\x00\x00\x03c/d\x12",
        ),
        (
            [Subscription("a/b")],
            b"\x82\x09\x00\x01\x00\x00\x03a/b\x00",
        ),
    ),
)
def test_pack_subscribe_packet_with_options(topics, expected_result):
    assert pack_subscribe_packet(1, topics, {}) == expected_result


@pytest.mark.parametrize(
    "subscription",
    (
        Subscription("a/b", qos=3),
        Subscription("a/b", retain_handling=3),
        Subscription("$share/group/a/b", no_local=True),
        ("a/b", 3),
    ),
)
def test_pack_subscribe_packet_with_invalid_options(subscription):
    with pytest.raises(ValueError):
        pack_subscribe_packet(1, [subscription], {})
