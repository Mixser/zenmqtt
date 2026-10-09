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
from zenmqtt.metrics import MetricsCollector
from zenmqtt.mqtt.connect import ConnectionResult, DisconnectResult, WillMessage
from zenmqtt.mqtt.publish import PublishResult
from zenmqtt.mqtt.session import BaseSession, InMemorySession, MQTTSession
from zenmqtt.mqtt.subscribe import Subscription
from zenmqtt.reconnect import ReconnectPolicy

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
    "PacketTooLargeError",
    "ProtocolError",
    "PublishResult",
    "QoSNotSupportedError",
    "ReceiveMaximumExceededError",
    "ReconnectPolicy",
    "ServerLimitError",
    "SessionLostError",
    "Subscription",
    "TopicAliasInvalidError",
    "WillMessage",
    "__version__",
]
