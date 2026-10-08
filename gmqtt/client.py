import asyncio
import inspect
from dataclasses import dataclass
from logging import getLogger
from ssl import SSLContext
from typing import Any, Awaitable, Callable, Optional, Sequence, TypeVar

from gmqtt.connection import create_connection
from gmqtt.exceptions import ConnectionLostError, MQTTConnectionError, NotConnectedError
from gmqtt.metrics import MetricsCollector
from gmqtt.mqtt.connect import (
    ConnectionResult,
    ConnectProperties,
    DisconnectProperties,
    DisconnectResult,
    WillMessage,
)
from gmqtt.mqtt.protocol import FAILURE_REASON_CODE, SESSION_PRESENT_FLAG, MQTTProtocol
from gmqtt.mqtt.publish import PublishAcknowledgement, PublishProperties, PublishResult
from gmqtt.mqtt.session import MQTTSession, build_default_session
from gmqtt.mqtt.subscribe import (
    SubscribeResult,
    Subscription,
    SubscriptionProperties,
    SubscriptionRequest,
    UnsubscribeProperties,
    UnsubscribeResult,
    to_subscription,
)
from gmqtt.reconnect import (
    DEFAULT_RECONNECT_POLICY,
    NON_RETRYABLE_CONNACK_REASON_CODES,
    NON_RETRYABLE_DISCONNECT_REASON_CODES,
    ReconnectPolicy,
)

logger = getLogger(__name__)

ClientId = str
ClientConfig = dict

Topic = str

Headers = dict
Message = bytes

QOS = int

DEFAULT_KEEP_ALIVE = 60

# UNSUBACK reason code: the topic wasn't subscribed, it's not an error
_NO_SUBSCRIPTION_EXISTED = 0x11

T = TypeVar("T")

OnConnect = Callable[[ConnectionResult], Any]
OnDisconnect = Callable[[ConnectionLostError], Any]


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
        client_id: ClientId,
        session: Optional[MQTTSession] = None,
        metrics: Optional[MetricsCollector] = None,
        reconnect: Optional[ReconnectPolicy] = DEFAULT_RECONNECT_POLICY,
    ):
        """
        :param session: storage of in-flight QoS 1/2 messages, in-memory by default
        :param metrics: receives events of the client to build metrics,
            e.g. gmqtt.contrib.opentelemetry.OpenTelemetryMetrics
        :param reconnect: automatic reconnect after the connection is lost,
            None disables it; see connect() for details
        """
        messages: asyncio.Queue[PublishResult | None] = asyncio.Queue(maxsize=50)

        session = session or build_default_session()

        self._metrics = metrics or MetricsCollector()
        self._reconnect = reconnect

        self._protocol = MQTTProtocol(
            messages,
            session,
            self._metrics,
            wait_across_reconnect=reconnect is not None,
        )
        self._messages = messages

        self.client_id = client_id

        self._username: Optional[str] = None
        self._password: Optional[str] = None

        self._connect_options: Optional[_ConnectOptions] = None

        # active subscriptions, restored after reconnect if the server lost them
        self._subscriptions: dict[str, tuple[Subscription, SubscriptionProperties]] = {}

        self._connected = False
        # True until connect and after the client stops for good
        self._stopped = True
        self._state_changed = asyncio.Event()

        self._reconnect_task: Optional[asyncio.Task[None]] = None

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
        if self._reconnect_task:
            raise RuntimeError("The client is already connected")

        self._connect_options = _ConnectOptions(url, keepalive, properties, will, ssl)

        if self._reconnect and not (properties or {}).get("session_expiry_interval"):
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

        if self._reconnect:
            self._reconnect_task = asyncio.create_task(
                self._reconnect_loop(self._reconnect), name="mqtt-client-reconnect"
            )

        return connack

    async def disconnect(
        self, reason: int = 0, properties: Optional[DisconnectProperties] = None
    ):
        """
        Stops automatic reconnect; pending publish calls fail with
        ConnectionLostError, the messages iterator ends.

        :param reason: reason code of DISCONNECT, e.g. 0x04 "Disconnect with
            Will Message" asks the server to publish the will message
        """
        was_stopped = self._stopped
        self._stopped = True

        if task := self._reconnect_task:
            self._reconnect_task = None
            task.cancel()

            try:
                await task
            except asyncio.CancelledError:
                pass

        await self._protocol.disconnect(reason=reason, properties=properties)

        self._set_connected(False)

        if self._reconnect and not was_stopped:
            await self._protocol.close(ConnectionLostError())

    @property
    def is_connected(self) -> bool:
        # the protocol notices a lost connection before the reconnect task
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
        topic: Topic,
        message: Message,
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

        :param topics: (topic, qos) pairs, or gmqtt.mqtt.subscribe.Subscription to set
            MQTT 5 subscription options (no_local, retain_as_published,
            retain_handling)
        :raises ValueError: invalid QoS or subscription options
        """
        properties = properties or {}

        result = await self._when_connected(
            lambda: self._protocol.subscribe(topics, properties), repeat=True
        )

        for request, reason_code in zip(topics, result.reason_codes):
            if reason_code < FAILURE_REASON_CODE:
                subscription = to_subscription(request)
                self._subscriptions[subscription.topic] = (subscription, properties)

        return result

    async def unsubscribe(
        self,
        topics: Sequence[Topic],
        properties: Optional[UnsubscribeProperties] = None,
    ) -> UnsubscribeResult:
        """
        With automatic reconnect, the call waits while the client reconnects
        and is repeated if the connection is lost before UNSUBACK.
        """
        properties = properties or {}

        result = await self._when_connected(
            lambda: self._protocol.unsubscribe(topics, properties), repeat=True
        )

        for topic, reason_code in zip(topics, result.reason_codes):
            if (
                reason_code < FAILURE_REASON_CODE
                or reason_code == _NO_SUBSCRIPTION_EXISTED
            ):
                self._subscriptions.pop(topic, None)

        return result

    @property
    def messages(self):
        """
        Incoming messages; with automatic reconnect the iteration continues
        across reconnects and ends when the client stops.
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

    async def _reconnect_loop(self, policy: ReconnectPolicy) -> None:
        try:
            await self._reconnect_forever(policy)
        except Exception as exc:
            logger.error("mqtt_client.reconnect.error", exc_info=exc)
            await self._give_up(ConnectionLostError())

    async def _reconnect_forever(self, policy: ReconnectPolicy) -> None:
        while True:
            await self._protocol.wait_closed()

            self._set_connected(False)

            server_disconnect = self._protocol.server_disconnect
            lost = ConnectionLostError(server_disconnect)

            logger.warning("mqtt_client.connection_lost: %s", lost)
            await self._notify(self.on_disconnect, lost)

            if (
                server_disconnect
                and server_disconnect.reason_code
                in NON_RETRYABLE_DISCONNECT_REASON_CODES
            ):
                logger.error(
                    "mqtt_client.reconnect.stopped: the server closed the "
                    "connection with reason 0x%02X",
                    server_disconnect.reason_code,
                )
                await self._give_up(lost)
                return

            if not await self._reconnect_with_backoff(policy, lost):
                return

    async def _reconnect_with_backoff(
        self, policy: ReconnectPolicy, lost: ConnectionLostError
    ) -> bool:
        """Returns False if the client gave up."""
        for attempt, delay in enumerate(policy.delays(), start=1):
            self._metrics.on_reconnect_attempt(attempt, delay)
            await asyncio.sleep(delay)

            logger.info("mqtt_client.reconnect.attempt: %s", attempt)

            try:
                connack = await asyncio.wait_for(
                    self._connect(clean_session=False), policy.connect_timeout
                )
            except (OSError, asyncio.TimeoutError, MQTTConnectionError) as exc:
                logger.warning("mqtt_client.reconnect.failed: %r", exc)
                continue

            if connack.result_code >= FAILURE_REASON_CODE:
                if connack.result_code in NON_RETRYABLE_CONNACK_REASON_CODES:
                    logger.error(
                        "mqtt_client.reconnect.stopped: the server rejected the "
                        "connection with reason 0x%02X",
                        connack.result_code,
                    )
                    await self._give_up(lost)
                    return False

                logger.warning(
                    "mqtt_client.reconnect.rejected: reason 0x%02X",
                    connack.result_code,
                )
                continue

            if not connack.flags & SESSION_PRESENT_FLAG:
                await self._restore_subscriptions()

            logger.info("mqtt_client.reconnect.succeeded: attempt %s", attempt)

            self._set_connected(True)
            await self._notify(self.on_connect, connack)
            return True

        logger.error("mqtt_client.reconnect.stopped: no attempts left")
        await self._give_up(lost)
        return False

    async def _restore_subscriptions(self) -> None:
        # one SUBSCRIBE per group of subscriptions with the same properties
        groups: list[tuple[SubscriptionProperties, list[Subscription]]] = []

        for subscription, properties in self._subscriptions.values():
            for group_properties, subscriptions in groups:
                if group_properties == properties:
                    subscriptions.append(subscription)
                    break
            else:
                groups.append((properties, [subscription]))

        for properties, subscriptions in groups:
            try:
                await self._protocol.subscribe(subscriptions, properties)
            except Exception as exc:
                logger.error(
                    "mqtt_client.restore_subscriptions.failed: %s",
                    [subscription.topic for subscription in subscriptions],
                    exc_info=exc,
                )

    async def _give_up(self, exc: Exception) -> None:
        self._stopped = True
        self._reconnect_task = None
        self._set_connected(False)

        self._metrics.on_reconnect_gave_up()

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
        if not self._reconnect:
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
