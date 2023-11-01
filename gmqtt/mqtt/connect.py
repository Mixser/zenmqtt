import struct
from dataclasses import dataclass
from typing import AsyncGenerator, Final, Optional, Union

from gmqtt.mqtt.packet import FixedHeader, PacketType, parse_variable_byte_integer
from gmqtt.mqtt.properties import Properties, pack_properties, parse_properties
from gmqtt.mqtt.utils import (
    pack_fixed_header,
    pack_str16,
    pack_variable_byte_integer,
    read,
)


@dataclass(frozen=True)
class ConnectionSuccess:
    __slots__ = ("flags", "properties")
    flags: int
    properties: Properties


@dataclass(frozen=True)
class ConnectionFailed:
    __slots__ = ()


ConnectionResult = Union[ConnectionSuccess, ConnectionFailed]

_SUCCESS: Final[int] = 0


async def parse_connack_packet(
    fixed_header: FixedHeader, payload: AsyncGenerator[bytes, None]
) -> ConnectionResult:
    flags, code_result, *_ = struct.unpack("!BB", await read(payload, 2))

    properties_length, length = await parse_variable_byte_integer(payload)
    properties = await parse_properties(payload, properties_length)

    if code_result != _SUCCESS:
        return ConnectionFailed()

    return ConnectionSuccess(flags=flags, properties=properties)


def pack_connect_packet(
    client_id: str,
    username: Optional[str],
    password: Optional[str],
    clean_session: bool,
    keepalive: bool,
) -> bytes:
    packet = bytearray()
    connect_flags = 0

    if clean_session:
        connect_flags |= 0x02

    packet.append(PacketType.CONNECT << 4 | 0x00)

    payload_length = 2 + 4 + 1 + 1 + 2 + 2 + len(client_id)

    if username:
        payload_length += 2 + len(username)
        connect_flags |= 0x80

        if password:
            connect_flags |= 0x40
            payload_length += 2 * len(password)

    properties_bytes = pack_properties(
        {
            "user_property": [
                ("message", "world"),
            ]
        }
    )

    payload_length += len(properties_bytes)

    packet.extend(pack_variable_byte_integer(payload_length))

    packet.extend(struct.pack("!H4sBBH", 4, b"MQTT", 5, connect_flags, keepalive))

    packet.extend(properties_bytes)

    packet.extend(pack_str16(client_id))

    if username:
        packet.extend(pack_str16(username))

        if password:
            packet.extend(pack_str16(password))

    return bytes(packet)


def pack_disconnect_packet(reason: int) -> bytes:
    properties_bytes = pack_properties({})
    payload_length = 1 + len(properties_bytes)
    payload = struct.pack("!B", reason) + properties_bytes

    return pack_fixed_header(PacketType.DISCONNECT, 0x00, payload_length) + payload


@dataclass(frozen=True)
class DisconnectResult:
    __slots__ = ("reason_code", "properties")

    reason_code: int
    properties: Properties


async def parse_disconnect_packet(
    fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
) -> DisconnectResult:
    payload_length = fixed_header.length

    if not payload_length:
        reason_code = 0x0
    else:
        reason_code, *_ = struct.unpack("!B", await anext(stream))
        payload_length -= 1

    if not payload_length:
        properties_length = 0
    else:
        properties_length, _ = await parse_variable_byte_integer(stream)

    properties = await parse_properties(stream, properties_length)

    return DisconnectResult(reason_code=reason_code, properties=properties)
