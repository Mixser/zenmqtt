from typing import Awaitable, Callable
from urllib.parse import ParseResult, urlparse

from .base import MQTTConnection, MQTTConnectionTransport
from .tcp import build_tcp_connection_transport

__all__ = ["MQTTConnection", "MQTTConnectionTransport", "create_connection"]

_CONNECTIO_IMPLEMENTATION_MAP: dict[
    str, Callable[[ParseResult], Awaitable[MQTTConnectionTransport]]
] = {"tcp": build_tcp_connection_transport}


def register_implementation(
    scheme: str,
    factory: Callable[[ParseResult], Awaitable[MQTTConnectionTransport]],
) -> None:
    _CONNECTIO_IMPLEMENTATION_MAP[scheme] = factory


async def create_connection(url: str) -> MQTTConnection:
    parsed_url = urlparse(url)

    transport = await _CONNECTIO_IMPLEMENTATION_MAP[parsed_url.scheme](parsed_url)

    return MQTTConnection(transport)
