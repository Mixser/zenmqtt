import struct
from dataclasses import dataclass, field
from typing import Final, Optional, Sequence, Tuple, TypedDict, cast

from zenmqtt.mqtt.packet import BytesReader, FixedHeader, PacketType
from zenmqtt.mqtt.properties import Properties, pack_properties, parse_properties
from zenmqtt.mqtt.utils import pack_binary, pack_fixed_header, pack_str16


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


# CONNACK "Session Present" flag
SESSION_PRESENT_FLAG: Final[int] = 0x01


@dataclass(frozen=True)
class ConnectionResult:
    __slots__ = ("flags", "result_code", "properties")
    flags: int
    result_code: int
    properties: ConnackProperties

    @property
    def session_present(self) -> bool:
        """The server has a session of the client from a previous connection."""
        return bool(self.flags & SESSION_PRESENT_FLAG)


def parse_connack_packet(
    fixed_header: FixedHeader, reader: BytesReader
) -> ConnectionResult:
    flags = reader.read_byte()
    result_code = reader.read_byte()
    properties = parse_properties(reader)

    reader.ensure_end()

    return ConnectionResult(flags=flags, result_code=result_code, properties=properties)


class ConnectProperties(TypedDict, total=False):
    session_expiry_interval: int
    authentication_method: str
    authentication_data: bytes
    request_problem_information: bool
    request_response_information: bool
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


def _no_will_properties() -> WillProperties:
    return {}


@dataclass(frozen=True, slots=True)
class WillMessage:
    """
    The message which the server publishes when the connection is closed
    without DISCONNECT (or with reason 0x04 "Disconnect with Will Message").
    """

    topic: str
    payload: bytes
    qos: int = 0
    retain: bool = False
    properties: WillProperties = field(default_factory=_no_will_properties)


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
                pack_binary(will.payload),
            )
        )

    username_bytes = password_bytes = b""

    # MQTT 5 allows a password without a username, both may be empty
    if username is not None:
        connect_flags |= _USERNAME_FLAG
        username_bytes = pack_str16(username)

    if password is not None:
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


def parse_disconnect_packet(
    fixed_header: FixedHeader, reader: BytesReader
) -> DisconnectResult:
    # both the reason code and properties may be omitted
    reason_code = reader.read_byte() if reader.remaining() else 0x0
    properties = parse_properties(reader) if reader.remaining() else {}

    reader.ensure_end()

    return DisconnectResult(
        reason_code=reason_code,
        properties=cast(DisconnectProperties, properties),
    )
