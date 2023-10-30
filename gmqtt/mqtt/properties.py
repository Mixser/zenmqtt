from typing import AsyncGenerator, Optional

from gmqtt.mqtt.utils import pack_variable_byte_integer, read

Properties = dict[str, str]


async def parse_properties(
    payload: AsyncGenerator[bytes, None], length: int
) -> Properties:
    assert length >= 0
    if not length:
        return {}

    _ = await read(payload, length)
    return {}


def pack_properties(properties: Optional[Properties]) -> bytes:
    properties = properties or {}

    data = bytearray()

    for prop_name, prop_value in properties.items():
        ...

    result = pack_variable_byte_integer(len(data))
    result += data

    return bytes(result)
