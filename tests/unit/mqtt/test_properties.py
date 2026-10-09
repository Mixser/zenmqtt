import pytest

from zenmqtt.mqtt.packet import BytesReader
from zenmqtt.mqtt.properties import (
    _NAME_TO_CODE_MAP,
    Properties,
    Property,
    pack_properties,
    parse_properties,
)


@pytest.mark.parametrize("prop", list(Property))
def test_property_name_matches_code(prop):
    # parsed properties are named after the enum member
    assert _NAME_TO_CODE_MAP[prop.name.lower()] == prop.value


@pytest.mark.parametrize(
    "properties, expected_value",
    (
        ({"message_expiry_interval": 10}, b"\x05\x02\x00\x00\x00\x0a"),
        (
            {"message_expiry_interval": 10, "content_type": "text"},
            b"\x0c\x02\x00\x00\x00\x0a\x03\x00\x04text",
        ),
    ),
)
async def test_pack_and_parse_properties(properties, expected_value):
    packed = pack_properties(properties)
    assert packed == expected_value

    assert parse_properties(BytesReader(packed)) == properties


# a value of every property at the limit of its MQTT data type
ALL_PROPERTIES: Properties = {
    "payload_format_indicator": True,
    "message_expiry_interval": 2**32 - 1,
    "content_type": "application/json; charset=utf-8",
    "response_topic": "response/топик/1",
    "correlation_data": bytes(range(256)),
    "subscription_identifier": 268_435_455,
    "session_expiry_interval": 2**32 - 1,
    "assigned_client_identifier": "auto-42",
    "server_keep_alive": 2**16 - 1,
    "authentication_method": "SCRAM-SHA-256",
    "authentication_data": b"\x00\xff",
    "request_problem_information": False,
    "will_delay_interval": 3600,
    "request_response_information": True,
    "response_information": "response/",
    "server_reference": "other.example.com:8883",
    "reason_string": "the reason",
    "receive_maximum": 2**16 - 1,
    "topic_alias_maximum": 2**16 - 1,
    "topic_alias": 1,
    "maximum_qos": 1,
    "retain_available": False,
    "user_property": [("a", "1"), ("a", "2"), ("ключ", "значение")],
    "maximum_packet_size": 2**32 - 1,
    "wildcard_subscription_available": True,
    "subscription_identifier_available": False,
    "shared_subscription_available": True,
}


def test_all_properties_round_trip():
    # a new property needs a value here
    assert set(ALL_PROPERTIES) == {prop.name.lower() for prop in Property}

    parsed = parse_properties(BytesReader(pack_properties(ALL_PROPERTIES)))

    assert parsed == ALL_PROPERTIES
    # == doesn't see bool vs int, e.g. True == 1
    assert {name: type(value) for name, value in parsed.items()} == {
        name: type(value) for name, value in ALL_PROPERTIES.items()
    }
