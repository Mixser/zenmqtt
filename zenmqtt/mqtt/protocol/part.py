from dataclasses import dataclass

from zenmqtt.exceptions import ConnectionLostError
from zenmqtt.mqtt.connect import ConnectionResult, ConnectProperties


@dataclass(frozen=True, slots=True)
class ConnectionInfo:
    """A successful connect."""

    # CONNACK; result.session_present is False when the server has no session,
    # then the stored messages of the client are discarded
    result: ConnectionResult
    # seconds, "Server Keep Alive" from CONNACK or the value sent in CONNECT
    keepalive: int


class ProtocolPart:
    """
    The lifecycle of a part of the protocol. The core calls the parts in a
    fixed order, see MQTTProtocol; a part implements only the hooks it needs.
    """

    def on_connecting(self, properties: ConnectProperties) -> None:
        """
        Before CONNECT is sent: packets of the new connection may come right
        after CONNACK, before on_connected().

        :param properties: properties of CONNECT
        """

    async def on_connected(self, info: ConnectionInfo) -> None:
        """After a successful CONNACK, before the protocol is connected."""

    async def on_connection_lost(self, exc: ConnectionLostError) -> None:
        """
        The connection is lost. A part changes its state before its first
        await, and parts which await are called last, so all parts handle the
        loss before anything else runs.
        """

    def close(self, exc: Exception) -> None:
        """Nothing will connect anymore: calls which still wait fail with exc."""
