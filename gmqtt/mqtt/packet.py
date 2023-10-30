import struct
from dataclasses import dataclass
from enum import IntEnum
from typing import AsyncGenerator, Final, Optional, Tuple


class PacketType(IntEnum):
    RESERVED = 0x00

    CONNECT = 0x01  # Client to Server | Connection request
    CONNACK = 0x02  # Server to Client | Connect acknowledgment

    PUBLISH = 0x03  # Client to Server or Server to Client | Publish message
    PUBACK = (
        0x04  # Client to Server or Server to Client | Publish acknowledgment (QoS 1)
    )
    PUBREC = 0x05  # Client to Server or Server to Client | Publish received (QoS 2 delivery part 1)
    PUBREL = 0x06  # Client to Server or Server to Client | Publish release (QoS 2 delivery part 2)
    PUBCOMP = 0x07  # Client to Server or Server to Client | Publish complete (QoS 2 delivery part 3)

    SUBSCRIBE = 0x08  # Client to Server | Subscribe request
    SUBACK = 0x09  # Server to Client | Subscribe acknowledgment
    UNSUBSCRIBE = 0x0A  # Client to Server | Unsubscribe request
    UNSUBACK = 0x0B  # Server to Client  | Unsubscribe acknowledgment

    PINGREQ = 0x0C  # Client to Server | PING request
    PINGRESP = 0x0D  # Server to Client | PONG request

    DISCONNECT = 0x0E  # Client to Server or Server to Client | Disconnect notification

    AUTH = 0x0F  # Client to Server or Server to Client | Authentication exchange


#  MQTT Control Packet
# +-------------------------------------------------------+
# |   Fixed Header, present in all MQTT Control Packets   |
# +-------------------------------------------------------+
# | Variable Header, present in some MQTT Control Packets |
# +-------------------------------------------------------+
# |     Payload, present in some MQTT Control Packets     |
# +-------------------------------------------------------+


@dataclass(frozen=True)
class FixedHeader:
    __slots__ = ("packet_type", "flags", "length")

    packet_type: PacketType
    flags: int
    length: int


_MAX_VARIABLE_BYTES_LENGTH: Final[int] = 128 * 128 * 128


async def parse_variable_byte(payload: AsyncGenerator[bytes, None]) -> Tuple[int, int]:
    value = 0
    multiplier = 1
    length = 0

    while True:
        byte, *_ = struct.unpack("!B", await anext(payload))
        value += (byte & 0x7F) * multiplier
        length += 1

        if byte & 0x80 == 0:
            break

        multiplier *= 128
        assert multiplier <= _MAX_VARIABLE_BYTES_LENGTH

    return value, length


async def parse_fixed_header(
    payload: AsyncGenerator[bytes, None]
) -> Optional[FixedHeader]:
    fixed_header_raw = await anext(payload, None)

    if fixed_header_raw is None:
        return None

    byte_1, *_ = struct.unpack("!B", fixed_header_raw)
    length, _ = await parse_variable_byte(payload)

    return FixedHeader(
        packet_type=(byte_1 & 0xF0) >> 4, flags=byte_1 & 0xF, length=length
    )
