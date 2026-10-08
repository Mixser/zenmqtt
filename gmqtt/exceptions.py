from typing import TYPE_CHECKING, Optional

if TYPE_CHECKING:
    from gmqtt.mqtt.connect import DisconnectResult


class MQTTConnectionError(Exception):
    pass


class NotConnectedError(MQTTConnectionError):
    """Operation was requested while the client isn't connected."""


class ConnectionLostError(MQTTConnectionError):
    """
    Connection was lost before the operation was acknowledged.

    QoS 1/2 messages stay in the session and are re-sent on the next connect,
    unless the server reports that the session isn't present. The server keeps
    the session only if "session_expiry_interval" > 0 is set on connect.

    server_disconnect is the DISCONNECT packet of the server, if the server
    closed the connection with it.
    """

    def __init__(self, server_disconnect: Optional["DisconnectResult"] = None):
        super().__init__(server_disconnect or "Connection lost")
        self.server_disconnect = server_disconnect


class ServerLimitError(ValueError):
    """
    The operation breaks a limit which the server sent in CONNACK;
    nothing is sent to the server.
    """


class QoSNotSupportedError(ServerLimitError):
    """QoS of the message is higher than "Maximum QoS" of the server."""


class PacketTooLargeError(ServerLimitError):
    """The packet is bigger than "Maximum Packet Size" of the server."""


class FeatureNotSupportedError(ServerLimitError):
    """
    The server doesn't support the feature: retained messages, topic aliases,
    wildcard, shared subscriptions or subscription identifiers.
    """


class MalformedPacketError(ValueError):
    """A received packet violates the protocol."""
