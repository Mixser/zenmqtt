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

## Comparing two versions

`benchmarks/compare.py` compares two checkouts of the library on the same
machine, the same way as CI does for pull requests:

```sh
git worktree add ../zenmqtt-main main
poetry run python -m benchmarks.compare --base ../zenmqtt-main --head . --rounds 10
```

Shared machines are noisy, so numbers of two separate runs can't be compared.
Both versions run in one job, in alternating order (base, head, head, base,
...). The change of every scenario is the ratio of medians head/base with a 95%
confidence interval from bootstrap resampling; it's reported as faster or
slower only if the whole interval is beyond ±5% (`--threshold`). Broker
scenarios (`--url`) are shown without a verdict, they are too noisy. The
report is written to `--output-dir` as `report.md` and `results.json`.

## CI

- **Pull requests** (`.github/workflows/perf.yml`): the pull request merged
  into `main` is compared with `main` by `benchmarks/compare.py` on Python
  3.13. The report is shown in the job summary, and `perf-comment.yml` posts it
  as a comment of the pull request (one comment, updated on every push). It's
  a report only, the check doesn't fail on a slowdown.
- **History** (`.github/workflows/perf-history.yml`): every push to `main` runs
  all scenarios on Python 3.12, 3.13 and 3.14 and stores the results on
  the `gh-pages` branch with
  [github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark).
  Charts: **https://mixser.github.io/zenmqtt/perf/** (one chart per scenario
  and Python version). The workflow can also be started by hand
  (`workflow_dispatch`).

The history needs GitHub Pages: Settings -> Pages -> Deploy from a branch ->
`gh-pages`, folder `/ (root)`.

## Results

Apple M2 Pro, Python 3.12.0, Mosquitto 2 in Docker Desktop 29.7 on the same
machine, 10000 messages of 64 bytes, single run (results vary by a few
percent between runs).

| scenario | client | QoS | msg/s | p50 ms | p95 ms | p99 ms | note |
|---|---|---|---:|---:|---:|---:|---|
| in-memory receive | zenmqtt | 0 | 181,509 | | | | no metrics |
| in-memory receive | zenmqtt | 0 | 53,249 | | | | opentelemetry |
| in-memory receive | zenmqtt | 1 | 114,661 | | | | no metrics |
| in-memory receive | zenmqtt | 1 | 36,723 | | | | opentelemetry |
| in-memory receive | zenmqtt | 2 | 111,875 | | | | no metrics |
| in-memory receive | zenmqtt | 2 | 34,887 | | | | opentelemetry |
| pack publish | zenmqtt | 0 | 426,832 | | | | |
| pack publish | zenmqtt | 1 | 407,412 | | | | |
| pack publish | zenmqtt | 2 | 398,957 | | | | |
| publish | zenmqtt | 0 | 67,496 | | | | |
| publish | zenmqtt | 1 | 21,548 | 3.47 | 4.18 | 22.64 | |
| publish | zenmqtt | 2 | 14,648 | 5.71 | 6.63 | 21.98 | |
| publish | aiomqtt 2.5.1 | 0 | 17,664 | | | | |
| publish | aiomqtt 2.5.1 | 1 | 10,465 | 8.36 | 10.21 | 24.10 | |
| publish | aiomqtt 2.5.1 | 2 | 8,478 | 10.79 | 11.58 | 23.71 | |
| end-to-end | zenmqtt | 0 | 46,918 | 124.80 | 166.03 | 169.31 | saturated |
| end-to-end | zenmqtt | 1 | 14,742 | 5.53 | 7.15 | 24.22 | |
| end-to-end | zenmqtt | 2 | 9,948 | 8.97 | 10.14 | 20.17 | |
| end-to-end | aiomqtt 2.5.1 | 0 | 8,388 | 649.40 | 656.96 | 665.06 | saturated |
| end-to-end | aiomqtt 2.5.1 | 1 | 114 | 598.59 | 852.72 | 859.53 | 6977 of 10000 received |
| end-to-end | aiomqtt 2.5.1 | 2 | 5,063 | 553.33 | 879.46 | 911.26 | |

### Findings

- **Receive path**: the buffered packet reader receives 180k QoS 0 and about
  110k QoS 1/2 messages per second in memory (it was 40–50k with the
  byte-by-byte stream). For QoS 1/2 the acknowledgements cost more than
  parsing now.
- **Publish**: zenmqtt publishes 1.7–3.8× faster than aiomqtt (QoS 2 to QoS 0)
  with about half of the ack latency. End-to-end it delivers 2–6× more messages per second.
- **End-to-end QoS 0** latency is high because the publisher sends faster
  than the subscriber receives: messages wait in queues.
- **aiomqtt end-to-end QoS 1** received only 6977 of 10000 messages within
  60 seconds: Mosquitto keeps at most 1000 QoS 1/2 messages per client
  (`max_queued_messages`) and drops the rest when the subscriber is slower.
  zenmqtt received all messages.
- **OpenTelemetry metrics** cost about 70% of the in-memory receive
  throughput now that parsing is fast (181k -> 53k msg/s for QoS 0). "no
  metrics" runs with the default `MetricsCollector`, whose hooks do nothing;
  their own cost isn't measured separately.
- **Packing big payloads** is slow: about 10.5k PUBLISH packets of 16 KiB per
  second, because `pack_publish_packet` copies the payload byte by byte
  (`bytearray.extend(itertools.chain(...))`).
