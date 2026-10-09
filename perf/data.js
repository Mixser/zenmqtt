window.BENCHMARK_DATA = {
  "lastUpdate": 1791533548068,
  "repoUrl": "https://github.com/Mixser/zenmqtt",
  "entries": {
    "zenmqtt (Python 3.12)": [
      {
        "commit": {
          "author": {
            "email": "Mixser.by@gmail.com",
            "name": "Mike Turchunovich",
            "username": "Mixser"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6420a338d3ac4f85264e60bdd82f5c79b49446c5",
          "message": "Merge pull request #20 from Mixser/MGG-XXX-ci-benchmarks\n\nMGG-XXX Benchmarks in CI and Python 3.12-3.15 matrix",
          "timestamp": "2026-10-09T11:10:48+03:00",
          "tree_id": "177b118ce494facd51a8e5493f3ffa4a5242166b",
          "url": "https://github.com/Mixser/zenmqtt/commit/6420a338d3ac4f85264e60bdd82f5c79b49446c5"
        },
        "date": 1791533501237,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 94594.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 26213.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 59530.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 18425.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 56365.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 17983.1,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 0, 64 B",
            "value": 246085.8,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 1, 64 B",
            "value": 233084.3,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 2, 64 B",
            "value": 232797.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17844.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 9756,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 5430.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 14290.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6291.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3472.4,
            "unit": "msg/s"
          }
        ]
      }
    ],
    "zenmqtt (Python 3.13)": [
      {
        "commit": {
          "author": {
            "email": "Mixser.by@gmail.com",
            "name": "Mike Turchunovich",
            "username": "Mixser"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6420a338d3ac4f85264e60bdd82f5c79b49446c5",
          "message": "Merge pull request #20 from Mixser/MGG-XXX-ci-benchmarks\n\nMGG-XXX Benchmarks in CI and Python 3.12-3.15 matrix",
          "timestamp": "2026-10-09T11:10:48+03:00",
          "tree_id": "177b118ce494facd51a8e5493f3ffa4a5242166b",
          "url": "https://github.com/Mixser/zenmqtt/commit/6420a338d3ac4f85264e60bdd82f5c79b49446c5"
        },
        "date": 1791533546977,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 151424,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 55090.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 109456.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 37371.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 103235.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 36315.7,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 0, 64 B",
            "value": 442171.7,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 1, 64 B",
            "value": 412995.4,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 2, 64 B",
            "value": 412771.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 56085.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 23207.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 13626.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 38427.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 14875.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 8738.6,
            "unit": "msg/s"
          }
        ]
      }
    ]
  }
}