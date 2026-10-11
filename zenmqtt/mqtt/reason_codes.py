from enum import IntEnum
from typing import Final, Optional


class ReasonCode(IntEnum):
    """
    Reason codes of MQTT 5.0 (section 2.4). A value is an int, so it can be
    passed where a reason code is expected and compared with ints.

    Some values have several names in the specification, depending on the
    packet: 0x00 is "Success", "Normal disconnection" and "Granted QoS 0".
    They are aliases of one member, which is shown as SUCCESS.

    A value which isn't in the specification, e.g. sent by a broker which
    breaks it, gives a member named like UNKNOWN_0x42 instead of ValueError.
    """

    SUCCESS = 0x00
    NORMAL_DISCONNECTION = 0x00
    GRANTED_QOS_0 = 0x00
    GRANTED_QOS_1 = 0x01
    GRANTED_QOS_2 = 0x02
    DISCONNECT_WITH_WILL_MESSAGE = 0x04
    NO_MATCHING_SUBSCRIBERS = 0x10
    NO_SUBSCRIPTION_EXISTED = 0x11
    CONTINUE_AUTHENTICATION = 0x18
    RE_AUTHENTICATE = 0x19
    UNSPECIFIED_ERROR = 0x80
    MALFORMED_PACKET = 0x81
    PROTOCOL_ERROR = 0x82
    IMPLEMENTATION_SPECIFIC_ERROR = 0x83
    UNSUPPORTED_PROTOCOL_VERSION = 0x84
    CLIENT_IDENTIFIER_NOT_VALID = 0x85
    BAD_USER_NAME_OR_PASSWORD = 0x86
    NOT_AUTHORIZED = 0x87
    SERVER_UNAVAILABLE = 0x88
    SERVER_BUSY = 0x89
    BANNED = 0x8A
    SERVER_SHUTTING_DOWN = 0x8B
    BAD_AUTHENTICATION_METHOD = 0x8C
    KEEP_ALIVE_TIMEOUT = 0x8D
    SESSION_TAKEN_OVER = 0x8E
    TOPIC_FILTER_INVALID = 0x8F
    TOPIC_NAME_INVALID = 0x90
    PACKET_IDENTIFIER_IN_USE = 0x91
    PACKET_IDENTIFIER_NOT_FOUND = 0x92
    RECEIVE_MAXIMUM_EXCEEDED = 0x93
    TOPIC_ALIAS_INVALID = 0x94
    PACKET_TOO_LARGE = 0x95
    MESSAGE_RATE_TOO_HIGH = 0x96
    QUOTA_EXCEEDED = 0x97
    ADMINISTRATIVE_ACTION = 0x98
    PAYLOAD_FORMAT_INVALID = 0x99
    RETAIN_NOT_SUPPORTED = 0x9A
    QOS_NOT_SUPPORTED = 0x9B
    USE_ANOTHER_SERVER = 0x9C
    SERVER_MOVED = 0x9D
    SHARED_SUBSCRIPTIONS_NOT_SUPPORTED = 0x9E
    CONNECTION_RATE_EXCEEDED = 0x9F
    MAXIMUM_CONNECT_TIME = 0xA0
    SUBSCRIPTION_IDENTIFIERS_NOT_SUPPORTED = 0xA1
    WILDCARD_SUBSCRIPTIONS_NOT_SUPPORTED = 0xA2

    @property
    def is_failure(self) -> bool:
        """Reason codes from 0x80 indicate failure."""
        return self >= FAILURE_REASON_CODE

    @classmethod
    def _missing_(cls, value: object) -> Optional["ReasonCode"]:
        if not isinstance(value, int) or not 0 <= value <= 0xFF:
            return None

        member = int.__new__(cls, value)
        member._name_ = f"UNKNOWN_0x{value:02X}"
        member._value_ = value
        return member


# every byte value: a reason code read from a packet is turned into the enum by
# indexing, several times faster than ReasonCode(value); unknown values get one
# member each
_BY_BYTE: Final[tuple[ReasonCode, ...]] = tuple(
    ReasonCode(value) for value in range(0x100)
)


def to_reason_code(value: int) -> ReasonCode:
    """A reason code read from a packet (one byte)."""
    return _BY_BYTE[value]


def to_reason_codes(data: bytes) -> list[ReasonCode]:
    """Reason codes read from a packet, one per byte."""
    return list(map(_BY_BYTE.__getitem__, data))


# reason codes >= 0x80 indicate failure
FAILURE_REASON_CODE: Final[int] = 0x80
# DISCONNECT reason code when a valid packet can't be processed, e.g. the
# session storage failed
IMPLEMENTATION_SPECIFIC_ERROR: Final[int] = 0x83
# PUBREL/PUBCOMP reason code for an unknown packet identifier
PACKET_IDENTIFIER_NOT_FOUND: Final[int] = 0x92
