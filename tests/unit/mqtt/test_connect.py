import pytest

from zenmqtt.mqtt.connect import (
    ConnectionResult,
    DisconnectResult,
    WillMessage,
    pack_connect_packet,
    pack_disconnect_packet,
    parse_connack_packet,
    parse_disconnect_packet,
)
from zenmqtt.mqtt.packet import PacketType, split_packet

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
            b"\x10\x2a\x00\x04MQTT\x05\xc2\x00\x00\x00\x00\tclient-id\x00\x08username\x00\x08password",
        ),
        (
            "client-id",
            "username",
            "password",
            True,
            True,
            {},
            b"\x10\x2a\x00\x04MQTT\x05\xc2\x00\x01\x00\x00\tclient-id\x00\x08username\x00\x08password",
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
            client_id,
            username,
            password,
            clean_session=clean_session,
            keepalive=keepalive,
            properties=properties,
        )
        == expected_value
    )


@pytest.mark.parametrize(
    "username, password, properties, expected_value",
    (
        # MQTT 5 allows a password without a username
        (
            None,
            "password",
            {},
            b"\x10\x20\x00\x04MQTT\x05\x40\x00\x00\x00"
            b"\x00\tclient-id\x00\x08password",
        ),
        # empty username and password are sent
        (
            "",
            "",
            {},
            b"\x10\x1a\x00\x04MQTT\x05\xc0\x00\x00\x00"
            b"\x00\tclient-id\x00\x00\x00\x00",
        ),
        (
            None,
            None,
            {"request_response_information": True},
            b"\x10\x18\x00\x04MQTT\x05\x00\x00\x00\x02\x19\x01\x00\tclient-id",
        ),
    ),
)
def test_pack_connect_packet_credentials_and_properties(
    username, password, properties, expected_value
):
    assert (
        pack_connect_packet(
            "client-id",
            username,
            password,
            clean_session=False,
            keepalive=0,
            properties=properties,
        )
        == expected_value
    )


def test_pack_connect_packet_with_non_ascii_client_id():
    client_id = "клиент"

    assert (
        pack_connect_packet(
            client_id,
            None,
            None,
            clean_session=False,
            keepalive=False,
            properties={},
        )
        == b"\x10\x19\x00\x04MQTT\x05\x00\x00\x00\x00\x00\x0c" + client_id.encode()
    )


@pytest.mark.parametrize(
    "username, password, clean_session, will, expected_value",
    (
        (
            None,
            None,
            False,
            WillMessage("a/b", b"bye", qos=1, retain=True, properties={}),
            b"\x10\x21\x00\x04MQTT\x05\x2c\x00\x00\x00"
            b"\x00\tclient-id\x00\x00\x03a/b\x00\x03bye",
        ),
        (
            None,
            None,
            False,
            WillMessage(
                "a/b",
                b"bye",
                qos=0,
                retain=False,
                properties={"will_delay_interval": 10},
            ),
            b"\x10\x26\x00\x04MQTT\x05\x04\x00\x00\x00"
            b"\x00\tclient-id\x05\x18\x00\x00\x00\x0a\x00\x03a/b\x00\x03bye",
        ),
        (
            "username",
            "password",
            True,
            WillMessage("a/b", b"bye", qos=2, retain=False, properties={}),
            b"\x10\x35\x00\x04MQTT\x05\xd6\x00\x00\x00"
            b"\x00\tclient-id\x00\x00\x03a/b\x00\x03bye"
            b"\x00\x08username\x00\x08password",
        ),
    ),
)
def test_pack_connect_packet_with_will(
    username, password, clean_session, will, expected_value
):
    assert (
        pack_connect_packet(
            "client-id",
            username,
            password,
            clean_session=clean_session,
            keepalive=False,
            properties={},
            will=will,
        )
        == expected_value
    )


@pytest.mark.parametrize("keepalive", (-1, 2**16))
def test_pack_connect_packet_with_invalid_keep_alive(keepalive):
    with pytest.raises(ValueError):
        pack_connect_packet(
            "client-id",
            None,
            None,
            clean_session=False,
            keepalive=keepalive,
            properties={},
        )


def test_pack_connect_packet_with_keep_alive():
    assert pack_connect_packet(
        "client-id",
        None,
        None,
        clean_session=False,
        keepalive=60,
        properties={},
    ) == (b"\x10\x16\x00\x04MQTT\x05\x00\x00\x3c\x00\x00\tclient-id")


def test_pack_connect_packet_with_invalid_will_qos():
    with pytest.raises(ValueError):
        pack_connect_packet(
            "client-id",
            None,
            None,
            clean_session=False,
            keepalive=False,
            properties={},
            will=WillMessage("a/b", b"bye", qos=3, retain=False, properties={}),
        )


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (b"\x20\x03\x00\x00\x00", ConnectionResult(0, 0, {})),
        (b"\x20\x03\x01\x00\x00", ConnectionResult(1, 0, {})),
        (b"\x20\x03\x01\x02\x00", ConnectionResult(1, 2, {})),
        (
            b"\x20\x0A\x01\x02\x07\x25\x05\x11\x12\x34\x56\x78",
            ConnectionResult(
                1, 2, {"retain_available": True, "session_expiry_interval": 305419896}
            ),
        ),
    ),
)
async def test_parse_connack_packet(input, expected_result):
    fixed_header, reader = split_packet(input)

    assert fixed_header.packet_type == PacketType.CONNACK
    assert parse_connack_packet(fixed_header, reader) == expected_result


@pytest.mark.parametrize(
    "reason, properties,expected_result",
    (
        (0, {}, b"\xe0\x02\x00\x00"),
        (1, {}, b"\xe0\x02\x01\x00"),
        (3, {"reason_string": "bad error"}, b"\xe0\x0e\x03\x0c\x1f\x00\tbad error"),
    ),
)
def test_pack_disconnect_packet(reason, properties, expected_result):
    assert pack_disconnect_packet(reason, properties) == expected_result


@pytest.mark.parametrize(
    "input, expected_result",
    (
        (b"\xe0\x00", DisconnectResult(0, {})),
        (
            b"\xe0\x07\x00\x05\x11\x00\x00\x00\x0a",
            DisconnectResult(0, {"session_expiry_interval": 10}),
        ),
    ),
)
async def test_parse_disconnect_packet(input, expected_result):
    fixed_header, reader = split_packet(input)
    assert fixed_header.packet_type == PacketType.DISCONNECT
    assert parse_disconnect_packet(fixed_header, reader) == expected_result
