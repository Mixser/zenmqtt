import itertools
import struct
from enum import IntEnum
from typing import (
    Any,
    AsyncGenerator,
    Callable,
    List,
    Literal,
    Sequence,
    Tuple,
    TypedDict,
    cast,
)

from gmqtt.mqtt.packet import PacketType, parse_variable_byte_integer
from gmqtt.mqtt.utils import pack_binaries, pack_str16, pack_variable_byte_integer, read


class Property(IntEnum):
    PAYLOAD_FORMAT_INDICATOR = 0x01
    MESSAGE_EXPIRE_LEVEL = 0x02
    CONTENT_TYPE = 0x03

    RESPONSE_TOPIC = 0x08
    CORRELATION_DATA = 0x09

    SUBSCRIPTION_IDENTIFIER = 0x0B

    SESSION_EXPIRY_INTERVAL = 0x11
    ASSIGNED_CLIENT_IDENTIFIER = 0x12

    SERVER_KEEP_ALIVE = 0x13

    AUTHENTICATION_METHOD = 0x15
    AUTHENTICATION_DATA = 0x16
    REQUEST_PROBLEM_INFORMATION = 0x17

    WILL_DELAY_INTERVAL = 0x18

    REQUEST_RESPONSE_INFORMATION = 0x19
    RESPONSE_INFORMATION = 0x1A

    SERVER_REFERENCE = 0x1C

    REASON_STRING = 0x1F

    RECEIVE_MAXIMUM = 0x21
    TOPIC_ALIAS_MAXIMUM = 0x22

    TOPIC_ALIAS = 0x23

    MAXIMUM_QOS = 0x24
    RETAIN_AVAILABLE = 0x25

    USER_PROPERTY = 0x26

    MAXIMUM_PACKET_SIZE = 0x27

    WILDCARD_SUBSCRIPTION_AVAILABLE = 0x28
    SUBSCRIPTION_IDENTIFIER_AVAILABLE = 0x29
    SHARED_SUBSCRIPTION_AVAILABLE = 0x2A


PropertyName = Literal[
    "payload_format_indicator",
    "message_expire_level",
    "content_type",
    "response_topic",
    "correlation_data",
    "subscription_identifier",
    "session_expiry_interval",
    "assigned_client_identifier",
    "server_keep_alive",
    "authentication_method",
    "authentication_data",
    "request_problem_information",
    "will_delay_interval",
    "request_response_information",
    "response_information",
    "server_reference",
    "reason_string",
    "receive_maximum",
    "topic_alias_maximum",
    "topic_alias",
    "maximum_qos",
    "retain_available",
    "user_property",
    "maximum_packet_size",
    "wildcard_subscription_available",
    "subscription_identifier_available",
    "shared_subscription_available",
]

_NAME_TO_CODE_MAP = {
    "payload_format_indicator": 1,
    "message_expire_level": 2,
    "content_type": 3,
    "response_topic": 8,
    "correlation_data": 9,
    "subscription_identifier": 11,
    "session_expiry_interval": 17,
    "assigned_client_identifier": 18,
    "server_keep_alive": 19,
    "authentication_method": 21,
    "authentication_data": 22,
    "request_problem_information": 23,
    "will_delay_interval": 24,
    "request_response_information": 25,
    "response_information": 26,
    "server_reference": 28,
    "reason_string": 31,
    "receive_maximum": 33,
    "topic_alias_maximum": 34,
    "topic_alias": 35,
    "maximum_qos": 36,
    "retain_available": 37,
    "user_property": 38,
    "maximum_packet_size": 39,
    "wildcard_subscription_available": 40,
    "subscription_identifier_available": 41,
    "shared_subscription_available": 42,
}


_AVAILABLE_PROPERTIES_PER_TYPE = {
    PacketType.CONNECT: {
        Property.SESSION_EXPIRY_INTERVAL,
        Property.AUTHENTICATION_METHOD,
        Property.AUTHENTICATION_DATA,
        Property.REQUEST_PROBLEM_INFORMATION,
        Property.RECEIVE_MAXIMUM,
        Property.TOPIC_ALIAS_MAXIMUM,
        Property.USER_PROPERTY,
        Property.MAXIMUM_PACKET_SIZE,
    },
    PacketType.CONNACK: {
        Property.SESSION_EXPIRY_INTERVAL,
        Property.ASSIGNED_CLIENT_IDENTIFIER,
        Property.SERVER_KEEP_ALIVE,
        Property.AUTHENTICATION_METHOD,
        Property.AUTHENTICATION_DATA,
        Property.RESPONSE_INFORMATION,
        Property.SERVER_REFERENCE,
        Property.REASON_STRING,
        Property.RECEIVE_MAXIMUM,
        Property.TOPIC_ALIAS_MAXIMUM,
        Property.MAXIMUM_QOS,
        Property.RETAIN_AVAILABLE,
        Property.USER_PROPERTY,
        Property.MAXIMUM_PACKET_SIZE,
        Property.WILDCARD_SUBSCRIPTION_AVAILABLE,
        Property.SUBSCRIPTION_IDENTIFIER_AVAILABLE,
        Property.SHARED_SUBSCRIPTION_AVAILABLE,
    },
    PacketType.PUBLISH: {
        Property.PAYLOAD_FORMAT_INDICATOR,
        Property.MESSAGE_EXPIRE_LEVEL,
        Property.CONTENT_TYPE,
        Property.RESPONSE_TOPIC,
        Property.SUBSCRIPTION_IDENTIFIER,
        Property.TOPIC_ALIAS,
        Property.USER_PROPERTY,
    },
    PacketType.PUBACK: {
        Property.REASON_STRING,
        Property.USER_PROPERTY,
    },
    PacketType.PUBREC: {
        Property.REASON_STRING,
        Property.USER_PROPERTY,
    },
    PacketType.PUBREL: {Property.REASON_STRING, Property.USER_PROPERTY},
    PacketType.PUBCOMP: {Property.REASON_STRING, Property.USER_PROPERTY},
    PacketType.SUBSCRIBE: {Property.SUBSCRIPTION_IDENTIFIER, Property.USER_PROPERTY},
    PacketType.SUBACK: {Property.REASON_STRING, Property.USER_PROPERTY},
    PacketType.UNSUBSCRIBE: {Property.USER_PROPERTY},
    PacketType.UNSUBACK: {Property.REASON_STRING, Property.USER_PROPERTY},
    PacketType.PINGREQ: {},
    PacketType.PINGRESP: {},
    PacketType.DISCONNECT: {
        Property.SESSION_EXPIRY_INTERVAL,
        Property.SERVER_REFERENCE,
        Property.REASON_STRING,
        Property.USER_PROPERTY,
    },
    PacketType.AUTH: {
        Property.AUTHENTICATION_METHOD,
        Property.AUTHENTICATION_DATA,
        Property.REASON_STRING,
        Property.USER_PROPERTY,
    },
}


class Properties(TypedDict, total=False):
    payload_format_indicator: bool
    message_expire_level: int
    content_type: str
    response_topic: str
    correlation_data: bytes
    subscription_identifier: int
    session_expiry_interval: int
    assigned_client_identifier: str
    server_keep_alive: int
    authentication_method: str
    authentication_data: bytes
    request_problem_information: bool
    will_delay_interval: int
    request_response_information: bool
    response_information: str
    server_reference: str
    reason_string: str
    receive_maximum: int
    topic_alias_maximum: int
    topic_alias: int
    maximum_qos: int
    retain_available: bool
    user_property: Sequence[Tuple[str, str]]
    maximum_packet_size: int
    wildcard_subscription_available: bool
    subscription_identifier_available: bool
    shared_subscription_available: bool


_MAP_PROPERTY_PARSER: dict[Property, Callable[[AsyncGenerator[bytes, None]], Any]] = {
    Property.PAYLOAD_FORMAT_INDICATOR: lambda stream: _parse_property_value(
        stream, 1, "!B"
    ),
    Property.MESSAGE_EXPIRE_LEVEL: lambda stream: _parse_property_value(
        stream, 4, "!L"
    ),
    Property.CONTENT_TYPE: lambda stream: _parse_string_property_value(stream),
    Property.RESPONSE_TOPIC: lambda stream: _parse_string_property_value(stream),
    Property.CORRELATION_DATA: lambda stream: _parse_bytes_property_value(stream),
    Property.SUBSCRIPTION_IDENTIFIER: lambda stream: parse_variable_byte_integer(
        stream
    ),
    Property.SESSION_EXPIRY_INTERVAL: lambda stream: _parse_property_value(
        stream, 4, "!L"
    ),
    Property.ASSIGNED_CLIENT_IDENTIFIER: lambda stream: _parse_string_property_value(
        stream
    ),
    Property.SERVER_KEEP_ALIVE: lambda stream: _parse_property_value(stream, 2, "!H"),
    Property.AUTHENTICATION_METHOD: lambda stream: _parse_string_property_value(stream),
    Property.AUTHENTICATION_DATA: lambda stream: _parse_bytes_property_value(stream),
    Property.REQUEST_PROBLEM_INFORMATION: lambda stream: _parse_bool_value(stream),
    Property.WILL_DELAY_INTERVAL: lambda stream: _parse_property_value(stream, 4, "!L"),
    Property.REQUEST_RESPONSE_INFORMATION: lambda stream: _parse_bool_value(stream),
    Property.RESPONSE_INFORMATION: lambda stream: _parse_string_property_value(stream),
    Property.SERVER_REFERENCE: lambda stream: _parse_string_property_value(stream),
    Property.REASON_STRING: lambda stream: _parse_string_property_value(stream),
    Property.RECEIVE_MAXIMUM: lambda stream: _parse_property_value(stream, 2, "!H"),
    Property.TOPIC_ALIAS_MAXIMUM: lambda stream: _parse_property_value(stream, 2, "!H"),
    Property.TOPIC_ALIAS: lambda stream: _parse_property_value(stream, 2, "!H"),
    Property.MAXIMUM_QOS: lambda stream: _parse_property_value(stream, 1, "!B"),
    Property.RETAIN_AVAILABLE: lambda stream: _parse_bool_value(stream),
    Property.USER_PROPERTY: lambda stream: _parse_user_property_value(stream),
    Property.MAXIMUM_PACKET_SIZE: lambda stream: _parse_property_value(stream, 4, "!L"),
    Property.WILDCARD_SUBSCRIPTION_AVAILABLE: lambda stream: _parse_bool_value(stream),
    Property.SUBSCRIPTION_IDENTIFIER_AVAILABLE: lambda stream: _parse_bool_value(
        stream
    ),
    Property.SHARED_SUBSCRIPTION_AVAILABLE: lambda stream: _parse_bool_value(stream),
}


_MAP_PROPERTY_PACKERS = {
    Property.PAYLOAD_FORMAT_INDICATOR: lambda x: struct.pack("!B", x),
    Property.MESSAGE_EXPIRE_LEVEL: lambda x: struct.pack("!L", x),
    Property.CONTENT_TYPE: lambda x: pack_str16(x),
    Property.RESPONSE_TOPIC: lambda x: pack_str16(x),
    Property.CORRELATION_DATA: lambda x: pack_binaries(x),
    Property.SUBSCRIPTION_IDENTIFIER: lambda x: pack_variable_byte_integer(x),
    Property.SESSION_EXPIRY_INTERVAL: lambda x: struct.pack("!L", x),
    Property.ASSIGNED_CLIENT_IDENTIFIER: lambda x: pack_str16(x),
    Property.SERVER_KEEP_ALIVE: lambda x: struct.pack("!H", x),
    Property.AUTHENTICATION_METHOD: lambda x: pack_str16(x),
    Property.AUTHENTICATION_DATA: lambda x: pack_binaries(x),
    Property.REQUEST_PROBLEM_INFORMATION: lambda x: struct.pack("!B", x),
    Property.WILL_DELAY_INTERVAL: lambda x: struct.pack("!L", x),
    Property.REQUEST_RESPONSE_INFORMATION: lambda x: struct.pack("!B", x),
    Property.RESPONSE_INFORMATION: lambda x: pack_str16(x),
    Property.SERVER_REFERENCE: lambda x: pack_str16(x),
    Property.REASON_STRING: lambda x: pack_str16(x),
    Property.RECEIVE_MAXIMUM: lambda x: struct.pack("!H", x),
    Property.TOPIC_ALIAS_MAXIMUM: lambda x: struct.pack("!H", x),
    Property.TOPIC_ALIAS: lambda x: struct.pack("!H", x),
    Property.MAXIMUM_QOS: lambda x: struct.pack("!B", x),
    Property.RETAIN_AVAILABLE: lambda x: struct.pack("!B", x),
    Property.USER_PROPERTY: lambda x: pack_str16(x),
    Property.MAXIMUM_PACKET_SIZE: lambda x: struct.pack("!L", x),
    Property.WILDCARD_SUBSCRIPTION_AVAILABLE: lambda x: struct.pack("!B", x),
    Property.SUBSCRIPTION_IDENTIFIER_AVAILABLE: lambda x: struct.pack("!B", x),
    Property.SHARED_SUBSCRIPTION_AVAILABLE: lambda x: struct.pack("!B", x),
}


async def parse_properties(
    stream: AsyncGenerator[bytes, None], length: int
) -> Properties:
    assert length >= 0

    if not length:
        return {}

    read_bytes = 0
    properties: Properties = {}
    user_properties: List[Tuple[str, str]] = []

    while read_bytes < length:
        code, n_bytes = await parse_variable_byte_integer(stream)

        read_bytes += n_bytes

        property_name: PropertyName = cast(PropertyName, Property(code).name.lower())
        value, n_bytes = await _MAP_PROPERTY_PARSER[Property(code)](stream)

        read_bytes += n_bytes

        if code == Property.USER_PROPERTY:
            user_properties.append(value)
        else:
            properties[property_name] = value

    assert length == read_bytes

    if user_properties:
        properties["user_property"] = user_properties

    return properties


def pack_properties(properties: Properties) -> bytes:
    properties = properties or {}

    data = bytearray()

    for prop_name, prop_value in properties.items():
        code = _NAME_TO_CODE_MAP[prop_name]
        value_packer = _MAP_PROPERTY_PACKERS[Property(code)]

        if code == Property.USER_PROPERTY:
            for value in cast(Sequence[Tuple[str, str]], prop_value):
                data.append(code & 0xFF)

                data.extend(
                    itertools.chain(
                        value_packer(value[0]),
                        value_packer(value[1]),
                    )
                )
        else:
            data.append(code & 0xFF)

            data.extend(value_packer(prop_value))

    result = pack_variable_byte_integer(len(data))
    result += data

    return bytes(result)


async def _parse_property_value(
    stream: AsyncGenerator[bytes, None], bytes_num: int, format: str
) -> Tuple[int, int]:
    value, *_ = struct.unpack(format, await read(stream, bytes_num))

    return value, bytes_num


async def _parse_bytes_property_value(
    stream: AsyncGenerator[bytes, None]
) -> Tuple[bytes, int]:
    length, *_ = struct.unpack("!H", await read(stream, 2))
    return await read(stream, length), 2 + length


async def _parse_string_property_value(
    stream: AsyncGenerator[bytes, None]
) -> Tuple[str, int]:
    value, length = await _parse_bytes_property_value(stream)
    return value.decode(), length


async def _parse_bool_value(stream: AsyncGenerator[bytes, None]) -> Tuple[bool, int]:
    result, *_ = struct.unpack("!B", await anext(stream))
    return bool(result), 1


async def _parse_user_property_value(
    stream: AsyncGenerator[bytes, None]
) -> Tuple[Tuple[str, str], int]:
    name, name_length = await _parse_string_property_value(stream)
    value, value_length = await _parse_string_property_value(stream)

    return (name, value), name_length + value_length
