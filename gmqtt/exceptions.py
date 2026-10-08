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


class MalformedPacketError(ValueError):
    """A received packet violates the protocol."""
