import random
import struct

import pytest

from zenmqtt.mqtt.packet import (
    FixedHeader,
    PacketType,
    parse_fixed_header,
    parse_variable_byte_integer,
)
from zenmqtt.mqtt.utils import pack_fixed_header, pack_str16, pack_variable_byte_integer

# the smallest and the largest values of 1, 2, 3 and 4 bytes
VARIABLE_BYTE_INTEGERS = {
    0: b"\x00",
    1: b"\x01",
    127: b"\x7f",
    128: b"\x80\x01",
    16_383: b"\xff\x7f",
    16_384: b"\x80\x80\x01",
    2_097_151: b"\xff\xff\x7f",
    2_097_152: b"\x80\x80\x80\x01",
    268_435_455: b"\xff\xff\xff\x7f",
}


@pytest.mark.parametrize(
    "value, encoded",
    VARIABLE_BYTE_INTEGERS.items(),
    ids=[str(value) for value in VARIABLE_BYTE_INTEGERS],
)
def test_pack_variable_byte_integer(value: int, encoded: bytes):
    assert pack_variable_byte_integer(value) == encoded
    assert parse_variable_byte_integer(encoded) == (value, len(encoded))


def test_variable_byte_integer_round_trip():
    rng = random.Random(0)

    for value in (rng.randrange(268_435_456) for _ in range(1000)):
        encoded = pack_variable_byte_integer(value)
        size = 1 + (value >= 128) + (value >= 16_384) + (value >= 2_097_152)

        assert len(encoded) == size
        assert parse_variable_byte_integer(encoded) == (value, size)


@pytest.mark.parametrize(
    "value",
    (
        "test",
        "foo-bar",
        "foo-bar-foo-bar-foo-bar-foo-bar-foo-bar-foo-bar-foo-bar",
    ),
)
def test_pack_str16(value: str):
    assert struct.unpack(f"!H{len(value)}s", pack_str16(value)) == (
        len(value),
        value.encode(),
    )


@pytest.mark.parametrize(
    "fixed_header",
    (
        FixedHeader(PacketType.CONNECT, flags=0x1, length=23),
        FixedHeader(PacketType.CONNACK, flags=0xB, length=99),
    ),
)
def test_pack_fixed_header(fixed_header: FixedHeader):
    header, _ = parse_fixed_header(
        pack_fixed_header(
            fixed_header.packet_type, fixed_header.flags, fixed_header.length
        )
    )

    assert header == fixed_header
