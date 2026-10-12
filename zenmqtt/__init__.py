"""
Asyncio MQTT 5 client.

    from zenmqtt import MQTTClient

    client = MQTTClient("client-id")
    await client.connect("tcp://localhost:1883")
"""

from importlib.metadata import PackageNotFoundError, version

from zenmqtt.client import MQTTClient
from zenmqtt.exceptions import (
    ConnectionLostError,
    FeatureNotSupportedError,
    IncomingPacketTooLargeError,
    MalformedPacketError,
    MQTTConnectionError,
    NotConnectedError,
    PacketTooLargeError,
    ProtocolError,
    QoSNotSupportedError,
    ReceiveMaximumExceededError,
    ServerLimitError,
    SessionLostError,
    TopicAliasInvalidError,
)
from zenmqtt.instrumentation.metrics import MetricsCollector
from zenmqtt.mqtt.connect import (
    ConnectionResult,
    ConnectProperties,
    DisconnectProperties,
    ServerDisconnect,
    WillMessage,
    WillProperties,
)
from zenmqtt.mqtt.publish import (
    MQTTMessage,
    PubAckResult,
    PubCompResult,
    PublishAcknowledgement,
    PublishProperties,
    PubRecResult,
    QoS,
)
from zenmqtt.mqtt.reason_codes import ReasonCode
from zenmqtt.mqtt.subscribe import (
    SubscribeResult,
    Subscription,
    SubscriptionProperties,
    SubscriptionRequest,
    UnsubscribeProperties,
    UnsubscribeResult,
)
from zenmqtt.reconnect import ReconnectPolicy
from zenmqtt.session import (
    BaseSession,
    InMemorySession,
    MQTTSession,
    OutgoingMessage,
    OutgoingMessageState,
    PacketIdentifier,
    SessionOptions,
)

try:
    __version__ = version("zenmqtt")
except PackageNotFoundError:  # pragma: no cover - running from sources
    __version__ = "0+unknown"

__all__ = [
    "BaseSession",
    "ConnectionLostError",
    "ConnectionResult",
    "ConnectProperties",
    "DisconnectProperties",
    "FeatureNotSupportedError",
    "IncomingPacketTooLargeError",
    "InMemorySession",
    "MalformedPacketError",
    "MetricsCollector",
    "MQTTClient",
    "MQTTConnectionError",
    "MQTTMessage",
    "MQTTSession",
    "NotConnectedError",
    "OutgoingMessage",
    "OutgoingMessageState",
    "PacketIdentifier",
    "PacketTooLargeError",
    "ProtocolError",
    "PubAckResult",
    "PubCompResult",
    "PublishAcknowledgement",
    "PublishProperties",
    "PubRecResult",
    "QoS",
    "QoSNotSupportedError",
    "ReasonCode",
    "ReceiveMaximumExceededError",
    "ReconnectPolicy",
    "ServerDisconnect",
    "ServerLimitError",
    "SessionLostError",
    "SessionOptions",
    "SubscribeResult",
    "Subscription",
    "SubscriptionProperties",
    "SubscriptionRequest",
    "TopicAliasInvalidError",
    "UnsubscribeProperties",
    "UnsubscribeResult",
    "WillMessage",
    "WillProperties",
    "__version__",
]
