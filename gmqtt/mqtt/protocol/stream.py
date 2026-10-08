import asyncio
from typing import Final

from gmqtt.connection import MQTTConnection
from gmqtt.mqtt.packet import AsyncDataSequence

BUFFER_SIZE: Final[int] = 1024
READ_AT_MOST_BYTES: Final[int] = 128


async def build_data_sequence(
    connection: MQTTConnection,
) -> AsyncDataSequence:
    """
    Bytes read from the connection. A read error is raised by the stream, so
    the reason of the lost connection reaches the read loop of the protocol.
    """
    buffer: asyncio.Queue[bytes | Exception | None] = asyncio.Queue(maxsize=BUFFER_SIZE)

    async def _read_loop() -> None:
        try:
            while data := await connection.read(size=READ_AT_MOST_BYTES):
                await buffer.put(data)
        except Exception as exc:
            await buffer.put(exc)
            return

        await buffer.put(None)

    # the event loop keeps only a weak reference to tasks
    reader = asyncio.create_task(_read_loop(), name="mqtt-protocol-buffered-reader")

    try:
        while (data := await buffer.get()) is not None:
            if isinstance(data, Exception):
                raise data

            for byte in data:
                yield byte.to_bytes()
    finally:
        reader.cancel()
