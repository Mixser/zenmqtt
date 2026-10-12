"""
Integration tests: the client against a real MQTT 5 broker, through the public
API only. They run when MQTT_INTEGRATION_URL is set, e.g.:

    make local/infrastructure/up
    MQTT_INTEGRATION_URL=tcp://localhost:1883 make test/integration
"""
import os
import uuid
from typing import Any, AsyncIterator, Callable
from urllib.parse import urlparse

import pytest
import pytest_asyncio

from tests.integration.proxy import Proxy
from zenmqtt import MQTTClient, ReconnectPolicy

# reconnect quickly, the tests wait for it
FAST_RECONNECT = ReconnectPolicy(initial_delay=0.05, max_delay=0.5, jitter=0)

# the session survives a lost connection
SESSION = {"session_expiry_interval": 60}


@pytest.fixture
def broker_url() -> str:
    url = os.environ.get("MQTT_INTEGRATION_URL")

    if not url:
        pytest.skip("MQTT_INTEGRATION_URL isn't set")

    return url


@pytest.fixture
def topic() -> str:
    """A topic of this test only: tests don't see messages of each other."""
    return f"zenmqtt/integration/{uuid.uuid4().hex}"


@pytest_asyncio.fixture
async def proxy(broker_url: str) -> AsyncIterator[Proxy]:
    url = urlparse(broker_url)
    proxy = Proxy(url.hostname or "localhost", url.port or 1883)
    await proxy.start()

    yield proxy

    await proxy.stop()


@pytest_asyncio.fixture
async def make_client() -> AsyncIterator[Callable[..., MQTTClient]]:
    """Creates clients with unique ids, disconnects them after the test."""
    clients: list[MQTTClient] = []

    def make(name: str = "client", **kwargs: Any) -> MQTTClient:
        kwargs.setdefault("reconnect", FAST_RECONNECT)
        client = MQTTClient(f"zenmqtt-{name}-{uuid.uuid4().hex[:12]}", **kwargs)
        clients.append(client)
        return client

    yield make

    for client in clients:
        try:
            await client.disconnect()
        except Exception:
            pass
