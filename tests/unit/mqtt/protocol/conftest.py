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
