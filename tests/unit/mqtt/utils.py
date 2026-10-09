from typing import Sequence

from zenmqtt.mqtt.packet import AsyncDataSequence


async def build_async_generator(
    seq: Sequence[bytes] | bytes,
) -> AsyncDataSequence:
    for byte in seq:
        if isinstance(byte, bytes):
            yield byte
        elif isinstance(byte, int):
            yield byte.to_bytes()
