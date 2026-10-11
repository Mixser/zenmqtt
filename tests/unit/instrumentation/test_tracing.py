import asyncio
import subprocess
import sys

import pytest

from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    FakeTransport,
    expect_publish,
    pack_connack,
)
from tests.unit.test_client import connect
from zenmqtt.client import MQTTClient
from zenmqtt.mqtt.publish import pack_puback_packet, pack_publish_packet

pytest.importorskip("opentelemetry.sdk")

from opentelemetry import trace  # noqa: E402
from opentelemetry.sdk.trace import TracerProvider  # noqa: E402
from opentelemetry.sdk.trace.export import SimpleSpanProcessor  # noqa: E402
from opentelemetry.sdk.trace.export.in_memory_span_exporter import (  # noqa: E402
    InMemorySpanExporter,
)
from opentelemetry.trace import SpanKind, StatusCode  # noqa: E402
from opentelemetry.trace.propagation.tracecontext import (  # noqa: E402
    TraceContextTextMapPropagator,
)

from zenmqtt.instrumentation.opentelemetry import OpenTelemetryTracing  # noqa: E402


@pytest.fixture
def exporter():
    return InMemorySpanExporter()


@pytest.fixture
def provider(exporter):
    provider = TracerProvider()
    provider.add_span_processor(SimpleSpanProcessor(exporter))
    return provider


@pytest.fixture
def tracing(provider):
    return OpenTelemetryTracing(
        provider, TraceContextTextMapPropagator(), attributes={"client": "test"}
    )


async def connected_client(tracing) -> tuple[MQTTClient, FakeTransport]:
    client = MQTTClient("client-id", reconnect=None, tracing=tracing)
    transport = FakeTransport()
    await connect(client, transport, pack_connack())

    return client, transport


def traceparent(span) -> str:
    context = span.get_span_context()
    return (
        f"00-{context.trace_id:032x}-{context.span_id:016x}-{context.trace_flags:02x}"
    )


async def test_publish_span_and_injected_context(tracing, exporter):
    client, transport = await connected_client(tracing)

    await client.publish(
        "a/b",
        b"payload",
        properties={"user_property": [("app", "1"), ("traceparent", "old")]},
    )
    publish = await expect_publish(transport)

    [span] = exporter.get_finished_spans()
    assert span.name == "publish"
    assert span.kind == SpanKind.PRODUCER
    assert span.status.status_code == StatusCode.UNSET
    assert dict(span.attributes) == {
        "client": "test",
        "messaging.system": "mqtt",
        "messaging.operation.name": "publish",
        "messaging.operation.type": "send",
        "messaging.destination.name": "a/b",
        "messaging.client.id": "client-id",
        "messaging.message.body.size": 7,
        "mqtt.qos": 0,
        "mqtt.retain": False,
    }

    # the context of the application is replaced, other properties are kept
    assert publish.properties["user_property"] == [
        ("app", "1"),
        ("traceparent", traceparent(span)),
    ]

    await client.disconnect()


async def test_publish_span_ends_with_acknowledgement(tracing, exporter):
    client, transport = await connected_client(tracing)

    task = asyncio.create_task(client.publish("a/b", b"payload", qos=1))
    publish = await expect_publish(transport)
    await asyncio.sleep(0.01)

    # the span lasts until PUBACK
    assert exporter.get_finished_spans() == ()

    transport.feed(pack_puback_packet(publish.packet_identifier, 0x87, {}))
    await asyncio.wait_for(task, TIMEOUT)

    [span] = exporter.get_finished_spans()
    assert span.status.status_code == StatusCode.ERROR
    assert span.attributes["mqtt.reason_code"] == 0x87
    assert span.attributes["error.type"] == "0x87"

    await client.disconnect()


async def test_publish_error_is_recorded(tracing, exporter):
    client, _ = await connected_client(tracing)

    with pytest.raises(ValueError):
        await client.publish("a/b", b"payload", qos=3)

    [span] = exporter.get_finished_spans()
    assert span.status.status_code == StatusCode.ERROR
    assert span.attributes["error.type"] == "ValueError"
    assert [event.name for event in span.events] == ["exception"]

    await client.disconnect()


async def test_processing_continues_the_trace_of_the_publisher(tracing, exporter):
    publisher, publisher_transport = await connected_client(tracing)
    consumer, consumer_transport = await connected_client(tracing)

    await publisher.publish("a/b", b"payload")
    sent = await expect_publish(publisher_transport)

    # the PUBLISH of the publisher arrives at the consumer
    consumer_transport.feed(
        pack_publish_packet(
            0, sent.topic, sent.payload, 0, False, False, sent.properties
        )
    )
    message = await asyncio.wait_for(anext(consumer.messages), TIMEOUT)

    with consumer.processing(message):
        current = trace.get_current_span()

    publish_span, process_span = exporter.get_finished_spans()
    assert current.get_span_context() == process_span.get_span_context()

    assert process_span.name == "process"
    assert process_span.kind == SpanKind.CONSUMER
    assert process_span.parent.span_id == publish_span.context.span_id
    assert process_span.context.trace_id == publish_span.context.trace_id
    assert process_span.attributes["messaging.operation.type"] == "process"
    assert process_span.attributes["messaging.destination.name"] == "a/b"
    assert process_span.attributes["mqtt.dup"] is False

    await publisher.disconnect()
    await consumer.disconnect()


async def test_processing_error_is_recorded(tracing, exporter):
    client, transport = await connected_client(tracing)

    transport.feed(pack_publish_packet(0, "a/b", b"payload", 0, False, False, {}))
    message = await asyncio.wait_for(anext(client.messages), TIMEOUT)

    with pytest.raises(RuntimeError):
        with client.processing(message):
            raise RuntimeError("failed")

    [span] = exporter.get_finished_spans()
    assert span.status.status_code == StatusCode.ERROR

    await client.disconnect()


async def test_message_without_context_is_processed_in_the_current_trace(
    tracing, exporter, provider
):
    client, transport = await connected_client(tracing)

    transport.feed(pack_publish_packet(0, "a/b", b"payload", 0, False, False, {}))
    message = await asyncio.wait_for(anext(client.messages), TIMEOUT)

    with provider.get_tracer("app").start_as_current_span("loop"):
        with client.processing(message):
            pass

    process_span, loop_span = exporter.get_finished_spans()
    assert process_span.parent.span_id == loop_span.context.span_id

    await client.disconnect()


async def test_without_tracing_nothing_changes():
    client = MQTTClient("client-id", reconnect=None)
    transport = FakeTransport()
    await connect(client, transport, pack_connack())

    await client.publish("a/b", b"payload", properties={"user_property": [("a", "1")]})
    publish = await expect_publish(transport)
    assert publish.properties == {"user_property": [("a", "1")]}

    transport.feed(pack_publish_packet(0, "a/b", b"payload", 0, False, False, {}))
    message = await asyncio.wait_for(anext(client.messages), TIMEOUT)

    with client.processing(message):
        pass

    await client.disconnect()


def test_opentelemetry_isnt_imported_without_tracing():
    code = (
        "import sys, zenmqtt, zenmqtt.instrumentation; "
        "zenmqtt.MQTTClient('client-id'); "
        "assert not [m for m in sys.modules if m.startswith('opentelemetry')]"
    )

    subprocess.run([sys.executable, "-c", code], check=True)
