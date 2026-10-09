"""
The same small interface for every benchmarked client, so the scenarios
don't depend on a client library.
"""
from typing import AsyncIterator, Callable, Protocol
from urllib.parse import urlparse

from zenmqtt.client import MQTTClient


class BenchClient(Protocol):
    name: str

    async def connect(self, url: str) -> None:
        ...

    async def publish(self, topic: str, payload: bytes, qos: int) -> None:
        """Returns when the message is sent (QoS 0) or acknowledged (QoS 1/2)."""

    async def subscribe(self, topic: str, qos: int) -> None:
        ...

    def payloads(self) -> AsyncIterator[bytes]:
        """Payloads of received messages, acknowledged after they are taken."""

    async def disconnect(self) -> None:
        ...


class ZenmqttClient:
    name = "zenmqtt"

    def __init__(self, client_id: str) -> None:
        self._client = MQTTClient(client_id, reconnect=None)

    async def connect(self, url: str) -> None:
        await self._client.connect(
            url,
            clean_session=True,
            properties={"receive_maximum": 65535},
        )

    async def publish(self, topic: str, payload: bytes, qos: int) -> None:
        await self._client.publish(topic, payload, qos=qos)

    async def subscribe(self, topic: str, qos: int) -> None:
        await self._client.subscribe([(topic, qos)])

    async def payloads(self) -> AsyncIterator[bytes]:
        async for message in self._client.messages:
            await self._client.ack(message)
            yield message.payload

    async def disconnect(self) -> None:
        await self._client.disconnect()


class AiomqttClient:
    name = "aiomqtt"

    def __init__(self, client_id: str) -> None:
        self._client_id = client_id
        self._client = None

    async def connect(self, url: str) -> None:
        import aiomqtt

        parsed = urlparse(url)
        self._client = aiomqtt.Client(
            parsed.hostname or "localhost",
            parsed.port or 1883,
            identifier=self._client_id,
            protocol=aiomqtt.ProtocolVersion.V5,
            max_queued_incoming_messages=0,
        )
        await self._client.__aenter__()

    async def publish(self, topic: str, payload: bytes, qos: int) -> None:
        assert self._client
        await self._client.publish(topic, payload, qos=qos)

    async def subscribe(self, topic: str, qos: int) -> None:
        assert self._client
        await self._client.subscribe(topic, qos=qos)

    async def payloads(self) -> AsyncIterator[bytes]:
        assert self._client
        async for message in self._client.messages:
            yield message.payload

    async def disconnect(self) -> None:
        assert self._client
        await self._client.__aexit__(None, None, None)


def available_clients() -> dict[str, Callable[[str], BenchClient]]:
    clients: dict[str, Callable[[str], BenchClient]] = {"zenmqtt": ZenmqttClient}

    try:
        import aiomqtt  # noqa: F401

        clients["aiomqtt"] = AiomqttClient
    except ImportError:
        pass

    return clients
