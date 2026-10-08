import asyncio
import ssl
from typing import Final, Protocol
from urllib.parse import ParseResult

from .base import ConnectionOptions, MQTTConnectionTransport

DEFAULT_PORT: Final[int] = 1883
DEFAULT_TLS_PORT: Final[int] = 8883


class StreamReader(Protocol):
    async def read(self, size: int) -> bytes:
        ...

    def feed_eof(self) -> None:
        ...


class StreamWriter(Protocol):
    def write(self, payload: bytes) -> None:
        ...

    def write_eof(self) -> None:
        ...

    def can_write_eof(self) -> bool:
        ...

    def is_closing(self) -> bool:
        ...

    def close(self) -> None:
        ...

    async def wait_closed(self) -> None:
        ...


class TCPConnectionTransport(MQTTConnectionTransport):
    def __init__(self, reader: StreamReader, writer: StreamWriter):
        self._reader = reader
        self._writer = writer

    async def write(self, payload: bytes) -> None:
        self._writer.write(payload)

    async def close(self) -> None:
        self._reader.feed_eof()

        # TLS transports don't support half-close
        if self._writer.can_write_eof():
            self._writer.write_eof()

        self._writer.close()

        await self._writer.wait_closed()

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
