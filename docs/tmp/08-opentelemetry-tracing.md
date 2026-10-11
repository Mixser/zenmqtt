# #8 OpenTelemetry tracing — report

PR #50 (https://github.com/Mixser/zenmqtt/pull/50), branch `MGG-XXX-opentelemetry-tracing`, commit `e6aa6d2`. Not merged.

## API

    client = MQTTClient("id", tracing=OpenTelemetryTracing(tracer_provider))
    async for message in client.messages:
        with client.processing(message):
            await process(message)
            await client.ack(message)

- zenmqtt/instrumentation/tracing.py: Tracing (no-op base: start_publish(), processing()) and PublishTrace (properties, end()). No OpenTelemetry import.
- OpenTelemetryTracing(tracer_provider=None, propagator=None, attributes=None) in zenmqtt/instrumentation/opentelemetry.py, the only module that imports OpenTelemetry.
- MQTTClient(tracing=...) and MQTTClient.processing(message). The protocol is unchanged.

## Span design

| Span | Kind | Starts | Ends |
|---|---|---|---|
| publish | PRODUCER | publish() is called (includes waiting for a reconnect) | QoS 0: packet written; QoS 1/2: final ack |
| process | CONSUMER | `with client.processing(message)` | end of the block |

- Error status: ack reason code >= 0x80 (error.type = "0x87"), or an exception (recorded). A cancelled publish isn't an error: the delivery continues.
- Parent of process: the context extracted from the user properties; without one, the current span. Parent, not link: one message = one processing, the trace stays a tree.
- Explicit context manager instead of "start on delivery, end on ack": no span leaks for never-acked messages; QoS 0 works the same.

## Conventions

- Messaging semconv (opentelemetry-semantic-conventions 0.66b1, offline): messaging.system = "mqtt" (custom value), messaging.operation.name (publish/process), messaging.operation.type (send/process), messaging.destination.name (topic), messaging.client.id, messaging.message.body.size.
- MQTT attributes like the metrics adapter: mqtt.qos, mqtt.retain, mqtt.dup, mqtt.reason_code.
- Span names without the topic (unlimited cardinality).
- Propagation: global propagator by default (W3C traceparent), read at call time. Propagator keys replace the same user property keys of the app; other user properties are kept.

## Checks

- 8 new tests (in-memory span exporter); 370 tests pass 3 times with -W error.
- Lint and strict mypy clean, also with the real OpenTelemetry types.
- Example against Mosquitto: request -> publish -> process -> handle in one trace.
- In-memory A/B vs main: 0 slower, 0 faster (that scenario doesn't go through client.publish(); there the cost without tracing is one `is None` check).

## Open questions / risks

- The publish span starts before waiting for a reconnect: long spans during outages. Alternative: start once connected.
- Re-sent QoS 1/2 messages keep the original user properties, so they stay in the same trace.
- No separate "receive" span for delivery from the buffer; can be added later.
- client.py overlaps with PR E (metrics guard) and PR F (graceful shutdown): a rebase may be needed.
