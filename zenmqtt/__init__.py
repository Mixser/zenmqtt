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
from zenmqtt.mqtt.connect import ConnectionResult, DisconnectResult, WillMessage
from zenmqtt.mqtt.publish import PublishResult, QoS
from zenmqtt.mqtt.reason_codes import ReasonCode
from zenmqtt.mqtt.subscribe import Subscription
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
    "DisconnectResult",
    "FeatureNotSupportedError",
    "IncomingPacketTooLargeError",
    "InMemorySession",
    "MalformedPacketError",
    "MetricsCollector",
    "MQTTClient",
    "MQTTConnectionError",
    "MQTTSession",
    "NotConnectedError",
    "OutgoingMessage",
    "OutgoingMessageState",
    "PacketIdentifier",
    "PacketTooLargeError",
    "ProtocolError",
    "PublishResult",
    "QoS",
    "QoSNotSupportedError",
    "ReasonCode",
    "ReceiveMaximumExceededError",
    "ReconnectPolicy",
    "ServerLimitError",
    "SessionLostError",
    "SessionOptions",
    "Subscription",
    "TopicAliasInvalidError",
    "WillMessage",
    "__version__",
]
