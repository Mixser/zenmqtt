"""
Micro-benchmarks of packing and parsing of MQTT packets (pytest-benchmark).

    make bench-codec
    poetry run pytest benchmarks/codec --benchmark-only --benchmark-json codec.json

Every parse benchmark checks its result, so the suite is a test of the codec
too.
"""
import struct

import pytest

from zenmqtt.mqtt.packet import (
    BytesReader,
    PacketType,
    parse_variable_byte_integer,
    split_packet,
)
from zenmqtt.mqtt.properties import Properties, pack_properties, parse_properties
from zenmqtt.mqtt.publish import (
    pack_puback_packet,
    pack_publish_packet,
    parse_puback_packet,
    parse_publish_packet,
)
from zenmqtt.mqtt.subscribe import (
    Subscription,
    pack_subscription_packet,
    parse_suback_packet,
)

TOPIC = "devices/1234/sensors/temperature"

PAYLOADS = {"64B": b"x" * 64, "16KiB": b"x" * 16 * 1024}

PROPERTIES: Properties = {
    "message_expiry_interval": 60,
    "content_type": "application/json",
    "user_property": [("trace-id", "4bf92f3577b34da6a3ce929d0e0e4736")],
}

SUBSCRIPTIONS = [Subscription(f"devices/{index}/#", qos=1) for index in range(10)]

payloads = pytest.mark.parametrize("payload", PAYLOADS.values(), ids=PAYLOADS.keys())
qos_levels = pytest.mark.parametrize("qos", (0, 1), ids=("qos0", "qos1"))


@qos_levels
@payloads
def test_pack_publish(benchmark, qos, payload):
    benchmark(pack_publish_packet, 1, TOPIC, payload, qos, False, False, {})


def test_pack_publish_with_properties(benchmark):
    benchmark(
        pack_publish_packet, 1, TOPIC, PAYLOADS["64B"], 1, False, False, PROPERTIES
    )


@qos_levels
@payloads
def test_parse_publish(benchmark, qos, payload):
    data = pack_publish_packet(1, TOPIC, payload, qos, False, False, {})

    def parse():
        header, reader = split_packet(data)
        return parse_publish_packet(header, reader)

    message = benchmark(parse)

    assert (message.topic, message.payload, message.qos) == (TOPIC, payload, qos)


def test_parse_publish_with_properties(benchmark):
    data = pack_publish_packet(1, TOPIC, PAYLOADS["64B"], 1, False, False, PROPERTIES)

    def parse():
        header, reader = split_packet(data)
        return parse_publish_packet(header, reader)

    assert benchmark(parse).properties == PROPERTIES


def test_pack_puback(benchmark):
    benchmark(pack_puback_packet, 1, 0, {})


def test_parse_puback(benchmark):
    data = pack_puback_packet(1, 0x10, {"reason_string": "no subscribers"})

    def parse():
        header, reader = split_packet(data)
        return parse_puback_packet(header, reader)

    assert benchmark(parse).reason_code == 0x10


def test_pack_properties(benchmark):
    benchmark(pack_properties, PROPERTIES)


def test_parse_properties(benchmark):
    data = pack_properties(PROPERTIES)

    assert benchmark(lambda: parse_properties(BytesReader(data))) == PROPERTIES


def test_pack_subscribe(benchmark):
    benchmark(pack_subscription_packet, 1, SUBSCRIPTIONS, {})


def test_parse_suback(benchmark):
    body = struct.pack("!HB", 1, 0) + bytes([1] * len(SUBSCRIPTIONS))
    data = bytes([PacketType.SUBACK << 4, len(body)]) + body

    def parse():
        header, reader = split_packet(data)
        return parse_suback_packet(header, reader)

    assert benchmark(parse).reason_codes == [1] * len(SUBSCRIPTIONS)


def test_parse_variable_byte_integer(benchmark):
    # the largest value, 4 bytes
    assert benchmark(parse_variable_byte_integer, b"\xff\xff\xff\x7f") == (
        268_435_455,
        4,
    )
