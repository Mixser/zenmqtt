import pytest

from zenmqtt.mqtt.auth import AuthResult, parse_auth_packet
from zenmqtt.mqtt.packet import PacketType, split_packet
from zenmqtt.mqtt.reason_codes import ReasonCode


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (b"\xf0\x00", AuthResult(reason_code=ReasonCode.SUCCESS, properties={})),
        (
            b"\xf0\x01\x18",
            AuthResult(reason_code=ReasonCode.CONTINUE_AUTHENTICATION, properties={}),
        ),
        (
            b"\xf0\x07\x18\x05\x15\x00\x02SC",
            AuthResult(
                reason_code=ReasonCode.CONTINUE_AUTHENTICATION,
                properties={"authentication_method": "SC"},
            ),
        ),
    ),
)
def test_parse_auth_packet(input, expected_result):
    fixed_header, reader = split_packet(input)

    assert fixed_header.packet_type == PacketType.AUTH
    assert parse_auth_packet(fixed_header, reader) == expected_result


def test_parse_auth_packet_with_trailing_bytes():
    fixed_header, reader = split_packet(b"\xf0\x03\x18\x00\x00")

    with pytest.raises(ValueError):
        parse_auth_packet(fixed_header, reader)
