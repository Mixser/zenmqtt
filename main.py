import asyncio
import logging
from typing import Final

from gmqtt.client import MQTTClient


logging.basicConfig(level=logging.INFO)


FLESPI_TOKEN: Final[str] = "X6RXo4dJubdWmT3OfAElnWscaMy7kZW5TDS7wTGQVIA5puKvUcE6ZW8ZyuVGjHB0"


async def main():
    client = MQTTClient("mitu-gmqtt-v2")
    
    client.authorize(FLESPI_TOKEN, None)
    
    await client.connect("tcp://mqtt.flespi.io:1883")

    result = await client.publish("mitu/test", b"Hello, world!!!!")

    await client.subscribe([("mitu/test/awesome", 0)])

    async for message in client.messages:
        print(message)

    await client.disconnect()


if __name__ == "__main__":
    loop = asyncio.new_event_loop()
    
    try:
        loop.run_until_complete(main())
    finally:
        loop.close()