import struct
from dataclasses import dataclass
from typing import AsyncGenerator, Sequence, Tuple

from gmqtt.mqtt.packet import FixedHeader, PacketType, parse_variable_byte
from gmqtt.mqtt.properties import Properties, pack_properties, parse_properties
from gmqtt.mqtt.utils import pack_str16, pack_variable_byte_integer, read


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

    packet.append((PacketType.SUBSCRIBE << 4) | (False << 3) | 0x2)

    packet.extend(pack_variable_byte_integer(packet_length))

    packet.extend(struct.pack("!H", packet_identifier))

    packet.extend(properties_bytes)
    packet.extend(payload)

    return packet


@dataclass(frozen=True)
class SubscriptionResult:
    packet_identifier: int
    properties: Properties

    reason_codes: Sequence[int]


async def parse_suback_packet(
    fixed_header: FixedHeader, stream: AsyncGenerator[bytes, None]
) -> SubscriptionResult:
    packet_identifier, *_ = struct.unpack("!H", await read(stream, 2))
    property_length, length = await parse_variable_byte(stream)
    properties = await parse_properties(stream, property_length)

    payload_length = fixed_header.length - length - property_length - 2
    reason_codes = []

    for _ in range(payload_length):
        reason_code, *_ = struct.unpack("!B", await anext(stream))
        reason_codes.append(reason_code)

    return SubscriptionResult(
        packet_identifier=packet_identifier,
        properties=properties,
        reason_codes=reason_codes,
    )
