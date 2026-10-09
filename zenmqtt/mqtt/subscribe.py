import struct
from dataclasses import dataclass
from typing import Final, Sequence, Tuple, TypedDict, Union, cast

from zenmqtt.mqtt.packet import BytesReader, FixedHeader, PacketType
from zenmqtt.mqtt.properties import Properties, pack_properties, parse_properties
from zenmqtt.mqtt.utils import pack_fixed_header, pack_str16


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
    parts = [
        struct.pack("!H", packet_identifier),
        pack_properties(cast(Properties, properties)),
    ]

    for request in topics:
        subscription = to_subscription(request)
        parts += (
            pack_str16(subscription.topic),
            struct.pack("!B", pack_subscription_options(subscription)),
        )

    body = b"".join(parts)

    return pack_fixed_header(PacketType.SUBSCRIBE, 0x2, len(body)) + body


def parse_suback_packet(
    fixed_header: FixedHeader, reader: BytesReader
) -> SubscribeResult:
    packet_identifier, properties, reason_codes = _parse_packet(fixed_header, reader)

    return SubscribeResult(
        packet_identifier=packet_identifier,
        properties=cast(SubackProperties, properties),
        reason_codes=reason_codes,
    )


def pack_unsubscribe_packet(
    packet_identifier: int, topics: Sequence[str], properties: UnsubscribeProperties
) -> bytes:
    body = b"".join(
        (
            struct.pack("!H", packet_identifier),
            pack_properties(cast(Properties, properties)),
            *map(pack_str16, topics),
        )
    )

    return pack_fixed_header(PacketType.UNSUBSCRIBE, 0x2, len(body)) + body


def parse_unsubscribe_packet(
    fixed_header: FixedHeader, reader: BytesReader
) -> UnsubscribeResult:
    packet_identifier, properties, reason_codes = _parse_packet(fixed_header, reader)

    return UnsubscribeResult(
        packet_identifier=packet_identifier,
        properties=cast(UnsubscribeProperties, properties),
        reason_codes=reason_codes,
    )


def _parse_packet(
    fixed_header: FixedHeader, reader: BytesReader
) -> Tuple[int, Properties, Sequence[int]]:
    packet_identifier = reader.read_uint16()
    properties = parse_properties(reader)
    # one reason code per topic
    reason_codes = list(reader.read_rest())

    return packet_identifier, properties, reason_codes
