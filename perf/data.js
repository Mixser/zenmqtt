window.BENCHMARK_DATA = {
  "lastUpdate": 1791737596652,
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
          "id": "7e9e482e4f5079e18b85dde9eb041f2a50eca596",
          "message": "MGG-XXX Removed Python 3.15 from CI for now;",
          "timestamp": "2026-10-09T11:14:52+03:00",
          "tree_id": "720c1198c18742159c70c8e87c0d2e3feefa9fc5",
          "url": "https://github.com/Mixser/zenmqtt/commit/7e9e482e4f5079e18b85dde9eb041f2a50eca596"
        },
        "date": 1791533874256,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 159705.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 47416.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 99269,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 32508.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 94545.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 31823.4,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 0, 64 B",
            "value": 432290.9,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 1, 64 B",
            "value": 408967.3,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 2, 64 B",
            "value": 407215.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 52109.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 22688.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 14362.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 42723,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 16104.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9262.3,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "2f1b150d11bc949d36b0f3b18458d324af63ca58",
          "message": "Merge pull request #21 from Mixser/MGG-XXX-readme-license\n\nMGG-XXX README and MIT license",
          "timestamp": "2026-10-09T11:29:01+03:00",
          "tree_id": "3e553022907944ac5a1b72a67e1a932209ca46a9",
          "url": "https://github.com/Mixser/zenmqtt/commit/2f1b150d11bc949d36b0f3b18458d324af63ca58"
        },
        "date": 1791534578765,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 127190,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 37063.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 77889.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 25211,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 75181.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 24501.9,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 0, 64 B",
            "value": 344519.1,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 1, 64 B",
            "value": 323291.6,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 2, 64 B",
            "value": 321163.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 36697.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 18918.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11204.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 29301.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11862.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7067.8,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "ac2388d2e3f8422eba059bd95c3a70bb18f2740a",
          "message": "Merge pull request #22 from Mixser/MGG-XXX-codec-benchmarks\n\nMGG-XXX Codec micro-benchmarks with pytest-benchmark",
          "timestamp": "2026-10-09T11:45:31+03:00",
          "tree_id": "bc415e673267ed748d008edc463703f6322af702",
          "url": "https://github.com/Mixser/zenmqtt/commit/ac2388d2e3f8422eba059bd95c3a70bb18f2740a"
        },
        "date": 1791535592444,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 96247.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 27492.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 59992.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 18337,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 57364.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 17943.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 19865.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11445,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6923.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16240.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7054.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3989.2,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "1c64c7c78b6130ff7ed73c7d265923760dcc166e",
          "message": "Merge pull request #23 from Mixser/MGG-XXX-fast-publish-packing\n\nMGG-XXX Fast packing of packets",
          "timestamp": "2026-10-09T13:31:18+03:00",
          "tree_id": "7c788a79f44070686045f948a9bae302f3d1cc65",
          "url": "https://github.com/Mixser/zenmqtt/commit/1c64c7c78b6130ff7ed73c7d265923760dcc166e"
        },
        "date": 1791541923816,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 186341.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 55069.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 118561.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 38108.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 113321,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 36854.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 72320.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 26115.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 17042.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 46531.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 16958.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 10372.7,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "1ac221dd4f698a0928a8daadb3c2dcadb8fc9e7b",
          "message": "Merge pull request #24 from Mixser/MGG-XXX-faster-otel-metrics\n\nMGG-XXX Reduce cost of OpenTelemetry metrics",
          "timestamp": "2026-10-09T13:59:58+03:00",
          "tree_id": "006c86b76979601655e2dec62b4bd7ceb1484d69",
          "url": "https://github.com/Mixser/zenmqtt/commit/1ac221dd4f698a0928a8daadb3c2dcadb8fc9e7b"
        },
        "date": 1791543653758,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 94906.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44594.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 61705,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 29964.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58692.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 28731.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23235.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11527.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6896.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18122.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7148.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4075.3,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "af54c6d68932f195b7a6de993d0261b0c7cd49b0",
          "message": "Merge pull request #25 from Mixser/MGG-XXX-upgrade-pytest-asyncio\n\nMGG-XXX Upgrade pytest and pytest-asyncio",
          "timestamp": "2026-10-09T15:36:26+03:00",
          "tree_id": "8b6ceeb7aa3baa6235ab5baf40ef85db74a22d3a",
          "url": "https://github.com/Mixser/zenmqtt/commit/af54c6d68932f195b7a6de993d0261b0c7cd49b0"
        },
        "date": 1791549431949,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 183864.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 91094,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 119028.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 61011.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 113887.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 59639.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 77170.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 27374.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 17289.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 46290,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 17118.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 10489,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "bfae94de0d45ac44c29a7af1fd343b37e08d02c1",
          "message": "Merge pull request #26 from Mixser/MGG-XXX-will-message-defaults\n\nMGG-XXX Default values for WillMessage",
          "timestamp": "2026-10-09T15:36:47+03:00",
          "tree_id": "0cdf044a9194617ec83a3ca61ec1a60728134a69",
          "url": "https://github.com/Mixser/zenmqtt/commit/bfae94de0d45ac44c29a7af1fd343b37e08d02c1"
        },
        "date": 1791549598012,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 95451.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 43900,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 61900.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 29962.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58534.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29609.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23403.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11616.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6974.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16158.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7074.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4139.4,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "88a884c374a65584b00b7553ed131b7f0eb788c8",
          "message": "Merge pull request #27 from Mixser/MGG-XXX-typing-and-duplication\n\nMGG-XXX Remove duplicated definitions and fix strict typing",
          "timestamp": "2026-10-09T15:56:07+03:00",
          "tree_id": "0f583a108f8592831ebafa7d6d717c327a23a34c",
          "url": "https://github.com/Mixser/zenmqtt/commit/88a884c374a65584b00b7553ed131b7f0eb788c8"
        },
        "date": 1791550618327,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 92823.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44469.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 61123.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 29805.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58082.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29155.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21318.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11556.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6875.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18839.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7109.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4105.6,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "b57e072be5c9769f5e61d3381ceb1af02929a2dc",
          "message": "Merge pull request #30 from Mixser/MGG-XXX-tests-cleanup\n\nMGG-XXX Clean up tests",
          "timestamp": "2026-10-09T15:56:51+03:00",
          "tree_id": "b2a83222c94bedace6be64e49aafa2baa31904d9",
          "url": "https://github.com/Mixser/zenmqtt/commit/b57e072be5c9769f5e61d3381ceb1af02929a2dc"
        },
        "date": 1791550793151,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 93935.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44792.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 61366.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 29909.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58614.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 28857.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21691.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11522.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6930,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17836.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7163.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4110.2,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "e77770d541109d3dfc7aa5b6e2a3699bb1504334",
          "message": "Merge pull request #32 from Mixser/MGG-XXX-p0-fixes\n\nMGG-XXX Fix write backpressure, publish leak and errors of the read loop",
          "timestamp": "2026-10-11T19:31:19+03:00",
          "tree_id": "4cacaafa23bc9d42c5f6e18502a8ea5efb4d028a",
          "url": "https://github.com/Mixser/zenmqtt/commit/e77770d541109d3dfc7aa5b6e2a3699bb1504334"
        },
        "date": 1791736332736,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 95486.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44733.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 61578.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 29583.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58403.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 28633.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23345.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11418.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6888,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17758.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7053.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3989.3,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "50aef7166cba93d2d80e83697be292b59146e828",
          "message": "Merge pull request #31 from Mixser/MGG-XXX-strict-mypy\n\nMGG-XXX Enable strict mypy",
          "timestamp": "2026-10-11T19:31:35+03:00",
          "tree_id": "2fbfc5779739d9b5c3148336ce6336f6a7c06e01",
          "url": "https://github.com/Mixser/zenmqtt/commit/50aef7166cba93d2d80e83697be292b59146e828"
        },
        "date": 1791736476814,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 119629.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 57030.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 76587,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 38050.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 72117.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 37115.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 39382.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 17691.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 10401.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 29346.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11279.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6750.8,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "f286fb8d1d9803f73185885767bc0b75b0e6f169",
          "message": "Merge pull request #34 from Mixser/MGG-XXX-publish-workflow\n\nMGG-XXX Add the publish workflow",
          "timestamp": "2026-10-11T19:51:32+03:00",
          "tree_id": "e6bfe6935ad6740ddbc26e3bacc059c09f0e1c8c",
          "url": "https://github.com/Mixser/zenmqtt/commit/f286fb8d1d9803f73185885767bc0b75b0e6f169"
        },
        "date": 1791737548208,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 94266.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44214,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 61580,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 29275.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58507,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 28955.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 22255.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11447.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6836.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17752.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7063.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4059,
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
          "id": "7e9e482e4f5079e18b85dde9eb041f2a50eca596",
          "message": "MGG-XXX Removed Python 3.15 from CI for now;",
          "timestamp": "2026-10-09T11:14:52+03:00",
          "tree_id": "720c1198c18742159c70c8e87c0d2e3feefa9fc5",
          "url": "https://github.com/Mixser/zenmqtt/commit/7e9e482e4f5079e18b85dde9eb041f2a50eca596"
        },
        "date": 1791533925208,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 93121.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 30870.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 59746.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 20833.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 57452.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 20475.4,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 0, 64 B",
            "value": 245272.8,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 1, 64 B",
            "value": 235192.8,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 2, 64 B",
            "value": 231664.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 27408.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 13151.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7635.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16313.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 8504.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4870.3,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "2f1b150d11bc949d36b0f3b18458d324af63ca58",
          "message": "Merge pull request #21 from Mixser/MGG-XXX-readme-license\n\nMGG-XXX README and MIT license",
          "timestamp": "2026-10-09T11:29:01+03:00",
          "tree_id": "3e553022907944ac5a1b72a67e1a932209ca46a9",
          "url": "https://github.com/Mixser/zenmqtt/commit/2f1b150d11bc949d36b0f3b18458d324af63ca58"
        },
        "date": 1791534620844,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 134150.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 40361.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 86374.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 27337.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 80700.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26684.3,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 0, 64 B",
            "value": 353122,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 1, 64 B",
            "value": 332531.8,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 2, 64 B",
            "value": 329235.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 37392.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 19224.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11395.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 30652.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 12203.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7139,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "ac2388d2e3f8422eba059bd95c3a70bb18f2740a",
          "message": "Merge pull request #22 from Mixser/MGG-XXX-codec-benchmarks\n\nMGG-XXX Codec micro-benchmarks with pytest-benchmark",
          "timestamp": "2026-10-09T11:45:31+03:00",
          "tree_id": "bc415e673267ed748d008edc463703f6322af702",
          "url": "https://github.com/Mixser/zenmqtt/commit/ac2388d2e3f8422eba059bd95c3a70bb18f2740a"
        },
        "date": 1791535663820,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 94077.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 28295.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 59703.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 19204.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 56057.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 18836.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 19019,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11040.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6560.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16770.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6858.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3835,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "1c64c7c78b6130ff7ed73c7d265923760dcc166e",
          "message": "Merge pull request #23 from Mixser/MGG-XXX-fast-publish-packing\n\nMGG-XXX Fast packing of packets",
          "timestamp": "2026-10-09T13:31:18+03:00",
          "tree_id": "7c788a79f44070686045f948a9bae302f3d1cc65",
          "url": "https://github.com/Mixser/zenmqtt/commit/1c64c7c78b6130ff7ed73c7d265923760dcc166e"
        },
        "date": 1791541967886,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 168667.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 56243.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 114421.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 39256.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 105519.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 38407.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 67493.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 26286.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 16800.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 44340.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 16687.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 10182.9,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "1ac221dd4f698a0928a8daadb3c2dcadb8fc9e7b",
          "message": "Merge pull request #24 from Mixser/MGG-XXX-faster-otel-metrics\n\nMGG-XXX Reduce cost of OpenTelemetry metrics",
          "timestamp": "2026-10-09T13:59:58+03:00",
          "tree_id": "006c86b76979601655e2dec62b4bd7ceb1484d69",
          "url": "https://github.com/Mixser/zenmqtt/commit/1ac221dd4f698a0928a8daadb3c2dcadb8fc9e7b"
        },
        "date": 1791543714848,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 95056.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 46849.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 62066,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 30603.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 59213.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 30087.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 24897,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11622.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6938.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16352.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7224.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4089.1,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "af54c6d68932f195b7a6de993d0261b0c7cd49b0",
          "message": "Merge pull request #25 from Mixser/MGG-XXX-upgrade-pytest-asyncio\n\nMGG-XXX Upgrade pytest and pytest-asyncio",
          "timestamp": "2026-10-09T15:36:26+03:00",
          "tree_id": "8b6ceeb7aa3baa6235ab5baf40ef85db74a22d3a",
          "url": "https://github.com/Mixser/zenmqtt/commit/af54c6d68932f195b7a6de993d0261b0c7cd49b0"
        },
        "date": 1791549490125,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 94534.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 45580.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 62068.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 30668,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58406.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29387.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23580.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11334.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6540,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18339.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7107.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4038.7,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "bfae94de0d45ac44c29a7af1fd343b37e08d02c1",
          "message": "Merge pull request #26 from Mixser/MGG-XXX-will-message-defaults\n\nMGG-XXX Default values for WillMessage",
          "timestamp": "2026-10-09T15:36:47+03:00",
          "tree_id": "0cdf044a9194617ec83a3ca61ec1a60728134a69",
          "url": "https://github.com/Mixser/zenmqtt/commit/bfae94de0d45ac44c29a7af1fd343b37e08d02c1"
        },
        "date": 1791549649072,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 94957.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 45689.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 61508.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 30201.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58540.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29024.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23368.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11762.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7000.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16296.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7297.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4140.6,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "88a884c374a65584b00b7553ed131b7f0eb788c8",
          "message": "Merge pull request #27 from Mixser/MGG-XXX-typing-and-duplication\n\nMGG-XXX Remove duplicated definitions and fix strict typing",
          "timestamp": "2026-10-09T15:56:07+03:00",
          "tree_id": "0f583a108f8592831ebafa7d6d717c327a23a34c",
          "url": "https://github.com/Mixser/zenmqtt/commit/88a884c374a65584b00b7553ed131b7f0eb788c8"
        },
        "date": 1791550677247,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 89995.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 45288.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 58911.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 29885.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 55631.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29011.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23821.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11306,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6553.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17109,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6880.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3944.9,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "b57e072be5c9769f5e61d3381ceb1af02929a2dc",
          "message": "Merge pull request #30 from Mixser/MGG-XXX-tests-cleanup\n\nMGG-XXX Clean up tests",
          "timestamp": "2026-10-09T15:56:51+03:00",
          "tree_id": "b2a83222c94bedace6be64e49aafa2baa31904d9",
          "url": "https://github.com/Mixser/zenmqtt/commit/b57e072be5c9769f5e61d3381ceb1af02929a2dc"
        },
        "date": 1791550857463,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 96242.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 46495.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 61124.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 30469.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 59066.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29323.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 22622.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11591.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6996.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18561.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7218.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4106,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "e77770d541109d3dfc7aa5b6e2a3699bb1504334",
          "message": "Merge pull request #32 from Mixser/MGG-XXX-p0-fixes\n\nMGG-XXX Fix write backpressure, publish leak and errors of the read loop",
          "timestamp": "2026-10-11T19:31:19+03:00",
          "tree_id": "4cacaafa23bc9d42c5f6e18502a8ea5efb4d028a",
          "url": "https://github.com/Mixser/zenmqtt/commit/e77770d541109d3dfc7aa5b6e2a3699bb1504334"
        },
        "date": 1791736387518,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 95876.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 45726.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 62930.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 30697.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 59660.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29648.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 26142.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11875.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6895.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18465.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7305.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4096.1,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "50aef7166cba93d2d80e83697be292b59146e828",
          "message": "Merge pull request #31 from Mixser/MGG-XXX-strict-mypy\n\nMGG-XXX Enable strict mypy",
          "timestamp": "2026-10-11T19:31:35+03:00",
          "tree_id": "2fbfc5779739d9b5c3148336ce6336f6a7c06e01",
          "url": "https://github.com/Mixser/zenmqtt/commit/50aef7166cba93d2d80e83697be292b59146e828"
        },
        "date": 1791736532107,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 95745.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 47195.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 62891.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 31403.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 59689.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29827.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21646.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11584.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6780.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17389.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7167.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3998.9,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "f286fb8d1d9803f73185885767bc0b75b0e6f169",
          "message": "Merge pull request #34 from Mixser/MGG-XXX-publish-workflow\n\nMGG-XXX Add the publish workflow",
          "timestamp": "2026-10-11T19:51:32+03:00",
          "tree_id": "e6bfe6935ad6740ddbc26e3bacc059c09f0e1c8c",
          "url": "https://github.com/Mixser/zenmqtt/commit/f286fb8d1d9803f73185885767bc0b75b0e6f169"
        },
        "date": 1791737594402,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 174498,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 86375.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 110715,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 58152.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 106985.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 56761,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 68993.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 24943.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 15710.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 44142.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 15989.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9574.2,
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
        "date": 1791533798304,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 135145.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 41937.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 82618.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 28688.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 79602.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 27795.5,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 0, 64 B",
            "value": 316153.8,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 1, 64 B",
            "value": 307658.9,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 2, 64 B",
            "value": 300947.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 36690.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 17515.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9980.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 22166.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11391.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6359.4,
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
          "id": "7e9e482e4f5079e18b85dde9eb041f2a50eca596",
          "message": "MGG-XXX Removed Python 3.15 from CI for now;",
          "timestamp": "2026-10-09T11:14:52+03:00",
          "tree_id": "720c1198c18742159c70c8e87c0d2e3feefa9fc5",
          "url": "https://github.com/Mixser/zenmqtt/commit/7e9e482e4f5079e18b85dde9eb041f2a50eca596"
        },
        "date": 1791533976863,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 98278.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 26328.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 60346.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 18147.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 57714.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 17895.5,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 0, 64 B",
            "value": 232456.4,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 1, 64 B",
            "value": 220690.4,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 2, 64 B",
            "value": 217960.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16916.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 9462.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 5409,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 13477.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6348.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3455.8,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "2f1b150d11bc949d36b0f3b18458d324af63ca58",
          "message": "Merge pull request #21 from Mixser/MGG-XXX-readme-license\n\nMGG-XXX README and MIT license",
          "timestamp": "2026-10-09T11:29:01+03:00",
          "tree_id": "3e553022907944ac5a1b72a67e1a932209ca46a9",
          "url": "https://github.com/Mixser/zenmqtt/commit/2f1b150d11bc949d36b0f3b18458d324af63ca58"
        },
        "date": 1791534683912,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 131748.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 41495.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 82409.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 27520.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 78285.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 27602.7,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 0, 64 B",
            "value": 326719.6,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 1, 64 B",
            "value": 306705.1,
            "unit": "msg/s"
          },
          {
            "name": "pack publish, zenmqtt, QoS 2, 64 B",
            "value": 305189.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 38932.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 19122.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11724.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 29303.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11989.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7028.4,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "ac2388d2e3f8422eba059bd95c3a70bb18f2740a",
          "message": "Merge pull request #22 from Mixser/MGG-XXX-codec-benchmarks\n\nMGG-XXX Codec micro-benchmarks with pytest-benchmark",
          "timestamp": "2026-10-09T11:45:31+03:00",
          "tree_id": "bc415e673267ed748d008edc463703f6322af702",
          "url": "https://github.com/Mixser/zenmqtt/commit/ac2388d2e3f8422eba059bd95c3a70bb18f2740a"
        },
        "date": 1791535722169,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 96896,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 26728.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 60931.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 18958.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 57622.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 19506.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21582.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11506.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6868.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16577.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7075,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4012.4,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "1c64c7c78b6130ff7ed73c7d265923760dcc166e",
          "message": "Merge pull request #23 from Mixser/MGG-XXX-fast-publish-packing\n\nMGG-XXX Fast packing of packets",
          "timestamp": "2026-10-09T13:31:18+03:00",
          "tree_id": "7c788a79f44070686045f948a9bae302f3d1cc65",
          "url": "https://github.com/Mixser/zenmqtt/commit/1c64c7c78b6130ff7ed73c7d265923760dcc166e"
        },
        "date": 1791542021999,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 99711.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 27634.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 63944,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 19100.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 59845.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 18533.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 19637.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11783.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6980.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18491.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7249.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4032.1,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "1ac221dd4f698a0928a8daadb3c2dcadb8fc9e7b",
          "message": "Merge pull request #24 from Mixser/MGG-XXX-faster-otel-metrics\n\nMGG-XXX Reduce cost of OpenTelemetry metrics",
          "timestamp": "2026-10-09T13:59:58+03:00",
          "tree_id": "006c86b76979601655e2dec62b4bd7ceb1484d69",
          "url": "https://github.com/Mixser/zenmqtt/commit/1ac221dd4f698a0928a8daadb3c2dcadb8fc9e7b"
        },
        "date": 1791543777425,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 100713.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 45392.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 65167.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 30666.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 61365.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 30722.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 20879.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11868.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7150.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18103,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7361.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4205.3,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "af54c6d68932f195b7a6de993d0261b0c7cd49b0",
          "message": "Merge pull request #25 from Mixser/MGG-XXX-upgrade-pytest-asyncio\n\nMGG-XXX Upgrade pytest and pytest-asyncio",
          "timestamp": "2026-10-09T15:36:26+03:00",
          "tree_id": "8b6ceeb7aa3baa6235ab5baf40ef85db74a22d3a",
          "url": "https://github.com/Mixser/zenmqtt/commit/af54c6d68932f195b7a6de993d0261b0c7cd49b0"
        },
        "date": 1791549540026,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 134661,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 66684.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 85050.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 44348.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 80119.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 43629,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 44193.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 19892.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 12629.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 31392.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 12601.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7392.2,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "bfae94de0d45ac44c29a7af1fd343b37e08d02c1",
          "message": "Merge pull request #26 from Mixser/MGG-XXX-will-message-defaults\n\nMGG-XXX Default values for WillMessage",
          "timestamp": "2026-10-09T15:36:47+03:00",
          "tree_id": "0cdf044a9194617ec83a3ca61ec1a60728134a69",
          "url": "https://github.com/Mixser/zenmqtt/commit/bfae94de0d45ac44c29a7af1fd343b37e08d02c1"
        },
        "date": 1791549701605,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 102377.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 51800.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 65753.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 33932,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 61771.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 33156.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 33477.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 15927.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9795.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16652.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 9900.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 5790.5,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "88a884c374a65584b00b7553ed131b7f0eb788c8",
          "message": "Merge pull request #27 from Mixser/MGG-XXX-typing-and-duplication\n\nMGG-XXX Remove duplicated definitions and fix strict typing",
          "timestamp": "2026-10-09T15:56:07+03:00",
          "tree_id": "0f583a108f8592831ebafa7d6d717c327a23a34c",
          "url": "https://github.com/Mixser/zenmqtt/commit/88a884c374a65584b00b7553ed131b7f0eb788c8"
        },
        "date": 1791550735024,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 101131.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 45948.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 64202.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 30322.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 60952.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29294.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23630.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11841.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7116.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18169.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7301.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4159.3,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "b57e072be5c9769f5e61d3381ceb1af02929a2dc",
          "message": "Merge pull request #30 from Mixser/MGG-XXX-tests-cleanup\n\nMGG-XXX Clean up tests",
          "timestamp": "2026-10-09T15:56:51+03:00",
          "tree_id": "b2a83222c94bedace6be64e49aafa2baa31904d9",
          "url": "https://github.com/Mixser/zenmqtt/commit/b57e072be5c9769f5e61d3381ceb1af02929a2dc"
        },
        "date": 1791550909318,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 98360.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 42140.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 63517.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 28857,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 59971.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 27396.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 25187.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11853,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7115.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18006.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7245,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4095,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "e77770d541109d3dfc7aa5b6e2a3699bb1504334",
          "message": "Merge pull request #32 from Mixser/MGG-XXX-p0-fixes\n\nMGG-XXX Fix write backpressure, publish leak and errors of the read loop",
          "timestamp": "2026-10-11T19:31:19+03:00",
          "tree_id": "4cacaafa23bc9d42c5f6e18502a8ea5efb4d028a",
          "url": "https://github.com/Mixser/zenmqtt/commit/e77770d541109d3dfc7aa5b6e2a3699bb1504334"
        },
        "date": 1791736430582,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 186659.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 93822.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 118941.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 61521.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 114131.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 53732.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 66193.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 26932,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 16274.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 45284.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 16761.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9401.9,
            "unit": "msg/s"
          }
        ]
      },
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
          "id": "50aef7166cba93d2d80e83697be292b59146e828",
          "message": "Merge pull request #31 from Mixser/MGG-XXX-strict-mypy\n\nMGG-XXX Enable strict mypy",
          "timestamp": "2026-10-11T19:31:35+03:00",
          "tree_id": "2fbfc5779739d9b5c3148336ce6336f6a7c06e01",
          "url": "https://github.com/Mixser/zenmqtt/commit/50aef7166cba93d2d80e83697be292b59146e828"
        },
        "date": 1791736587447,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 103702.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 53211.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 66800.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 34836.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 63864.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 33451.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 33846.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 15653.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9606.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16548.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 9825.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 5760.6,
            "unit": "msg/s"
          }
        ]
      }
    ],
    "zenmqtt codec (Python 3.12)": [
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
          "id": "ac2388d2e3f8422eba059bd95c3a70bb18f2740a",
          "message": "Merge pull request #22 from Mixser/MGG-XXX-codec-benchmarks\n\nMGG-XXX Codec micro-benchmarks with pytest-benchmark",
          "timestamp": "2026-10-09T11:45:31+03:00",
          "tree_id": "bc415e673267ed748d008edc463703f6322af702",
          "url": "https://github.com/Mixser/zenmqtt/commit/ac2388d2e3f8422eba059bd95c3a70bb18f2740a"
        },
        "date": 1791535594385,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 238882.1444321336,
            "unit": "iter/sec",
            "range": "stddev: 7.095164385461972e-7",
            "extra": "mean: 4.186164697981853 usec\nrounds: 22265"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 224272.45317828786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010937983283973877",
            "extra": "mean: 4.458862360617418 usec\nrounds: 63136"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 5210.125034747145,
            "unit": "iter/sec",
            "range": "stddev: 0.000008198304398327338",
            "extra": "mean: 191.9339734326609 usec\nrounds: 5232"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 5359.2511106153115,
            "unit": "iter/sec",
            "range": "stddev: 0.000009287252120682692",
            "extra": "mean: 186.59323464415664 usec\nrounds: 5340"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 87426.78289618634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014651602198205708",
            "extra": "mean: 11.438142487610866 usec\nrounds: 15461"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 174307.21758441205,
            "unit": "iter/sec",
            "range": "stddev: 8.731057765732222e-7",
            "extra": "mean: 5.736997089725951 usec\nrounds: 28519"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 164019.62438107745,
            "unit": "iter/sec",
            "range": "stddev: 8.910218795475192e-7",
            "extra": "mean: 6.096831423516951 usec\nrounds: 61088"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 134739.00631499663,
            "unit": "iter/sec",
            "range": "stddev: 0.000001178865937149574",
            "extra": "mean: 7.4217557880913265 usec\nrounds: 52176"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 129898.22205797915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013496545828590913",
            "extra": "mean: 7.698334774387113 usec\nrounds: 26137"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79738.03957372309,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014798858677792844",
            "extra": "mean: 12.541065786743276 usec\nrounds: 28486"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 577802.29990252,
            "unit": "iter/sec",
            "range": "stddev: 4.782964312961158e-7",
            "extra": "mean: 1.7306957763385644 usec\nrounds: 85092"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 141281.70300816596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010413642583988886",
            "extra": "mean: 7.078057375498941 usec\nrounds: 36723"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 145612.89658534204,
            "unit": "iter/sec",
            "range": "stddev: 0.000001038801307403379",
            "extra": "mean: 6.867523574149296 usec\nrounds: 43098"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 143556.59712095014,
            "unit": "iter/sec",
            "range": "stddev: 9.995525551050478e-7",
            "extra": "mean: 6.9658937314979275 usec\nrounds: 56329"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 52147.33159205687,
            "unit": "iter/sec",
            "range": "stddev: 0.00000196862451650519",
            "extra": "mean: 19.17643663577833 usec\nrounds: 20177"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 202647.7690042597,
            "unit": "iter/sec",
            "range": "stddev: 8.389278414349337e-7",
            "extra": "mean: 4.9346706599024035 usec\nrounds: 45828"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1386021.5401185518,
            "unit": "iter/sec",
            "range": "stddev: 1.2766576531896666e-7",
            "extra": "mean: 721.4895086799777 nsec\nrounds: 198847"
          }
        ]
      },
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
          "id": "1c64c7c78b6130ff7ed73c7d265923760dcc166e",
          "message": "Merge pull request #23 from Mixser/MGG-XXX-fast-publish-packing\n\nMGG-XXX Fast packing of packets",
          "timestamp": "2026-10-09T13:31:18+03:00",
          "tree_id": "7c788a79f44070686045f948a9bae302f3d1cc65",
          "url": "https://github.com/Mixser/zenmqtt/commit/1c64c7c78b6130ff7ed73c7d265923760dcc166e"
        },
        "date": 1791541925838,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 669128.3003111996,
            "unit": "iter/sec",
            "range": "stddev: 2.4682309688529156e-7",
            "extra": "mean: 1.494481700347927 usec\nrounds: 24372"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 642225.0965992927,
            "unit": "iter/sec",
            "range": "stddev: 2.702807369933512e-7",
            "extra": "mean: 1.5570864565947289 usec\nrounds: 93145"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 517025.33805826656,
            "unit": "iter/sec",
            "range": "stddev: 3.6648890745665966e-7",
            "extra": "mean: 1.9341411849476984 usec\nrounds: 97220"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 488500.48290370364,
            "unit": "iter/sec",
            "range": "stddev: 3.716769626209512e-7",
            "extra": "mean: 2.047080883228372 usec\nrounds: 116118"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 231058.68391399938,
            "unit": "iter/sec",
            "range": "stddev: 4.636211349372954e-7",
            "extra": "mean: 4.327904855427128 usec\nrounds: 33097"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 309110.11405503104,
            "unit": "iter/sec",
            "range": "stddev: 4.117850277971441e-7",
            "extra": "mean: 3.2350931093182203 usec\nrounds: 28096"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 303344.9643789136,
            "unit": "iter/sec",
            "range": "stddev: 4.653778020428848e-7",
            "extra": "mean: 3.29657689240848 usec\nrounds: 66437"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 267509.9318689261,
            "unit": "iter/sec",
            "range": "stddev: 6.105277280557314e-7",
            "extra": "mean: 3.738178964099089 usec\nrounds: 73579"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 258824.31012200116,
            "unit": "iter/sec",
            "range": "stddev: 5.657026293291416e-7",
            "extra": "mean: 3.863624709474289 usec\nrounds: 84761"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 145861.16711790892,
            "unit": "iter/sec",
            "range": "stddev: 5.950093645085599e-7",
            "extra": "mean: 6.855834350973183 usec\nrounds: 37996"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1451954.2451292833,
            "unit": "iter/sec",
            "range": "stddev: 1.9157660535274668e-7",
            "extra": "mean: 688.7269370605816 nsec\nrounds: 87207"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 270821.3934892541,
            "unit": "iter/sec",
            "range": "stddev: 4.4744031782469264e-7",
            "extra": "mean: 3.6924704770034307 usec\nrounds: 32263"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 324629.845428107,
            "unit": "iter/sec",
            "range": "stddev: 3.820724087518187e-7",
            "extra": "mean: 3.0804314947729026 usec\nrounds: 38508"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 266484.9788077777,
            "unit": "iter/sec",
            "range": "stddev: 5.232485965742515e-7",
            "extra": "mean: 3.752556727489414 usec\nrounds: 54894"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 185347.54666133365,
            "unit": "iter/sec",
            "range": "stddev: 6.430957026480656e-7",
            "extra": "mean: 5.395269686667049 usec\nrounds: 29360"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 376123.1697284413,
            "unit": "iter/sec",
            "range": "stddev: 3.233651990295166e-7",
            "extra": "mean: 2.658703532467819 usec\nrounds: 41954"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2755512.7515686667,
            "unit": "iter/sec",
            "range": "stddev: 4.454971770725135e-8",
            "extra": "mean: 362.90886312564396 nsec\nrounds: 195389"
          }
        ]
      },
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
          "id": "1ac221dd4f698a0928a8daadb3c2dcadb8fc9e7b",
          "message": "Merge pull request #24 from Mixser/MGG-XXX-faster-otel-metrics\n\nMGG-XXX Reduce cost of OpenTelemetry metrics",
          "timestamp": "2026-10-09T13:59:58+03:00",
          "tree_id": "006c86b76979601655e2dec62b4bd7ceb1484d69",
          "url": "https://github.com/Mixser/zenmqtt/commit/1ac221dd4f698a0928a8daadb3c2dcadb8fc9e7b"
        },
        "date": 1791543655712,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 354654.74896853475,
            "unit": "iter/sec",
            "range": "stddev: 5.798163010379979e-7",
            "extra": "mean: 2.8196436193463206 usec\nrounds: 23994"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 339491.0197451674,
            "unit": "iter/sec",
            "range": "stddev: 6.399500080895331e-7",
            "extra": "mean: 2.9455860150605204 usec\nrounds: 72807"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 264077.70774347405,
            "unit": "iter/sec",
            "range": "stddev: 7.753011005908883e-7",
            "extra": "mean: 3.7867641632644107 usec\nrounds: 66016"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 256587.9329405433,
            "unit": "iter/sec",
            "range": "stddev: 8.425570295496673e-7",
            "extra": "mean: 3.8972994113161215 usec\nrounds: 70141"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 123786.53981672012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011343298812677174",
            "extra": "mean: 8.078422754853737 usec\nrounds: 25568"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 172821.69334458472,
            "unit": "iter/sec",
            "range": "stddev: 9.008387334046583e-7",
            "extra": "mean: 5.786310622510369 usec\nrounds: 27696"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 168179.02292676797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014298884225214955",
            "extra": "mean: 5.946044771799162 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 138907.34755781083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011369022064016736",
            "extra": "mean: 7.1990432297601625 usec\nrounds: 47259"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 132153.37077167234,
            "unit": "iter/sec",
            "range": "stddev: 0.000001191399146255227",
            "extra": "mean: 7.566965520143617 usec\nrounds: 52813"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 80990.8771174014,
            "unit": "iter/sec",
            "range": "stddev: 0.000001772882352419936",
            "extra": "mean: 12.347069640330437 usec\nrounds: 27757"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 778216.4293108193,
            "unit": "iter/sec",
            "range": "stddev: 4.226469820974067e-7",
            "extra": "mean: 1.2849895765957937 usec\nrounds: 78285"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 141471.32586687958,
            "unit": "iter/sec",
            "range": "stddev: 0.000001038703564863783",
            "extra": "mean: 7.068570212885197 usec\nrounds: 29254"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 171650.13957124812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011115765016164336",
            "extra": "mean: 5.8258035938556425 usec\nrounds: 36562"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 145366.18703625107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010434272121884507",
            "extra": "mean: 6.879178854368811 usec\nrounds: 50488"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 92822.16057325547,
            "unit": "iter/sec",
            "range": "stddev: 0.000001254730331125011",
            "extra": "mean: 10.773289415201639 usec\nrounds: 27058"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 206400.67258863826,
            "unit": "iter/sec",
            "range": "stddev: 8.468149129633849e-7",
            "extra": "mean: 4.844945452251626 usec\nrounds: 40460"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1397247.857012288,
            "unit": "iter/sec",
            "range": "stddev: 1.128039962593572e-7",
            "extra": "mean: 715.692634618373 nsec\nrounds: 197278"
          }
        ]
      },
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
          "id": "af54c6d68932f195b7a6de993d0261b0c7cd49b0",
          "message": "Merge pull request #25 from Mixser/MGG-XXX-upgrade-pytest-asyncio\n\nMGG-XXX Upgrade pytest and pytest-asyncio",
          "timestamp": "2026-10-09T15:36:26+03:00",
          "tree_id": "8b6ceeb7aa3baa6235ab5baf40ef85db74a22d3a",
          "url": "https://github.com/Mixser/zenmqtt/commit/af54c6d68932f195b7a6de993d0261b0c7cd49b0"
        },
        "date": 1791549433774,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 632884.7233931568,
            "unit": "iter/sec",
            "range": "stddev: 3.1076726843159443e-7",
            "extra": "mean: 1.5800665793267792 usec\nrounds: 57255"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 638028.8307737979,
            "unit": "iter/sec",
            "range": "stddev: 2.594332420045673e-7",
            "extra": "mean: 1.5673272926980517 usec\nrounds: 112957"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 520881.7148340733,
            "unit": "iter/sec",
            "range": "stddev: 3.244853586079644e-7",
            "extra": "mean: 1.9198216630018383 usec\nrounds: 106338"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 511884.2624653033,
            "unit": "iter/sec",
            "range": "stddev: 3.660006541603143e-7",
            "extra": "mean: 1.9535666034815482 usec\nrounds: 118162"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 238606.80910620248,
            "unit": "iter/sec",
            "range": "stddev: 4.79206026143073e-7",
            "extra": "mean: 4.190995234988897 usec\nrounds: 29171"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 324804.0617895034,
            "unit": "iter/sec",
            "range": "stddev: 3.510482380723731e-7",
            "extra": "mean: 3.0787792322870415 usec\nrounds: 29411"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 317233.98298789974,
            "unit": "iter/sec",
            "range": "stddev: 3.935434963177327e-7",
            "extra": "mean: 3.1522474060988066 usec\nrounds: 64671"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 272734.3238491087,
            "unit": "iter/sec",
            "range": "stddev: 4.4560240454566175e-7",
            "extra": "mean: 3.666571870701737 usec\nrounds: 80457"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 262374.57835655415,
            "unit": "iter/sec",
            "range": "stddev: 5.304614940953057e-7",
            "extra": "mean: 3.8113448576601394 usec\nrounds: 91777"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 152280.8267970057,
            "unit": "iter/sec",
            "range": "stddev: 5.358799361069708e-7",
            "extra": "mean: 6.5668148842731595 usec\nrounds: 39451"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1481460.879449817,
            "unit": "iter/sec",
            "range": "stddev: 2.1204421547259084e-7",
            "extra": "mean: 675.0093869312153 nsec\nrounds: 83627"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 272614.4583711199,
            "unit": "iter/sec",
            "range": "stddev: 3.879246291632038e-7",
            "extra": "mean: 3.6681840206679865 usec\nrounds: 22454"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 332960.5997275705,
            "unit": "iter/sec",
            "range": "stddev: 3.340868339472282e-7",
            "extra": "mean: 3.003358357770269 usec\nrounds: 36804"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 270799.4591389407,
            "unit": "iter/sec",
            "range": "stddev: 6.559668273623493e-7",
            "extra": "mean: 3.6927695615777574 usec\nrounds: 58597"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 186429.97557508113,
            "unit": "iter/sec",
            "range": "stddev: 5.137676589644246e-7",
            "extra": "mean: 5.363944274064815 usec\nrounds: 30004"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 384908.3130196671,
            "unit": "iter/sec",
            "range": "stddev: 3.436293580359054e-7",
            "extra": "mean: 2.598021310984012 usec\nrounds: 45141"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2815976.596379495,
            "unit": "iter/sec",
            "range": "stddev: 4.000071448219734e-8",
            "extra": "mean: 355.11658771798795 nsec\nrounds: 197356"
          }
        ]
      },
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
          "id": "bfae94de0d45ac44c29a7af1fd343b37e08d02c1",
          "message": "Merge pull request #26 from Mixser/MGG-XXX-will-message-defaults\n\nMGG-XXX Default values for WillMessage",
          "timestamp": "2026-10-09T15:36:47+03:00",
          "tree_id": "0cdf044a9194617ec83a3ca61ec1a60728134a69",
          "url": "https://github.com/Mixser/zenmqtt/commit/bfae94de0d45ac44c29a7af1fd343b37e08d02c1"
        },
        "date": 1791549600231,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 343244.21943323105,
            "unit": "iter/sec",
            "range": "stddev: 6.557167878556958e-7",
            "extra": "mean: 2.913377541073268 usec\nrounds: 55390"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 334737.111902252,
            "unit": "iter/sec",
            "range": "stddev: 6.199266314762191e-7",
            "extra": "mean: 2.987418975796189 usec\nrounds: 76255"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 258843.69082956034,
            "unit": "iter/sec",
            "range": "stddev: 7.85154481954773e-7",
            "extra": "mean: 3.863335423765324 usec\nrounds: 69363"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 255034.34407206724,
            "unit": "iter/sec",
            "range": "stddev: 7.748151364680606e-7",
            "extra": "mean: 3.921040531378085 usec\nrounds: 78285"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 124311.86818723117,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011366999361823963",
            "extra": "mean: 8.04428422307884 usec\nrounds: 24428"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 169515.30101556136,
            "unit": "iter/sec",
            "range": "stddev: 9.59047399343655e-7",
            "extra": "mean: 5.899172487728413 usec\nrounds: 17236"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 162042.9263875942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010282938005027229",
            "extra": "mean: 6.171204274650514 usec\nrounds: 63537"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 137955.41378674028,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011350062954380122",
            "extra": "mean: 7.248718789288398 usec\nrounds: 32641"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130746.54135545497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011829014744263767",
            "extra": "mean: 7.648385874172711 usec\nrounds: 52981"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79435.4008726742,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015902189914439331",
            "extra": "mean: 12.588845640785332 usec\nrounds: 21139"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 775715.3260527608,
            "unit": "iter/sec",
            "range": "stddev: 4.747925934464144e-7",
            "extra": "mean: 1.2891327094032228 usec\nrounds: 86874"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 142174.37007109093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011063484436982992",
            "extra": "mean: 7.033616533697132 usec\nrounds: 36350"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 172856.20823868786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010037262628751517",
            "extra": "mean: 5.785155246603313 usec\nrounds: 30210"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 142796.4167323735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011246014333630904",
            "extra": "mean: 7.002976845519746 usec\nrounds: 49364"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93830.48996535492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013232266672629238",
            "extra": "mean: 10.657516553193217 usec\nrounds: 26007"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 206559.76101275044,
            "unit": "iter/sec",
            "range": "stddev: 9.788196014250813e-7",
            "extra": "mean: 4.841213966830027 usec\nrounds: 41885"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1400471.8807035834,
            "unit": "iter/sec",
            "range": "stddev: 1.1331891527763084e-7",
            "extra": "mean: 714.0450399458286 nsec\nrounds: 184468"
          }
        ]
      },
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
          "id": "88a884c374a65584b00b7553ed131b7f0eb788c8",
          "message": "Merge pull request #27 from Mixser/MGG-XXX-typing-and-duplication\n\nMGG-XXX Remove duplicated definitions and fix strict typing",
          "timestamp": "2026-10-09T15:56:07+03:00",
          "tree_id": "0f583a108f8592831ebafa7d6d717c327a23a34c",
          "url": "https://github.com/Mixser/zenmqtt/commit/88a884c374a65584b00b7553ed131b7f0eb788c8"
        },
        "date": 1791550620002,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 338127.5866134403,
            "unit": "iter/sec",
            "range": "stddev: 7.164368374110698e-7",
            "extra": "mean: 2.9574635125623043 usec\nrounds: 45084"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 325383.50313605205,
            "unit": "iter/sec",
            "range": "stddev: 7.053140204609784e-7",
            "extra": "mean: 3.073296557329988 usec\nrounds: 76191"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 251640.54360518802,
            "unit": "iter/sec",
            "range": "stddev: 8.385585354786326e-7",
            "extra": "mean: 3.9739224278936236 usec\nrounds: 66016"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 248264.51579889955,
            "unit": "iter/sec",
            "range": "stddev: 8.34521417286057e-7",
            "extra": "mean: 4.027961856659471 usec\nrounds: 74823"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 145915.16879968927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011906784719646304",
            "extra": "mean: 6.853297078200204 usec\nrounds: 27757"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 171119.9568326638,
            "unit": "iter/sec",
            "range": "stddev: 9.788149778860366e-7",
            "extra": "mean: 5.843853741605886 usec\nrounds: 27889"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 163689.63484270003,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019778513901134713",
            "extra": "mean: 6.109122309185703 usec\nrounds: 62898"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 129387.51314697643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016125307106814116",
            "extra": "mean: 7.728721077311843 usec\nrounds: 23874"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 124845.06063765968,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013022936035236404",
            "extra": "mean: 8.009928425621258 usec\nrounds: 51932"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 78647.93890114999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016883573568660123",
            "extra": "mean: 12.714891375053924 usec\nrounds: 25206"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 757322.3347239066,
            "unit": "iter/sec",
            "range": "stddev: 4.642272826074872e-7",
            "extra": "mean: 1.3204417117376648 usec\nrounds: 64730"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 140236.95260485355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010846983895148522",
            "extra": "mean: 7.130788151235043 usec\nrounds: 27581"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 217953.02365638115,
            "unit": "iter/sec",
            "range": "stddev: 9.354499232085704e-7",
            "extra": "mean: 4.588144652567761 usec\nrounds: 36363"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 143009.438622108,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012376068615982018",
            "extra": "mean: 6.9925454545865815 usec\nrounds: 39204"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 88733.60520826766,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014092117370716608",
            "extra": "mean: 11.269687483709117 usec\nrounds: 22994"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 203652.39272238885,
            "unit": "iter/sec",
            "range": "stddev: 8.704524911816419e-7",
            "extra": "mean: 4.9103277728887855 usec\nrounds: 39625"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1379751.4225547842,
            "unit": "iter/sec",
            "range": "stddev: 1.3892109443043006e-7",
            "extra": "mean: 724.7682326345231 nsec\nrounds: 195695"
          }
        ]
      },
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
          "id": "b57e072be5c9769f5e61d3381ceb1af02929a2dc",
          "message": "Merge pull request #30 from Mixser/MGG-XXX-tests-cleanup\n\nMGG-XXX Clean up tests",
          "timestamp": "2026-10-09T15:56:51+03:00",
          "tree_id": "b2a83222c94bedace6be64e49aafa2baa31904d9",
          "url": "https://github.com/Mixser/zenmqtt/commit/b57e072be5c9769f5e61d3381ceb1af02929a2dc"
        },
        "date": 1791550795487,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 346178.349566377,
            "unit": "iter/sec",
            "range": "stddev: 7.93640331069082e-7",
            "extra": "mean: 2.8886844057480774 usec\nrounds: 37751"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 336038.9877212484,
            "unit": "iter/sec",
            "range": "stddev: 6.173319623177228e-7",
            "extra": "mean: 2.9758451743388825 usec\nrounds: 29840"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 258927.5017118791,
            "unit": "iter/sec",
            "range": "stddev: 9.977170741486362e-7",
            "extra": "mean: 3.8620849210245236 usec\nrounds: 69076"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 254458.94556338942,
            "unit": "iter/sec",
            "range": "stddev: 8.608801123174998e-7",
            "extra": "mean: 3.9299070338672193 usec\nrounds: 74823"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 151413.98796697374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011994205034159095",
            "extra": "mean: 6.6044096283767315 usec\nrounds: 28665"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 172144.35473363413,
            "unit": "iter/sec",
            "range": "stddev: 0.000001030737247298657",
            "extra": "mean: 5.809078093483461 usec\nrounds: 17287"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 165454.653495447,
            "unit": "iter/sec",
            "range": "stddev: 9.996362019491613e-7",
            "extra": "mean: 6.043952097288809 usec\nrounds: 57429"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 135888.1748432398,
            "unit": "iter/sec",
            "range": "stddev: 0.00000117016213590768",
            "extra": "mean: 7.358992062065717 usec\nrounds: 46359"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130881.08698475386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012223790915165954",
            "extra": "mean: 7.64052334098118 usec\nrounds: 49291"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 80611.97147144939,
            "unit": "iter/sec",
            "range": "stddev: 0.000001490355319290554",
            "extra": "mean: 12.405105367683179 usec\nrounds: 25653"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 772054.9515920768,
            "unit": "iter/sec",
            "range": "stddev: 4.57947358433296e-7",
            "extra": "mean: 1.2952445909942951 usec\nrounds: 81348"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 142742.02095940412,
            "unit": "iter/sec",
            "range": "stddev: 0.000001150519854776519",
            "extra": "mean: 7.005645522452007 usec\nrounds: 26532"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 223972.40796435857,
            "unit": "iter/sec",
            "range": "stddev: 9.561889884945672e-7",
            "extra": "mean: 4.464835687077728 usec\nrounds: 20534"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 146824.72541090153,
            "unit": "iter/sec",
            "range": "stddev: 0.00000101920170752065",
            "extra": "mean: 6.810841955954044 usec\nrounds: 43741"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 92301.51494297873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015354071643576286",
            "extra": "mean: 10.834058364239977 usec\nrounds: 22531"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 206143.56409702633,
            "unit": "iter/sec",
            "range": "stddev: 9.010226504595633e-7",
            "extra": "mean: 4.850988214841023 usec\nrounds: 38523"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1337254.303600193,
            "unit": "iter/sec",
            "range": "stddev: 1.2942799097710688e-7",
            "extra": "mean: 747.8009211170772 nsec\nrounds: 191939"
          }
        ]
      },
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
          "id": "e77770d541109d3dfc7aa5b6e2a3699bb1504334",
          "message": "Merge pull request #32 from Mixser/MGG-XXX-p0-fixes\n\nMGG-XXX Fix write backpressure, publish leak and errors of the read loop",
          "timestamp": "2026-10-11T19:31:19+03:00",
          "tree_id": "4cacaafa23bc9d42c5f6e18502a8ea5efb4d028a",
          "url": "https://github.com/Mixser/zenmqtt/commit/e77770d541109d3dfc7aa5b6e2a3699bb1504334"
        },
        "date": 1791736334926,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 348468.14740123926,
            "unit": "iter/sec",
            "range": "stddev: 5.798337103572375e-7",
            "extra": "mean: 2.8697027474610546 usec\nrounds: 44659"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 336765.45546514646,
            "unit": "iter/sec",
            "range": "stddev: 6.680418561987865e-7",
            "extra": "mean: 2.9694257049577195 usec\nrounds: 76600"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 260610.49488719995,
            "unit": "iter/sec",
            "range": "stddev: 8.507167663969467e-7",
            "extra": "mean: 3.837144012303994 usec\nrounds: 69994"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 255100.8340291791,
            "unit": "iter/sec",
            "range": "stddev: 9.290038216696383e-7",
            "extra": "mean: 3.920018544061747 usec\nrounds: 73932"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 150186.47645880445,
            "unit": "iter/sec",
            "range": "stddev: 0.000001070073955860693",
            "extra": "mean: 6.658389114510559 usec\nrounds: 29048"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 171751.23824677453,
            "unit": "iter/sec",
            "range": "stddev: 9.534812402779103e-7",
            "extra": "mean: 5.822374325844372 usec\nrounds: 27257"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 165762.8950425204,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010129226647448369",
            "extra": "mean: 6.032713169877292 usec\nrounds: 59659"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 135501.47908447447,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013179329321081785",
            "extra": "mean: 7.3799932425577355 usec\nrounds: 47059"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130692.86608200907,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012943473528960955",
            "extra": "mean: 7.651527049475718 usec\nrounds: 52367"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79859.31879543893,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018555676023415553",
            "extra": "mean: 12.52202016099734 usec\nrounds: 25346"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 785578.2595733386,
            "unit": "iter/sec",
            "range": "stddev: 4.6090509751191836e-7",
            "extra": "mean: 1.2729476507447108 usec\nrounds: 82217"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 140082.8017421072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010749146828859374",
            "extra": "mean: 7.138635061290412 usec\nrounds: 29109"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 223588.96427863822,
            "unit": "iter/sec",
            "range": "stddev: 9.17222284009095e-7",
            "extra": "mean: 4.472492652874372 usec\nrounds: 37566"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 140089.26730818884,
            "unit": "iter/sec",
            "range": "stddev: 0.000001111026834542274",
            "extra": "mean: 7.138305590535026 usec\nrounds: 43663"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93318.85913357697,
            "unit": "iter/sec",
            "range": "stddev: 0.000001354234691008533",
            "extra": "mean: 10.715947551058207 usec\nrounds: 23642"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 202816.0220259342,
            "unit": "iter/sec",
            "range": "stddev: 8.907128801293432e-7",
            "extra": "mean: 4.930576933769707 usec\nrounds: 39781"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1412874.2516024986,
            "unit": "iter/sec",
            "range": "stddev: 1.1536321308756174e-7",
            "extra": "mean: 707.7770713605888 nsec\nrounds: 195734"
          }
        ]
      },
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
          "id": "50aef7166cba93d2d80e83697be292b59146e828",
          "message": "Merge pull request #31 from Mixser/MGG-XXX-strict-mypy\n\nMGG-XXX Enable strict mypy",
          "timestamp": "2026-10-11T19:31:35+03:00",
          "tree_id": "2fbfc5779739d9b5c3148336ce6336f6a7c06e01",
          "url": "https://github.com/Mixser/zenmqtt/commit/50aef7166cba93d2d80e83697be292b59146e828"
        },
        "date": 1791736478649,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 478826.78212502995,
            "unit": "iter/sec",
            "range": "stddev: 3.878977352720476e-7",
            "extra": "mean: 2.0884379014097894 usec\nrounds: 49518"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 461325.89551257354,
            "unit": "iter/sec",
            "range": "stddev: 4.0824881011427633e-7",
            "extra": "mean: 2.1676650058607962 usec\nrounds: 83091"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 347033.078269398,
            "unit": "iter/sec",
            "range": "stddev: 4.931805284642872e-7",
            "extra": "mean: 2.8815696906670976 usec\nrounds: 42581"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 341273.0893347286,
            "unit": "iter/sec",
            "range": "stddev: 5.959391237779462e-7",
            "extra": "mean: 2.930204669666106 usec\nrounds: 85274"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 203098.89463386522,
            "unit": "iter/sec",
            "range": "stddev: 7.761240490315528e-7",
            "extra": "mean: 4.923709711974264 usec\nrounds: 28985"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 210455.80611468933,
            "unit": "iter/sec",
            "range": "stddev: 7.096725144680458e-7",
            "extra": "mean: 4.751591407533053 usec\nrounds: 26349"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 202488.41526496687,
            "unit": "iter/sec",
            "range": "stddev: 6.307534518716808e-7",
            "extra": "mean: 4.938554132548506 usec\nrounds: 60906"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 169107.83990839697,
            "unit": "iter/sec",
            "range": "stddev: 8.456700144618141e-7",
            "extra": "mean: 5.9133863961699475 usec\nrounds: 17407"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 163226.37021945525,
            "unit": "iter/sec",
            "range": "stddev: 7.96191969321631e-7",
            "extra": "mean: 6.126461053171225 usec\nrounds: 54369"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 101385.1947786827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011375063731847456",
            "extra": "mean: 9.863373071215527 usec\nrounds: 26960"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1049628.4126365033,
            "unit": "iter/sec",
            "range": "stddev: 2.9704345017602423e-7",
            "extra": "mean: 952.718112391942 nsec\nrounds: 62830"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 182018.8649456441,
            "unit": "iter/sec",
            "range": "stddev: 7.50326399275052e-7",
            "extra": "mean: 5.4939360285464245 usec\nrounds: 34406"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 306561.9894700475,
            "unit": "iter/sec",
            "range": "stddev: 6.294688494707879e-7",
            "extra": "mean: 3.2619830062060076 usec\nrounds: 36837"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 188390.57866343617,
            "unit": "iter/sec",
            "range": "stddev: 7.761182840791731e-7",
            "extra": "mean: 5.308121070037805 usec\nrounds: 50541"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 123141.70292927841,
            "unit": "iter/sec",
            "range": "stddev: 9.020161152911633e-7",
            "extra": "mean: 8.120725767243211 usec\nrounds: 24337"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 255196.15328062538,
            "unit": "iter/sec",
            "range": "stddev: 5.725693669600017e-7",
            "extra": "mean: 3.9185543635540387 usec\nrounds: 42878"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1853343.2594637265,
            "unit": "iter/sec",
            "range": "stddev: 4.578850298912631e-8",
            "extra": "mean: 539.5654555051797 nsec\nrounds: 92886"
          }
        ]
      },
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
          "id": "f286fb8d1d9803f73185885767bc0b75b0e6f169",
          "message": "Merge pull request #34 from Mixser/MGG-XXX-publish-workflow\n\nMGG-XXX Add the publish workflow",
          "timestamp": "2026-10-11T19:51:32+03:00",
          "tree_id": "e6bfe6935ad6740ddbc26e3bacc059c09f0e1c8c",
          "url": "https://github.com/Mixser/zenmqtt/commit/f286fb8d1d9803f73185885767bc0b75b0e6f169"
        },
        "date": 1791737549955,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 347392.9816784892,
            "unit": "iter/sec",
            "range": "stddev: 6.499648316591366e-7",
            "extra": "mean: 2.8785843489650462 usec\nrounds: 48738"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 335142.02779063786,
            "unit": "iter/sec",
            "range": "stddev: 6.786763877856147e-7",
            "extra": "mean: 2.983809600342625 usec\nrounds: 69706"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 261174.76390608912,
            "unit": "iter/sec",
            "range": "stddev: 7.995597268079154e-7",
            "extra": "mean: 3.828853848833461 usec\nrounds: 68696"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 254911.4310061307,
            "unit": "iter/sec",
            "range": "stddev: 8.746240403587335e-7",
            "extra": "mean: 3.9229311767346737 usec\nrounds: 73449"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 150630.27895730286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011857434685569577",
            "extra": "mean: 6.638771480224481 usec\nrounds: 27665"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 174342.0680818022,
            "unit": "iter/sec",
            "range": "stddev: 8.916439344702997e-7",
            "extra": "mean: 5.735850279869314 usec\nrounds: 26977"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 163404.94117551798,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014881318685773925",
            "extra": "mean: 6.119765980184596 usec\nrounds: 60935"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 136562.67045365434,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013082520272848648",
            "extra": "mean: 7.322645322312826 usec\nrounds: 48881"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130375.21711059232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012310324182013467",
            "extra": "mean: 7.670169393863699 usec\nrounds: 52068"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79119.78683625703,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016166519237335232",
            "extra": "mean: 12.639063374495155 usec\nrounds: 27014"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 780021.8595633107,
            "unit": "iter/sec",
            "range": "stddev: 4.5527547016733556e-7",
            "extra": "mean: 1.282015353466943 usec\nrounds: 83043"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 141837.1586422522,
            "unit": "iter/sec",
            "range": "stddev: 0.000001187648673232764",
            "extra": "mean: 7.0503386388488165 usec\nrounds: 29592"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 223084.1611649856,
            "unit": "iter/sec",
            "range": "stddev: 8.538703853045475e-7",
            "extra": "mean: 4.482613175125568 usec\nrounds: 20645"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 144668.62411951294,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012250495156503062",
            "extra": "mean: 6.912348866841263 usec\nrounds: 44699"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 92388.08672271205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013350154005085864",
            "extra": "mean: 10.82390636577786 usec\nrounds: 24286"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 202440.41370631784,
            "unit": "iter/sec",
            "range": "stddev: 9.377379969837491e-7",
            "extra": "mean: 4.93972513537099 usec\nrounds: 41555"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1396534.0426153196,
            "unit": "iter/sec",
            "range": "stddev: 1.1718683073436564e-7",
            "extra": "mean: 716.0584486198978 nsec\nrounds: 197629"
          }
        ]
      }
    ],
    "zenmqtt codec (Python 3.13)": [
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
          "id": "ac2388d2e3f8422eba059bd95c3a70bb18f2740a",
          "message": "Merge pull request #22 from Mixser/MGG-XXX-codec-benchmarks\n\nMGG-XXX Codec micro-benchmarks with pytest-benchmark",
          "timestamp": "2026-10-09T11:45:31+03:00",
          "tree_id": "bc415e673267ed748d008edc463703f6322af702",
          "url": "https://github.com/Mixser/zenmqtt/commit/ac2388d2e3f8422eba059bd95c3a70bb18f2740a"
        },
        "date": 1791535666183,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 226355.82314157425,
            "unit": "iter/sec",
            "range": "stddev: 8.721335316913759e-7",
            "extra": "mean: 4.417823169384734 usec\nrounds: 21727"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 218185.33530903645,
            "unit": "iter/sec",
            "range": "stddev: 8.824845226537127e-7",
            "extra": "mean: 4.58325945042826 usec\nrounds: 55024"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 5331.59159428673,
            "unit": "iter/sec",
            "range": "stddev: 0.000007183210282526379",
            "extra": "mean: 187.56125301712686 usec\nrounds: 4640"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 5341.689805844987,
            "unit": "iter/sec",
            "range": "stddev: 0.000006773417837278219",
            "extra": "mean: 187.20667735250734 usec\nrounds: 5303"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 85718.14383062118,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015071944631908377",
            "extra": "mean: 11.666141557801316 usec\nrounds: 20670"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 170898.03514657664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013582968938377813",
            "extra": "mean: 5.851442347726907 usec\nrounds: 24483"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 166090.29143145663,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010632545515177585",
            "extra": "mean: 6.020821514499463 usec\nrounds: 56520"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 136755.5683787107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012642161312692812",
            "extra": "mean: 7.312316506416377 usec\nrounds: 45661"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130209.63466262595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013304108412923395",
            "extra": "mean: 7.679923245242234 usec\nrounds: 44323"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 81503.42035672654,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016040664094498463",
            "extra": "mean: 12.269423732441792 usec\nrounds: 28046"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 581768.1444625834,
            "unit": "iter/sec",
            "range": "stddev: 5.354886529621408e-7",
            "extra": "mean: 1.7188978281438292 usec\nrounds: 59165"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 143707.73363285713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012459929941523186",
            "extra": "mean: 6.958567745245976 usec\nrounds: 29050"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 146171.71700347395,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012021879984073006",
            "extra": "mean: 6.841268752259603 usec\nrounds: 29823"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 145194.70974117634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010494884005897394",
            "extra": "mean: 6.887303275598656 usec\nrounds: 44481"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 50773.637276483125,
            "unit": "iter/sec",
            "range": "stddev: 0.000002142803236843531",
            "extra": "mean: 19.695260250011103 usec\nrounds: 11439"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 203274.96285830322,
            "unit": "iter/sec",
            "range": "stddev: 9.51819301504057e-7",
            "extra": "mean: 4.9194450016801605 usec\nrounds: 35892"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1323650.3994220945,
            "unit": "iter/sec",
            "range": "stddev: 1.1918123425675399e-7",
            "extra": "mean: 755.4864943466945 nsec\nrounds: 175408"
          }
        ]
      },
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
          "id": "1c64c7c78b6130ff7ed73c7d265923760dcc166e",
          "message": "Merge pull request #23 from Mixser/MGG-XXX-fast-publish-packing\n\nMGG-XXX Fast packing of packets",
          "timestamp": "2026-10-09T13:31:18+03:00",
          "tree_id": "7c788a79f44070686045f948a9bae302f3d1cc65",
          "url": "https://github.com/Mixser/zenmqtt/commit/1c64c7c78b6130ff7ed73c7d265923760dcc166e"
        },
        "date": 1791541969754,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 679076.0243098097,
            "unit": "iter/sec",
            "range": "stddev: 2.2672282841626796e-7",
            "extra": "mean: 1.4725891714648103 usec\nrounds: 23752"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 639149.2323563437,
            "unit": "iter/sec",
            "range": "stddev: 3.5328393852634817e-7",
            "extra": "mean: 1.5645798342169828 usec\nrounds: 95548"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 529369.5551293241,
            "unit": "iter/sec",
            "range": "stddev: 3.6582121106931755e-7",
            "extra": "mean: 1.8890395004973446 usec\nrounds: 94733"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 524426.9096741566,
            "unit": "iter/sec",
            "range": "stddev: 3.546010527873492e-7",
            "extra": "mean: 1.906843416218539 usec\nrounds: 117592"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 248265.27718874908,
            "unit": "iter/sec",
            "range": "stddev: 4.349779566377872e-7",
            "extra": "mean: 4.027949503545469 usec\nrounds: 31725"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 332948.3425740559,
            "unit": "iter/sec",
            "range": "stddev: 3.7793746751211636e-7",
            "extra": "mean: 3.0034689233437932 usec\nrounds: 26322"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 309808.8747585124,
            "unit": "iter/sec",
            "range": "stddev: 3.7432111243600427e-7",
            "extra": "mean: 3.2277964947888362 usec\nrounds: 86671"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 269833.19747726904,
            "unit": "iter/sec",
            "range": "stddev: 4.6156461546101745e-7",
            "extra": "mean: 3.7059932185854954 usec\nrounds: 81104"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 255728.7534580624,
            "unit": "iter/sec",
            "range": "stddev: 5.046076959541569e-7",
            "extra": "mean: 3.9103932838119144 usec\nrounds: 96007"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 149872.927569311,
            "unit": "iter/sec",
            "range": "stddev: 6.620226565520964e-7",
            "extra": "mean: 6.672319118724994 usec\nrounds: 36629"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1407511.6959724184,
            "unit": "iter/sec",
            "range": "stddev: 2.3195497660379132e-7",
            "extra": "mean: 710.4736698540344 nsec\nrounds: 65951"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 274667.59752022754,
            "unit": "iter/sec",
            "range": "stddev: 5.066366847885641e-7",
            "extra": "mean: 3.640764360369651 usec\nrounds: 28603"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 338699.9529895206,
            "unit": "iter/sec",
            "range": "stddev: 3.8529367429557645e-7",
            "extra": "mean: 2.952465718325447 usec\nrounds: 36696"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 268706.1859099856,
            "unit": "iter/sec",
            "range": "stddev: 5.27660867837905e-7",
            "extra": "mean: 3.721536951646479 usec\nrounds: 53340"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 184250.40524079825,
            "unit": "iter/sec",
            "range": "stddev: 5.866034759611062e-7",
            "extra": "mean: 5.427396475427516 usec\nrounds: 25762"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 387575.7460157773,
            "unit": "iter/sec",
            "range": "stddev: 3.3925776065302805e-7",
            "extra": "mean: 2.580140811905429 usec\nrounds: 36112"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2501937.591771952,
            "unit": "iter/sec",
            "range": "stddev: 1.732183307352683e-7",
            "extra": "mean: 399.69022540317167 nsec\nrounds: 132962"
          }
        ]
      },
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
          "id": "1ac221dd4f698a0928a8daadb3c2dcadb8fc9e7b",
          "message": "Merge pull request #24 from Mixser/MGG-XXX-faster-otel-metrics\n\nMGG-XXX Reduce cost of OpenTelemetry metrics",
          "timestamp": "2026-10-09T13:59:58+03:00",
          "tree_id": "006c86b76979601655e2dec62b4bd7ceb1484d69",
          "url": "https://github.com/Mixser/zenmqtt/commit/1ac221dd4f698a0928a8daadb3c2dcadb8fc9e7b"
        },
        "date": 1791543717108,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 345036.62793850683,
            "unit": "iter/sec",
            "range": "stddev: 7.059132023464392e-7",
            "extra": "mean: 2.8982430241528507 usec\nrounds: 24298"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 326843.59606104944,
            "unit": "iter/sec",
            "range": "stddev: 6.379379396623753e-7",
            "extra": "mean: 3.05956736509904 usec\nrounds: 73020"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 250966.76552598932,
            "unit": "iter/sec",
            "range": "stddev: 8.361198296897437e-7",
            "extra": "mean: 3.984591337837691 usec\nrounds: 66681"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 248122.34705818185,
            "unit": "iter/sec",
            "range": "stddev: 8.082577851423905e-7",
            "extra": "mean: 4.030269791722998 usec\nrounds: 71444"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 123946.73924809725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012456503809345812",
            "extra": "mean: 8.067981506139956 usec\nrounds: 25522"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 176116.00245775163,
            "unit": "iter/sec",
            "range": "stddev: 8.74611577871819e-7",
            "extra": "mean: 5.678075734429013 usec\nrounds: 26725"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 166756.53605063862,
            "unit": "iter/sec",
            "range": "stddev: 9.256792081170282e-7",
            "extra": "mean: 5.996766445762174 usec\nrounds: 59909"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 136912.06220505846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011292255411738172",
            "extra": "mean: 7.303958350304164 usec\nrounds: 49172"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 132099.043153358,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011194154750438868",
            "extra": "mean: 7.570077542795431 usec\nrounds: 53377"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 81458.88026207242,
            "unit": "iter/sec",
            "range": "stddev: 0.000001484198202901581",
            "extra": "mean: 12.276132409170915 usec\nrounds: 28276"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 730159.5253700052,
            "unit": "iter/sec",
            "range": "stddev: 4.0103603793168195e-7",
            "extra": "mean: 1.3695637258080748 usec\nrounds: 78469"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 144693.81162933982,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011566685886810618",
            "extra": "mean: 6.911145602838126 usec\nrounds: 31270"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 172781.85125582648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010228300879348533",
            "extra": "mean: 5.7876448986494955 usec\nrounds: 40166"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 147638.70151893795,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010420008099657345",
            "extra": "mean: 6.773291756915972 usec\nrounds: 45723"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 92066.95835407205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014004053827372962",
            "extra": "mean: 10.861660012207528 usec\nrounds: 24695"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 203519.46955571158,
            "unit": "iter/sec",
            "range": "stddev: 8.213357794005886e-7",
            "extra": "mean: 4.913534818968557 usec\nrounds: 37695"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1326370.416124007,
            "unit": "iter/sec",
            "range": "stddev: 1.444137364440931e-7",
            "extra": "mean: 753.9372017375473 nsec\nrounds: 186916"
          }
        ]
      },
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
          "id": "af54c6d68932f195b7a6de993d0261b0c7cd49b0",
          "message": "Merge pull request #25 from Mixser/MGG-XXX-upgrade-pytest-asyncio\n\nMGG-XXX Upgrade pytest and pytest-asyncio",
          "timestamp": "2026-10-09T15:36:26+03:00",
          "tree_id": "8b6ceeb7aa3baa6235ab5baf40ef85db74a22d3a",
          "url": "https://github.com/Mixser/zenmqtt/commit/af54c6d68932f195b7a6de993d0261b0c7cd49b0"
        },
        "date": 1791549492746,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 345938.1657816767,
            "unit": "iter/sec",
            "range": "stddev: 6.075221155630361e-7",
            "extra": "mean: 2.8906900102809265 usec\nrounds: 50692"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 333683.7694742606,
            "unit": "iter/sec",
            "range": "stddev: 6.555256885871713e-7",
            "extra": "mean: 2.9968493869976407 usec\nrounds: 77490"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 259533.52032411727,
            "unit": "iter/sec",
            "range": "stddev: 9.7381161610708e-7",
            "extra": "mean: 3.8530668360339524 usec\nrounds: 68885"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 255059.10018383592,
            "unit": "iter/sec",
            "range": "stddev: 9.079481274436979e-7",
            "extra": "mean: 3.9206599540233684 usec\nrounds: 72649"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 125442.21205319618,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014240370882359481",
            "extra": "mean: 7.97179819800954 usec\nrounds: 24861"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 176152.8990579991,
            "unit": "iter/sec",
            "range": "stddev: 8.976905592631373e-7",
            "extra": "mean: 5.676886417127575 usec\nrounds: 33984"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 168636.92784467855,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010094961766761099",
            "extra": "mean: 5.929899297744801 usec\nrounds: 59949"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 137224.5706058349,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010945398656658655",
            "extra": "mean: 7.28732467942938 usec\nrounds: 47262"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 132741.87440150412,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011189821113385663",
            "extra": "mean: 7.533417804356911 usec\nrounds: 54571"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 81477.72346614127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016605714818720202",
            "extra": "mean: 12.273293330483861 usec\nrounds: 27873"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 761250.0505021311,
            "unit": "iter/sec",
            "range": "stddev: 3.8330496200306827e-7",
            "extra": "mean: 1.31362881268827 usec\nrounds: 79340"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 144048.40757306005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010237588595751915",
            "extra": "mean: 6.942110758793423 usec\nrounds: 30589"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 174826.59263926066,
            "unit": "iter/sec",
            "range": "stddev: 9.765118949878967e-7",
            "extra": "mean: 5.719953611767817 usec\nrounds: 36561"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 148450.88311997338,
            "unit": "iter/sec",
            "range": "stddev: 9.703651472213646e-7",
            "extra": "mean: 6.736234766564717 usec\nrounds: 54633"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 94239.1422101901,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012529763870419698",
            "extra": "mean: 10.611302018959485 usec\nrounds: 24121"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 207033.1098130884,
            "unit": "iter/sec",
            "range": "stddev: 8.00640118430249e-7",
            "extra": "mean: 4.830145288851673 usec\nrounds: 42474"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1330139.2413322905,
            "unit": "iter/sec",
            "range": "stddev: 1.1056167032738856e-7",
            "extra": "mean: 751.8009911491541 nsec\nrounds: 188324"
          }
        ]
      },
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
          "id": "bfae94de0d45ac44c29a7af1fd343b37e08d02c1",
          "message": "Merge pull request #26 from Mixser/MGG-XXX-will-message-defaults\n\nMGG-XXX Default values for WillMessage",
          "timestamp": "2026-10-09T15:36:47+03:00",
          "tree_id": "0cdf044a9194617ec83a3ca61ec1a60728134a69",
          "url": "https://github.com/Mixser/zenmqtt/commit/bfae94de0d45ac44c29a7af1fd343b37e08d02c1"
        },
        "date": 1791549651083,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 345863.5604297189,
            "unit": "iter/sec",
            "range": "stddev: 6.650561283367333e-7",
            "extra": "mean: 2.891313553695994 usec\nrounds: 49883"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 334355.2900965649,
            "unit": "iter/sec",
            "range": "stddev: 6.221720855141631e-7",
            "extra": "mean: 2.9908305016235595 usec\nrounds: 74042"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 257163.82107507865,
            "unit": "iter/sec",
            "range": "stddev: 7.507195834783207e-7",
            "extra": "mean: 3.88857186761139 usec\nrounds: 66059"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 249823.13000608282,
            "unit": "iter/sec",
            "range": "stddev: 8.595359240390474e-7",
            "extra": "mean: 4.0028319234317955 usec\nrounds: 77191"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 123711.12201738716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013277879431729997",
            "extra": "mean: 8.083347589875174 usec\nrounds: 23755"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 172069.00315071104,
            "unit": "iter/sec",
            "range": "stddev: 8.490339465715765e-7",
            "extra": "mean: 5.811621975424153 usec\nrounds: 33847"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 164191.48489513496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010592155590156618",
            "extra": "mean: 6.090449822283264 usec\nrounds: 63016"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 133670.17841228074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011604108432615765",
            "extra": "mean: 7.481100211564666 usec\nrounds: 48667"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 127839.9707220221,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010508054338878393",
            "extra": "mean: 7.822279638771358 usec\nrounds: 25372"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 80132.62521086176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014156471726513468",
            "extra": "mean: 12.479311608331694 usec\nrounds: 28109"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 764715.8789305139,
            "unit": "iter/sec",
            "range": "stddev: 4.1266002053421395e-7",
            "extra": "mean: 1.307675213176612 usec\nrounds: 81281"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 137576.7536737157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025196889453427597",
            "extra": "mean: 7.26866983917685 usec\nrounds: 30155"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 170255.2921802704,
            "unit": "iter/sec",
            "range": "stddev: 9.978666765769836e-7",
            "extra": "mean: 5.873532547470982 usec\nrounds: 30202"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 143315.35512383707,
            "unit": "iter/sec",
            "range": "stddev: 9.737742321141936e-7",
            "extra": "mean: 6.977619384440083 usec\nrounds: 49906"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 92369.94954896106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012611752163335258",
            "extra": "mean: 10.826031678949288 usec\nrounds: 24180"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 196210.52865796833,
            "unit": "iter/sec",
            "range": "stddev: 8.783402751876362e-7",
            "extra": "mean: 5.096566462767078 usec\nrounds: 40707"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1105460.8757242076,
            "unit": "iter/sec",
            "range": "stddev: 3.676113888023935e-7",
            "extra": "mean: 904.6000830602726 nsec\nrounds: 113161"
          }
        ]
      },
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
          "id": "88a884c374a65584b00b7553ed131b7f0eb788c8",
          "message": "Merge pull request #27 from Mixser/MGG-XXX-typing-and-duplication\n\nMGG-XXX Remove duplicated definitions and fix strict typing",
          "timestamp": "2026-10-09T15:56:07+03:00",
          "tree_id": "0f583a108f8592831ebafa7d6d717c327a23a34c",
          "url": "https://github.com/Mixser/zenmqtt/commit/88a884c374a65584b00b7553ed131b7f0eb788c8"
        },
        "date": 1791550679629,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 345581.42659780465,
            "unit": "iter/sec",
            "range": "stddev: 6.4123868904244e-7",
            "extra": "mean: 2.893674031746568 usec\nrounds: 39375"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 334366.40169468574,
            "unit": "iter/sec",
            "range": "stddev: 6.360085875529373e-7",
            "extra": "mean: 2.9907311109359394 usec\nrounds: 59095"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 251057.07892329493,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011764492658880587",
            "extra": "mean: 3.9831579507285206 usec\nrounds: 47939"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 250530.95798611493,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013237316096948306",
            "extra": "mean: 3.9915226766323326 usec\nrounds: 65067"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 153517.26269939303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011443858971796726",
            "extra": "mean: 6.513925420609742 usec\nrounds: 14146"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 175702.15515858686,
            "unit": "iter/sec",
            "range": "stddev: 8.537234364529182e-7",
            "extra": "mean: 5.691449823694029 usec\nrounds: 16731"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 168888.50879440876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010638609033965123",
            "extra": "mean: 5.921065957289725 usec\nrounds: 56294"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 136779.39532288376,
            "unit": "iter/sec",
            "range": "stddev: 0.00000129410350521507",
            "extra": "mean: 7.311042702297251 usec\nrounds: 41520"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 132752.17172538766,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012358146472824564",
            "extra": "mean: 7.532833452010179 usec\nrounds: 43549"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 81648.35594466864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015088268434493244",
            "extra": "mean: 12.24764403924653 usec\nrounds: 24351"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 756930.6267017771,
            "unit": "iter/sec",
            "range": "stddev: 4.2376161573422707e-7",
            "extra": "mean: 1.321125034083196 usec\nrounds: 47667"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 144364.7353318293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011072167080560806",
            "extra": "mean: 6.9268994100356425 usec\nrounds: 20678"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 226787.2255085033,
            "unit": "iter/sec",
            "range": "stddev: 8.664989411292477e-7",
            "extra": "mean: 4.409419436027738 usec\nrounds: 17092"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 148851.78118610036,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010843811540511817",
            "extra": "mean: 6.718092266223947 usec\nrounds: 35571"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 90177.13333270012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012316015439404395",
            "extra": "mean: 11.089285753968175 usec\nrounds: 17991"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 206972.52379720932,
            "unit": "iter/sec",
            "range": "stddev: 9.801490670349667e-7",
            "extra": "mean: 4.83155919275447 usec\nrounds: 25966"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1308760.3259916063,
            "unit": "iter/sec",
            "range": "stddev: 1.3143552609690919e-7",
            "extra": "mean: 764.0818415261263 nsec\nrounds: 184468"
          }
        ]
      },
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
          "id": "b57e072be5c9769f5e61d3381ceb1af02929a2dc",
          "message": "Merge pull request #30 from Mixser/MGG-XXX-tests-cleanup\n\nMGG-XXX Clean up tests",
          "timestamp": "2026-10-09T15:56:51+03:00",
          "tree_id": "b2a83222c94bedace6be64e49aafa2baa31904d9",
          "url": "https://github.com/Mixser/zenmqtt/commit/b57e072be5c9769f5e61d3381ceb1af02929a2dc"
        },
        "date": 1791550860002,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 348314.8279004089,
            "unit": "iter/sec",
            "range": "stddev: 7.35834100058926e-7",
            "extra": "mean: 2.870965919044717 usec\nrounds: 42223"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 335443.3712910357,
            "unit": "iter/sec",
            "range": "stddev: 6.731542892419145e-7",
            "extra": "mean: 2.9811291132427384 usec\nrounds: 77676"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 254362.6514255252,
            "unit": "iter/sec",
            "range": "stddev: 8.503421626257452e-7",
            "extra": "mean: 3.9313947798377535 usec\nrounds: 64940"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 251961.4477920453,
            "unit": "iter/sec",
            "range": "stddev: 9.65717691614929e-7",
            "extra": "mean: 3.9688611442864197 usec\nrounds: 75330"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 154520.78963069644,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011572120409944755",
            "extra": "mean: 6.4716210834153305 usec\nrounds: 29426"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 172863.77675649326,
            "unit": "iter/sec",
            "range": "stddev: 9.28397709240503e-7",
            "extra": "mean: 5.784901954379156 usec\nrounds: 27324"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 163848.44388784634,
            "unit": "iter/sec",
            "range": "stddev: 9.561702919987558e-7",
            "extra": "mean: 6.103201081875983 usec\nrounds: 64148"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 133934.07093877404,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011422628941496361",
            "extra": "mean: 7.466360075451862 usec\nrounds: 47690"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130221.31056649818,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011532151719973613",
            "extra": "mean: 7.679234647921508 usec\nrounds: 52615"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 81115.36530705646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014801917944325013",
            "extra": "mean: 12.328120525803847 usec\nrounds: 26625"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 778369.0440133953,
            "unit": "iter/sec",
            "range": "stddev: 4.42243104339677e-7",
            "extra": "mean: 1.2847376288808197 usec\nrounds: 81480"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 141938.01021972438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010979292743052575",
            "extra": "mean: 7.045329143701321 usec\nrounds: 26414"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 227618.28232495836,
            "unit": "iter/sec",
            "range": "stddev: 8.38660617169772e-7",
            "extra": "mean: 4.393320210422965 usec\nrounds: 38584"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 147053.4796247997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011865626694011948",
            "extra": "mean: 6.800247111128923 usec\nrounds: 44049"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93220.39571805546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013805960589013753",
            "extra": "mean: 10.727266198531213 usec\nrounds: 23783"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 206446.3572328066,
            "unit": "iter/sec",
            "range": "stddev: 8.643883633542341e-7",
            "extra": "mean: 4.8438733112268695 usec\nrounds: 41227"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1306237.5752201064,
            "unit": "iter/sec",
            "range": "stddev: 1.166211564083597e-7",
            "extra": "mean: 765.5575210592881 nsec\nrounds: 189394"
          }
        ]
      },
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
          "id": "e77770d541109d3dfc7aa5b6e2a3699bb1504334",
          "message": "Merge pull request #32 from Mixser/MGG-XXX-p0-fixes\n\nMGG-XXX Fix write backpressure, publish leak and errors of the read loop",
          "timestamp": "2026-10-11T19:31:19+03:00",
          "tree_id": "4cacaafa23bc9d42c5f6e18502a8ea5efb4d028a",
          "url": "https://github.com/Mixser/zenmqtt/commit/e77770d541109d3dfc7aa5b6e2a3699bb1504334"
        },
        "date": 1791736389196,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 354970.96869616496,
            "unit": "iter/sec",
            "range": "stddev: 6.369773875740838e-7",
            "extra": "mean: 2.8171317887574725 usec\nrounds: 53434"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 341074.0166902038,
            "unit": "iter/sec",
            "range": "stddev: 6.109947434229383e-7",
            "extra": "mean: 2.9319149248132144 usec\nrounds: 83244"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 257722.80966914294,
            "unit": "iter/sec",
            "range": "stddev: 7.86045973869508e-7",
            "extra": "mean: 3.88013773900638 usec\nrounds: 62858"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 254158.49937629548,
            "unit": "iter/sec",
            "range": "stddev: 8.037054454281022e-7",
            "extra": "mean: 3.9345526608553256 usec\nrounds: 73660"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 154124.98290574297,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010869453215404107",
            "extra": "mean: 6.488240784503849 usec\nrounds: 27535"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 172510.2455046779,
            "unit": "iter/sec",
            "range": "stddev: 9.530361928422508e-7",
            "extra": "mean: 5.7967571553475254 usec\nrounds: 27392"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 167255.66590639568,
            "unit": "iter/sec",
            "range": "stddev: 9.392115992754653e-7",
            "extra": "mean: 5.978870698225841 usec\nrounds: 46318"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 136803.13564335305,
            "unit": "iter/sec",
            "range": "stddev: 0.000001137265130383154",
            "extra": "mean: 7.309773970437408 usec\nrounds: 48591"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 132872.31386871613,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011552103847124646",
            "extra": "mean: 7.526022320857944 usec\nrounds: 52283"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 82822.62933069914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013493463484623014",
            "extra": "mean: 12.073994849971983 usec\nrounds: 26990"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 779284.7407014419,
            "unit": "iter/sec",
            "range": "stddev: 3.706432433986845e-7",
            "extra": "mean: 1.2832280009741885 usec\nrounds: 88254"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 138524.9590084776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011086259849677374",
            "extra": "mean: 7.218915689690267 usec\nrounds: 22773"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 230230.44067325495,
            "unit": "iter/sec",
            "range": "stddev: 7.73779116600298e-7",
            "extra": "mean: 4.343474290696462 usec\nrounds: 43739"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 151702.62945006907,
            "unit": "iter/sec",
            "range": "stddev: 9.504124103899879e-7",
            "extra": "mean: 6.59184355356963 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 94743.18323584659,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011568995873026158",
            "extra": "mean: 10.554849075639298 usec\nrounds: 24774"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 207764.33176664312,
            "unit": "iter/sec",
            "range": "stddev: 8.027374211055422e-7",
            "extra": "mean: 4.813145699730503 usec\nrounds: 41160"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1313978.9411523729,
            "unit": "iter/sec",
            "range": "stddev: 1.101809187063894e-7",
            "extra": "mean: 761.0472045487959 nsec\nrounds: 186916"
          }
        ]
      },
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
          "id": "50aef7166cba93d2d80e83697be292b59146e828",
          "message": "Merge pull request #31 from Mixser/MGG-XXX-strict-mypy\n\nMGG-XXX Enable strict mypy",
          "timestamp": "2026-10-11T19:31:35+03:00",
          "tree_id": "2fbfc5779739d9b5c3148336ce6336f6a7c06e01",
          "url": "https://github.com/Mixser/zenmqtt/commit/50aef7166cba93d2d80e83697be292b59146e828"
        },
        "date": 1791736533939,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 344859.2351044852,
            "unit": "iter/sec",
            "range": "stddev: 6.194287110858742e-7",
            "extra": "mean: 2.899733857198346 usec\nrounds: 51029"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 332417.22497678647,
            "unit": "iter/sec",
            "range": "stddev: 6.229252807694541e-7",
            "extra": "mean: 3.00826769752931 usec\nrounds: 72171"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 256006.4829001352,
            "unit": "iter/sec",
            "range": "stddev: 7.718839101047211e-7",
            "extra": "mean: 3.9061510812993236 usec\nrounds: 65799"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 253916.68315597638,
            "unit": "iter/sec",
            "range": "stddev: 7.698183894332728e-7",
            "extra": "mean: 3.9382997114282494 usec\nrounds: 72433"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 152301.89829064402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010595809458257186",
            "extra": "mean: 6.565906342753906 usec\nrounds: 28316"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 174754.6384090539,
            "unit": "iter/sec",
            "range": "stddev: 8.749466009826941e-7",
            "extra": "mean: 5.722308770192796 usec\nrounds: 25906"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 167578.64746035522,
            "unit": "iter/sec",
            "range": "stddev: 9.054877485450978e-7",
            "extra": "mean: 5.967347362894632 usec\nrounds: 59517"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 134385.28468911082,
            "unit": "iter/sec",
            "range": "stddev: 0.000001326304474201949",
            "extra": "mean: 7.441290929385735 usec\nrounds: 48431"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130411.193311827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013889972461425162",
            "extra": "mean: 7.668053443916381 usec\nrounds: 53065"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79812.61527195897,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015227974177025976",
            "extra": "mean: 12.52934760491849 usec\nrounds: 16910"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 756601.1001541037,
            "unit": "iter/sec",
            "range": "stddev: 4.1940997392630737e-7",
            "extra": "mean: 1.321700430776959 usec\nrounds: 67083"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 142715.96211757977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010512589194534182",
            "extra": "mean: 7.006924699678144 usec\nrounds: 23891"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 226672.5478992533,
            "unit": "iter/sec",
            "range": "stddev: 7.592731057743205e-7",
            "extra": "mean: 4.411650238494955 usec\nrounds: 37314"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 146393.99288138043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010461232466180917",
            "extra": "mean: 6.830881379198915 usec\nrounds: 45186"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 89990.75146182872,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014572293133604194",
            "extra": "mean: 11.11225302329172 usec\nrounds: 24725"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 201485.5115359269,
            "unit": "iter/sec",
            "range": "stddev: 8.398450131126418e-7",
            "extra": "mean: 4.963136020932652 usec\nrounds: 39391"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1309004.204807524,
            "unit": "iter/sec",
            "range": "stddev: 1.4345530237970075e-7",
            "extra": "mean: 763.9394864640942 nsec\nrounds: 170911"
          }
        ]
      },
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
          "id": "f286fb8d1d9803f73185885767bc0b75b0e6f169",
          "message": "Merge pull request #34 from Mixser/MGG-XXX-publish-workflow\n\nMGG-XXX Add the publish workflow",
          "timestamp": "2026-10-11T19:51:32+03:00",
          "tree_id": "e6bfe6935ad6740ddbc26e3bacc059c09f0e1c8c",
          "url": "https://github.com/Mixser/zenmqtt/commit/f286fb8d1d9803f73185885767bc0b75b0e6f169"
        },
        "date": 1791737596255,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 615313.4529531287,
            "unit": "iter/sec",
            "range": "stddev: 4.88437964832017e-7",
            "extra": "mean: 1.6251879350282539 usec\nrounds: 57754"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 594277.091843604,
            "unit": "iter/sec",
            "range": "stddev: 2.800804370941222e-7",
            "extra": "mean: 1.682716722089584 usec\nrounds: 83907"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 500483.2749270049,
            "unit": "iter/sec",
            "range": "stddev: 3.562958068285415e-7",
            "extra": "mean: 1.9980687669250268 usec\nrounds: 87513"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 478554.5884554103,
            "unit": "iter/sec",
            "range": "stddev: 3.891217802419701e-7",
            "extra": "mean: 2.08962576918887 usec\nrounds: 100756"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 273322.4597007169,
            "unit": "iter/sec",
            "range": "stddev: 4.7424172466188637e-7",
            "extra": "mean: 3.6586821335318795 usec\nrounds: 30991"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 311897.09628628247,
            "unit": "iter/sec",
            "range": "stddev: 3.9190679084575707e-7",
            "extra": "mean: 3.206185667987512 usec\nrounds: 26849"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 301062.531137803,
            "unit": "iter/sec",
            "range": "stddev: 4.2859185499570677e-7",
            "extra": "mean: 3.321569098023287 usec\nrounds: 64546"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 252469.47602847885,
            "unit": "iter/sec",
            "range": "stddev: 4.7651690652516004e-7",
            "extra": "mean: 3.960874857945991 usec\nrounds: 74795"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 246215.62453122347,
            "unit": "iter/sec",
            "range": "stddev: 4.779933279392941e-7",
            "extra": "mean: 4.061480671277165 usec\nrounds: 91108"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 146031.1202766467,
            "unit": "iter/sec",
            "range": "stddev: 7.064332492579689e-7",
            "extra": "mean: 6.847855430442247 usec\nrounds: 24777"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1376453.1460497333,
            "unit": "iter/sec",
            "range": "stddev: 2.3287707067717687e-7",
            "extra": "mean: 726.5049325288611 nsec\nrounds: 73796"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 257102.4034377213,
            "unit": "iter/sec",
            "range": "stddev: 4.086194115556261e-7",
            "extra": "mean: 3.8895007850139875 usec\nrounds: 28024"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 407559.9931186398,
            "unit": "iter/sec",
            "range": "stddev: 3.6932597664908257e-7",
            "extra": "mean: 2.4536265013354788 usec\nrounds: 38300"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 259440.48551847873,
            "unit": "iter/sec",
            "range": "stddev: 4.464798631065429e-7",
            "extra": "mean: 3.8544485375963986 usec\nrounds: 50328"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 177831.08761063963,
            "unit": "iter/sec",
            "range": "stddev: 8.02027193361471e-7",
            "extra": "mean: 5.623313749221933 usec\nrounds: 26416"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 366105.2044845514,
            "unit": "iter/sec",
            "range": "stddev: 3.526921188074379e-7",
            "extra": "mean: 2.7314552968672623 usec\nrounds: 48755"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2540037.396344541,
            "unit": "iter/sec",
            "range": "stddev: 3.4382718515348874e-8",
            "extra": "mean: 393.6949910419176 nsec\nrounds: 119446"
          }
        ]
      }
    ],
    "zenmqtt codec (Python 3.14)": [
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
          "id": "ac2388d2e3f8422eba059bd95c3a70bb18f2740a",
          "message": "Merge pull request #22 from Mixser/MGG-XXX-codec-benchmarks\n\nMGG-XXX Codec micro-benchmarks with pytest-benchmark",
          "timestamp": "2026-10-09T11:45:31+03:00",
          "tree_id": "bc415e673267ed748d008edc463703f6322af702",
          "url": "https://github.com/Mixser/zenmqtt/commit/ac2388d2e3f8422eba059bd95c3a70bb18f2740a"
        },
        "date": 1791535723894,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 220511.17254308003,
            "unit": "iter/sec",
            "range": "stddev: 8.500550951417973e-7",
            "extra": "mean: 4.534917611961977 usec\nrounds: 20100"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 214245.15830634616,
            "unit": "iter/sec",
            "range": "stddev: 9.499377168249e-7",
            "extra": "mean: 4.66755005296369 usec\nrounds: 56680"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 5653.120267361517,
            "unit": "iter/sec",
            "range": "stddev: 0.000007897026452860536",
            "extra": "mean: 176.89345931193682 usec\nrounds: 4768"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 5655.969061948438,
            "unit": "iter/sec",
            "range": "stddev: 0.000005329062249167291",
            "extra": "mean: 176.80436173664424 usec\nrounds: 4929"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 86603.20956153126,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015344172341097002",
            "extra": "mean: 11.5469161600703 usec\nrounds: 21219"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 192174.9150724198,
            "unit": "iter/sec",
            "range": "stddev: 8.571803093981768e-7",
            "extra": "mean: 5.203592777044584 usec\nrounds: 25308"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 183326.3101834238,
            "unit": "iter/sec",
            "range": "stddev: 9.663434095336267e-7",
            "extra": "mean: 5.454754415770808 usec\nrounds: 60126"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 148588.6245041945,
            "unit": "iter/sec",
            "range": "stddev: 0.000001081713844650682",
            "extra": "mean: 6.729990289207981 usec\nrounds: 51798"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 143350.99533105738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010548411325450786",
            "extra": "mean: 6.975884594945309 usec\nrounds: 50795"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 85671.22177285698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016532809946715614",
            "extra": "mean: 11.672531093945805 usec\nrounds: 24233"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 582936.6677596505,
            "unit": "iter/sec",
            "range": "stddev: 4.6751200311634786e-7",
            "extra": "mean: 1.715452218580129 usec\nrounds: 58956"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 150274.18994773168,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010474643013849281",
            "extra": "mean: 6.654502681716798 usec\nrounds: 28340"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 148314.57683586123,
            "unit": "iter/sec",
            "range": "stddev: 0.000001123723631180889",
            "extra": "mean: 6.742425601946688 usec\nrounds: 28865"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 152146.1754449027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010749308338285136",
            "extra": "mean: 6.572626601199935 usec\nrounds: 47464"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 49180.394730257285,
            "unit": "iter/sec",
            "range": "stddev: 0.000002049812041962524",
            "extra": "mean: 20.33330568989454 usec\nrounds: 17171"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 223165.8486444175,
            "unit": "iter/sec",
            "range": "stddev: 8.393136863408706e-7",
            "extra": "mean: 4.480972362367843 usec\nrounds: 36074"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1414874.9608700646,
            "unit": "iter/sec",
            "range": "stddev: 7.898849161729588e-8",
            "extra": "mean: 706.7762365269784 nsec\nrounds: 66234"
          }
        ]
      },
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
          "id": "1c64c7c78b6130ff7ed73c7d265923760dcc166e",
          "message": "Merge pull request #23 from Mixser/MGG-XXX-fast-publish-packing\n\nMGG-XXX Fast packing of packets",
          "timestamp": "2026-10-09T13:31:18+03:00",
          "tree_id": "7c788a79f44070686045f948a9bae302f3d1cc65",
          "url": "https://github.com/Mixser/zenmqtt/commit/1c64c7c78b6130ff7ed73c7d265923760dcc166e"
        },
        "date": 1791542023808,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 328545.3351555467,
            "unit": "iter/sec",
            "range": "stddev: 6.3784901008392e-7",
            "extra": "mean: 3.0437199771123193 usec\nrounds: 24398"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 312801.83368136693,
            "unit": "iter/sec",
            "range": "stddev: 6.696061290162276e-7",
            "extra": "mean: 3.1969122055040184 usec\nrounds: 72328"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 248751.74695626186,
            "unit": "iter/sec",
            "range": "stddev: 8.17386791733054e-7",
            "extra": "mean: 4.020072269787237 usec\nrounds: 64107"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 240191.53040109845,
            "unit": "iter/sec",
            "range": "stddev: 8.350044370057196e-7",
            "extra": "mean: 4.1633441376142155 usec\nrounds: 74322"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 122703.05132290321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011916592019154",
            "extra": "mean: 8.149756580774977 usec\nrounds: 25187"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 192612.39843811846,
            "unit": "iter/sec",
            "range": "stddev: 8.767136816820542e-7",
            "extra": "mean: 5.191773780446823 usec\nrounds: 27407"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 181878.3375864041,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010966836348426019",
            "extra": "mean: 5.498180889876094 usec\nrounds: 64144"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 152405.65983418984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010612518982300945",
            "extra": "mean: 6.561436111283221 usec\nrounds: 50361"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 145213.70112348683,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010849364369655354",
            "extra": "mean: 6.886402538212423 usec\nrounds: 55237"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 84703.19585204334,
            "unit": "iter/sec",
            "range": "stddev: 0.000001734543836178165",
            "extra": "mean: 11.805929988128973 usec\nrounds: 26267"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 725240.3323143797,
            "unit": "iter/sec",
            "range": "stddev: 4.020343968457022e-7",
            "extra": "mean: 1.378853264832652 usec\nrounds: 83879"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 153704.7328386222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010535382995454529",
            "extra": "mean: 6.505980535094653 usec\nrounds: 32366"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 175710.8186961473,
            "unit": "iter/sec",
            "range": "stddev: 9.592889176332406e-7",
            "extra": "mean: 5.691169203014626 usec\nrounds: 40478"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 154034.9182492355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011336635846675482",
            "extra": "mean: 6.492034477416054 usec\nrounds: 51425"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 90033.75452373445,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013991272203651747",
            "extra": "mean: 11.106945448291649 usec\nrounds: 23464"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 227658.01824329642,
            "unit": "iter/sec",
            "range": "stddev: 7.81081005405237e-7",
            "extra": "mean: 4.3925533908992715 usec\nrounds: 35109"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1432278.9148096477,
            "unit": "iter/sec",
            "range": "stddev: 6.333816098032024e-8",
            "extra": "mean: 698.1880342299822 nsec\nrounds: 67714"
          }
        ]
      },
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
          "id": "1ac221dd4f698a0928a8daadb3c2dcadb8fc9e7b",
          "message": "Merge pull request #24 from Mixser/MGG-XXX-faster-otel-metrics\n\nMGG-XXX Reduce cost of OpenTelemetry metrics",
          "timestamp": "2026-10-09T13:59:58+03:00",
          "tree_id": "006c86b76979601655e2dec62b4bd7ceb1484d69",
          "url": "https://github.com/Mixser/zenmqtt/commit/1ac221dd4f698a0928a8daadb3c2dcadb8fc9e7b"
        },
        "date": 1791543779332,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 331619.1594354609,
            "unit": "iter/sec",
            "range": "stddev: 6.910874301451275e-7",
            "extra": "mean: 3.0155073117680287 usec\nrounds: 24139"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 312350.02940462943,
            "unit": "iter/sec",
            "range": "stddev: 6.455468917951645e-7",
            "extra": "mean: 3.2015364362414203 usec\nrounds: 74102"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 248437.74951283264,
            "unit": "iter/sec",
            "range": "stddev: 7.780744849740287e-7",
            "extra": "mean: 4.025153190128808 usec\nrounds: 66362"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 240648.92143854836,
            "unit": "iter/sec",
            "range": "stddev: 8.523340250772871e-7",
            "extra": "mean: 4.155431048775168 usec\nrounds: 71964"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 123153.8878647545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012701574003089428",
            "extra": "mean: 8.11992229671371 usec\nrounds: 24156"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 193550.71136684148,
            "unit": "iter/sec",
            "range": "stddev: 8.266461232390365e-7",
            "extra": "mean: 5.166604622313556 usec\nrounds: 24923"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 184934.0476370519,
            "unit": "iter/sec",
            "range": "stddev: 9.038093080700427e-7",
            "extra": "mean: 5.40733311565527 usec\nrounds: 61237"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 151213.65945439794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011195148175124197",
            "extra": "mean: 6.613159178927044 usec\nrounds: 49636"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 144045.94570382262,
            "unit": "iter/sec",
            "range": "stddev: 0.000001047415317950466",
            "extra": "mean: 6.942229405443533 usec\nrounds: 51664"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 84800.10386768084,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015685854174833192",
            "extra": "mean: 11.792438386164783 usec\nrounds: 25879"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 729738.2735091171,
            "unit": "iter/sec",
            "range": "stddev: 4.05281758659752e-7",
            "extra": "mean: 1.3703543260671613 usec\nrounds: 109927"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 151365.37881964716,
            "unit": "iter/sec",
            "range": "stddev: 9.908635680600041e-7",
            "extra": "mean: 6.606530554067496 usec\nrounds: 33416"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 175861.13068263818,
            "unit": "iter/sec",
            "range": "stddev: 9.438550367412572e-7",
            "extra": "mean: 5.686304848139615 usec\nrounds: 41624"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 154227.23126668503,
            "unit": "iter/sec",
            "range": "stddev: 9.677414588676558e-7",
            "extra": "mean: 6.483939261483794 usec\nrounds: 56488"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 89530.09049167718,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013416265564585987",
            "extra": "mean: 11.169429121631024 usec\nrounds: 22588"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 224043.8905833211,
            "unit": "iter/sec",
            "range": "stddev: 8.159027741703761e-7",
            "extra": "mean: 4.463411153039693 usec\nrounds: 41639"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1382094.8853663125,
            "unit": "iter/sec",
            "range": "stddev: 1.0311305586528672e-7",
            "extra": "mean: 723.5393246788252 nsec\nrounds: 195695"
          }
        ]
      },
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
          "id": "af54c6d68932f195b7a6de993d0261b0c7cd49b0",
          "message": "Merge pull request #25 from Mixser/MGG-XXX-upgrade-pytest-asyncio\n\nMGG-XXX Upgrade pytest and pytest-asyncio",
          "timestamp": "2026-10-09T15:36:26+03:00",
          "tree_id": "8b6ceeb7aa3baa6235ab5baf40ef85db74a22d3a",
          "url": "https://github.com/Mixser/zenmqtt/commit/af54c6d68932f195b7a6de993d0261b0c7cd49b0"
        },
        "date": 1791549542388,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 441235.2909479545,
            "unit": "iter/sec",
            "range": "stddev: 4.176827804555484e-7",
            "extra": "mean: 2.2663645010162026 usec\nrounds: 59720"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 423034.812139502,
            "unit": "iter/sec",
            "range": "stddev: 4.6086432906468906e-7",
            "extra": "mean: 2.3638716514664404 usec\nrounds: 86904"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 324361.2386159034,
            "unit": "iter/sec",
            "range": "stddev: 5.151585230508625e-7",
            "extra": "mean: 3.082982431153443 usec\nrounds: 75873"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 314593.0661092662,
            "unit": "iter/sec",
            "range": "stddev: 5.312854149505178e-7",
            "extra": "mean: 3.1787096021139716 usec\nrounds: 92115"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 166511.84094185958,
            "unit": "iter/sec",
            "range": "stddev: 6.821070840635883e-7",
            "extra": "mean: 6.005578908644502 usec\nrounds: 27215"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 251355.91035592018,
            "unit": "iter/sec",
            "range": "stddev: 5.285849925697933e-7",
            "extra": "mean: 3.978422463128077 usec\nrounds: 26381"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 239218.211706414,
            "unit": "iter/sec",
            "range": "stddev: 5.832153979074938e-7",
            "extra": "mean: 4.180283737039523 usec\nrounds: 93058"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 194130.77531555283,
            "unit": "iter/sec",
            "range": "stddev: 5.997550223054269e-7",
            "extra": "mean: 5.151166775976321 usec\nrounds: 64050"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 185806.45998012117,
            "unit": "iter/sec",
            "range": "stddev: 6.108749691685384e-7",
            "extra": "mean: 5.38194420208526 usec\nrounds: 75415"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 111482.69628794413,
            "unit": "iter/sec",
            "range": "stddev: 9.307021652176172e-7",
            "extra": "mean: 8.970001922245768 usec\nrounds: 34336"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1048209.1685882554,
            "unit": "iter/sec",
            "range": "stddev: 2.5562607125710744e-7",
            "extra": "mean: 954.0080643893009 nsec\nrounds: 78989"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 199586.37611735245,
            "unit": "iter/sec",
            "range": "stddev: 6.110974470586568e-7",
            "extra": "mean: 5.010362026975337 usec\nrounds: 32481"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 233702.4565467557,
            "unit": "iter/sec",
            "range": "stddev: 6.035114362909535e-7",
            "extra": "mean: 4.2789451800218234 usec\nrounds: 33382"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 202225.53555176247,
            "unit": "iter/sec",
            "range": "stddev: 6.536036525162694e-7",
            "extra": "mean: 4.944973923651872 usec\nrounds: 52193"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 125062.06684575308,
            "unit": "iter/sec",
            "range": "stddev: 7.943815417968014e-7",
            "extra": "mean: 7.996029693267126 usec\nrounds: 26639"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 292888.3292019203,
            "unit": "iter/sec",
            "range": "stddev: 4.4428505561328724e-7",
            "extra": "mean: 3.4142705608136046 usec\nrounds: 38228"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1788565.2136987667,
            "unit": "iter/sec",
            "range": "stddev: 6.434132227143564e-8",
            "extra": "mean: 559.1073740789088 nsec\nrounds: 154799"
          }
        ]
      },
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
          "id": "bfae94de0d45ac44c29a7af1fd343b37e08d02c1",
          "message": "Merge pull request #26 from Mixser/MGG-XXX-will-message-defaults\n\nMGG-XXX Default values for WillMessage",
          "timestamp": "2026-10-09T15:36:47+03:00",
          "tree_id": "0cdf044a9194617ec83a3ca61ec1a60728134a69",
          "url": "https://github.com/Mixser/zenmqtt/commit/bfae94de0d45ac44c29a7af1fd343b37e08d02c1"
        },
        "date": 1791549703587,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 342346.60038792796,
            "unit": "iter/sec",
            "range": "stddev: 5.646438990474685e-7",
            "extra": "mean: 2.921016300050464 usec\nrounds: 48098"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 328137.09293648315,
            "unit": "iter/sec",
            "range": "stddev: 6.040328750520416e-7",
            "extra": "mean: 3.0475067327836904 usec\nrounds: 66169"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 253006.59919752704,
            "unit": "iter/sec",
            "range": "stddev: 6.855898552740471e-7",
            "extra": "mean: 3.95246607468638 usec\nrounds: 64421"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 246854.51383839562,
            "unit": "iter/sec",
            "range": "stddev: 7.083292297610069e-7",
            "extra": "mean: 4.05096906858529 usec\nrounds: 74455"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 128449.79418415035,
            "unit": "iter/sec",
            "range": "stddev: 9.628768638710903e-7",
            "extra": "mean: 7.785142875093776 usec\nrounds: 23797"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 191730.95388731855,
            "unit": "iter/sec",
            "range": "stddev: 7.002130529034591e-7",
            "extra": "mean: 5.215641917620178 usec\nrounds: 23341"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 181436.0804662718,
            "unit": "iter/sec",
            "range": "stddev: 7.65323665901252e-7",
            "extra": "mean: 5.511582908041799 usec\nrounds: 65820"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 145977.821559585,
            "unit": "iter/sec",
            "range": "stddev: 8.40810907337123e-7",
            "extra": "mean: 6.850355686338432 usec\nrounds: 53311"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 140244.9757418588,
            "unit": "iter/sec",
            "range": "stddev: 8.141315690844959e-7",
            "extra": "mean: 7.1303802129827805 usec\nrounds: 59827"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 84841.1486334825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011287050498081034",
            "extra": "mean: 11.786733396550819 usec\nrounds: 17933"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 788703.2679618262,
            "unit": "iter/sec",
            "range": "stddev: 3.3446310984538446e-7",
            "extra": "mean: 1.2679039641666614 usec\nrounds: 74795"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 148409.71815530988,
            "unit": "iter/sec",
            "range": "stddev: 8.549828197502055e-7",
            "extra": "mean: 6.738103221471696 usec\nrounds: 28279"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 181495.7497227667,
            "unit": "iter/sec",
            "range": "stddev: 8.046131153987774e-7",
            "extra": "mean: 5.5097708983681 usec\nrounds: 32706"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 154428.3332248069,
            "unit": "iter/sec",
            "range": "stddev: 9.102254756942529e-7",
            "extra": "mean: 6.475495649779913 usec\nrounds: 46549"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 95643.10489245798,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011234130620366243",
            "extra": "mean: 10.45553676999936 usec\nrounds: 22464"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 224455.39222141757,
            "unit": "iter/sec",
            "range": "stddev: 7.531717651272308e-7",
            "extra": "mean: 4.455228230888453 usec\nrounds: 36669"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1414500.0941301982,
            "unit": "iter/sec",
            "range": "stddev: 6.27177932684401e-8",
            "extra": "mean: 706.9635443290077 nsec\nrounds: 66921"
          }
        ]
      },
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
          "id": "88a884c374a65584b00b7553ed131b7f0eb788c8",
          "message": "Merge pull request #27 from Mixser/MGG-XXX-typing-and-duplication\n\nMGG-XXX Remove duplicated definitions and fix strict typing",
          "timestamp": "2026-10-09T15:56:07+03:00",
          "tree_id": "0f583a108f8592831ebafa7d6d717c327a23a34c",
          "url": "https://github.com/Mixser/zenmqtt/commit/88a884c374a65584b00b7553ed131b7f0eb788c8"
        },
        "date": 1791550736986,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 328664.5507484472,
            "unit": "iter/sec",
            "range": "stddev: 6.881661649903746e-7",
            "extra": "mean: 3.0426159368960315 usec\nrounds: 53348"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 318386.4547942568,
            "unit": "iter/sec",
            "range": "stddev: 6.810633764368724e-7",
            "extra": "mean: 3.1408371334333487 usec\nrounds: 71752"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 249086.21549266015,
            "unit": "iter/sec",
            "range": "stddev: 8.553128085653085e-7",
            "extra": "mean: 4.014674188301147 usec\nrounds: 69267"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 241737.74150928512,
            "unit": "iter/sec",
            "range": "stddev: 8.749627919672423e-7",
            "extra": "mean: 4.136714415202684 usec\nrounds: 70592"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 143039.87244295274,
            "unit": "iter/sec",
            "range": "stddev: 0.000001161081429076065",
            "extra": "mean: 6.991057688469492 usec\nrounds: 30266"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 196098.53021488414,
            "unit": "iter/sec",
            "range": "stddev: 9.147207270584137e-7",
            "extra": "mean: 5.099477282691528 usec\nrounds: 27468"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 187995.62820999866,
            "unit": "iter/sec",
            "range": "stddev: 8.823914011715466e-7",
            "extra": "mean: 5.319272631611198 usec\nrounds: 65583"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 152479.58655106302,
            "unit": "iter/sec",
            "range": "stddev: 0.000001090980669883518",
            "extra": "mean: 6.558254928538357 usec\nrounds: 51587"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 145571.04547670184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014288598922285839",
            "extra": "mean: 6.86949796043092 usec\nrounds: 56139"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 85698.15722572873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014345446194446236",
            "extra": "mean: 11.668862346316299 usec\nrounds: 28470"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 732485.6784120117,
            "unit": "iter/sec",
            "range": "stddev: 4.0348986121478553e-7",
            "extra": "mean: 1.365214405512944 usec\nrounds: 110902"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 154249.22605880516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010351890954792102",
            "extra": "mean: 6.483014699981478 usec\nrounds: 37483"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 214426.30238513136,
            "unit": "iter/sec",
            "range": "stddev: 8.463371817384234e-7",
            "extra": "mean: 4.663606977673377 usec\nrounds: 47781"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 155501.33116908369,
            "unit": "iter/sec",
            "range": "stddev: 9.516448012252403e-7",
            "extra": "mean: 6.430813115758182 usec\nrounds: 59379"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 90517.67218311227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013792530164373334",
            "extra": "mean: 11.04756646831411 usec\nrounds: 28397"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 230937.22829689298,
            "unit": "iter/sec",
            "range": "stddev: 8.223925579020096e-7",
            "extra": "mean: 4.330181007950783 usec\nrounds: 39943"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1409186.3969233178,
            "unit": "iter/sec",
            "range": "stddev: 1.0270871356084047e-7",
            "extra": "mean: 709.6293309269121 nsec\nrounds: 187266"
          }
        ]
      },
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
          "id": "b57e072be5c9769f5e61d3381ceb1af02929a2dc",
          "message": "Merge pull request #30 from Mixser/MGG-XXX-tests-cleanup\n\nMGG-XXX Clean up tests",
          "timestamp": "2026-10-09T15:56:51+03:00",
          "tree_id": "b2a83222c94bedace6be64e49aafa2baa31904d9",
          "url": "https://github.com/Mixser/zenmqtt/commit/b57e072be5c9769f5e61d3381ceb1af02929a2dc"
        },
        "date": 1791550911016,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 327112.48543001525,
            "unit": "iter/sec",
            "range": "stddev: 7.571521737919785e-7",
            "extra": "mean: 3.0570523735449013 usec\nrounds: 37328"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 314189.2898261686,
            "unit": "iter/sec",
            "range": "stddev: 7.583473515259795e-7",
            "extra": "mean: 3.18279467945349 usec\nrounds: 63452"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 248687.94741096508,
            "unit": "iter/sec",
            "range": "stddev: 9.240605180868525e-7",
            "extra": "mean: 4.02110359754374 usec\nrounds: 58679"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 241097.87919801284,
            "unit": "iter/sec",
            "range": "stddev: 8.679591080076844e-7",
            "extra": "mean: 4.147693058629949 usec\nrounds: 71398"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 143165.40228629473,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011527486089011051",
            "extra": "mean: 6.984927810982237 usec\nrounds: 23106"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 192861.6452552752,
            "unit": "iter/sec",
            "range": "stddev: 9.244212949674936e-7",
            "extra": "mean: 5.185064135880319 usec\nrounds: 15779"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 183169.48939592572,
            "unit": "iter/sec",
            "range": "stddev: 0.000001027835358412279",
            "extra": "mean: 5.459424510587969 usec\nrounds: 62267"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 151188.06480811845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010397146678438052",
            "extra": "mean: 6.6142787214662615 usec\nrounds: 47804"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 144367.52283564478,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011036921808197508",
            "extra": "mean: 6.926765662790031 usec\nrounds: 50901"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 84549.12495536997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015885367267906827",
            "extra": "mean: 11.827443519112222 usec\nrounds: 24495"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 739674.7308401783,
            "unit": "iter/sec",
            "range": "stddev: 4.3340870402277505e-7",
            "extra": "mean: 1.351945602987038 usec\nrounds: 64066"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 150625.40801277806,
            "unit": "iter/sec",
            "range": "stddev: 0.000001109172013960655",
            "extra": "mean: 6.63898616570165 usec\nrounds: 27757"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 215035.0198656179,
            "unit": "iter/sec",
            "range": "stddev: 8.699205886529549e-7",
            "extra": "mean: 4.650405318282256 usec\nrounds: 33507"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 155400.53384101595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012414286886494087",
            "extra": "mean: 6.434984329095419 usec\nrounds: 39500"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 90297.28722841055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015071972180651402",
            "extra": "mean: 11.074529819156808 usec\nrounds: 22670"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 228533.8949203024,
            "unit": "iter/sec",
            "range": "stddev: 7.719722796458563e-7",
            "extra": "mean: 4.375718535531608 usec\nrounds: 35699"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1413698.5210760355,
            "unit": "iter/sec",
            "range": "stddev: 1.0751540705906532e-7",
            "extra": "mean: 707.3643956554831 nsec\nrounds: 193088"
          }
        ]
      },
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
          "id": "e77770d541109d3dfc7aa5b6e2a3699bb1504334",
          "message": "Merge pull request #32 from Mixser/MGG-XXX-p0-fixes\n\nMGG-XXX Fix write backpressure, publish leak and errors of the read loop",
          "timestamp": "2026-10-11T19:31:19+03:00",
          "tree_id": "4cacaafa23bc9d42c5f6e18502a8ea5efb4d028a",
          "url": "https://github.com/Mixser/zenmqtt/commit/e77770d541109d3dfc7aa5b6e2a3699bb1504334"
        },
        "date": 1791736432484,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 582458.2136849597,
            "unit": "iter/sec",
            "range": "stddev: 3.685846109940186e-7",
            "extra": "mean: 1.7168613584714258 usec\nrounds: 53000"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 569505.8954319612,
            "unit": "iter/sec",
            "range": "stddev: 3.745049130158117e-7",
            "extra": "mean: 1.7559080740358552 usec\nrounds: 96284"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 476372.3527854504,
            "unit": "iter/sec",
            "range": "stddev: 4.046211114025709e-7",
            "extra": "mean: 2.0991982304447085 usec\nrounds: 107597"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 455814.66034175915,
            "unit": "iter/sec",
            "range": "stddev: 4.26733580185089e-7",
            "extra": "mean: 2.1938741488705595 usec\nrounds: 111322"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 268450.1343924116,
            "unit": "iter/sec",
            "range": "stddev: 4.337448277671231e-7",
            "extra": "mean: 3.725086605984829 usec\nrounds: 35598"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 347997.5833848422,
            "unit": "iter/sec",
            "range": "stddev: 4.357445003302571e-7",
            "extra": "mean: 2.873583173404178 usec\nrounds: 25531"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 329260.6400553278,
            "unit": "iter/sec",
            "range": "stddev: 3.56110971479878e-7",
            "extra": "mean: 3.037107623407291 usec\nrounds: 108062"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 279293.9549560215,
            "unit": "iter/sec",
            "range": "stddev: 4.3419594516820964e-7",
            "extra": "mean: 3.580457014035492 usec\nrounds: 88052"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 272216.9850641799,
            "unit": "iter/sec",
            "range": "stddev: 4.3052782248572815e-7",
            "extra": "mean: 3.6735400613015843 usec\nrounds: 93669"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 161156.74512451637,
            "unit": "iter/sec",
            "range": "stddev: 6.308727739066763e-7",
            "extra": "mean: 6.205138973409761 usec\nrounds: 34503"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1446179.7975937843,
            "unit": "iter/sec",
            "range": "stddev: 1.7855264495668253e-7",
            "extra": "mean: 691.4769530481913 nsec\nrounds: 64629"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 281055.054651137,
            "unit": "iter/sec",
            "range": "stddev: 5.677361091201461e-7",
            "extra": "mean: 3.558021759264434 usec\nrounds: 27023"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 383518.2293027718,
            "unit": "iter/sec",
            "range": "stddev: 3.8910045134599354e-7",
            "extra": "mean: 2.607437987544893 usec\nrounds: 36791"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 271400.70026768645,
            "unit": "iter/sec",
            "range": "stddev: 4.5872247492253375e-7",
            "extra": "mean: 3.6845888717814117 usec\nrounds: 45470"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 168629.57935601895,
            "unit": "iter/sec",
            "range": "stddev: 7.515343660840809e-7",
            "extra": "mean: 5.930157709097711 usec\nrounds: 24951"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 394820.77952938643,
            "unit": "iter/sec",
            "range": "stddev: 3.6873788026164714e-7",
            "extra": "mean: 2.5327947561219233 usec\nrounds: 36576"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2444864.72464545,
            "unit": "iter/sec",
            "range": "stddev: 2.460443715299443e-7",
            "extra": "mean: 409.0205850325802 nsec\nrounds: 186290"
          }
        ]
      },
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
          "id": "50aef7166cba93d2d80e83697be292b59146e828",
          "message": "Merge pull request #31 from Mixser/MGG-XXX-strict-mypy\n\nMGG-XXX Enable strict mypy",
          "timestamp": "2026-10-11T19:31:35+03:00",
          "tree_id": "2fbfc5779739d9b5c3148336ce6336f6a7c06e01",
          "url": "https://github.com/Mixser/zenmqtt/commit/50aef7166cba93d2d80e83697be292b59146e828"
        },
        "date": 1791736589714,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 340924.85569821985,
            "unit": "iter/sec",
            "range": "stddev: 5.88995653057586e-7",
            "extra": "mean: 2.9331976923535925 usec\nrounds: 48707"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 327378.6679817303,
            "unit": "iter/sec",
            "range": "stddev: 6.061742317398977e-7",
            "extra": "mean: 3.0545667687053024 usec\nrounds: 72197"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 254469.58596191148,
            "unit": "iter/sec",
            "range": "stddev: 7.289853045670361e-7",
            "extra": "mean: 3.929742708622468 usec\nrounds: 70220"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 244739.5334080694,
            "unit": "iter/sec",
            "range": "stddev: 7.433313983668245e-7",
            "extra": "mean: 4.08597657303137 usec\nrounds: 70517"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 151491.87255489928,
            "unit": "iter/sec",
            "range": "stddev: 9.164207562799342e-7",
            "extra": "mean: 6.601014187329483 usec\nrounds: 25868"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 194061.734745743,
            "unit": "iter/sec",
            "range": "stddev: 6.947196843946608e-7",
            "extra": "mean: 5.152999386046848 usec\nrounds: 24431"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 181822.02620821178,
            "unit": "iter/sec",
            "range": "stddev: 7.37124932637476e-7",
            "extra": "mean: 5.499883709660454 usec\nrounds: 64210"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 148865.83992651425,
            "unit": "iter/sec",
            "range": "stddev: 7.984922278720677e-7",
            "extra": "mean: 6.717457816337432 usec\nrounds: 52141"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 139932.92030289912,
            "unit": "iter/sec",
            "range": "stddev: 8.226543865971347e-7",
            "extra": "mean: 7.146281216995956 usec\nrounds: 58734"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 84946.77403637115,
            "unit": "iter/sec",
            "range": "stddev: 0.00000118275196184089",
            "extra": "mean: 11.772077413697147 usec\nrounds: 26972"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 787098.4950431759,
            "unit": "iter/sec",
            "range": "stddev: 3.281045424967781e-7",
            "extra": "mean: 1.2704890255763295 usec\nrounds: 72988"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 146514.5157844452,
            "unit": "iter/sec",
            "range": "stddev: 8.723990147040974e-7",
            "extra": "mean: 6.8252622932680485 usec\nrounds: 27454"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 222497.34358050642,
            "unit": "iter/sec",
            "range": "stddev: 7.180665160115109e-7",
            "extra": "mean: 4.494435681377783 usec\nrounds: 36669"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 155946.23686493977,
            "unit": "iter/sec",
            "range": "stddev: 9.0095325827166e-7",
            "extra": "mean: 6.412466373690499 usec\nrounds: 42095"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 95706.8327609678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012408967905345448",
            "extra": "mean: 10.448574789822436 usec\nrounds: 21888"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 223132.09231199522,
            "unit": "iter/sec",
            "range": "stddev: 6.69003798228389e-7",
            "extra": "mean: 4.481650262131484 usec\nrounds: 36047"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1403175.6140647095,
            "unit": "iter/sec",
            "range": "stddev: 1.0721257997456455e-7",
            "extra": "mean: 712.6691698291469 nsec\nrounds: 67468"
          }
        ]
      }
    ]
  }
}