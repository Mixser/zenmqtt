import pytest

from gmqtt.mqtt.connect import (
    ConnectionResult,
    pack_connect_packet,
    parse_connack_packet,
)
from gmqtt.mqtt.packet import PacketType, parse_fixed_header
from tests.mqtt.utils import build_async_generator

pytestmark = pytest.mark.asyncio


@pytest.mark.parametrize(
    "client_id, username, password, clean_session, keepalive, properties, expected_value",
    (
        (
            "client-id",
            None,
            None,
            False,
            False,
            {},
            b"\x10\x16\x00\x04MQTT\x05\x00\x00\x00\x00\x00\tclient-id",
        ),
        (
            "client-id",
            "username",
            None,
            False,
            True,
            {},
            b"\x10 \x00\x04MQTT\x05\x80\x00\x01\x00\x00\tclient-id\x00\x08username",
        ),
        (
            "client-id",
            "username",
            "password",
            True,
            False,
            {},
            b"\x100\x00\x04MQTT\x05\xc2\x00\x00\x00\x00\tclient-id\x00\x08username\x00\x08password",
        ),
        (
            "client-id",
            "username",
            "password",
            True,
            True,
            {},
            b"\x100\x00\x04MQTT\x05\xc2\x00\x01\x00\x00\tclient-id\x00\x08username\x00\x08password",
        ),
        (
            "client-id",
            None,
            None,
            False,
            False,
            {"request_problem_information": True, "server_keep_alive": 10},
            b"\x10\x1b\x00\x04MQTT\x05\x00\x00\x00\x05\x17\x01\x13\x00\n\x00\tclient-id",
        ),
    ),
)
def test_pack_connect_packet(
    client_id, username, password, clean_session, keepalive, properties, expected_value
):
    assert (
        pack_connect_packet(
            client_id, username, password, clean_session, keepalive, properties
        )
        == expected_value
    )


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (b"\x20\x03\x00\x00\x00", ConnectionResult(0, 0, {})),
        (b"\x20\x03\x01\x00\x00", ConnectionResult(1, 0, {})),
        (b"\x20\x03\x01\x02\x00", ConnectionResult(1, 2, {})),
        (
            b"\x20\x0A\x01\x02\x07\x25\x05\x11\x12\x34\x56\x78",
            ConnectionResult(1, 2, {"retain_available": True, 'session_expiry_interval': 305419896}),
        ),
    ),
)
async def test_parse_connack_packet(input, expected_result):
    stream = build_async_generator(input)

    fixed_header = await parse_fixed_header(stream)

    assert fixed_header.packet_type == PacketType.CONNACK
    assert await parse_connack_packet(fixed_header, stream) == expected_result
