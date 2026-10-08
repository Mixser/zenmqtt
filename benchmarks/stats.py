from dataclasses import asdict, dataclass, field
from typing import Optional, Sequence


@dataclass
class Result:
    scenario: str
    client: str
    qos: int
    messages: int
    payload: int
    # messages per second
    throughput: float
    # milliseconds, None if the scenario doesn't measure latency
    p50: Optional[float] = None
    p95: Optional[float] = None
    p99: Optional[float] = None
    note: str = ""
    extra: dict = field(default_factory=dict)

    def as_dict(self) -> dict:
        return asdict(self)


def percentiles(latencies: Sequence[float]) -> dict[str, Optional[float]]:
    """Latencies in seconds -> p50/p95/p99 in milliseconds."""
    if not latencies:
        return {"p50": None, "p95": None, "p99": None}

    ordered = sorted(latencies)

    def at(fraction: float) -> float:
        index = min(len(ordered) - 1, round(fraction * (len(ordered) - 1)))
        return ordered[index] * 1000

    return {"p50": at(0.50), "p95": at(0.95), "p99": at(0.99)}


def format_table(results: Sequence[Result]) -> str:
    headers = (
        "scenario",
        "client",
        "qos",
        "msgs",
        "payload",
        "msg/s",
        "p50 ms",
        "p95 ms",
        "p99 ms",
        "note",
    )
    rows = [
        (
            result.scenario,
            result.client,
            str(result.qos),
            str(result.messages),
            f"{result.payload} B",
            f"{result.throughput:,.0f}",
            *(
                f"{value:.2f}" if value is not None else "-"
                for value in (result.p50, result.p95, result.p99)
            ),
            result.note,
        )
        for result in results
    ]

    widths = [
        max([len(header), *(len(row[i]) for row in rows)])
        for i, header in enumerate(headers)
    ]

    def line(cells) -> str:
        return "  ".join(
            cell.ljust(width) for cell, width in zip(cells, widths)
        ).rstrip()

    return "\n".join(
        [line(headers), line("-" * width for width in widths), *map(line, rows)]
    )
