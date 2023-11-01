import itertools
import struct
from dataclasses import dataclass
from typing import AsyncGenerator, Optional, Sequence, Tuple, TypedDict, cast

from gmqtt.mqtt.packet import FixedHeader, PacketType, parse_variable_byte_integer
from gmqtt.mqtt.properties import Properties, pack_properties, parse_properties
from gmqtt.mqtt.utils import (
    pack_fixed_header,
    pack_str16,
    pack_variable_byte_integer,
    read,
)


class ConnackProperties(TypedDict, total=False):
    session_expiry_interval: int
    assigned_client_identifier: str
    server_keep_alive: int
    authentication_method: str
    authentication_data: bytes
    response_information: str
    server_reference: str
    reason_string: str
    receive_maximum: int
    topic_alias_maximum: int
    maximum_qos: int
    retain_available: bool
    user_property: Sequence[Tuple[str, str]]
    maximum_packet_size: int
    wildcard_subscription_available: bool
    subscription_identifier_available: bool
    shared_subscription_available: bool


@dataclass(frozen=True)
class ConnectionResult:
    __slots__ = ("flags", "result_code", "properties")
    flags: int
    result_code: int
    properties: ConnackProperties


async def parse_connack_packet(
    fixed_header: FixedHeader, payload: AsyncGenerator[bytes, None]
) -> ConnectionResult:
    flags, result_code, *_ = struct.unpack("!BB", await read(payload, 2))

    properties_length, length = await parse_variable_byte_integer(payload)
    properties = await parse_properties(payload, properties_length)

    assert fixed_header.length == 2 + length + properties_length

    return ConnectionResult(flags=flags, result_code=result_code, properties=properties)


class ConnectProperties(TypedDict, total=False):
    session_expiry_interval: int
    authentication_method: str
    authentication_data: bytes
    request_problem_information: bool
    receive_maximum: int
    topic_alias_maximum: int
    user_property: Sequence[Tuple[str, str]]
    maximum_packet_size: int


def pack_connect_packet(
    client_id: str,
    username: Optional[str],
    password: Optional[str],
    clean_session: bool,
    keepalive: bool,
    properties: ConnectProperties,
) -> bytes:
    packet = bytearray([PacketType.CONNECT << 4 | 0x00])

    connect_flags = 0

    if clean_session:
        connect_flags |= 0x02

    payload_length = 2 + 4 + 1 + 1 + 2 + 2 + len(client_id)

    if username:
        payload_length += 2 + len(username)
        connect_flags |= 0x80

        if password:
            connect_flags |= 0x40
            payload_length += 2 * len(password)

    properties_bytes = pack_properties(cast(Properties, properties))

    payload_length += len(properties_bytes)

    packet.extend(
        itertools.chain(
            pack_variable_byte_integer(payload_length),
            struct.pack("!H4sBBH", 4, b"MQTT", 5, connect_flags, keepalive),
            properties_bytes,
            pack_str16(client_id),
        )
    )

    if username:
        packet.extend(pack_str16(username))

        if password:
            packet.extend(pack_str16(password))

    return bytes(packet)


class DisconnectProperties(TypedDict, total=False):
    session_expiry_interval: int
    server_reference: str
    reason_string: str
    user_property: Sequence[Tuple[str, str]]


def pack_disconnect_packet(reason: int, properties: DisconnectProperties) -> bytes:
    properties_bytes = pack_properties(cast(Properties, properties))
    payload_length = 1 + len(properties_bytes)
    payload = struct.pack("!B", reason) + properties_bytes

    return pack_fixed_header(PacketType.DISCONNECT, 0x00, payload_length) + payload


@dataclass(frozen=True)
class DisconnectResult:
    __slots__ = ("reason_code", "properties")

    reason_code: int
    properties: DisconnectProperties


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
