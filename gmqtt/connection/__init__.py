import urllib.parse

from typing import Callable

from .base import MQTTConnection, MQTTConnectionTransport
from .tcp import build_tcp_connection_transport

__all__ = ["MQTTConnection", "MQTTConnectionTransport", "create_connection"]

_CONNECTIO_IMPLEMENTATION_MAP = {
    "tcp": build_tcp_connection_transport
}


def register_implementation(scheme: str, factory: Callable[[str], MQTTConnectionTransport]) -> None:
    _CONNECTIO_IMPLEMENTATION_MAP[scheme] = factory


async def create_connection(url: str) -> MQTTConnection:
    parsed_url = urllib.parse.urlparse(url)

    transport = await _CONNECTIO_IMPLEMENTATION_MAP[parsed_url.scheme](parsed_url)

    return MQTTConnection(transport)
