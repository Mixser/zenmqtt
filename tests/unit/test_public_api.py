import pytest

import zenmqtt
from zenmqtt.mqtt.connect import ConnectionResult
from zenmqtt.mqtt.packet import split_packet
from zenmqtt.mqtt.publish import pack_publish_packet, parse_publish_packet


def test_root_exports():
    for name in zenmqtt.__all__:
        assert hasattr(zenmqtt, name), name

    assert zenmqtt.MQTTClient.__module__ == "zenmqtt.client"
    assert issubclass(zenmqtt.SessionLostError, zenmqtt.ConnectionLostError)


def test_version():
    assert isinstance(zenmqtt.__version__, str) and zenmqtt.__version__


@pytest.mark.parametrize("flags, expected", ((0x00, False), (0x01, True)))
def test_session_present(flags, expected):
    assert ConnectionResult(flags, 0, {}).session_present is expected


@pytest.mark.parametrize("dup, retain", ((False, False), (True, True)))
def test_publish_flags_are_bool(dup, retain):
    fixed_header, reader = split_packet(
        pack_publish_packet(1, "a/b", b"x", 1, retain, dup, {})
    )
    message = parse_publish_packet(fixed_header, reader)

    assert message.dup is dup
    assert message.retain is retain
