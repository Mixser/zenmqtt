import asyncio
import ssl
from unittest.mock import AsyncMock, MagicMock, patch

import pytest

from zenmqtt.connection import (
    MQTTConnection,
    create_connection,
    register_implementation,
)
from zenmqtt.connection.tcp import TCPConnectionTransport


@pytest.fixture
def open_connection():
    with patch(
        "zenmqtt.connection.tcp.asyncio.open_connection",
        AsyncMock(return_value=(MagicMock(), MagicMock())),
    ) as mock:
        yield mock


@pytest.mark.parametrize(
    "url, expected_port",
    (
        ("tcp://broker", 1883),
        ("mqtt://broker", 1883),
        ("tcp://broker:1884", 1884),
    ),
)
async def test_tcp_connection(open_connection, url, expected_port):
    connection = await create_connection(url)

    assert isinstance(connection, MQTTConnection)
    open_connection.assert_awaited_once_with(host="broker", port=expected_port)


@pytest.mark.parametrize(
    "url, expected_port",
    (
        ("mqtts://broker", 8883),
        ("ssl://broker", 8883),
        ("mqtts://broker:8884", 8884),
    ),
)
async def test_tls_connection_with_default_context(open_connection, url, expected_port):
    await create_connection(url)

    open_connection.assert_awaited_once()
    kwargs = open_connection.await_args.kwargs

    assert kwargs["host"] == "broker" and kwargs["port"] == expected_port

    context = kwargs["ssl"]
    assert isinstance(context, ssl.SSLContext)
    assert context.verify_mode == ssl.CERT_REQUIRED
    assert context.check_hostname


async def test_tls_connection_with_custom_context(open_connection):
    context = ssl.create_default_context()

    await create_connection("mqtts://broker", ssl=context)

    assert open_connection.await_args.kwargs["ssl"] is context


async def test_ssl_context_with_plain_tcp_is_rejected(open_connection):
    with pytest.raises(ValueError):
        await create_connection("tcp://broker", ssl=ssl.create_default_context())

    open_connection.assert_not_awaited()


@pytest.mark.parametrize("url", ("ws://broker", "broker:1883", "tcp://:1883"))
async def test_invalid_url(open_connection, url):
    with pytest.raises(ValueError):
        await create_connection(url)

    open_connection.assert_not_awaited()


async def test_registered_implementation():
    transport = MagicMock()
    factory = AsyncMock(return_value=transport)

    register_implementation("custom", factory)

    connection = await create_connection("custom://broker:1234")

    [url, options] = factory.await_args.args
    assert (url.hostname, url.port, options) == ("broker", 1234, {})
    assert connection._transport is transport


@pytest.mark.parametrize("can_write_eof", (True, False))
async def test_close(can_write_eof):
    reader, writer = MagicMock(), MagicMock()
    writer.can_write_eof.return_value = can_write_eof
    writer.wait_closed = AsyncMock()

    await TCPConnectionTransport(reader, writer).close()

    reader.feed_eof.assert_called_once()
    # TLS transports raise NotImplementedError on write_eof
    assert writer.write_eof.called is can_write_eof
    writer.close.assert_called_once()
    writer.wait_closed.assert_awaited_once()


async def test_write_waits_while_the_peer_doesnt_read():
    accepted: asyncio.Future[asyncio.StreamWriter] = asyncio.Future()

    # the server accepts the connection and never reads from it
    server = await asyncio.start_server(
        lambda reader, writer: accepted.set_result(writer), "127.0.0.1", 0
    )
    port = server.sockets[0].getsockname()[1]
    reader, writer = await asyncio.open_connection("127.0.0.1", port)
    peer = await asyncio.wait_for(accepted, 1)
    transport = TCPConnectionTransport(reader, writer)
    chunk = bytes(64 * 1024)

    try:
        # 32 MiB is more than the socket buffers of both sides
        for _ in range(512):
            try:
                await asyncio.wait_for(transport.write(chunk), 0.5)
            except TimeoutError:
                break
        else:
            pytest.fail("write didn't wait for the peer")

        # the data waits in the socket buffers, not in the memory of the process
        assert writer.transport.get_write_buffer_size() < 1024 * 1024
    finally:
        writer.transport.abort()
        peer.transport.abort()

        server.close()
        await server.wait_closed()


async def test_write_to_a_lost_connection_doesnt_raise():
    reader, writer = MagicMock(), MagicMock()
    writer.drain = AsyncMock(side_effect=ConnectionResetError("Connection lost"))

    await TCPConnectionTransport(reader, writer).write(b"payload")

    writer.write.assert_called_once_with(b"payload")
