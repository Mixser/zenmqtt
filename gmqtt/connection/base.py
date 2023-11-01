from typing import Protocol


class MQTTConnectionTransport(Protocol):
    async def write(self, payload: bytes) -> None:
        ...

    async def read(self, size: int = -1) -> bytes:
        ...

    def is_closing(self) -> bool:
        ...

    async def close(self) -> None:
        ...


class MQTTConnection:
    def __init__(
        self,
        transport: MQTTConnectionTransport,
    ) -> None:
        self._transport = transport

    async def write(self, payload: bytes) -> None:
        await self._transport.write(payload)

    async def disconnect(self) -> None:
        await self._transport.close()

    async def read(self, size: int) -> bytes:
        return await self._transport.read(size)

    def is_closing(self) -> bool:
        return self._transport.is_closing()
