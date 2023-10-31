from typing import AsyncGenerator, Sequence


async def build_async_generator(
    seq: Sequence[bytes] | bytes,
) -> AsyncGenerator[bytes, None]:
    for byte in seq:
        if isinstance(byte, bytes):
            yield byte
        elif isinstance(byte, int):
            yield byte.to_bytes()
