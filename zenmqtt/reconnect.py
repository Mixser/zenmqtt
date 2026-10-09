import random
from dataclasses import dataclass
from typing import Final, Iterator, Optional

# CONNACK reason codes which mean that a retry can't help: the client has to
# change its configuration (credentials, client id, will, ...)
NON_RETRYABLE_CONNACK_REASON_CODES: Final[frozenset[int]] = frozenset(
    {
        0x81,  # Malformed Packet
        0x82,  # Protocol Error
        0x84,  # Unsupported Protocol Version
        0x85,  # Client Identifier not valid
        0x86,  # Bad User Name or Password
        0x87,  # Not authorized
        0x8A,  # Banned
        0x8C,  # Bad authentication method
        0x90,  # Topic Name invalid (will topic)
        0x95,  # Packet too large
        0x99,  # Payload format invalid (will payload)
        0x9A,  # Retain not supported (will retain)
        0x9B,  # QoS not supported (will QoS)
        0x9C,  # Use another server
        0x9D,  # Server moved
    }
)

# DISCONNECT reason codes of the server after which the client doesn't reconnect
NON_RETRYABLE_DISCONNECT_REASON_CODES: Final[frozenset[int]] = frozenset(
    {
        0x87,  # Not authorized
        # another client connected with the same client id: reconnecting would
        # take the session back, and both clients would kick each other forever
        0x8E,  # Session taken over
        0x9C,  # Use another server
        0x9D,  # Server moved
    }
)


@dataclass(frozen=True, slots=True)
class ReconnectPolicy:
    """
    Exponential backoff between reconnect attempts: the first attempt is made
    after initial_delay, every next delay is multiplied by multiplier up to
    max_delay. Each delay is reduced by a random part up to jitter (0.5 means
    up to 50%), so many clients don't reconnect to a restarted server at the
    same moment.

    Times are in seconds.
    """

    initial_delay: float = 1.0
    max_delay: float = 60.0
    multiplier: float = 2.0
    jitter: float = 0.5
    # None means the client never gives up
    max_attempts: Optional[int] = None
    # time for TCP/TLS connect and CONNACK of one attempt
    connect_timeout: float = 10.0

    def __post_init__(self) -> None:
        if self.initial_delay < 0 or self.max_delay < self.initial_delay:
            raise ValueError("Expected 0 <= initial_delay <= max_delay")

        if self.multiplier < 1:
            raise ValueError("Expected multiplier >= 1")

        if not 0 <= self.jitter <= 1:
            raise ValueError("Expected 0 <= jitter <= 1")

        if self.max_attempts is not None and self.max_attempts < 1:
            raise ValueError("Expected max_attempts >= 1 or None")

        if self.connect_timeout <= 0:
            raise ValueError("Expected connect_timeout > 0")

    def delays(self) -> Iterator[float]:
        """Delays before each attempt."""
        delay = self.initial_delay
        attempt = 0

        while self.max_attempts is None or attempt < self.max_attempts:
            yield delay * (1 - self.jitter * random.random())

            attempt += 1
            delay = min(delay * self.multiplier, self.max_delay)


DEFAULT_RECONNECT_POLICY: Final[ReconnectPolicy] = ReconnectPolicy()
