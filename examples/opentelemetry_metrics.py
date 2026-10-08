"""
Metrics: collect statistics of the client with OpenTelemetry.

Requires `pip install gmqtt[otel] opentelemetry-sdk`. The example prints
metrics to the console; for Prometheus use PrometheusMetricReader from
`opentelemetry-exporter-prometheus`, for OTLP use OTLPMetricExporter from
`opentelemetry-exporter-otlp`.
"""
import asyncio
import os

from opentelemetry.sdk.metrics import MeterProvider
from opentelemetry.sdk.metrics.export import (
    ConsoleMetricExporter,
    PeriodicExportingMetricReader,
)

from gmqtt.client import MQTTClient
from gmqtt.contrib.opentelemetry import OpenTelemetryMetrics

MQTT_URL = os.environ.get("MQTT_URL", "tcp://localhost:1883")
MQTT_USERNAME = os.environ.get("MQTT_USERNAME")
MQTT_PASSWORD = os.environ.get("MQTT_PASSWORD")

TOPIC = "gmqtt/examples/opentelemetry-metrics"


async def main():
    # export once at shutdown, a real application exports periodically
    reader = PeriodicExportingMetricReader(
        ConsoleMetricExporter(), export_interval_millis=60_000
    )
    provider = MeterProvider(metric_readers=[reader])

    metrics = OpenTelemetryMetrics(
        provider.get_meter("gmqtt"), attributes={"client.name": "example"}
    )
    client = MQTTClient("gmqtt-example-opentelemetry-metrics", metrics=metrics)

    if MQTT_USERNAME:
        client.authorize(MQTT_USERNAME, MQTT_PASSWORD)

    await client.connect(MQTT_URL, clean_session=True)
    await client.subscribe([(TOPIC, 2)])

    for qos in (0, 1, 2):
        for i in range(10):
            await client.publish(TOPIC, f"message {i}".encode(), qos=qos)

    received = 0
    async for message in client.messages:
        await client.ack(message)
        received += 1

        if received == 30:
            break

    await client.ping()
    await client.disconnect()

    # flushes metrics to the console
    provider.shutdown()


if __name__ == "__main__":
    asyncio.run(main())
