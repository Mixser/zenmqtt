# Benchmarks

## Running

```sh
poetry install --with bench          # aiomqtt for the comparison, optional
docker run --rm -p 1883:1883 eclipse-mosquitto:2 mosquitto -c /mosquitto-no-auth.conf

make bench                           # all scenarios, all available clients
MQTT_URL=tcp://localhost:1883 make bench ARGS="--scenarios publish --qos 1 --messages 50000"
make bench ARGS="--scenarios in-memory --profile"   # no broker needed
```

| Option | Default | |
|---|---|---|
| `--scenarios` | all | `in-memory`, `pack`, `publish`, `end-to-end`, comma separated |
| `--clients` | all available | `zenmqtt`, `aiomqtt` (needs `--with bench`) |
| `--messages` | 10000 | messages per run; in-memory scenarios need ≤ 65535 for QoS 1/2 |
| `--payload` | 64 | payload size in bytes |
| `--qos` | `0 1 2` | |
| `--concurrency` | 100 | publish calls in flight |
| `--json FILE` | | save results and metadata (Python, platform, git commit) |
| `--profile` | | profile the in-memory receive path and print hot spots |
| `--url` | `$MQTT_URL` or `tcp://localhost:1883` | broker for `publish` and `end-to-end` |

## Scenarios

- **in-memory receive** — PUBLISH packets are served by an in-memory transport,
  no network and no broker: the cost of parsing and delivery in the client
  itself. Every QoS 1/2 message is acknowledged by `ack()`. Runs without
  metrics and with `OpenTelemetryMetrics`, to show the cost of metrics.
- **pack publish** — packing of PUBLISH packets, the CPU cost of the send path.
- **publish** — one client publishes with `--concurrency` calls in flight.
  For QoS 1/2 latency is measured until PUBACK/PUBCOMP.
- **end-to-end** — publisher → broker → subscriber of the same library.
  Latency is measured from the publish call to the delivery to the
  application, so it includes all queues. Publishers send as fast as they
  can, so this is the latency of a saturated system, not of an idle one.

The broker scenarios run for every client with the same interface
(`benchmarks/clients.py`), so other libraries can be added there.
gmqtt (v1) isn't compared yet: after the rename to `zenmqtt` it can be
installed next to this package, an adapter in `benchmarks/clients.py` is
enough. paho-mqtt is synchronous, so it needs a different harness.

## Results

Apple M2 Pro, Python 3.12.0, Mosquitto 2 in Docker Desktop 29.7 on the same
machine, 10000 messages of 64 bytes, single run (results vary by a few
percent between runs).

| scenario | client | QoS | msg/s | p50 ms | p95 ms | p99 ms | note |
|---|---|---|---:|---:|---:|---:|---|
| in-memory receive | zenmqtt | 0 | 49,606 | | | | no metrics |
| in-memory receive | zenmqtt | 0 | 32,997 | | | | opentelemetry |
| in-memory receive | zenmqtt | 1 | 40,500 | | | | no metrics |
| in-memory receive | zenmqtt | 1 | 24,855 | | | | opentelemetry |
| in-memory receive | zenmqtt | 2 | 39,136 | | | | no metrics |
| in-memory receive | zenmqtt | 2 | 24,482 | | | | opentelemetry |
| pack publish | zenmqtt | 0 | 440,806 | | | | |
| pack publish | zenmqtt | 1 | 416,193 | | | | |
| pack publish | zenmqtt | 2 | 412,171 | | | | |
| publish | zenmqtt | 0 | 70,065 | | | | |
| publish | zenmqtt | 1 | 20,514 | 3.79 | 4.11 | 21.38 | |
| publish | zenmqtt | 2 | 13,780 | 6.19 | 6.69 | 22.22 | |
| publish | aiomqtt 2.5.1 | 0 | 18,320 | | | | |
| publish | aiomqtt 2.5.1 | 1 | 10,234 | 8.78 | 9.84 | 23.17 | |
| publish | aiomqtt 2.5.1 | 2 | 8,439 | 10.71 | 11.77 | 24.54 | |
| end-to-end | zenmqtt | 0 | 27,390 | 272.72 | 317.64 | 320.94 | saturated |
| end-to-end | zenmqtt | 1 | 12,457 | 7.15 | 8.06 | 8.96 | |
| end-to-end | zenmqtt | 2 | 8,347 | 11.12 | 12.06 | 13.18 | |
| end-to-end | aiomqtt 2.5.1 | 0 | 8,176 | 640.94 | 694.46 | 696.14 | saturated |
| end-to-end | aiomqtt 2.5.1 | 1 | 118 | 575.44 | 839.81 | 847.20 | 7223 of 10000 received |
| end-to-end | aiomqtt 2.5.1 | 2 | 4,808 | 570.90 | 921.66 | 970.10 | |

### Findings

- **Publish**: zenmqtt publishes 2–4× faster than aiomqtt with about half
  the ack latency.
- **End-to-end QoS 0** latency is high for both clients because the publisher
  sends faster than the subscriber receives: messages wait in queues.
- **aiomqtt end-to-end QoS 1** received only 7223 of 10000 messages within
  60 seconds: Mosquitto keeps at most 1000 QoS 1/2 messages per client
  (`max_queued_messages`) and drops the rest when the subscriber is slower.
  zenmqtt received all messages.
- **The receive path is the bottleneck** of zenmqtt: about 40–50k msg/s in
  memory, while packing runs at 410–440k/s. `--profile` shows that about 70%
  of the time is in reading the stream byte by byte (`build_data_sequence`
  yields every byte, `utils.read` joins them again: about 87 steps per 64
  byte message). A buffered reader is the next optimisation.
- **OpenTelemetry metrics** cost about 35–40% of the in-memory receive
  throughput. "no metrics" runs with the default `MetricsCollector`, whose
  hooks do nothing; their own cost isn't measured separately.
