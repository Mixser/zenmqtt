import struct
from enum import IntEnum
from typing import Any, Callable, List, Sequence, Tuple, TypedDict, cast

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


# names of properties are the names of Property members in lower case
_NAME_TO_CODE_MAP: dict[str, Property] = {prop.name.lower(): prop for prop in Property}


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


_pack_uint8: Callable[[int], bytes] = struct.Struct("!B").pack
_pack_uint16: Callable[[int], bytes] = struct.Struct("!H").pack
_pack_uint32: Callable[[int], bytes] = struct.Struct("!L").pack

_MAP_PROPERTY_PACKERS: dict[Property, Callable[[Any], bytes]] = {
    Property.PAYLOAD_FORMAT_INDICATOR: _pack_uint8,
    Property.MESSAGE_EXPIRY_INTERVAL: _pack_uint32,
    Property.CONTENT_TYPE: pack_str16,
    Property.RESPONSE_TOPIC: pack_str16,
    Property.CORRELATION_DATA: pack_binaries,
    Property.SUBSCRIPTION_IDENTIFIER: pack_variable_byte_integer,
    Property.SESSION_EXPIRY_INTERVAL: _pack_uint32,
    Property.ASSIGNED_CLIENT_IDENTIFIER: pack_str16,
    Property.SERVER_KEEP_ALIVE: _pack_uint16,
    Property.AUTHENTICATION_METHOD: pack_str16,
    Property.AUTHENTICATION_DATA: pack_binaries,
    Property.REQUEST_PROBLEM_INFORMATION: _pack_uint8,
    Property.WILL_DELAY_INTERVAL: _pack_uint32,
    Property.REQUEST_RESPONSE_INFORMATION: _pack_uint8,
    Property.RESPONSE_INFORMATION: pack_str16,
    Property.SERVER_REFERENCE: pack_str16,
    Property.REASON_STRING: pack_str16,
    Property.RECEIVE_MAXIMUM: _pack_uint16,
    Property.TOPIC_ALIAS_MAXIMUM: _pack_uint16,
    Property.TOPIC_ALIAS: _pack_uint16,
    Property.MAXIMUM_QOS: _pack_uint8,
    Property.RETAIN_AVAILABLE: _pack_uint8,
    Property.USER_PROPERTY: pack_str16,
    Property.MAXIMUM_PACKET_SIZE: _pack_uint32,
    Property.WILDCARD_SUBSCRIPTION_AVAILABLE: _pack_uint8,
    Property.SUBSCRIPTION_IDENTIFIER_AVAILABLE: _pack_uint8,
    Property.SHARED_SUBSCRIPTION_AVAILABLE: _pack_uint8,
}


def parse_properties(reader: BytesReader) -> Properties:
    """Reads the length of properties and the properties."""
    length = reader.read_variable_byte_integer()

    if not length:
        return {}

    if length > reader.remaining():
        raise MalformedPacketError("Properties are longer than the packet")

    end = reader.remaining() - length
    # filled by names of the enum, which are the keys of Properties
    properties: dict[str, Any] = {}
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
            properties[prop.name.lower()] = value

    if reader.remaining() != end:
        raise MalformedPacketError("Properties don't match their length")

    if user_properties:
        properties["user_property"] = user_properties

    return cast(Properties, properties)


def pack_properties(properties: Properties) -> bytes:
    properties = properties or {}

    data = bytearray()

    for prop_name, prop_value in properties.items():
        code = _NAME_TO_CODE_MAP[prop_name]
        value_packer = _MAP_PROPERTY_PACKERS[code]

        if code == Property.USER_PROPERTY:
            for value in cast(Sequence[Tuple[str, str]], prop_value):
                data.append(code & 0xFF)
                data += value_packer(value[0])
                data += value_packer(value[1])
        else:
            data.append(code & 0xFF)

            data.extend(value_packer(prop_value))

    result = pack_variable_byte_integer(len(data))
    result += data

    return bytes(result)
