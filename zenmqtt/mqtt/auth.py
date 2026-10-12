from dataclasses import dataclass
from typing import Sequence, Tuple, TypedDict, cast

from zenmqtt.mqtt.packet import BytesReader, FixedHeader
from zenmqtt.mqtt.properties import parse_properties
from zenmqtt.mqtt.reason_codes import ReasonCode, to_reason_code


class AuthProperties(TypedDict, total=False):
    authentication_method: str
    authentication_data: bytes
    reason_string: str
    user_property: Sequence[Tuple[str, str]]


@dataclass(frozen=True)
class AuthResult:
    __slots__ = ("reason_code", "properties")

    reason_code: ReasonCode
    properties: AuthProperties


def parse_auth_packet(fixed_header: FixedHeader, reader: BytesReader) -> AuthResult:
    # both the reason code and properties may be omitted
    reason_code = to_reason_code(reader.read_byte() if reader.remaining() else 0x0)
    properties = parse_properties(reader) if reader.remaining() else {}

    reader.ensure_end()

    return AuthResult(
        reason_code=reason_code,
        properties=cast(AuthProperties, properties),
    )
