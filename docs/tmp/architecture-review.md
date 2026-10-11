# Architecture review

Review of `main` (with #47, the session move, still open). Every point was
checked against the code.

## Overall

The layering is sound: the client owns reconnect, the protocol has one
behaviour, the read loop never waits for the application, acks after
processing, flow control in both directions, metrics designed in from the start.

The real problems are where the design meets production: storage latency in
the read loop, instrumentation that can drop connections, no graceful
shutdown, and no tests against real brokers or real network failures.

## Findings

### 1. The session is in the hot path of the read loop (high)

The read loop awaits the session in packet handlers: PUBACK/PUBCOMP →
`complete_outgoing_message`, PUBREC → `mark_outgoing_message_released` (load +
save), every incoming QoS 2 PUBLISH → `has_incoming_message`, PUBREL →
`complete_incoming_message`. With a persistent session every QoS 1/2 ack costs
a database round trip inside the read loop; PINGRESP, SUBACK and incoming
messages wait behind it. The SQLite example calls blocking `sqlite3` inside
`async` methods, so it stalls the whole event loop.

Proposal: split the session into an in-memory `SessionState` (packet ids,
in-flight index, states; the source of truth, synchronous) and an optional
`SessionStore` (append-only log of events written by one background task in
batches). Durability rules: store before send (outgoing QoS 1/2), register
before PUBREC (incoming QoS 2); deletes and "released" can be lazy, because
after a crash the re-sent PUBLISH (DUP) or PUBREL is safe for the broker. Fix
the SQLite example (thread, one transaction per batch). Effort: M.

### 2. Instrumentation failure can drop connections (high)

User callbacks are guarded by `_notify`, `MetricsCollector` hooks are not. An
exception in `on_packet_received` ends the read loop; inside a handler it
causes DISCONNECT 0x83. A bug in a metrics adapter means a reconnect loop for
the whole service.

Proposal: call hooks through a guard which catches exceptions, logs the first
one per hook and counts the rest. Rule: instrumentation never changes the data
path. Effort: S.

### 3. No graceful shutdown (high for services)

`disconnect()` sends DISCONNECT at once. Outgoing QoS 1/2 in flight stay in the
session; with the in-memory session they are lost when the process exits —
every SIGTERM during a deploy.

Proposal: `disconnect(timeout=...)` (or `drain()`): stop new publishes, wait
until in-flight outgoing messages complete or the timeout passes, then
DISCONNECT. Document the shutdown recipe. Effort: S–M.

### 4. No tests against real brokers and failures (high)

All tests use `FakeTransport`; Mosquitto runs only in perf workflows.

Proposal: integration job with Mosquitto, EMQX and HiveMQ CE; fault injection
with Toxiproxy (latency, cut connections, half-open TCP, slow reader); fuzzing
of the parser with Hypothesis. Effort: M.

### 5. No default deadlines (medium)

`publish()`, `subscribe()`, `unsubscribe()` wait across reconnects without a
limit unless wrapped in `asyncio.wait_for`.

Proposal: client-level `operation_timeout` with per-call override; a timeout
cancels the waiting, not the delivery. Effort: S.

### 6. One write and one drain per packet (medium, performance)

A burst of acks is N writes and N drains. Proposal: coalesce writes of one loop
iteration into one write and one drain, measured with the A/B tooling.
Effort: S–M.

### 7. Routing by subscription (medium, API, before 0.1.0)

Per-subscription streams routed by subscription identifiers; one reader per
stream. Changes the public API. Effort: M–L.

### 8. No trace context propagation (medium)

Proposal: optional OpenTelemetry tracing in `zenmqtt.instrumentation`: inject
W3C `traceparent` into PUBLISH user properties, extract on receive, spans for
publish → ack and receive → ack. No cost when not installed. Effort: M.

### 9. Public API surface isn't defined (low, before 0.1.0)

Users can import `zenmqtt.mqtt.protocol.core`, the packet functions,
`ProtocolContext`. Proposal: root `zenmqtt` and documented submodules are
public; `zenmqtt.mqtt` is internal; short deprecation policy. Effort: S.

## Keep as is

One read loop with a dispatch table; ack after processing in receive order;
no memory limit for QoS 0 (decided); the protocol keeps state across a lost
connection; standard library only.

## Order

1. Before 0.1.0: #2, #5, #9, #3, decide #7.
2. Then #4, then #1.
3. Later #6 and #8.

Decision (2026-10-11): start with #2, #3, #8.
