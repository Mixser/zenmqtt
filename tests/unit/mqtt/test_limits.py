import pytest

from gmqtt.exceptions import (
    FeatureNotSupportedError,
    PacketTooLargeError,
    QoSNotSupportedError,
    ServerLimitError,
)
from gmqtt.mqtt.limits import DEFAULT_SERVER_LIMITS, ServerLimits


def test_default_limits():
    assert DEFAULT_SERVER_LIMITS == ServerLimits(
        maximum_qos=2,
        retain_available=True,
        maximum_packet_size=None,
        topic_alias_maximum=0,
        wildcard_subscription_available=True,
        subscription_identifier_available=True,
        shared_subscription_available=True,
    )


def test_limits_from_connack():
    limits = ServerLimits.from_connack(
        {
            "maximum_qos": 1,
            "retain_available": False,
            "maximum_packet_size": 100,
            "topic_alias_maximum": 5,
            "wildcard_subscription_available": False,
            "subscription_identifier_available": False,
            "shared_subscription_available": False,
        }
    )

    assert limits == ServerLimits(1, False, 100, 5, False, False, False)


@pytest.mark.parametrize(
    "limits, qos, retain, properties, error",
    (
        (
            ServerLimits.from_connack({"maximum_qos": 0}),
            1,
            False,
            {},
            QoSNotSupportedError,
        ),
        (
            ServerLimits.from_connack({"retain_available": False}),
            0,
            True,
            {},
            FeatureNotSupportedError,
        ),
        # topic aliases aren't allowed if the server doesn't send the maximum
        (DEFAULT_SERVER_LIMITS, 0, False, {"topic_alias": 1}, FeatureNotSupportedError),
        (
            ServerLimits.from_connack({"topic_alias_maximum": 2}),
            0,
            False,
            {"topic_alias": 3},
            FeatureNotSupportedError,
        ),
        (
            ServerLimits.from_connack({"topic_alias_maximum": 2}),
            0,
            False,
            {"topic_alias": 0},
            FeatureNotSupportedError,
        ),
    ),
)
def test_check_publish_fails(limits, qos, retain, properties, error):
    with pytest.raises(error):
        limits.check_publish(qos, retain, properties)


@pytest.mark.parametrize(
    "limits, qos, retain, properties",
    (
        (DEFAULT_SERVER_LIMITS, 2, True, {}),
        (ServerLimits.from_connack({"maximum_qos": 1}), 1, False, {}),
        (
            ServerLimits.from_connack({"topic_alias_maximum": 2}),
            0,
            False,
            {"topic_alias": 2},
        ),
    ),
)
def test_check_publish_passes(limits, qos, retain, properties):
    limits.check_publish(qos, retain, properties)


@pytest.mark.parametrize(
    "properties, topics, connack_properties",
    (
        ({}, [("a/+", 0)], {"wildcard_subscription_available": False}),
        ({}, [("a/#", 0)], {"wildcard_subscription_available": False}),
        ({}, [("$share/group/a", 0)], {"shared_subscription_available": False}),
        (
            {"subscription_identifier": 1},
            [("a/b", 0)],
            {"subscription_identifier_available": False},
        ),
    ),
)
def test_check_subscribe_fails(properties, topics, connack_properties):
    limits = ServerLimits.from_connack(connack_properties)

    with pytest.raises(FeatureNotSupportedError):
        limits.check_subscribe(topics, properties)


def test_check_subscribe_passes():
    limits = ServerLimits.from_connack(
        {
            "wildcard_subscription_available": False,
            "shared_subscription_available": False,
            "subscription_identifier_available": False,
        }
    )

    limits.check_subscribe([("a/b", 0), ("c/d", 1)], {})
    DEFAULT_SERVER_LIMITS.check_subscribe(
        [("a/+", 0), ("$share/group/a/#", 1)], {"subscription_identifier": 1}
    )


def test_check_packet_size():
    limits = ServerLimits.from_connack({"maximum_packet_size": 4})

    limits.check_packet_size(b"\x00" * 4)

    with pytest.raises(PacketTooLargeError):
        limits.check_packet_size(b"\x00" * 5)

    DEFAULT_SERVER_LIMITS.check_packet_size(b"\x00" * 2**20)


def test_errors_are_value_errors():
    assert issubclass(ServerLimitError, ValueError)

    for error in (QoSNotSupportedError, PacketTooLargeError, FeatureNotSupportedError):
        assert issubclass(error, ServerLimitError)
