"""
Persistent session: QoS 1/2 messages survive a lost connection.

The client reconnects automatically. A publish call waits while the client
reconnects, and a QoS 1/2 message which wasn't acknowledged before the
connection was lost is re-sent (with DUP flag) from the session: the call
returns the acknowledgement of the re-sent message.

Try to restart the broker while the example is running.
"""
import asyncio
import logging
import os

from zenmqtt import (
    ConnectionLostError,
    ConnectionResult,
    MQTTClient,
    ReconnectPolicy,
    SessionLostError,
)

MQTT_URL = os.environ.get("MQTT_URL", "tcp://localhost:1883")
MQTT_USERNAME = os.environ.get("MQTT_USERNAME")
MQTT_PASSWORD = os.environ.get("MQTT_PASSWORD")

TOPIC = "zenmqtt/examples/persistent-session"

# the server keeps the session for an hour after the connection is lost
SESSION_EXPIRY_INTERVAL = 3600

logging.basicConfig(level=logging.INFO)


def on_connect(result: ConnectionResult) -> None:
    print("connected, session present:", result.session_present)


def on_disconnect(exc: ConnectionLostError) -> None:
    print("connection lost, reconnecting:", exc)


async def main():
    async with MQTTClient(
        "zenmqtt-example-persistent-session",
        reconnect=ReconnectPolicy(initial_delay=1, max_delay=10),
    ) as client:
        client.on_connect = on_connect
        client.on_disconnect = on_disconnect

        await client.connect(
            MQTT_URL,
            username=MQTT_USERNAME,
            password=MQTT_PASSWORD,
            clean_session=False,
            properties={"session_expiry_interval": SESSION_EXPIRY_INTERVAL},
        )

        for counter in range(60):
            payload = f"message #{counter}".encode()

            try:
                result = await client.publish(TOPIC, payload, qos=1)
                print("published:", payload, result)
            except SessionLostError:
                # the server didn't keep the session, e.g. it expired
                print("message is lost with the session:", payload)

            await asyncio.sleep(1)


if __name__ == "__main__":
    asyncio.run(main())
