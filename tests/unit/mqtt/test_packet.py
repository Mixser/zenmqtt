import pytest

from zenmqtt.exceptions import MalformedPacketError
from zenmqtt.mqtt.packet import (
    BytesReader,
    FixedHeader,
    PacketType,
    parse_fixed_header,
    parse_variable_byte_integer,
    split_packet,
)


@pytest.mark.parametrize(
    "data, expected_result",
    (
        (b"\x10\x01", (FixedHeader(PacketType.CONNECT, flags=0x00, length=1), 2)),
        (
            b"\x10\x80\x80\x01",
            (FixedHeader(PacketType.CONNECT, flags=0x00, length=16384), 4),
        ),
    ),
)
def test_parse_fixed_header(data, expected_result) -> None:
    assert parse_fixed_header(data) == expected_result


@pytest.mark.parametrize("data", (b"\x10", b"\x10\x80"))
def test_parse_incomplete_fixed_header(data) -> None:
    with pytest.raises(MalformedPacketError):
        parse_fixed_header(data)


@pytest.mark.parametrize(
    "data, expected_result",
    (
        (b"\x01", (1, 1)),
        (b"\x80\x01", (128, 2)),
        (b"\x80\x81\x01", (16512, 3)),
        (b"\xff\xff\xff\x7f", (268_435_455, 4)),
    ),
)
def test_parse_variable_byte_integer(data, expected_result):
    assert parse_variable_byte_integer(data) == expected_result


def test_parse_variable_byte_integer_longer_than_4_bytes():
    with pytest.raises(MalformedPacketError):
        parse_variable_byte_integer(b"\x80\x80\x80\x80\x01")


def test_split_packet():
    header, reader = split_packet(b"\x20\x03\x00\x01\x02")

    assert header == FixedHeader(PacketType.CONNACK, flags=0, length=3)
    assert reader.read_rest() == b"\x00\x01\x02"


@pytest.mark.parametrize("data", (b"\x20\x03\x00\x01", b"\x20\x01\x00\x01"))
def test_split_packet_with_wrong_size(data):
    with pytest.raises(MalformedPacketError):
        split_packet(data)


def test_bytes_reader():
    reader = BytesReader(b"\x01\x00\x02\x00\x00\x00\x03\x80\x01\x00\x02ab\xff")

    assert reader.read_byte() == 1
    assert reader.read_uint16() == 2
    assert reader.read_uint32() == 3
    assert reader.read_variable_byte_integer() == 128
    assert reader.read_str() == "ab"
    assert reader.remaining() == 1

    with pytest.raises(MalformedPacketError):
        reader.ensure_end()

    assert reader.read_rest() == b"\xff"
    reader.ensure_end()


@pytest.mark.parametrize(
    "data, read",
    (
        (b"", BytesReader.read_byte),
        (b"\x00", BytesReader.read_uint16),
        (b"\x00\x05ab", BytesReader.read_str),
        (b"\x80", BytesReader.read_variable_byte_integer),
        (b"\x00\x02\xff\xfe", BytesReader.read_str),
    ),
)
def test_bytes_reader_malformed(data, read):
    with pytest.raises(MalformedPacketError):
        read(BytesReader(data))
