# zenmqtt

[![CI](https://github.com/Mixser/zenmqtt/actions/workflows/zenmqtt.yml/badge.svg)](https://github.com/Mixser/zenmqtt/actions/workflows/zenmqtt.yml)
[![Benchmarks](https://img.shields.io/badge/benchmarks-history-blue)](https://mixser.github.io/zenmqtt/perf/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

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
  publish throughput of aiomqtt (see [benchmarks](benchmarks/README.md)).

## Installation

Requires Python 3.12 or newer. The package isn't on PyPI yet:

```sh
pip install "zenmqtt @ git+https://github.com/Mixser/zenmqtt"

# with the OpenTelemetry adapter
pip install "zenmqtt[otel] @ git+https://github.com/Mixser/zenmqtt"
```

## Quick start

```python
import asyncio

from zenmqtt.client import MQTTClient


async def main():
    client = MQTTClient("my-client")
    await client.connect("tcp://localhost:1883")

    await client.subscribe([("sensors/+/temperature", 1)])
    await client.publish("sensors/kitchen/temperature", b"21.5", qos=1)

    async for message in client.messages:
        print(message.topic, message.payload)
        # QoS 1/2 messages must be acknowledged after they are processed
        await client.ack(message)
        break

    await client.disconnect()


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
client.authorize("user", "password")

await client.connect(
    "mqtts://broker.example.com",  # 8883 by default for mqtts://, 1883 for tcp://
    ssl=ssl.create_default_context(cafile="ca.pem"),  # optional, system CAs by default
    keepalive=60,
    clean_session=False,
    properties={"session_expiry_interval": 3600},
)
```

`connect()` returns the CONNACK (`ConnectionResult` with `result_code`, `flags`
and server `properties`). If the first connect fails, the error is raised.

### Sessions and reconnect

After a successful connect the client reconnects by itself with exponential
backoff. To keep QoS 1/2 messages and subscriptions across a reconnect, the
broker must keep the session: use `clean_session=False` with
`session_expiry_interval > 0`.

```python
from zenmqtt.reconnect import ReconnectPolicy

client = MQTTClient(
    "my-client",
    reconnect=ReconnectPolicy(initial_delay=1, max_delay=60, max_attempts=None),
)
client.on_connect = lambda result: print("connected", result.result_code)
client.on_disconnect = lambda exc: print("connection lost", exc)
```

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
`client.ack(message)`; `ack()` does nothing for QoS 0. Acknowledgements are
sent in the order the messages were received. Messages which aren't
acknowledged count to `receive_maximum` of the connect properties: when it's
reached, the broker stops sending QoS 1/2 messages until the client acks.

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

If the connection is lost before the ack, the broker sends the message again
after reconnect. The iteration over `client.messages` continues across
reconnects and ends when the client stops.

### Subscriptions

```python
from zenmqtt.mqtt.subscribe import Subscription

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
from zenmqtt.mqtt.connect import WillMessage

will = WillMessage("devices/1/status", b"offline", qos=1, retain=True, properties={})
await client.connect("tcp://localhost:1883", will=will)

# 0x04 asks the broker to publish the will message
await client.disconnect(reason=0x04)
```

If the broker closes the connection with DISCONNECT, its reason code is
available as `client.server_disconnect` and in `ConnectionLostError`.

### Errors

| Exception | When |
|---|---|
| `NotConnectedError` | the client isn't connected and doesn't reconnect |
| `ConnectionLostError` | the connection was lost before the acknowledgement (without reconnect) |
| `SessionLostError` | the broker didn't keep the session, the message was discarded |
| `QoSNotSupportedError`, `PacketTooLargeError`, `FeatureNotSupportedError` | the operation breaks a limit of the broker from CONNACK (all are `ServerLimitError`); nothing is sent |
| `ValueError` | invalid arguments, e.g. QoS 3 |

All exceptions are in `zenmqtt.exceptions`. Protocol violations of the broker
(malformed packets, invalid topic aliases, ...) close the connection with the
matching DISCONNECT reason code.

### Metrics

Metrics are collected by a `MetricsCollector`: a class with a method per client
event (connect, packets, publish latency, ping, reconnect, slow consumer, ...).
The OpenTelemetry adapter exports them with any OpenTelemetry exporter (OTLP,
Prometheus, console):

```python
from zenmqtt.contrib.opentelemetry import OpenTelemetryMetrics

client = MQTTClient("my-client", metrics=OpenTelemetryMetrics(meter))
```

See [examples/opentelemetry_metrics.py](examples/opentelemetry_metrics.py).

### Custom session storage

QoS 1/2 messages wait in the session until they are acknowledged. The default
session is in memory; to keep messages across restarts of the application,
subclass `zenmqtt.mqtt.session.BaseSession` and implement its storage methods.
[examples/sqlite_session.py](examples/sqlite_session.py) stores the session in
SQLite.

## Examples

[examples/](examples/README.md): publish and subscribe, persistent session with
reconnect, SQLite session, acknowledgement of processed messages, OpenTelemetry
metrics.

## Performance

[benchmarks/](benchmarks/README.md) measures the receive path in memory,
publish and end-to-end delivery through a broker, compared with aiomqtt, and
packing and parsing of packets with pytest-benchmark. Every pull request gets a performance report against `main`, and the
history of `main` is at https://mixser.github.io/zenmqtt/perf/.

## Development

```sh
poetry install            # add --with bench for the aiomqtt comparison
make fmt                  # black, isort
make lint                 # black, flake8, mypy
make test                 # pytest with coverage
make bench                # benchmarks, a broker is needed for some scenarios
make bench-codec          # micro-benchmarks of packing and parsing
```

The examples and broker benchmarks need an MQTT 5 broker, e.g.:

```sh
docker run --rm -p 1883:1883 eclipse-mosquitto:2 mosquitto -c /mosquitto-no-auth.conf
```

## License

[MIT](LICENSE)
