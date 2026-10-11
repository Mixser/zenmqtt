# #2 Guard metrics hooks — report

- Branch: `MGG-XXX-guard-metrics-hooks`
- Commit: `9b1a397`
- PR: https://github.com/Mixser/zenmqtt/pull/49 (not merged)

## Problem

User callbacks were guarded by `MQTTClient._notify`, `MetricsCollector` hooks
were not. An exception in `on_packet_received` ended the read loop; inside a
packet handler it caused DISCONNECT 0x83; in the reconnector it stopped
reconnect for good (checked: the new reconnect test fails without the guard).

## Design

- `guard_metrics(metrics)` in `zenmqtt/instrumentation/metrics.py`, applied
  once in `MQTTClient.__init__` and in `MQTTProtocol.__init__`. It's
  idempotent: the client passes the guarded collector to the protocol and the
  reconnector, so nothing is wrapped twice. `None` and a plain
  `MetricsCollector` are returned without a wrapper.
- `_GuardedMetrics(MetricsCollector)`: for every `on_*` hook of
  `MetricsCollector`, if the collector overrides it (the bound method isn't the
  base function), an instance attribute with a `try/except Exception` wrapper
  is set. Not overridden hooks stay the base no-ops: no extra call.
  Hooks are taken with `getattr`, so collectors with `__getattribute__`
  (`RecordingMetrics` in the tests) work too.
- Logging (logger `zenmqtt.instrumentation.metrics`): the first error of a
  hook with the traceback; then at most one log per 60 s per hook, with the
  number of errors since the last log. Reason: a hook failing on every packet
  must not flood the logs, but a permanently broken hook must stay visible.
  `errors` counts all errors per hook.
- Hooks are bound when the client is created; replacing a method of the
  collector later has no effect (documented in the docstring).

## Files

- `zenmqtt/instrumentation/metrics.py` — guard, docstring
- `zenmqtt/client.py`, `zenmqtt/mqtt/protocol/core.py` — one line each
- `docs/architecture.md` — Instrumentation section
- tests: `tests/unit/instrumentation/test_guard_metrics.py` (4 unit tests),
  `tests/unit/mqtt/protocol/test_metrics.py` (+4: all hooks failing through
  connect/publish/receive/ack QoS 0/1/2, subscribe, ping; single failing hooks
  keep the connection), `tests/unit/test_reconnect.py` (+1: reconnect with a
  failing collector), `FailingMetrics` helper in `helpers.py`.

## Checks

- 371 tests (362 + 9), 3 runs in a row with `-W error`; lint and
  `mypy --strict` clean.
- The protocol tests fail without the guard in the protocol (4 failed), the
  reconnect test fails without the guard in the client.

## Benchmark (in-memory A/B against main, 6 rounds): 0 slower, 0 faster

| Scenario | QoS | Payload | Base msg/s | Head msg/s | Change | 95% CI |
|---|---:|---:|---:|---:|---:|---|
| no metrics | 0 | 64 B | 190,500 | 191,866 | +0.7% | -1.1% .. +1.4% |
| opentelemetry | 0 | 64 B | 90,552 | 88,346 | -2.4% | -7.2% .. +0.9% |
| no metrics | 1 | 64 B | 108,255 | 107,073 | -1.1% | -4.0% .. +2.8% |
| opentelemetry | 1 | 64 B | 55,605 | 55,109 | -0.9% | -3.5% .. +2.1% |
| no metrics | 2 | 64 B | 103,153 | 104,451 | +1.3% | +0.0% .. +2.7% |
| opentelemetry | 2 | 64 B | 54,089 | 53,789 | -0.6% | -1.9% .. +0.3% |
| no metrics | 0 | 16 KiB | 67,214 | 66,215 | -1.5% | -10.3% .. +4.7% |
| opentelemetry | 0 | 16 KiB | 50,386 | 49,687 | -1.4% | -4.5% .. +5.0% |
| no metrics | 1 | 16 KiB | 52,607 | 53,174 | +1.1% | -2.9% .. +4.4% |
| opentelemetry | 1 | 16 KiB | 36,635 | 36,606 | -0.1% | -6.2% .. +3.2% |
| no metrics | 2 | 16 KiB | 52,023 | 53,813 | +3.4% | -0.6% .. +8.3% |
| opentelemetry | 2 | 16 KiB | 36,708 | 36,036 | -1.8% | -3.9% .. +1.7% |

## Risks

- Parallel PR G (tracing) may add hooks or a second collector; new `on_*`
  methods of `MetricsCollector` are guarded automatically. If G adds a
  separate tracer interface, it needs the same guard.
- A collector which replaces its hooks after the client is created isn't
  seen (hooks are bound once).
- The base A/B checkout was made with `git archive` (worktree isolation
  doesn't allow a second worktree); same content as `origin/main` at 2cf2f7d.
