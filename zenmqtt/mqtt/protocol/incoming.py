import asyncio
import dataclasses
from collections import OrderedDict, deque
from dataclasses import dataclass, field
from functools import partial
from logging import getLogger
from typing import Optional, cast

from zenmqtt.exceptions import (
    ProtocolError,
    ReceiveMaximumExceededError,
    TopicAliasInvalidError,
)
from zenmqtt.instrumentation.monitors import AckBlockedMonitor, BufferMonitor
from zenmqtt.mqtt.connect import ConnectProperties
from zenmqtt.mqtt.limits import DEFAULT_RECEIVE_MAXIMUM
from zenmqtt.mqtt.protocol.context import ProtocolContext
from zenmqtt.mqtt.publish import (
    MQTTMessage,
    PubRelResult,
    pack_puback_packet,
    pack_pubcomp_packet,
    pack_pubrec_packet,
)
from zenmqtt.mqtt.reason_codes import FAILURE_REASON_CODE, PACKET_IDENTIFIER_NOT_FOUND
from zenmqtt.session import MQTTSession, PacketIdentifier

logger = getLogger(__name__)


@dataclass(slots=True)
class _PendingAck:
    message: MQTTMessage
    # loop time
    received_at: float
    acked: bool = False
    reason_code: int = 0


@dataclass(slots=True)
class _ConnectionState:
    """State of incoming messages which doesn't survive the reconnect."""

    topic_aliases: dict[int, str] = field(default_factory=dict)
    # QoS 1/2 messages which aren't acknowledged yet; QoS 2 stays here until
    # PUBREL, the number is limited by "Receive Maximum" of the client
    inflight: set[PacketIdentifier] = field(default_factory=set)
    # QoS 1/2 messages in the order of receiving: PUBACK and PUBREC must be
    # sent in this order (MQTT 5, 4.6). OrderedDict: getting the first item of
    # a dict after deletions from its beginning gets slower with every deleted
    # item, of an OrderedDict it takes constant time
    pending_acks: OrderedDict[PacketIdentifier, _PendingAck] = field(
        default_factory=OrderedDict
    )


class IncomingFlow:
    """
    Incoming PUBLISH. The read loop never waits for the application: messages
    wait in a buffer which the application reads by next_message(), so control
    packets (PINGRESP, PUBACK, ...) are handled for a slow application.

    QoS 1/2 messages are acknowledged by ack(), so their number in the buffer
    is limited by "Receive Maximum"; QoS 0 messages aren't limited. A big
    buffer is reported by BufferMonitor.
    """

    def __init__(self, context: ProtocolContext, session: MQTTSession) -> None:
        self._context = context
        self._session = session

        # limits sent by the client in CONNECT
        self._receive_maximum = DEFAULT_RECEIVE_MAXIMUM
        self._topic_alias_maximum = 0

        self._state = _ConnectionState()
        self._ack_lock = asyncio.Lock()
        self._ack_monitor = AckBlockedMonitor()

        # messages which wait for the application; None marks the end of
        # messages
        self._buffer: deque[Optional[MQTTMessage]] = deque()
        self._buffer_ready = asyncio.Event()
        self.buffer_monitor = BufferMonitor(context.metrics)

    @property
    def inflight(self) -> set[PacketIdentifier]:
        return self._state.inflight

    def on_new_connection(self, properties: ConnectProperties) -> None:
        """
        Topic aliases and the receive quota don't survive the reconnect; acks
        of messages from the previous connection are ignored, the server
        re-sends them.
        """
        self._receive_maximum = properties.get(
            "receive_maximum", DEFAULT_RECEIVE_MAXIMUM
        )
        self._topic_alias_maximum = properties.get("topic_alias_maximum", 0)

        self._state = _ConnectionState()

    def on_connection_lost(self) -> None:
        # not acknowledged messages are re-sent by the server, QoS 0 messages
        # are delivered
        self._buffer = deque(
            message for message in self._buffer if message is None or not message.qos
        )

    def close(self) -> None:
        """The client stops for good: the end of messages."""
        self._enqueue(None)

    async def next_message(self) -> Optional[MQTTMessage]:
        """
        Waits for the next message, None is the end of messages. Meant for one
        reader: the end of messages goes to one of the waiting readers only.
        """
        while not self._buffer:
            self._buffer_ready.clear()
            await self._buffer_ready.wait()

        message = self._buffer.popleft()
        self.buffer_monitor.update(len(self._buffer))

        return message

    async def handle_publish(self, packet: MQTTMessage) -> None:
        message = self._resolve_topic_alias(packet)

        logger.debug("mqtt_protocol.handle_publish_packet packet:%s", message)

        if not message.qos:
            self._context.metrics.on_message_received(0, False)
            self._enqueue(message)
            return

        packet_identifier = cast(int, message.packet_identifier)
        state = self._state

        # a re-sent QoS 2 message already holds its slot
        if packet_identifier not in state.inflight:
            if len(state.inflight) >= self._receive_maximum:
                raise ReceiveMaximumExceededError(
                    f"More than {self._receive_maximum} incoming messages in flight"
                )

            state.inflight.add(packet_identifier)

        if packet_identifier in state.pending_acks:
            # the server sent the message again before the ack: the pending
            # ack answers both, the message isn't delivered again (MQTT 5,
            # 4.3.3)
            logger.debug(
                "mqtt_protocol.handle_publish_packet.duplicate pid:%s",
                packet_identifier,
            )
            self._context.metrics.on_message_received(message.qos, True)
            return

        duplicate = message.qos == 2 and await self._session.has_incoming_message(
            packet_identifier
        )
        self._context.metrics.on_message_received(message.qos, duplicate)

        pending = _PendingAck(message, self._context.now())
        state.pending_acks[packet_identifier] = pending

        if duplicate:
            # PUBREC was sent already, the message isn't delivered again
            logger.debug(
                "mqtt_protocol.handle_publish_packet.duplicate pid:%s",
                packet_identifier,
            )
            pending.acked = True
            await self._send_acks()
            return

        self._enqueue(message)

    async def handle_pubrel(self, pubrel_result: PubRelResult) -> None:
        connection = self._context.connection
        assert connection

        logger.debug("mqtt_protocol.handle_pubrel_packet packet:%s", pubrel_result)

        packet_identifier = pubrel_result.packet_identifier

        self._state.inflight.discard(packet_identifier)

        if await self._session.complete_incoming_message(packet_identifier):
            reason_code = 0x0
        else:
            logger.warning(
                "mqtt_protocol.handle_pubrel_packet.unknown pid:%s", packet_identifier
            )
            reason_code = PACKET_IDENTIFIER_NOT_FOUND

        await self._context.write(
            connection, pack_pubcomp_packet(packet_identifier, reason_code, {})
        )

    async def ack(self, message: MQTTMessage, reason_code: int = 0) -> None:
        """
        Acknowledges a message: PUBACK for QoS 1, PUBREC for QoS 2, nothing for
        QoS 0. Acks are sent in the order messages were received (MQTT 5, 4.6),
        so an ack waits for the acks of earlier messages: one message which
        isn't acknowledged holds back the acks of all later ones, and they
        count to "Receive Maximum". A warning is logged when such a message
        isn't acknowledged for ACK_BLOCKED_WARNING seconds.

        :param reason_code: 0 or >= 0x80 to reject the message; the server
            doesn't re-send a rejected message
        """
        if reason_code and reason_code < FAILURE_REASON_CODE:
            raise ValueError(f"Invalid reason code: 0x{reason_code:02X}")

        if not message.qos:
            return

        pending = self._state.pending_acks.get(cast(int, message.packet_identifier))

        if pending is None or pending.message is not message:
            # acknowledged already or received by the previous connection
            logger.debug("mqtt_protocol.ack.ignored pid:%s", message.packet_identifier)
            return

        pending.acked = True
        pending.reason_code = reason_code

        await self._send_acks()

    async def _send_acks(self) -> None:
        """Sends acks of the first messages in the order of receiving."""
        async with self._ack_lock:
            state = self._state
            pending_acks = state.pending_acks

            while pending_acks:
                packet_identifier, pending = next(iter(pending_acks.items()))

                if not pending.acked:
                    self._ack_monitor.watch(
                        pending.message,
                        pending.received_at,
                        partial(self._messages_waiting_for, state, pending),
                    )
                    return

                del pending_acks[packet_identifier]

                connection = self._context.connection

                if (
                    state is not self._state
                    or not connection
                    or connection.is_closing()
                ):
                    return

                reason_code = pending.reason_code

                if pending.message.qos == 1:
                    state.inflight.discard(packet_identifier)
                    packet = pack_puback_packet(packet_identifier, reason_code, {})
                else:
                    if reason_code < FAILURE_REASON_CODE:
                        # in flight until PUBREL
                        await self._session.register_incoming_message(packet_identifier)
                    else:
                        # the flow ends with the rejecting PUBREC
                        state.inflight.discard(packet_identifier)

                    packet = pack_pubrec_packet(packet_identifier, reason_code, {})

                logger.debug(
                    "mqtt_protocol.send_ack pid:%s qos:%s reason:0x%02X",
                    packet_identifier,
                    pending.message.qos,
                    reason_code,
                )
                await self._context.write(connection, packet)

    def _messages_waiting_for(
        self, state: _ConnectionState, head: _PendingAck
    ) -> Optional[int]:
        """
        The number of messages whose acks wait for `head`, None if it doesn't
        hold them back anymore.
        """
        packet_identifier = cast(int, head.message.packet_identifier)

        if (
            state is not self._state
            or head.acked
            or state.pending_acks.get(packet_identifier) is not head
        ):
            return None

        return len(state.pending_acks) - 1

    def _resolve_topic_alias(self, message: MQTTMessage) -> MQTTMessage:
        topic_alias = message.properties.get("topic_alias")

        if topic_alias is None:
            if not message.topic:
                raise ProtocolError("PUBLISH without topic and topic alias")

            return message

        if not 0 < topic_alias <= self._topic_alias_maximum:
            raise TopicAliasInvalidError(
                f"Topic alias {topic_alias} isn't in range "
                f"1..{self._topic_alias_maximum}"
            )

        if message.topic:
            self._state.topic_aliases[topic_alias] = message.topic
            return message

        if (topic := self._state.topic_aliases.get(topic_alias)) is None:
            raise ProtocolError(f"Unknown topic alias {topic_alias}")

        return dataclasses.replace(message, topic=topic)

    def _enqueue(self, message: Optional[MQTTMessage]) -> None:
        self._buffer.append(message)
        self._buffer_ready.set()
        self.buffer_monitor.update(len(self._buffer))
