from logging import getLogger
from typing import Awaitable, Callable, Final, Sequence

from zenmqtt.mqtt.reason_codes import FAILURE_REASON_CODE
from zenmqtt.mqtt.subscribe import (
    Subscription,
    SubscriptionProperties,
    SubscriptionRequest,
    to_subscription,
)

logger = getLogger(__name__)

# UNSUBACK reason code: the topic wasn't subscribed, it's not an error
_NO_SUBSCRIPTION_EXISTED: Final[int] = 0x11

Subscribe = Callable[
    [Sequence[Subscription], SubscriptionProperties], Awaitable[object]
]


class SubscriptionRegistry:
    """
    Subscriptions accepted by the server; they are restored after reconnect if
    the server lost the session.
    """

    def __init__(self) -> None:
        self._subscriptions: dict[str, tuple[Subscription, SubscriptionProperties]] = {}

    def add(
        self,
        requests: Sequence[SubscriptionRequest],
        properties: SubscriptionProperties,
        reason_codes: Sequence[int],
    ) -> None:
        """Remembers the subscriptions which SUBACK accepted."""
        for request, reason_code in zip(requests, reason_codes):
            if reason_code < FAILURE_REASON_CODE:
                subscription = to_subscription(request)
                self._subscriptions[subscription.topic] = (subscription, properties)

    def remove(self, topics: Sequence[str], reason_codes: Sequence[int]) -> None:
        """Forgets the subscriptions which UNSUBACK removed."""
        for topic, reason_code in zip(topics, reason_codes):
            if (
                reason_code < FAILURE_REASON_CODE
                or reason_code == _NO_SUBSCRIPTION_EXISTED
            ):
                self._subscriptions.pop(topic, None)

    async def restore(self, subscribe: Subscribe) -> None:
        """
        Subscribes again, one SUBSCRIBE per group of subscriptions with the same
        properties. Errors are logged, the other groups are restored anyway.
        """
        groups: list[tuple[SubscriptionProperties, list[Subscription]]] = []

        for subscription, properties in self._subscriptions.values():
            for group_properties, subscriptions in groups:
                if group_properties == properties:
                    subscriptions.append(subscription)
                    break
            else:
                groups.append((properties, [subscription]))

        for properties, subscriptions in groups:
            try:
                await subscribe(subscriptions, properties)
            except Exception as exc:
                logger.error(
                    "mqtt_client.restore_subscriptions.failed: %s",
                    [subscription.topic for subscription in subscriptions],
                    exc_info=exc,
                )
