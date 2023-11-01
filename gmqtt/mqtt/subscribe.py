import struct
from dataclasses import dataclass
from typing import AsyncGenerator, Sequence, Tuple, Type, TypeVar

from gmqtt.mqtt.packet import FixedHeader, PacketType, parse_variable_byte_integer
from gmqtt.mqtt.properties import Properties, pack_properties, parse_properties
from gmqtt.mqtt.utils import pack_str16, pack_variable_byte_integer, read


@dataclass(frozen=True)
class SubscribeResult:
    __slots__ = ("packet_identifier", "properties", "reason_codes")

    packet_identifier: int
    properties: Properties
    reason_codes: Sequence[int]


@dataclass(frozen=True)
class UnsubscribeResult:
    __slots__ = ("packet_identifier", "properties", "reason_codes")

    packet_identifier: int
    properties: Properties
    reason_codes: Sequence[int]


def pack_subscription_packet(
    packet_identifier: int, topics: Sequence[Tuple[str, int]]
) -> bytes:
    packet_length = 2

    payload = bytearray()

    for topic, qos in topics:
        packet_length += 2 + len(topic) + 1

        payload.extend(pack_str16(topic))

        payload.append(qos)

    properties_bytes = pack_properties({})
    packet_length += len(properties_bytes)

    packet = bytearray()

    packet.append((PacketType.SUBSCRIBE << 4) | 0x2)

    packet.extend(pack_variable_byte_integer(packet_length))

    packet.extend(struct.pack("!H", packet_identifier))

    packet.extend(properties_bytes)
    packet.extend(payload)

    return bytes(packet)


async def parse_suback_packet(
    fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
) -> SubscribeResult:
    return await _parse_packet(SubscribeResult, fixed_header, stream)


def pack_unsubscribe_packet(packet_identifier: int, topics: Sequence[str]) -> bytes:
    length = 2

    for topic in topics:
        length += 2 + len(topic)

    properties = pack_properties({})
    length += len(properties)

    payload = bytearray()

    payload.append((PacketType.UNSUBSCRIBE << 4) | 0x2)

    payload.extend(pack_variable_byte_integer(length))

    payload.extend(struct.pack("!H", packet_identifier))

    payload.extend(properties)

    for topic in topics:
        payload.extend(pack_str16(topic))

    return bytes(payload)


async def parse_unsubscribe_packet(
    fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
) -> UnsubscribeResult:
    return await _parse_packet(UnsubscribeResult, fixed_header, stream)


T = TypeVar("T", SubscribeResult, UnsubscribeResult)


async def _parse_packet(
    result_class: Type[T],
    fixed_header: FixedHeader,
    stream: AsyncGenerator[bytes, None],
) -> T:
    packet_identifier, *_ = struct.unpack("!H", await read(stream, 2))
    property_length, length = await parse_variable_byte_integer(stream)
    properties = await parse_properties(stream, property_length)

    payload_length = fixed_header.length - length - property_length - 2
    reason_codes = []

    for _ in range(payload_length):
        reason_code, *_ = struct.unpack("!B", await anext(stream))
        reason_codes.append(reason_code)

    return result_class(
        packet_identifier=packet_identifier,
        properties=properties,
        reason_codes=reason_codes,
    )
