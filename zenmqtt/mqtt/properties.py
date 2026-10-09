import itertools
import struct
from enum import IntEnum
from typing import Any, Callable, List, Literal, Sequence, Tuple, TypedDict, cast

from zenmqtt.exceptions import MalformedPacketError
from zenmqtt.mqtt.packet import BytesReader, PacketType
from zenmqtt.mqtt.utils import pack_binaries, pack_str16, pack_variable_byte_integer


class Property(IntEnum):
    PAYLOAD_FORMAT_INDICATOR = 0x01
    MESSAGE_EXPIRY_INTERVAL = 0x02
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
    "message_expiry_interval",
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
    "message_expiry_interval": 2,
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
        Property.REQUEST_RESPONSE_INFORMATION,
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
        Property.MESSAGE_EXPIRY_INTERVAL,
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
    message_expiry_interval: int
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


def _read_bool(reader: BytesReader) -> bool:
    return bool(reader.read_byte())


def _read_user_property(reader: BytesReader) -> Tuple[str, str]:
    return reader.read_str(), reader.read_str()


_MAP_PROPERTY_PARSER: dict[Property, Callable[[BytesReader], Any]] = {
    Property.PAYLOAD_FORMAT_INDICATOR: BytesReader.read_byte,
    Property.MESSAGE_EXPIRY_INTERVAL: BytesReader.read_uint32,
    Property.CONTENT_TYPE: BytesReader.read_str,
    Property.RESPONSE_TOPIC: BytesReader.read_str,
    Property.CORRELATION_DATA: BytesReader.read_binary,
    Property.SUBSCRIPTION_IDENTIFIER: BytesReader.read_variable_byte_integer,
    Property.SESSION_EXPIRY_INTERVAL: BytesReader.read_uint32,
    Property.ASSIGNED_CLIENT_IDENTIFIER: BytesReader.read_str,
    Property.SERVER_KEEP_ALIVE: BytesReader.read_uint16,
    Property.AUTHENTICATION_METHOD: BytesReader.read_str,
    Property.AUTHENTICATION_DATA: BytesReader.read_binary,
    Property.REQUEST_PROBLEM_INFORMATION: _read_bool,
    Property.WILL_DELAY_INTERVAL: BytesReader.read_uint32,
    Property.REQUEST_RESPONSE_INFORMATION: _read_bool,
    Property.RESPONSE_INFORMATION: BytesReader.read_str,
    Property.SERVER_REFERENCE: BytesReader.read_str,
    Property.REASON_STRING: BytesReader.read_str,
    Property.RECEIVE_MAXIMUM: BytesReader.read_uint16,
    Property.TOPIC_ALIAS_MAXIMUM: BytesReader.read_uint16,
    Property.TOPIC_ALIAS: BytesReader.read_uint16,
    Property.MAXIMUM_QOS: BytesReader.read_byte,
    Property.RETAIN_AVAILABLE: _read_bool,
    Property.USER_PROPERTY: _read_user_property,
    Property.MAXIMUM_PACKET_SIZE: BytesReader.read_uint32,
    Property.WILDCARD_SUBSCRIPTION_AVAILABLE: _read_bool,
    Property.SUBSCRIPTION_IDENTIFIER_AVAILABLE: _read_bool,
    Property.SHARED_SUBSCRIPTION_AVAILABLE: _read_bool,
}


_MAP_PROPERTY_PACKERS = {
    Property.PAYLOAD_FORMAT_INDICATOR: lambda x: struct.pack("!B", x),
    Property.MESSAGE_EXPIRY_INTERVAL: lambda x: struct.pack("!L", x),
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


def parse_properties(reader: BytesReader) -> Properties:
    """Reads the length of properties and the properties."""
    length = reader.read_variable_byte_integer()

    if not length:
        return {}

    if length > reader.remaining():
        raise MalformedPacketError("Properties are longer than the packet")

    end = reader.remaining() - length
    properties: Properties = {}
    user_properties: List[Tuple[str, str]] = []

    while reader.remaining() > end:
        code = reader.read_variable_byte_integer()

        try:
            prop = Property(code)
        except ValueError as exc:
            raise MalformedPacketError(f"Unknown property 0x{code:02X}") from exc

        value = _MAP_PROPERTY_PARSER[prop](reader)

        if prop == Property.USER_PROPERTY:
            user_properties.append(value)
        else:
            properties[cast(PropertyName, prop.name.lower())] = value

    if reader.remaining() != end:
        raise MalformedPacketError("Properties don't match their length")

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
