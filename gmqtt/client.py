import asyncio
from typing import Optional, Sequence, Tuple

from gmqtt.connection import create_connection
from gmqtt.mqtt.connect import ConnectionResult, ConnectProperties
from gmqtt.mqtt.protocol import MQTTProtocol
from gmqtt.mqtt.publish import PublishProperties, PublishResult
from gmqtt.mqtt.session import MQTTSession, build_in_memory_session
from gmqtt.mqtt.subscribe import (
    SubscribeResult,
    SubscriptionProperties,
    UnsubscribeProperties,
    UnsubscribeResult,
)

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
        value = await self._queue.get()

        if value is None:
            raise StopAsyncIteration

        return value


class MQTTClient:
    def __init__(self, client_id: ClientId, session: Optional[MQTTSession] = None):
        messages: asyncio.Queue[PublishResult | None] = asyncio.Queue(maxsize=50)

        session = session or build_in_memory_session()

        self._protocol = MQTTProtocol(messages, session)
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
        *,
        clean_session: bool = False,
        keepalive: bool = False,
        properties: Optional[ConnectProperties] = None,
    ) -> ConnectionResult:
        connection = await create_connection(url)
        self._protocol.set_connection(connection)

        connack = await self._protocol.connect(
            self.client_id,
            self._username,
            self._password,
            clean_session,
            keepalive,
            properties,
        )

        return connack

    async def disconnect(self):
        await self._protocol.disconnect(reason=0)

    async def publish(
        self,
        topic: Topic,
        message: Message,
        qos: int = 0,
        retain: bool = False,
        properties: Optional[PublishProperties] = None,
    ) -> Optional[PublishResult]:
        return await self._protocol.publish(
            topic, message, qos=qos, retain=retain, properties=properties
        )

    async def subscribe(
        self,
        topics: Sequence[Tuple[Topic, QOS]],
        properties: Optional[SubscriptionProperties] = None,
    ) -> SubscribeResult:
        return await self._protocol.subscribe(topics, properties)

    async def unsubscribe(
        self,
        topics: Sequence[Topic],
        properties: Optional[UnsubscribeProperties] = None,
    ) -> UnsubscribeResult:
        properties = properties or {}

        return await self._protocol.unsubscribe(topics, properties)

    @property
    def messages(self):
        return AsyncMessageIterator(self._queue)
