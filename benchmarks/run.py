"""
Benchmarks of the client.

    poetry install --with bench
    docker run --rm -p 1883:1883 eclipse-mosquitto:2 mosquitto -c /mosquitto-no-auth.conf
    poetry run python -m benchmarks.run

See benchmarks/README.md for the scenarios and options.
"""
import argparse
import asyncio
import cProfile
import gc
import json
import os
import platform
import pstats
import subprocess
import sys
from typing import Awaitable, Callable

from benchmarks import scenarios
from benchmarks.clients import available_clients
from benchmarks.stats import Result, format_table

SCENARIOS = ("in-memory", "publish", "end-to-end")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument(
        "--url", default=os.environ.get("MQTT_URL", "tcp://localhost:1883")
    )
    parser.add_argument(
        "--scenarios",
        default=",".join(SCENARIOS),
        help=f"comma separated: {', '.join(SCENARIOS)}; empty runs nothing",
    )
    parser.add_argument(
        "--clients",
        default=",".join(available_clients()),
        help="comma separated clients for broker scenarios",
    )
    parser.add_argument("--messages", type=int, default=10_000)
    parser.add_argument("--payload", type=int, default=64, help="bytes")
    parser.add_argument("--qos", type=int, nargs="+", default=[0, 1, 2])
    parser.add_argument(
        "--concurrency", type=int, default=100, help="publish calls in flight"
    )
    parser.add_argument("--json", help="save results to the file")
    parser.add_argument(
        "--profile",
        action="store_true",
        help="profile the in-memory receive scenario and print hot spots",
    )
    return parser.parse_args()


def metadata() -> dict:
    try:
        commit = subprocess.run(
            ["git", "rev-parse", "--short", "HEAD"], capture_output=True, text=True
        ).stdout.strip()
    except OSError:
        commit = ""

    return {
        "python": sys.version.split()[0],
        "platform": platform.platform(),
        "machine": platform.machine(),
        "commit": commit,
    }


async def measure(results: list[Result], run: Callable[[], Awaitable[Result]]):
    # a collection in the middle of a run makes results noisy
    gc.collect()

    result = await run()
    results.append(result)
    print(
        f"done: {result.scenario}, {result.client}, QoS {result.qos}, "
        f"{result.note or '-'}: {result.throughput:,.0f} msg/s",
        flush=True,
    )


def opentelemetry_metrics():
    try:
        from opentelemetry.sdk.metrics import MeterProvider

        from zenmqtt.contrib.opentelemetry import OpenTelemetryMetrics
    except ImportError:
        return None

    return OpenTelemetryMetrics(MeterProvider().get_meter("bench"))


async def main() -> None:
    args = parse_args()
    selected = set(filter(None, args.scenarios.split(",")))

    if unknown := selected - set(SCENARIOS):
        raise SystemExit(f"Unknown scenarios: {', '.join(sorted(unknown))}")
    clients = {
        name: factory
        for name, factory in available_clients().items()
        if name in args.clients.split(",")
    }
    results: list[Result] = []

    if "in-memory" in selected:
        for qos in args.qos:
            await measure(
                results,
                lambda: scenarios.in_memory_receive(
                    args.messages, args.payload, qos, label="no metrics"
                ),
            )

            if metrics := opentelemetry_metrics():
                await measure(
                    results,
                    lambda: scenarios.in_memory_receive(
                        args.messages,
                        args.payload,
                        qos,
                        metrics=metrics,
                        label="opentelemetry",
                    ),
                )

    for scenario, run in (
        ("publish", scenarios.publish),
        ("end-to-end", scenarios.end_to_end),
    ):
        if scenario not in selected:
            continue

        for factory in clients.values():
            for qos in args.qos:
                await measure(
                    results,
                    lambda: run(
                        factory,
                        args.url,
                        args.messages,
                        args.payload,
                        qos,
                        args.concurrency,
                    ),
                )

    print()
    print(format_table(results))

    if args.json:
        with open(args.json, "w") as file:
            json.dump(
                {
                    "metadata": metadata(),
                    "results": [result.as_dict() for result in results],
                },
                file,
                indent=2,
            )

    if args.profile:
        await profile_in_memory(args)


async def profile_in_memory(args: argparse.Namespace) -> None:
    profiler = cProfile.Profile()
    profiler.enable()
    await scenarios.in_memory_receive(args.messages, args.payload, qos=1)
    profiler.disable()

    print("\nin-memory receive, QoS 1, hot spots by own time:")
    pstats.Stats(profiler).sort_stats("tottime").print_stats(15)


if __name__ == "__main__":
    asyncio.run(main())
