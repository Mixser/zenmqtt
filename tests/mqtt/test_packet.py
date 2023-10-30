from typing import AsyncGenerator, Sequence

import pytest

from gmqtt.mqtt.packet import (
    FixedHeader,
    PacketType,
    parse_fixed_header,
    parse_variable_byte,
)
from tests.mqtt.utils import build_async_generator

pytestmark = pytest.mark.asyncio


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (
            [
                b"\x10",
                b"\x01",
            ],
            FixedHeader(PacketType.CONNECT, flags=0x00, length=1),
        ),
        (
            [b"\x10", b"\x80", b"\x80", b"\x01"],
            FixedHeader(PacketType.CONNECT, flags=0x00, length=16384),
        ),
    ),
)
async def test_parse_fixed_header(input, expected_result) -> None:
    assert await parse_fixed_header(build_async_generator(input)) == expected_result


@pytest.mark.parametrize(
    "input, expected_result",
    (
        ([b"\x01"], (1, 1)),
        ([b"\x80", b"\x01"], (128, 2)),
        ([b"\x80", b"\x81", b"\x01"], (16512, 3)),
    ),
)
async def test_parse_variable_byte(input, expected_result):
    assert await parse_variable_byte(build_async_generator(input)) == expected_result
