import pytest

from tests.unit.mqtt.utils import build_async_generator
from zenmqtt.mqtt.packet import PacketType, parse_fixed_header
from zenmqtt.mqtt.ping import pack_pingreq_packet, parse_pingresp_packet

pytestmark = pytest.mark.asyncio


def test_pack_pingreq_packet():
    assert pack_pingreq_packet() == b"\xc0\x00"


async def test_parse_pingresp_packet():
    stream = build_async_generator(b"\xd0\x00")

    fixed_header = await parse_fixed_header(stream)

    assert fixed_header.packet_type == PacketType.PINGRESP
    assert await parse_pingresp_packet(fixed_header, stream) is None


@pytest.mark.parametrize(
    "input",
    (
        b"\xd1\x00",  # reserved flags are set
        b"\xd0\x01\x00",  # non-zero remaining length
    ),
)
async def test_parse_malformed_pingresp_packet(input):
    stream = build_async_generator(input)

    fixed_header = await parse_fixed_header(stream)

    with pytest.raises(ValueError):
        await parse_pingresp_packet(fixed_header, stream)
