import inspect
import typing

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


def _types(hint):
    """Classes and aliases of zenmqtt in an annotation, e.g. Optional[MQTTMessage]."""
    if getattr(hint, "__module__", "").startswith("zenmqtt"):
        yield hint

    for arg in typing.get_args(hint):
        yield from _types(arg)


def test_types_of_client_methods_are_exported():
    # users can annotate their code with imports from zenmqtt only
    for name, method in inspect.getmembers(zenmqtt.MQTTClient):
        if name.startswith("_") or not callable(method):
            continue

        for hint in typing.get_type_hints(method).values():
            for type_ in _types(hint):
                assert type_ in vars(zenmqtt).values(), (name, type_)


def test_errors_have_one_base():
    errors = [
        value
        for value in vars(zenmqtt.exceptions).values()
        if isinstance(value, type) and issubclass(value, Exception)
    ]

    assert len(errors) > 10
    for error in errors:
        assert issubclass(error, zenmqtt.MQTTError), error

    # ValueError before MQTTError: except ValueError still catches them
    assert issubclass(zenmqtt.ServerLimitError, ValueError)
    assert issubclass(zenmqtt.ProtocolError, ValueError)


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
