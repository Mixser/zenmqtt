from typing import TYPE_CHECKING, Optional

if TYPE_CHECKING:
    from zenmqtt.mqtt.connect import ServerDisconnect


class MQTTError(Exception):
    """Base of all errors of the client: except MQTTError catches any of them."""


class ClientConnectionError(MQTTError):
    """The client isn't connected or the connection was lost."""


class NotConnectedError(ClientConnectionError):
    """Operation was requested while the client isn't connected."""


class ConnectionLostError(ClientConnectionError):
    """
    Connection was lost before the operation was acknowledged.

    QoS 1/2 messages stay in the session and are re-sent on the next connect,
    unless the server reports that the session isn't present. The server keeps
    the session only if "session_expiry_interval" > 0 is set on connect.

    server_disconnect is the DISCONNECT packet of the server, if the server
    closed the connection with it.
    """

    def __init__(self, server_disconnect: Optional["ServerDisconnect"] = None):
        super().__init__(server_disconnect or "Connection lost")
        self.server_disconnect = server_disconnect


class SessionLostError(ConnectionLostError):
    """
    The server didn't keep the session after reconnect, so the pending QoS 1/2
    message was discarded and won't be delivered.
    """

    def __init__(self) -> None:
        super().__init__()
        self.args = ("The server didn't keep the session, the message was discarded",)


class ServerLimitError(MQTTError, ValueError):
    """
    The operation breaks a limit which the server sent in CONNACK;
    nothing is sent to the server.
    """


class QoSNotSupportedError(ServerLimitError):
    """QoS of the message is higher than "Maximum QoS" of the server."""


class OutgoingPacketTooLargeError(ServerLimitError):
    """The packet is bigger than "Maximum Packet Size" of the server."""


class FeatureNotSupportedError(ServerLimitError):
    """
    The server doesn't support the feature: retained messages, topic aliases,
    wildcard, shared subscriptions or subscription identifiers.
    """


class ProtocolError(MQTTError, ValueError):
    """
    A received packet violates the protocol; the client closes the connection
    with DISCONNECT and the reason code of the error.
    """

    reason_code = 0x82


class MalformedPacketError(ProtocolError):
    """A received packet can't be parsed according to the spec."""

    reason_code = 0x81


class IncomingPacketTooLargeError(ProtocolError):
    """The server sent a packet bigger than "Maximum Packet Size" of the client."""

    reason_code = 0x95


class ReceiveMaximumExceededError(ProtocolError):
    """The server sent more QoS 1/2 messages than the client's "Receive Maximum"."""

    reason_code = 0x93


class TopicAliasInvalidError(ProtocolError):
    """The server sent a topic alias of 0 or above client's "Topic Alias Maximum"."""

    reason_code = 0x94
