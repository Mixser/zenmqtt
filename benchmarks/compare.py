"""
A/B comparison of two checkouts of the library, for example the base branch
and a pull request, on the same machine.

    python -m benchmarks.compare --base ../base --head . --output-dir report

Shared CI machines are noisy, so absolute numbers of two runs can't be
compared. Both checkouts are measured in the same job, in alternating order
(base, head, head, base, ...), several rounds each. For every scenario the
change is the ratio of medians head/base, with a 95% confidence interval from
bootstrap resampling. A change is reported only if the whole interval is
outside of the threshold.
"""
import argparse
import json
import os
import platform
import random
import shutil
import statistics
import subprocess
import sys
import tempfile
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional

from benchmarks.run import SCENARIOS

# marker of the report in pull request comments
REPORT_MARKER = "<!-- zenmqtt-perf-report -->"

CPU_SCENARIOS = ("in-memory",)
BROKER_SCENARIOS = ("publish", "end-to-end")
# micro-benchmarks of benchmarks/codec (pytest-benchmark)
CODEC_SCENARIO = "codec"

_BOOTSTRAP_SAMPLES = 2000


@dataclass
class Comparison:
    scenario: str
    qos: Optional[int]
    payload: Optional[int]
    note: str
    # messages (scenarios) or operations (codec) per second
    base: list[float] = field(default_factory=list)
    head: list[float] = field(default_factory=list)
    # broker scenarios are too noisy for a verdict
    informational: bool = False
    group: str = "scenarios"

    @property
    def ratio(self) -> Optional[float]:
        if not self.base or not self.head:
            return None

        return statistics.median(self.head) / statistics.median(self.base)

    def confidence_interval(self, rng: random.Random) -> Optional[tuple[float, float]]:
        if len(self.base) < 2 or len(self.head) < 2:
            return None

        ratios = sorted(
            statistics.median(rng.choices(self.head, k=len(self.head)))
            / statistics.median(rng.choices(self.base, k=len(self.base)))
            for _ in range(_BOOTSTRAP_SAMPLES)
        )

        return (
            ratios[int(0.025 * _BOOTSTRAP_SAMPLES)],
            ratios[int(0.975 * _BOOTSTRAP_SAMPLES) - 1],
        )


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--base", required=True, help="checkout of the base")
    parser.add_argument("--head", required=True, help="checkout of the change")
    parser.add_argument("--base-label", default="base")
    parser.add_argument("--head-label", default="head")
    parser.add_argument("--rounds", type=int, default=10)
    parser.add_argument(
        "--scenarios",
        default=",".join((*CPU_SCENARIOS, CODEC_SCENARIO)),
        help=f"comma separated: {', '.join((*SCENARIOS, CODEC_SCENARIO))}",
    )
    parser.add_argument(
        "--codec-rounds", type=int, default=6, help="rounds of codec benchmarks"
    )
    parser.add_argument("--messages", type=int, default=20_000)
    parser.add_argument("--payload", type=int, nargs="+", default=[64, 16_384])
    parser.add_argument(
        "--url", help="broker for publish and end-to-end scenarios, if selected"
    )
    parser.add_argument(
        "--broker-rounds", type=int, default=3, help="rounds of broker scenarios"
    )
    parser.add_argument(
        "--threshold",
        type=float,
        default=0.05,
        help="changes within +/- threshold are reported as no change",
    )
    parser.add_argument("--output-dir", default="perf-report")
    return parser.parse_args()


def imported_from(python_path: Path, workdir: Path) -> Path:
    """Where zenmqtt is imported from with this PYTHONPATH."""
    output = subprocess.run(
        [sys.executable, "-c", "import zenmqtt; print(zenmqtt.__file__)"],
        cwd=workdir,
        env={**os.environ, "PYTHONPATH": str(python_path)},
        capture_output=True,
        text=True,
        check=True,
    ).stdout.strip()

    return Path(output).resolve()


def run_once(
    checkout: Path,
    workdir: Path,
    scenarios: list[str],
    payload: int,
    messages: int,
    url: Optional[str],
) -> list[dict]:
    """Runs benchmarks.run (from workdir) with the library of the checkout."""
    output = workdir / "result.json"
    command = [
        sys.executable,
        "-m",
        "benchmarks.run",
        "--scenarios",
        ",".join(scenarios),
        "--clients",
        "zenmqtt",
        "--messages",
        str(messages),
        "--payload",
        str(payload),
        "--json",
        str(output),
    ]

    if url:
        command += ["--url", url]

    completed = subprocess.run(
        command,
        cwd=workdir,
        env={**os.environ, "PYTHONPATH": str(checkout)},
        capture_output=True,
        text=True,
    )

    if completed.returncode:
        # e.g. the base doesn't support a scenario yet
        print(completed.stdout[-2000:], completed.stderr[-2000:], file=sys.stderr)
        return []

    return json.loads(output.read_text())["results"]


def run_codec(checkout: Path, workdir: Path) -> dict[str, float]:
    """
    Runs the codec micro-benchmarks (from workdir) with the library of the
    checkout; returns operations per second by benchmark.
    """
    output = workdir / "codec.json"
    command = [
        sys.executable,
        "-m",
        "pytest",
        "benchmarks/codec",
        "-q",
        "-p",
        "no:cacheprovider",
        "--benchmark-only",
        "--benchmark-json",
        str(output),
        # rounds are repeated by compare, one pass may be short
        "--benchmark-max-time",
        "0.1",
        "--benchmark-min-rounds",
        "5",
    ]

    completed = subprocess.run(
        command,
        cwd=workdir,
        env={**os.environ, "PYTHONPATH": str(checkout)},
        capture_output=True,
        text=True,
    )

    if completed.returncode:
        # e.g. the base doesn't have a packed function yet
        print(completed.stdout[-2000:], completed.stderr[-2000:], file=sys.stderr)
        return {}

    return {
        benchmark["name"].removeprefix("test_"): 1 / benchmark["stats"]["median"]
        for benchmark in json.loads(output.read_text())["benchmarks"]
    }


def measure(args: argparse.Namespace) -> list[Comparison]:
    checkouts = {
        "base": Path(args.base).resolve(),
        "head": Path(args.head).resolve(),
    }
    selected = args.scenarios.split(",")
    comparisons: dict[tuple, Comparison] = {}

    if unknown := set(selected) - {*SCENARIOS, CODEC_SCENARIO}:
        raise SystemExit(f"Unknown scenarios: {', '.join(sorted(unknown))}")

    with tempfile.TemporaryDirectory() as tmp:
        # benchmarks of the head are used for both sides; the working
        # directory is the first entry of sys.path, so it must not contain
        # the library itself
        workdir = Path(tmp)
        shutil.copytree(
            checkouts["head"] / "benchmarks",
            workdir / "benchmarks",
            ignore=shutil.ignore_patterns("__pycache__"),
        )

        for side, checkout in checkouts.items():
            location = imported_from(checkout, workdir)

            if checkouts[side] not in location.parents:
                raise SystemExit(f"{side}: zenmqtt is imported from {location}")

        groups = [
            (
                [scenario for scenario in selected if scenario in CPU_SCENARIOS],
                args.rounds,
                False,
            ),
            (
                [scenario for scenario in selected if scenario in BROKER_SCENARIOS],
                args.broker_rounds if args.url else 0,
                True,
            ),
        ]

        for scenarios, rounds, informational in groups:
            if not scenarios or not rounds:
                continue

            for payload in args.payload:
                for index in range(rounds):
                    # base, head, head, base, ...: a slow drift of the machine
                    # affects both sides equally
                    order = ("base", "head") if index % 2 == 0 else ("head", "base")

                    for side in order:
                        print(
                            f"round {index + 1}/{rounds}, {payload} B, {side}",
                            file=sys.stderr,
                        )

                        for result in run_once(
                            checkouts[side],
                            workdir,
                            scenarios,
                            payload,
                            args.messages,
                            args.url,
                        ):
                            key = (
                                result["scenario"],
                                result["qos"],
                                result["payload"],
                                result["note"],
                            )
                            comparison = comparisons.setdefault(
                                key, Comparison(*key, informational=informational)
                            )
                            getattr(comparison, side).append(result["throughput"])

        if CODEC_SCENARIO in selected:
            for index in range(args.codec_rounds):
                order = ("base", "head") if index % 2 == 0 else ("head", "base")

                for side in order:
                    print(
                        f"codec round {index + 1}/{args.codec_rounds}, {side}",
                        file=sys.stderr,
                    )

                    for name, operations in run_codec(checkouts[side], workdir).items():
                        comparison = comparisons.setdefault(
                            (CODEC_SCENARIO, name),
                            Comparison(name, None, None, "", group=CODEC_SCENARIO),
                        )
                        getattr(comparison, side).append(operations)

    return list(comparisons.values())


def render(comparisons: list[Comparison], args: argparse.Namespace) -> str:
    rng = random.Random(0)
    threshold = args.threshold
    counts = {"slower": 0, "faster": 0}

    def row(comparison: Comparison) -> list[str]:
        base = f"{statistics.median(comparison.base):,.0f}" if comparison.base else "-"
        head = f"{statistics.median(comparison.head):,.0f}" if comparison.head else "-"

        ratio = comparison.ratio
        interval = comparison.confidence_interval(rng)
        change = f"{(ratio - 1) * 100:+.1f}%" if ratio else "n/a"
        bounds = (
            f"{(interval[0] - 1) * 100:+.1f}% .. {(interval[1] - 1) * 100:+.1f}%"
            if interval
            else "-"
        )

        if comparison.informational or not interval:
            verdict = "ℹ️"
        elif interval[0] > 1 + threshold:
            verdict = "🟢 faster"
            counts["faster"] += 1
        elif interval[1] < 1 - threshold:
            verdict = "🔴 slower"
            counts["slower"] += 1
        else:
            verdict = "⚪"

        return [base, head, change, bounds, verdict]

    scenarios = [c for c in comparisons if c.group != CODEC_SCENARIO]
    codec = [c for c in comparisons if c.group == CODEC_SCENARIO]
    tables: list[str] = []

    if scenarios:
        tables += [
            "",
            f"### Scenarios ({args.rounds} rounds, {args.messages} messages per run)",
            "",
            "| Scenario | QoS | Payload | Base msg/s | Head msg/s | Change | 95% CI | |",
            "|---|---:|---:|---:|---:|---:|---|---|",
        ]

        for comparison in scenarios:
            name = comparison.scenario + (
                f" ({comparison.note})" if comparison.note else ""
            )
            cells = [name, str(comparison.qos), f"{comparison.payload} B"]
            tables.append("| " + " | ".join(cells + row(comparison)) + " |")

    if codec:
        tables += [
            "",
            f"### Codec ({args.codec_rounds} rounds of pytest-benchmark)",
            "",
            "| Benchmark | Base ops/s | Head ops/s | Change | 95% CI | |",
            "|---|---:|---:|---:|---|---|",
        ]

        for comparison in codec:
            cells = [f"`{comparison.scenario}`"]
            tables.append("| " + " | ".join(cells + row(comparison)) + " |")

    lines = [
        REPORT_MARKER,
        "## Performance report",
        "",
        f"**{counts['slower']} slower, {counts['faster']} faster** "
        f"(changes beyond ±{threshold:.0%} with 95% confidence).",
        "",
        f"`{args.head_label}` compared with `{args.base_label}`, "
        f"Python {platform.python_version()}, {platform.system()} "
        f"{platform.machine()}.",
        *tables,
        "",
        "<details><summary>How to read it</summary>",
        "",
        "Both versions run on the same machine in the same job, in alternating "
        "order. Change is the ratio of median throughputs; 95% CI is its "
        "confidence interval from bootstrap resampling. 🟢/🔴 mean that the "
        f"whole interval is beyond ±{threshold:.0%}, ⚪ means no significant "
        "change. ℹ️ rows go through a broker and are too noisy for a verdict.",
        "",
        "</details>",
    ]

    return "\n".join(lines) + "\n"


def main() -> None:
    args = parse_args()

    comparisons = measure(args)

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    report = render(comparisons, args)
    (output_dir / "report.md").write_text(report)
    (output_dir / "results.json").write_text(
        json.dumps([vars(comparison) for comparison in comparisons], indent=2)
    )

    print(report)


if __name__ == "__main__":
    main()
