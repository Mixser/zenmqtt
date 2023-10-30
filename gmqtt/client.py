import asyncio
from typing import Optional, Sequence, Tuple

from gmqtt.connection import create_connection
from gmqtt.mqtt.connect import ConnectionResult
from gmqtt.mqtt.protocol import MQTTProtocol
from gmqtt.mqtt.publish import PublishResult
from gmqtt.mqtt.subscribe import SubscriptionResult

ClientId = str
ClientConfig = dict

Topic = str

Headers = dict
Message = bytes

QOS = int


class AsyncMessageIterator:
    def __init__(self, queue: asyncio.Queue):
        self._queue = queue

    def __aiter__(self):
        return self

    async def __anext__(self):
        return await self._queue.get()


class MQTTClient:
    def __init__(self, client_id: ClientId, config: Optional[ClientConfig] = None):
        messages = asyncio.Queue(maxsize=50)

        self._protocol = MQTTProtocol(messages)
        self._queue = messages

        self.client_id = client_id

        self._username: Optional[str] = None
        self._password: Optional[str] = None

    def authorize(self, username: str, password: Optional[str]) -> None:
        self._username = username
        self._password = password

    async def connect(
        self,
        url: str,
    ) -> ConnectionResult:
        connection = await create_connection(url)
        self._protocol.set_connection(connection)

        return await self._protocol.authorize(
            self.client_id,
            self._username,
            self._password,
        )

    async def disconnect(self):
        await self._protocol.disconnect(reason=0)

    async def publish(self, topic: Topic, message: Message) -> Optional[PublishResult]:
        return await self._protocol.publish(topic, message, qos=1)

    async def subscribe(
        self, topics: Sequence[Tuple[Topic, QOS]]
    ) -> Optional[SubscriptionResult]:
        return await self._protocol.subscribe(topics)

    async def unsubscribe(self, topics: Sequence[Topic]) -> None:
        return await self._protocol.unsubscribe(topics)

    @property
    def messages(self):
        return AsyncMessageIterator(self._queue)
