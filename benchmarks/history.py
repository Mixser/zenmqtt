"""
Converts results of benchmarks.run to the format of github-action-benchmark
("customBiggerIsBetter"), to keep the history of the main branch.

    python -m benchmarks.history results.json > history.json
"""
import json
import sys


def main() -> None:
    with open(sys.argv[1]) as file:
        results = json.load(file)["results"]

    entries = [
        {
            "name": (
                f"{result['scenario']}, {result['client']}, QoS {result['qos']}, "
                f"{result['payload']} B"
                + (f", {result['note']}" if result["note"] else "")
            ),
            "unit": "msg/s",
            "value": round(result["throughput"], 1),
        }
        for result in results
    ]

    json.dump(entries, sys.stdout, indent=2)


if __name__ == "__main__":
    main()
