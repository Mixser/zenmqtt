from typing import Sequence

from zenmqtt.mqtt.packet import PacketType


class MetricsCollector:
    """
    Receives events of the client to build metrics from them.

    The default implementation does nothing, subclasses override only the
    events they need. Methods are called from the event loop, so they must
    be fast, must not block and must not raise.

    Durations are in seconds.
    """

    def on_connect(self, reason_code: int, duration: float) -> None:
        """CONNACK is received, duration is measured from sending CONNECT"""

    def on_connection_closed(self, lost: bool) -> None:
        """
        A connection which was established by CONNACK is closed;
        lost is False only if the client called disconnect
        """

    def on_packet_sent(self, packet_type: PacketType, size: int) -> None:
        """A packet is written to the connection, size includes the fixed header"""

    def on_packet_received(self, packet_type: PacketType, size: int) -> None:
        """A packet is read from the connection, size includes the fixed header"""

    def on_publish_completed(self, qos: int, reason_code: int, duration: float) -> None:
        """
        QoS 0: PUBLISH is written, duration is the time of writing;
        QoS 1/2: the final acknowledgement is received, duration is measured
        from sending PUBLISH
        """

    def on_message_received(self, qos: int, duplicate: bool) -> None:
        """
        An incoming PUBLISH is handled; duplicate is True for a QoS 2 message
        which was already delivered, it isn't delivered again
        """

    def on_messages_buffered(self, count: int) -> None:
        """
        Number of incoming messages which wait for the application, reported
        when it reaches the warning threshold of the client (the application
        reads messages too slowly), then at most every 0.1 s while it's above,
        and once when it falls below
        """

    def on_send_quota_wait(self, duration: float) -> None:
        """A QoS 1/2 publish waited because the server's "Receive Maximum" was reached"""

    def on_messages_resent(self, count: int) -> None:
        """Pending messages of the session are re-sent after reconnect"""

    def on_ping(self, duration: float) -> None:
        """PINGRESP is received, duration is measured from sending PINGREQ"""

    def on_reconnect_attempt(self, attempt: int, delay: float) -> None:
        """
        Automatic reconnect starts an attempt (1, 2, ...) after the delay;
        a successful attempt is followed by on_connect
        """

    def on_reconnect_gave_up(self) -> None:
        """Automatic reconnect stopped: no attempts left or a non-retryable error"""

    def on_ping_timeout(self) -> None:
        """Keep alive closes the connection because PINGRESP didn't come in time"""

    def on_subscribe_completed(
        self, reason_codes: Sequence[int], duration: float
    ) -> None:
        """SUBACK is received, duration is measured from sending SUBSCRIBE"""

    def on_unsubscribe_completed(
        self, reason_codes: Sequence[int], duration: float
    ) -> None:
        """UNSUBACK is received, duration is measured from sending UNSUBSCRIBE"""
