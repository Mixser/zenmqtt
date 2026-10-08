import asyncio
from logging import getLogger
from typing import Final

from gmqtt.connection import MQTTConnection
from gmqtt.mqtt.packet import AsyncDataSequence

logger = getLogger(__name__)

BUFFER_SIZE: Final[int] = 1024
READ_AT_MOST_BYTES: Final[int] = 128


async def build_data_sequence(
    connection: MQTTConnection,
) -> AsyncDataSequence:
    buffer: asyncio.Queue[bytes | None] = asyncio.Queue(maxsize=BUFFER_SIZE)

    async def _read_loop():
        try:
            while bs := await connection.read(size=READ_AT_MOST_BYTES):
                await buffer.put(bs)
        except Exception as exc:
            logger.error("mqtt_protocol.stream_reader.error", exc_info=exc)

        await buffer.put(None)

    asyncio.create_task(_read_loop(), name="mqtt-protocol-buffered-reader")

    while bytes_list := await buffer.get():
        for byte in bytes_list:
            yield byte.to_bytes()
