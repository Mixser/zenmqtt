import pytest

from tests.unit.mqtt.protocol.helpers import pack_suback
from zenmqtt import QoS, ReasonCode
from zenmqtt.mqtt.connect import pack_disconnect_packet, parse_disconnect_packet
from zenmqtt.mqtt.packet import split_packet
from zenmqtt.mqtt.publish import (
    pack_puback_packet,
    pack_publish_packet,
    parse_puback_packet,
    parse_publish_packet,
)
from zenmqtt.mqtt.subscribe import parse_suback_packet

# MQTT 5.0, section 2.4, table 2-6
SPEC_REASON_CODES = {
    "SUCCESS": 0x00,
    "NORMAL_DISCONNECTION": 0x00,
    "GRANTED_QOS_0": 0x00,
    "GRANTED_QOS_1": 0x01,
    "GRANTED_QOS_2": 0x02,
    "DISCONNECT_WITH_WILL_MESSAGE": 0x04,
    "NO_MATCHING_SUBSCRIBERS": 0x10,
    "NO_SUBSCRIPTION_EXISTED": 0x11,
    "CONTINUE_AUTHENTICATION": 0x18,
    "RE_AUTHENTICATE": 0x19,
    "UNSPECIFIED_ERROR": 0x80,
    "MALFORMED_PACKET": 0x81,
    "PROTOCOL_ERROR": 0x82,
    "IMPLEMENTATION_SPECIFIC_ERROR": 0x83,
    "UNSUPPORTED_PROTOCOL_VERSION": 0x84,
    "CLIENT_IDENTIFIER_NOT_VALID": 0x85,
    "BAD_USER_NAME_OR_PASSWORD": 0x86,
    "NOT_AUTHORIZED": 0x87,
    "SERVER_UNAVAILABLE": 0x88,
    "SERVER_BUSY": 0x89,
    "BANNED": 0x8A,
    "SERVER_SHUTTING_DOWN": 0x8B,
    "BAD_AUTHENTICATION_METHOD": 0x8C,
    "KEEP_ALIVE_TIMEOUT": 0x8D,
    "SESSION_TAKEN_OVER": 0x8E,
    "TOPIC_FILTER_INVALID": 0x8F,
    "TOPIC_NAME_INVALID": 0x90,
    "PACKET_IDENTIFIER_IN_USE": 0x91,
    "PACKET_IDENTIFIER_NOT_FOUND": 0x92,
    "RECEIVE_MAXIMUM_EXCEEDED": 0x93,
    "TOPIC_ALIAS_INVALID": 0x94,
    "PACKET_TOO_LARGE": 0x95,
    "MESSAGE_RATE_TOO_HIGH": 0x96,
    "QUOTA_EXCEEDED": 0x97,
    "ADMINISTRATIVE_ACTION": 0x98,
    "PAYLOAD_FORMAT_INVALID": 0x99,
    "RETAIN_NOT_SUPPORTED": 0x9A,
    "QOS_NOT_SUPPORTED": 0x9B,
    "USE_ANOTHER_SERVER": 0x9C,
    "SERVER_MOVED": 0x9D,
    "SHARED_SUBSCRIPTIONS_NOT_SUPPORTED": 0x9E,
    "CONNECTION_RATE_EXCEEDED": 0x9F,
    "MAXIMUM_CONNECT_TIME": 0xA0,
    "SUBSCRIPTION_IDENTIFIERS_NOT_SUPPORTED": 0xA1,
    "WILDCARD_SUBSCRIPTIONS_NOT_SUPPORTED": 0xA2,
}


def test_reason_codes_match_the_spec():
    assert {
        name: member.value for name, member in ReasonCode.__members__.items()
    } == SPEC_REASON_CODES


def test_names_of_one_value_are_aliases():
    assert ReasonCode.NORMAL_DISCONNECTION is ReasonCode.SUCCESS
    assert ReasonCode.GRANTED_QOS_0 is ReasonCode.SUCCESS
    assert ReasonCode(0x00).name == "SUCCESS"


def test_is_failure():
    assert not ReasonCode.NO_MATCHING_SUBSCRIBERS.is_failure
    assert ReasonCode.UNSPECIFIED_ERROR.is_failure
    assert ReasonCode(0xFF).is_failure


def test_unknown_value_isnt_an_error():
    code = ReasonCode(0x42)

    assert (code, code.name, code.is_failure) == (0x42, "UNKNOWN_0x42", False)

    # a reason code is one byte
    with pytest.raises(ValueError):
        ReasonCode(0x100)


def test_enums_are_ints():
    assert QoS.EXACTLY_ONCE == 2
    assert ReasonCode.NOT_AUTHORIZED == 0x87
    # logs and formatting show the number, like before
    assert str(ReasonCode.NOT_AUTHORIZED) == "135"
    assert f"{ReasonCode.NOT_AUTHORIZED:#04x}" == "0x87"


def test_enums_are_accepted_where_ints_are():
    assert pack_puback_packet(1, ReasonCode.PAYLOAD_FORMAT_INVALID, {}) == (
        pack_puback_packet(1, 0x99, {})
    )
    assert pack_publish_packet(
        1, "a/b", b"x", QoS.AT_LEAST_ONCE, False, False, {}
    ) == pack_publish_packet(1, "a/b", b"x", 1, False, False, {})


def test_parsed_values_are_enums():
    puback = parse_puback_packet(*split_packet(pack_puback_packet(1, 0x87, {})))
    assert puback.reason_code is ReasonCode.NOT_AUTHORIZED

    publish = parse_publish_packet(
        *split_packet(pack_publish_packet(1, "a/b", b"x", 2, False, False, {}))
    )
    assert publish.qos is QoS.EXACTLY_ONCE

    disconnect = parse_disconnect_packet(
        *split_packet(pack_disconnect_packet(0x8E, {}))
    )
    assert disconnect.reason_code is ReasonCode.SESSION_TAKEN_OVER


def test_unknown_reason_codes_from_the_wire_are_parsed():
    suback = parse_suback_packet(*split_packet(pack_suback(1, 0x01, 0x42, 0x87)))

    assert [code.name for code in suback.reason_codes] == [
        "GRANTED_QOS_1",
        "UNKNOWN_0x42",
        "NOT_AUTHORIZED",
    ]
