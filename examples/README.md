# Examples

| Example | Shows |
|---|---|
| [publish_subscribe.py](publish_subscribe.py) | connect, subscribe, publish with QoS 0/1/2, read messages |
| [persistent_session.py](persistent_session.py) | persistent session, automatic reconnect, re-sending of in-flight messages |
| [sqlite_session.py](sqlite_session.py) | custom session storage based on `BaseSession`, survives app restarts |
| [manual_ack.py](manual_ack.py) | manual ack of processed messages, rejecting a message, flow control by `receive_maximum` |
| [opentelemetry_metrics.py](opentelemetry_metrics.py) | client metrics with OpenTelemetry (needs `gmqtt[otel]` and `opentelemetry-sdk`) |

## Running

Start a broker, e.g. Mosquitto without authentication:

```sh
docker run --rm -p 1883:1883 eclipse-mosquitto:2 mosquitto -c /mosquitto-no-auth.conf
```

Run an example from the repository root:

```sh
poetry run python examples/publish_subscribe.py
```

Settings are taken from environment variables:

| Variable | Default |
|---|---|
| `MQTT_URL` | `tcp://localhost:1883` |
| `MQTT_USERNAME` | — |
| `MQTT_PASSWORD` | — |
| `SESSION_DATABASE` (sqlite_session.py only) | `gmqtt-session.sqlite3` |
