import struct
from dataclasses import dataclass
from typing import Any, Optional, Sequence, Tuple, TypedDict, cast

from zenmqtt.exceptions import MalformedPacketError
from zenmqtt.mqtt.packet import BytesReader, FixedHeader, PacketType
from zenmqtt.mqtt.properties import Properties, pack_properties, parse_properties
from zenmqtt.mqtt.utils import pack_fixed_header, pack_str16


class PublishProperties(TypedDict, total=False):
    payload_format_indicator: bool
    message_expiry_interval: int
    content_type: str
    response_topic: str
    subscription_identifier: int
    topic_alias: int
    user_property: Sequence[Tuple[str, str]]


class PubackProperties(TypedDict, total=False):
    reason_string: str
    user_property: Sequence[Tuple[str, str]]


class PubrecProperties(TypedDict, total=False):
    reason_string: str
    user_property: Sequence[Tuple[str, str]]


class PubrelProperties(TypedDict, total=False):
    reason_string: str
    user_property: Sequence[Tuple[str, str]]


class PubcompProperties(TypedDict, total=False):
    reason_string: str
    user_property: Sequence[Tuple[str, str]]


def pack_publish_packet(
    packet_identifier: int,
    topic: str,
    payload: bytes,
    qos: int,
    retain: bool,
    dup: bool,
    properties: PublishProperties,
) -> bytes:
    if qos not in (0, 1, 2):
        raise ValueError(f"Invalid QoS: {qos}")

    packed_topic = pack_str16(topic)
    packed_identifier = struct.pack("!H", packet_identifier) if qos else b""
    packed_properties = pack_properties(cast(Properties, properties))

    fixed_header = pack_fixed_header(
        PacketType.PUBLISH,
        flags=(dup & 1) << 3 | (qos << 1) | retain & 1,
        length=len(packed_topic)
        + len(packed_identifier)
        + len(packed_properties)
        + len(payload),
    )

    # the payload is copied once
    return b"".join(
        (fixed_header, packed_topic, packed_identifier, packed_properties, payload)
    )


@dataclass(frozen=True)
class PublishResult:
    __slots__ = (
        "packet_identifier",
        "dup",
        "qos",
        "retain",
        "payload",
        "properties",
        "topic",
    )
    dup: bool
    qos: int
    retain: bool

    packet_identifier: Optional[int]
    topic: str
    payload: bytes

    properties: PublishProperties


def parse_publish_packet(
    fixed_header: FixedHeader, reader: BytesReader
) -> PublishResult:
    dup = bool(fixed_header.flags & 0x8)
    qos = (fixed_header.flags & 0x6) >> 1
    retain = bool(fixed_header.flags & 0x01)

    if qos == 3:
        raise MalformedPacketError("PUBLISH with QoS 3")

    topic = reader.read_str()
    packet_identifier = reader.read_uint16() if qos else None
    properties = parse_properties(reader)

    return PublishResult(
        dup=dup,
        qos=qos,
        retain=retain,
        packet_identifier=packet_identifier,
        topic=topic,
        payload=reader.read_rest(),
        properties=properties,
    )


@dataclass(frozen=True)
class PubAckResult:
    __slots__ = ("packet_identifier", "reason_code", "properties")

    packet_identifier: int
    reason_code: int
    properties: PubackProperties


def parse_puback_packet(fixed_header: FixedHeader, reader: BytesReader) -> PubAckResult:
    packet_identifier, reason_code, properties = _parse_publish_response_packet(
        fixed_header, reader
    )

    return PubAckResult(
        packet_identifier=packet_identifier,
        reason_code=reason_code,
        properties=properties,
    )


def pack_puback_packet(
    packet_identifier: int, reason_code: int, properties: PubackProperties
) -> bytes:
    return _pack_publish_response_packet(
        PacketType.PUBACK, 0x0, packet_identifier, reason_code, properties
    )


@dataclass(frozen=True)
class PubRecResult:
    __slots__ = ("packet_identifier", "reason_code", "properties")
    packet_identifier: int
    reason_code: int
    properties: PubrecProperties


def parse_pubrec_packet(fixed_header: FixedHeader, reader: BytesReader) -> PubRecResult:
    packet_identifier, reason_code, properties = _parse_publish_response_packet(
        fixed_header, reader
    )

    return PubRecResult(
        packet_identifier=packet_identifier,
        reason_code=reason_code,
        properties=properties,
    )


def pack_pubrec_packet(
    packet_identifier: int, reason_code: int, properties: PubrecProperties
) -> bytes:
    return _pack_publish_response_packet(
        PacketType.PUBREC, 0x0, packet_identifier, reason_code, properties
    )


@dataclass(frozen=True)
class PubRelResult:
    __slots__ = ("packet_identifier", "reason_code", "properties")

    packet_identifier: int
    reason_code: int
    properties: PubrelProperties


def parse_pubrel_packet(fixed_header: FixedHeader, reader: BytesReader) -> PubRelResult:
    packet_identifier, reason_code, properties = _parse_publish_response_packet(
        fixed_header, reader
    )

    return PubRelResult(
        packet_identifier=packet_identifier,
        reason_code=reason_code,
        properties=properties,
    )


def pack_pubrel_packet(
    packet_identifier: int, reason_code: int, properties: PubrelProperties
) -> bytes:
    return _pack_publish_response_packet(
        PacketType.PUBREL, 0x2, packet_identifier, reason_code, properties
    )


@dataclass(frozen=True)
class PubCompResult:
    __slots__ = ("packet_identifier", "reason_code", "properties")

    packet_identifier: int
    reason_code: int
    properties: PubcompProperties


def parse_pubcomp_packet(
    fixed_header: FixedHeader, reader: BytesReader
) -> PubCompResult:
    packet_identifier, reason_code, properties = _parse_publish_response_packet(
        fixed_header, reader
    )

    return PubCompResult(
        packet_identifier=packet_identifier,
        reason_code=reason_code,
        properties=properties,
    )


def pack_pubcomp_packet(
    packet_identifier: int, reason_code: int, properties: PubcompProperties
) -> bytes:
    return _pack_publish_response_packet(
        PacketType.PUBCOMP, 0x0, packet_identifier, reason_code, properties
    )


def _parse_publish_response_packet(
    fixed_header: FixedHeader, reader: BytesReader
) -> Tuple[int, int, Properties]:
    packet_identifier = reader.read_uint16()
    # both the reason code and properties may be omitted
    reason_code = reader.read_byte() if reader.remaining() else 0
    properties = parse_properties(reader) if reader.remaining() else {}

    reader.ensure_end()

    return packet_identifier, reason_code, properties


def _pack_publish_response_packet(
    packet_type: PacketType,
    flags: int,
    packet_identifier: int,
    reason_code: int,
    properties: Any,
) -> bytes:
    variable_header = struct.pack("!H", packet_identifier)

    # the reason code and properties may be omitted if they are empty
    if reason_code or properties:
        variable_header += struct.pack("!B", reason_code)

        if properties:
            variable_header += pack_properties(cast(Properties, properties))

    return pack_fixed_header(packet_type, flags, len(variable_header)) + variable_header


# PUBACK for QoS 1; PUBCOMP (or PUBREC with an error reason code) for QoS 2
PublishAcknowledgement = PubAckResult | PubRecResult | PubCompResult
