import asyncio
import ssl
from typing import Final, Protocol
from urllib.parse import ParseResult

from .base import ConnectionOptions, MQTTConnectionTransport

DEFAULT_PORT: Final[int] = 1883
DEFAULT_TLS_PORT: Final[int] = 8883


class StreamReader(Protocol):
    async def read(self, size: int) -> bytes:
        """Up to size bytes, b"" at the end of the stream."""

    def feed_eof(self) -> None:
        """Ends the stream: read() returns b"" after the buffered data."""


class StreamWriter(Protocol):
    def write(self, payload: bytes) -> None:
        """Puts the bytes into the send buffer."""

    async def drain(self) -> None:
        """Waits while the send buffer is above its high-water mark."""

    def write_eof(self) -> None:
        """Closes the write side of the connection (half-close)."""

    def can_write_eof(self) -> bool:
        """False for TLS: it doesn't support half-close."""

    def is_closing(self) -> bool:
        """True when the stream is closed or is being closed."""

    def close(self) -> None:
        """Starts closing the stream."""

    async def wait_closed(self) -> None:
        """Waits until the stream is closed."""


class TCPConnectionTransport(MQTTConnectionTransport):
    def __init__(self, reader: StreamReader, writer: StreamWriter):
        self._reader = reader
        self._writer = writer

    async def write(self, payload: bytes) -> None:
        self._writer.write(payload)

        # backpressure: waits while the send buffer is above its high-water
        # mark (64 KiB by default), e.g. the broker doesn't read
        try:
            await self._writer.drain()
        except ConnectionError:
            # the connection is lost, the read loop handles it; the data is
            # lost like with a write to a closed transport
            pass

    async def close(self) -> None:
        self._reader.feed_eof()

        # the connection may be broken already (e.g. reset by the peer): closing
        # it is still fine, the errors only say that the socket is gone
        try:
            # TLS transports don't support half-close
            if self._writer.can_write_eof():
                self._writer.write_eof()
        except OSError:
            pass

        self._writer.close()

        try:
            await self._writer.wait_closed()
        except OSError:
            pass

    async def read(self, size: int = -1) -> bytes:
        return await self._reader.read(size)

    def is_closing(self) -> bool:
        return self._writer.is_closing()


async def build_tcp_connection_transport(
    url: ParseResult, options: ConnectionOptions
) -> TCPConnectionTransport:
    reader, writer = await asyncio.open_connection(
        host=url.hostname, port=url.port or DEFAULT_PORT
    )
    return TCPConnectionTransport(reader, writer)


async def build_tls_connection_transport(
    url: ParseResult, options: ConnectionOptions
) -> TCPConnectionTransport:
    reader, writer = await asyncio.open_connection(
        host=url.hostname,
        port=url.port or DEFAULT_TLS_PORT,
        ssl=options.get("ssl") or ssl.create_default_context(),
    )
    return TCPConnectionTransport(reader, writer)
