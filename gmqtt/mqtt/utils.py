import struct
from typing import AsyncGenerator

from gmqtt.mqtt.packet import PacketType


async def read(payload: AsyncGenerator[bytes, None], size: int) -> bytes:
    result = []

    for _ in range(size):
        result.append(await anext(payload))

    return b"".join(result)


def pack_variable_byte_integer(value: int) -> bytes:
    result = bytearray()

    while True:
        value, reminder = divmod(value, 0x80)

        if value > 0:
            reminder |= 0x80

        result.extend(struct.pack("!B", reminder))

        if value <= 0:
            break

    return result


def pack_str16(value: str) -> bytes:
    encoded = value.encode()
    return pack_binaries(encoded)


def pack_binaries(value: bytes) -> bytes:
    return struct.pack(f"!H{len(value)}s", len(value), value)


def pack_fixed_header(packet_type: PacketType, flags: int, length: int) -> bytes:
    result = bytearray()

    result.extend(struct.pack("!B", (packet_type << 4) | flags))
    result.extend(pack_variable_byte_integer(length))

    return bytes(result)
