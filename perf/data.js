window.BENCHMARK_DATA = {
  "lastUpdate": 1791533749941,
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
      },
      {
        "commit": {
          "author": {
            "email": "mixser.by@gmail.com",
            "name": "Mikhail Turchunovich",
            "username": "Mixser"
          },
          "committer": {
            "email": "mixser.by@gmail.com",
            "name": "Mikhail Turchunovich",
            "username": "Mixser"
          },
          "distinct": true,
          "id": "833bbc828bf6b95ba0f2073aac62f5f36e7cda85",
          "message": "MGG-XXX Added link to benchmark history charts to benchmarks README;",
          "timestamp": "2026-10-09T11:13:22+03:00",
          "tree_id": "0f101a0dd6d88337a1158a75f895e6c98a5d7bc7",
          "url": "https://github.com/Mixser/zenmqtt/commit/833bbc828bf6b95ba0f2073aac62f5f36e7cda85"
        },
        "date": 1791533695382,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 99124.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 31598.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 69208.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 21524.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 63707.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 21092.3,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 0, 64 B",
            "value": 273854,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 1, 64 B",
            "value": 259671.8,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 2, 64 B",
            "value": 259971.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 24837.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 13081,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7971.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 19562,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 8875.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 5043.1,
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
      },
      {
        "commit": {
          "author": {
            "email": "mixser.by@gmail.com",
            "name": "Mikhail Turchunovich",
            "username": "Mixser"
          },
          "committer": {
            "email": "mixser.by@gmail.com",
            "name": "Mikhail Turchunovich",
            "username": "Mixser"
          },
          "distinct": true,
          "id": "833bbc828bf6b95ba0f2073aac62f5f36e7cda85",
          "message": "MGG-XXX Added link to benchmark history charts to benchmarks README;",
          "timestamp": "2026-10-09T11:13:22+03:00",
          "tree_id": "0f101a0dd6d88337a1158a75f895e6c98a5d7bc7",
          "url": "https://github.com/Mixser/zenmqtt/commit/833bbc828bf6b95ba0f2073aac62f5f36e7cda85"
        },
        "date": 1791533749138,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 94661.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 28777.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 59941.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 18880.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 52449.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 18414.8,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 0, 64 B",
            "value": 243888.1,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 1, 64 B",
            "value": 227756.1,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 2, 64 B",
            "value": 219460.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17175.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 9679.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 5287.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 9410.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6397.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3458.1,
            "unit": "msg/s"
          }
        ]
      }
    ],
    "zenmqtt (Python 3.14)": [
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
        "date": 1791533604066,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 99967.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 27166,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 57735,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 18679.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58207,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 17683.7,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 0, 64 B",
            "value": 233125,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 1, 64 B",
            "value": 223490.9,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 2, 64 B",
            "value": 213127.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17143.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 9757.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 5455.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 14288,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6463.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3508.3,
            "unit": "msg/s"
          }
        ]
      }
    ]
  }
}