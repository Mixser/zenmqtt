from typing import AsyncGenerator, Sequence


async def build_async_generator(
    seq: Sequence[bytes] | bytes,
) -> AsyncGenerator[bytes, None]:
    for byte in seq:
        yield byte
