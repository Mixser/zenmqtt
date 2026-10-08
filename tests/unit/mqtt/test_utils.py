import struct
from unittest.mock import ANY

import pytest

from gmqtt.mqtt.packet import (
    FixedHeader,
    PacketType,
    parse_fixed_header,
    parse_variable_byte_integer,
)
from gmqtt.mqtt.utils import pack_fixed_header, pack_str16, pack_variable_byte_integer
from tests.unit.mqtt.utils import build_async_generator

pytestmark = pytest.mark.asyncio


@pytest.mark.parametrize("value", range(2048))
async def test_pack_variable_byte_integer(value: int):
    assert await parse_variable_byte_integer(
        build_async_generator([x.to_bytes() for x in pack_variable_byte_integer(value)])
    ) == (value, ANY)


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
async def test_pack_fixed_header(fixed_header: FixedHeader):
    assert (
        await parse_fixed_header(
            build_async_generator(
                [
                    x.to_bytes()
                    for x in pack_fixed_header(
                        fixed_header.packet_type,
                        fixed_header.flags,
                        fixed_header.length,
                    )
                ]
            )
        )
        == fixed_header
    )
