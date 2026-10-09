import asyncio
import struct
import time
from typing import Callable, Optional

from benchmarks.clients import BenchClient
from benchmarks.stats import Result, percentiles
from zenmqtt.connection import MQTTConnection, MQTTConnectionTransport
from zenmqtt.metrics import MetricsCollector
from zenmqtt.mqtt.packet import PacketType
from zenmqtt.mqtt.protocol import MQTTProtocol
from zenmqtt.mqtt.publish import pack_publish_packet
from zenmqtt.mqtt.session import InMemorySession

TOPIC = "zenmqtt/benchmarks"
# timeout for the delivery of all messages in broker scenarios, seconds
DELIVERY_TIMEOUT = 60

_CONNACK = bytes([PacketType.CONNACK << 4, 3, 0, 0, 0])
_TIMESTAMP = struct.Struct("!Q")


class MemoryTransport(MQTTConnectionTransport):
    """Serves prepared bytes like a socket, writes are dropped."""

    def __init__(self) -> None:
        self._data = bytearray()
        self._offset = 0
        self._ready = asyncio.Event()
        self._closing = False

    def feed(self, data: bytes) -> None:
        self._data += data
        self._ready.set()

    async def read(self, size: int = -1) -> bytes:
        while self._offset >= len(self._data):
            if self._closing:
                return b""

            self._ready.clear()
            await self._ready.wait()

        end = len(self._data) if size < 0 else self._offset + size
        chunk = bytes(self._data[self._offset : end])
        self._offset += len(chunk)
        return chunk

    async def write(self, payload: bytes) -> None:
        pass

    def is_closing(self) -> bool:
        return self._closing

    async def close(self) -> None:
        self._closing = True
        self._ready.set()


async def in_memory_receive(
    messages: int,
    payload_size: int,
    qos: int,
    metrics: Optional[MetricsCollector] = None,
    label: str = "",
) -> Result:
    """
    Parsing and delivery of incoming messages without network and broker:
    shows the cost of the client itself.
    """
    queue: asyncio.Queue = asyncio.Queue()
    protocol = MQTTProtocol(queue, InMemorySession(), metrics)
    transport = MemoryTransport()
    protocol.set_connection(MQTTConnection(transport))

    transport.feed(_CONNACK)
    await protocol.connect("bench", None, None, properties={"receive_maximum": 65535})

    payload = b"x" * payload_size
    # unique packet identifiers: all messages may be in flight at once
    packets = b"".join(
        pack_publish_packet(
            (index % 65535) + 1 if qos else 0, TOPIC, payload, qos, False, False, {}
        )
        for index in range(messages)
    )

    started = time.perf_counter()
    transport.feed(packets)

    for _ in range(messages):
        message = await queue.get()
        await protocol.ack(message)

    elapsed = time.perf_counter() - started

    await protocol.disconnect(reason=0)

    return Result(
        scenario="in-memory receive",
        client="zenmqtt",
        qos=qos,
        messages=messages,
        payload=payload_size,
        throughput=messages / elapsed,
        note=label,
    )


async def publish(
    factory: Callable[[str], BenchClient],
    url: str,
    messages: int,
    payload_size: int,
    qos: int,
    concurrency: int,
) -> Result:
    """
    Publish throughput with `concurrency` calls in flight; for QoS 1/2 the
    latency is measured until PUBACK/PUBCOMP.
    """
    client = factory("bench-publisher")
    await client.connect(url)

    payload = b"x" * payload_size
    latencies: list[float] = []
    limit = asyncio.Semaphore(concurrency)

    async def publish_one() -> None:
        async with limit:
            sent_at = time.perf_counter()
            await client.publish(TOPIC, payload, qos)
            latencies.append(time.perf_counter() - sent_at)

    started = time.perf_counter()
    await asyncio.gather(*(publish_one() for _ in range(messages)))
    elapsed = time.perf_counter() - started

    await client.disconnect()

    return Result(
        scenario="publish",
        client=client.name,
        qos=qos,
        messages=messages,
        payload=payload_size,
        throughput=messages / elapsed,
        **(percentiles(latencies) if qos else {}),
        note=f"{concurrency} in flight",
    )


async def end_to_end(
    factory: Callable[[str], BenchClient],
    url: str,
    messages: int,
    payload_size: int,
    qos: int,
    concurrency: int,
) -> Result:
    """
    Publisher -> broker -> subscriber with the same client library; latency
    from the publish call to the delivery to the application.
    """
    subscriber = factory("bench-subscriber")
    await subscriber.connect(url)
    await subscriber.subscribe(TOPIC, qos)

    publisher = factory("bench-publisher")
    await publisher.connect(url)

    padding = b"x" * max(payload_size - _TIMESTAMP.size, 0)
    latencies: list[float] = []

    async def receive() -> None:
        async for payload in subscriber.payloads():
            (sent_at,) = _TIMESTAMP.unpack_from(payload)
            latencies.append((time.perf_counter_ns() - sent_at) / 1e9)

            if len(latencies) == messages:
                return

    receiver = asyncio.create_task(receive())
    limit = asyncio.Semaphore(concurrency)

    async def publish_one() -> None:
        async with limit:
            payload = _TIMESTAMP.pack(time.perf_counter_ns()) + padding
            await publisher.publish(TOPIC, payload, qos)

    started = time.perf_counter()
    await asyncio.gather(*(publish_one() for _ in range(messages)))

    try:
        await asyncio.wait_for(receiver, DELIVERY_TIMEOUT)
    except asyncio.TimeoutError:
        pass

    elapsed = time.perf_counter() - started

    await publisher.disconnect()
    await subscriber.disconnect()

    received = len(latencies)
    note = f"{concurrency} in flight"

    if received < messages:
        note += f", received {received}"

    return Result(
        scenario="end-to-end",
        client=publisher.name,
        qos=qos,
        messages=messages,
        payload=max(payload_size, _TIMESTAMP.size),
        throughput=received / elapsed,
        **percentiles(latencies),
        note=note,
    )
