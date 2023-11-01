import itertools
import struct
from dataclasses import dataclass
from typing import AsyncGenerator, Optional

from gmqtt.mqtt.packet import FixedHeader, PacketType, parse_variable_byte
from gmqtt.mqtt.properties import Properties, pack_properties, parse_properties
from gmqtt.mqtt.utils import pack_fixed_header, pack_str16, read


def pack_publish_packet(
    packet_identifier: int,
    topic: str,
    payload: bytes,
    qos: int,
    retain: bool,
    dup: bool,
    properties: Optional[Properties],
) -> bytes:
    packed_topic = pack_str16(topic)

    payload_length = len(packed_topic) + len(payload)
    properties_bytes = pack_properties(properties)
    payload_length += len(properties_bytes)

    if qos:
        payload_length += 2

    fixed_header = pack_fixed_header(
        PacketType.PUBLISH,
        flags=(dup & 1) << 3 | (qos << 1) | retain & 1,
        length=payload_length,
    )

    packet_payload = bytearray()

    packet_payload.extend(packed_topic)

    if qos:
        packet_payload.extend(struct.pack("!H", packet_identifier))

    packet_payload.extend(properties_bytes)

    packet_payload.extend(payload)

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

    properties: Properties


async def parse_publish_packet(
    fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
) -> PublishResult:
    dup = (fixed_header.flags & 0x8) >> 3
    qos = (fixed_header.flags & 0x6) >> 1
    retain = fixed_header.flags & 0x01

    payload_length = fixed_header.length

    topic_length, *_ = struct.unpack("!H", await read(stream, 2))
    payload_length -= 2

    topic, *_ = struct.unpack(f"!{topic_length}s", await read(stream, topic_length))
    payload_length -= topic_length

    packet_identifier: Optional[int] = None
    if qos:
        packet_identifier, *_ = struct.unpack("!H", await read(stream, 2))
        payload_length -= 2

    property_length, length = await parse_variable_byte(stream)
    properties = await parse_properties(stream, property_length)
    payload_length -= property_length + length

    payload = await read(stream, payload_length)

    return PublishResult(
        dup=dup,
        qos=qos,
        retain=retain,
        packet_identifier=packet_identifier,
        topic=topic.decode(),
        payload=payload,
        properties=properties,
    )


@dataclass(frozen=True)
class PubAckResult:
    __slots__ = ("packet_identifier", "reason_code", "properties")

    packet_identifier: int
    reason_code: int
    properties: Properties


async def parse_puback_packet(
    fixed_header: FixedHeader, payload: AsyncGenerator[bytes, None]
) -> PubAckResult:
    packet_identifier, *_ = struct.unpack("!H", await read(payload, 2))
    reason_code, *_ = struct.unpack("!B", await anext(payload))

    property_length, _ = await parse_variable_byte(payload)
    properties = await parse_properties(payload, property_length)

    return PubAckResult(
        packet_identifier=packet_identifier,
        reason_code=reason_code,
        properties=properties,
    )


def pack_puback_packet(packet_identifier: int, reason_code: int) -> bytes:
    length = 4

    return struct.pack(
        "!BBHBB", PacketType.PUBACK << 4, length, packet_identifier, reason_code, 0
    )


@dataclass(frozen=True)
class PubRecResult:
    packet_identifier: int
    reason_code: int
    properties: Properties


async def parse_pubrec_packet(
    fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
) -> PubRecResult:
    packet_identifier, *_ = struct.unpack("!H", await read(stream, 2))
    reason_code, *_ = struct.unpack("!B", await anext(stream))

    property_length, size = await parse_variable_byte(stream)
    properties = await parse_properties(stream, property_length)

    assert fixed_header.length == 2 + 1 + size + property_length

    return PubRecResult(
        packet_identifier=packet_identifier,
        reason_code=reason_code,
        properties=properties,
    )


def pack_pubrec_packet(
    packet_identifier: int, reason_code: int, properties: Properties
) -> bytes:
    payload = bytearray()

    payload.append(PacketType.PUBREC << 4)

    properties_payload = pack_properties(properties)

    length = 2 + 1 + len(properties_payload)

    payload.append(length)

    payload.extend(struct.pack("!HB", packet_identifier, reason_code))

    payload.extend(properties_payload)

    return bytes(payload)


@dataclass(frozen=True)
class PubRelResult:
    packet_identifier: int
    reason_code: int
    properties: Properties


async def parse_pubrel_packet(
    fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
) -> PubRelResult:
    packet_identifier, *_ = struct.unpack("!H", await read(stream, 2))

    reason_code = property_length = size = 0
    properties = {}

    if fixed_header.length > 2:
        reason_code, *_ = struct.unpack("!B", await anext(stream))
        property_length, size = await parse_variable_byte(stream)
        properties = await parse_properties(stream, property_length)

    assert fixed_header.length == 2 + bool(reason_code) + size + property_length

    return PubRelResult(
        packet_identifier=packet_identifier,
        reason_code=reason_code,
        properties=properties,
    )


def pack_pubrel_packet(
    packet_identifier: int, reason_code: int, properties: Properties
) -> bytes:
    payload = bytearray()

    payload.append(PacketType.PUBREL << 4 | 0x2)

    length = 2

    variable_header_payload = bytearray(struct.pack("!H", packet_identifier))

    if reason_code != 0 or properties:
        properties_payload = pack_properties(properties)
        length += 1 + len(properties_payload)
        variable_header_payload.extend(
            itertools.chain(struct.pack("!B", reason_code), properties_payload)
        )

    payload.extend(itertools.chain(struct.pack("!B", length), variable_header_payload))

    return bytes(payload)
