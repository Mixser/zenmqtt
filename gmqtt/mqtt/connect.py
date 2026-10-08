import struct
from dataclasses import dataclass
from typing import Final, Optional, Sequence, Tuple, TypedDict, cast

from gmqtt.mqtt.packet import (
    AsyncDataSequence,
    FixedHeader,
    PacketType,
    parse_variable_byte_integer,
)
from gmqtt.mqtt.properties import Properties, pack_properties, parse_properties
from gmqtt.mqtt.utils import pack_binaries, pack_fixed_header, pack_str16, read


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
    fixed_header: FixedHeader, stream: AsyncDataSequence
) -> ConnectionResult:
    flags, result_code, *_ = struct.unpack("!BB", await read(stream, 2))

    properties_length, length = await parse_variable_byte_integer(stream)
    properties = await parse_properties(stream, properties_length)

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


class WillProperties(TypedDict, total=False):
    will_delay_interval: int
    payload_format_indicator: bool
    message_expiry_interval: int
    content_type: str
    response_topic: str
    correlation_data: bytes
    user_property: Sequence[Tuple[str, str]]


@dataclass(frozen=True)
class WillMessage:
    """
    The message which the server publishes when the connection is closed
    without DISCONNECT (or with reason 0x04 "Disconnect with Will Message").
    """

    __slots__ = ("topic", "payload", "qos", "retain", "properties")

    topic: str
    payload: bytes
    qos: int
    retain: bool
    properties: WillProperties


MAX_KEEP_ALIVE: Final[int] = 2**16 - 1

# CONNECT flags
_CLEAN_START_FLAG: Final[int] = 0x02
_WILL_FLAG: Final[int] = 0x04
_WILL_QOS_SHIFT: Final[int] = 3
_WILL_RETAIN_FLAG: Final[int] = 0x20
_PASSWORD_FLAG: Final[int] = 0x40
_USERNAME_FLAG: Final[int] = 0x80


def pack_connect_packet(
    client_id: str,
    username: Optional[str],
    password: Optional[str],
    *,
    clean_session: bool,
    keepalive: int,
    properties: ConnectProperties,
    will: Optional[WillMessage] = None,
) -> bytes:
    if not 0 <= keepalive <= MAX_KEEP_ALIVE:
        raise ValueError(f"Invalid keep alive: {keepalive}")

    connect_flags = 0

    if clean_session:
        connect_flags |= _CLEAN_START_FLAG

    will_bytes = b""

    if will:
        if will.qos not in (0, 1, 2):
            raise ValueError(f"Invalid will QoS: {will.qos}")

        connect_flags |= _WILL_FLAG | (will.qos << _WILL_QOS_SHIFT)

        if will.retain:
            connect_flags |= _WILL_RETAIN_FLAG

        will_bytes = b"".join(
            (
                pack_properties(cast(Properties, will.properties)),
                pack_str16(will.topic),
                pack_binaries(will.payload),
            )
        )

    username_bytes = password_bytes = b""

    if username:
        connect_flags |= _USERNAME_FLAG
        username_bytes = pack_str16(username)

        if password:
            connect_flags |= _PASSWORD_FLAG
            password_bytes = pack_str16(password)

    variable_header = struct.pack(
        "!H4sBBH", 4, b"MQTT", 5, connect_flags, keepalive
    ) + pack_properties(cast(Properties, properties))

    # the order of the payload fields is defined by the spec
    payload = b"".join(
        (pack_str16(client_id), will_bytes, username_bytes, password_bytes)
    )

    return (
        pack_fixed_header(PacketType.CONNECT, 0x00, len(variable_header) + len(payload))
        + variable_header
        + payload
    )


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
    fixed_header: FixedHeader, stream: AsyncDataSequence
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
