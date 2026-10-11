"""
A TCP proxy between the client and the broker, to break the network in tests
without touching the client or the broker.
"""
import asyncio
from typing import Optional

_CHUNK = 64 * 1024


class Proxy:
    def __init__(self, upstream_host: str, upstream_port: int) -> None:
        self._upstream = (upstream_host, upstream_port)
        self._server: Optional[asyncio.Server] = None
        # transports of both sides of every open connection
        self._transports: set[asyncio.BaseTransport] = set()
        self._tasks: set[asyncio.Task[None]] = set()
        self._down = False

    @property
    def url(self) -> str:
        assert self._server
        port = self._server.sockets[0].getsockname()[1]
        return f"tcp://127.0.0.1:{port}"

    async def start(self) -> None:
        self._server = await asyncio.start_server(self._accept, "127.0.0.1", 0)

    async def stop(self) -> None:
        self.cut()

        if self._server:
            self._server.close()
            await self._server.wait_closed()

        for task in self._tasks:
            task.cancel()

        await asyncio.gather(*self._tasks, return_exceptions=True)

    def cut(self) -> None:
        """Breaks all open connections, like a lost network: no DISCONNECT."""
        for transport in self._transports:
            transport.abort()

        self._transports.clear()

    def down(self) -> None:
        """New connections are closed at once, until up()."""
        self._down = True

    def up(self) -> None:
        self._down = False

    async def _accept(
        self, client_reader: asyncio.StreamReader, client_writer: asyncio.StreamWriter
    ) -> None:
        if self._down:
            client_writer.transport.abort()
            return

        try:
            broker_reader, broker_writer = await asyncio.open_connection(
                *self._upstream
            )
        except OSError:
            client_writer.transport.abort()
            return

        self._transports.update({client_writer.transport, broker_writer.transport})

        for reader, writer in (
            (client_reader, broker_writer),
            (broker_reader, client_writer),
        ):
            task = asyncio.create_task(self._pipe(reader, writer))
            self._tasks.add(task)
            task.add_done_callback(self._tasks.discard)

    async def _pipe(
        self, reader: asyncio.StreamReader, writer: asyncio.StreamWriter
    ) -> None:
        try:
            while data := await reader.read(_CHUNK):
                writer.write(data)
                await writer.drain()
        except (ConnectionError, asyncio.CancelledError):
            pass
        finally:
            # one side is closed: close the other one too
            self._transports.discard(writer.transport)
            writer.transport.abort()
