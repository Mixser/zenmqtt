from typing import Final, Optional, Tuple

from zenmqtt.connection import MQTTConnection
from zenmqtt.exceptions import IncomingPacketTooLargeError, MalformedPacketError
from zenmqtt.mqtt.packet import (
    FIXED_HEADER_SIZE,
    BytesReader,
    FixedHeader,
    PacketType,
    parse_variable_byte_integer,
)

# bytes requested from the connection by one read
READ_SIZE: Final[int] = 64 * 1024

# "Remaining Length" is encoded in at most 4 bytes
_MAX_LENGTH_SIZE: Final[int] = 4


class PacketReader:
    """
    Reads whole packets from the connection. The connection is read in large
    chunks, and all complete packets in the buffer are returned before the
    connection is read again.
    """

    def __init__(self, connection: MQTTConnection) -> None:
        self._connection = connection
        self._buffer = bytearray()
        self._offset = 0

        # "Maximum Packet Size" of the client, None means no limit
        self.maximum_packet_size: Optional[int] = None

    async def read_packet(self) -> Optional[Tuple[FixedHeader, BytesReader, int]]:
        """
        Returns the fixed header, a reader of the body and the size of the packet, or None
        when the connection is closed.

        :raises IncomingPacketTooLargeError: the packet is bigger than
            maximum_packet_size; its body isn't read
        :raises MalformedPacketError: invalid "Remaining Length"
        """
        # the first byte and "Remaining Length" of 1..4 bytes
        header_size = FIXED_HEADER_SIZE

        while True:
            header_size += 1

            if not await self._fill(header_size):
                return None

            # "Remaining Length" is a variable byte integer: 7 bits of value per
            # byte, the high bit (0x80) means that one more byte follows. The
            # size of the length isn't known in advance, so the buffer is filled
            # byte by byte until a byte without this bit ends the length; only
            # then the length can be decoded and the body size is known.
            last_byte = self._buffer[self._offset + header_size - 1]

            if not last_byte & 0x80:
                break

            if header_size - FIXED_HEADER_SIZE == _MAX_LENGTH_SIZE:
                raise MalformedPacketError("Remaining length is longer than 4 bytes")

        length, _ = parse_variable_byte_integer(self._buffer, self._offset + 1)
        size = header_size + length

        if self.maximum_packet_size is not None and size > self.maximum_packet_size:
            raise IncomingPacketTooLargeError(
                f"Packet of {size} bytes, maximum is {self.maximum_packet_size}"
            )

        if not await self._fill(size):
            return None

        # the packet starts at the offset: _fill() may have moved the data to
        # the beginning of the buffer
        start = self._offset
        first_byte = self._buffer[start]
        body_start, end = start + header_size, start + size

        # one copy instead of two (slice of bytearray and bytes of it); the
        # view is released at once, the buffer can't be resized while it lives
        with memoryview(self._buffer) as view:
            body = bytes(view[body_start:end])

        self._offset = end

        header = FixedHeader(
            packet_type=PacketType(first_byte >> 4),
            flags=first_byte & 0xF,
            length=length,
        )

        return header, BytesReader(body), size

    async def _fill(self, size: int) -> bool:
        """
        Reads the connection until the buffer has `size` bytes after the
        offset. Returns False if the connection is closed before.
        """
        while len(self._buffer) - self._offset < size:
            # drop packets which were returned already
            if self._offset:
                del self._buffer[: self._offset]
                self._offset = 0

            data = await self._connection.read(READ_SIZE)

            if not data:
                return False

            self._buffer += data

        return True
