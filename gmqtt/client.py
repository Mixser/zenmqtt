import asyncio
from ssl import SSLContext
from typing import Optional, Sequence, Tuple

from gmqtt.connection import create_connection
from gmqtt.metrics import MetricsCollector
from gmqtt.mqtt.connect import ConnectionResult, ConnectProperties, WillMessage
from gmqtt.mqtt.protocol import MQTTProtocol
from gmqtt.mqtt.publish import PublishAcknowledgement, PublishProperties, PublishResult
from gmqtt.mqtt.session import MQTTSession, build_default_session
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

DEFAULT_KEEP_ALIVE = 60


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
    def __init__(
        self,
        client_id: ClientId,
        session: Optional[MQTTSession] = None,
        metrics: Optional[MetricsCollector] = None,
    ):
        """
        :param session: storage of in-flight QoS 1/2 messages, in-memory by default
        :param metrics: receives events of the client to build metrics,
            e.g. gmqtt.contrib.opentelemetry.OpenTelemetryMetrics
        """
        messages: asyncio.Queue[PublishResult | None] = asyncio.Queue(maxsize=50)

        session = session or build_default_session()

        self._protocol = MQTTProtocol(messages, session, metrics)
        self._messages = messages

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
        keepalive: int = DEFAULT_KEEP_ALIVE,
        properties: Optional[ConnectProperties] = None,
        will: Optional[WillMessage] = None,
        ssl: Optional[SSLContext] = None,
    ) -> ConnectionResult:
        """
        :param url: tcp://host[:port] or mqtts://host[:port] for TLS, the default
            port is 1883 for tcp:// and 8883 for mqtts://
        :param clean_session: discard the session on the server and the client;
            to re-send QoS 1/2 messages after a reconnect use False together
            with properties={"session_expiry_interval": <seconds>}, otherwise
            the server drops the session when the connection is closed
        :param keepalive: seconds between control packets sent by the client,
            the client sends PINGREQ when idle; 0 disables keep alive
        :param will: the message the server publishes if the client goes away
            without DISCONNECT
        :param ssl: context for mqtts://, e.g. with a custom CA or a client
            certificate; by default the server certificate is verified with
            the system CA certificates
        """
        connection = await create_connection(url, ssl=ssl)
        self._protocol.set_connection(connection)

        connack = await self._protocol.connect(
            self.client_id,
            self._username,
            self._password,
            clean_session,
            keepalive,
            properties,
            will,
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
    ) -> Optional[PublishAcknowledgement]:
        """
        Returns None for QoS 0, otherwise the final acknowledgement packet.

        :raises ValueError: QoS isn't 0, 1 or 2
        :raises QoSNotSupportedError: QoS is higher than the server's "Maximum QoS"
        :raises NotConnectedError: the client isn't connected
        :raises ConnectionLostError: the connection was lost before the
            acknowledgement; the message will be re-sent on the next connect
            only if the server keeps the session, see connect(clean_session)
        """
        return await self._protocol.publish(
            topic, message, qos=qos, retain=retain, properties=properties
        )

    async def ping(self) -> None:
        """
        Sends PINGREQ and waits for PINGRESP.

        :raises NotConnectedError: the client isn't connected
        :raises ConnectionLostError: the connection was lost before PINGRESP
        """
        await self._protocol.ping()

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
        return AsyncMessageIterator(self._messages)
