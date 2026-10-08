import pytest

from gmqtt.mqtt.packet import PacketType

pytest.importorskip("opentelemetry.sdk")

from opentelemetry.sdk.metrics import MeterProvider  # noqa: E402
from opentelemetry.sdk.metrics.export import InMemoryMetricReader  # noqa: E402

from gmqtt.contrib.opentelemetry import OpenTelemetryMetrics  # noqa: E402


@pytest.fixture
def reader():
    return InMemoryMetricReader()


@pytest.fixture
def metrics(reader):
    meter = MeterProvider(metric_readers=[reader]).get_meter("test")
    return OpenTelemetryMetrics(meter, attributes={"client": "test"})


def collect(reader) -> dict:
    """metric name -> list of (attributes, value or histogram point)"""
    result: dict = {}

    data = reader.get_metrics_data()

    for resource_metrics in data.resource_metrics:
        for scope_metrics in resource_metrics.scope_metrics:
            for metric in scope_metrics.metrics:
                result[metric.name] = [
                    (dict(point.attributes), point) for point in metric.data.data_points
                ]

    return result


def test_publish(metrics, reader):
    metrics.on_publish_completed(1, 0, 0.02)
    metrics.on_publish_completed(1, 0x87, 0.03)

    data = collect(reader)

    ok, failed = sorted(
        data["messaging.client.sent.messages"], key=lambda x: x[0]["mqtt.reason_code"]
    )
    assert ok[0] == {
        "messaging.system": "mqtt",
        "client": "test",
        "messaging.operation.name": "publish",
        "messaging.operation.type": "send",
        "mqtt.qos": 1,
        "mqtt.reason_code": 0,
    }
    assert ok[1].value == 1
    assert failed[0]["error.type"] == "0x87"

    durations = data["messaging.client.operation.duration"]
    assert sorted(point.sum for _, point in durations) == [0.02, 0.03]
    # seconds-based buckets, not the default milliseconds ones
    assert durations[0][1].explicit_bounds[0] == 0.005


def test_connections(metrics, reader):
    metrics.on_connect(0, 0.01)
    metrics.on_connect(0x86, 0.01)
    metrics.on_connection_closed(lost=True)

    data = collect(reader)

    [(_, active)] = data["gmqtt.connections.active"]
    assert active.value == 0

    [(attributes, closed)] = data["gmqtt.connections.closed"]
    assert attributes["gmqtt.connection.lost"] is True and closed.value == 1

    connects = {
        attributes["mqtt.reason_code"]: (attributes, point)
        for attributes, point in data["gmqtt.connect.duration"]
    }
    assert connects.keys() == {0, 0x86}
    assert connects[0x86][0]["error.type"] == "0x86"


def test_packets(metrics, reader):
    metrics.on_packet_sent(PacketType.PUBLISH, 10)
    metrics.on_packet_sent(PacketType.PUBLISH, 5)
    metrics.on_packet_received(PacketType.PUBACK, 4)

    data = collect(reader)

    [(attributes, sent)] = data["gmqtt.packets.sent"]
    assert attributes["mqtt.packet.type"] == "PUBLISH" and sent.value == 2

    [(_, sent_bytes)] = data["gmqtt.bytes.sent"]
    assert sent_bytes.value == 15

    [(attributes, received_bytes)] = data["gmqtt.bytes.received"]
    assert attributes["mqtt.packet.type"] == "PUBACK" and received_bytes.value == 4


def test_received_messages(metrics, reader):
    metrics.on_message_received(2, False)
    metrics.on_message_received(2, True)

    data = collect(reader)

    [(_, consumed)] = data["messaging.client.consumed.messages"]
    assert consumed.value == 1

    [(_, duplicated)] = data["gmqtt.messages.duplicated"]
    assert duplicated.value == 1


def test_subscribe_with_failed_topic(metrics, reader):
    metrics.on_subscribe_completed([0x01, 0x80], 0.01)
    metrics.on_unsubscribe_completed([0x00], 0.01)

    data = collect(reader)

    operations = {
        attributes["messaging.operation.name"]: attributes
        for attributes, _ in data["messaging.client.operation.duration"]
    }
    assert operations["subscribe"]["error.type"] == "0x80"
    assert "error.type" not in operations["unsubscribe"]


def test_other_events(metrics, reader):
    metrics.on_send_quota_wait(0.5)
    metrics.on_messages_resent(3)
    metrics.on_ping(0.01)
    metrics.on_ping_timeout()
    metrics.on_reconnect_attempt(1, 0.5)
    metrics.on_reconnect_attempt(2, 1.0)
    metrics.on_reconnect_gave_up()

    data = collect(reader)

    assert data["gmqtt.reconnect.attempts"][0][1].value == 2
    assert data["gmqtt.reconnect.give_ups"][0][1].value == 1

    assert data["gmqtt.send_quota.wait.duration"][0][1].sum == 0.5
    assert data["gmqtt.messages.resent"][0][1].value == 3
    assert data["gmqtt.ping.duration"][0][1].count == 1
    assert data["gmqtt.ping.timeouts"][0][1].value == 1
