from ssl import SSLContext
from typing import Awaitable, Callable, Optional
from urllib.parse import ParseResult, urlparse

from .base import ConnectionOptions, MQTTConnection, MQTTConnectionTransport
from .tcp import build_tcp_connection_transport, build_tls_connection_transport

__all__ = [
    "ConnectionOptions",
    "MQTTConnection",
    "MQTTConnectionTransport",
    "create_connection",
    "register_implementation",
]

ConnectionFactory = Callable[
    [ParseResult, ConnectionOptions], Awaitable[MQTTConnectionTransport]
]

_CONNECTIO_IMPLEMENTATION_MAP: dict[str, ConnectionFactory] = {
    "tcp": build_tcp_connection_transport,
    "mqtt": build_tcp_connection_transport,
    "mqtts": build_tls_connection_transport,
    "ssl": build_tls_connection_transport,
}

# schemes which encrypt the connection, the only ones accepting an SSL context
_TLS_SCHEMES = {"mqtts", "ssl"}


def register_implementation(scheme: str, factory: ConnectionFactory) -> None:
    _CONNECTIO_IMPLEMENTATION_MAP[scheme] = factory


async def create_connection(
    url: str, ssl: Optional[SSLContext] = None
) -> MQTTConnection:
    """
    :param url: e.g. tcp://localhost:1883 or mqtts://broker:8883, the port is
        optional: 1883 for tcp:// and mqtt://, 8883 for mqtts:// and ssl://
    :param ssl: context for mqtts:// and ssl://, the default one verifies the
        server certificate with the system CA certificates
    """
    parsed_url = urlparse(url)

    if not parsed_url.hostname:
        raise ValueError(f"Invalid URL, host is missing: {url}")

    if not (factory := _CONNECTIO_IMPLEMENTATION_MAP.get(parsed_url.scheme)):
        raise ValueError(f"Unsupported URL scheme: {parsed_url.scheme}")

    options: ConnectionOptions = {}

    if ssl is not None:
        # a context with plain tcp:// would silently send data unencrypted
        if parsed_url.scheme not in _TLS_SCHEMES:
            raise ValueError(
                f"SSL context requires mqtts:// or ssl:// URL, got {parsed_url.scheme}"
            )

        options["ssl"] = ssl

    transport = await factory(parsed_url, options)

    return MQTTConnection(transport)
