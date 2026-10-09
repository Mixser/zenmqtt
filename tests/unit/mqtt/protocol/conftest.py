import asyncio

import pytest_asyncio

from tests.unit.mqtt.protocol.helpers import TIMEOUT, _protocols


@pytest_asyncio.fixture(autouse=True)
async def close_protocols():
    yield

    while _protocols:
        protocol = _protocols.pop()

        if protocol._context.connection:
            await asyncio.wait_for(protocol.disconnect(reason=0), TIMEOUT)

    # e.g. the delivery task waits for space in a messages queue which a test
    # doesn't read anymore; asyncio.run() cancels such tasks at the end, the
    # event loop of pytest-asyncio is just closed, so they are cancelled here
    current = asyncio.current_task()
    pending = [task for task in asyncio.all_tasks() if task is not current]

    for task in pending:
        task.cancel()

    await asyncio.gather(*pending, return_exceptions=True)
