import itertools
import struct
from dataclasses import dataclass
from typing import Final, Sequence, Tuple, TypedDict, Union, cast

from zenmqtt.mqtt.packet import (
    AsyncDataSequence,
    FixedHeader,
    PacketType,
    parse_variable_byte_integer,
)
from zenmqtt.mqtt.properties import Properties, pack_properties, parse_properties
from zenmqtt.mqtt.utils import pack_str16, pack_variable_byte_integer, read


class SubscriptionProperties(TypedDict, total=False):
    subscription_identifier: int
    user_property: Sequence[Tuple[str, str]]


class SubackProperties(TypedDict, total=False):
    reason_string: str
    user_property: Sequence[Tuple[str, str]]


class UnsubscribeProperties(TypedDict, total=False):
    user_property: Sequence[Tuple[str, str]]


@dataclass(frozen=True)
class SubscribeResult:
    __slots__ = ("packet_identifier", "properties", "reason_codes")

    packet_identifier: int
    properties: SubackProperties
    reason_codes: Sequence[int]


@dataclass(frozen=True)
class UnsubscribeResult:
    __slots__ = ("packet_identifier", "properties", "reason_codes")

    packet_identifier: int
    properties: UnsubscribeProperties
    reason_codes: Sequence[int]


@dataclass(frozen=True, slots=True)
class Subscription:
    """
    Topic filter with MQTT 5 subscription options.

    :param no_local: don't receive messages published by this client
    :param retain_as_published: keep the RETAIN flag of forwarded messages
    :param retain_handling: 0 - send retained messages on subscribe,
        1 - only if the subscription is new, 2 - don't send them
    """

    topic: str
    qos: int = 0
    no_local: bool = False
    retain_as_published: bool = False
    retain_handling: int = 0


# (topic, qos) is the short form of Subscription(topic, qos)
SubscriptionRequest = Union[Subscription, Tuple[str, int]]

_SHARED_SUBSCRIPTION_PREFIX: Final[str] = "$share/"

# subscription options byte
_NO_LOCAL_FLAG: Final[int] = 0x04
_RETAIN_AS_PUBLISHED_FLAG: Final[int] = 0x08
_RETAIN_HANDLING_SHIFT: Final[int] = 4


def pack_subscription_options(subscription: Subscription) -> int:
    if subscription.qos not in (0, 1, 2):
        raise ValueError(f"Invalid QoS: {subscription.qos}")

    if subscription.retain_handling not in (0, 1, 2):
        raise ValueError(f"Invalid retain handling: {subscription.retain_handling}")

    if subscription.no_local and subscription.topic.startswith(
        _SHARED_SUBSCRIPTION_PREFIX
    ):
        raise ValueError("No Local can't be used with a shared subscription")

    options = subscription.qos | subscription.retain_handling << _RETAIN_HANDLING_SHIFT

    if subscription.no_local:
        options |= _NO_LOCAL_FLAG

    if subscription.retain_as_published:
        options |= _RETAIN_AS_PUBLISHED_FLAG

    return options


def to_subscription(request: SubscriptionRequest) -> Subscription:
    return request if isinstance(request, Subscription) else Subscription(*request)


def pack_subscription_packet(
    packet_identifier: int,
    topics: Sequence[SubscriptionRequest],
    properties: SubscriptionProperties,
) -> bytes:
    length = 2

    topics_bytes = bytearray()

    for request in topics:
        subscription = to_subscription(request)

        topics_bytes.extend(
            itertools.chain(
                pack_str16(subscription.topic),
                struct.pack("!B", pack_subscription_options(subscription)),
            )
        )

    length += len(topics_bytes)

    properties_bytes = pack_properties(cast(Properties, properties))
    length += len(properties_bytes)

    packet = bytearray([(PacketType.SUBSCRIBE << 4) | 0x2])

    packet.extend(
        itertools.chain(
            pack_variable_byte_integer(length),
            struct.pack("!H", packet_identifier),
            properties_bytes,
            topics_bytes,
        )
    )

    return bytes(packet)


async def parse_suback_packet(
    fixed_header: FixedHeader, stream: AsyncDataSequence
) -> SubscribeResult:
    packet_identifier, properties, reason_codes = await _parse_packet(
        fixed_header, stream
    )

    return SubscribeResult(
        packet_identifier=packet_identifier,
        properties=cast(SubackProperties, properties),
        reason_codes=reason_codes,
    )


def pack_unsubscribe_packet(
    packet_identifier: int, topics: Sequence[str], properties: UnsubscribeProperties
) -> bytes:
    length = 2

    topic_bytes = bytearray()
    for topic in topics:
        topic_bytes.extend(pack_str16(topic))

    length += len(topic_bytes)

    properties_bytes = pack_properties(cast(Properties, properties))
    length += len(properties_bytes)

    packet = bytearray([(PacketType.UNSUBSCRIBE << 4) | 0x2])

    packet.extend(
        itertools.chain(
            pack_variable_byte_integer(length),
            struct.pack("!H", packet_identifier),
            properties_bytes,
            topic_bytes,
        )
    )

    return bytes(packet)


async def parse_unsubscribe_packet(
    fixed_header: FixedHeader, stream: AsyncDataSequence
) -> UnsubscribeResult:
    packet_identifier, properties, reason_codes = await _parse_packet(
        fixed_header, stream
    )

    return UnsubscribeResult(
        packet_identifier=packet_identifier,
        properties=cast(UnsubscribeProperties, properties),
        reason_codes=reason_codes,
    )


async def _parse_packet(
    fixed_header: FixedHeader,
    stream: AsyncDataSequence,
) -> Tuple[int, Properties, Sequence[int]]:
    packet_identifier, *_ = struct.unpack("!H", await read(stream, 2))
    property_length, length = await parse_variable_byte_integer(stream)

    properties = await parse_properties(stream, property_length)

    payload_length = fixed_header.length - length - property_length - 2
    reason_codes = []

    for _ in range(payload_length):
        reason_code, *_ = struct.unpack("!B", await anext(stream))
        reason_codes.append(reason_code)

    return (
        packet_identifier,
        properties,
        reason_codes,
    )
