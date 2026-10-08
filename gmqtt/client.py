import asyncio
from typing import Optional, Sequence

from gmqtt.connection import create_connection
from gmqtt.metrics import MetricsCollector
from gmqtt.mqtt.connect import (
    ConnectionResult,
    ConnectProperties,
    DisconnectProperties,
    DisconnectResult,
    WillMessage,
)
from gmqtt.mqtt.protocol import MQTTProtocol
from gmqtt.mqtt.publish import PublishAcknowledgement, PublishProperties, PublishResult
from gmqtt.mqtt.session import MQTTSession, build_default_session
from gmqtt.mqtt.subscribe import (
    SubscribeResult,
    SubscriptionProperties,
    SubscriptionRequest,
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
    ) -> ConnectionResult:
        """
        :param clean_session: discard the session on the server and the client;
            to re-send QoS 1/2 messages after a reconnect use False together
            with properties={"session_expiry_interval": <seconds>}, otherwise
            the server drops the session when the connection is closed
        :param keepalive: seconds between control packets sent by the client,
            the client sends PINGREQ when idle; 0 disables keep alive
        :param will: the message the server publishes if the client goes away
            without DISCONNECT
        """
        connection = await create_connection(url)
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

    async def disconnect(
        self, reason: int = 0, properties: Optional[DisconnectProperties] = None
    ):
        """
        :param reason: reason code of DISCONNECT, e.g. 0x04 "Disconnect with
            Will Message" asks the server to publish the will message
        """
        await self._protocol.disconnect(reason=reason, properties=properties)

    @property
    def server_disconnect(self) -> Optional[DisconnectResult]:
        """
        DISCONNECT packet (reason code and properties) if the server closed
        the last connection with it, otherwise None; reset on connect.
        """
        return self._protocol.server_disconnect

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
        :raises ServerLimitError: the message breaks a limit of the server from
            CONNACK: QoSNotSupportedError, PacketTooLargeError or
            FeatureNotSupportedError (retain, topic alias); nothing is sent
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
        topics: Sequence[SubscriptionRequest],
        properties: Optional[SubscriptionProperties] = None,
    ) -> SubscribeResult:
        """
        :param topics: (topic, qos) pairs, or gmqtt.mqtt.subscribe.Subscription to set
            MQTT 5 subscription options (no_local, retain_as_published,
            retain_handling)
        :raises ValueError: invalid QoS or subscription options
        """
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
