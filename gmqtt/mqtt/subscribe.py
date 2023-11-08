import itertools
import struct
from dataclasses import dataclass
from typing import Sequence, Tuple, TypedDict, cast

from gmqtt.mqtt.packet import (
    AsyncDataSequence,
    FixedHeader,
    PacketType,
    parse_variable_byte_integer,
)
from gmqtt.mqtt.properties import Properties, pack_properties, parse_properties
from gmqtt.mqtt.utils import pack_str16, pack_variable_byte_integer, read


class SubscriptionProperties(TypedDict, total=False):
    subscription_identifier: int
    user_property: Sequence[Tuple[str, str]]


class SubackProperties(TypedDict, total=False):
    reason_string: str
    user_property: Sequence[Tuple[str, str]]


class UnsubscribeProperties(TypedDict, total=False):
    user_property: Sequence[Tuple[str, str]]


@dataclass(frozen=True)
class SubscribeResult:
    __slots__ = ("packet_identifier", "properties", "reason_codes")

    packet_identifier: int
    properties: SubackProperties
    reason_codes: Sequence[int]


@dataclass(frozen=True)
class UnsubscribeResult:
    __slots__ = ("packet_identifier", "properties", "reason_codes")

    packet_identifier: int
    properties: UnsubscribeProperties
    reason_codes: Sequence[int]


def pack_subscription_packet(
    packet_identifier: int,
    topics: Sequence[Tuple[str, int]],
    properties: SubscriptionProperties,
) -> bytes:
    length = 2

    topics_bytes = bytearray()

    for topic, qos in topics:
        topics_bytes.extend(itertools.chain(pack_str16(topic), struct.pack("!B", qos)))

    length += len(topics_bytes)

    properties_bytes = pack_properties(cast(Properties, properties))
    length += len(properties_bytes)

    packet = bytearray([(PacketType.SUBSCRIBE << 4) | 0x2])

    packet.extend(
        itertools.chain(
            pack_variable_byte_integer(length),
            struct.pack("!H", packet_identifier),
            properties_bytes,
            topics_bytes,
        )
    )

    return bytes(packet)


async def parse_suback_packet(
    fixed_header: FixedHeader, stream: AsyncDataSequence
) -> SubscribeResult:
    packet_identifier, properties, reason_codes = await _parse_packet(
        fixed_header, stream
    )

    return SubscribeResult(
        packet_identifier=packet_identifier,
        properties=cast(SubackProperties, properties),
        reason_codes=reason_codes,
    )


def pack_unsubscribe_packet(
    packet_identifier: int, topics: Sequence[str], properties: UnsubscribeProperties
) -> bytes:
    length = 2

    topic_bytes = bytearray()
    for topic in topics:
        topic_bytes.extend(pack_str16(topic))

    length += len(topic_bytes)

    properties_bytes = pack_properties(cast(Properties, properties))
    length += len(properties_bytes)

    packet = bytearray([(PacketType.UNSUBSCRIBE << 4) | 0x2])

    packet.extend(
        itertools.chain(
            pack_variable_byte_integer(length),
            struct.pack("!H", packet_identifier),
            properties_bytes,
            topic_bytes,
        )
    )

    return bytes(packet)


async def parse_unsubscribe_packet(
    fixed_header: FixedHeader, stream: AsyncDataSequence
) -> UnsubscribeResult:
    packet_identifier, properties, reason_codes = await _parse_packet(
        fixed_header, stream
    )

    return UnsubscribeResult(
        packet_identifier=packet_identifier,
        properties=cast(UnsubscribeProperties, properties),
        reason_codes=reason_codes,
    )


async def _parse_packet(
    fixed_header: FixedHeader,
    stream: AsyncDataSequence,
) -> Tuple[int, Properties, Sequence[int]]:
    packet_identifier, *_ = struct.unpack("!H", await read(stream, 2))
    property_length, length = await parse_variable_byte_integer(stream)

    properties = await parse_properties(stream, property_length)

    payload_length = fixed_header.length - length - property_length - 2
    reason_codes = []

    for _ in range(payload_length):
        reason_code, *_ = struct.unpack("!B", await anext(stream))
        reason_codes.append(reason_code)

    return (
        packet_identifier,
        properties,
        reason_codes,
    )
