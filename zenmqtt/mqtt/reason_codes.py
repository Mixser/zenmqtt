from typing import Final

# reason codes >= 0x80 indicate failure
FAILURE_REASON_CODE: Final[int] = 0x80
# PUBREL/PUBCOMP reason code for an unknown packet identifier
PACKET_IDENTIFIER_NOT_FOUND: Final[int] = 0x92
