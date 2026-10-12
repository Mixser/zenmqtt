import pytest

from zenmqtt.exceptions import MalformedPacketError, ProtocolError
from zenmqtt.mqtt.auth import AuthResult
from zenmqtt.mqtt.codec import decode
from zenmqtt.mqtt.connect import ConnectionResult, ServerDisconnect
from zenmqtt.mqtt.packet import split_packet
from zenmqtt.mqtt.ping import PingRespResult
from zenmqtt.mqtt.publish import (
    Message,
    PubAckResult,
    PubCompResult,
    PubRecResult,
    PubRelResult,
)
from zenmqtt.mqtt.subscribe import SubscribeResult, UnsubscribeResult


@pytest.mark.parametrize(
    "input, result_type",
    (
        (b"\x20\x03\x00\x00\x00", ConnectionResult),
        (b"\x30\x06\x00\x03a/b\x00", Message),
        (b"\x40\x02\x00\x01", PubAckResult),
        (b"\x50\x02\x00\x01", PubRecResult),
        (b"\x62\x02\x00\x01", PubRelResult),
        (b"\x70\x02\x00\x01", PubCompResult),
        (b"\x90\x04\x00\x01\x00\x00", SubscribeResult),
        (b"\xb0\x04\x00\x01\x00\x00", UnsubscribeResult),
        (b"\xd0\x00", PingRespResult),
        (b"\xe0\x00", ServerDisconnect),
        (b"\xf0\x00", AuthResult),
    ),
)
def test_decode(input, result_type):
    fixed_header, reader = split_packet(input)

    assert type(decode(fixed_header, reader)) is result_type


def test_decode_reserved_packet_type():
    fixed_header, reader = split_packet(b"\x00\x00")

    with pytest.raises(MalformedPacketError):
        decode(fixed_header, reader)


@pytest.mark.parametrize(
    "input",
    (
        b"\x10\x00",  # CONNECT
        b"\x80\x00",  # SUBSCRIBE
        b"\xa0\x00",  # UNSUBSCRIBE
        b"\xc0\x00",  # PINGREQ
    ),
)
def test_decode_client_only_packet_type(input):
    fixed_header, reader = split_packet(input)

    with pytest.raises(ProtocolError) as exc_info:
        decode(fixed_header, reader)

    assert type(exc_info.value) is ProtocolError
