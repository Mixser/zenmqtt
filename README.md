# zenmqtt

[![PyPI](https://img.shields.io/pypi/v/zenmqtt.svg)](https://pypi.org/project/zenmqtt/)
[![CI](https://github.com/Mixser/zenmqtt/actions/workflows/zenmqtt.yml/badge.svg)](https://github.com/Mixser/zenmqtt/actions/workflows/zenmqtt.yml)
[![Coverage](https://img.shields.io/endpoint?url=https://mixser.github.io/zenmqtt/coverage/badge.json)](https://mixser.github.io/zenmqtt/coverage/)
[![Benchmarks](https://img.shields.io/badge/benchmarks-history-blue)](https://mixser.github.io/zenmqtt/perf/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/Mixser/zenmqtt/blob/main/LICENSE)

An asyncio MQTT 5 client for Python, built for long-running services: it
reconnects by itself, keeps QoS 1/2 messages in a session until the broker
acknowledges them, and doesn't break when the application is slower than the
broker.

```python
async for message in client.messages:
    await process(message)
    await client.ack(message)
```

## Features

- **MQTT 5** only: properties, reason codes, topic aliases, subscription
  options, will message, server limits from CONNACK.
- **QoS 0, 1 and 2** in both directions. Outgoing QoS 1/2 messages are stored in
  a session and re-sent after reconnect; the session storage can be replaced
  (in-memory by default, an SQLite example is included).
- **Acknowledgement after processing**: incoming QoS 1/2 messages are
  acknowledged by `client.ack()` when the application is done with them, in the
  order of receiving. A message which isn't acknowledged is sent again by the
  broker.
- **Automatic reconnect** with exponential backoff; publish and subscribe calls
  wait while the client reconnects, lost subscriptions are restored.
- **Flow control and backpressure**: the server's "Receive Maximum" is
  respected, and control packets (PINGRESP, PUBACK, ...) are handled even when
  the application doesn't read messages.
- **Keep alive**, **TLS** (`mqtts://`), **Will message**, **disconnect reasons**.
- **Metrics**: hooks for every client event, an OpenTelemetry adapter included.
- **Typed** API, no dependencies besides the standard library.
- **Fast**: about 180k received messages per second in memory, 1.7–3.8× the
  publish throughput of aiomqtt (see [benchmarks](https://github.com/Mixser/zenmqtt/blob/main/benchmarks/README.md)).

## Installation

Requires Python 3.12 or newer.

```sh
pip install zenmqtt

# with the OpenTelemetry adapter
pip install "zenmqtt[otel]"

# the latest main branch
pip install "zenmqtt @ git+https://github.com/Mixser/zenmqtt"
```

## Quick start

```python
import asyncio

from zenmqtt import MQTTClient


async def main():
    # the client is disconnected when the block ends, also on errors
    async with MQTTClient("my-client") as client:
        await client.connect("tcp://localhost:1883")

        await client.subscribe([("sensors/+/temperature", 1)])
        await client.publish("sensors/kitchen/temperature", b"21.5", qos=1)

        async for message in client.messages:
            print(message.topic, message.payload)
            # QoS 1/2 messages must be acknowledged after they are processed
            await client.ack(message)
            break


asyncio.run(main())
```

`publish()` returns `None` for QoS 0 and the final acknowledgement (PUBACK or
PUBCOMP) for QoS 1/2. Received messages are `PublishResult` objects with
`topic`, `payload`, `qos`, `retain`, `dup` and `properties`.

## Usage

### Connecting

```python
import ssl

client = MQTTClient("my-client")

await client.connect(
    "mqtts://broker.example.com",  # 8883 by default for mqtts://, 1883 for tcp://
    username="user",  # optional, reconnects use the same credentials
    password="password",
    ssl=ssl.create_default_context(cafile="ca.pem"),  # optional, system CAs by default
    keepalive=60,
    clean_session=False,
    properties={"session_expiry_interval": 3600},
)
```

`connect()` returns the CONNACK (`ConnectionResult` with `result_code`,
`session_present` and server `properties`). If the first connect fails, the error is raised.
`client.client_id` is the identifier which the server assigned, if the client
id was empty.

`async with MQTTClient(...) as client:` disconnects the client when the block
ends: on a normal exit gracefully (it waits up to 10 s for outgoing QoS 1/2
messages in flight, see [Graceful shutdown](#graceful-shutdown)), after an
exception or cancellation at once, without hiding the exception. Without
`async with`, call `await client.disconnect()` yourself.

### Sessions and reconnect

After a successful connect the client reconnects by itself with exponential
backoff. To keep QoS 1/2 messages and subscriptions across a reconnect, the
broker must keep the session: use `clean_session=False` with
`session_expiry_interval > 0`.

```python
from zenmqtt import ReconnectPolicy

client = MQTTClient(
    "my-client",
    reconnect=ReconnectPolicy(initial_delay=1, max_delay=60, max_attempts=None),
)
client.on_connect = lambda result: print("connected", result.result_code)
client.on_disconnect = lambda exc: print("connection lost", exc)
```

`on_connect` and `on_disconnect` hold one callback each (a function or a
coroutine function): assigning a new one replaces the previous one. Exceptions
in callbacks are logged and don't affect the client.

- `publish()`, `subscribe()` and `unsubscribe()` wait while the client
  reconnects; use `asyncio.wait_for()` to limit the time.
- A QoS 1/2 `publish()` waits for the acknowledgement of the re-sent message. If
  the broker didn't keep the session, it raises `SessionLostError`.
- Subscriptions are restored when the broker reports that the session isn't
  present.
- The client doesn't reconnect after `disconnect()`, after "Session taken over"
  and after errors which a retry can't fix (bad credentials, banned, ...).
- `reconnect=None` turns reconnect off. `client.is_connected` and
  `await client.wait_connected()` show the state.

### Receiving and acknowledging messages

Every QoS 1/2 message from `client.messages` must be acknowledged with
`client.ack(message)`; `ack()` does nothing for QoS 0. Messages which aren't
acknowledged count to `receive_maximum` of the connect properties: when it's
reached, the broker stops sending QoS 1/2 messages until the client acks.

MQTT 5 requires acknowledgements in the order the messages were received. So
one message which isn't acknowledged holds back the acknowledgements of all
messages received after it, even if they are already processed, and they keep
counting to `receive_maximum`. If messages are processed concurrently, make
sure every message is acknowledged, also when its processing fails (ack it
with a failure reason code). When a message holds back later
acknowledgements for 30 seconds, a warning is logged.

```python
async for message in client.messages:
    try:
        await process(message)
    except InvalidPayload:
        # reject: the broker doesn't send this message again
        await client.ack(message, reason_code=0x99)
    else:
        await client.ack(message)
```

`client.messages` is read by one task; another task which waits for a message
at the same time gets `RuntimeError`. To process messages concurrently, read
them in one task and hand them to workers, e.g. through an `asyncio.Queue`.

If the connection is lost before the ack, the broker sends the message again
after reconnect. The iteration over `client.messages` continues across
reconnects and ends when the client stops.

### Subscriptions

```python
from zenmqtt import Subscription

result = await client.subscribe(
    [
        ("alerts/#", 2),
        Subscription("chat/room", qos=1, no_local=True, retain_handling=2),
    ]
)
print(result.reason_codes)  # granted QoS per topic, >= 0x80 means failure

await client.unsubscribe(["alerts/#"])
```

### Will message and disconnect

```python
from zenmqtt import WillMessage

will = WillMessage("devices/1/status", b"offline", qos=1, retain=True)
await client.connect("tcp://localhost:1883", will=will)

# 0x04 asks the broker to publish the will message
await client.disconnect(reason=0x04)
```

If the broker closes the connection with DISCONNECT, its reason code is
available as `client.server_disconnect` and in `ConnectionLostError`.

### Graceful shutdown

`disconnect()` sends DISCONNECT at once: outgoing QoS 1/2 messages which the
broker didn't acknowledge yet stay in the session, and with the default
in-memory session they are lost when the process exits. On shutdown (e.g.
SIGTERM during a deploy) give them time:

```python
# 1. stop reading client.messages, finish processing and ack what was read
# 2. wait up to 10 s for acknowledgements of messages in flight
left = await client.disconnect(timeout=10)

if left:
    logger.warning("%s messages weren't acknowledged by the broker", left)
```

`async with MQTTClient(...)` does this on a normal exit, with a 10 s timeout.

While the client waits, new `publish()`, `subscribe()` and `unsubscribe()`
calls fail with `NotConnectedError`. With automatic reconnect a lost
connection doesn't end the wait: the client reconnects and the messages are
re-sent. QoS 0 messages aren't waited for.

### Errors

| Exception | When |
|---|---|
| `NotConnectedError` | the client isn't connected and doesn't reconnect |
| `ConnectionLostError` | the connection was lost before the acknowledgement (without reconnect) |
| `SessionLostError` | the broker didn't keep the session, the message was discarded |
| `QoSNotSupportedError`, `PacketTooLargeError`, `FeatureNotSupportedError` | the operation breaks a limit of the broker from CONNACK (all are `ServerLimitError`); nothing is sent |
| `ValueError` | invalid arguments, e.g. QoS 3 |

All exceptions can be imported from `zenmqtt`. Protocol violations of the broker
(malformed packets, invalid topic aliases, ...) close the connection with the
matching DISCONNECT reason code.

### Metrics

Metrics are collected by a `MetricsCollector`: a class with a method per client
event (connect, packets, publish latency, ping, reconnect, slow consumer, ...).
The OpenTelemetry adapter exports them with any OpenTelemetry exporter (OTLP,
Prometheus, console):

```python
from zenmqtt.instrumentation.opentelemetry import OpenTelemetryMetrics

client = MQTTClient("my-client", metrics=OpenTelemetryMetrics(meter))
```

See [examples/opentelemetry_metrics.py](https://github.com/Mixser/zenmqtt/blob/main/examples/opentelemetry_metrics.py).

### Tracing

With tracing, every publish gets a span, and its trace context (W3C
`traceparent`) is sent in the user properties of PUBLISH. The processing of a
received message runs in a span which continues the trace of the publisher:

```python
from zenmqtt.instrumentation.opentelemetry import OpenTelemetryTracing

client = MQTTClient("my-client", tracing=OpenTelemetryTracing(tracer_provider))

async for message in client.messages:
    with client.processing(message):
        await process(message)
        await client.ack(message)
```

Without `tracing`, `client.processing()` does nothing, and OpenTelemetry isn't
imported. See [examples/opentelemetry_tracing.py](https://github.com/Mixser/zenmqtt/blob/main/examples/opentelemetry_tracing.py).

### Custom session storage

QoS 1/2 messages wait in the session until they are acknowledged. The default
session is in memory; to keep messages across restarts of the application,
subclass `zenmqtt.BaseSession` and implement its storage methods.
[examples/sqlite_session.py](https://github.com/Mixser/zenmqtt/blob/main/examples/sqlite_session.py) stores the session in
SQLite.

## Architecture

[docs/architecture.md](https://github.com/Mixser/zenmqtt/blob/main/docs/architecture.md)
describes the layers of the client, the flows of messages in both directions,
reconnect, the session and the design decisions.

## Examples

[examples/](https://github.com/Mixser/zenmqtt/blob/main/examples/README.md): publish and subscribe, persistent session with
reconnect, SQLite session, acknowledgement of processed messages, OpenTelemetry
metrics.

## Performance

[benchmarks/](https://github.com/Mixser/zenmqtt/blob/main/benchmarks/README.md) measures the receive path in memory,
publish and end-to-end delivery through a broker, compared with aiomqtt, and
packing and parsing of packets with pytest-benchmark. CI of a pull request has a
manual step which compares its performance with `main`, and the history of
`main` is at https://mixser.github.io/zenmqtt/perf/.

## Development

```sh
poetry install            # add --with bench for the aiomqtt comparison
make fmt                  # black, isort
make lint                 # black, flake8, mypy
make test                 # pytest with coverage
make test/integration     # against a broker, MQTT_INTEGRATION_URL=tcp://localhost:1883
make bench                # benchmarks, a broker is needed for some scenarios
make bench-codec          # micro-benchmarks of packing and parsing
```

The examples, the integration tests and the broker benchmarks need an MQTT 5
broker, e.g.:

```sh
docker run --rm -p 1883:1883 eclipse-mosquitto:2 mosquitto -c /mosquitto-no-auth.conf
```

## License

[MIT](https://github.com/Mixser/zenmqtt/blob/main/LICENSE)
