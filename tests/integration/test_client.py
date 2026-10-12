"""
The main scenarios of the client against a real broker, end to end.
"""

import asyncio
import uuid
from typing import Any, Callable

import pytest

from tests.integration.conftest import SESSION
from tests.integration.proxy import Proxy
from zenmqtt import MQTTClient, MQTTMessage, WillMessage

# generous: a test waits only as long as the broker needs, this is the limit
TIMEOUT = 10

MakeClient = Callable[..., MQTTClient]


async def receive(client: MQTTClient) -> MQTTMessage:
    return await asyncio.wait_for(anext(client.messages), TIMEOUT)


def connects(client: MQTTClient) -> "asyncio.Queue[Any]":
    """CONNACK of every successful connect, also of reconnects."""
    queue: asyncio.Queue[Any] = asyncio.Queue()
    client.on_connect = queue.put_nowait
    return queue


async def subscriber(make_client: MakeClient, url: str, topic: str, qos: int = 2):
    client = make_client("subscriber")
    await client.connect(url)
    await client.subscribe([(topic, qos)])
    return client


@pytest.mark.parametrize("qos", (0, 1, 2))
async def test_publish_and_receive(broker_url, make_client, topic, qos):
    receiver = await subscriber(make_client, broker_url, topic)
    sender = make_client("publisher")
    await sender.connect(broker_url)

    result = await sender.publish(
        topic,
        b"payload",
        qos=qos,
        properties={"content_type": "text/plain", "user_property": [("k", "v")]},
    )

    # QoS 0 has no acknowledgement, QoS 1/2 return PUBACK / PUBCOMP
    assert (result is None) if qos == 0 else (result.reason_code < 0x80)

    message = await receive(receiver)
    assert (message.topic, message.payload, message.qos) == (topic, b"payload", qos)
    assert message.properties["content_type"] == "text/plain"
    assert ("k", "v") in message.properties["user_property"]

    await receiver.ack(message)


async def test_order_of_messages_is_kept(broker_url, make_client, topic):
    receiver = await subscriber(make_client, broker_url, topic, qos=1)
    sender = make_client("publisher")
    await sender.connect(broker_url)

    for i in range(100):
        await sender.publish(topic, b"%d" % i, qos=1)

    for i in range(100):
        message = await receive(receiver)
        assert message.payload == b"%d" % i
        await receiver.ack(message)


async def test_retained_message_is_sent_to_new_subscriber(
    broker_url, make_client, topic
):
    sender = make_client("publisher")
    await sender.connect(broker_url)
    await sender.publish(topic, b"last value", qos=1, retain=True)

    receiver = await subscriber(make_client, broker_url, topic, qos=1)
    message = await receive(receiver)

    assert (message.payload, message.retain) == (b"last value", True)
    await receiver.ack(message)

    # remove the retained message
    await sender.publish(topic, b"", qos=1, retain=True)


async def test_not_acknowledged_message_is_delivered_again(
    broker_url, make_client, proxy: Proxy, topic
):
    receiver = make_client("subscriber")
    connected = connects(receiver)
    await receiver.connect(proxy.url, properties=SESSION)
    await receiver.subscribe([(topic, 1)])
    await connected.get()

    sender = make_client("publisher")
    await sender.connect(broker_url)
    await sender.publish(topic, b"payload", qos=1)

    # received, but the processing didn't finish: no ack
    first = await receive(receiver)
    assert not first.dup

    proxy.cut()

    # the broker kept the session and sends the message again
    connack = await asyncio.wait_for(connected.get(), TIMEOUT)
    assert connack.session_present

    again = await receive(receiver)
    assert (again.payload, again.dup) == (b"payload", True)
    await receiver.ack(again)


async def test_publish_waits_while_the_client_reconnects(
    broker_url, make_client, proxy: Proxy, topic
):
    receiver = await subscriber(make_client, broker_url, topic, qos=1)

    sender = make_client("publisher")
    connected = connects(sender)
    await sender.connect(proxy.url, properties=SESSION)
    await connected.get()

    # the network is down: the connection breaks and reconnect fails
    proxy.down()
    proxy.cut()

    publish = asyncio.create_task(sender.publish(topic, b"payload", qos=1))
    await asyncio.sleep(0.2)
    assert not publish.done()

    proxy.up()

    result = await asyncio.wait_for(publish, TIMEOUT)
    assert result.reason_code < 0x80

    message = await receive(receiver)
    assert message.payload == b"payload"
    await receiver.ack(message)


async def test_subscriptions_are_restored_when_the_session_is_lost(
    broker_url, make_client, proxy: Proxy, topic
):
    # without session expiry the broker drops the session with the connection
    receiver = make_client("subscriber")
    connected = connects(receiver)
    await receiver.connect(proxy.url)
    await receiver.subscribe([(topic, 1)])
    await connected.get()

    proxy.cut()

    connack = await asyncio.wait_for(connected.get(), TIMEOUT)
    assert not connack.session_present

    # on_connect is called after the subscriptions are restored
    sender = make_client("publisher")
    await sender.connect(broker_url)
    await sender.publish(topic, b"after reconnect", qos=1)

    message = await receive(receiver)
    assert message.payload == b"after reconnect"
    await receiver.ack(message)


async def test_will_message_is_published_when_the_connection_is_lost(
    broker_url, make_client, proxy: Proxy, topic
):
    watcher = await subscriber(make_client, broker_url, topic, qos=1)

    client = make_client("device", reconnect=None)
    await client.connect(
        proxy.url, will=WillMessage(topic, b"offline", qos=1, retain=False)
    )

    proxy.cut()

    message = await receive(watcher)
    assert message.payload == b"offline"
    await watcher.ack(message)


async def test_will_message_isnt_published_after_disconnect(
    broker_url, make_client, topic
):
    watcher = await subscriber(make_client, broker_url, topic, qos=1)

    client = make_client("device")
    await client.connect(broker_url, will=WillMessage(topic, b"offline", qos=1))
    await client.disconnect()

    # the next message on the topic is the marker, not the will message
    marker = make_client("publisher")
    await marker.connect(broker_url)
    await marker.publish(topic, b"marker", qos=1)

    message = await receive(watcher)
    assert message.payload == b"marker"
    await watcher.ack(message)


async def test_graceful_disconnect_delivers_messages_in_flight(
    broker_url, make_client, topic
):
    count = 200
    receiver = await subscriber(make_client, broker_url, topic, qos=1)

    sender = make_client("publisher")
    await sender.connect(broker_url)

    # publish calls in flight while the client disconnects
    publishes = [
        asyncio.create_task(sender.publish(topic, b"%d" % i, qos=1))
        for i in range(count)
    ]
    await asyncio.sleep(0)

    left = await asyncio.wait_for(sender.disconnect(timeout=TIMEOUT), TIMEOUT)
    assert left == 0

    await asyncio.gather(*publishes)

    received = set()

    while len(received) < count:
        message = await receive(receiver)
        received.add(message.payload)
        await receiver.ack(message)

    assert received == {b"%d" % i for i in range(count)}


async def test_disconnect_ends_the_iteration_over_messages(
    broker_url, make_client, topic
):
    receiver = await subscriber(make_client, broker_url, topic)

    async def read_all() -> list[bytes]:
        return [message.payload async for message in receiver.messages]

    reader = asyncio.create_task(read_all())
    await asyncio.sleep(0.05)
    await receiver.disconnect()

    assert await asyncio.wait_for(reader, TIMEOUT) == []


async def test_async_with_delivers_messages_in_flight_on_exit(
    broker_url, make_client, topic
):
    count = 100
    receiver = await subscriber(make_client, broker_url, topic, qos=1)

    async with MQTTClient(f"zenmqtt-publisher-{uuid.uuid4().hex[:12]}") as sender:
        await sender.connect(broker_url)

        publishes = [
            asyncio.create_task(sender.publish(topic, b"%d" % i, qos=1))
            for i in range(count)
        ]
        await asyncio.sleep(0)

    # the exit waited for the acknowledgements of all messages in flight
    assert all(publish.done() for publish in publishes)
    await asyncio.gather(*publishes)

    received = set()

    while len(received) < count:
        message = await receive(receiver)
        received.add(message.payload)
        await receiver.ack(message)

    assert received == {b"%d" % i for i in range(count)}
