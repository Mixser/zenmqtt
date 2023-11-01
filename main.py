import asyncio
import logging
import signal
from typing import Final

from gmqtt.client import MQTTClient


logging.basicConfig(level=logging.INFO)


FLESPI_TOKEN: Final[str] = "X6RXo4dJubdWmT3OfAElnWscaMy7kZW5TDS7wTGQVIA5puKvUcE6ZW8ZyuVGjHB0"


async def main():
    client = MQTTClient("mitu-gmqtt-v3")
    
    client.authorize(FLESPI_TOKEN, None)

    loop = asyncio.get_running_loop()

    loop.add_signal_handler(signal.SIGINT, lambda: asyncio.ensure_future(client.disconnect()))


    # loop.call_at(
    #     loop.time() + 5,
    #     lambda: asyncio.ensure_future(client.disconnect())
    # )
    
    await client.connect("tcp://mqtt.flespi.io:1883")

    result = await client.publish("mitu/test", b"Hello, world!!!!")
    print(result)

    subscribe_result = await client.subscribe([("mitu/test/awesome", 1)])
    print(subscribe_result)

    await client.publish("mitu/test/awesome", b"payload")

    async for message in client.messages:
        await client.publish("mitu/test/awesome", b"payload")

    print("Done")

if __name__ == "__main__":
    loop = asyncio.new_event_loop()
    
    try:
        loop.run_until_complete(main())
    finally:
        loop.close()