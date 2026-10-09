from zenmqtt.exceptions import MalformedPacketError
from zenmqtt.mqtt.packet import AsyncDataSequence, FixedHeader, PacketType
from zenmqtt.mqtt.utils import pack_fixed_header

# PINGREQ and PINGRESP consist of the fixed header only:
# reserved flags are 0x0, no variable header and no payload


def pack_pingreq_packet() -> bytes:
    return pack_fixed_header(PacketType.PINGREQ, 0x00, 0)


async def parse_pingresp_packet(
    fixed_header: FixedHeader, stream: AsyncDataSequence
) -> None:
    assert fixed_header.packet_type == PacketType.PINGRESP

    if fixed_header.flags != 0x00 or fixed_header.length != 0:
        raise MalformedPacketError(f"Malformed PINGRESP packet: {fixed_header}")
