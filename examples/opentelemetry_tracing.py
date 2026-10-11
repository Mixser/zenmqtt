"""
Tracing: a span for every publish and for the processing of every message; the
processing continues the trace of the publisher.

Requires `pip install zenmqtt[otel] opentelemetry-sdk`. The example prints
spans to the console; for OTLP use OTLPSpanExporter from
`opentelemetry-exporter-otlp`.
"""
import asyncio
import os

from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import ConsoleSpanExporter, SimpleSpanProcessor

from zenmqtt import MQTTClient
from zenmqtt.instrumentation.opentelemetry import OpenTelemetryTracing

MQTT_URL = os.environ.get("MQTT_URL", "tcp://localhost:1883")
MQTT_USERNAME = os.environ.get("MQTT_USERNAME")
MQTT_PASSWORD = os.environ.get("MQTT_PASSWORD")

TOPIC = "zenmqtt/examples/opentelemetry-tracing"


async def main():
    provider = TracerProvider()
    provider.add_span_processor(SimpleSpanProcessor(ConsoleSpanExporter()))
    tracer = provider.get_tracer("example")

    async with MQTTClient(
        "zenmqtt-example-opentelemetry-tracing",
        tracing=OpenTelemetryTracing(provider),
    ) as client:
        await client.connect(
            MQTT_URL, username=MQTT_USERNAME, password=MQTT_PASSWORD, clean_session=True
        )
        await client.subscribe([(TOPIC, 1)])

        # the trace context of "request" travels in the user properties of PUBLISH
        with tracer.start_as_current_span("request"):
            await client.publish(TOPIC, b"hello", qos=1)

        async for message in client.messages:
            # a child of "publish", in the same trace as "request"
            with client.processing(message):
                with tracer.start_as_current_span("handle"):
                    print("received:", message.payload)

                await client.ack(message)

            break

    provider.shutdown()


if __name__ == "__main__":
    asyncio.run(main())
