import asyncio
import logging
from contextlib import AbstractContextManager
from typing import Optional

import pytest

from tests.unit.mqtt.protocol.helpers import (
    TIMEOUT,
    FakeTransport,
    expect_publish,
    pack_connack,
    pack_publish,
)
from tests.unit.test_client import connect
from zenmqtt.client import MQTTClient
from zenmqtt.instrumentation.tracing import PublishTrace, Tracing, guard_tracing
from zenmqtt.mqtt.publish import (
    PublishAcknowledgement,
    PublishProperties,
    PublishResult,
    pack_puback_packet,
)


class FailingTrace(PublishTrace):
    def end(
        self,
        result: Optional[PublishAcknowledgement],
        error: Optional[BaseException],
    ) -> None:
        raise RuntimeError("end failed")


class FailingContext(AbstractContextManager[None]):
    def __init__(self, fail_on: str) -> None:
        self.fail_on = fail_on

    def __enter__(self) -> None:
        if self.fail_on == "enter":
            raise RuntimeError("enter failed")

    def __exit__(self, *args: object) -> bool:
        if self.fail_on == "exit":
            raise RuntimeError("exit failed")

        # a broken implementation which would swallow errors of the processing
        return True


class FailingTracing(Tracing):
    def __init__(self, fail_on: str) -> None:
        self.fail_on = fail_on

    def start_publish(
        self,
        client_id: str,
        topic: str,
        payload: bytes,
        qos: int,
        retain: bool,
        properties: PublishProperties,
    ) -> PublishTrace:
        if self.fail_on == "start":
            raise RuntimeError("start failed")

        return FailingTrace(properties)

    def processing(
        self, client_id: str, message: PublishResult
    ) -> AbstractContextManager[None]:
        if self.fail_on == "processing":
            raise RuntimeError("processing failed")

        return FailingContext(self.fail_on)


async def connected_client(tracing: Tracing) -> tuple[MQTTClient, FakeTransport]:
    client = MQTTClient("client-id", reconnect=None, tracing=tracing)
    transport = FakeTransport()
    await connect(client, transport, pack_connack())

    return client, transport


def test_none_and_guarded_tracing_arent_wrapped():
    assert guard_tracing(None) is None

    guarded = guard_tracing(FailingTracing("start"))
    assert guard_tracing(guarded) is guarded


@pytest.mark.parametrize("fail_on", ("start", "end"))
async def test_publish_doesnt_fail_because_of_tracing(fail_on, caplog):
    client, transport = await connected_client(FailingTracing(fail_on))

    with caplog.at_level(logging.ERROR, logger="zenmqtt.instrumentation"):
        task = asyncio.create_task(client.publish("a/b", b"payload", qos=1))
        publish = await expect_publish(transport)
        transport.feed(pack_puback_packet(publish.packet_identifier, 0, {}))

        # acknowledged by the server: the publish succeeds
        assert (await asyncio.wait_for(task, TIMEOUT)).reason_code == 0

    assert "mqtt_tracing.hook_error" in caplog.text
    await client.disconnect()


async def test_error_of_publish_isnt_hidden_by_tracing():
    client, _ = await connected_client(FailingTracing("end"))

    with pytest.raises(ValueError):
        await client.publish("a/b", b"payload", qos=3)

    await client.disconnect()


@pytest.mark.parametrize("fail_on", ("processing", "enter", "exit"))
async def test_processing_isnt_affected_by_tracing(fail_on, caplog):
    client, transport = await connected_client(FailingTracing(fail_on))
    transport.feed(pack_publish(1, qos=1))
    message = await asyncio.wait_for(anext(client.messages), TIMEOUT)

    with caplog.at_level(logging.ERROR, logger="zenmqtt.instrumentation"):
        with client.processing(message):
            processed = True

    assert processed
    assert "mqtt_tracing.hook_error" in caplog.text

    # an error of the processing is never swallowed by the tracing context
    with pytest.raises(KeyError):
        with client.processing(message):
            raise KeyError("processing failed")

    await client.ack(message)
    await client.disconnect()
