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
    """


class QoSNotSupportedError(ValueError):
    """QoS of the message is higher than "Maximum QoS" of the server."""


class ProtocolError(ValueError):
    """
    A received packet violates the protocol; the client closes the connection
    with DISCONNECT and the reason code of the error.
    """

    reason_code = 0x82


class MalformedPacketError(ProtocolError):
    """A received packet can't be parsed according to the spec."""

    reason_code = 0x81


class ReceiveMaximumExceededError(ProtocolError):
    """The server sent more QoS 1/2 messages than the client's "Receive Maximum"."""

    reason_code = 0x93


class TopicAliasInvalidError(ProtocolError):
    """The server sent a topic alias of 0 or above client's "Topic Alias Maximum"."""

    reason_code = 0x94
