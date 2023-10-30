import asyncio
from typing import Protocol

from .base import MQTTConnectionTransport


class StreamReader(Protocol):
    async def read(self, size: int) -> bytes:
        ...

    def feed_eof(self) -> None:
        ...


class StreamWriter(Protocol):
    def write(self, payload: bytes) -> None:
        ...

    def is_closing(self) -> bool:
        ...

    def close(self) -> None:
        ...


class TCPConnectionTransport(MQTTConnectionTransport):
    def __init__(self, reader: StreamReader, writer: StreamWriter):
        self._reader = reader
        self._writer = writer

    async def write(self, payload: bytes) -> None:
        self._writer.write(payload)

    async def close(self) -> None:
        self._reader.feed_eof()
        self._writer.close()

    async def read(self, size: int = -1) -> bytes:
        bs = await self._reader.read(size)

        if not bs or self.is_closing():
            await self.close()
            raise ConnectionResetError()

        return bs

    def is_closing(self) -> bool:
        return self._writer.is_closing()


async def build_tcp_connection_transport(url) -> TCPConnectionTransport:
    reader, writer = await asyncio.open_connection(host=url.hostname, port=url.port)
    return TCPConnectionTransport(reader, writer)
