from typing import Callable, Final, Mapping, Union

from zenmqtt.exceptions import MalformedPacketError, ProtocolError
from zenmqtt.mqtt.auth import AuthResult, parse_auth_packet
from zenmqtt.mqtt.connect import (
    ConnectionResult,
    DisconnectResult,
    parse_connack_packet,
    parse_disconnect_packet,
)
from zenmqtt.mqtt.packet import BytesReader, FixedHeader, PacketType
from zenmqtt.mqtt.ping import PingRespResult, parse_pingresp_packet
from zenmqtt.mqtt.publish import (
    PubAckResult,
    PubCompResult,
    PublishResult,
    PubRecResult,
    PubRelResult,
    parse_puback_packet,
    parse_pubcomp_packet,
    parse_publish_packet,
    parse_pubrec_packet,
    parse_pubrel_packet,
)
from zenmqtt.mqtt.subscribe import (
    SubscribeResult,
    UnsubscribeResult,
    parse_suback_packet,
    parse_unsuback_packet,
)

# packets a client receives from the server
IncomingPacket = Union[
    PublishResult,
    PubAckResult,
    PubRecResult,
    PubRelResult,
    PubCompResult,
    SubscribeResult,
    UnsubscribeResult,
    PingRespResult,
    ConnectionResult,
    DisconnectResult,
    AuthResult,
]

PARSERS: Final[
    Mapping[PacketType, Callable[[FixedHeader, BytesReader], IncomingPacket]]
] = {
    PacketType.CONNACK: parse_connack_packet,
    PacketType.PUBLISH: parse_publish_packet,
    PacketType.PUBACK: parse_puback_packet,
    PacketType.PUBREC: parse_pubrec_packet,
    PacketType.PUBREL: parse_pubrel_packet,
    PacketType.PUBCOMP: parse_pubcomp_packet,
    PacketType.SUBACK: parse_suback_packet,
    PacketType.UNSUBACK: parse_unsuback_packet,
    PacketType.PINGRESP: parse_pingresp_packet,
    PacketType.DISCONNECT: parse_disconnect_packet,
    PacketType.AUTH: parse_auth_packet,
}


def decode(header: FixedHeader, reader: BytesReader) -> IncomingPacket:
    if (parser := PARSERS.get(header.packet_type)) is None:
        # type 0 is reserved, the others are sent only by clients
        raise (
            MalformedPacketError
            if header.packet_type == PacketType.RESERVED
            else ProtocolError
        )(f"Unexpected packet type: {header.packet_type.name}")

    return parser(header, reader)
