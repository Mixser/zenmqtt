from dataclasses import dataclass
from typing import Final, Optional, Sequence

from gmqtt.exceptions import (
    FeatureNotSupportedError,
    PacketTooLargeError,
    QoSNotSupportedError,
)
from gmqtt.mqtt.connect import ConnackProperties
from gmqtt.mqtt.publish import PublishProperties
from gmqtt.mqtt.subscribe import (
    SubscriptionProperties,
    SubscriptionRequest,
    to_subscription,
)

SHARED_SUBSCRIPTION_PREFIX: Final[str] = "$share/"


@dataclass(frozen=True)
class ServerLimits:
    """
    Limits of the server from CONNACK, absent properties have default values
    defined by the spec.
    """

    __slots__ = (
        "maximum_qos",
        "retain_available",
        "maximum_packet_size",
        "topic_alias_maximum",
        "wildcard_subscription_available",
        "subscription_identifier_available",
        "shared_subscription_available",
    )

    maximum_qos: int
    retain_available: bool
    # None means no limit
    maximum_packet_size: Optional[int]
    # 0 means topic aliases aren't allowed
    topic_alias_maximum: int
    wildcard_subscription_available: bool
    subscription_identifier_available: bool
    shared_subscription_available: bool

    @classmethod
    def from_connack(cls, properties: ConnackProperties) -> "ServerLimits":
        return cls(
            maximum_qos=properties.get("maximum_qos", 2),
            retain_available=properties.get("retain_available", True),
            maximum_packet_size=properties.get("maximum_packet_size"),
            topic_alias_maximum=properties.get("topic_alias_maximum", 0),
            wildcard_subscription_available=properties.get(
                "wildcard_subscription_available", True
            ),
            subscription_identifier_available=properties.get(
                "subscription_identifier_available", True
            ),
            shared_subscription_available=properties.get(
                "shared_subscription_available", True
            ),
        )

    def check_publish(
        self, qos: int, retain: bool, properties: PublishProperties
    ) -> None:
        if qos > self.maximum_qos:
            raise QoSNotSupportedError(
                f"QoS {qos} is higher than server's maximum QoS {self.maximum_qos}"
            )

        if retain and not self.retain_available:
            raise FeatureNotSupportedError(
                "The server doesn't support retained messages"
            )

        if (topic_alias := properties.get("topic_alias")) is not None:
            if not 1 <= topic_alias <= self.topic_alias_maximum:
                raise FeatureNotSupportedError(
                    f"Topic alias {topic_alias} isn't in the range allowed by "
                    f"the server: 1..{self.topic_alias_maximum}"
                )

    def check_subscribe(
        self, topics: Sequence[SubscriptionRequest], properties: SubscriptionProperties
    ) -> None:
        if (
            "subscription_identifier" in properties
            and not self.subscription_identifier_available
        ):
            raise FeatureNotSupportedError(
                "The server doesn't support subscription identifiers"
            )

        for request in topics:
            topic = to_subscription(request).topic

            if (
                topic.startswith(SHARED_SUBSCRIPTION_PREFIX)
                and not self.shared_subscription_available
            ):
                raise FeatureNotSupportedError(
                    f"The server doesn't support shared subscriptions: {topic}"
                )

            if (
                "+" in topic or "#" in topic
            ) and not self.wildcard_subscription_available:
                raise FeatureNotSupportedError(
                    f"The server doesn't support wildcard subscriptions: {topic}"
                )

    def check_packet_size(self, packet: bytes) -> None:
        if (
            self.maximum_packet_size is not None
            and len(packet) > self.maximum_packet_size
        ):
            raise PacketTooLargeError(
                f"Packet size {len(packet)} is bigger than server's maximum "
                f"packet size {self.maximum_packet_size}"
            )


DEFAULT_SERVER_LIMITS: Final[ServerLimits] = ServerLimits.from_connack({})
