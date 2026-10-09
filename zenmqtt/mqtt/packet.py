import struct
from dataclasses import dataclass
from enum import IntEnum
from typing import Final, Tuple

from zenmqtt.exceptions import MalformedPacketError


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


FIXED_HEADER_SIZE: Final[int] = 1

# "Remaining Length" is encoded in at most 4 bytes
_MAX_VARIABLE_BYTE_INTEGER_SIZE: Final[int] = 4

_UINT16: Final[struct.Struct] = struct.Struct("!H")
_UINT32: Final[struct.Struct] = struct.Struct("!L")


@dataclass(frozen=True)
class FixedHeader:
    __slots__ = ("packet_type", "flags", "length")

    packet_type: PacketType
    flags: int
    length: int


def parse_variable_byte_integer(data: bytes, offset: int = 0) -> Tuple[int, int]:
    """
    Returns the value and the number of bytes it takes.

    :raises IndexError: data ends before the end of the value
    :raises MalformedPacketError: the value takes more than 4 bytes
    """
    value = 0
    multiplier = 1

    for size in range(1, _MAX_VARIABLE_BYTE_INTEGER_SIZE + 1):
        byte = data[offset + size - 1]
        value += (byte & 0x7F) * multiplier

        if byte & 0x80 == 0:
            return value, size

        multiplier *= 128

    raise MalformedPacketError("Variable byte integer is longer than 4 bytes")


def parse_fixed_header(data: bytes) -> Tuple[FixedHeader, int]:
    """Returns the fixed header and its size."""
    try:
        length, size = parse_variable_byte_integer(data, 1)
    except IndexError as exc:
        raise MalformedPacketError("Incomplete fixed header") from exc

    header = FixedHeader(
        packet_type=PacketType(data[0] >> 4), flags=data[0] & 0xF, length=length
    )

    return header, FIXED_HEADER_SIZE + size


def split_packet(data: bytes) -> Tuple[FixedHeader, "BytesReader"]:
    """Splits a whole packet into the fixed header and a reader of the body."""
    header, header_size = parse_fixed_header(data)

    if len(data) != header_size + header.length:
        raise MalformedPacketError(
            f"Packet size {len(data)} doesn't match {header_size + header.length}"
        )

    return header, BytesReader(data[header_size:])


class BytesReader:
    """
    Reads values from the body of a packet. Reading past the end means that
    the packet is malformed.
    """

    __slots__ = ("_data", "_offset")

    def __init__(self, data: bytes) -> None:
        self._data = data
        self._offset = 0

    def remaining(self) -> int:
        return len(self._data) - self._offset

    def read(self, size: int) -> bytes:
        start = self._offset
        end = start + size

        if end > len(self._data):
            raise MalformedPacketError("Unexpected end of the packet")

        self._offset = end
        return self._data[start:end]

    def read_byte(self) -> int:
        if self._offset >= len(self._data):
            raise MalformedPacketError("Unexpected end of the packet")

        value = self._data[self._offset]
        self._offset += 1
        return value

    def read_uint16(self) -> int:
        value: int = _UINT16.unpack(self.read(2))[0]
        return value

    def read_uint32(self) -> int:
        value: int = _UINT32.unpack(self.read(4))[0]
        return value

    def read_variable_byte_integer(self) -> int:
        try:
            value, size = parse_variable_byte_integer(self._data, self._offset)
        except IndexError as exc:
            raise MalformedPacketError("Unexpected end of the packet") from exc

        self._offset += size
        return value

    def read_binary(self) -> bytes:
        """Binary data with 2 bytes of length."""
        return self.read(self.read_uint16())

    def read_str(self) -> str:
        """UTF-8 string with 2 bytes of length."""
        try:
            return self.read_binary().decode()
        except UnicodeDecodeError as exc:
            raise MalformedPacketError("Invalid UTF-8 string") from exc

    def read_rest(self) -> bytes:
        return self.read(self.remaining())

    def ensure_end(self) -> None:
        if self.remaining():
            raise MalformedPacketError(
                f"{self.remaining()} unexpected bytes at the end of the packet"
            )
