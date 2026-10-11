# #3 Graceful shutdown — report

- Branch: `MGG-XXX-graceful-shutdown`, commit `5355e0c`, PR https://github.com/Mixser/zenmqtt/pull/48 (not merged).
- Files: `zenmqtt/client.py`, `zenmqtt/mqtt/protocol/core.py`, `zenmqtt/mqtt/protocol/outgoing.py`, `tests/unit/test_disconnect.py` (new), `README.md`, `docs/architecture.md`.

## API

```python
left = await client.disconnect(timeout=10)
```

- `timeout=None` (default): unchanged, DISCONNECT at once.
- With a timeout: new `publish()` / `subscribe()` / `unsubscribe()` fail with
  `NotConnectedError("The client is disconnecting")` (also calls that were
  waiting for a reconnect); the client waits until all outgoing QoS 1/2
  messages in flight are completed (PUBACK / PUBCOMP) or the timeout passes,
  then sends DISCONNECT.
- Returns the number of outgoing QoS 1/2 messages not acknowledged (they stay
  in the session). A warning is logged when a timeout leaves messages.

Why a parameter and not `drain()`: the wait only makes sense right before
DISCONNECT; a separate call leaves a gap where new messages can be published.

## Decisions

- In flight = QoS 1/2 publish calls not returned yet + messages re-sent from
  the session. `OutgoingFlow` keeps a counter of calls and sets an
  `asyncio.Event` when a message completes or fails; that is the only cost on
  the hot path. `MQTTProtocol.wait_outgoing_completed()` waits for it.
- QoS 0 isn't waited for (written to the socket at once).
- Connection lost during the wait: with reconnect the client keeps
  reconnecting, the session re-sends, acks are waited for until the timeout.
  Without reconnect the wait ends when the connection is lost.
- Incoming messages aren't waited for: the application acks before
  `disconnect()`; not acked messages are re-sent by the server later.

## Tests

- 8 new tests (`tests/unit/test_disconnect.py`): waits for PUBACK; waits for
  PUBCOMP; timeout → DISCONNECT, message stays in the session, warning;
  new operations rejected; QoS 0 not waited for; wait continues across
  reconnect (DUP re-send acked); without reconnect the wait ends on lost
  connection; no timeout → immediate.
- 370 tests pass 3 runs in a row with `-W error`; black, isort, flake8,
  `mypy --strict` clean.

## Smoke test against Mosquitto

2000 QoS 1/2 publish calls, then `disconnect(timeout=5)`: 0 left, 0 errors,
the wait took 0.125 s. The subscriber in the same script got 1040 messages:
Mosquitto logged "Outgoing messages are being dropped for client graceful-sub"
— its default queue limit (1000 queued + in flight) for a subscriber which
started reading only after the burst. Broker configuration, not a client issue;
nothing to fix.

## Docs

README: "Graceful shutdown" recipe (stop reading, ack, `disconnect(timeout=...)`,
SIGTERM). `docs/architecture.md`: `Draining` state in the client state diagram
and a "Graceful shutdown" section with a sequence diagram; both rendered with
`mermaid-cli`.

## Risks

- PRs E (metrics guard) and G (tracing) also touch `client.py`; a rebase may
  be needed.
- `disconnect()` now returns `int` instead of `None` — compatible for callers.
- `_draining` is checked in `_when_connected`; a publish already inside the
  protocol when the drain starts is waited for, as intended.
