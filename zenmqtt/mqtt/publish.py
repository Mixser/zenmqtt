import itertools
import struct
from dataclasses import dataclass
from typing import Optional, Sequence, Tuple, TypedDict, cast

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

    payload_length = len(packed_topic) + len(payload)
    properties_bytes = pack_properties(cast(Properties, properties))
    payload_length += len(properties_bytes)

    if qos:
        payload_length += 2

    fixed_header = pack_fixed_header(
        PacketType.PUBLISH,
        flags=(dup & 1) << 3 | (qos << 1) | retain & 1,
        length=payload_length,
    )

    packet_payload = bytearray(packed_topic)

    if qos:
        packet_payload.extend(struct.pack("!H", packet_identifier))

    packet_payload.extend(itertools.chain(properties_bytes, payload))

    return fixed_header + bytes(packet_payload)


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
    dup: int
    qos: int
    retain: int

    packet_identifier: Optional[int]
    topic: str
    payload: bytes

    properties: PublishProperties


def parse_publish_packet(
    fixed_header: FixedHeader, reader: BytesReader
) -> PublishResult:
    dup = (fixed_header.flags & 0x8) >> 3
    qos = (fixed_header.flags & 0x6) >> 1
    retain = fixed_header.flags & 0x01

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
    payload = bytearray()

    payload.append(PacketType.PUBACK << 4)

    packet_length, variable_header_payload = _pack_publish_response_variable_header(
        packet_identifier, reason_code, cast(Properties, properties)
    )

    payload.extend(
        itertools.chain(struct.pack("!B", packet_length), variable_header_payload)
    )

    return bytes(payload)


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
    payload = bytearray([PacketType.PUBREC << 4])

    packet_length, variable_header_payload = _pack_publish_response_variable_header(
        packet_identifier, reason_code, cast(Properties, properties)
    )

    payload.extend(
        itertools.chain(struct.pack("!B", packet_length), variable_header_payload)
    )

    return bytes(payload)


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
    payload = bytearray([PacketType.PUBREL << 4 | 0x2])

    packet_length, variable_header_payload = _pack_publish_response_variable_header(
        packet_identifier, reason_code, cast(Properties, properties)
    )

    payload.extend(
        itertools.chain(struct.pack("!B", packet_length), variable_header_payload)
    )

    return bytes(payload)


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
    payload = bytearray([PacketType.PUBCOMP << 4])

    packet_length, variable_header_payload = _pack_publish_response_variable_header(
        packet_identifier, reason_code, cast(Properties, properties)
    )

    payload.extend(
        itertools.chain(struct.pack("!B", packet_length), variable_header_payload)
    )

    return bytes(payload)


def _parse_publish_response_packet(
    fixed_header: FixedHeader, reader: BytesReader
) -> Tuple[int, int, Properties]:
    packet_identifier = reader.read_uint16()
    # both the reason code and properties may be omitted
    reason_code = reader.read_byte() if reader.remaining() else 0
    properties = parse_properties(reader) if reader.remaining() else {}

    reader.ensure_end()

    return packet_identifier, reason_code, properties


def _pack_publish_response_variable_header(
    packet_identifier: int, reason_code: int, properties: Properties
) -> Tuple[int, bytes]:
    length = 2

    variable_header_payload = bytearray(struct.pack("!H", packet_identifier))

    if reason_code or properties:
        properties_payload = b""

        if properties:
            properties_payload = pack_properties(properties)

        length += 1 + len(properties_payload)

        variable_header_payload.extend(
            itertools.chain(struct.pack("!B", reason_code), properties_payload)
        )

    return length, bytes(variable_header_payload)


# PUBACK for QoS 1; PUBCOMP (or PUBREC with an error reason code) for QoS 2
PublishAcknowledgement = PubAckResult | PubRecResult | PubCompResult
