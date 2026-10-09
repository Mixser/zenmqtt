import pytest

from zenmqtt.mqtt.packet import PacketType, split_packet
from zenmqtt.mqtt.ping import pack_pingreq_packet, parse_pingresp_packet

pytestmark = pytest.mark.asyncio


def test_pack_pingreq_packet():
    assert pack_pingreq_packet() == b"\xc0\x00"


async def test_parse_pingresp_packet():
    fixed_header, reader = split_packet(b"\xd0\x00")

    assert fixed_header.packet_type == PacketType.PINGRESP
    assert parse_pingresp_packet(fixed_header, reader) is None


@pytest.mark.parametrize(
    "input",
    (
        b"\xd1\x00",  # reserved flags are set
        b"\xd0\x01\x00",  # non-zero remaining length
    ),
)
async def test_parse_malformed_pingresp_packet(input):
    fixed_header, reader = split_packet(input)

    with pytest.raises(ValueError):
        parse_pingresp_packet(fixed_header, reader)
