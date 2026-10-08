"""
Ack: acknowledge a message only after it's processed.

The client sends PUBACK (QoS 1) or PUBREC (QoS 2) when client.ack() is called,
not when the message is received. If the application fails before the ack,
the server sends the message again (after reconnect or restart, if the
session is kept). A message can be rejected with a reason code >= 0x80.

Messages which aren't acknowledged count to "receive_maximum": when it's
reached, the server stops sending QoS 1/2 messages until the client acks.
"""
import asyncio
import logging
import os

from gmqtt.client import MQTTClient
from gmqtt.mqtt.publish import PublishResult

MQTT_URL = os.environ.get("MQTT_URL", "tcp://localhost:1883")
MQTT_USERNAME = os.environ.get("MQTT_USERNAME")
MQTT_PASSWORD = os.environ.get("MQTT_PASSWORD")

TOPIC = "gmqtt/examples/ack"

# reason code of a rejected message, the server doesn't send it again
PAYLOAD_FORMAT_INVALID = 0x99

logging.basicConfig(level=logging.INFO)


async def process(message: PublishResult) -> None:
    if not message.payload.isdigit():
        raise ValueError(f"not a number: {message.payload!r}")

    await asyncio.sleep(0.1)
    print("processed:", int(message.payload))


async def main():
    client = MQTTClient("gmqtt-example-ack")

    if MQTT_USERNAME:
        client.authorize(MQTT_USERNAME, MQTT_PASSWORD)

    await client.connect(
        MQTT_URL,
        properties={
            "session_expiry_interval": 3600,
            # at most 5 messages are delivered and not acknowledged at once
            "receive_maximum": 5,
        },
    )
    await client.subscribe([(TOPIC, 1)])

    for payload in (b"1", b"2", b"oops", b"3"):
        await client.publish(TOPIC, payload, qos=1)

    received = 0

    async for message in client.messages:
        try:
            await process(message)
        except ValueError as exc:
            print("rejected:", exc)
            await client.ack(message, reason_code=PAYLOAD_FORMAT_INVALID)
        else:
            await client.ack(message)

        received += 1

        if received == 4:
            break

    await client.disconnect()


if __name__ == "__main__":
    asyncio.run(main())
