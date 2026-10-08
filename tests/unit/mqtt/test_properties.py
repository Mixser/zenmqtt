import pytest

from gmqtt.mqtt.packet import parse_variable_byte_integer
from gmqtt.mqtt.properties import (
    _NAME_TO_CODE_MAP,
    Property,
    pack_properties,
    parse_properties,
)
from tests.unit.mqtt.utils import build_async_generator

pytestmark = pytest.mark.asyncio


@pytest.mark.parametrize("prop", list(Property))
def test_property_name_matches_code(prop):
    # parsed properties are named after the enum member
    assert _NAME_TO_CODE_MAP[prop.name.lower()] == prop.value


@pytest.mark.parametrize(
    "properties, expected_value",
    (
        ({"message_expiry_interval": 10}, b"\x05\x02\x00\x00\x00\x0a"),
        (
            {"message_expiry_interval": 10, "content_type": "text"},
            b"\x0c\x02\x00\x00\x00\x0a\x03\x00\x04text",
        ),
    ),
)
async def test_pack_and_parse_properties(properties, expected_value):
    packed = pack_properties(properties)
    assert packed == expected_value

    stream = build_async_generator(packed)
    length, _ = await parse_variable_byte_integer(stream)

    assert await parse_properties(stream, length) == properties
