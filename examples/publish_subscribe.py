"""
Basic usage: connect, subscribe, publish with every QoS and read messages.
"""
import asyncio
import logging
import os

from gmqtt.client import MQTTClient

MQTT_URL = os.environ.get("MQTT_URL", "tcp://localhost:1883")
MQTT_USERNAME = os.environ.get("MQTT_USERNAME")
MQTT_PASSWORD = os.environ.get("MQTT_PASSWORD")

TOPIC = "gmqtt/examples/publish-subscribe"

logging.basicConfig(level=logging.INFO)


async def main():
    client = MQTTClient("gmqtt-example-publish-subscribe")

    if MQTT_USERNAME:
        client.authorize(MQTT_USERNAME, MQTT_PASSWORD)

    connection_result = await client.connect(MQTT_URL, clean_session=True)
    print("connected:", connection_result)

    subscribe_result = await client.subscribe([(TOPIC, 2)])
    print("subscribed:", subscribe_result)

    # QoS 0 returns None, QoS 1 returns PUBACK, QoS 2 returns PUBCOMP
    for qos in (0, 1, 2):
        result = await client.publish(
            TOPIC,
            f"hello with qos {qos}".encode(),
            qos=qos,
            properties={"user_property": [("example", "publish-subscribe")]},
        )
        print(f"published qos {qos}:", result)

    received = 0

    async for message in client.messages:
        print("received:", message.topic, message.qos, message.payload)
        received += 1

        if received == 3:
            break

    await client.unsubscribe([TOPIC])
    await client.disconnect()


if __name__ == "__main__":
    asyncio.run(main())
