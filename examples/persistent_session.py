"""
Persistent session: QoS 1/2 messages survive a lost connection.

When the connection is lost before the acknowledgement, publish raises
ConnectionLostError, but the message stays in the session and is re-sent
(with DUP flag) right after the next successful connect.

Try to restart the broker while the example is running.
"""
import asyncio
import logging
import os

from gmqtt.client import MQTTClient
from gmqtt.exceptions import ConnectionLostError, NotConnectedError

MQTT_URL = os.environ.get("MQTT_URL", "tcp://localhost:1883")
MQTT_USERNAME = os.environ.get("MQTT_USERNAME")
MQTT_PASSWORD = os.environ.get("MQTT_PASSWORD")

TOPIC = "gmqtt/examples/persistent-session"

# the server keeps the session for an hour after the disconnect
SESSION_EXPIRY_INTERVAL = 3600
RECONNECT_DELAY = 1

logging.basicConfig(level=logging.INFO)


async def connect(client: MQTTClient) -> None:
    while True:
        try:
            result = await client.connect(
                MQTT_URL,
                clean_session=False,
                properties={"session_expiry_interval": SESSION_EXPIRY_INTERVAL},
            )
        except (OSError, ConnectionLostError) as exc:
            print("connect failed, retrying:", repr(exc))
            await asyncio.sleep(RECONNECT_DELAY)
            continue

        # bit 0 of CONNACK flags is "session present"
        print("connected, session present:", bool(result.flags & 0x01))
        return


async def main():
    client = MQTTClient("gmqtt-example-persistent-session")

    if MQTT_USERNAME:
        client.authorize(MQTT_USERNAME, MQTT_PASSWORD)

    await connect(client)

    for counter in range(60):
        payload = f"message #{counter}".encode()

        try:
            result = await client.publish(TOPIC, payload, qos=1)
            print("published:", payload, result)
        except ConnectionLostError:
            # stored in the session, will be re-sent on reconnect
            print("connection lost, message is kept in session:", payload)
            await connect(client)
        except NotConnectedError:
            # nothing was stored, the message has to be published again
            print("not connected, message is dropped:", payload)
            await connect(client)

        await asyncio.sleep(1)

    await client.disconnect()


if __name__ == "__main__":
    asyncio.run(main())
