import asyncio
import inspect
from dataclasses import dataclass
from logging import getLogger
from ssl import SSLContext
from typing import Any, Awaitable, Callable, Final, Optional, Sequence, TypeVar

from zenmqtt.connection import create_connection
from zenmqtt.exceptions import ConnectionLostError, NotConnectedError
from zenmqtt.metrics import MetricsCollector
from zenmqtt.mqtt.connect import (
    SESSION_PRESENT_FLAG,
    ConnectionResult,
    ConnectProperties,
    DisconnectProperties,
    DisconnectResult,
    WillMessage,
)
from zenmqtt.mqtt.protocol import MQTTProtocol
from zenmqtt.mqtt.publish import (
    PublishAcknowledgement,
    PublishProperties,
    PublishResult,
)
from zenmqtt.mqtt.reason_codes import FAILURE_REASON_CODE
from zenmqtt.mqtt.session import MQTTSession, build_default_session
from zenmqtt.mqtt.subscribe import (
    SubscribeResult,
    SubscriptionProperties,
    SubscriptionRequest,
    UnsubscribeProperties,
    UnsubscribeResult,
)
from zenmqtt.reconnect import DEFAULT_RECONNECT_POLICY, ReconnectPolicy
from zenmqtt.reconnector import Reconnector
from zenmqtt.subscriptions import SubscriptionRegistry

logger = getLogger(__name__)

DEFAULT_KEEP_ALIVE: Final[int] = 60

# messages handed over to the application; when the queue is full, the next
# messages wait in the buffer of the protocol, which doesn't block reading
MESSAGES_QUEUE_SIZE: Final[int] = 50

T = TypeVar("T")

OnConnect = Callable[[ConnectionResult], Any]
OnDisconnect = Callable[[ConnectionLostError], Any]


class AsyncMessageIterator:
    def __init__(self, queue: "asyncio.Queue[Optional[PublishResult]]") -> None:
        self._queue = queue

    def __aiter__(self) -> "AsyncMessageIterator":
        return self

    async def __anext__(self) -> PublishResult:
        value = await self._queue.get()

        if value is None:
            raise StopAsyncIteration

        return value


@dataclass(frozen=True, slots=True)
class _ConnectOptions:
    url: str
    keepalive: int
    properties: Optional[ConnectProperties]
    will: Optional[WillMessage]
    ssl: Optional[SSLContext]


class MQTTClient:
    def __init__(
        self,
        client_id: str,
        session: Optional[MQTTSession] = None,
        metrics: Optional[MetricsCollector] = None,
        reconnect: Optional[ReconnectPolicy] = DEFAULT_RECONNECT_POLICY,
    ) -> None:
        """
        :param session: storage of in-flight QoS 1/2 messages, in-memory by default
        :param metrics: receives events of the client to build metrics,
            e.g. zenmqtt.contrib.opentelemetry.OpenTelemetryMetrics
        :param reconnect: automatic reconnect after the connection is lost,
            None disables it; see connect() for details
        """
        messages: asyncio.Queue[Optional[PublishResult]] = asyncio.Queue(
            maxsize=MESSAGES_QUEUE_SIZE
        )

        self._metrics = metrics or MetricsCollector()
        self._reconnect_policy = reconnect

        self._protocol = MQTTProtocol(
            messages,
            session or build_default_session(),
            self._metrics,
            wait_across_reconnect=reconnect is not None,
        )
        self._messages = messages

        self.client_id = client_id

        self._username: Optional[str] = None
        self._password: Optional[str] = None

        self._connect_options: Optional[_ConnectOptions] = None

        self._subscriptions = SubscriptionRegistry()
        self._reconnector: Optional[Reconnector] = None

        self._connected = False
        # True until connect and after the client stops for good
        self._stopped = True
        self._state_changed = asyncio.Event()

        # called on every successful connect and on every lost connection,
        # may be sync or async functions
        self.on_connect: Optional[OnConnect] = None
        self.on_disconnect: Optional[OnDisconnect] = None

    def authorize(self, username: Optional[str], password: Optional[str]) -> None:
        """
        MQTT 5 allows a password without a username, both may be empty strings.
        """
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
        If the connection can't be established, the error is raised: automatic
        reconnect starts only after a successful connect. Then the client
        reconnects with the same options, but without Clean Start, so the
        session of the server continues; QoS 1/2 messages are re-sent and lost
        subscriptions are restored.

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
        if self._reconnector and self._reconnector.running:
            raise RuntimeError("The client is already connected")

        self._connect_options = _ConnectOptions(url, keepalive, properties, will, ssl)

        if self._reconnect_policy and not (properties or {}).get(
            "session_expiry_interval"
        ):
            logger.warning(
                "mqtt_client.connect: reconnect is enabled, but the server drops "
                "the session when the connection is lost; set "
                "session_expiry_interval > 0 to keep QoS 1/2 messages and "
                "subscriptions"
            )

        connack = await self._connect(clean_session)

        if connack.result_code >= FAILURE_REASON_CODE:
            return connack

        self._stopped = False
        self._set_connected(True)
        await self._notify(self.on_connect, connack)

        if self._reconnect_policy:
            self._reconnector = Reconnector(
                self._reconnect_policy,
                self._protocol,
                self._metrics,
                connect=lambda: self._connect(clean_session=False),
                connection_lost=self._on_connection_lost,
                reconnected=self._on_reconnected,
                gave_up=self._on_gave_up,
            )
            self._reconnector.start()

        return connack

    async def disconnect(
        self, reason: int = 0, properties: Optional[DisconnectProperties] = None
    ) -> None:
        """
        Stops automatic reconnect; pending publish calls fail with
        ConnectionLostError, the messages iterator ends.

        :param reason: reason code of DISCONNECT, e.g. 0x04 "Disconnect with
            Will Message" asks the server to publish the will message
        """
        was_stopped = self._stopped
        self._stopped = True

        if reconnector := self._reconnector:
            self._reconnector = None
            await reconnector.stop()

        await self._protocol.disconnect(reason=reason, properties=properties)

        self._set_connected(False)

        if self._reconnect_policy and not was_stopped:
            await self._protocol.close(ConnectionLostError())

    @property
    def is_connected(self) -> bool:
        # the protocol notices a lost connection before the reconnector
        return self._connected and self._protocol.is_connected

    async def wait_connected(self) -> None:
        """
        Waits while the client reconnects.

        :raises NotConnectedError: the client isn't connected and doesn't
            reconnect (not connected yet, disconnected or gave up)
        """
        while not self.is_connected:
            if self._stopped:
                raise NotConnectedError()

            await self._state_changed.wait()

    @property
    def server_disconnect(self) -> Optional[DisconnectResult]:
        """
        DISCONNECT packet (reason code and properties) if the server closed
        the last connection with it, otherwise None; reset on connect.
        """
        return self._protocol.server_disconnect

    async def publish(
        self,
        topic: str,
        message: bytes,
        qos: int = 0,
        retain: bool = False,
        properties: Optional[PublishProperties] = None,
    ) -> Optional[PublishAcknowledgement]:
        """
        Returns None for QoS 0, otherwise the final acknowledgement packet.

        With automatic reconnect, the call waits while the client reconnects,
        and QoS 1/2 calls wait for the acknowledgement of the re-sent message;
        use asyncio.wait_for to limit the time. A cancelled QoS 1/2 call
        doesn't cancel the delivery: the message stays in the session.

        :raises ValueError: QoS isn't 0, 1 or 2
        :raises ServerLimitError: the message breaks a limit of the server from
            CONNACK: QoSNotSupportedError, PacketTooLargeError or
            FeatureNotSupportedError (retain, topic alias); nothing is sent
        :raises NotConnectedError: the client isn't connected and doesn't
            reconnect
        :raises SessionLostError: the server didn't keep the session after
            reconnect, the message was discarded
        :raises ConnectionLostError: without automatic reconnect: the connection
            was lost before the acknowledgement, the message will be re-sent on
            the next connect only if the server keeps the session, see
            connect(clean_session); with automatic reconnect: the client
            stopped before the acknowledgement
        """
        return await self._when_connected(
            lambda: self._protocol.publish(
                topic, message, qos=qos, retain=retain, properties=properties
            )
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
        With automatic reconnect, the call waits while the client reconnects
        and is repeated if the connection is lost before SUBACK.

        :param topics: (topic, qos) pairs, or zenmqtt.mqtt.subscribe.Subscription to set
            MQTT 5 subscription options (no_local, retain_as_published,
            retain_handling)
        :raises ValueError: invalid QoS or subscription options
        """
        subscription_properties = properties or {}

        result = await self._when_connected(
            lambda: self._protocol.subscribe(topics, subscription_properties),
            repeat=True,
        )

        self._subscriptions.add(topics, subscription_properties, result.reason_codes)

        return result

    async def unsubscribe(
        self,
        topics: Sequence[str],
        properties: Optional[UnsubscribeProperties] = None,
    ) -> UnsubscribeResult:
        """
        With automatic reconnect, the call waits while the client reconnects
        and is repeated if the connection is lost before UNSUBACK.
        """
        unsubscribe_properties = properties or {}

        result = await self._when_connected(
            lambda: self._protocol.unsubscribe(topics, unsubscribe_properties),
            repeat=True,
        )

        self._subscriptions.remove(topics, result.reason_codes)

        return result

    async def ack(self, message: PublishResult, reason_code: int = 0) -> None:
        """
        Acknowledges a processed message: sends PUBACK for QoS 1 and PUBREC for
        QoS 2, does nothing for QoS 0. Every QoS 1/2 message from
        client.messages must be acknowledged.

        Acks are sent in the order the messages were received (MQTT 5, 4.6),
        so an ack waits for acks of earlier messages. Not acknowledged messages
        count to "Receive Maximum": when it's reached, the server stops sending
        QoS 1/2 messages. If the connection is lost before the ack, the ack is
        ignored and the server sends the message again after reconnect.

        :param reason_code: 0, or >= 0x80 to reject the message, e.g. 0x80
            (Unspecified error) or 0x99 (Payload format invalid); the server
            doesn't send a rejected message again
        """
        await self._protocol.ack(message, reason_code)

    @property
    def messages(self) -> AsyncMessageIterator:
        """
        Incoming messages; with automatic reconnect the iteration continues
        across reconnects and ends when the client stops. QoS 1/2 messages must
        be acknowledged by ack() after they are processed.

        Messages wait in a buffer while the application reads previous ones,
        so control packets (PINGRESP, PUBACK, ...) are handled anyway. The
        number of QoS 1/2 messages which aren't acknowledged is limited by
        "receive_maximum" of connect properties; QoS 0 messages aren't
        limited. While 1000 or more messages wait, a warning is logged and
        metrics get on_messages_buffered events.
        """
        return AsyncMessageIterator(self._messages)

    async def _connect(self, clean_session: bool) -> ConnectionResult:
        options = self._connect_options
        assert options

        connection = await create_connection(options.url, ssl=options.ssl)
        self._protocol.set_connection(connection)

        try:
            connack = await self._protocol.connect(
                self.client_id,
                self._username,
                self._password,
                clean_session,
                options.keepalive,
                options.properties,
                options.will,
            )
        except BaseException:
            # e.g. timeout or cancellation while waiting for CONNACK
            if not connection.is_closing():
                await connection.disconnect()
            raise

        if connack.result_code >= FAILURE_REASON_CODE:
            # the server closes the connection anyway
            if not connection.is_closing():
                await connection.disconnect()

            return connack

        # the server assigns an identifier if the client id is empty, it must be
        # used for the following connects to resume the session
        if assigned := connack.properties.get("assigned_client_identifier"):
            self.client_id = assigned

        return connack

    async def _on_connection_lost(self, lost: ConnectionLostError) -> None:
        self._set_connected(False)
        await self._notify(self.on_disconnect, lost)

    async def _on_reconnected(self, connack: ConnectionResult) -> None:
        if not connack.flags & SESSION_PRESENT_FLAG:
            await self._subscriptions.restore(self._protocol.subscribe)

        self._set_connected(True)
        await self._notify(self.on_connect, connack)

    async def _on_gave_up(self, exc: Exception) -> None:
        self._stopped = True
        self._reconnector = None
        self._set_connected(False)

        await self._protocol.close(exc)

    async def _when_connected(
        self, operation: Callable[[], Awaitable[T]], repeat: bool = False
    ) -> T:
        """
        Without automatic reconnect it just runs the operation. Otherwise waits
        while the client reconnects; the operation is repeated if the client
        lost the connection before sending it, or with repeat=True (for
        idempotent operations) before the acknowledgement.
        """
        if not self._reconnect_policy:
            return await operation()

        while True:
            await self.wait_connected()

            try:
                return await operation()
            except NotConnectedError:
                pass
            except ConnectionLostError:
                if not repeat:
                    raise

            if self._stopped:
                raise NotConnectedError()

    def _set_connected(self, connected: bool) -> None:
        self._connected = connected

        # wake up everybody who waits for a change
        state_changed, self._state_changed = self._state_changed, asyncio.Event()
        state_changed.set()

    @staticmethod
    async def _notify(callback: Optional[Callable[[Any], Any]], argument: Any) -> None:
        if callback is None:
            return

        try:
            result = callback(argument)

            if inspect.isawaitable(result):
                await result
        except Exception as exc:
            logger.error("mqtt_client.callback.error", exc_info=exc)
