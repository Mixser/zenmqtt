window.BENCHMARK_DATA = {
  "lastUpdate": 1791835798252,
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
          "id": "f4544aec9bba3e8d00b3b7eae6c0b546592c5c21",
          "message": "Merge pull request #35 from Mixser/MGG-XXX-version-0.1.0rc1\n\nMGG-XXX Set the version 0.1.0rc1",
          "timestamp": "2026-10-11T19:53:49+03:00",
          "tree_id": "2f1365c137ff8d4d2e9eb35503de06e47c4f453a",
          "url": "https://github.com/Mixser/zenmqtt/commit/f4544aec9bba3e8d00b3b7eae6c0b546592c5c21"
        },
        "date": 1791737699552,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 92989.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44691.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 61362.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 30149.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58404.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29021.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 22647.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11465.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6789.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17127.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7182.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4067.3,
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
          "id": "c33ba496e712c3d63b01519e117ede58bacbb393",
          "message": "Merge pull request #36 from Mixser/MGG-XXX-publish-to-pypi-only\n\nMGG-XXX Publish pre-releases to PyPI",
          "timestamp": "2026-10-11T19:59:20+03:00",
          "tree_id": "41635ebaeae2ce7324038f03e2c29c5e0f303766",
          "url": "https://github.com/Mixser/zenmqtt/commit/c33ba496e712c3d63b01519e117ede58bacbb393"
        },
        "date": 1791738012638,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 92287.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44729.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 60728.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 29713.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 57902.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 28892.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21039.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11311.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6697.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17428,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6997,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3979.6,
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
          "id": "3962593e42ede0cc7e26351b0e5899a63a47f3ae",
          "message": "Merge pull request #33 from Mixser/MGG-XXX-wait-across-reconnect-in-client\n\nMGG-XXX Move wait_across_reconnect from the protocol to the client",
          "timestamp": "2026-10-11T20:03:26+03:00",
          "tree_id": "7b96a0f229e58f18e1ddcdc45ab8bcf2f21dd4fa",
          "url": "https://github.com/Mixser/zenmqtt/commit/3962593e42ede0cc7e26351b0e5899a63a47f3ae"
        },
        "date": 1791738259696,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 94324.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44651.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 61238.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 29857.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58081.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29128.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21070.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11442.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6888,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17690.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7105.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4063.2,
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
          "id": "1411fdb76cbaff99404974874af24ab2806da921",
          "message": "Merge pull request #37 from Mixser/MGG-XXX-readme-pypi\n\nMGG-XXX Update README for PyPI",
          "timestamp": "2026-10-11T20:29:21+03:00",
          "tree_id": "ff7867dedc2f4e1a4677a1056f21399e780909bf",
          "url": "https://github.com/Mixser/zenmqtt/commit/1411fdb76cbaff99404974874af24ab2806da921"
        },
        "date": 1791739841259,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 92787.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44199.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 60845.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 29743.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58207.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 28840.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 20880.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11203.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6642,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17370.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6885.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3964.5,
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
          "id": "86cef29cd99647f19250e6cad17fa2f9dfeb3eb7",
          "message": "Merge pull request #38 from Mixser/MGG-XXX-ack-auth-qos2-fixes\n\nMGG-XXX Warn about blocked acks, close on AUTH, don't deliver duplicates before ack",
          "timestamp": "2026-10-11T20:29:46+03:00",
          "tree_id": "c43e340d393ff43f2ec19295c6cc405a35e5bf07",
          "url": "https://github.com/Mixser/zenmqtt/commit/86cef29cd99647f19250e6cad17fa2f9dfeb3eb7"
        },
        "date": 1791740003003,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 95089,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 45047.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 52577.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26665.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 52498.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 27078.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21091.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11257.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6885,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17415.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6584.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3869.1,
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
          "id": "89f441ef64ca9daad96c7c60e5fbc86771806347",
          "message": "MGG-XXX Moved instrumentation to the zenmqtt.instrumentation package: MetricsCollector, the OpenTelemetry adapter and the monitors; Moved the warning about a blocked ack from IncomingFlow to AckBlockedMonitor; The protocol only calls metrics hooks; (#40)",
          "timestamp": "2026-10-11T20:45:37+03:00",
          "tree_id": "544502dc1d01bace68568232aad49bedaca2f672",
          "url": "https://github.com/Mixser/zenmqtt/commit/89f441ef64ca9daad96c7c60e5fbc86771806347"
        },
        "date": 1791740794237,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 99183.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 45567.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 53635.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 27339.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 50972.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 25865.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21653.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 10970.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6607.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16283.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6493.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3841.9,
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
          "id": "6fe668a7561183bd62d2f35df4bdc3e5e437464e",
          "message": "Merge pull request #43 from Mixser/MGG-XXX-context-ownership\n\nMGG-XXX Make the state of ProtocolContext read-only for the parts",
          "timestamp": "2026-10-11T20:56:59+03:00",
          "tree_id": "f2a884ba9d705f98c1090502a7770b95fa144dcc",
          "url": "https://github.com/Mixser/zenmqtt/commit/6fe668a7561183bd62d2f35df4bdc3e5e437464e"
        },
        "date": 1791741467805,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 130228.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 64870.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 73252.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 39598,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 70597.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 38063.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 42005.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 18146.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11570.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 30723.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11234.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6831.7,
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
          "id": "8c0a3b2a7b4220e61be82df854d2d9890f4ef032",
          "message": "Merge pull request #45 from Mixser/MGG-XXX-version-0.1.0rc2\n\nMGG-XXX Set the version 0.1.0rc2",
          "timestamp": "2026-10-11T20:58:34+03:00",
          "tree_id": "0c73cbfbc1c6336d8106f380b8c34c537745cb08",
          "url": "https://github.com/Mixser/zenmqtt/commit/8c0a3b2a7b4220e61be82df854d2d9890f4ef032"
        },
        "date": 1791741615309,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 101447.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 46137.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 54351,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 28144.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 52374.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26789.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 20076.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11277.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6896.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17359.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6596.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3898.8,
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
          "id": "7bf788372ea7302086bb0486faac34546854b714",
          "message": "Merge pull request #46 from Mixser/MGG-XXX-architecture-doc\n\nMGG-XXX Add the architecture document",
          "timestamp": "2026-10-11T21:13:09+03:00",
          "tree_id": "9b1a0232b4489eb10b00c549ab460e29e7f1114b",
          "url": "https://github.com/Mixser/zenmqtt/commit/7bf788372ea7302086bb0486faac34546854b714"
        },
        "date": 1791742444047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 100117.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 45520.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 53966.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 27364.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 52201.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26137.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23130.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11146,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6728.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16375.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6662.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3878.8,
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
          "id": "2cf2f7d00a99cb3a155a33a7bd698544d0bfc077",
          "message": "Merge pull request #47 from Mixser/MGG-XXX-session-module\n\nMGG-XXX Move the session to zenmqtt.session",
          "timestamp": "2026-10-11T21:18:15+03:00",
          "tree_id": "fddfeaf21e91106914a95c0087cb7bbf20e6de1f",
          "url": "https://github.com/Mixser/zenmqtt/commit/2cf2f7d00a99cb3a155a33a7bd698544d0bfc077"
        },
        "date": 1791742739133,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 189555.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 90586.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 101857.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 54845.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 97283.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 53136.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 63325.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 22952.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 16244.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 44014.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 15536.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9300.3,
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
          "id": "4bfbfd290a302f182e0c42a0c3f993297f818037",
          "message": "Merge pull request #48 from Mixser/MGG-XXX-graceful-shutdown\n\nMGG-XXX Add graceful shutdown: disconnect(timeout=...)",
          "timestamp": "2026-10-11T21:36:42+03:00",
          "tree_id": "197098a590fd4821a97ec439ec5277e90d54c323",
          "url": "https://github.com/Mixser/zenmqtt/commit/4bfbfd290a302f182e0c42a0c3f993297f818037"
        },
        "date": 1791743850244,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 132215.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 63612.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 72401.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 38506.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 69804.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 37611.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 50087,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 17918.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11569,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 30932.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11370.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6955.9,
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
          "id": "94feeebdeee7b076820c218f31bfa54aae5aa88a",
          "message": "Merge pull request #49 from Mixser/MGG-XXX-guard-metrics-hooks\n\nMGG-XXX Guard metrics hooks",
          "timestamp": "2026-10-11T21:36:51+03:00",
          "tree_id": "d8296d1ccafe03f6b8d154da066bfb3958fc1382",
          "url": "https://github.com/Mixser/zenmqtt/commit/94feeebdeee7b076820c218f31bfa54aae5aa88a"
        },
        "date": 1791744005462,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 95686.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44261.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 54842.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 27130.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 53048,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26067.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 22769.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11227.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6706.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18565,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6673.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3895.5,
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
          "id": "2be6ae47ed78333ae02a5ef9918019b31365903a",
          "message": "Merge pull request #50 from Mixser/MGG-XXX-opentelemetry-tracing\n\nMGG-XXX Add optional OpenTelemetry tracing",
          "timestamp": "2026-10-11T21:45:21+03:00",
          "tree_id": "b36b7c821fa2a54641d5387b1d347ddf87c61037",
          "url": "https://github.com/Mixser/zenmqtt/commit/2be6ae47ed78333ae02a5ef9918019b31365903a"
        },
        "date": 1791744378441,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 99547.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 43445.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 54375.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26430.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 52588.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 25665.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 20050.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11023.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6526,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17404.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6321.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3759.3,
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
          "id": "fa2c12836c25457d0d31e6e11174751a93c05b16",
          "message": "Merge pull request #51 from Mixser/MGG-XXX-close-broken-connection\n\nMGG-XXX Don't stop reconnecting when closing a broken connection fails",
          "timestamp": "2026-10-11T21:53:31+03:00",
          "tree_id": "35c53d8cf269a5ee7da448bd44a22034734206f0",
          "url": "https://github.com/Mixser/zenmqtt/commit/fa2c12836c25457d0d31e6e11174751a93c05b16"
        },
        "date": 1791744864141,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 100047.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44161,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 55086,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26788.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 52125.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26209.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 22699.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11326.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6855.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16424.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6673.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3897.9,
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
          "id": "18921e85ae1f3c49e9d8240bd7c005f76fae3ede",
          "message": "Merge pull request #52 from Mixser/MGG-XXX-integration-tests\n\nMGG-XXX Add integration tests against a real broker",
          "timestamp": "2026-10-11T21:58:59+03:00",
          "tree_id": "3d3bcf56227a75acfc62905a477ea618a8461640",
          "url": "https://github.com/Mixser/zenmqtt/commit/18921e85ae1f3c49e9d8240bd7c005f76fae3ede"
        },
        "date": 1791745185969,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 131374.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 62185.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 72270.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 38271,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 69267.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 36728.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 39266.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 18328.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11626.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 30667,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11316.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6940.5,
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
          "id": "801d765d9223e0ee6e6783e17e3a4c5c7551d679",
          "message": "Merge pull request #53 from Mixser/MGG-XXX-coverage\n\nMGG-XXX Collect coverage of unit and integration tests in CI",
          "timestamp": "2026-10-11T22:11:47+03:00",
          "tree_id": "6b8111e03d6d50f33e437dd1250273ae363dc55d",
          "url": "https://github.com/Mixser/zenmqtt/commit/801d765d9223e0ee6e6783e17e3a4c5c7551d679"
        },
        "date": 1791745960329,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 97434.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 43975.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 54650,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26861.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 53058.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26104.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 24646.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11515.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6821.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18787.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6612.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3962.8,
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
          "id": "1f0921d7dc455b1af205f246a18079936597ce95",
          "message": "Merge pull request #54 from Mixser/MGG-XXX-version-0.1.0rc3\n\nMGG-XXX Set the version 0.1.0rc3",
          "timestamp": "2026-10-11T22:14:52+03:00",
          "tree_id": "2f2f178a99e5abf2e99073cc2b0c119986f42075",
          "url": "https://github.com/Mixser/zenmqtt/commit/1f0921d7dc455b1af205f246a18079936597ce95"
        },
        "date": 1791746145809,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 99732.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 43883.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 54224,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26316.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 52217.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 25959.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21685.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11063.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6712.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18397.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6551,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3851,
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
          "id": "82cf04b77e6541d9eac25d81dc1b414198a39b9a",
          "message": "Merge pull request #55 from Mixser/MGG-XXX-coverage-pages-workflow\n\nMGG-XXX Publish coverage in a separate workflow",
          "timestamp": "2026-10-11T22:19:16+03:00",
          "tree_id": "785e80dbd13d64c20c3ed9534b3ef63b98cb3f33",
          "url": "https://github.com/Mixser/zenmqtt/commit/82cf04b77e6541d9eac25d81dc1b414198a39b9a"
        },
        "date": 1791746406211,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 132938.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 63143.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 72953.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 38804.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 70200.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 37510.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 44409.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 18219.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11785.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 29401,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11365.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7014,
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
          "id": "510ae0488b225a062e82e2e7f31cd07ba172e107",
          "message": "Merge pull request #56 from Mixser/MGG-XXX-manual-perf-compare\n\nMGG-XXX Make the performance comparison a manual step of CI",
          "timestamp": "2026-10-11T22:30:35+03:00",
          "tree_id": "780b9b2745e659995a6840f53beb75ccc60c1a69",
          "url": "https://github.com/Mixser/zenmqtt/commit/510ae0488b225a062e82e2e7f31cd07ba172e107"
        },
        "date": 1791747090878,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 100258.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44080.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 54314.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26752.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 51904.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 25653.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 24807.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11150.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6605.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18319.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6611.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3822.1,
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
          "id": "1b442a62c299f5f5d60b35b134eac1e891b1f1c4",
          "message": "Merge pull request #57 from Mixser/MGG-XXX-mqtt5-names\n\nMGG-XXX Use the names of the MQTT 5 specification",
          "timestamp": "2026-10-11T22:44:49+03:00",
          "tree_id": "fb977d5d25f23285524d4407c8b3d35acd64bdf1",
          "url": "https://github.com/Mixser/zenmqtt/commit/1b442a62c299f5f5d60b35b134eac1e891b1f1c4"
        },
        "date": 1791747945060,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 101720,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44252.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 50169.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 25471.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 52447,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26014,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21785.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11185.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6674.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18373.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6583.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3879.5,
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
          "id": "25c9dcc0c6e019010136893cdeda4a6978f09b05",
          "message": "Merge pull request #58 from Mixser/MGG-XXX-client-lifecycle\n\nMGG-XXX Add async with to the client, move credentials to connect()",
          "timestamp": "2026-10-11T22:47:50+03:00",
          "tree_id": "87080561ebce2f2aa5c290d98050c109a15372e5",
          "url": "https://github.com/Mixser/zenmqtt/commit/25c9dcc0c6e019010136893cdeda4a6978f09b05"
        },
        "date": 1791748123764,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 100238.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44284.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 55277.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26658.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 53549.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 25655.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23752.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11074,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6634.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16489.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6588.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3845.5,
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
          "id": "b1314f61724eade353993bdadcd1fe1038eef6f7",
          "message": "Merge pull request #58 from Mixser/MGG-XXX-client-lifecycle\n\nMGG-XXX Add async with to the client, move credentials to connect()",
          "timestamp": "2026-10-11T22:47:50+03:00",
          "tree_id": "79392d25b75f137d0859a189be07c812fc9edcff",
          "url": "https://github.com/Mixser/zenmqtt/commit/b1314f61724eade353993bdadcd1fe1038eef6f7"
        },
        "date": 1791748341797,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 185034.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 91636.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 104664.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 55267.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 101214.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 55139.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 65630.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 24663.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 16301.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 32952.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 15988.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9764,
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
          "id": "aa7686c9c15577b5967019791e855fb209b6e4a1",
          "message": "Merge pull request #60 from Mixser/MGG-XXX-qos-reason-code-enums\n\nMGG-XXX Add QoS and ReasonCode enums",
          "timestamp": "2026-10-11T22:56:10+03:00",
          "tree_id": "c859e5fcc9faee5e7a20cb438ed310ad24e21315",
          "url": "https://github.com/Mixser/zenmqtt/commit/aa7686c9c15577b5967019791e855fb209b6e4a1"
        },
        "date": 1791748626824,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 97326.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 43201.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 52597.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 25817.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 51006.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 24860.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 20680.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11153.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6516,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17108,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6448,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3761.9,
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
          "id": "1b7ab8fdf0ecc5f5330c13df64bde9a597774f14",
          "message": "Merge pull request #62 from Mixser/MGG-XXX-version-0.1.0rc4\n\nMGG-XXX Set the version 0.1.0rc4",
          "timestamp": "2026-10-11T22:56:38+03:00",
          "tree_id": "e0a2075d1873af9190f304929f46446429c0fc26",
          "url": "https://github.com/Mixser/zenmqtt/commit/1b7ab8fdf0ecc5f5330c13df64bde9a597774f14"
        },
        "date": 1791748796688,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 98432.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 43997.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 54711,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26619.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 52119,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26674.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 20521.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11350.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6753.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17921.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6686.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3909.3,
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
          "id": "5ddc404e27d3cdd820e897853f8613a48378409b",
          "message": "Merge pull request #63 from Mixser/MGG-XXX-rename-processing-to-trace\n\nMGG-XXX Rename client.processing() to client.trace()",
          "timestamp": "2026-10-11T23:42:55+03:00",
          "tree_id": "7254415f32310e6c07b1ea7c82a021fc42cc0734",
          "url": "https://github.com/Mixser/zenmqtt/commit/5ddc404e27d3cdd820e897853f8613a48378409b"
        },
        "date": 1791751423454,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 131819.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 62263.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 71820.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 37702.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 69231.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 36841.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 49473.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 17982.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11685.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 30603.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11282.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6981.3,
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
          "id": "b5c75ef8c788b62e75bced2c65ce9dd98a25a018",
          "message": "Merge pull request #65 from Mixser/MGG-XXX-codec-decode\n\nMGG-XXX Move packet parsing out of the handlers",
          "timestamp": "2026-10-12T23:08:10+03:00",
          "tree_id": "917a5b536ebcc3d0c9b50fddb1efe25001524acb",
          "url": "https://github.com/Mixser/zenmqtt/commit/b5c75ef8c788b62e75bced2c65ce9dd98a25a018"
        },
        "date": 1791835744891,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 95853.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 42924.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 53001,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 25722.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 51231.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 24921.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23498.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11029.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6658,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17976.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6437.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3800.3,
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
          "id": "f4544aec9bba3e8d00b3b7eae6c0b546592c5c21",
          "message": "Merge pull request #35 from Mixser/MGG-XXX-version-0.1.0rc1\n\nMGG-XXX Set the version 0.1.0rc1",
          "timestamp": "2026-10-11T19:53:49+03:00",
          "tree_id": "2f1365c137ff8d4d2e9eb35503de06e47c4f453a",
          "url": "https://github.com/Mixser/zenmqtt/commit/f4544aec9bba3e8d00b3b7eae6c0b546592c5c21"
        },
        "date": 1791737755339,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 99697,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 47679.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 66040.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 31856.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 63212,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 30316,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 22278.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 12167.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7058.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18762.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7632.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4205.7,
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
          "id": "c33ba496e712c3d63b01519e117ede58bacbb393",
          "message": "Merge pull request #36 from Mixser/MGG-XXX-publish-to-pypi-only\n\nMGG-XXX Publish pre-releases to PyPI",
          "timestamp": "2026-10-11T19:59:20+03:00",
          "tree_id": "41635ebaeae2ce7324038f03e2c29c5e0f303766",
          "url": "https://github.com/Mixser/zenmqtt/commit/c33ba496e712c3d63b01519e117ede58bacbb393"
        },
        "date": 1791738067721,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 91689.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 46120.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 61769.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 30721.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58837.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29539.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21664.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11446.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6657.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17751,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7018.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3935,
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
          "id": "3962593e42ede0cc7e26351b0e5899a63a47f3ae",
          "message": "Merge pull request #33 from Mixser/MGG-XXX-wait-across-reconnect-in-client\n\nMGG-XXX Move wait_across_reconnect from the protocol to the client",
          "timestamp": "2026-10-11T20:03:26+03:00",
          "tree_id": "7b96a0f229e58f18e1ddcdc45ab8bcf2f21dd4fa",
          "url": "https://github.com/Mixser/zenmqtt/commit/3962593e42ede0cc7e26351b0e5899a63a47f3ae"
        },
        "date": 1791738316132,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 95606.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44373.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 62147.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 29701.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58583.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29130.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23104.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11642.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6655.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17540.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7030.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3943.8,
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
          "id": "1411fdb76cbaff99404974874af24ab2806da921",
          "message": "Merge pull request #37 from Mixser/MGG-XXX-readme-pypi\n\nMGG-XXX Update README for PyPI",
          "timestamp": "2026-10-11T20:29:21+03:00",
          "tree_id": "ff7867dedc2f4e1a4677a1056f21399e780909bf",
          "url": "https://github.com/Mixser/zenmqtt/commit/1411fdb76cbaff99404974874af24ab2806da921"
        },
        "date": 1791739898571,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 94715.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 45400,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 60875,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 30347.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58156.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29549.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 20671.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11298.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6605.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17175.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6976,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3889.7,
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
          "id": "86cef29cd99647f19250e6cad17fa2f9dfeb3eb7",
          "message": "Merge pull request #38 from Mixser/MGG-XXX-ack-auth-qos2-fixes\n\nMGG-XXX Warn about blocked acks, close on AUTH, don't deliver duplicates before ack",
          "timestamp": "2026-10-11T20:29:46+03:00",
          "tree_id": "c43e340d393ff43f2ec19295c6cc405a35e5bf07",
          "url": "https://github.com/Mixser/zenmqtt/commit/86cef29cd99647f19250e6cad17fa2f9dfeb3eb7"
        },
        "date": 1791740051593,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 111074,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 55144.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 64762.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 34322.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 62189.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 33104,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 30757.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 16732.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9714.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 27072,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 9924.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 5824.1,
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
          "id": "89f441ef64ca9daad96c7c60e5fbc86771806347",
          "message": "MGG-XXX Moved instrumentation to the zenmqtt.instrumentation package: MetricsCollector, the OpenTelemetry adapter and the monitors; Moved the warning about a blocked ack from IncomingFlow to AckBlockedMonitor; The protocol only calls metrics hooks; (#40)",
          "timestamp": "2026-10-11T20:45:37+03:00",
          "tree_id": "544502dc1d01bace68568232aad49bedaca2f672",
          "url": "https://github.com/Mixser/zenmqtt/commit/89f441ef64ca9daad96c7c60e5fbc86771806347"
        },
        "date": 1791740847390,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 128273,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 66342.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 73696.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 40446.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 69619.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 38906,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 50324.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 18760.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11849.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 30788.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11539.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6908.9,
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
          "id": "6fe668a7561183bd62d2f35df4bdc3e5e437464e",
          "message": "Merge pull request #43 from Mixser/MGG-XXX-context-ownership\n\nMGG-XXX Make the state of ProtocolContext read-only for the parts",
          "timestamp": "2026-10-11T20:56:59+03:00",
          "tree_id": "f2a884ba9d705f98c1090502a7770b95fa144dcc",
          "url": "https://github.com/Mixser/zenmqtt/commit/6fe668a7561183bd62d2f35df4bdc3e5e437464e"
        },
        "date": 1791741511998,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 189932.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 94765.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 102191,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 55426.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 97698.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 54458.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 65550.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 25143,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 15745.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 44910.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 15286.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9536.5,
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
          "id": "8c0a3b2a7b4220e61be82df854d2d9890f4ef032",
          "message": "Merge pull request #45 from Mixser/MGG-XXX-version-0.1.0rc2\n\nMGG-XXX Set the version 0.1.0rc2",
          "timestamp": "2026-10-11T20:58:34+03:00",
          "tree_id": "0c73cbfbc1c6336d8106f380b8c34c537745cb08",
          "url": "https://github.com/Mixser/zenmqtt/commit/8c0a3b2a7b4220e61be82df854d2d9890f4ef032"
        },
        "date": 1791741660257,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 131403.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 64787.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 71823.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 39871.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 68423.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 38760.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 51680.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 18933,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11853.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 30341.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11608.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6930.1,
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
          "id": "7bf788372ea7302086bb0486faac34546854b714",
          "message": "Merge pull request #46 from Mixser/MGG-XXX-architecture-doc\n\nMGG-XXX Add the architecture document",
          "timestamp": "2026-10-11T21:13:09+03:00",
          "tree_id": "9b1a0232b4489eb10b00c549ab460e29e7f1114b",
          "url": "https://github.com/Mixser/zenmqtt/commit/7bf788372ea7302086bb0486faac34546854b714"
        },
        "date": 1791742491815,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 121641.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 56949.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 66570.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 34722.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 62876.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 32516,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 36456,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 17019.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9948.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 27815.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 10078.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 5880.8,
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
          "id": "2cf2f7d00a99cb3a155a33a7bd698544d0bfc077",
          "message": "Merge pull request #47 from Mixser/MGG-XXX-session-module\n\nMGG-XXX Move the session to zenmqtt.session",
          "timestamp": "2026-10-11T21:18:15+03:00",
          "tree_id": "fddfeaf21e91106914a95c0087cb7bbf20e6de1f",
          "url": "https://github.com/Mixser/zenmqtt/commit/2cf2f7d00a99cb3a155a33a7bd698544d0bfc077"
        },
        "date": 1791742796138,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 120269.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 58673.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 67348,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 35358,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 64414.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 34783.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 35912.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 17089.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9903,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 29978.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 9908.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 5888.3,
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
          "id": "4bfbfd290a302f182e0c42a0c3f993297f818037",
          "message": "Merge pull request #48 from Mixser/MGG-XXX-graceful-shutdown\n\nMGG-XXX Add graceful shutdown: disconnect(timeout=...)",
          "timestamp": "2026-10-11T21:36:42+03:00",
          "tree_id": "197098a590fd4821a97ec439ec5277e90d54c323",
          "url": "https://github.com/Mixser/zenmqtt/commit/4bfbfd290a302f182e0c42a0c3f993297f818037"
        },
        "date": 1791743900528,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 165016.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 68870.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 81787.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 46841.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 87289.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 47451.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 49494.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 22751.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 13304.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 24277.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 13726.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7956.6,
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
          "id": "94feeebdeee7b076820c218f31bfa54aae5aa88a",
          "message": "Merge pull request #49 from Mixser/MGG-XXX-guard-metrics-hooks\n\nMGG-XXX Guard metrics hooks",
          "timestamp": "2026-10-11T21:36:51+03:00",
          "tree_id": "d8296d1ccafe03f6b8d154da066bfb3958fc1382",
          "url": "https://github.com/Mixser/zenmqtt/commit/94feeebdeee7b076820c218f31bfa54aae5aa88a"
        },
        "date": 1791744049873,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 183877,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 90145,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 100525.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 53933.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 97010.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 53137.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 65689.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 25195.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 15916.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 46935.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 15601.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9125.3,
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
          "id": "2be6ae47ed78333ae02a5ef9918019b31365903a",
          "message": "Merge pull request #50 from Mixser/MGG-XXX-opentelemetry-tracing\n\nMGG-XXX Add optional OpenTelemetry tracing",
          "timestamp": "2026-10-11T21:45:21+03:00",
          "tree_id": "b36b7c821fa2a54641d5387b1d347ddf87c61037",
          "url": "https://github.com/Mixser/zenmqtt/commit/2be6ae47ed78333ae02a5ef9918019b31365903a"
        },
        "date": 1791744435036,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 100044.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 45906.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 54722.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 27040.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 52302.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26205.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23192.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11505.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6859.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16730.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6681.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3837.2,
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
          "id": "fa2c12836c25457d0d31e6e11174751a93c05b16",
          "message": "Merge pull request #51 from Mixser/MGG-XXX-close-broken-connection\n\nMGG-XXX Don't stop reconnecting when closing a broken connection fails",
          "timestamp": "2026-10-11T21:53:31+03:00",
          "tree_id": "35c53d8cf269a5ee7da448bd44a22034734206f0",
          "url": "https://github.com/Mixser/zenmqtt/commit/fa2c12836c25457d0d31e6e11174751a93c05b16"
        },
        "date": 1791744919997,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 100265.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 46554.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 54215.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 27260.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 52228.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26513.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 22714.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11015,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6474.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17455,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6543.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3745.2,
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
          "id": "18921e85ae1f3c49e9d8240bd7c005f76fae3ede",
          "message": "Merge pull request #52 from Mixser/MGG-XXX-integration-tests\n\nMGG-XXX Add integration tests against a real broker",
          "timestamp": "2026-10-11T21:58:59+03:00",
          "tree_id": "3d3bcf56227a75acfc62905a477ea618a8461640",
          "url": "https://github.com/Mixser/zenmqtt/commit/18921e85ae1f3c49e9d8240bd7c005f76fae3ede"
        },
        "date": 1791745238057,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 136783.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 65589.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 77744.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 39952.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 74649.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 39166.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 40646.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 20037.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11714.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 33917.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11617.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7035.5,
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
          "id": "801d765d9223e0ee6e6783e17e3a4c5c7551d679",
          "message": "Merge pull request #53 from Mixser/MGG-XXX-coverage\n\nMGG-XXX Collect coverage of unit and integration tests in CI",
          "timestamp": "2026-10-11T22:11:47+03:00",
          "tree_id": "6b8111e03d6d50f33e437dd1250273ae363dc55d",
          "url": "https://github.com/Mixser/zenmqtt/commit/801d765d9223e0ee6e6783e17e3a4c5c7551d679"
        },
        "date": 1791746016685,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 98320.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 46359.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 54332.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26841.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 51370.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26175.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 24736.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11303.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6729,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17814.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6626.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3773.2,
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
          "id": "1f0921d7dc455b1af205f246a18079936597ce95",
          "message": "Merge pull request #54 from Mixser/MGG-XXX-version-0.1.0rc3\n\nMGG-XXX Set the version 0.1.0rc3",
          "timestamp": "2026-10-11T22:14:52+03:00",
          "tree_id": "2f2f178a99e5abf2e99073cc2b0c119986f42075",
          "url": "https://github.com/Mixser/zenmqtt/commit/1f0921d7dc455b1af205f246a18079936597ce95"
        },
        "date": 1791746198770,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 119139.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 56412,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 68054.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 34782.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 63950.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 33833.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 34095.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 16625.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9941.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 29481.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 9971.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6167.3,
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
          "id": "82cf04b77e6541d9eac25d81dc1b414198a39b9a",
          "message": "Merge pull request #55 from Mixser/MGG-XXX-coverage-pages-workflow\n\nMGG-XXX Publish coverage in a separate workflow",
          "timestamp": "2026-10-11T22:19:16+03:00",
          "tree_id": "785e80dbd13d64c20c3ed9534b3ef63b98cb3f33",
          "url": "https://github.com/Mixser/zenmqtt/commit/82cf04b77e6541d9eac25d81dc1b414198a39b9a"
        },
        "date": 1791746452364,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 181129.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 92422.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 105174.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 56567.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 97633.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 53937,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 74666.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 25375.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 16429.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 46463.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 16003.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9375.8,
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
          "id": "510ae0488b225a062e82e2e7f31cd07ba172e107",
          "message": "Merge pull request #56 from Mixser/MGG-XXX-manual-perf-compare\n\nMGG-XXX Make the performance comparison a manual step of CI",
          "timestamp": "2026-10-11T22:30:35+03:00",
          "tree_id": "780b9b2745e659995a6840f53beb75ccc60c1a69",
          "url": "https://github.com/Mixser/zenmqtt/commit/510ae0488b225a062e82e2e7f31cd07ba172e107"
        },
        "date": 1791747144893,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 101424.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 42558.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 50137.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 27336.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 53411.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26195.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23088.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11188.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6665.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18412.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6597.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3871.3,
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
          "id": "1b442a62c299f5f5d60b35b134eac1e891b1f1c4",
          "message": "Merge pull request #57 from Mixser/MGG-XXX-mqtt5-names\n\nMGG-XXX Use the names of the MQTT 5 specification",
          "timestamp": "2026-10-11T22:44:49+03:00",
          "tree_id": "fb977d5d25f23285524d4407c8b3d35acd64bdf1",
          "url": "https://github.com/Mixser/zenmqtt/commit/1b442a62c299f5f5d60b35b134eac1e891b1f1c4"
        },
        "date": 1791747998593,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 100820.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 46687.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 55177.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 27264.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 53406.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26638.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21115.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11493.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6682.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17488.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6562.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3802.1,
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
          "id": "25c9dcc0c6e019010136893cdeda4a6978f09b05",
          "message": "Merge pull request #58 from Mixser/MGG-XXX-client-lifecycle\n\nMGG-XXX Add async with to the client, move credentials to connect()",
          "timestamp": "2026-10-11T22:47:50+03:00",
          "tree_id": "87080561ebce2f2aa5c290d98050c109a15372e5",
          "url": "https://github.com/Mixser/zenmqtt/commit/25c9dcc0c6e019010136893cdeda4a6978f09b05"
        },
        "date": 1791748170892,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 187895.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 97161.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 106249.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 58898,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 103691.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 56668.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 67372.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 26643.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 16716.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 47809,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 16585.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9877.1,
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
          "id": "b1314f61724eade353993bdadcd1fe1038eef6f7",
          "message": "Merge pull request #58 from Mixser/MGG-XXX-client-lifecycle\n\nMGG-XXX Add async with to the client, move credentials to connect()",
          "timestamp": "2026-10-11T22:47:50+03:00",
          "tree_id": "79392d25b75f137d0859a189be07c812fc9edcff",
          "url": "https://github.com/Mixser/zenmqtt/commit/b1314f61724eade353993bdadcd1fe1038eef6f7"
        },
        "date": 1791748385036,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 177366.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 85383.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 94675.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 52110.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 90602.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 50690.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 59611.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 23976.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 15167.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 43768.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 14712.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 8809.8,
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
          "id": "aa7686c9c15577b5967019791e855fb209b6e4a1",
          "message": "Merge pull request #60 from Mixser/MGG-XXX-qos-reason-code-enums\n\nMGG-XXX Add QoS and ReasonCode enums",
          "timestamp": "2026-10-11T22:56:10+03:00",
          "tree_id": "c859e5fcc9faee5e7a20cb438ed310ad24e21315",
          "url": "https://github.com/Mixser/zenmqtt/commit/aa7686c9c15577b5967019791e855fb209b6e4a1"
        },
        "date": 1791748679054,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 134135.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 64768.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 73529.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 38798.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 69811,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 37643.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 40444.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 18525.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11775.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 31219.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11518.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6942.1,
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
          "id": "1b7ab8fdf0ecc5f5330c13df64bde9a597774f14",
          "message": "Merge pull request #62 from Mixser/MGG-XXX-version-0.1.0rc4\n\nMGG-XXX Set the version 0.1.0rc4",
          "timestamp": "2026-10-11T22:56:38+03:00",
          "tree_id": "e0a2075d1873af9190f304929f46446429c0fc26",
          "url": "https://github.com/Mixser/zenmqtt/commit/1b7ab8fdf0ecc5f5330c13df64bde9a597774f14"
        },
        "date": 1791748853680,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 97550.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 45967.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 54436.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26734.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 52233.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 25923.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 20935.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11498.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6536.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18529.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6402.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3745.7,
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
          "id": "5ddc404e27d3cdd820e897853f8613a48378409b",
          "message": "Merge pull request #63 from Mixser/MGG-XXX-rename-processing-to-trace\n\nMGG-XXX Rename client.processing() to client.trace()",
          "timestamp": "2026-10-11T23:42:55+03:00",
          "tree_id": "7254415f32310e6c07b1ea7c82a021fc42cc0734",
          "url": "https://github.com/Mixser/zenmqtt/commit/5ddc404e27d3cdd820e897853f8613a48378409b"
        },
        "date": 1791751476775,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 129646.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 63910.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 71381.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 38235.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 67958.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 36911.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 42506.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 18454.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11773.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 31260.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11403,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6790.2,
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
          "id": "b5c75ef8c788b62e75bced2c65ce9dd98a25a018",
          "message": "Merge pull request #65 from Mixser/MGG-XXX-codec-decode\n\nMGG-XXX Move packet parsing out of the handlers",
          "timestamp": "2026-10-12T23:08:10+03:00",
          "tree_id": "917a5b536ebcc3d0c9b50fddb1efe25001524acb",
          "url": "https://github.com/Mixser/zenmqtt/commit/b5c75ef8c788b62e75bced2c65ce9dd98a25a018"
        },
        "date": 1791835796843,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 129012.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 64030,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 70396.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 37869.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 67957.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 37492.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 45839.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 18223.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11468.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 30536.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11291.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6687.6,
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
        "date": 1791737647135,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 96588.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 42687,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 62295,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 28844.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 58899.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 28168.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 22814.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11523.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6754.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17437,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7006.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3921,
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
          "id": "f4544aec9bba3e8d00b3b7eae6c0b546592c5c21",
          "message": "Merge pull request #35 from Mixser/MGG-XXX-version-0.1.0rc1\n\nMGG-XXX Set the version 0.1.0rc1",
          "timestamp": "2026-10-11T19:53:49+03:00",
          "tree_id": "2f1365c137ff8d4d2e9eb35503de06e47c4f453a",
          "url": "https://github.com/Mixser/zenmqtt/commit/f4544aec9bba3e8d00b3b7eae6c0b546592c5c21"
        },
        "date": 1791737808105,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 132976.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 67904.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 85989.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 44723.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 80380.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 43155,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 49390.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 20318.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 12633.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 31762.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 12653.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7441.3,
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
          "id": "c33ba496e712c3d63b01519e117ede58bacbb393",
          "message": "Merge pull request #36 from Mixser/MGG-XXX-publish-to-pypi-only\n\nMGG-XXX Publish pre-releases to PyPI",
          "timestamp": "2026-10-11T19:59:20+03:00",
          "tree_id": "41635ebaeae2ce7324038f03e2c29c5e0f303766",
          "url": "https://github.com/Mixser/zenmqtt/commit/c33ba496e712c3d63b01519e117ede58bacbb393"
        },
        "date": 1791738108966,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 191532.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 95831.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 121630.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 62328.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 113830.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 59823.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 78338.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 26555.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 16330.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 44955.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 16754.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9760.2,
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
          "id": "3962593e42ede0cc7e26351b0e5899a63a47f3ae",
          "message": "Merge pull request #33 from Mixser/MGG-XXX-wait-across-reconnect-in-client\n\nMGG-XXX Move wait_across_reconnect from the protocol to the client",
          "timestamp": "2026-10-11T20:03:26+03:00",
          "tree_id": "7b96a0f229e58f18e1ddcdc45ab8bcf2f21dd4fa",
          "url": "https://github.com/Mixser/zenmqtt/commit/3962593e42ede0cc7e26351b0e5899a63a47f3ae"
        },
        "date": 1791738366754,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 98828.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44298.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 62629,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 29336.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 57945.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 29163.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21807.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11727.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6820.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16496.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 7180.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 4031.2,
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
          "id": "1411fdb76cbaff99404974874af24ab2806da921",
          "message": "Merge pull request #37 from Mixser/MGG-XXX-readme-pypi\n\nMGG-XXX Update README for PyPI",
          "timestamp": "2026-10-11T20:29:21+03:00",
          "tree_id": "ff7867dedc2f4e1a4677a1056f21399e780909bf",
          "url": "https://github.com/Mixser/zenmqtt/commit/1411fdb76cbaff99404974874af24ab2806da921"
        },
        "date": 1791739944423,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 125649,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 67205.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 85249.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 44719.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 81433.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 43307.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 46309.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 19841.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 12304.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 30880.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 12469.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7300.8,
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
          "id": "86cef29cd99647f19250e6cad17fa2f9dfeb3eb7",
          "message": "Merge pull request #38 from Mixser/MGG-XXX-ack-auth-qos2-fixes\n\nMGG-XXX Warn about blocked acks, close on AUTH, don't deliver duplicates before ack",
          "timestamp": "2026-10-11T20:29:46+03:00",
          "tree_id": "c43e340d393ff43f2ec19295c6cc405a35e5bf07",
          "url": "https://github.com/Mixser/zenmqtt/commit/86cef29cd99647f19250e6cad17fa2f9dfeb3eb7"
        },
        "date": 1791740090522,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 182045.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 92859.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 103488,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 56151.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 98351.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 54539.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 75417,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 24956,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 15742.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 46709.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 15562.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9388.2,
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
          "id": "89f441ef64ca9daad96c7c60e5fbc86771806347",
          "message": "MGG-XXX Moved instrumentation to the zenmqtt.instrumentation package: MetricsCollector, the OpenTelemetry adapter and the monitors; Moved the warning about a blocked ack from IncomingFlow to AckBlockedMonitor; The protocol only calls metrics hooks; (#40)",
          "timestamp": "2026-10-11T20:45:37+03:00",
          "tree_id": "544502dc1d01bace68568232aad49bedaca2f672",
          "url": "https://github.com/Mixser/zenmqtt/commit/89f441ef64ca9daad96c7c60e5fbc86771806347"
        },
        "date": 1791740908331,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 104732.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 46231.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 56070,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 27636.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 53028.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 26644.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 23238.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11665,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6917.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17960.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6633.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3852.5,
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
          "id": "6fe668a7561183bd62d2f35df4bdc3e5e437464e",
          "message": "Merge pull request #43 from Mixser/MGG-XXX-context-ownership\n\nMGG-XXX Make the state of ProtocolContext read-only for the parts",
          "timestamp": "2026-10-11T20:56:59+03:00",
          "tree_id": "f2a884ba9d705f98c1090502a7770b95fa144dcc",
          "url": "https://github.com/Mixser/zenmqtt/commit/6fe668a7561183bd62d2f35df4bdc3e5e437464e"
        },
        "date": 1791741556206,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 144495.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 67874.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 77957.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 40929.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 73627.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 39457.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 38895.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 19622.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11523.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 33407.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11602.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6956.3,
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
          "id": "8c0a3b2a7b4220e61be82df854d2d9890f4ef032",
          "message": "Merge pull request #45 from Mixser/MGG-XXX-version-0.1.0rc2\n\nMGG-XXX Set the version 0.1.0rc2",
          "timestamp": "2026-10-11T20:58:34+03:00",
          "tree_id": "0c73cbfbc1c6336d8106f380b8c34c537745cb08",
          "url": "https://github.com/Mixser/zenmqtt/commit/8c0a3b2a7b4220e61be82df854d2d9890f4ef032"
        },
        "date": 1791741709907,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 123266.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 57712.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 67036,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 34774.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 63217.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 32984.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 36368.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 15472,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9363.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17298.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 9477.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 5599.2,
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
          "id": "7bf788372ea7302086bb0486faac34546854b714",
          "message": "Merge pull request #46 from Mixser/MGG-XXX-architecture-doc\n\nMGG-XXX Add the architecture document",
          "timestamp": "2026-10-11T21:13:09+03:00",
          "tree_id": "9b1a0232b4489eb10b00c549ab460e29e7f1114b",
          "url": "https://github.com/Mixser/zenmqtt/commit/7bf788372ea7302086bb0486faac34546854b714"
        },
        "date": 1791742544861,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 126641.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 60714.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 67830.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 36111.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 64896.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 35741.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 38546.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 17826.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 10261.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 29963.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 10466.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6417.2,
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
          "id": "2cf2f7d00a99cb3a155a33a7bd698544d0bfc077",
          "message": "Merge pull request #47 from Mixser/MGG-XXX-session-module\n\nMGG-XXX Move the session to zenmqtt.session",
          "timestamp": "2026-10-11T21:18:15+03:00",
          "tree_id": "fddfeaf21e91106914a95c0087cb7bbf20e6de1f",
          "url": "https://github.com/Mixser/zenmqtt/commit/2cf2f7d00a99cb3a155a33a7bd698544d0bfc077"
        },
        "date": 1791742853479,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 105302,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 46081.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 56693.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26736.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 53755.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 28835.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21955.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11591.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6961.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 16936.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6755,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3931.2,
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
          "id": "4bfbfd290a302f182e0c42a0c3f993297f818037",
          "message": "Merge pull request #48 from Mixser/MGG-XXX-graceful-shutdown\n\nMGG-XXX Add graceful shutdown: disconnect(timeout=...)",
          "timestamp": "2026-10-11T21:36:42+03:00",
          "tree_id": "197098a590fd4821a97ec439ec5277e90d54c323",
          "url": "https://github.com/Mixser/zenmqtt/commit/4bfbfd290a302f182e0c42a0c3f993297f818037"
        },
        "date": 1791743946247,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 204914.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 103292,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 109845.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 62568.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 108773.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 62331.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 78990.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 28173.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 17008.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 50745.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 17111.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 10149.7,
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
          "id": "94feeebdeee7b076820c218f31bfa54aae5aa88a",
          "message": "Merge pull request #49 from Mixser/MGG-XXX-guard-metrics-hooks\n\nMGG-XXX Guard metrics hooks",
          "timestamp": "2026-10-11T21:36:51+03:00",
          "tree_id": "d8296d1ccafe03f6b8d154da066bfb3958fc1382",
          "url": "https://github.com/Mixser/zenmqtt/commit/94feeebdeee7b076820c218f31bfa54aae5aa88a"
        },
        "date": 1791744105511,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 103654.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44943.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 53826.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26071.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 53808,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 25180.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 20683.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11698.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6813.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17762.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6713.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3851.1,
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
          "id": "2be6ae47ed78333ae02a5ef9918019b31365903a",
          "message": "Merge pull request #50 from Mixser/MGG-XXX-opentelemetry-tracing\n\nMGG-XXX Add optional OpenTelemetry tracing",
          "timestamp": "2026-10-11T21:45:21+03:00",
          "tree_id": "b36b7c821fa2a54641d5387b1d347ddf87c61037",
          "url": "https://github.com/Mixser/zenmqtt/commit/2be6ae47ed78333ae02a5ef9918019b31365903a"
        },
        "date": 1791744475955,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 195191.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 94536.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 109539.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 55171.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 102141.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 56021.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 78191.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 26120.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 16402.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 46118.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 15966.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9719.5,
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
          "id": "fa2c12836c25457d0d31e6e11174751a93c05b16",
          "message": "Merge pull request #51 from Mixser/MGG-XXX-close-broken-connection\n\nMGG-XXX Don't stop reconnecting when closing a broken connection fails",
          "timestamp": "2026-10-11T21:53:31+03:00",
          "tree_id": "35c53d8cf269a5ee7da448bd44a22034734206f0",
          "url": "https://github.com/Mixser/zenmqtt/commit/fa2c12836c25457d0d31e6e11174751a93c05b16"
        },
        "date": 1791744977602,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 105673.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44172.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 56599.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26170.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 54062,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 24799.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 20705.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11225.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6558.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18434.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6567.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3760.7,
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
          "id": "18921e85ae1f3c49e9d8240bd7c005f76fae3ede",
          "message": "Merge pull request #52 from Mixser/MGG-XXX-integration-tests\n\nMGG-XXX Add integration tests against a real broker",
          "timestamp": "2026-10-11T21:58:59+03:00",
          "tree_id": "3d3bcf56227a75acfc62905a477ea618a8461640",
          "url": "https://github.com/Mixser/zenmqtt/commit/18921e85ae1f3c49e9d8240bd7c005f76fae3ede"
        },
        "date": 1791745281158,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 187577.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 93005.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 104917.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 56852.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 98880.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 54632.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 76068.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 25568.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 15943.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 47211.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 15838.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9421.5,
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
          "id": "801d765d9223e0ee6e6783e17e3a4c5c7551d679",
          "message": "Merge pull request #53 from Mixser/MGG-XXX-coverage\n\nMGG-XXX Collect coverage of unit and integration tests in CI",
          "timestamp": "2026-10-11T22:11:47+03:00",
          "tree_id": "6b8111e03d6d50f33e437dd1250273ae363dc55d",
          "url": "https://github.com/Mixser/zenmqtt/commit/801d765d9223e0ee6e6783e17e3a4c5c7551d679"
        },
        "date": 1791746077604,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 101905.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 43826.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 55275.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26328.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 52848.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 24308.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21165,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11208.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6498.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17210.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6347.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3641.5,
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
          "id": "1f0921d7dc455b1af205f246a18079936597ce95",
          "message": "Merge pull request #54 from Mixser/MGG-XXX-version-0.1.0rc3\n\nMGG-XXX Set the version 0.1.0rc3",
          "timestamp": "2026-10-11T22:14:52+03:00",
          "tree_id": "2f2f178a99e5abf2e99073cc2b0c119986f42075",
          "url": "https://github.com/Mixser/zenmqtt/commit/1f0921d7dc455b1af205f246a18079936597ce95"
        },
        "date": 1791746254847,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 103872.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44640.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 56511,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 24817.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 54175.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 25898.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21048.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11454.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6729.9,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18255.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6714.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3828.9,
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
          "id": "82cf04b77e6541d9eac25d81dc1b414198a39b9a",
          "message": "Merge pull request #55 from Mixser/MGG-XXX-coverage-pages-workflow\n\nMGG-XXX Publish coverage in a separate workflow",
          "timestamp": "2026-10-11T22:19:16+03:00",
          "tree_id": "785e80dbd13d64c20c3ed9534b3ef63b98cb3f33",
          "url": "https://github.com/Mixser/zenmqtt/commit/82cf04b77e6541d9eac25d81dc1b414198a39b9a"
        },
        "date": 1791746490983,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 197894.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 93846.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 105754.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 56019.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 101972.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 55230.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 72611.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 24601.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 15809.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 46768.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 15799.5,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9439.1,
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
          "id": "510ae0488b225a062e82e2e7f31cd07ba172e107",
          "message": "Merge pull request #56 from Mixser/MGG-XXX-manual-perf-compare\n\nMGG-XXX Make the performance comparison a manual step of CI",
          "timestamp": "2026-10-11T22:30:35+03:00",
          "tree_id": "780b9b2745e659995a6840f53beb75ccc60c1a69",
          "url": "https://github.com/Mixser/zenmqtt/commit/510ae0488b225a062e82e2e7f31cd07ba172e107"
        },
        "date": 1791747201430,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 104167.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 44312.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 56787.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26214.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 51208.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 23718.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 21385.1,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11430.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6904.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 18927.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6663.2,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3836,
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
          "id": "1b442a62c299f5f5d60b35b134eac1e891b1f1c4",
          "message": "Merge pull request #57 from Mixser/MGG-XXX-mqtt5-names\n\nMGG-XXX Use the names of the MQTT 5 specification",
          "timestamp": "2026-10-11T22:44:49+03:00",
          "tree_id": "fb977d5d25f23285524d4407c8b3d35acd64bdf1",
          "url": "https://github.com/Mixser/zenmqtt/commit/1b442a62c299f5f5d60b35b134eac1e891b1f1c4"
        },
        "date": 1791748041457,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 191472.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 93127.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 104391.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 53285,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 96720.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 54388.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 75016.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 24810.5,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 15869.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 44643.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 14898.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9423.7,
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
          "id": "25c9dcc0c6e019010136893cdeda4a6978f09b05",
          "message": "Merge pull request #58 from Mixser/MGG-XXX-client-lifecycle\n\nMGG-XXX Add async with to the client, move credentials to connect()",
          "timestamp": "2026-10-11T22:47:50+03:00",
          "tree_id": "87080561ebce2f2aa5c290d98050c109a15372e5",
          "url": "https://github.com/Mixser/zenmqtt/commit/25c9dcc0c6e019010136893cdeda4a6978f09b05"
        },
        "date": 1791748220962,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 109740.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 50634.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 60023.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 31692.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 54522.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 30718.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 36729.7,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 15345.8,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9526,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17041.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 9220.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 5526.2,
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
          "id": "b1314f61724eade353993bdadcd1fe1038eef6f7",
          "message": "Merge pull request #58 from Mixser/MGG-XXX-client-lifecycle\n\nMGG-XXX Add async with to the client, move credentials to connect()",
          "timestamp": "2026-10-11T22:47:50+03:00",
          "tree_id": "79392d25b75f137d0859a189be07c812fc9edcff",
          "url": "https://github.com/Mixser/zenmqtt/commit/b1314f61724eade353993bdadcd1fe1038eef6f7"
        },
        "date": 1791748426137,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 199078.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 94834.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 106928.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 56521.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 101857,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 55375.4,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 67988.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 23905.6,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 16336.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 47658.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 16186.7,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 9577.7,
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
          "id": "aa7686c9c15577b5967019791e855fb209b6e4a1",
          "message": "Merge pull request #60 from Mixser/MGG-XXX-qos-reason-code-enums\n\nMGG-XXX Add QoS and ReasonCode enums",
          "timestamp": "2026-10-11T22:56:10+03:00",
          "tree_id": "c859e5fcc9faee5e7a20cb438ed310ad24e21315",
          "url": "https://github.com/Mixser/zenmqtt/commit/aa7686c9c15577b5967019791e855fb209b6e4a1"
        },
        "date": 1791748740286,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 104458.1,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 42871.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 55366.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 26348.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 54160.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 28112.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 20789.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11714.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 6703.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 17560.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 6648,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 3846.5,
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
          "id": "1b7ab8fdf0ecc5f5330c13df64bde9a597774f14",
          "message": "Merge pull request #62 from Mixser/MGG-XXX-version-0.1.0rc4\n\nMGG-XXX Set the version 0.1.0rc4",
          "timestamp": "2026-10-11T22:56:38+03:00",
          "tree_id": "e0a2075d1873af9190f304929f46446429c0fc26",
          "url": "https://github.com/Mixser/zenmqtt/commit/1b7ab8fdf0ecc5f5330c13df64bde9a597774f14"
        },
        "date": 1791748907197,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 142685.4,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 67259.8,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 76922.6,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 40480.7,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 73772.5,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 39345.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 46568.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 19334.3,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 12147.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 32686.1,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11812.3,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7035.1,
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
          "id": "5ddc404e27d3cdd820e897853f8613a48378409b",
          "message": "Merge pull request #63 from Mixser/MGG-XXX-rename-processing-to-trace\n\nMGG-XXX Rename client.processing() to client.trace()",
          "timestamp": "2026-10-11T23:42:55+03:00",
          "tree_id": "7254415f32310e6c07b1ea7c82a021fc42cc0734",
          "url": "https://github.com/Mixser/zenmqtt/commit/5ddc404e27d3cdd820e897853f8613a48378409b"
        },
        "date": 1791751530080,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, no metrics",
            "value": 147434.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 0, 64 B, opentelemetry",
            "value": 66251.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, no metrics",
            "value": 78265.9,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 1, 64 B, opentelemetry",
            "value": 40514.3,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, no metrics",
            "value": 76117.2,
            "unit": "msg/s"
          },
          {
            "name": "in-memory receive, zenmqtt, QoS 2, 64 B, opentelemetry",
            "value": 39881.2,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 41006.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 20318.9,
            "unit": "msg/s"
          },
          {
            "name": "publish, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 11730.6,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 0, 64 B, 100 in flight",
            "value": 34495.8,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 1, 64 B, 100 in flight",
            "value": 11668.4,
            "unit": "msg/s"
          },
          {
            "name": "end-to-end, zenmqtt, QoS 2, 64 B, 100 in flight",
            "value": 7119.6,
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
          "id": "f4544aec9bba3e8d00b3b7eae6c0b546592c5c21",
          "message": "Merge pull request #35 from Mixser/MGG-XXX-version-0.1.0rc1\n\nMGG-XXX Set the version 0.1.0rc1",
          "timestamp": "2026-10-11T19:53:49+03:00",
          "tree_id": "2f1365c137ff8d4d2e9eb35503de06e47c4f453a",
          "url": "https://github.com/Mixser/zenmqtt/commit/f4544aec9bba3e8d00b3b7eae6c0b546592c5c21"
        },
        "date": 1791737701554,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 347862.04431588383,
            "unit": "iter/sec",
            "range": "stddev: 6.151386650190359e-7",
            "extra": "mean: 2.8747028206731513 usec\nrounds: 48570"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 335898.2874296766,
            "unit": "iter/sec",
            "range": "stddev: 7.505556047188804e-7",
            "extra": "mean: 2.9770916894280357 usec\nrounds: 76541"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 256282.01637773705,
            "unit": "iter/sec",
            "range": "stddev: 7.914497495439701e-7",
            "extra": "mean: 3.9019515069137283 usec\nrounds: 71701"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 251883.54177635955,
            "unit": "iter/sec",
            "range": "stddev: 8.52839223452911e-7",
            "extra": "mean: 3.9700886883981976 usec\nrounds: 77496"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 149708.71461774438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011015701264957784",
            "extra": "mean: 6.679637872473418 usec\nrounds: 14100"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 173845.46744536987,
            "unit": "iter/sec",
            "range": "stddev: 9.332506711623606e-7",
            "extra": "mean: 5.752235101063222 usec\nrounds: 28022"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 164383.7306797396,
            "unit": "iter/sec",
            "range": "stddev: 9.231166375345395e-7",
            "extra": "mean: 6.083327077837458 usec\nrounds: 59521"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 131879.24358160738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015754652257236056",
            "extra": "mean: 7.5826943864839205 usec\nrounds: 47439"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 127342.24589033007,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015609393717198073",
            "extra": "mean: 7.85285348949493 usec\nrounds: 51771"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 80622.91673398053,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015871726819989944",
            "extra": "mean: 12.403421266679691 usec\nrounds: 27536"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 769723.1870729504,
            "unit": "iter/sec",
            "range": "stddev: 4.3378486150280343e-7",
            "extra": "mean: 1.299168346224219 usec\nrounds: 94074"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 140738.5029122794,
            "unit": "iter/sec",
            "range": "stddev: 0.000001079010482313062",
            "extra": "mean: 7.105376135934087 usec\nrounds: 30808"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 220832.5076774728,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014078771397565509",
            "extra": "mean: 4.528318817356845 usec\nrounds: 45559"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 146243.0170209776,
            "unit": "iter/sec",
            "range": "stddev: 0.000001050051789650175",
            "extra": "mean: 6.837933327487059 usec\nrounds: 46211"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93568.8746119465,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012481403496575653",
            "extra": "mean: 10.687314602716446 usec\nrounds: 25680"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 205309.68715617975,
            "unit": "iter/sec",
            "range": "stddev: 8.956135120608656e-7",
            "extra": "mean: 4.870690778654281 usec\nrounds: 42510"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1422059.3829837705,
            "unit": "iter/sec",
            "range": "stddev: 1.1590190175402017e-7",
            "extra": "mean: 703.2055144573471 nsec\nrounds: 193424"
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
          "id": "c33ba496e712c3d63b01519e117ede58bacbb393",
          "message": "Merge pull request #36 from Mixser/MGG-XXX-publish-to-pypi-only\n\nMGG-XXX Publish pre-releases to PyPI",
          "timestamp": "2026-10-11T19:59:20+03:00",
          "tree_id": "41635ebaeae2ce7324038f03e2c29c5e0f303766",
          "url": "https://github.com/Mixser/zenmqtt/commit/c33ba496e712c3d63b01519e117ede58bacbb393"
        },
        "date": 1791738014312,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 350885.36228356627,
            "unit": "iter/sec",
            "range": "stddev: 6.476860706255693e-7",
            "extra": "mean: 2.8499336463966114 usec\nrounds: 38762"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 336525.13944885944,
            "unit": "iter/sec",
            "range": "stddev: 6.173320202686222e-7",
            "extra": "mean: 2.971546201979857 usec\nrounds: 73341"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 263673.02705202485,
            "unit": "iter/sec",
            "range": "stddev: 8.316406209910405e-7",
            "extra": "mean: 3.792576021826805 usec\nrounds: 70289"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 255142.54530820288,
            "unit": "iter/sec",
            "range": "stddev: 8.416278015823678e-7",
            "extra": "mean: 3.9193776905848314 usec\nrounds: 53009"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 152255.10738506992,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010838719525630143",
            "extra": "mean: 6.567924171311311 usec\nrounds: 28116"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 165477.76121599964,
            "unit": "iter/sec",
            "range": "stddev: 9.932439745796775e-7",
            "extra": "mean: 6.0431081049899555 usec\nrounds: 26280"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 161384.68677166337,
            "unit": "iter/sec",
            "range": "stddev: 0.000001018894246794347",
            "extra": "mean: 6.196374761472006 usec\nrounds: 59734"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 135998.55907189328,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013150007396129426",
            "extra": "mean: 7.353019082146064 usec\nrounds: 48265"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 129235.29586952523,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012486827039384812",
            "extra": "mean: 7.737824200979822 usec\nrounds: 53345"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79086.42148068798,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015785187872414178",
            "extra": "mean: 12.644395602653344 usec\nrounds: 25652"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 777926.3691684236,
            "unit": "iter/sec",
            "range": "stddev: 4.360145402183806e-7",
            "extra": "mean: 1.285468701965927 usec\nrounds: 30561"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 141531.4097568039,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011425347043442416",
            "extra": "mean: 7.065569414720865 usec\nrounds: 28517"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 228778.57327164823,
            "unit": "iter/sec",
            "range": "stddev: 8.005333137303386e-7",
            "extra": "mean: 4.371038710922526 usec\nrounds: 37793"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 144645.36922878714,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014561500267920193",
            "extra": "mean: 6.913460177340965 usec\nrounds: 21985"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93256.46311174799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012870196812367962",
            "extra": "mean: 10.723117375808185 usec\nrounds: 24068"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 199211.46813518988,
            "unit": "iter/sec",
            "range": "stddev: 0.000001440998738541315",
            "extra": "mean: 5.019791327080502 usec\nrounds: 41347"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1375684.9728399771,
            "unit": "iter/sec",
            "range": "stddev: 4.047364619724296e-7",
            "extra": "mean: 726.9106079828657 nsec\nrounds: 195695"
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
          "id": "3962593e42ede0cc7e26351b0e5899a63a47f3ae",
          "message": "Merge pull request #33 from Mixser/MGG-XXX-wait-across-reconnect-in-client\n\nMGG-XXX Move wait_across_reconnect from the protocol to the client",
          "timestamp": "2026-10-11T20:03:26+03:00",
          "tree_id": "7b96a0f229e58f18e1ddcdc45ab8bcf2f21dd4fa",
          "url": "https://github.com/Mixser/zenmqtt/commit/3962593e42ede0cc7e26351b0e5899a63a47f3ae"
        },
        "date": 1791738261607,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 342121.5803551953,
            "unit": "iter/sec",
            "range": "stddev: 9.354439165814892e-7",
            "extra": "mean: 2.9229375094134267 usec\nrounds: 39846"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 336851.59871877066,
            "unit": "iter/sec",
            "range": "stddev: 6.983489427725203e-7",
            "extra": "mean: 2.968666332009533 usec\nrounds: 77676"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 260232.2466356856,
            "unit": "iter/sec",
            "range": "stddev: 8.058661910441362e-7",
            "extra": "mean: 3.8427213111677077 usec\nrounds: 73121"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 250657.5858916856,
            "unit": "iter/sec",
            "range": "stddev: 9.241906901695545e-7",
            "extra": "mean: 3.9895062279588096 usec\nrounds: 77072"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 148698.42885687505,
            "unit": "iter/sec",
            "range": "stddev: 0.000001225910976068616",
            "extra": "mean: 6.725020618493005 usec\nrounds: 27742"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 167025.29943253362,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010559475717814478",
            "extra": "mean: 5.98711694214881 usec\nrounds: 24867"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 158457.79544874516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011583112647909953",
            "extra": "mean: 6.31082867944771 usec\nrounds: 59806"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 132142.6620746519,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012632264455962838",
            "extra": "mean: 7.567578738765426 usec\nrounds: 46686"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 127999.71584722926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012292521248614183",
            "extra": "mean: 7.8125173433472614 usec\nrounds: 51057"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79685.78785835239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014587427951494058",
            "extra": "mean: 12.549289238095719 usec\nrounds: 26027"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 789993.2537223734,
            "unit": "iter/sec",
            "range": "stddev: 4.0319995402025277e-7",
            "extra": "mean: 1.265833594512478 usec\nrounds: 81680"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 140803.7503093321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011339878648723805",
            "extra": "mean: 7.10208355816587 usec\nrounds: 28543"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 225661.12937371116,
            "unit": "iter/sec",
            "range": "stddev: 8.340304819099028e-7",
            "extra": "mean: 4.431423359332425 usec\nrounds: 37852"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 145569.3413545282,
            "unit": "iter/sec",
            "range": "stddev: 0.000001046303705507502",
            "extra": "mean: 6.869578378901507 usec\nrounds: 47870"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 92153.30518819152,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013827470420025981",
            "extra": "mean: 10.851482732581788 usec\nrounds: 25250"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 207748.65574676896,
            "unit": "iter/sec",
            "range": "stddev: 9.323238816469323e-7",
            "extra": "mean: 4.813508883633547 usec\nrounds: 41143"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1418210.7187964784,
            "unit": "iter/sec",
            "range": "stddev: 1.2574037523602673e-7",
            "extra": "mean: 705.1138358682128 nsec\nrounds: 199243"
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
          "id": "1411fdb76cbaff99404974874af24ab2806da921",
          "message": "Merge pull request #37 from Mixser/MGG-XXX-readme-pypi\n\nMGG-XXX Update README for PyPI",
          "timestamp": "2026-10-11T20:29:21+03:00",
          "tree_id": "ff7867dedc2f4e1a4677a1056f21399e780909bf",
          "url": "https://github.com/Mixser/zenmqtt/commit/1411fdb76cbaff99404974874af24ab2806da921"
        },
        "date": 1791739843397,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 341665.4791967401,
            "unit": "iter/sec",
            "range": "stddev: 6.649815564384223e-7",
            "extra": "mean: 2.9268394405867775 usec\nrounds: 33894"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 332105.8174165928,
            "unit": "iter/sec",
            "range": "stddev: 6.359126651744664e-7",
            "extra": "mean: 3.011088477097052 usec\nrounds: 73341"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 256779.21484464902,
            "unit": "iter/sec",
            "range": "stddev: 7.753269622802511e-7",
            "extra": "mean: 3.894396205724822 usec\nrounds: 69315"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 252599.88431083885,
            "unit": "iter/sec",
            "range": "stddev: 7.916126787196979e-7",
            "extra": "mean: 3.958829999975145 usec\nrounds: 74600"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 149057.4986694126,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011399202827953391",
            "extra": "mean: 6.708820481536802 usec\nrounds: 28699"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 170965.00068322706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010049355491651682",
            "extra": "mean: 5.849150387527869 usec\nrounds: 23486"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 163773.5272694679,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011754017389916562",
            "extra": "mean: 6.105992932268174 usec\nrounds: 60274"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 140212.82012455203,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012294128764885501",
            "extra": "mean: 7.132015454162415 usec\nrounds: 41348"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130372.08208010459,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010975691232124617",
            "extra": "mean: 7.670353836840387 usec\nrounds: 48268"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79606.72220032169,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014836021747421575",
            "extra": "mean: 12.561753233396653 usec\nrounds: 25283"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 770962.4282710777,
            "unit": "iter/sec",
            "range": "stddev: 3.944267919186427e-7",
            "extra": "mean: 1.297080069443268 usec\nrounds: 74935"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 140777.40170375007,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011023577613372447",
            "extra": "mean: 7.103412819796074 usec\nrounds: 29548"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 225751.60601871923,
            "unit": "iter/sec",
            "range": "stddev: 8.468100283090321e-7",
            "extra": "mean: 4.429647335120532 usec\nrounds: 37469"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 143675.6477117975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018106443206393633",
            "extra": "mean: 6.960121745933762 usec\nrounds: 44560"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93777.84333749986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014835196035495106",
            "extra": "mean: 10.663499654188787 usec\nrounds: 23132"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 203832.45208929438,
            "unit": "iter/sec",
            "range": "stddev: 8.289813390159673e-7",
            "extra": "mean: 4.905990139204736 usec\nrounds: 38435"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1392607.7919167276,
            "unit": "iter/sec",
            "range": "stddev: 1.1506298404427745e-7",
            "extra": "mean: 718.0772689944822 nsec\nrounds: 193051"
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
          "id": "86cef29cd99647f19250e6cad17fa2f9dfeb3eb7",
          "message": "Merge pull request #38 from Mixser/MGG-XXX-ack-auth-qos2-fixes\n\nMGG-XXX Warn about blocked acks, close on AUTH, don't deliver duplicates before ack",
          "timestamp": "2026-10-11T20:29:46+03:00",
          "tree_id": "c43e340d393ff43f2ec19295c6cc405a35e5bf07",
          "url": "https://github.com/Mixser/zenmqtt/commit/86cef29cd99647f19250e6cad17fa2f9dfeb3eb7"
        },
        "date": 1791740005029,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 346665.8956761346,
            "unit": "iter/sec",
            "range": "stddev: 6.37716333388892e-7",
            "extra": "mean: 2.8846218000464314 usec\nrounds: 31211"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 338418.1809817835,
            "unit": "iter/sec",
            "range": "stddev: 6.04696151900506e-7",
            "extra": "mean: 2.9549239851680085 usec\nrounds: 72328"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 260221.45802642568,
            "unit": "iter/sec",
            "range": "stddev: 8.234078761892925e-7",
            "extra": "mean: 3.842880627847567 usec\nrounds: 72119"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 253894.84739747748,
            "unit": "iter/sec",
            "range": "stddev: 8.255358557077906e-7",
            "extra": "mean: 3.9386384176378333 usec\nrounds: 75330"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 149551.22296205274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011328907137939785",
            "extra": "mean: 6.686672166189781 usec\nrounds: 29033"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 170473.8543336043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010004464941143696",
            "extra": "mean: 5.866002173231072 usec\nrounds: 28069"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 162715.3212868382,
            "unit": "iter/sec",
            "range": "stddev: 9.495710030177065e-7",
            "extra": "mean: 6.1457027653663765 usec\nrounds: 43972"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 134246.33648088574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012806359323433702",
            "extra": "mean: 7.448992845643739 usec\nrounds: 47104"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 128816.0144730187,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012239796757318643",
            "extra": "mean: 7.763009933904266 usec\nrounds: 50232"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 78364.63948170724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017013361564758491",
            "extra": "mean: 12.760857532349538 usec\nrounds: 26041"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 777464.4333144617,
            "unit": "iter/sec",
            "range": "stddev: 4.1887038197326865e-7",
            "extra": "mean: 1.2862324720589875 usec\nrounds: 74267"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 140323.33278671379,
            "unit": "iter/sec",
            "range": "stddev: 0.000001216238442831888",
            "extra": "mean: 7.126398583476938 usec\nrounds: 30074"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 225663.50664823805,
            "unit": "iter/sec",
            "range": "stddev: 9.661849601610623e-7",
            "extra": "mean: 4.431376676064818 usec\nrounds: 34754"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 145746.80292677516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011170645895357478",
            "extra": "mean: 6.861213967776785 usec\nrounds: 41782"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93659.76776967452,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014791910204078705",
            "extra": "mean: 10.676942980033562 usec\nrounds: 21624"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 202140.1978479833,
            "unit": "iter/sec",
            "range": "stddev: 8.745876684539613e-7",
            "extra": "mean: 4.947061547609822 usec\nrounds: 37272"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1410559.457629648,
            "unit": "iter/sec",
            "range": "stddev: 1.1764011175049446e-7",
            "extra": "mean: 708.93856660281 nsec\nrounds: 176026"
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
          "id": "89f441ef64ca9daad96c7c60e5fbc86771806347",
          "message": "MGG-XXX Moved instrumentation to the zenmqtt.instrumentation package: MetricsCollector, the OpenTelemetry adapter and the monitors; Moved the warning about a blocked ack from IncomingFlow to AckBlockedMonitor; The protocol only calls metrics hooks; (#40)",
          "timestamp": "2026-10-11T20:45:37+03:00",
          "tree_id": "544502dc1d01bace68568232aad49bedaca2f672",
          "url": "https://github.com/Mixser/zenmqtt/commit/89f441ef64ca9daad96c7c60e5fbc86771806347"
        },
        "date": 1791740796322,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 344871.082744379,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010633085833793077",
            "extra": "mean: 2.8996342402566917 usec\nrounds: 34550"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 339930.90746197326,
            "unit": "iter/sec",
            "range": "stddev: 7.458326907479693e-7",
            "extra": "mean: 2.941774278385869 usec\nrounds: 68456"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 261404.42801562662,
            "unit": "iter/sec",
            "range": "stddev: 8.619683188379695e-7",
            "extra": "mean: 3.825489903102256 usec\nrounds: 63980"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 257371.27438903996,
            "unit": "iter/sec",
            "range": "stddev: 8.828346298126946e-7",
            "extra": "mean: 3.885437496371136 usec\nrounds: 68508"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 151111.0403353037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012067360515617919",
            "extra": "mean: 6.617650158327792 usec\nrounds: 17062"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 172500.63674234477,
            "unit": "iter/sec",
            "range": "stddev: 0.000001005052845595302",
            "extra": "mean: 5.797080050745831 usec\nrounds: 25946"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 163979.31759916747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012130160022209713",
            "extra": "mean: 6.098330049429825 usec\nrounds: 54304"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 132143.17253616615,
            "unit": "iter/sec",
            "range": "stddev: 0.000001546162212482344",
            "extra": "mean: 7.567549505641775 usec\nrounds: 45914"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 125008.64079920013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014134297618493468",
            "extra": "mean: 7.999447027076217 usec\nrounds: 48572"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79919.23534768599,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016107166551541562",
            "extra": "mean: 12.512632229894757 usec\nrounds: 25554"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 782329.427924788,
            "unit": "iter/sec",
            "range": "stddev: 5.427076365864012e-7",
            "extra": "mean: 1.2782339054439078 usec\nrounds: 74047"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 139696.05618189755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012461389608496148",
            "extra": "mean: 7.15839822061909 usec\nrounds: 28999"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 222312.4894896375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010184242541399815",
            "extra": "mean: 4.49817283003622 usec\nrounds: 35370"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 142899.1968505964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011995101199912586",
            "extra": "mean: 6.997939960750916 usec\nrounds: 44421"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93493.6267746107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014865383818432248",
            "extra": "mean: 10.695916229784785 usec\nrounds: 24221"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 198931.83449295865,
            "unit": "iter/sec",
            "range": "stddev: 0.000019980730145676645",
            "extra": "mean: 5.026847525680441 usec\nrounds: 36616"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1410564.569559045,
            "unit": "iter/sec",
            "range": "stddev: 1.2221805171496793e-7",
            "extra": "mean: 708.9359973876338 nsec\nrounds: 196117"
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
          "id": "6fe668a7561183bd62d2f35df4bdc3e5e437464e",
          "message": "Merge pull request #43 from Mixser/MGG-XXX-context-ownership\n\nMGG-XXX Make the state of ProtocolContext read-only for the parts",
          "timestamp": "2026-10-11T20:56:59+03:00",
          "tree_id": "f2a884ba9d705f98c1090502a7770b95fa144dcc",
          "url": "https://github.com/Mixser/zenmqtt/commit/6fe668a7561183bd62d2f35df4bdc3e5e437464e"
        },
        "date": 1791741470201,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 471666.56016635196,
            "unit": "iter/sec",
            "range": "stddev: 5.597199525493806e-7",
            "extra": "mean: 2.120141821475133 usec\nrounds: 51311"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 457826.24696988286,
            "unit": "iter/sec",
            "range": "stddev: 3.7870347285761537e-7",
            "extra": "mean: 2.1842347541638056 usec\nrounds: 80399"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 333759.1816993034,
            "unit": "iter/sec",
            "range": "stddev: 5.107595290919881e-7",
            "extra": "mean: 2.9961722548233554 usec\nrounds: 81780"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 327741.9436604397,
            "unit": "iter/sec",
            "range": "stddev: 5.027222887018676e-7",
            "extra": "mean: 3.0511810262407546 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 203243.80521647955,
            "unit": "iter/sec",
            "range": "stddev: 6.230984353794374e-7",
            "extra": "mean: 4.920199161469535 usec\nrounds: 27907"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 222027.84805251527,
            "unit": "iter/sec",
            "range": "stddev: 5.974141384832078e-7",
            "extra": "mean: 4.503939522773172 usec\nrounds: 27283"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 212809.36679761705,
            "unit": "iter/sec",
            "range": "stddev: 5.907407894045266e-7",
            "extra": "mean: 4.699041283041859 usec\nrounds: 73856"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 173643.1500794536,
            "unit": "iter/sec",
            "range": "stddev: 7.180241869436652e-7",
            "extra": "mean: 5.758937220054069 usec\nrounds: 56929"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 165324.68317660913,
            "unit": "iter/sec",
            "range": "stddev: 7.910461526151759e-7",
            "extra": "mean: 6.048703561897915 usec\nrounds: 61905"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 105610.54686536908,
            "unit": "iter/sec",
            "range": "stddev: 8.51498710056468e-7",
            "extra": "mean: 9.468751272302251 usec\nrounds: 31243"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1063012.9506570825,
            "unit": "iter/sec",
            "range": "stddev: 3.1153861400124106e-7",
            "extra": "mean: 940.7223114091582 nsec\nrounds: 79121"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 183723.44206490123,
            "unit": "iter/sec",
            "range": "stddev: 6.594294291371e-7",
            "extra": "mean: 5.442963558492145 usec\nrounds: 30350"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 299130.52399128827,
            "unit": "iter/sec",
            "range": "stddev: 5.198510807579817e-7",
            "extra": "mean: 3.3430222588354894 usec\nrounds: 35222"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 193043.93387376828,
            "unit": "iter/sec",
            "range": "stddev: 6.637244083478222e-7",
            "extra": "mean: 5.180167954171 usec\nrounds: 49579"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 128123.61269081569,
            "unit": "iter/sec",
            "range": "stddev: 8.232838116643412e-7",
            "extra": "mean: 7.8049625591901775 usec\nrounds: 18162"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 266067.10936681717,
            "unit": "iter/sec",
            "range": "stddev: 5.15438739115283e-7",
            "extra": "mean: 3.758450273616255 usec\nrounds: 27410"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1769932.705414001,
            "unit": "iter/sec",
            "range": "stddev: 4.932600040984776e-8",
            "extra": "mean: 564.9932321952841 nsec\nrounds: 83417"
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
          "id": "8c0a3b2a7b4220e61be82df854d2d9890f4ef032",
          "message": "Merge pull request #45 from Mixser/MGG-XXX-version-0.1.0rc2\n\nMGG-XXX Set the version 0.1.0rc2",
          "timestamp": "2026-10-11T20:58:34+03:00",
          "tree_id": "0c73cbfbc1c6336d8106f380b8c34c537745cb08",
          "url": "https://github.com/Mixser/zenmqtt/commit/8c0a3b2a7b4220e61be82df854d2d9890f4ef032"
        },
        "date": 1791741617634,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 342855.6428797945,
            "unit": "iter/sec",
            "range": "stddev: 5.765528340621469e-7",
            "extra": "mean: 2.916679426946462 usec\nrounds: 39158"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 331023.70741751604,
            "unit": "iter/sec",
            "range": "stddev: 6.766557606071425e-7",
            "extra": "mean: 3.0209316661984955 usec\nrounds: 70141"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 256764.45773274827,
            "unit": "iter/sec",
            "range": "stddev: 7.82976086044166e-7",
            "extra": "mean: 3.8946200296960263 usec\nrounds: 66721"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 251503.8487086741,
            "unit": "iter/sec",
            "range": "stddev: 8.453420261141237e-7",
            "extra": "mean: 3.9760822950997294 usec\nrounds: 75047"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 151552.95076529577,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010312716960267042",
            "extra": "mean: 6.598353875330752 usec\nrounds: 27391"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 171626.38171593813,
            "unit": "iter/sec",
            "range": "stddev: 9.292991495875326e-7",
            "extra": "mean: 5.8266100467882485 usec\nrounds: 28188"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 165349.78410063114,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010904775736387266",
            "extra": "mean: 6.047785338451996 usec\nrounds: 61767"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 135923.9744499473,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012159369807036129",
            "extra": "mean: 7.35705385342628 usec\nrounds: 48502"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130102.55221323858,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012271942925269793",
            "extra": "mean: 7.686244297198691 usec\nrounds: 51159"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 81070.72021260897,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015883592657137386",
            "extra": "mean: 12.334909537962504 usec\nrounds: 26232"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 774117.6821809914,
            "unit": "iter/sec",
            "range": "stddev: 4.731549216562589e-7",
            "extra": "mean: 1.2917932544604975 usec\nrounds: 74212"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 142429.76102464768,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011588722093680224",
            "extra": "mean: 7.021004548529351 usec\nrounds: 30779"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 225850.7603296153,
            "unit": "iter/sec",
            "range": "stddev: 9.023564967969592e-7",
            "extra": "mean: 4.427702605652341 usec\nrounds: 37879"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 144739.94193752244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012143260288868714",
            "extra": "mean: 6.908942940101868 usec\nrounds: 42026"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93700.29992192077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014065711845734333",
            "extra": "mean: 10.672324430479806 usec\nrounds: 23925"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 204193.59974957505,
            "unit": "iter/sec",
            "range": "stddev: 8.034300827074208e-7",
            "extra": "mean: 4.897313144126013 usec\nrounds: 29884"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1411809.1276096401,
            "unit": "iter/sec",
            "range": "stddev: 1.2363884989709545e-7",
            "extra": "mean: 708.3110460499136 nsec\nrounds: 196890"
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
          "id": "7bf788372ea7302086bb0486faac34546854b714",
          "message": "Merge pull request #46 from Mixser/MGG-XXX-architecture-doc\n\nMGG-XXX Add the architecture document",
          "timestamp": "2026-10-11T21:13:09+03:00",
          "tree_id": "9b1a0232b4489eb10b00c549ab460e29e7f1114b",
          "url": "https://github.com/Mixser/zenmqtt/commit/7bf788372ea7302086bb0486faac34546854b714"
        },
        "date": 1791742445822,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 344623.8127490834,
            "unit": "iter/sec",
            "range": "stddev: 6.091129936613151e-7",
            "extra": "mean: 2.901714748098642 usec\nrounds: 42948"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 333148.48234842473,
            "unit": "iter/sec",
            "range": "stddev: 6.754994873934452e-7",
            "extra": "mean: 3.0016645819630234 usec\nrounds: 76430"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 258042.60663402482,
            "unit": "iter/sec",
            "range": "stddev: 7.896673515879699e-7",
            "extra": "mean: 3.8753290126939164 usec\nrounds: 68508"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 252708.10750229252,
            "unit": "iter/sec",
            "range": "stddev: 8.310591962180931e-7",
            "extra": "mean: 3.9571346162327945 usec\nrounds: 69999"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 149578.78830782993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010817064356363887",
            "extra": "mean: 6.685439903029709 usec\nrounds: 28038"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 172435.6684153022,
            "unit": "iter/sec",
            "range": "stddev: 0.000001034706124887845",
            "extra": "mean: 5.7992642078641925 usec\nrounds: 27819"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 164000.05146018558,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010227186855805205",
            "extra": "mean: 6.097559062307798 usec\nrounds: 61088"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 135038.11339619756,
            "unit": "iter/sec",
            "range": "stddev: 0.000001181056432416261",
            "extra": "mean: 7.405316727626605 usec\nrounds: 47574"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130705.27816295154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012141359139007396",
            "extra": "mean: 7.650800442452601 usec\nrounds: 51083"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 81078.17422071971,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016564190710367824",
            "extra": "mean: 12.333775514945522 usec\nrounds: 26122"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 779732.8827799115,
            "unit": "iter/sec",
            "range": "stddev: 4.2844107524193535e-7",
            "extra": "mean: 1.2824904811437348 usec\nrounds: 72908"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 141342.1336458188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011062194136489466",
            "extra": "mean: 7.075031161662262 usec\nrounds: 29716"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 225366.2429254548,
            "unit": "iter/sec",
            "range": "stddev: 8.610663790106033e-7",
            "extra": "mean: 4.437221772964346 usec\nrounds: 38332"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 147030.3175492507,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011221451173337548",
            "extra": "mean: 6.801318372076767 usec\nrounds: 43490"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93485.00652324408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013312085869905318",
            "extra": "mean: 10.69690250009621 usec\nrounds: 23959"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 204599.7951840248,
            "unit": "iter/sec",
            "range": "stddev: 8.246127517149108e-7",
            "extra": "mean: 4.887590425496575 usec\nrounds: 28764"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1443660.0575157322,
            "unit": "iter/sec",
            "range": "stddev: 1.0856633436648812e-7",
            "extra": "mean: 692.6838453373934 nsec\nrounds: 172981"
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
          "id": "2cf2f7d00a99cb3a155a33a7bd698544d0bfc077",
          "message": "Merge pull request #47 from Mixser/MGG-XXX-session-module\n\nMGG-XXX Move the session to zenmqtt.session",
          "timestamp": "2026-10-11T21:18:15+03:00",
          "tree_id": "fddfeaf21e91106914a95c0087cb7bbf20e6de1f",
          "url": "https://github.com/Mixser/zenmqtt/commit/2cf2f7d00a99cb3a155a33a7bd698544d0bfc077"
        },
        "date": 1791742741166,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 629830.2877992577,
            "unit": "iter/sec",
            "range": "stddev: 2.6877877275429003e-7",
            "extra": "mean: 1.5877292968780259 usec\nrounds: 55197"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 605277.9030474772,
            "unit": "iter/sec",
            "range": "stddev: 6.051319123517897e-7",
            "extra": "mean: 1.6521336644955322 usec\nrounds: 100251"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 494417.7097943558,
            "unit": "iter/sec",
            "range": "stddev: 5.171592888800358e-7",
            "extra": "mean: 2.0225812712411373 usec\nrounds: 103253"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 477883.1801293471,
            "unit": "iter/sec",
            "range": "stddev: 3.996402100888225e-7",
            "extra": "mean: 2.092561616689111 usec\nrounds: 112575"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 276239.27270330343,
            "unit": "iter/sec",
            "range": "stddev: 4.149448212976761e-7",
            "extra": "mean: 3.620050075479515 usec\nrounds: 32451"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 311620.3735747156,
            "unit": "iter/sec",
            "range": "stddev: 3.7277032917120653e-7",
            "extra": "mean: 3.2090328001620065 usec\nrounds: 28384"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 300429.9598663166,
            "unit": "iter/sec",
            "range": "stddev: 4.4989241056896783e-7",
            "extra": "mean: 3.3285628385563597 usec\nrounds: 65907"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 259527.19504840416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011831742559653824",
            "extra": "mean: 3.8531607441504963 usec\nrounds: 68158"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 248220.32649606967,
            "unit": "iter/sec",
            "range": "stddev: 5.375447375970188e-7",
            "extra": "mean: 4.028678932608825 usec\nrounds: 78809"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 132277.93263974492,
            "unit": "iter/sec",
            "range": "stddev: 0.000008200561912710543",
            "extra": "mean: 7.559839952469402 usec\nrounds: 33665"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1433563.1990715617,
            "unit": "iter/sec",
            "range": "stddev: 1.8180584478600422e-7",
            "extra": "mean: 697.5625494904192 nsec\nrounds: 79561"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 259561.7274938325,
            "unit": "iter/sec",
            "range": "stddev: 4.3153232810567586e-7",
            "extra": "mean: 3.852648114401848 usec\nrounds: 31820"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 407971.48716194625,
            "unit": "iter/sec",
            "range": "stddev: 4.358261486616705e-7",
            "extra": "mean: 2.4511516894391328 usec\nrounds: 36166"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 260511.16417742832,
            "unit": "iter/sec",
            "range": "stddev: 5.075237200094872e-7",
            "extra": "mean: 3.8386070829537364 usec\nrounds: 50685"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 177625.8746748526,
            "unit": "iter/sec",
            "range": "stddev: 5.549593614870139e-7",
            "extra": "mean: 5.6298104194026815 usec\nrounds: 26585"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 363616.77657511417,
            "unit": "iter/sec",
            "range": "stddev: 3.8752555018180824e-7",
            "extra": "mean: 2.750148135129912 usec\nrounds: 31262"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2573503.900642582,
            "unit": "iter/sec",
            "range": "stddev: 2.1081012568857394e-7",
            "extra": "mean: 388.5752804766717 nsec\nrounds: 129333"
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
          "id": "4bfbfd290a302f182e0c42a0c3f993297f818037",
          "message": "Merge pull request #48 from Mixser/MGG-XXX-graceful-shutdown\n\nMGG-XXX Add graceful shutdown: disconnect(timeout=...)",
          "timestamp": "2026-10-11T21:36:42+03:00",
          "tree_id": "197098a590fd4821a97ec439ec5277e90d54c323",
          "url": "https://github.com/Mixser/zenmqtt/commit/4bfbfd290a302f182e0c42a0c3f993297f818037"
        },
        "date": 1791743852824,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 473022.864163687,
            "unit": "iter/sec",
            "range": "stddev: 3.886645351846236e-7",
            "extra": "mean: 2.11406271400436 usec\nrounds: 41761"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 460140.49268003285,
            "unit": "iter/sec",
            "range": "stddev: 3.9153590677465445e-7",
            "extra": "mean: 2.1732492921360183 usec\nrounds: 83348"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 345072.38668376603,
            "unit": "iter/sec",
            "range": "stddev: 6.421686295062613e-7",
            "extra": "mean: 2.8979426885189397 usec\nrounds: 72359"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 337288.9247090732,
            "unit": "iter/sec",
            "range": "stddev: 7.967133240470393e-7",
            "extra": "mean: 2.964817184147226 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 204391.11026724149,
            "unit": "iter/sec",
            "range": "stddev: 6.043337624803129e-7",
            "extra": "mean: 4.892580693419099 usec\nrounds: 29420"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 222533.00842254757,
            "unit": "iter/sec",
            "range": "stddev: 5.200531281685803e-7",
            "extra": "mean: 4.493715368738428 usec\nrounds: 28096"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 210839.2645429594,
            "unit": "iter/sec",
            "range": "stddev: 6.133253204344707e-7",
            "extra": "mean: 4.7429495742537355 usec\nrounds: 78809"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 171488.64051731335,
            "unit": "iter/sec",
            "range": "stddev: 7.575568307319845e-7",
            "extra": "mean: 5.831290031709364 usec\nrounds: 54894"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 164174.1593662649,
            "unit": "iter/sec",
            "range": "stddev: 9.06439168292368e-7",
            "extra": "mean: 6.0910925559792055 usec\nrounds: 54702"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 104230.17150608853,
            "unit": "iter/sec",
            "range": "stddev: 9.564882663689628e-7",
            "extra": "mean: 9.594150959845496 usec\nrounds: 30889"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1088510.220934626,
            "unit": "iter/sec",
            "range": "stddev: 2.5983985494303977e-7",
            "extra": "mean: 918.6868260560487 nsec\nrounds: 78921"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 184905.65746149747,
            "unit": "iter/sec",
            "range": "stddev: 6.30212214120901e-7",
            "extra": "mean: 5.408163350589897 usec\nrounds: 32770"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 301384.36688778416,
            "unit": "iter/sec",
            "range": "stddev: 5.535931522959371e-7",
            "extra": "mean: 3.318022133418535 usec\nrounds: 36777"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 189395.58768854444,
            "unit": "iter/sec",
            "range": "stddev: 6.645255803802153e-7",
            "extra": "mean: 5.279954048583598 usec\nrounds: 46745"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 128848.00458917893,
            "unit": "iter/sec",
            "range": "stddev: 8.341806584273537e-7",
            "extra": "mean: 7.761082549849461 usec\nrounds: 26166"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 264703.8006852238,
            "unit": "iter/sec",
            "range": "stddev: 5.730977015460253e-7",
            "extra": "mean: 3.777807486750687 usec\nrounds: 39670"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1739990.6853926294,
            "unit": "iter/sec",
            "range": "stddev: 7.125076678461418e-8",
            "extra": "mean: 574.7157202593586 nsec\nrounds: 146607"
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
          "id": "94feeebdeee7b076820c218f31bfa54aae5aa88a",
          "message": "Merge pull request #49 from Mixser/MGG-XXX-guard-metrics-hooks\n\nMGG-XXX Guard metrics hooks",
          "timestamp": "2026-10-11T21:36:51+03:00",
          "tree_id": "d8296d1ccafe03f6b8d154da066bfb3958fc1382",
          "url": "https://github.com/Mixser/zenmqtt/commit/94feeebdeee7b076820c218f31bfa54aae5aa88a"
        },
        "date": 1791744008158,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 355445.01740959304,
            "unit": "iter/sec",
            "range": "stddev: 6.663063242035572e-7",
            "extra": "mean: 2.813374645923539 usec\nrounds: 51905"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 338224.85773027333,
            "unit": "iter/sec",
            "range": "stddev: 6.277525982735864e-7",
            "extra": "mean: 2.956612966624344 usec\nrounds: 82427"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 263482.9586063472,
            "unit": "iter/sec",
            "range": "stddev: 8.653839742182159e-7",
            "extra": "mean: 3.795311868704325 usec\nrounds: 77616"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 255794.78978961846,
            "unit": "iter/sec",
            "range": "stddev: 7.870765769647528e-7",
            "extra": "mean: 3.9093837713522706 usec\nrounds: 29984"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 151418.85449142073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010960424582174186",
            "extra": "mean: 6.604197366033166 usec\nrounds: 22476"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 170024.51448904112,
            "unit": "iter/sec",
            "range": "stddev: 9.63982621156088e-7",
            "extra": "mean: 5.881504811263288 usec\nrounds: 27020"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 164483.03051075622,
            "unit": "iter/sec",
            "range": "stddev: 9.600061998167971e-7",
            "extra": "mean: 6.079654520559225 usec\nrounds: 61309"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 135088.23412347303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012659754621141813",
            "extra": "mean: 7.402569191081307 usec\nrounds: 49609"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 129201.58746304031,
            "unit": "iter/sec",
            "range": "stddev: 0.000001242171240693732",
            "extra": "mean: 7.739842982084583 usec\nrounds: 52701"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 80713.77657616869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016380919897615422",
            "extra": "mean: 12.389458682512657 usec\nrounds: 27688"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 776878.7453748428,
            "unit": "iter/sec",
            "range": "stddev: 4.3450798918390885e-7",
            "extra": "mean: 1.2872021611525768 usec\nrounds: 110036"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 139068.78694242772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021491611586912374",
            "extra": "mean: 7.190686148819176 usec\nrounds: 22619"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 229320.79913290494,
            "unit": "iter/sec",
            "range": "stddev: 9.176056919174914e-7",
            "extra": "mean: 4.360703450280761 usec\nrounds: 38287"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 145667.19648151012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017095198814298153",
            "extra": "mean: 6.8649635892933 usec\nrounds: 55176"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93556.21970737868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013242759425235195",
            "extra": "mean: 10.688760224897491 usec\nrounds: 16895"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 205813.87267509842,
            "unit": "iter/sec",
            "range": "stddev: 8.822077812901048e-7",
            "extra": "mean: 4.8587589699486315 usec\nrounds: 50056"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1416943.3525964178,
            "unit": "iter/sec",
            "range": "stddev: 1.0997992352723384e-7",
            "extra": "mean: 705.7445155923788 nsec\nrounds: 198413"
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
          "id": "2be6ae47ed78333ae02a5ef9918019b31365903a",
          "message": "Merge pull request #50 from Mixser/MGG-XXX-opentelemetry-tracing\n\nMGG-XXX Add optional OpenTelemetry tracing",
          "timestamp": "2026-10-11T21:45:21+03:00",
          "tree_id": "b36b7c821fa2a54641d5387b1d347ddf87c61037",
          "url": "https://github.com/Mixser/zenmqtt/commit/2be6ae47ed78333ae02a5ef9918019b31365903a"
        },
        "date": 1791744380730,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 345106.8908737031,
            "unit": "iter/sec",
            "range": "stddev: 7.608346036233955e-7",
            "extra": "mean: 2.8976529488249616 usec\nrounds: 39389"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 331116.24993923394,
            "unit": "iter/sec",
            "range": "stddev: 8.444435590639752e-7",
            "extra": "mean: 3.020087356581016 usec\nrounds: 65536"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 251648.40861378954,
            "unit": "iter/sec",
            "range": "stddev: 8.515459675015246e-7",
            "extra": "mean: 3.9737982270920003 usec\nrounds: 65881"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 251193.8530447671,
            "unit": "iter/sec",
            "range": "stddev: 8.673736910608025e-7",
            "extra": "mean: 3.9809891359952294 usec\nrounds: 66366"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 150890.2590025736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011806519011094662",
            "extra": "mean: 6.627333047277384 usec\nrounds: 15151"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 171965.1577414785,
            "unit": "iter/sec",
            "range": "stddev: 9.670311503965894e-7",
            "extra": "mean: 5.815131466941324 usec\nrounds: 27718"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 163922.8533364093,
            "unit": "iter/sec",
            "range": "stddev: 9.94595447908727e-7",
            "extra": "mean: 6.100430657754343 usec\nrounds: 59913"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 134633.74177368623,
            "unit": "iter/sec",
            "range": "stddev: 0.000001832841777163806",
            "extra": "mean: 7.427558551265393 usec\nrounds: 46993"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 131084.6936461905,
            "unit": "iter/sec",
            "range": "stddev: 0.000002635617537416206",
            "extra": "mean: 7.628655735345355 usec\nrounds: 48881"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79560.38413077673,
            "unit": "iter/sec",
            "range": "stddev: 0.000002153004087580448",
            "extra": "mean: 12.569069530336332 usec\nrounds: 25212"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 778637.9020507163,
            "unit": "iter/sec",
            "range": "stddev: 4.912251634175023e-7",
            "extra": "mean: 1.2842940182673839 usec\nrounds: 73992"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 143529.1409785255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011996037684989732",
            "extra": "mean: 6.96722625929753 usec\nrounds: 30770"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 223934.1792716227,
            "unit": "iter/sec",
            "range": "stddev: 9.779274768383353e-7",
            "extra": "mean: 4.465597896902742 usec\nrounds: 38990"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 146444.748416582,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011131075013570968",
            "extra": "mean: 6.8285138990123695 usec\nrounds: 43816"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 92810.1847290254,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013276042793824643",
            "extra": "mean: 10.774679556124843 usec\nrounds: 23068"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 208004.21687922208,
            "unit": "iter/sec",
            "range": "stddev: 8.795652419628037e-7",
            "extra": "mean: 4.807594841121185 usec\nrounds: 29929"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1422605.2798811109,
            "unit": "iter/sec",
            "range": "stddev: 1.2101455849270092e-7",
            "extra": "mean: 702.9356731219017 nsec\nrounds: 197629"
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
          "id": "fa2c12836c25457d0d31e6e11174751a93c05b16",
          "message": "Merge pull request #51 from Mixser/MGG-XXX-close-broken-connection\n\nMGG-XXX Don't stop reconnecting when closing a broken connection fails",
          "timestamp": "2026-10-11T21:53:31+03:00",
          "tree_id": "35c53d8cf269a5ee7da448bd44a22034734206f0",
          "url": "https://github.com/Mixser/zenmqtt/commit/fa2c12836c25457d0d31e6e11174751a93c05b16"
        },
        "date": 1791744865905,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 337767.49093148345,
            "unit": "iter/sec",
            "range": "stddev: 6.183332340923422e-7",
            "extra": "mean: 2.9606164798223618 usec\nrounds: 52258"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 327291.8093828299,
            "unit": "iter/sec",
            "range": "stddev: 6.366387085237428e-7",
            "extra": "mean: 3.0553774073530517 usec\nrounds: 84948"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 249361.46063614447,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013595419117332715",
            "extra": "mean: 4.010242791524024 usec\nrounds: 71444"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 248196.46372493994,
            "unit": "iter/sec",
            "range": "stddev: 8.31060449856947e-7",
            "extra": "mean: 4.029066268680747 usec\nrounds: 74711"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 151561.6285664102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010435257039275004",
            "extra": "mean: 6.597976080481526 usec\nrounds: 26631"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 174903.90037977792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010088169714823442",
            "extra": "mean: 5.717425385189514 usec\nrounds: 29143"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 165506.66030686768,
            "unit": "iter/sec",
            "range": "stddev: 9.468390628004417e-7",
            "extra": "mean: 6.042052918872807 usec\nrounds: 60640"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 133179.84980555615,
            "unit": "iter/sec",
            "range": "stddev: 0.00000120822499125058",
            "extra": "mean: 7.508643398081689 usec\nrounds: 49781"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 126874.89494334612,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014512516367214468",
            "extra": "mean: 7.881779925386605 usec\nrounds: 51478"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79762.15029029094,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015284564300103651",
            "extra": "mean: 12.537274839764759 usec\nrounds: 13728"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 775659.3365557159,
            "unit": "iter/sec",
            "range": "stddev: 4.031721081860853e-7",
            "extra": "mean: 1.2892257630011388 usec\nrounds: 96526"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 142795.1842066221,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010791467005846435",
            "extra": "mean: 7.003037291180757 usec\nrounds: 35853"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 222275.03022730348,
            "unit": "iter/sec",
            "range": "stddev: 9.428207331369893e-7",
            "extra": "mean: 4.4989308919556885 usec\nrounds: 47896"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 144743.66874960889,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011140377433797702",
            "extra": "mean: 6.908765050925256 usec\nrounds: 50977"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 92458.85924798928,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013423754639178261",
            "extra": "mean: 10.815621219355972 usec\nrounds: 27079"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 204671.8618544561,
            "unit": "iter/sec",
            "range": "stddev: 8.991126520334329e-7",
            "extra": "mean: 4.885869464123547 usec\nrounds: 42134"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1401302.228725433,
            "unit": "iter/sec",
            "range": "stddev: 1.264221108829981e-7",
            "extra": "mean: 713.621929303259 nsec\nrounds: 197239"
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
          "id": "18921e85ae1f3c49e9d8240bd7c005f76fae3ede",
          "message": "Merge pull request #52 from Mixser/MGG-XXX-integration-tests\n\nMGG-XXX Add integration tests against a real broker",
          "timestamp": "2026-10-11T21:58:59+03:00",
          "tree_id": "3d3bcf56227a75acfc62905a477ea618a8461640",
          "url": "https://github.com/Mixser/zenmqtt/commit/18921e85ae1f3c49e9d8240bd7c005f76fae3ede"
        },
        "date": 1791745188459,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 460373.545763192,
            "unit": "iter/sec",
            "range": "stddev: 3.9106336237988594e-7",
            "extra": "mean: 2.172149136723817 usec\nrounds: 59831"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 451252.0386098566,
            "unit": "iter/sec",
            "range": "stddev: 3.878861156982465e-7",
            "extra": "mean: 2.216056470527283 usec\nrounds: 87674"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 333990.24272479647,
            "unit": "iter/sec",
            "range": "stddev: 5.318257167115159e-7",
            "extra": "mean: 2.9940994438690436 usec\nrounds: 80920"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 327258.7974532308,
            "unit": "iter/sec",
            "range": "stddev: 6.099642179345935e-7",
            "extra": "mean: 3.055685615733254 usec\nrounds: 97419"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 201242.38915852344,
            "unit": "iter/sec",
            "range": "stddev: 5.704685520734168e-7",
            "extra": "mean: 4.969132021247652 usec\nrounds: 26473"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 221084.80594584995,
            "unit": "iter/sec",
            "range": "stddev: 5.586747465467145e-7",
            "extra": "mean: 4.523151175956112 usec\nrounds: 28232"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 207464.03042492425,
            "unit": "iter/sec",
            "range": "stddev: 5.637478933159153e-7",
            "extra": "mean: 4.820112662189282 usec\nrounds: 78438"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 173954.96297448958,
            "unit": "iter/sec",
            "range": "stddev: 7.13132945369785e-7",
            "extra": "mean: 5.748614370644025 usec\nrounds: 56671"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 163270.73810594025,
            "unit": "iter/sec",
            "range": "stddev: 8.690817169490103e-7",
            "extra": "mean: 6.124796222524195 usec\nrounds: 67559"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 103752.33329521195,
            "unit": "iter/sec",
            "range": "stddev: 8.5170938044161e-7",
            "extra": "mean: 9.63833745458666 usec\nrounds: 29684"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1071468.1068922263,
            "unit": "iter/sec",
            "range": "stddev: 3.2034924175999494e-7",
            "extra": "mean: 933.2988948224336 nsec\nrounds: 80985"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 181857.83189617563,
            "unit": "iter/sec",
            "range": "stddev: 7.80882953105976e-7",
            "extra": "mean: 5.498800846646569 usec\nrounds: 25749"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 297674.3869206275,
            "unit": "iter/sec",
            "range": "stddev: 5.464910644426216e-7",
            "extra": "mean: 3.359375357566931 usec\nrounds: 36011"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 189060.7033684819,
            "unit": "iter/sec",
            "range": "stddev: 6.507238371446725e-7",
            "extra": "mean: 5.2893064618033625 usec\nrounds: 51951"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 118970.59631445479,
            "unit": "iter/sec",
            "range": "stddev: 0.000003995642078554487",
            "extra": "mean: 8.405438242545827 usec\nrounds: 27268"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 261298.78510821852,
            "unit": "iter/sec",
            "range": "stddev: 5.309942009931321e-7",
            "extra": "mean: 3.827036545867765 usec\nrounds: 37925"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1745747.0070608053,
            "unit": "iter/sec",
            "range": "stddev: 5.029916996525113e-8",
            "extra": "mean: 572.8206870499703 nsec\nrounds: 84768"
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
          "id": "801d765d9223e0ee6e6783e17e3a4c5c7551d679",
          "message": "Merge pull request #53 from Mixser/MGG-XXX-coverage\n\nMGG-XXX Collect coverage of unit and integration tests in CI",
          "timestamp": "2026-10-11T22:11:47+03:00",
          "tree_id": "6b8111e03d6d50f33e437dd1250273ae363dc55d",
          "url": "https://github.com/Mixser/zenmqtt/commit/801d765d9223e0ee6e6783e17e3a4c5c7551d679"
        },
        "date": 1791745962250,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 346910.373318756,
            "unit": "iter/sec",
            "range": "stddev: 5.758855168315533e-7",
            "extra": "mean: 2.882588924722518 usec\nrounds: 47439"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 337893.08570749033,
            "unit": "iter/sec",
            "range": "stddev: 5.820998466998205e-7",
            "extra": "mean: 2.959516019412386 usec\nrounds: 79466"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 260296.34771034683,
            "unit": "iter/sec",
            "range": "stddev: 7.991404407273742e-7",
            "extra": "mean: 3.841774995294142 usec\nrounds: 69363"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 255776.55762488607,
            "unit": "iter/sec",
            "range": "stddev: 7.74843810482718e-7",
            "extra": "mean: 3.909662438520143 usec\nrounds: 78285"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 151962.60331267578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010204536055619458",
            "extra": "mean: 6.580566390682424 usec\nrounds: 25124"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 171388.85746076185,
            "unit": "iter/sec",
            "range": "stddev: 8.867540291128698e-7",
            "extra": "mean: 5.834685024543922 usec\nrounds: 27672"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 163549.8490357418,
            "unit": "iter/sec",
            "range": "stddev: 9.797506358183493e-7",
            "extra": "mean: 6.114343766721928 usec\nrounds: 57891"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 136893.2500003352,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011476458539002273",
            "extra": "mean: 7.304962078097726 usec\nrounds: 47255"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130067.51399420208,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012208456073034167",
            "extra": "mean: 7.688314855041946 usec\nrounds: 50636"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 80026.39356727702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014897538205927516",
            "extra": "mean: 12.495877365250935 usec\nrounds: 26689"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 774328.0366962785,
            "unit": "iter/sec",
            "range": "stddev: 4.1094722344187273e-7",
            "extra": "mean: 1.2914423249693576 usec\nrounds: 83459"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 140803.1064907007,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010520383105359579",
            "extra": "mean: 7.102116032262716 usec\nrounds: 34206"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 226353.0622774067,
            "unit": "iter/sec",
            "range": "stddev: 8.319669942827237e-7",
            "extra": "mean: 4.417877054273961 usec\nrounds: 38944"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 144946.08519686657,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010974741395691038",
            "extra": "mean: 6.899116996790872 usec\nrounds: 44779"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93921.91176116225,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012403744612403064",
            "extra": "mean: 10.64714273004727 usec\nrounds: 24725"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 203556.2835788484,
            "unit": "iter/sec",
            "range": "stddev: 7.908118861409298e-7",
            "extra": "mean: 4.912646185214153 usec\nrounds: 41745"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1416905.3143961106,
            "unit": "iter/sec",
            "range": "stddev: 1.14680211648903e-7",
            "extra": "mean: 705.7634619898389 nsec\nrounds: 196503"
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
          "id": "1f0921d7dc455b1af205f246a18079936597ce95",
          "message": "Merge pull request #54 from Mixser/MGG-XXX-version-0.1.0rc3\n\nMGG-XXX Set the version 0.1.0rc3",
          "timestamp": "2026-10-11T22:14:52+03:00",
          "tree_id": "2f2f178a99e5abf2e99073cc2b0c119986f42075",
          "url": "https://github.com/Mixser/zenmqtt/commit/1f0921d7dc455b1af205f246a18079936597ce95"
        },
        "date": 1791746147953,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 341924.13926878927,
            "unit": "iter/sec",
            "range": "stddev: 6.483921784696596e-7",
            "extra": "mean: 2.924625333965942 usec\nrounds: 41920"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 332223.6006170767,
            "unit": "iter/sec",
            "range": "stddev: 6.351890991696401e-7",
            "extra": "mean: 3.0100209561951234 usec\nrounds: 71912"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 256849.69037228858,
            "unit": "iter/sec",
            "range": "stddev: 8.143197881261385e-7",
            "extra": "mean: 3.8933276444700344 usec\nrounds: 68321"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 253352.00866715237,
            "unit": "iter/sec",
            "range": "stddev: 9.830950889952698e-7",
            "extra": "mean: 3.947077448727772 usec\nrounds: 74488"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 150416.56076166226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011008502087323355",
            "extra": "mean: 6.648204126834931 usec\nrounds: 23020"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 168058.7908348621,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010357202167169276",
            "extra": "mean: 5.950298672460519 usec\nrounds: 23879"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 159287.26315140288,
            "unit": "iter/sec",
            "range": "stddev: 9.809686003934568e-7",
            "extra": "mean: 6.277965860016679 usec\nrounds: 56942"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 133990.01067758285,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011649992974072633",
            "extra": "mean: 7.463242930894882 usec\nrounds: 44560"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 129424.930387928,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013496659891182947",
            "extra": "mean: 7.726486674574052 usec\nrounds: 51293"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79012.83636117946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015586897159025096",
            "extra": "mean: 12.656171402692733 usec\nrounds: 25443"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 772393.0295126716,
            "unit": "iter/sec",
            "range": "stddev: 4.4188511354960384e-7",
            "extra": "mean: 1.2946776599355554 usec\nrounds: 83809"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 140675.7588376929,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010895999496293193",
            "extra": "mean: 7.108545269364904 usec\nrounds: 30440"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 227907.05308652596,
            "unit": "iter/sec",
            "range": "stddev: 8.432726145618667e-7",
            "extra": "mean: 4.387753632268438 usec\nrounds: 38199"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 145137.76732922974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010711947975479152",
            "extra": "mean: 6.890005395574298 usec\nrounds: 44481"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93384.51205520425,
            "unit": "iter/sec",
            "range": "stddev: 0.000001431415264425477",
            "extra": "mean: 10.708413825719303 usec\nrounds: 15869"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 201351.35883824227,
            "unit": "iter/sec",
            "range": "stddev: 8.870147237191352e-7",
            "extra": "mean: 4.966442768351817 usec\nrounds: 38449"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1376499.5300832072,
            "unit": "iter/sec",
            "range": "stddev: 1.199669626420821e-7",
            "extra": "mean: 726.4804514241654 nsec\nrounds: 191205"
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
          "id": "82cf04b77e6541d9eac25d81dc1b414198a39b9a",
          "message": "Merge pull request #55 from Mixser/MGG-XXX-coverage-pages-workflow\n\nMGG-XXX Publish coverage in a separate workflow",
          "timestamp": "2026-10-11T22:19:16+03:00",
          "tree_id": "785e80dbd13d64c20c3ed9534b3ef63b98cb3f33",
          "url": "https://github.com/Mixser/zenmqtt/commit/82cf04b77e6541d9eac25d81dc1b414198a39b9a"
        },
        "date": 1791746409114,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 470496.78952538216,
            "unit": "iter/sec",
            "range": "stddev: 3.707358586769171e-7",
            "extra": "mean: 2.1254130150574646 usec\nrounds: 51233"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 455015.5765515448,
            "unit": "iter/sec",
            "range": "stddev: 4.914754981351818e-7",
            "extra": "mean: 2.1977269604235596 usec\nrounds: 86753"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 338333.75011875416,
            "unit": "iter/sec",
            "range": "stddev: 5.872350680122908e-7",
            "extra": "mean: 2.955661383616038 usec\nrounds: 65177"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 328607.00402058905,
            "unit": "iter/sec",
            "range": "stddev: 7.546235162234389e-7",
            "extra": "mean: 3.043148769699822 usec\nrounds: 88842"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 201163.44754355992,
            "unit": "iter/sec",
            "range": "stddev: 9.429103113452746e-7",
            "extra": "mean: 4.971082034092998 usec\nrounds: 25014"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 223010.41173461583,
            "unit": "iter/sec",
            "range": "stddev: 5.81803315786179e-7",
            "extra": "mean: 4.484095573035433 usec\nrounds: 28010"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 211820.29612580792,
            "unit": "iter/sec",
            "range": "stddev: 6.015249601872895e-7",
            "extra": "mean: 4.720982919436874 usec\nrounds: 74295"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 173536.28922822757,
            "unit": "iter/sec",
            "range": "stddev: 7.233416954761225e-7",
            "extra": "mean: 5.762483480817332 usec\nrounds: 56964"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 166564.4946898073,
            "unit": "iter/sec",
            "range": "stddev: 7.922590980092812e-7",
            "extra": "mean: 6.003680447398456 usec\nrounds: 61148"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 103875.67624201236,
            "unit": "iter/sec",
            "range": "stddev: 9.038834517262693e-7",
            "extra": "mean: 9.626892802797961 usec\nrounds: 31540"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1079231.1607158198,
            "unit": "iter/sec",
            "range": "stddev: 2.5688064797785584e-7",
            "extra": "mean: 926.585551270343 nsec\nrounds: 79315"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 185026.8220045402,
            "unit": "iter/sec",
            "range": "stddev: 6.655837398510654e-7",
            "extra": "mean: 5.404621822750984 usec\nrounds: 32654"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 300838.20137938793,
            "unit": "iter/sec",
            "range": "stddev: 5.81550342755281e-7",
            "extra": "mean: 3.324045933710716 usec\nrounds: 36901"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 189799.01784185122,
            "unit": "iter/sec",
            "range": "stddev: 6.014748994335743e-7",
            "extra": "mean: 5.268731162946499 usec\nrounds: 50406"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 125544.63309409245,
            "unit": "iter/sec",
            "range": "stddev: 7.917671369988248e-7",
            "extra": "mean: 7.965294695238194 usec\nrounds: 24337"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 267583.5244781482,
            "unit": "iter/sec",
            "range": "stddev: 5.255338760856588e-7",
            "extra": "mean: 3.737150865137302 usec\nrounds: 43171"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1705577.4240798072,
            "unit": "iter/sec",
            "range": "stddev: 7.175676795578193e-8",
            "extra": "mean: 586.3117005899159 nsec\nrounds: 150830"
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
          "id": "510ae0488b225a062e82e2e7f31cd07ba172e107",
          "message": "Merge pull request #56 from Mixser/MGG-XXX-manual-perf-compare\n\nMGG-XXX Make the performance comparison a manual step of CI",
          "timestamp": "2026-10-11T22:30:35+03:00",
          "tree_id": "780b9b2745e659995a6840f53beb75ccc60c1a69",
          "url": "https://github.com/Mixser/zenmqtt/commit/510ae0488b225a062e82e2e7f31cd07ba172e107"
        },
        "date": 1791747092852,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 339200.8852155318,
            "unit": "iter/sec",
            "range": "stddev: 6.382205703380824e-7",
            "extra": "mean: 2.9481055138302175 usec\nrounds: 48714"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 333339.97707139235,
            "unit": "iter/sec",
            "range": "stddev: 7.165866471985399e-7",
            "extra": "mean: 2.999940207549205 usec\nrounds: 75160"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 255030.3071886058,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010274280135175252",
            "extra": "mean: 3.921102597662863 usec\nrounds: 67214"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 250166.91814419275,
            "unit": "iter/sec",
            "range": "stddev: 9.313687562677727e-7",
            "extra": "mean: 3.9973310916498312 usec\nrounds: 76133"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 152624.89839877837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010804725288856159",
            "extra": "mean: 6.5520109136269475 usec\nrounds: 24923"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 172400.5945153916,
            "unit": "iter/sec",
            "range": "stddev: 9.497299778437071e-7",
            "extra": "mean: 5.800444034493871 usec\nrounds: 22496"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 164625.6029413537,
            "unit": "iter/sec",
            "range": "stddev: 9.36760257942476e-7",
            "extra": "mean: 6.0743892938465995 usec\nrounds: 58714"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 135437.62042439933,
            "unit": "iter/sec",
            "range": "stddev: 0.000001164127723009355",
            "extra": "mean: 7.38347289967484 usec\nrounds: 45350"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130922.95517910572,
            "unit": "iter/sec",
            "range": "stddev: 0.000001189346947439844",
            "extra": "mean: 7.638079958033152 usec\nrounds: 50539"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 80873.70527752787,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015475301187838612",
            "extra": "mean: 12.364958382559317 usec\nrounds: 25398"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 791632.7924128519,
            "unit": "iter/sec",
            "range": "stddev: 4.1937057442497167e-7",
            "extra": "mean: 1.2632119457205109 usec\nrounds: 89438"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 138931.3216731824,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011047933111551023",
            "extra": "mean: 7.197800956305362 usec\nrounds: 29280"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 228311.24925407625,
            "unit": "iter/sec",
            "range": "stddev: 8.706438012146042e-7",
            "extra": "mean: 4.379985669856984 usec\nrounds: 39846"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 146037.53646300823,
            "unit": "iter/sec",
            "range": "stddev: 0.000001127834072119599",
            "extra": "mean: 6.8475545686386114 usec\nrounds: 47170"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 92968.71804153992,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014529381985038556",
            "extra": "mean: 10.756306218540992 usec\nrounds: 25054"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 205653.88938796165,
            "unit": "iter/sec",
            "range": "stddev: 8.400968435914093e-7",
            "extra": "mean: 4.862538719671484 usec\nrounds: 37836"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1431869.7303456196,
            "unit": "iter/sec",
            "range": "stddev: 1.0900260727204188e-7",
            "extra": "mean: 698.3875549618775 nsec\nrounds: 176026"
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
          "id": "1b442a62c299f5f5d60b35b134eac1e891b1f1c4",
          "message": "Merge pull request #57 from Mixser/MGG-XXX-mqtt5-names\n\nMGG-XXX Use the names of the MQTT 5 specification",
          "timestamp": "2026-10-11T22:44:49+03:00",
          "tree_id": "fb977d5d25f23285524d4407c8b3d35acd64bdf1",
          "url": "https://github.com/Mixser/zenmqtt/commit/1b442a62c299f5f5d60b35b134eac1e891b1f1c4"
        },
        "date": 1791747946957,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 341232.2874903991,
            "unit": "iter/sec",
            "range": "stddev: 7.280278902767217e-7",
            "extra": "mean: 2.930555040246993 usec\nrounds: 45494"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 329747.5442283209,
            "unit": "iter/sec",
            "range": "stddev: 6.370290082359743e-7",
            "extra": "mean: 3.0326230399689917 usec\nrounds: 74488"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 254791.82040883164,
            "unit": "iter/sec",
            "range": "stddev: 8.397595194974194e-7",
            "extra": "mean: 3.9247727748694157 usec\nrounds: 64940"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 250626.6489188784,
            "unit": "iter/sec",
            "range": "stddev: 8.046348708081028e-7",
            "extra": "mean: 3.9899986865469965 usec\nrounds: 72328"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 150560.06817374472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010457709460929058",
            "extra": "mean: 6.641867343245426 usec\nrounds: 27688"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 173341.6681466705,
            "unit": "iter/sec",
            "range": "stddev: 8.717658729302189e-7",
            "extra": "mean: 5.768953366445421 usec\nrounds: 28799"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 164965.10664157633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010326320353894663",
            "extra": "mean: 6.061887997761394 usec\nrounds: 60347"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 137259.12036350908,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012188831667764768",
            "extra": "mean: 7.2854903728922205 usec\nrounds: 45912"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 131677.63852171646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013357402668217104",
            "extra": "mean: 7.594303871382676 usec\nrounds: 51558"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79529.09659977448,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018925484004811047",
            "extra": "mean: 12.574014326258999 usec\nrounds: 26385"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 773950.4979653141,
            "unit": "iter/sec",
            "range": "stddev: 4.2415639384499806e-7",
            "extra": "mean: 1.2920723000100929 usec\nrounds: 79917"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 142423.77614949952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010810511972421987",
            "extra": "mean: 7.021299582383766 usec\nrounds: 33283"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 224969.26193591065,
            "unit": "iter/sec",
            "range": "stddev: 8.528256427274312e-7",
            "extra": "mean: 4.445051699040025 usec\nrounds: 38434"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 145339.37661452472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016775228711910632",
            "extra": "mean: 6.880447840726897 usec\nrounds: 43741"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 81194.69690035014,
            "unit": "iter/sec",
            "range": "stddev: 0.000010623190963092153",
            "extra": "mean: 12.316075287863876 usec\nrounds: 15806"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 203436.04310247707,
            "unit": "iter/sec",
            "range": "stddev: 9.073757678925272e-7",
            "extra": "mean: 4.915549795157335 usec\nrounds: 40757"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1422757.8815864273,
            "unit": "iter/sec",
            "range": "stddev: 1.2431488437919544e-7",
            "extra": "mean: 702.8602778745202 nsec\nrounds: 195351"
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
          "id": "25c9dcc0c6e019010136893cdeda4a6978f09b05",
          "message": "Merge pull request #58 from Mixser/MGG-XXX-client-lifecycle\n\nMGG-XXX Add async with to the client, move credentials to connect()",
          "timestamp": "2026-10-11T22:47:50+03:00",
          "tree_id": "87080561ebce2f2aa5c290d98050c109a15372e5",
          "url": "https://github.com/Mixser/zenmqtt/commit/25c9dcc0c6e019010136893cdeda4a6978f09b05"
        },
        "date": 1791748125672,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 344830.43311236275,
            "unit": "iter/sec",
            "range": "stddev: 6.345707376665155e-7",
            "extra": "mean: 2.8999760577226974 usec\nrounds: 47531"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 332234.92721506907,
            "unit": "iter/sec",
            "range": "stddev: 6.067701054423817e-7",
            "extra": "mean: 3.0099183381543133 usec\nrounds: 81813"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 235352.82937008308,
            "unit": "iter/sec",
            "range": "stddev: 7.972739125142007e-7",
            "extra": "mean: 4.2489397840530705 usec\nrounds: 73336"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 230155.7204616314,
            "unit": "iter/sec",
            "range": "stddev: 8.187664916470976e-7",
            "extra": "mean: 4.344884402587366 usec\nrounds: 74102"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 150989.66525928487,
            "unit": "iter/sec",
            "range": "stddev: 0.000001008752726488741",
            "extra": "mean: 6.622969845537204 usec\nrounds: 31007"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 171730.77477912803,
            "unit": "iter/sec",
            "range": "stddev: 9.680662753504472e-7",
            "extra": "mean: 5.823068120936115 usec\nrounds: 27642"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 160941.37323701466,
            "unit": "iter/sec",
            "range": "stddev: 9.527307814954355e-7",
            "extra": "mean: 6.213442695852502 usec\nrounds: 60493"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 127855.0679788128,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012485713974634394",
            "extra": "mean: 7.821355976015847 usec\nrounds: 50259"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 122174.69661828566,
            "unit": "iter/sec",
            "range": "stddev: 0.000001253528025490402",
            "extra": "mean: 8.185000885447929 usec\nrounds: 50821"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79783.44210457276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015120799580124777",
            "extra": "mean: 12.53392901611455 usec\nrounds: 27626"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 778225.3168552642,
            "unit": "iter/sec",
            "range": "stddev: 3.8362816574006186e-7",
            "extra": "mean: 1.2849749016658911 usec\nrounds: 101441"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 140077.5601823214,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010695719470029687",
            "extra": "mean: 7.13890218175149 usec\nrounds: 38960"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 222855.88487206484,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011985267199037296",
            "extra": "mean: 4.487204816574942 usec\nrounds: 49537"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 140764.03528367679,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034938723409987782",
            "extra": "mean: 7.104087332994791 usec\nrounds: 59130"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93814.70765462906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014472258186556464",
            "extra": "mean: 10.659309451577844 usec\nrounds: 25054"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 201400.95625849583,
            "unit": "iter/sec",
            "range": "stddev: 8.791278517812256e-7",
            "extra": "mean: 4.965219721779828 usec\nrounds: 43059"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1402606.1209440439,
            "unit": "iter/sec",
            "range": "stddev: 1.1556338386830226e-7",
            "extra": "mean: 712.9585313137917 nsec\nrounds: 196117"
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
          "id": "b1314f61724eade353993bdadcd1fe1038eef6f7",
          "message": "Merge pull request #58 from Mixser/MGG-XXX-client-lifecycle\n\nMGG-XXX Add async with to the client, move credentials to connect()",
          "timestamp": "2026-10-11T22:47:50+03:00",
          "tree_id": "79392d25b75f137d0859a189be07c812fc9edcff",
          "url": "https://github.com/Mixser/zenmqtt/commit/b1314f61724eade353993bdadcd1fe1038eef6f7"
        },
        "date": 1791748344392,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 633093.4297588302,
            "unit": "iter/sec",
            "range": "stddev: 2.762787595326889e-7",
            "extra": "mean: 1.5795456926175 usec\nrounds: 64923"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 615993.1408076374,
            "unit": "iter/sec",
            "range": "stddev: 2.543002049531257e-7",
            "extra": "mean: 1.6233946999618953 usec\nrounds: 96377"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 506179.77511242917,
            "unit": "iter/sec",
            "range": "stddev: 7.084967672890447e-7",
            "extra": "mean: 1.9755826865620751 usec\nrounds: 102302"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 497097.17943003535,
            "unit": "iter/sec",
            "range": "stddev: 3.819439934513837e-7",
            "extra": "mean: 2.011679086867051 usec\nrounds: 122220"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 278659.62098701444,
            "unit": "iter/sec",
            "range": "stddev: 3.4264917742640183e-7",
            "extra": "mean: 3.5886074791101508 usec\nrounds: 33239"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 315735.3821707251,
            "unit": "iter/sec",
            "range": "stddev: 3.8746291312632727e-7",
            "extra": "mean: 3.167209177270091 usec\nrounds: 31251"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 303190.90542672365,
            "unit": "iter/sec",
            "range": "stddev: 4.3212666880189634e-7",
            "extra": "mean: 3.2982519663396825 usec\nrounds: 94465"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 261785.392059609,
            "unit": "iter/sec",
            "range": "stddev: 0.000001482505894777375",
            "extra": "mean: 3.819922846467683 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 242017.502399542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035769612898550547",
            "extra": "mean: 4.1319325672120994 usec\nrounds: 89719"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 153491.2147178744,
            "unit": "iter/sec",
            "range": "stddev: 6.403091575561811e-7",
            "extra": "mean: 6.515030855922647 usec\nrounds: 14908"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1460574.9235920075,
            "unit": "iter/sec",
            "range": "stddev: 1.9809992584862992e-7",
            "extra": "mean: 684.6618984397523 nsec\nrounds: 80393"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 267374.63933698495,
            "unit": "iter/sec",
            "range": "stddev: 4.5186191504785396e-7",
            "extra": "mean: 3.7400704961387623 usec\nrounds: 30030"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 420434.4379076047,
            "unit": "iter/sec",
            "range": "stddev: 3.3780173009147214e-7",
            "extra": "mean: 2.378492125851407 usec\nrounds: 26479"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 267606.7136638607,
            "unit": "iter/sec",
            "range": "stddev: 5.276821669625407e-7",
            "extra": "mean: 3.736827026156356 usec\nrounds: 49626"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 183523.20082051956,
            "unit": "iter/sec",
            "range": "stddev: 5.267154292104963e-7",
            "extra": "mean: 5.448902348744295 usec\nrounds: 28909"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 380539.1262286141,
            "unit": "iter/sec",
            "range": "stddev: 3.419704458486876e-7",
            "extra": "mean: 2.627850675725881 usec\nrounds: 53280"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2737543.4445550134,
            "unit": "iter/sec",
            "range": "stddev: 4.1564366252910093e-8",
            "extra": "mean: 365.29100642731527 nsec\nrounds: 197746"
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
          "id": "aa7686c9c15577b5967019791e855fb209b6e4a1",
          "message": "Merge pull request #60 from Mixser/MGG-XXX-qos-reason-code-enums\n\nMGG-XXX Add QoS and ReasonCode enums",
          "timestamp": "2026-10-11T22:56:10+03:00",
          "tree_id": "c859e5fcc9faee5e7a20cb438ed310ad24e21315",
          "url": "https://github.com/Mixser/zenmqtt/commit/aa7686c9c15577b5967019791e855fb209b6e4a1"
        },
        "date": 1791748629343,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 343871.55290275667,
            "unit": "iter/sec",
            "range": "stddev: 6.415974267661192e-7",
            "extra": "mean: 2.9080625936010174 usec\nrounds: 37384"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 329802.35174660134,
            "unit": "iter/sec",
            "range": "stddev: 7.160904534354602e-7",
            "extra": "mean: 3.0321190698128646 usec\nrounds: 65407"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 258907.86864309793,
            "unit": "iter/sec",
            "range": "stddev: 8.95523588858741e-7",
            "extra": "mean: 3.862377784193537 usec\nrounds: 59309"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 250537.0544634972,
            "unit": "iter/sec",
            "range": "stddev: 9.447695625430078e-7",
            "extra": "mean: 3.9914255483741163 usec\nrounds: 64646"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 150197.95593709763,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010731738674264103",
            "extra": "mean: 6.657880220545721 usec\nrounds: 27392"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 168213.84166360306,
            "unit": "iter/sec",
            "range": "stddev: 9.838206249885968e-7",
            "extra": "mean: 5.944813994557102 usec\nrounds: 26639"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 164071.77936681441,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011188785060786425",
            "extra": "mean: 6.094893368373273 usec\nrounds: 54843"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 136234.49788333735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012306695166781893",
            "extra": "mean: 7.340284696878591 usec\nrounds: 45494"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130390.34582504192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015858847159602138",
            "extra": "mean: 7.669279452190444 usec\nrounds: 50234"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 79974.51342106458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015107507862081403",
            "extra": "mean: 12.503983547045987 usec\nrounds: 25892"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 783647.6840623468,
            "unit": "iter/sec",
            "range": "stddev: 4.188487521950337e-7",
            "extra": "mean: 1.276083653838043 usec\nrounds: 71246"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 139744.9600391433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010659575366411164",
            "extra": "mean: 7.1558931336049225 usec\nrounds: 27642"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 225215.86211555856,
            "unit": "iter/sec",
            "range": "stddev: 8.920269891841461e-7",
            "extra": "mean: 4.440184588272467 usec\nrounds: 36297"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 145025.29542166373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010344948681389105",
            "extra": "mean: 6.895348822372549 usec\nrounds: 40674"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 92076.01633715908,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013235989287471464",
            "extra": "mean: 10.860591495816381 usec\nrounds: 14487"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 174494.50976043977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011620290340219084",
            "extra": "mean: 5.73083933341445 usec\nrounds: 33722"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1415696.3031826937,
            "unit": "iter/sec",
            "range": "stddev: 1.0939843492626768e-7",
            "extra": "mean: 706.3661872619522 nsec\nrounds: 180832"
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
          "id": "1b7ab8fdf0ecc5f5330c13df64bde9a597774f14",
          "message": "Merge pull request #62 from Mixser/MGG-XXX-version-0.1.0rc4\n\nMGG-XXX Set the version 0.1.0rc4",
          "timestamp": "2026-10-11T22:56:38+03:00",
          "tree_id": "e0a2075d1873af9190f304929f46446429c0fc26",
          "url": "https://github.com/Mixser/zenmqtt/commit/1b7ab8fdf0ecc5f5330c13df64bde9a597774f14"
        },
        "date": 1791748798607,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 344309.98918547854,
            "unit": "iter/sec",
            "range": "stddev: 6.440855985714637e-7",
            "extra": "mean: 2.9043595347485076 usec\nrounds: 55544"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 334363.5839499432,
            "unit": "iter/sec",
            "range": "stddev: 6.15371048705642e-7",
            "extra": "mean: 2.9907563143889133 usec\nrounds: 80887"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 258383.7853534739,
            "unit": "iter/sec",
            "range": "stddev: 7.207586080827573e-7",
            "extra": "mean: 3.870211896741048 usec\nrounds: 71398"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 251287.5350640005,
            "unit": "iter/sec",
            "range": "stddev: 7.629052044300989e-7",
            "extra": "mean: 3.9795049911461375 usec\nrounds: 72328"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 148844.1539798024,
            "unit": "iter/sec",
            "range": "stddev: 9.793850364647452e-7",
            "extra": "mean: 6.718436520763164 usec\nrounds: 28340"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 166325.51914678398,
            "unit": "iter/sec",
            "range": "stddev: 9.206132303658066e-7",
            "extra": "mean: 6.012306500708949 usec\nrounds: 28535"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 160176.95061448397,
            "unit": "iter/sec",
            "range": "stddev: 9.113597978772766e-7",
            "extra": "mean: 6.24309550259084 usec\nrounds: 58679"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 134549.83717814155,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011120481331335935",
            "extra": "mean: 7.432190339078732 usec\nrounds: 49685"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 129427.32161766758,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011854522620845106",
            "extra": "mean: 7.726343924152521 usec\nrounds: 53663"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 80088.44737744887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014703827457328196",
            "extra": "mean: 12.486195359576639 usec\nrounds: 27928"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 769761.606178474,
            "unit": "iter/sec",
            "range": "stddev: 4.78806474161765e-7",
            "extra": "mean: 1.299103504219388 usec\nrounds: 85610"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 141109.7325068444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010942892803758867",
            "extra": "mean: 7.086683407549483 usec\nrounds: 37752"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 224650.0125839999,
            "unit": "iter/sec",
            "range": "stddev: 7.877100118347864e-7",
            "extra": "mean: 4.451368546556771 usec\nrounds: 39436"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 146541.36831627006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010028982749007298",
            "extra": "mean: 6.824011618628874 usec\nrounds: 46993"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 92539.66171054526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012331496470081102",
            "extra": "mean: 10.806177389408438 usec\nrounds: 16647"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 174553.66825648356,
            "unit": "iter/sec",
            "range": "stddev: 9.181571773236173e-7",
            "extra": "mean: 5.728897077835294 usec\nrounds: 37951"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1404315.3603464593,
            "unit": "iter/sec",
            "range": "stddev: 1.1752350832573244e-7",
            "extra": "mean: 712.0907655338111 nsec\nrounds: 196851"
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
          "id": "5ddc404e27d3cdd820e897853f8613a48378409b",
          "message": "Merge pull request #63 from Mixser/MGG-XXX-rename-processing-to-trace\n\nMGG-XXX Rename client.processing() to client.trace()",
          "timestamp": "2026-10-11T23:42:55+03:00",
          "tree_id": "7254415f32310e6c07b1ea7c82a021fc42cc0734",
          "url": "https://github.com/Mixser/zenmqtt/commit/5ddc404e27d3cdd820e897853f8613a48378409b"
        },
        "date": 1791751426373,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 468614.3319406028,
            "unit": "iter/sec",
            "range": "stddev: 3.8740383568650663e-7",
            "extra": "mean: 2.1339509525004257 usec\nrounds: 55538"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 462348.2434029405,
            "unit": "iter/sec",
            "range": "stddev: 3.8801509024836915e-7",
            "extra": "mean: 2.162871848803568 usec\nrounds: 91275"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 342558.5824415332,
            "unit": "iter/sec",
            "range": "stddev: 5.319781185261635e-7",
            "extra": "mean: 2.9192087171562164 usec\nrounds: 83697"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 333637.377948053,
            "unit": "iter/sec",
            "range": "stddev: 6.162930714949277e-7",
            "extra": "mean: 2.997266092157393 usec\nrounds: 91442"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 201729.70299451024,
            "unit": "iter/sec",
            "range": "stddev: 6.683347665508886e-7",
            "extra": "mean: 4.957128202519653 usec\nrounds: 29352"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 219178.38520111318,
            "unit": "iter/sec",
            "range": "stddev: 5.564744356662117e-7",
            "extra": "mean: 4.56249369244336 usec\nrounds: 21165"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 209109.4884302631,
            "unit": "iter/sec",
            "range": "stddev: 5.901623128274873e-7",
            "extra": "mean: 4.782183761754525 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 175014.93644645432,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012099798895442782",
            "extra": "mean: 5.7137980352091216 usec\nrounds: 58327"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 166489.2852586309,
            "unit": "iter/sec",
            "range": "stddev: 6.845975954071851e-7",
            "extra": "mean: 6.0063925341895805 usec\nrounds: 66570"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 105076.12544076142,
            "unit": "iter/sec",
            "range": "stddev: 9.459592503450681e-7",
            "extra": "mean: 9.516909724310002 usec\nrounds: 33010"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1078430.4671805238,
            "unit": "iter/sec",
            "range": "stddev: 2.566642972802839e-7",
            "extra": "mean: 927.2735057406396 nsec\nrounds: 92371"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 183399.91847419698,
            "unit": "iter/sec",
            "range": "stddev: 7.124457453553004e-7",
            "extra": "mean: 5.4525651282701775 usec\nrounds: 27799"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 300377.87192333024,
            "unit": "iter/sec",
            "range": "stddev: 4.830356303139014e-7",
            "extra": "mean: 3.3291400381691374 usec\nrounds: 39782"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 192372.1729963389,
            "unit": "iter/sec",
            "range": "stddev: 6.746760230941447e-7",
            "extra": "mean: 5.198257026597248 usec\nrounds: 53831"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 129100.98644331637,
            "unit": "iter/sec",
            "range": "stddev: 7.45788945963593e-7",
            "extra": "mean: 7.74587419933514 usec\nrounds: 21232"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 226574.62291527507,
            "unit": "iter/sec",
            "range": "stddev: 5.635456789489932e-7",
            "extra": "mean: 4.413556942667574 usec\nrounds: 39250"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1711814.6642755351,
            "unit": "iter/sec",
            "range": "stddev: 7.061747571922056e-8",
            "extra": "mean: 584.1753905194021 nsec\nrounds: 149032"
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
          "id": "b5c75ef8c788b62e75bced2c65ce9dd98a25a018",
          "message": "Merge pull request #65 from Mixser/MGG-XXX-codec-decode\n\nMGG-XXX Move packet parsing out of the handlers",
          "timestamp": "2026-10-12T23:08:10+03:00",
          "tree_id": "917a5b536ebcc3d0c9b50fddb1efe25001524acb",
          "url": "https://github.com/Mixser/zenmqtt/commit/b5c75ef8c788b62e75bced2c65ce9dd98a25a018"
        },
        "date": 1791835747063,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 343122.2929115456,
            "unit": "iter/sec",
            "range": "stddev: 6.271935672003961e-7",
            "extra": "mean: 2.914412792927426 usec\nrounds: 30376"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 334249.6496283573,
            "unit": "iter/sec",
            "range": "stddev: 6.734486786144262e-7",
            "extra": "mean: 2.9917757613564335 usec\nrounds: 52016"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 258547.3430552221,
            "unit": "iter/sec",
            "range": "stddev: 9.154129878192231e-7",
            "extra": "mean: 3.867763590927384 usec\nrounds: 67214"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 251050.830036039,
            "unit": "iter/sec",
            "range": "stddev: 8.209877918142603e-7",
            "extra": "mean: 3.983257095212341 usec\nrounds: 70787"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 149192.96267834332,
            "unit": "iter/sec",
            "range": "stddev: 0.00000113554377102531",
            "extra": "mean: 6.702729016488383 usec\nrounds: 27212"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 174829.94146877562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011940327051155424",
            "extra": "mean: 5.719844047300094 usec\nrounds: 26912"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 166967.65456889695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010154537681962157",
            "extra": "mean: 5.989183968487522 usec\nrounds: 62190"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 133824.4982862545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012235368937207523",
            "extra": "mean: 7.472473372259321 usec\nrounds: 48596"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 129085.87668925092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013281946081000271",
            "extra": "mean: 7.746780869043521 usec\nrounds: 52261"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 80445.00249587701,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014310293298108243",
            "extra": "mean: 12.430852992406237 usec\nrounds: 26434"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 774000.830094681,
            "unit": "iter/sec",
            "range": "stddev: 4.78579910284536e-7",
            "extra": "mean: 1.2919882784591759 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 140983.29280771088,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011791247663080037",
            "extra": "mean: 7.093039040901918 usec\nrounds: 28816"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 222714.48366436895,
            "unit": "iter/sec",
            "range": "stddev: 8.329852404163811e-7",
            "extra": "mean: 4.490053738521117 usec\nrounds: 38464"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 145084.18609383854,
            "unit": "iter/sec",
            "range": "stddev: 0.000001030429713360468",
            "extra": "mean: 6.892549952709616 usec\nrounds: 44402"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 92894.6055872823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012614259332022052",
            "extra": "mean: 10.764887731402398 usec\nrounds: 24477"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 173806.85545976838,
            "unit": "iter/sec",
            "range": "stddev: 9.62929705776904e-7",
            "extra": "mean: 5.753512986324484 usec\nrounds: 31379"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1417739.7470303338,
            "unit": "iter/sec",
            "range": "stddev: 1.2312625404327587e-7",
            "extra": "mean: 705.348073999229 nsec\nrounds: 196851"
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
          "id": "f4544aec9bba3e8d00b3b7eae6c0b546592c5c21",
          "message": "Merge pull request #35 from Mixser/MGG-XXX-version-0.1.0rc1\n\nMGG-XXX Set the version 0.1.0rc1",
          "timestamp": "2026-10-11T19:53:49+03:00",
          "tree_id": "2f1365c137ff8d4d2e9eb35503de06e47c4f453a",
          "url": "https://github.com/Mixser/zenmqtt/commit/f4544aec9bba3e8d00b3b7eae6c0b546592c5c21"
        },
        "date": 1791737757256,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 375246.97299032856,
            "unit": "iter/sec",
            "range": "stddev: 6.69273930149175e-7",
            "extra": "mean: 2.664911570188132 usec\nrounds: 61088"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 359646.0502561753,
            "unit": "iter/sec",
            "range": "stddev: 6.555490892545482e-7",
            "extra": "mean: 2.7805115593170053 usec\nrounds: 88803"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 279383.8493560829,
            "unit": "iter/sec",
            "range": "stddev: 6.611552265359807e-7",
            "extra": "mean: 3.5793049680744815 usec\nrounds: 80756"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 269005.6903920912,
            "unit": "iter/sec",
            "range": "stddev: 7.212066984380338e-7",
            "extra": "mean: 3.7173934816859933 usec\nrounds: 82291"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 162151.32399552243,
            "unit": "iter/sec",
            "range": "stddev: 9.350829326111834e-7",
            "extra": "mean: 6.16707884560729 usec\nrounds: 39051"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 187090.25227101357,
            "unit": "iter/sec",
            "range": "stddev: 7.812823695692766e-7",
            "extra": "mean: 5.345013905649283 usec\nrounds: 40559"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 179900.55654803215,
            "unit": "iter/sec",
            "range": "stddev: 8.11781766548538e-7",
            "extra": "mean: 5.558626494482286 usec\nrounds: 72015"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 144924.40318498018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010811173363008275",
            "extra": "mean: 6.900149167587802 usec\nrounds: 57003"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 139143.072607458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010035230968627614",
            "extra": "mean: 7.186847187291454 usec\nrounds: 26274"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 87503.17386165695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012404245456280716",
            "extra": "mean: 11.428156898411547 usec\nrounds: 32964"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 804660.0306432586,
            "unit": "iter/sec",
            "range": "stddev: 4.1481657841084685e-7",
            "extra": "mean: 1.2427608703275386 usec\nrounds: 116878"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 155908.40606456227,
            "unit": "iter/sec",
            "range": "stddev: 9.470380077262293e-7",
            "extra": "mean: 6.414022343259004 usec\nrounds: 28823"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 239888.05905921222,
            "unit": "iter/sec",
            "range": "stddev: 7.834641594059936e-7",
            "extra": "mean: 4.1686109926512325 usec\nrounds: 52981"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 156581.53917407314,
            "unit": "iter/sec",
            "range": "stddev: 9.016495013985229e-7",
            "extra": "mean: 6.386448908822456 usec\nrounds: 65755"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 101628.72452761365,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011243582305290503",
            "extra": "mean: 9.839737777367155 usec\nrounds: 33483"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 223051.90401984,
            "unit": "iter/sec",
            "range": "stddev: 7.569155700961543e-7",
            "extra": "mean: 4.483261438158592 usec\nrounds: 58576"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1390261.47664126,
            "unit": "iter/sec",
            "range": "stddev: 1.0955807453722571e-7",
            "extra": "mean: 719.2891530130757 nsec\nrounds: 184163"
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
          "id": "c33ba496e712c3d63b01519e117ede58bacbb393",
          "message": "Merge pull request #36 from Mixser/MGG-XXX-publish-to-pypi-only\n\nMGG-XXX Publish pre-releases to PyPI",
          "timestamp": "2026-10-11T19:59:20+03:00",
          "tree_id": "41635ebaeae2ce7324038f03e2c29c5e0f303766",
          "url": "https://github.com/Mixser/zenmqtt/commit/c33ba496e712c3d63b01519e117ede58bacbb393"
        },
        "date": 1791738069646,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 344942.9894936472,
            "unit": "iter/sec",
            "range": "stddev: 6.294367203017214e-7",
            "extra": "mean: 2.8990297830604757 usec\nrounds: 52043"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 339481.37961122167,
            "unit": "iter/sec",
            "range": "stddev: 6.295323489806367e-7",
            "extra": "mean: 2.9456696598358727 usec\nrounds: 79403"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 256836.05293551396,
            "unit": "iter/sec",
            "range": "stddev: 8.883635523471536e-7",
            "extra": "mean: 3.8935343717148565 usec\nrounds: 68181"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 253287.82123643858,
            "unit": "iter/sec",
            "range": "stddev: 7.567882216998862e-7",
            "extra": "mean: 3.9480777051120906 usec\nrounds: 76430"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 154477.6417861241,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010496656066468613",
            "extra": "mean: 6.473428700992927 usec\nrounds: 27574"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 175838.11973591545,
            "unit": "iter/sec",
            "range": "stddev: 9.164247066074545e-7",
            "extra": "mean: 5.687048982904627 usec\nrounds: 25907"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 169175.72585263124,
            "unit": "iter/sec",
            "range": "stddev: 9.659957525540989e-7",
            "extra": "mean: 5.911013503622256 usec\nrounds: 61539"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 136838.09285229593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011307406630030712",
            "extra": "mean: 7.307906586212128 usec\nrounds: 51031"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 131278.62701854712,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011635811555679882",
            "extra": "mean: 7.617386186242787 usec\nrounds: 25366"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 82167.77186767002,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015109656074677236",
            "extra": "mean: 12.170221697266967 usec\nrounds: 26667"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 778627.561461092,
            "unit": "iter/sec",
            "range": "stddev: 3.884744148446839e-7",
            "extra": "mean: 1.284311074377464 usec\nrounds: 73828"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 144074.9287387547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012896417807718317",
            "extra": "mean: 6.940832862137033 usec\nrounds: 24405"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 228820.42230343263,
            "unit": "iter/sec",
            "range": "stddev: 8.77550259690811e-7",
            "extra": "mean: 4.370239290415813 usec\nrounds: 36416"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 149601.63622233665,
            "unit": "iter/sec",
            "range": "stddev: 9.48032165504196e-7",
            "extra": "mean: 6.684418869014299 usec\nrounds: 47941"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93801.55028819948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018270732207627984",
            "extra": "mean: 10.660804612797566 usec\nrounds: 22893"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 192511.8567892914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042276782563694615",
            "extra": "mean: 5.194485247184139 usec\nrounds: 41043"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1306409.8110693912,
            "unit": "iter/sec",
            "range": "stddev: 1.141519718308458e-7",
            "extra": "mean: 765.4565906707538 nsec\nrounds: 176960"
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
          "id": "3962593e42ede0cc7e26351b0e5899a63a47f3ae",
          "message": "Merge pull request #33 from Mixser/MGG-XXX-wait-across-reconnect-in-client\n\nMGG-XXX Move wait_across_reconnect from the protocol to the client",
          "timestamp": "2026-10-11T20:03:26+03:00",
          "tree_id": "7b96a0f229e58f18e1ddcdc45ab8bcf2f21dd4fa",
          "url": "https://github.com/Mixser/zenmqtt/commit/3962593e42ede0cc7e26351b0e5899a63a47f3ae"
        },
        "date": 1791738318078,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 341463.5877031313,
            "unit": "iter/sec",
            "range": "stddev: 6.38960200486276e-7",
            "extra": "mean: 2.928569944240733 usec\nrounds: 41383"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 326178.623998412,
            "unit": "iter/sec",
            "range": "stddev: 6.143059901038567e-7",
            "extra": "mean: 3.065804827249711 usec\nrounds: 72961"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 254253.41563330183,
            "unit": "iter/sec",
            "range": "stddev: 8.577374816731539e-7",
            "extra": "mean: 3.933083838850978 usec\nrounds: 66103"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 245310.23592270116,
            "unit": "iter/sec",
            "range": "stddev: 8.493914253857388e-7",
            "extra": "mean: 4.076470744233871 usec\nrounds: 70892"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 144754.26645523086,
            "unit": "iter/sec",
            "range": "stddev: 0.000002091779979800083",
            "extra": "mean: 6.908259248505652 usec\nrounds: 27437"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 173608.7484207228,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014803017706128539",
            "extra": "mean: 5.760078389463437 usec\nrounds: 18255"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 168680.68264122322,
            "unit": "iter/sec",
            "range": "stddev: 9.93281307578529e-7",
            "extra": "mean: 5.9283611160559415 usec\nrounds: 61573"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 137025.1195924341,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013116627785062385",
            "extra": "mean: 7.297931962945104 usec\nrounds: 47577"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 131316.65524725043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012494777134359986",
            "extra": "mean: 7.6151802535416655 usec\nrounds: 51422"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 80105.53478621508,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014678853496837896",
            "extra": "mean: 12.48353191410295 usec\nrounds: 26963"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 741757.400890266,
            "unit": "iter/sec",
            "range": "stddev: 4.3134634181746406e-7",
            "extra": "mean: 1.34814967643031 usec\nrounds: 27967"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 147491.36419337426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011425334568530415",
            "extra": "mean: 6.780057974709023 usec\nrounds: 23631"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 223072.73702395038,
            "unit": "iter/sec",
            "range": "stddev: 8.663182376914342e-7",
            "extra": "mean: 4.482842741525309 usec\nrounds: 38052"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 148449.76233154087,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010386233318686396",
            "extra": "mean: 6.736285624807172 usec\nrounds: 46316"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93713.33913859571,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013014863793515108",
            "extra": "mean: 10.670839489787761 usec\nrounds: 20304"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 204994.07412990465,
            "unit": "iter/sec",
            "range": "stddev: 8.688173650106068e-7",
            "extra": "mean: 4.878189792775671 usec\nrounds: 30312"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1263130.3205001636,
            "unit": "iter/sec",
            "range": "stddev: 1.3430043336045502e-7",
            "extra": "mean: 791.6839488137919 nsec\nrounds: 194970"
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
          "id": "1411fdb76cbaff99404974874af24ab2806da921",
          "message": "Merge pull request #37 from Mixser/MGG-XXX-readme-pypi\n\nMGG-XXX Update README for PyPI",
          "timestamp": "2026-10-11T20:29:21+03:00",
          "tree_id": "ff7867dedc2f4e1a4677a1056f21399e780909bf",
          "url": "https://github.com/Mixser/zenmqtt/commit/1411fdb76cbaff99404974874af24ab2806da921"
        },
        "date": 1791739900570,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 348763.34924308775,
            "unit": "iter/sec",
            "range": "stddev: 6.87876770784763e-7",
            "extra": "mean: 2.8672737607614867 usec\nrounds: 36152"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 336935.3166252696,
            "unit": "iter/sec",
            "range": "stddev: 7.682298959140129e-7",
            "extra": "mean: 2.967928711112742 usec\nrounds: 67991"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 259921.06055324414,
            "unit": "iter/sec",
            "range": "stddev: 8.625035042339348e-7",
            "extra": "mean: 3.8473219440990727 usec\nrounds: 65881"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 252096.48243610963,
            "unit": "iter/sec",
            "range": "stddev: 8.28893770320957e-7",
            "extra": "mean: 3.966735236987832 usec\nrounds: 71547"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 152476.32420780114,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010806089473384522",
            "extra": "mean: 6.558395247232993 usec\nrounds: 26553"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 176027.46787064613,
            "unit": "iter/sec",
            "range": "stddev: 9.72913541934905e-7",
            "extra": "mean: 5.680931573331786 usec\nrounds: 28030"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 169040.9539354611,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010453594063416386",
            "extra": "mean: 5.915726199591814 usec\nrounds: 60314"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 136305.72607126096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011703793853378358",
            "extra": "mean: 7.336448943290891 usec\nrounds: 47173"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 132734.00214129098,
            "unit": "iter/sec",
            "range": "stddev: 0.000001541281401653529",
            "extra": "mean: 7.533864600387268 usec\nrounds: 49461"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 82121.9462464806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014457640200968734",
            "extra": "mean: 12.177012914411485 usec\nrounds: 25398"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 742564.2494375908,
            "unit": "iter/sec",
            "range": "stddev: 4.4991575377387846e-7",
            "extra": "mean: 1.3466848165089929 usec\nrounds: 85896"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 142926.8163751294,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010719492342207433",
            "extra": "mean: 6.996587661865877 usec\nrounds: 26260"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 226693.3873767982,
            "unit": "iter/sec",
            "range": "stddev: 8.532579311097695e-7",
            "extra": "mean: 4.41124468415945 usec\nrounds: 38658"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 145375.52331012997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012555285693718698",
            "extra": "mean: 6.878737061305 usec\nrounds: 45619"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93714.64769682432,
            "unit": "iter/sec",
            "range": "stddev: 0.000001344836945596311",
            "extra": "mean: 10.670690490510019 usec\nrounds: 23240"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 206947.01271572214,
            "unit": "iter/sec",
            "range": "stddev: 8.60700335816397e-7",
            "extra": "mean: 4.832154795941291 usec\nrounds: 38793"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1303344.3199482153,
            "unit": "iter/sec",
            "range": "stddev: 1.2362305146839055e-7",
            "extra": "mean: 767.2569594193898 nsec\nrounds: 183790"
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
          "id": "86cef29cd99647f19250e6cad17fa2f9dfeb3eb7",
          "message": "Merge pull request #38 from Mixser/MGG-XXX-ack-auth-qos2-fixes\n\nMGG-XXX Warn about blocked acks, close on AUTH, don't deliver duplicates before ack",
          "timestamp": "2026-10-11T20:29:46+03:00",
          "tree_id": "c43e340d393ff43f2ec19295c6cc405a35e5bf07",
          "url": "https://github.com/Mixser/zenmqtt/commit/86cef29cd99647f19250e6cad17fa2f9dfeb3eb7"
        },
        "date": 1791740053554,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 445131.20424244885,
            "unit": "iter/sec",
            "range": "stddev: 4.4697167184320675e-7",
            "extra": "mean: 2.2465286424973514 usec\nrounds: 43432"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 436539.53966718673,
            "unit": "iter/sec",
            "range": "stddev: 5.26727669107043e-7",
            "extra": "mean: 2.290743241179 usec\nrounds: 77084"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 326823.2419120591,
            "unit": "iter/sec",
            "range": "stddev: 6.079066427966332e-7",
            "extra": "mean: 3.059757911186371 usec\nrounds: 64592"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 316551.49727883865,
            "unit": "iter/sec",
            "range": "stddev: 6.239173892863906e-7",
            "extra": "mean: 3.1590436582870955 usec\nrounds: 75839"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 194736.61800804906,
            "unit": "iter/sec",
            "range": "stddev: 8.561716540398239e-7",
            "extra": "mean: 5.135141044498713 usec\nrounds: 25141"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 208036.6282790905,
            "unit": "iter/sec",
            "range": "stddev: 7.979582446949526e-7",
            "extra": "mean: 4.806845834179041 usec\nrounds: 24065"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 197424.34496830765,
            "unit": "iter/sec",
            "range": "stddev: 7.30073047798101e-7",
            "extra": "mean: 5.06523144428074 usec\nrounds: 49001"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 166447.73078806195,
            "unit": "iter/sec",
            "range": "stddev: 9.380024045137065e-7",
            "extra": "mean: 6.00789205875868 usec\nrounds: 37261"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 159191.36144108596,
            "unit": "iter/sec",
            "range": "stddev: 8.835719526964158e-7",
            "extra": "mean: 6.28174789729456 usec\nrounds: 41138"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 97924.69243348265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013223840927001428",
            "extra": "mean: 10.211928933851596 usec\nrounds: 23654"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 980413.099166752,
            "unit": "iter/sec",
            "range": "stddev: 3.7205561729250366e-7",
            "extra": "mean: 1.0199782120923262 usec\nrounds: 66459"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 175110.46972408102,
            "unit": "iter/sec",
            "range": "stddev: 8.523010547874818e-7",
            "extra": "mean: 5.7106808152344355 usec\nrounds: 23748"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 295296.12238428724,
            "unit": "iter/sec",
            "range": "stddev: 6.123713703517484e-7",
            "extra": "mean: 3.3864311929522652 usec\nrounds: 32206"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 183216.22802835717,
            "unit": "iter/sec",
            "range": "stddev: 8.60365135417125e-7",
            "extra": "mean: 5.4580318062504025 usec\nrounds: 42193"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 117922.96873119843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012329405874241207",
            "extra": "mean: 8.480112150835241 usec\nrounds: 22336"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 244587.7362001508,
            "unit": "iter/sec",
            "range": "stddev: 7.892370879592195e-7",
            "extra": "mean: 4.088512431308825 usec\nrounds: 36561"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1604511.5058153013,
            "unit": "iter/sec",
            "range": "stddev: 9.058322151483571e-8",
            "extra": "mean: 623.2426482301039 nsec\nrounds: 194477"
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
          "id": "89f441ef64ca9daad96c7c60e5fbc86771806347",
          "message": "MGG-XXX Moved instrumentation to the zenmqtt.instrumentation package: MetricsCollector, the OpenTelemetry adapter and the monitors; Moved the warning about a blocked ack from IncomingFlow to AckBlockedMonitor; The protocol only calls metrics hooks; (#40)",
          "timestamp": "2026-10-11T20:45:37+03:00",
          "tree_id": "544502dc1d01bace68568232aad49bedaca2f672",
          "url": "https://github.com/Mixser/zenmqtt/commit/89f441ef64ca9daad96c7c60e5fbc86771806347"
        },
        "date": 1791740849811,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 465835.4028827605,
            "unit": "iter/sec",
            "range": "stddev: 3.664251246225787e-7",
            "extra": "mean: 2.146680981762298 usec\nrounds: 38258"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 445777.3534203119,
            "unit": "iter/sec",
            "range": "stddev: 4.1120453814407525e-7",
            "extra": "mean: 2.243272324911324 usec\nrounds: 82251"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 337570.4530293334,
            "unit": "iter/sec",
            "range": "stddev: 5.420010876572602e-7",
            "extra": "mean: 2.9623445743727586 usec\nrounds: 78996"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 332397.89690491644,
            "unit": "iter/sec",
            "range": "stddev: 4.9840950842088e-7",
            "extra": "mean: 3.0084426204599404 usec\nrounds: 91191"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 201029.16910942877,
            "unit": "iter/sec",
            "range": "stddev: 6.125367756415575e-7",
            "extra": "mean: 4.974402493081277 usec\nrounds: 31126"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 223858.50699554518,
            "unit": "iter/sec",
            "range": "stddev: 5.984612949333276e-7",
            "extra": "mean: 4.467107430587394 usec\nrounds: 27683"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 213261.1363884212,
            "unit": "iter/sec",
            "range": "stddev: 5.80180172846618e-7",
            "extra": "mean: 4.689086895695141 usec\nrounds: 78623"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 169728.27131998548,
            "unit": "iter/sec",
            "range": "stddev: 0.000001453309815556371",
            "extra": "mean: 5.891770370504269 usec\nrounds: 405"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 165938.17611751886,
            "unit": "iter/sec",
            "range": "stddev: 7.178000930246686e-7",
            "extra": "mean: 6.026340793885738 usec\nrounds: 66081"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 104783.82587644744,
            "unit": "iter/sec",
            "range": "stddev: 7.919199840114058e-7",
            "extra": "mean: 9.543457605557546 usec\nrounds: 30629"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1068250.1836035626,
            "unit": "iter/sec",
            "range": "stddev: 3.032756619598821e-7",
            "extra": "mean: 936.1103001421146 nsec\nrounds: 84261"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 187423.80401324292,
            "unit": "iter/sec",
            "range": "stddev: 6.37974573108252e-7",
            "extra": "mean: 5.335501566969276 usec\nrounds: 30313"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 286686.2375065537,
            "unit": "iter/sec",
            "range": "stddev: 4.702468613602306e-7",
            "extra": "mean: 3.488133956821488 usec\nrounds: 36034"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 194076.86787900666,
            "unit": "iter/sec",
            "range": "stddev: 6.117365753019553e-7",
            "extra": "mean: 5.152597581198755 usec\nrounds: 28858"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 124507.57664249574,
            "unit": "iter/sec",
            "range": "stddev: 7.579568843672954e-7",
            "extra": "mean: 8.031639736040685 usec\nrounds: 25151"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 264855.00805273186,
            "unit": "iter/sec",
            "range": "stddev: 4.981186821869225e-7",
            "extra": "mean: 3.7756507130154136 usec\nrounds: 39970"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1657330.1944741982,
            "unit": "iter/sec",
            "range": "stddev: 7.634855565645128e-8",
            "extra": "mean: 603.3800647174345 nsec\nrounds: 141844"
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
          "id": "6fe668a7561183bd62d2f35df4bdc3e5e437464e",
          "message": "Merge pull request #43 from Mixser/MGG-XXX-context-ownership\n\nMGG-XXX Make the state of ProtocolContext read-only for the parts",
          "timestamp": "2026-10-11T20:56:59+03:00",
          "tree_id": "f2a884ba9d705f98c1090502a7770b95fa144dcc",
          "url": "https://github.com/Mixser/zenmqtt/commit/6fe668a7561183bd62d2f35df4bdc3e5e437464e"
        },
        "date": 1791741513815,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 640274.8973334597,
            "unit": "iter/sec",
            "range": "stddev: 2.541255002071896e-7",
            "extra": "mean: 1.5618291520793341 usec\nrounds: 43208"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 635011.0246059557,
            "unit": "iter/sec",
            "range": "stddev: 3.3649014941590554e-7",
            "extra": "mean: 1.5747758090035229 usec\nrounds: 95548"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 517940.1669553822,
            "unit": "iter/sec",
            "range": "stddev: 4.377503528352095e-7",
            "extra": "mean: 1.9307249443083736 usec\nrounds: 74963"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 498000.83775646484,
            "unit": "iter/sec",
            "range": "stddev: 4.787410678523739e-7",
            "extra": "mean: 2.008028750523961 usec\nrounds: 113598"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 279183.37546947616,
            "unit": "iter/sec",
            "range": "stddev: 5.327504823407478e-7",
            "extra": "mean: 3.5818751683132817 usec\nrounds: 31194"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 315729.344811772,
            "unit": "iter/sec",
            "range": "stddev: 3.9120004938457474e-7",
            "extra": "mean: 3.1672697404676433 usec\nrounds: 26937"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 304748.3229521806,
            "unit": "iter/sec",
            "range": "stddev: 4.6143042734979404e-7",
            "extra": "mean: 3.281396236450871 usec\nrounds: 45223"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 263831.51980750595,
            "unit": "iter/sec",
            "range": "stddev: 5.735012231297844e-7",
            "extra": "mean: 3.790297689713533 usec\nrounds: 63845"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 253350.82967440702,
            "unit": "iter/sec",
            "range": "stddev: 5.876309761825261e-7",
            "extra": "mean: 3.947095816836861 usec\nrounds: 81374"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 150081.60001413935,
            "unit": "iter/sec",
            "range": "stddev: 6.148530594030601e-7",
            "extra": "mean: 6.6630419712062565 usec\nrounds: 23945"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1423671.9000131295,
            "unit": "iter/sec",
            "range": "stddev: 1.9219915154004706e-7",
            "extra": "mean: 702.4090311754961 nsec\nrounds: 70024"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 270626.6737898825,
            "unit": "iter/sec",
            "range": "stddev: 4.614031534829428e-7",
            "extra": "mean: 3.695127261462818 usec\nrounds: 28909"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 414155.68181696726,
            "unit": "iter/sec",
            "range": "stddev: 6.034827665976299e-7",
            "extra": "mean: 2.4145509621233248 usec\nrounds: 36429"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 258225.89613886998,
            "unit": "iter/sec",
            "range": "stddev: 4.92432342661149e-7",
            "extra": "mean: 3.87257829269848 usec\nrounds: 44538"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 179404.6605486428,
            "unit": "iter/sec",
            "range": "stddev: 5.460007348447301e-7",
            "extra": "mean: 5.573991204809673 usec\nrounds: 26037"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 385691.59551820986,
            "unit": "iter/sec",
            "range": "stddev: 4.485751104380366e-7",
            "extra": "mean: 2.592745114542654 usec\nrounds: 41501"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2686938.0055870167,
            "unit": "iter/sec",
            "range": "stddev: 3.560382225134337e-8",
            "extra": "mean: 372.17084946533015 nsec\nrounds: 127845"
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
          "id": "8c0a3b2a7b4220e61be82df854d2d9890f4ef032",
          "message": "Merge pull request #45 from Mixser/MGG-XXX-version-0.1.0rc2\n\nMGG-XXX Set the version 0.1.0rc2",
          "timestamp": "2026-10-11T20:58:34+03:00",
          "tree_id": "0c73cbfbc1c6336d8106f380b8c34c537745cb08",
          "url": "https://github.com/Mixser/zenmqtt/commit/8c0a3b2a7b4220e61be82df854d2d9890f4ef032"
        },
        "date": 1791741662667,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 467277.87263030844,
            "unit": "iter/sec",
            "range": "stddev: 4.09037482251421e-7",
            "extra": "mean: 2.1400542558777653 usec\nrounds: 49801"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 446288.8351415785,
            "unit": "iter/sec",
            "range": "stddev: 4.042759335387681e-7",
            "extra": "mean: 2.2407013603259083 usec\nrounds: 84761"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 334123.03767597856,
            "unit": "iter/sec",
            "range": "stddev: 5.001855489466018e-7",
            "extra": "mean: 2.992909459208757 usec\nrounds: 83907"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 326902.3313368428,
            "unit": "iter/sec",
            "range": "stddev: 5.469658710219491e-7",
            "extra": "mean: 3.059017645761578 usec\nrounds: 93677"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 203133.45223802788,
            "unit": "iter/sec",
            "range": "stddev: 6.28688107052143e-7",
            "extra": "mean: 4.922872077358383 usec\nrounds: 32035"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 216793.15916413063,
            "unit": "iter/sec",
            "range": "stddev: 5.657361831471245e-7",
            "extra": "mean: 4.61269167281665 usec\nrounds: 28473"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 211633.41284633943,
            "unit": "iter/sec",
            "range": "stddev: 5.558573870030264e-7",
            "extra": "mean: 4.725151792198661 usec\nrounds: 48237"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 173715.36585957225,
            "unit": "iter/sec",
            "range": "stddev: 6.500373811046846e-7",
            "extra": "mean: 5.756543153519179 usec\nrounds: 59578"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 166329.37167317115,
            "unit": "iter/sec",
            "range": "stddev: 7.790462090985906e-7",
            "extra": "mean: 6.012167243467676 usec\nrounds: 65007"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 106341.72111276333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012261104275312068",
            "extra": "mean: 9.403646936836893 usec\nrounds: 32793"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1025710.0568211853,
            "unit": "iter/sec",
            "range": "stddev: 2.6913820922794874e-7",
            "extra": "mean: 974.9343816508299 nsec\nrounds: 88207"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 188426.2793087345,
            "unit": "iter/sec",
            "range": "stddev: 6.181996139256728e-7",
            "extra": "mean: 5.307115353912553 usec\nrounds: 32526"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 307493.6470714838,
            "unit": "iter/sec",
            "range": "stddev: 5.035676744655676e-7",
            "extra": "mean: 3.252099708477969 usec\nrounds: 41160"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 196917.2036164437,
            "unit": "iter/sec",
            "range": "stddev: 6.240963221409231e-7",
            "extra": "mean: 5.078276461551856 usec\nrounds: 48542"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 125075.05946620947,
            "unit": "iter/sec",
            "range": "stddev: 7.747042419010916e-7",
            "extra": "mean: 7.995199077000336 usec\nrounds: 26216"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 268099.96992116835,
            "unit": "iter/sec",
            "range": "stddev: 4.783830326922953e-7",
            "extra": "mean: 3.7299519291033056 usec\nrounds: 41210"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1644210.9901214265,
            "unit": "iter/sec",
            "range": "stddev: 5.0953488248750094e-8",
            "extra": "mean: 608.1944507171486 nsec\nrounds: 80587"
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
          "id": "7bf788372ea7302086bb0486faac34546854b714",
          "message": "Merge pull request #46 from Mixser/MGG-XXX-architecture-doc\n\nMGG-XXX Add the architecture document",
          "timestamp": "2026-10-11T21:13:09+03:00",
          "tree_id": "9b1a0232b4489eb10b00c549ab460e29e7f1114b",
          "url": "https://github.com/Mixser/zenmqtt/commit/7bf788372ea7302086bb0486faac34546854b714"
        },
        "date": 1791742494270,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 441380.13628990896,
            "unit": "iter/sec",
            "range": "stddev: 9.366668089947356e-7",
            "extra": "mean: 2.265620760385049 usec\nrounds: 42427"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 426258.8745918669,
            "unit": "iter/sec",
            "range": "stddev: 8.713964092747814e-7",
            "extra": "mean: 2.3459922117926038 usec\nrounds: 69464"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 324693.4462783845,
            "unit": "iter/sec",
            "range": "stddev: 0.000001018468124168804",
            "extra": "mean: 3.0798281008192068 usec\nrounds: 71094"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 316928.8684524154,
            "unit": "iter/sec",
            "range": "stddev: 0.000001057287278740655",
            "extra": "mean: 3.1552821454323996 usec\nrounds: 78697"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 190361.60172318376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014218679729677618",
            "extra": "mean: 5.253160253684774 usec\nrounds: 27756"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 204099.67444205756,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011476078898419052",
            "extra": "mean: 4.8995668549382865 usec\nrounds: 24613"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 196544.70733198445,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012262799277246142",
            "extra": "mean: 5.087900933963568 usec\nrounds: 37904"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 166161.02340621062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013916002224810841",
            "extra": "mean: 6.01825855125675 usec\nrounds: 43473"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 158758.37630538698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013547365170629402",
            "extra": "mean: 6.298880243499115 usec\nrounds: 52231"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 96079.05646339664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019461584087246735",
            "extra": "mean: 10.408095549741075 usec\nrounds: 25212"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 955165.2373038663,
            "unit": "iter/sec",
            "range": "stddev: 5.389488599916873e-7",
            "extra": "mean: 1.0469392739026895 usec\nrounds: 55528"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 172286.4138916697,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014403676291579467",
            "extra": "mean: 5.804288204807491 usec\nrounds: 24722"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 289764.5404709896,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012397070989411841",
            "extra": "mean: 3.451077893708382 usec\nrounds: 26074"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 178945.86448144334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013777507543374971",
            "extra": "mean: 5.588282260100511 usec\nrounds: 43095"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 114855.97347723735,
            "unit": "iter/sec",
            "range": "stddev: 0.000001764688236089052",
            "extra": "mean: 8.706556304606867 usec\nrounds: 22547"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 250765.2597561717,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010402428593256703",
            "extra": "mean: 3.987793209363757 usec\nrounds: 27361"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1418083.7505414288,
            "unit": "iter/sec",
            "range": "stddev: 2.6435313921186016e-7",
            "extra": "mean: 705.1769682983793 nsec\nrounds: 127763"
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
          "id": "2cf2f7d00a99cb3a155a33a7bd698544d0bfc077",
          "message": "Merge pull request #47 from Mixser/MGG-XXX-session-module\n\nMGG-XXX Move the session to zenmqtt.session",
          "timestamp": "2026-10-11T21:18:15+03:00",
          "tree_id": "fddfeaf21e91106914a95c0087cb7bbf20e6de1f",
          "url": "https://github.com/Mixser/zenmqtt/commit/2cf2f7d00a99cb3a155a33a7bd698544d0bfc077"
        },
        "date": 1791742798421,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 467018.7346378374,
            "unit": "iter/sec",
            "range": "stddev: 4.819468651171199e-7",
            "extra": "mean: 2.14124172293747 usec\nrounds: 42044"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 446213.74082332733,
            "unit": "iter/sec",
            "range": "stddev: 5.646970447480652e-7",
            "extra": "mean: 2.2410784530186336 usec\nrounds: 68079"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 336766.2604250765,
            "unit": "iter/sec",
            "range": "stddev: 7.0118303201611e-7",
            "extra": "mean: 2.969418607249342 usec\nrounds: 62481"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 326804.1340611592,
            "unit": "iter/sec",
            "range": "stddev: 5.87358291027973e-7",
            "extra": "mean: 3.0599368116097843 usec\nrounds: 67908"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 199770.50970315904,
            "unit": "iter/sec",
            "range": "stddev: 7.606107393765584e-7",
            "extra": "mean: 5.0057438482081755 usec\nrounds: 26090"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 213617.20073019425,
            "unit": "iter/sec",
            "range": "stddev: 8.384279096002314e-7",
            "extra": "mean: 4.68127096779549 usec\nrounds: 24955"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 202413.45361624245,
            "unit": "iter/sec",
            "range": "stddev: 7.22053810974135e-7",
            "extra": "mean: 4.940383073033818 usec\nrounds: 37904"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 170401.55443084845,
            "unit": "iter/sec",
            "range": "stddev: 7.940136813812881e-7",
            "extra": "mean: 5.8684910671153245 usec\nrounds: 39573"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 162424.18997164295,
            "unit": "iter/sec",
            "range": "stddev: 0.000001097454010830124",
            "extra": "mean: 6.15671840613511 usec\nrounds: 37895"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 100425.09221009126,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012553303305236317",
            "extra": "mean: 9.957670717473482 usec\nrounds: 24769"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1016495.6661604801,
            "unit": "iter/sec",
            "range": "stddev: 2.718120803896831e-7",
            "extra": "mean: 983.772025095997 nsec\nrounds: 61691"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 182896.1907448763,
            "unit": "iter/sec",
            "range": "stddev: 9.201975177892316e-7",
            "extra": "mean: 5.467582435300196 usec\nrounds: 29138"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 306987.39515559864,
            "unit": "iter/sec",
            "range": "stddev: 5.88318263255552e-7",
            "extra": "mean: 3.2574627355404715 usec\nrounds: 31679"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 190315.79264565182,
            "unit": "iter/sec",
            "range": "stddev: 7.554107401488671e-7",
            "extra": "mean: 5.254424691186274 usec\nrounds: 45247"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 120085.35217629798,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010476799800715935",
            "extra": "mean: 8.327410311724735 usec\nrounds: 22227"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 259085.0089316515,
            "unit": "iter/sec",
            "range": "stddev: 5.712721161523278e-7",
            "extra": "mean: 3.859737018840049 usec\nrounds: 38421"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1673335.7296671474,
            "unit": "iter/sec",
            "range": "stddev: 5.521091158881112e-8",
            "extra": "mean: 597.6087059342931 nsec\nrounds: 80135"
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
          "id": "4bfbfd290a302f182e0c42a0c3f993297f818037",
          "message": "Merge pull request #48 from Mixser/MGG-XXX-graceful-shutdown\n\nMGG-XXX Add graceful shutdown: disconnect(timeout=...)",
          "timestamp": "2026-10-11T21:36:42+03:00",
          "tree_id": "197098a590fd4821a97ec439ec5277e90d54c323",
          "url": "https://github.com/Mixser/zenmqtt/commit/4bfbfd290a302f182e0c42a0c3f993297f818037"
        },
        "date": 1791743902652,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 631124.1491090421,
            "unit": "iter/sec",
            "range": "stddev: 4.752918426682684e-7",
            "extra": "mean: 1.584474308916399 usec\nrounds: 47935"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 607445.6269094538,
            "unit": "iter/sec",
            "range": "stddev: 4.4081917212836886e-7",
            "extra": "mean: 1.6462378782571443 usec\nrounds: 65626"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 445265.2577311292,
            "unit": "iter/sec",
            "range": "stddev: 5.28017597180084e-7",
            "extra": "mean: 2.245852292845727 usec\nrounds: 72224"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 421936.7217894621,
            "unit": "iter/sec",
            "range": "stddev: 6.97753948180547e-7",
            "extra": "mean: 2.3700236276163227 usec\nrounds: 85874"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 238881.85673925738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014172499851938777",
            "extra": "mean: 4.18616973951066 usec\nrounds: 27336"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 269541.63936529047,
            "unit": "iter/sec",
            "range": "stddev: 6.431557561259746e-7",
            "extra": "mean: 3.710001921613201 usec\nrounds: 21336"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 275322.478016173,
            "unit": "iter/sec",
            "range": "stddev: 6.277326728742682e-7",
            "extra": "mean: 3.632104458762201 usec\nrounds: 63336"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 228509.95697193747,
            "unit": "iter/sec",
            "range": "stddev: 9.381409168024517e-7",
            "extra": "mean: 4.376176921353176 usec\nrounds: 44500"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 220953.3277791283,
            "unit": "iter/sec",
            "range": "stddev: 8.580577787215843e-7",
            "extra": "mean: 4.525842674791622 usec\nrounds: 59698"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 135022.62402371713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011897688628425347",
            "extra": "mean: 7.406166242365036 usec\nrounds: 26317"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1348717.5153913028,
            "unit": "iter/sec",
            "range": "stddev: 5.734672996803093e-7",
            "extra": "mean: 741.4451051374316 nsec\nrounds: 60880"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 241065.82834661534,
            "unit": "iter/sec",
            "range": "stddev: 7.906025136529367e-7",
            "extra": "mean: 4.148244514200307 usec\nrounds: 33769"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 420073.0463030366,
            "unit": "iter/sec",
            "range": "stddev: 5.170057575515065e-7",
            "extra": "mean: 2.380538358270694 usec\nrounds: 32770"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 259345.6149955166,
            "unit": "iter/sec",
            "range": "stddev: 7.154149463745125e-7",
            "extra": "mean: 3.8558585230650126 usec\nrounds: 49683"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 162465.7577122992,
            "unit": "iter/sec",
            "range": "stddev: 9.574322152240671e-7",
            "extra": "mean: 6.155143176513783 usec\nrounds: 22818"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 326460.9087458976,
            "unit": "iter/sec",
            "range": "stddev: 6.783035480656085e-7",
            "extra": "mean: 3.0631538821646633 usec\nrounds: 42721"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2240315.241585355,
            "unit": "iter/sec",
            "range": "stddev: 5.181110247999708e-8",
            "extra": "mean: 446.3657531037247 nsec\nrounds: 106068"
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
          "id": "94feeebdeee7b076820c218f31bfa54aae5aa88a",
          "message": "Merge pull request #49 from Mixser/MGG-XXX-guard-metrics-hooks\n\nMGG-XXX Guard metrics hooks",
          "timestamp": "2026-10-11T21:36:51+03:00",
          "tree_id": "d8296d1ccafe03f6b8d154da066bfb3958fc1382",
          "url": "https://github.com/Mixser/zenmqtt/commit/94feeebdeee7b076820c218f31bfa54aae5aa88a"
        },
        "date": 1791744051940,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 640400.4587780468,
            "unit": "iter/sec",
            "range": "stddev: 2.554552698055875e-7",
            "extra": "mean: 1.5615229288063097 usec\nrounds: 40822"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 614893.8620002744,
            "unit": "iter/sec",
            "range": "stddev: 2.662393792421575e-7",
            "extra": "mean: 1.6262969299237433 usec\nrounds: 85926"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 506558.2148328166,
            "unit": "iter/sec",
            "range": "stddev: 4.0727882361808216e-7",
            "extra": "mean: 1.9741067674325208 usec\nrounds: 101885"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 473021.8839259209,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027416273412390315",
            "extra": "mean: 2.1140670949520133 usec\nrounds: 110828"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 271355.54278006573,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011803400145981258",
            "extra": "mean: 3.6852020406692123 usec\nrounds: 490"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 304808.80975911696,
            "unit": "iter/sec",
            "range": "stddev: 3.9379595154258265e-7",
            "extra": "mean: 3.2807450702959535 usec\nrounds: 26878"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 296749.2103469282,
            "unit": "iter/sec",
            "range": "stddev: 4.717410536122938e-7",
            "extra": "mean: 3.3698488997861333 usec\nrounds: 56671"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 252433.87529996008,
            "unit": "iter/sec",
            "range": "stddev: 5.562373523445024e-7",
            "extra": "mean: 3.9614334597990384 usec\nrounds: 55876"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 242838.80827390417,
            "unit": "iter/sec",
            "range": "stddev: 6.112270676573439e-7",
            "extra": "mean: 4.117957945470042 usec\nrounds: 73476"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 145822.7961450118,
            "unit": "iter/sec",
            "range": "stddev: 5.88195295656756e-7",
            "extra": "mean: 6.85763835584089 usec\nrounds: 34863"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1388332.0558097374,
            "unit": "iter/sec",
            "range": "stddev: 2.0248861260906892e-7",
            "extra": "mean: 720.2887780450732 nsec\nrounds: 73579"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 258902.80411762974,
            "unit": "iter/sec",
            "range": "stddev: 6.159210341397989e-7",
            "extra": "mean: 3.8624533380706865 usec\nrounds: 28310"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 420360.2288627313,
            "unit": "iter/sec",
            "range": "stddev: 3.6183516539285356e-7",
            "extra": "mean: 2.3789120172130986 usec\nrounds: 33427"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 256672.48359799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011602953472758093",
            "extra": "mean: 3.896015599265549 usec\nrounds: 38271"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 180142.47362240072,
            "unit": "iter/sec",
            "range": "stddev: 6.344594958044661e-7",
            "extra": "mean: 5.551161699356447 usec\nrounds: 26104"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 367157.17139660113,
            "unit": "iter/sec",
            "range": "stddev: 3.429214120709904e-7",
            "extra": "mean: 2.723629219051275 usec\nrounds: 42397"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2375011.6616708715,
            "unit": "iter/sec",
            "range": "stddev: 4.1349934587005175e-7",
            "extra": "mean: 421.0505641460634 nsec\nrounds: 122220"
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
          "id": "2be6ae47ed78333ae02a5ef9918019b31365903a",
          "message": "Merge pull request #50 from Mixser/MGG-XXX-opentelemetry-tracing\n\nMGG-XXX Add optional OpenTelemetry tracing",
          "timestamp": "2026-10-11T21:45:21+03:00",
          "tree_id": "b36b7c821fa2a54641d5387b1d347ddf87c61037",
          "url": "https://github.com/Mixser/zenmqtt/commit/2be6ae47ed78333ae02a5ef9918019b31365903a"
        },
        "date": 1791744437184,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 344434.95404102735,
            "unit": "iter/sec",
            "range": "stddev: 5.871583719426124e-7",
            "extra": "mean: 2.9033058006095547 usec\nrounds: 53839"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 333184.30592063826,
            "unit": "iter/sec",
            "range": "stddev: 5.992820145969507e-7",
            "extra": "mean: 3.00134184663005 usec\nrounds: 82224"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 257390.18475011096,
            "unit": "iter/sec",
            "range": "stddev: 7.914251330834669e-7",
            "extra": "mean: 3.8851520347244666 usec\nrounds: 73720"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 251323.73974486766,
            "unit": "iter/sec",
            "range": "stddev: 8.104531087486429e-7",
            "extra": "mean: 3.9789317197617464 usec\nrounds: 70196"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 152133.97069207963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012338205989618134",
            "extra": "mean: 6.573153881745505 usec\nrounds: 28093"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 175394.50689968545,
            "unit": "iter/sec",
            "range": "stddev: 8.992756765223765e-7",
            "extra": "mean: 5.7014328309149205 usec\nrounds: 27535"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 167487.6492763253,
            "unit": "iter/sec",
            "range": "stddev: 8.833267273468826e-7",
            "extra": "mean: 5.9705894991109165 usec\nrounds: 64604"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 137364.34878533124,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011556149147341765",
            "extra": "mean: 7.279909298465567 usec\nrounds: 49933"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 132042.9616019387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012699752492211025",
            "extra": "mean: 7.5732927213086505 usec\nrounds: 48951"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 82664.8044524363,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015355912439212094",
            "extra": "mean: 12.0970467011191 usec\nrounds: 27858"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 772370.8803569366,
            "unit": "iter/sec",
            "range": "stddev: 3.897377681358099e-7",
            "extra": "mean: 1.2947147871989542 usec\nrounds: 95157"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 144104.38114358237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010685390999635894",
            "extra": "mean: 6.9394142777909185 usec\nrounds: 37779"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 227445.27187443426,
            "unit": "iter/sec",
            "range": "stddev: 7.833387101646493e-7",
            "extra": "mean: 4.396662070654386 usec\nrounds: 45329"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 146948.25741615327,
            "unit": "iter/sec",
            "range": "stddev: 9.763739196923332e-7",
            "extra": "mean: 6.805116423858152 usec\nrounds: 49148"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 95327.0046446026,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012982773384793786",
            "extra": "mean: 10.49020688028741 usec\nrounds: 25522"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 205200.00462248817,
            "unit": "iter/sec",
            "range": "stddev: 8.336071896851194e-7",
            "extra": "mean: 4.873294237199099 usec\nrounds: 44284"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1322253.7131383417,
            "unit": "iter/sec",
            "range": "stddev: 1.1246913172839265e-7",
            "extra": "mean: 756.2845088379603 nsec\nrounds: 183453"
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
          "id": "fa2c12836c25457d0d31e6e11174751a93c05b16",
          "message": "Merge pull request #51 from Mixser/MGG-XXX-close-broken-connection\n\nMGG-XXX Don't stop reconnecting when closing a broken connection fails",
          "timestamp": "2026-10-11T21:53:31+03:00",
          "tree_id": "35c53d8cf269a5ee7da448bd44a22034734206f0",
          "url": "https://github.com/Mixser/zenmqtt/commit/fa2c12836c25457d0d31e6e11174751a93c05b16"
        },
        "date": 1791744921837,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 338872.425103885,
            "unit": "iter/sec",
            "range": "stddev: 6.595994076844059e-7",
            "extra": "mean: 2.9509630348159464 usec\nrounds: 36602"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 329429.6266397704,
            "unit": "iter/sec",
            "range": "stddev: 7.415947507569714e-7",
            "extra": "mean: 3.0355496868941145 usec\nrounds: 66587"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 253591.23992812185,
            "unit": "iter/sec",
            "range": "stddev: 8.553468579831672e-7",
            "extra": "mean: 3.9433538803763137 usec\nrounds: 58062"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 248710.783556897,
            "unit": "iter/sec",
            "range": "stddev: 9.255121063659215e-7",
            "extra": "mean: 4.020734387543081 usec\nrounds: 67350"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 149747.57616444275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011431171455854964",
            "extra": "mean: 6.677904414972747 usec\nrounds: 27588"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 172703.03510777812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010955563361038625",
            "extra": "mean: 5.790286194889012 usec\nrounds: 26157"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 164452.96492405815,
            "unit": "iter/sec",
            "range": "stddev: 9.957987668614613e-7",
            "extra": "mean: 6.08076601392857 usec\nrounds: 36562"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 134800.4796833431,
            "unit": "iter/sec",
            "range": "stddev: 0.000001260936931495119",
            "extra": "mean: 7.418371227973955 usec\nrounds: 20513"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 130074.29092905512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013415796451612193",
            "extra": "mean: 7.687914290037669 usec\nrounds: 53121"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 80534.74660362174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021596435416113815",
            "extra": "mean: 12.417000638517298 usec\nrounds: 25060"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 762539.0749080572,
            "unit": "iter/sec",
            "range": "stddev: 4.310343341207947e-7",
            "extra": "mean: 1.3114082056982779 usec\nrounds: 80822"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 142111.55079877205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013537682954940685",
            "extra": "mean: 7.036725687526878 usec\nrounds: 26725"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 223707.06032876702,
            "unit": "iter/sec",
            "range": "stddev: 8.64955642758269e-7",
            "extra": "mean: 4.4701316021513495 usec\nrounds: 35159"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 142216.2527885504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017710687302244806",
            "extra": "mean: 7.031545132094132 usec\nrounds: 45954"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 92926.78136927022,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014490632226464045",
            "extra": "mean: 10.76116040247024 usec\nrounds: 22456"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 205453.2494144558,
            "unit": "iter/sec",
            "range": "stddev: 8.899662417543333e-7",
            "extra": "mean: 4.867287340794132 usec\nrounds: 32672"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1311428.6150063823,
            "unit": "iter/sec",
            "range": "stddev: 1.404526461157777e-7",
            "extra": "mean: 762.5272077772477 nsec\nrounds: 194932"
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
          "id": "18921e85ae1f3c49e9d8240bd7c005f76fae3ede",
          "message": "Merge pull request #52 from Mixser/MGG-XXX-integration-tests\n\nMGG-XXX Add integration tests against a real broker",
          "timestamp": "2026-10-11T21:58:59+03:00",
          "tree_id": "3d3bcf56227a75acfc62905a477ea618a8461640",
          "url": "https://github.com/Mixser/zenmqtt/commit/18921e85ae1f3c49e9d8240bd7c005f76fae3ede"
        },
        "date": 1791745240501,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 524509.1694914566,
            "unit": "iter/sec",
            "range": "stddev: 3.938402441139449e-7",
            "extra": "mean: 1.906544362169227 usec\nrounds: 55757"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 510721.88997050235,
            "unit": "iter/sec",
            "range": "stddev: 3.519198076299604e-7",
            "extra": "mean: 1.95801280430286 usec\nrounds: 93328"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 389078.40991198824,
            "unit": "iter/sec",
            "range": "stddev: 4.2754701720680295e-7",
            "extra": "mean: 2.5701760224274732 usec\nrounds: 85580"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 378752.1266951622,
            "unit": "iter/sec",
            "range": "stddev: 3.954547316070418e-7",
            "extra": "mean: 2.6402492013063936 usec\nrounds: 87018"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 232255.9434084686,
            "unit": "iter/sec",
            "range": "stddev: 5.961794445712623e-7",
            "extra": "mean: 4.305594876602576 usec\nrounds: 34313"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 248865.5409481297,
            "unit": "iter/sec",
            "range": "stddev: 4.727121120499621e-7",
            "extra": "mean: 4.018234088135276 usec\nrounds: 30779"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 235272.2052357728,
            "unit": "iter/sec",
            "range": "stddev: 6.790426186986949e-7",
            "extra": "mean: 4.25039582979159 usec\nrounds: 82298"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 197614.02598327195,
            "unit": "iter/sec",
            "range": "stddev: 5.638991215928869e-7",
            "extra": "mean: 5.060369551322486 usec\nrounds: 54669"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 189304.51181105795,
            "unit": "iter/sec",
            "range": "stddev: 5.93377250780523e-7",
            "extra": "mean: 5.282494275667794 usec\nrounds: 57998"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 118105.91208402294,
            "unit": "iter/sec",
            "range": "stddev: 9.46811401657679e-7",
            "extra": "mean: 8.466976651334607 usec\nrounds: 31822"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1151962.8540400728,
            "unit": "iter/sec",
            "range": "stddev: 2.316933004908397e-7",
            "extra": "mean: 868.0835466984715 nsec\nrounds: 103499"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 212769.55156005864,
            "unit": "iter/sec",
            "range": "stddev: 5.722781320530051e-7",
            "extra": "mean: 4.699920607379432 usec\nrounds: 36351"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 348707.02810082654,
            "unit": "iter/sec",
            "range": "stddev: 4.573225309061294e-7",
            "extra": "mean: 2.8677368662350444 usec\nrounds: 50214"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 218198.20611183264,
            "unit": "iter/sec",
            "range": "stddev: 5.984535961802143e-7",
            "extra": "mean: 4.582989098853876 usec\nrounds: 63388"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 136770.33133909624,
            "unit": "iter/sec",
            "range": "stddev: 8.04448162536447e-7",
            "extra": "mean: 7.311527216532719 usec\nrounds: 30735"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 303408.19829963666,
            "unit": "iter/sec",
            "range": "stddev: 4.6457291812400095e-7",
            "extra": "mean: 3.2958898461024133 usec\nrounds: 49567"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1961333.5540900733,
            "unit": "iter/sec",
            "range": "stddev: 4.132821194957855e-8",
            "extra": "mean: 509.857182586127 nsec\nrounds: 93128"
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
          "id": "801d765d9223e0ee6e6783e17e3a4c5c7551d679",
          "message": "Merge pull request #53 from Mixser/MGG-XXX-coverage\n\nMGG-XXX Collect coverage of unit and integration tests in CI",
          "timestamp": "2026-10-11T22:11:47+03:00",
          "tree_id": "6b8111e03d6d50f33e437dd1250273ae363dc55d",
          "url": "https://github.com/Mixser/zenmqtt/commit/801d765d9223e0ee6e6783e17e3a4c5c7551d679"
        },
        "date": 1791746019103,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 351089.5546960486,
            "unit": "iter/sec",
            "range": "stddev: 6.288427602586412e-7",
            "extra": "mean: 2.848276135317491 usec\nrounds: 22967"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 334706.82749158755,
            "unit": "iter/sec",
            "range": "stddev: 6.025815878119239e-7",
            "extra": "mean: 2.987689278687133 usec\nrounds: 69609"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 262597.8423970238,
            "unit": "iter/sec",
            "range": "stddev: 7.032525286504413e-7",
            "extra": "mean: 3.8081044035696676 usec\nrounds: 64107"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 255782.44896374122,
            "unit": "iter/sec",
            "range": "stddev: 8.181403899520174e-7",
            "extra": "mean: 3.9095723887675984 usec\nrounds: 68885"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 155110.51439189917,
            "unit": "iter/sec",
            "range": "stddev: 9.89521414058539e-7",
            "extra": "mean: 6.447016205964089 usec\nrounds: 27459"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 175360.51142768492,
            "unit": "iter/sec",
            "range": "stddev: 9.23900781160686e-7",
            "extra": "mean: 5.702538113390365 usec\nrounds: 28284"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 167175.93153499736,
            "unit": "iter/sec",
            "range": "stddev: 9.452905184388668e-7",
            "extra": "mean: 5.981722313840707 usec\nrounds: 60021"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 137330.39745923318,
            "unit": "iter/sec",
            "range": "stddev: 0.00000120993053037883",
            "extra": "mean: 7.281709064425099 usec\nrounds: 45309"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 131798.27789800175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011500565566704344",
            "extra": "mean: 7.587352550796579 usec\nrounds: 52591"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 82473.07493477431,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014490287580315689",
            "extra": "mean: 12.125169345157467 usec\nrounds: 27565"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 765135.7737370267,
            "unit": "iter/sec",
            "range": "stddev: 4.508561272226727e-7",
            "extra": "mean: 1.3069575810262597 usec\nrounds: 79917"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 145259.54592676283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010129612916527913",
            "extra": "mean: 6.884229147351056 usec\nrounds: 29169"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 232456.49195856327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010428323185776453",
            "extra": "mean: 4.301880285529973 usec\nrounds: 40346"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 150121.77776517268,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010497378436879236",
            "extra": "mean: 6.6612587120054325 usec\nrounds: 47779"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 94879.73867020353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012663298970307894",
            "extra": "mean: 10.539658034640484 usec\nrounds: 25023"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 207174.12882275283,
            "unit": "iter/sec",
            "range": "stddev: 8.641275624499331e-7",
            "extra": "mean: 4.8268575119992265 usec\nrounds: 42565"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1314567.1654268093,
            "unit": "iter/sec",
            "range": "stddev: 1.3399726920546235e-7",
            "extra": "mean: 760.706661705888 nsec\nrounds: 172088"
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
          "id": "1f0921d7dc455b1af205f246a18079936597ce95",
          "message": "Merge pull request #54 from Mixser/MGG-XXX-version-0.1.0rc3\n\nMGG-XXX Set the version 0.1.0rc3",
          "timestamp": "2026-10-11T22:14:52+03:00",
          "tree_id": "2f2f178a99e5abf2e99073cc2b0c119986f42075",
          "url": "https://github.com/Mixser/zenmqtt/commit/1f0921d7dc455b1af205f246a18079936597ce95"
        },
        "date": 1791746201343,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 468812.69009375124,
            "unit": "iter/sec",
            "range": "stddev: 5.608878241093222e-7",
            "extra": "mean: 2.1330480619029832 usec\nrounds: 39678"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 450770.78769903805,
            "unit": "iter/sec",
            "range": "stddev: 4.6330689562675885e-7",
            "extra": "mean: 2.2184223718322684 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 337595.7176950709,
            "unit": "iter/sec",
            "range": "stddev: 5.495672456843928e-7",
            "extra": "mean: 2.9621228812601155 usec\nrounds: 63541"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 327615.9926100332,
            "unit": "iter/sec",
            "range": "stddev: 5.20518081492265e-7",
            "extra": "mean: 3.0523540442371404 usec\nrounds: 70607"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 196985.48013945916,
            "unit": "iter/sec",
            "range": "stddev: 7.022410564031606e-7",
            "extra": "mean: 5.076516295983001 usec\nrounds: 28228"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 212893.5877313297,
            "unit": "iter/sec",
            "range": "stddev: 7.073937519715197e-7",
            "extra": "mean: 4.697182337224705 usec\nrounds: 24696"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 204282.49223160185,
            "unit": "iter/sec",
            "range": "stddev: 7.320949395680881e-7",
            "extra": "mean: 4.895182103350623 usec\nrounds: 52602"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 171074.00110168415,
            "unit": "iter/sec",
            "range": "stddev: 7.24755167444208e-7",
            "extra": "mean: 5.845423580206166 usec\nrounds: 43104"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 163489.97922345443,
            "unit": "iter/sec",
            "range": "stddev: 7.646074091525926e-7",
            "extra": "mean: 6.116582831252443 usec\nrounds: 37510"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 101972.34432153885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011645442638107295",
            "extra": "mean: 9.806580467021561 usec\nrounds: 25905"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 996473.2633781249,
            "unit": "iter/sec",
            "range": "stddev: 3.2246320156001955e-7",
            "extra": "mean: 1.0035392185134193 usec\nrounds: 69406"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 182089.19951678874,
            "unit": "iter/sec",
            "range": "stddev: 9.762066323336488e-7",
            "extra": "mean: 5.491813916771045 usec\nrounds: 27923"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 308530.52060313255,
            "unit": "iter/sec",
            "range": "stddev: 5.293326317922545e-7",
            "extra": "mean: 3.241170429574178 usec\nrounds: 32289"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 190328.7696133877,
            "unit": "iter/sec",
            "range": "stddev: 7.042669378959874e-7",
            "extra": "mean: 5.2540664347869575 usec\nrounds: 44284"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 120761.88321929812,
            "unit": "iter/sec",
            "range": "stddev: 8.810980459158764e-7",
            "extra": "mean: 8.280758574988807 usec\nrounds: 22653"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 257087.846497622,
            "unit": "iter/sec",
            "range": "stddev: 5.910526963443751e-7",
            "extra": "mean: 3.8897210180227235 usec\nrounds: 37368"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1693365.201090544,
            "unit": "iter/sec",
            "range": "stddev: 5.1079607213582046e-8",
            "extra": "mean: 590.5400674089618 nsec\nrounds: 81887"
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
          "id": "82cf04b77e6541d9eac25d81dc1b414198a39b9a",
          "message": "Merge pull request #55 from Mixser/MGG-XXX-coverage-pages-workflow\n\nMGG-XXX Publish coverage in a separate workflow",
          "timestamp": "2026-10-11T22:19:16+03:00",
          "tree_id": "785e80dbd13d64c20c3ed9534b3ef63b98cb3f33",
          "url": "https://github.com/Mixser/zenmqtt/commit/82cf04b77e6541d9eac25d81dc1b414198a39b9a"
        },
        "date": 1791746454415,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 654411.7150232622,
            "unit": "iter/sec",
            "range": "stddev: 2.912967617124198e-7",
            "extra": "mean: 1.5280900036522929 usec\nrounds: 65864"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 637941.6388252984,
            "unit": "iter/sec",
            "range": "stddev: 3.253896702874309e-7",
            "extra": "mean: 1.5675415102882977 usec\nrounds: 124969"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 511495.2350776296,
            "unit": "iter/sec",
            "range": "stddev: 3.564071151273443e-7",
            "extra": "mean: 1.955052425558236 usec\nrounds: 98864"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 510690.3146904073,
            "unit": "iter/sec",
            "range": "stddev: 3.539056787933564e-7",
            "extra": "mean: 1.9581338655428073 usec\nrounds: 117745"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 293371.30675051536,
            "unit": "iter/sec",
            "range": "stddev: 3.7349080379406077e-7",
            "extra": "mean: 3.408649642926415 usec\nrounds: 30526"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 309062.54747066734,
            "unit": "iter/sec",
            "range": "stddev: 3.9938213231163425e-7",
            "extra": "mean: 3.2355910095994678 usec\nrounds: 28497"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 310474.79531471716,
            "unit": "iter/sec",
            "range": "stddev: 3.8367322108530355e-7",
            "extra": "mean: 3.220873369080849 usec\nrounds: 60625"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 260573.61918586903,
            "unit": "iter/sec",
            "range": "stddev: 5.07701299931225e-7",
            "extra": "mean: 3.837687034951504 usec\nrounds: 67196"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 246073.16185021203,
            "unit": "iter/sec",
            "range": "stddev: 5.035427447079413e-7",
            "extra": "mean: 4.063832042799991 usec\nrounds: 83557"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 145803.90082197508,
            "unit": "iter/sec",
            "range": "stddev: 5.703551967033094e-7",
            "extra": "mean: 6.858527065205126 usec\nrounds: 35396"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1345065.862744698,
            "unit": "iter/sec",
            "range": "stddev: 1.8149478589909687e-7",
            "extra": "mean: 743.4580177058633 nsec\nrounds: 81713"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 262848.76860810723,
            "unit": "iter/sec",
            "range": "stddev: 4.217528579055759e-7",
            "extra": "mean: 3.804469030977063 usec\nrounds: 42042"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 428220.07128550374,
            "unit": "iter/sec",
            "range": "stddev: 3.306494127717817e-7",
            "extra": "mean: 2.335247848140397 usec\nrounds: 35086"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 261863.0775440906,
            "unit": "iter/sec",
            "range": "stddev: 4.514610435907376e-7",
            "extra": "mean: 3.8187896108859687 usec\nrounds: 52555"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 181382.91633524714,
            "unit": "iter/sec",
            "range": "stddev: 6.02849156125715e-7",
            "extra": "mean: 5.513198377248032 usec\nrounds: 27977"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 368264.29626154434,
            "unit": "iter/sec",
            "range": "stddev: 3.47274825873151e-7",
            "extra": "mean: 2.7154410844373347 usec\nrounds: 46660"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2373895.8391440567,
            "unit": "iter/sec",
            "range": "stddev: 7.393568403214782e-8",
            "extra": "mean: 421.24847413716543 nsec\nrounds: 106792"
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
          "id": "510ae0488b225a062e82e2e7f31cd07ba172e107",
          "message": "Merge pull request #56 from Mixser/MGG-XXX-manual-perf-compare\n\nMGG-XXX Make the performance comparison a manual step of CI",
          "timestamp": "2026-10-11T22:30:35+03:00",
          "tree_id": "780b9b2745e659995a6840f53beb75ccc60c1a69",
          "url": "https://github.com/Mixser/zenmqtt/commit/510ae0488b225a062e82e2e7f31cd07ba172e107"
        },
        "date": 1791747147093,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 344166.17968518985,
            "unit": "iter/sec",
            "range": "stddev: 6.302192993638644e-7",
            "extra": "mean: 2.905573118528683 usec\nrounds: 44127"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 330254.4176691661,
            "unit": "iter/sec",
            "range": "stddev: 7.556014298458556e-7",
            "extra": "mean: 3.027968579671672 usec\nrounds: 75047"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 255707.9672357774,
            "unit": "iter/sec",
            "range": "stddev: 9.683769397759398e-7",
            "extra": "mean: 3.9107111554249796 usec\nrounds: 70692"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 252662.63843038163,
            "unit": "iter/sec",
            "range": "stddev: 7.916145613869071e-7",
            "extra": "mean: 3.957846740666958 usec\nrounds: 72224"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 153164.99869361887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010369813352710113",
            "extra": "mean: 6.528906790253913 usec\nrounds: 28806"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 174530.38452650222,
            "unit": "iter/sec",
            "range": "stddev: 8.565633421963959e-7",
            "extra": "mean: 5.729661357894684 usec\nrounds: 26497"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 168008.91233436478,
            "unit": "iter/sec",
            "range": "stddev: 9.195237613706545e-7",
            "extra": "mean: 5.952065197647604 usec\nrounds: 63898"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 136169.96818199113,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010980070739732498",
            "extra": "mean: 7.3437631905994145 usec\nrounds: 52253"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 131007.48595155183,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011307860633832032",
            "extra": "mean: 7.63315159234345 usec\nrounds: 54541"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 81711.65310576605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014259478603299307",
            "extra": "mean: 12.238156517352778 usec\nrounds: 27473"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 742642.8545937602,
            "unit": "iter/sec",
            "range": "stddev: 4.550454674470636e-7",
            "extra": "mean: 1.3465422764311374 usec\nrounds: 97371"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 142809.6797226881,
            "unit": "iter/sec",
            "range": "stddev: 9.576762562392699e-7",
            "extra": "mean: 7.002326466538041 usec\nrounds: 36601"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 231880.0560019759,
            "unit": "iter/sec",
            "range": "stddev: 8.114983299532496e-7",
            "extra": "mean: 4.312574428529027 usec\nrounds: 48429"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 147694.39488103613,
            "unit": "iter/sec",
            "range": "stddev: 9.542776049481032e-7",
            "extra": "mean: 6.770737649221375 usec\nrounds: 58235"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 94367.2118621662,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012082847868755557",
            "extra": "mean: 10.596900981461774 usec\nrounds: 27611"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 208565.27783553195,
            "unit": "iter/sec",
            "range": "stddev: 8.237139405119754e-7",
            "extra": "mean: 4.794661941709054 usec\nrounds: 47690"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1295138.4893129373,
            "unit": "iter/sec",
            "range": "stddev: 1.159133576482319e-7",
            "extra": "mean: 772.1182006802172 nsec\nrounds: 177305"
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
          "id": "1b442a62c299f5f5d60b35b134eac1e891b1f1c4",
          "message": "Merge pull request #57 from Mixser/MGG-XXX-mqtt5-names\n\nMGG-XXX Use the names of the MQTT 5 specification",
          "timestamp": "2026-10-11T22:44:49+03:00",
          "tree_id": "fb977d5d25f23285524d4407c8b3d35acd64bdf1",
          "url": "https://github.com/Mixser/zenmqtt/commit/1b442a62c299f5f5d60b35b134eac1e891b1f1c4"
        },
        "date": 1791748000833,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 345925.8594930202,
            "unit": "iter/sec",
            "range": "stddev: 6.371173639610832e-7",
            "extra": "mean: 2.890792846379202 usec\nrounds: 47081"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 331404.65110764507,
            "unit": "iter/sec",
            "range": "stddev: 6.27668528681166e-7",
            "extra": "mean: 3.0174591595432534 usec\nrounds: 73175"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 258334.62270984886,
            "unit": "iter/sec",
            "range": "stddev: 7.784349699028132e-7",
            "extra": "mean: 3.8709484215097256 usec\nrounds: 63573"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 248463.58413509323,
            "unit": "iter/sec",
            "range": "stddev: 8.213216231756023e-7",
            "extra": "mean: 4.024734664763934 usec\nrounds: 68649"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 151834.3257602107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010534499241168029",
            "extra": "mean: 6.586125996168235 usec\nrounds: 26477"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 173534.90181970605,
            "unit": "iter/sec",
            "range": "stddev: 9.097455307241346e-7",
            "extra": "mean: 5.762529551772526 usec\nrounds: 26462"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 167898.54660345204,
            "unit": "iter/sec",
            "range": "stddev: 9.568860464394067e-7",
            "extra": "mean: 5.9559777033795935 usec\nrounds: 63821"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 136809.23922518207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011451672135189043",
            "extra": "mean: 7.309447853547693 usec\nrounds: 48335"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 132579.65960027254,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012587663471289308",
            "extra": "mean: 7.542635144900797 usec\nrounds: 52588"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 82345.13291386225,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015840621621664968",
            "extra": "mean: 12.144008572383477 usec\nrounds: 26014"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 765907.2545207548,
            "unit": "iter/sec",
            "range": "stddev: 4.117722393259805e-7",
            "extra": "mean: 1.305641112677177 usec\nrounds: 90736"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 145018.9742122063,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010976741636330373",
            "extra": "mean: 6.895649382657332 usec\nrounds: 31667"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 228697.94101343324,
            "unit": "iter/sec",
            "range": "stddev: 8.356796197409407e-7",
            "extra": "mean: 4.3725798123441 usec\nrounds: 37300"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 149090.02905751023,
            "unit": "iter/sec",
            "range": "stddev: 0.000001027953476923613",
            "extra": "mean: 6.707356664437019 usec\nrounds: 49562"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 93860.37476483452,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018043300411323909",
            "extra": "mean: 10.654123238965132 usec\nrounds: 24489"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 208574.39033352456,
            "unit": "iter/sec",
            "range": "stddev: 0.00000103563799450806",
            "extra": "mean: 4.794452465621174 usec\nrounds: 38509"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1347794.1731448118,
            "unit": "iter/sec",
            "range": "stddev: 1.209392804861748e-7",
            "extra": "mean: 741.9530518274148 nsec\nrounds: 174186"
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
          "id": "25c9dcc0c6e019010136893cdeda4a6978f09b05",
          "message": "Merge pull request #58 from Mixser/MGG-XXX-client-lifecycle\n\nMGG-XXX Add async with to the client, move credentials to connect()",
          "timestamp": "2026-10-11T22:47:50+03:00",
          "tree_id": "87080561ebce2f2aa5c290d98050c109a15372e5",
          "url": "https://github.com/Mixser/zenmqtt/commit/25c9dcc0c6e019010136893cdeda4a6978f09b05"
        },
        "date": 1791748173020,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 664223.8155460666,
            "unit": "iter/sec",
            "range": "stddev: 2.5203407462228093e-7",
            "extra": "mean: 1.5055166294781037 usec\nrounds: 27782"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 643501.0501794912,
            "unit": "iter/sec",
            "range": "stddev: 2.696746313038391e-7",
            "extra": "mean: 1.5539990179053647 usec\nrounds: 120149"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 538153.5770365527,
            "unit": "iter/sec",
            "range": "stddev: 3.32735303882596e-7",
            "extra": "mean: 1.8582056176355723 usec\nrounds: 82454"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 518393.0287996852,
            "unit": "iter/sec",
            "range": "stddev: 3.644365620109005e-7",
            "extra": "mean: 1.9290382864820794 usec\nrounds: 106565"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 301707.6205450821,
            "unit": "iter/sec",
            "range": "stddev: 4.193288403820129e-7",
            "extra": "mean: 3.314467159276068 usec\nrounds: 34241"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 333287.04439518973,
            "unit": "iter/sec",
            "range": "stddev: 3.373811055205008e-7",
            "extra": "mean: 3.000416658303304 usec\nrounds: 29967"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 320549.30286889744,
            "unit": "iter/sec",
            "range": "stddev: 3.410158083198773e-7",
            "extra": "mean: 3.1196449065714966 usec\nrounds: 57751"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 267965.61358690454,
            "unit": "iter/sec",
            "range": "stddev: 4.6409716617433184e-7",
            "extra": "mean: 3.7318221043898516 usec\nrounds: 60187"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 258830.34908849082,
            "unit": "iter/sec",
            "range": "stddev: 4.314178876633561e-7",
            "extra": "mean: 3.8635345643261974 usec\nrounds: 75873"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 156784.23056923135,
            "unit": "iter/sec",
            "range": "stddev: 5.402342100390512e-7",
            "extra": "mean: 6.378192477453459 usec\nrounds: 35121"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1500751.5561816008,
            "unit": "iter/sec",
            "range": "stddev: 1.592091198590575e-7",
            "extra": "mean: 666.3328089722756 nsec\nrounds: 71834"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 273806.02320126566,
            "unit": "iter/sec",
            "range": "stddev: 5.367712447224127e-7",
            "extra": "mean: 3.652220606063634 usec\nrounds: 31350"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 445705.35820156353,
            "unit": "iter/sec",
            "range": "stddev: 3.558650637563668e-7",
            "extra": "mean: 2.2436346828654576 usec\nrounds: 37050"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 275513.808463482,
            "unit": "iter/sec",
            "range": "stddev: 4.3522499217771795e-7",
            "extra": "mean: 3.629582145362943 usec\nrounds: 53454"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 192320.9824060176,
            "unit": "iter/sec",
            "range": "stddev: 5.12363527853096e-7",
            "extra": "mean: 5.199640660574697 usec\nrounds: 26827"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 392554.37458158965,
            "unit": "iter/sec",
            "range": "stddev: 3.4911449529960416e-7",
            "extra": "mean: 2.5474177967469247 usec\nrounds: 41884"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2739056.330196349,
            "unit": "iter/sec",
            "range": "stddev: 3.5246141970095054e-8",
            "extra": "mean: 365.0892422239141 nsec\nrounds: 127861"
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
          "id": "b1314f61724eade353993bdadcd1fe1038eef6f7",
          "message": "Merge pull request #58 from Mixser/MGG-XXX-client-lifecycle\n\nMGG-XXX Add async with to the client, move credentials to connect()",
          "timestamp": "2026-10-11T22:47:50+03:00",
          "tree_id": "79392d25b75f137d0859a189be07c812fc9edcff",
          "url": "https://github.com/Mixser/zenmqtt/commit/b1314f61724eade353993bdadcd1fe1038eef6f7"
        },
        "date": 1791748386979,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 600449.0203385095,
            "unit": "iter/sec",
            "range": "stddev: 3.1867046021254567e-7",
            "extra": "mean: 1.6654203206730849 usec\nrounds: 41849"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 573505.2225502911,
            "unit": "iter/sec",
            "range": "stddev: 3.654530585187525e-7",
            "extra": "mean: 1.7436632844477877 usec\nrounds: 79435"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 476008.5351296014,
            "unit": "iter/sec",
            "range": "stddev: 4.2109796361670796e-7",
            "extra": "mean: 2.100802666758345 usec\nrounds: 87897"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 461977.53376167256,
            "unit": "iter/sec",
            "range": "stddev: 4.555662602952945e-7",
            "extra": "mean: 2.164607425511487 usec\nrounds: 92627"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 267778.0508465706,
            "unit": "iter/sec",
            "range": "stddev: 0.000001078826481563757",
            "extra": "mean: 3.734436025800234 usec\nrounds: 24166"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 280728.47408721375,
            "unit": "iter/sec",
            "range": "stddev: 4.987436632602835e-7",
            "extra": "mean: 3.562160921693075 usec\nrounds: 26777"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 268655.2960736941,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021320145953431925",
            "extra": "mean: 3.722241901107704 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 235113.29312631104,
            "unit": "iter/sec",
            "range": "stddev: 8.335795805114932e-7",
            "extra": "mean: 4.2532686548810545 usec\nrounds: 73801"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 228692.15181439617,
            "unit": "iter/sec",
            "range": "stddev: 6.738045344691915e-7",
            "extra": "mean: 4.372690501471988 usec\nrounds: 81981"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 133533.29444963325,
            "unit": "iter/sec",
            "range": "stddev: 8.320447617248389e-7",
            "extra": "mean: 7.488769030387287 usec\nrounds: 30714"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1298506.462678937,
            "unit": "iter/sec",
            "range": "stddev: 2.0222024210749343e-7",
            "extra": "mean: 770.1155356107423 nsec\nrounds: 71069"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 237577.37197479897,
            "unit": "iter/sec",
            "range": "stddev: 7.101769756125649e-7",
            "extra": "mean: 4.209155070989148 usec\nrounds: 26691"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 391264.37636937347,
            "unit": "iter/sec",
            "range": "stddev: 9.273706917487205e-7",
            "extra": "mean: 2.555816630379734 usec\nrounds: 34455"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 207737.22282155984,
            "unit": "iter/sec",
            "range": "stddev: 0.000004844723820159638",
            "extra": "mean: 4.813773797577772 usec\nrounds: 45698"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 171694.3042537499,
            "unit": "iter/sec",
            "range": "stddev: 6.657333985730044e-7",
            "extra": "mean: 5.824305030655433 usec\nrounds: 23814"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 334767.2184745714,
            "unit": "iter/sec",
            "range": "stddev: 4.206094441959881e-7",
            "extra": "mean: 2.9871503086732463 usec\nrounds: 30770"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2106280.826551022,
            "unit": "iter/sec",
            "range": "stddev: 7.298885990856295e-8",
            "extra": "mean: 474.77049944829673 nsec\nrounds: 102093"
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
          "id": "aa7686c9c15577b5967019791e855fb209b6e4a1",
          "message": "Merge pull request #60 from Mixser/MGG-XXX-qos-reason-code-enums\n\nMGG-XXX Add QoS and ReasonCode enums",
          "timestamp": "2026-10-11T22:56:10+03:00",
          "tree_id": "c859e5fcc9faee5e7a20cb438ed310ad24e21315",
          "url": "https://github.com/Mixser/zenmqtt/commit/aa7686c9c15577b5967019791e855fb209b6e4a1"
        },
        "date": 1791748681298,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 472138.6412380566,
            "unit": "iter/sec",
            "range": "stddev: 3.9017586808609096e-7",
            "extra": "mean: 2.118021938170045 usec\nrounds: 40295"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 455774.38658272784,
            "unit": "iter/sec",
            "range": "stddev: 4.050121178686072e-7",
            "extra": "mean: 2.1940680069753973 usec\nrounds: 59935"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 341608.8847395711,
            "unit": "iter/sec",
            "range": "stddev: 5.170115494095724e-7",
            "extra": "mean: 2.9273243310470685 usec\nrounds: 72093"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 331034.11904806853,
            "unit": "iter/sec",
            "range": "stddev: 6.232494423221332e-7",
            "extra": "mean: 3.020836652353629 usec\nrounds: 86521"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 208424.94034354395,
            "unit": "iter/sec",
            "range": "stddev: 6.671481303034779e-7",
            "extra": "mean: 4.797890302147688 usec\nrounds: 28934"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 222540.65208904198,
            "unit": "iter/sec",
            "range": "stddev: 7.644885493854843e-7",
            "extra": "mean: 4.493561021830224 usec\nrounds: 26892"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 212178.71927956838,
            "unit": "iter/sec",
            "range": "stddev: 5.992416675833393e-7",
            "extra": "mean: 4.71300799342837 usec\nrounds: 72935"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 173616.64211990312,
            "unit": "iter/sec",
            "range": "stddev: 7.949574268980068e-7",
            "extra": "mean: 5.75981650024875 usec\nrounds: 57684"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 165786.96893418668,
            "unit": "iter/sec",
            "range": "stddev: 8.559377978527724e-7",
            "extra": "mean: 6.031837160838469 usec\nrounds: 62878"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 102543.33231383149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026629053952276707",
            "extra": "mean: 9.751974871847574 usec\nrounds: 31598"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1069638.6202842745,
            "unit": "iter/sec",
            "range": "stddev: 2.5638584436980246e-7",
            "extra": "mean: 934.8951889323454 nsec\nrounds: 80335"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 187457.81943470926,
            "unit": "iter/sec",
            "range": "stddev: 6.14489960062292e-7",
            "extra": "mean: 5.334533406051357 usec\nrounds: 32075"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 306450.3014960132,
            "unit": "iter/sec",
            "range": "stddev: 4.369625042508468e-7",
            "extra": "mean: 3.263171858922154 usec\nrounds: 36047"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 193236.59688520138,
            "unit": "iter/sec",
            "range": "stddev: 5.840004469481765e-7",
            "extra": "mean: 5.175003162543187 usec\nrounds: 50277"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 128522.72440202211,
            "unit": "iter/sec",
            "range": "stddev: 7.7054630175137e-7",
            "extra": "mean: 7.780725195895913 usec\nrounds: 27052"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 230521.09399629894,
            "unit": "iter/sec",
            "range": "stddev: 5.062290211681388e-7",
            "extra": "mean: 4.337997806031821 usec\nrounds: 36008"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1645138.1912242302,
            "unit": "iter/sec",
            "range": "stddev: 6.453757765643089e-8",
            "extra": "mean: 607.8516718743546 nsec\nrounds: 79372"
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
          "id": "1b7ab8fdf0ecc5f5330c13df64bde9a597774f14",
          "message": "Merge pull request #62 from Mixser/MGG-XXX-version-0.1.0rc4\n\nMGG-XXX Set the version 0.1.0rc4",
          "timestamp": "2026-10-11T22:56:38+03:00",
          "tree_id": "e0a2075d1873af9190f304929f46446429c0fc26",
          "url": "https://github.com/Mixser/zenmqtt/commit/1b7ab8fdf0ecc5f5330c13df64bde9a597774f14"
        },
        "date": 1791748855715,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 366163.996108014,
            "unit": "iter/sec",
            "range": "stddev: 7.212555652747041e-7",
            "extra": "mean: 2.7310167319263465 usec\nrounds: 42912"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 349070.7766327621,
            "unit": "iter/sec",
            "range": "stddev: 6.341257031351144e-7",
            "extra": "mean: 2.8647485465448868 usec\nrounds: 79466"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 266487.31936928304,
            "unit": "iter/sec",
            "range": "stddev: 7.754912937405503e-7",
            "extra": "mean: 3.75252376873609 usec\nrounds: 70092"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 257402.15544649892,
            "unit": "iter/sec",
            "range": "stddev: 7.724655899388671e-7",
            "extra": "mean: 3.88497135257226 usec\nrounds: 27437"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 157394.91641697264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010558374895395882",
            "extra": "mean: 6.353445351124221 usec\nrounds: 27695"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 177781.89387652912,
            "unit": "iter/sec",
            "range": "stddev: 9.95076625486218e-7",
            "extra": "mean: 5.624869767078237 usec\nrounds: 27566"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 168493.73073127534,
            "unit": "iter/sec",
            "range": "stddev: 9.675172125045733e-7",
            "extra": "mean: 5.93493891826079 usec\nrounds: 58610"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 139765.1375779704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012980138267608235",
            "extra": "mean: 7.154860055442172 usec\nrounds: 48312"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 132129.70848591335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013036552114222385",
            "extra": "mean: 7.56832064082403 usec\nrounds: 51185"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 82887.99527552948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017198348882058484",
            "extra": "mean: 12.064473228914295 usec\nrounds: 26129"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 783929.5430369483,
            "unit": "iter/sec",
            "range": "stddev: 4.049794305650899e-7",
            "extra": "mean: 1.2756248426688874 usec\nrounds: 87398"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 145165.75307936835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011394539638571262",
            "extra": "mean: 6.888677107287537 usec\nrounds: 30394"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 230359.58433769847,
            "unit": "iter/sec",
            "range": "stddev: 8.961695667006607e-7",
            "extra": "mean: 4.341039262052313 usec\nrounds: 39733"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 147519.19419219962,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010491744195514071",
            "extra": "mean: 6.778778893661262 usec\nrounds: 45702"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 97349.35816032041,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015022796385997208",
            "extra": "mean: 10.272281388369748 usec\nrounds: 24603"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 181023.97761246376,
            "unit": "iter/sec",
            "range": "stddev: 0.000001007686925703988",
            "extra": "mean: 5.524130080385265 usec\nrounds: 34840"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1349686.5096157892,
            "unit": "iter/sec",
            "range": "stddev: 1.3463005428760609e-7",
            "extra": "mean: 740.912791878365 nsec\nrounds: 188680"
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
          "id": "5ddc404e27d3cdd820e897853f8613a48378409b",
          "message": "Merge pull request #63 from Mixser/MGG-XXX-rename-processing-to-trace\n\nMGG-XXX Rename client.processing() to client.trace()",
          "timestamp": "2026-10-11T23:42:55+03:00",
          "tree_id": "7254415f32310e6c07b1ea7c82a021fc42cc0734",
          "url": "https://github.com/Mixser/zenmqtt/commit/5ddc404e27d3cdd820e897853f8613a48378409b"
        },
        "date": 1791751479518,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 455323.12337843346,
            "unit": "iter/sec",
            "range": "stddev: 3.7766242584023023e-7",
            "extra": "mean: 2.196242511428238 usec\nrounds: 56319"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 440096.35868645366,
            "unit": "iter/sec",
            "range": "stddev: 4.3891611421720784e-7",
            "extra": "mean: 2.2722296612148276 usec\nrounds: 89558"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 332576.6598924217,
            "unit": "iter/sec",
            "range": "stddev: 5.801996851172249e-7",
            "extra": "mean: 3.0068255551170346 usec\nrounds: 76517"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 327750.5098397293,
            "unit": "iter/sec",
            "range": "stddev: 5.187914490504274e-7",
            "extra": "mean: 3.0511012797173134 usec\nrounds: 89238"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 199000.4506976754,
            "unit": "iter/sec",
            "range": "stddev: 6.747443193610227e-7",
            "extra": "mean: 5.025114247199448 usec\nrounds: 28876"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 219695.55766975897,
            "unit": "iter/sec",
            "range": "stddev: 6.076793759566038e-7",
            "extra": "mean: 4.551753392770808 usec\nrounds: 27485"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 205489.95341357714,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018639570672867989",
            "extra": "mean: 4.8664179605285165 usec\nrounds: 75421"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 172445.42022902795,
            "unit": "iter/sec",
            "range": "stddev: 6.875355137358288e-7",
            "extra": "mean: 5.798936258625376 usec\nrounds: 60369"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 166445.68822597057,
            "unit": "iter/sec",
            "range": "stddev: 7.159257369458723e-7",
            "extra": "mean: 6.007965785466167 usec\nrounds: 65177"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 102641.65592723018,
            "unit": "iter/sec",
            "range": "stddev: 8.974811850944546e-7",
            "extra": "mean: 9.742633153823723 usec\nrounds: 20987"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1019231.8643575251,
            "unit": "iter/sec",
            "range": "stddev: 2.999915302384491e-7",
            "extra": "mean: 981.1310212817494 nsec\nrounds: 82727"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 187096.933366513,
            "unit": "iter/sec",
            "range": "stddev: 7.131849825337524e-7",
            "extra": "mean: 5.344823039087728 usec\nrounds: 31312"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 300871.5514111459,
            "unit": "iter/sec",
            "range": "stddev: 4.5436632159633974e-7",
            "extra": "mean: 3.3236774806717557 usec\nrounds: 37852"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 192474.93752963629,
            "unit": "iter/sec",
            "range": "stddev: 8.006240698915411e-7",
            "extra": "mean: 5.195481618722568 usec\nrounds: 45617"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 127646.62825801753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014909542280334912",
            "extra": "mean: 7.834127807736978 usec\nrounds: 25421"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 228666.39832129076,
            "unit": "iter/sec",
            "range": "stddev: 7.252647838215288e-7",
            "extra": "mean: 4.373182974592257 usec\nrounds: 35688"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1641246.2373592288,
            "unit": "iter/sec",
            "range": "stddev: 7.708779492856489e-8",
            "extra": "mean: 609.2930952329273 nsec\nrounds: 141844"
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
        "date": 1791737648764,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 320354.0344764173,
            "unit": "iter/sec",
            "range": "stddev: 6.968276139481135e-7",
            "extra": "mean: 3.12154645292477 usec\nrounds: 50083"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 313261.76824180735,
            "unit": "iter/sec",
            "range": "stddev: 6.95188041599403e-7",
            "extra": "mean: 3.192218461935317 usec\nrounds: 73015"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 244137.4726760864,
            "unit": "iter/sec",
            "range": "stddev: 8.147711330085529e-7",
            "extra": "mean: 4.0960528879020845 usec\nrounds: 67350"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 235958.22505910182,
            "unit": "iter/sec",
            "range": "stddev: 8.544367288754737e-7",
            "extra": "mean: 4.2380383211881005 usec\nrounds: 74267"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 143412.34344068897,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012630001374962285",
            "extra": "mean: 6.972900491048526 usec\nrounds: 28510"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 186999.97139240618,
            "unit": "iter/sec",
            "range": "stddev: 8.65566218111158e-7",
            "extra": "mean: 5.3475944009722385 usec\nrounds: 25826"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 179795.67277392256,
            "unit": "iter/sec",
            "range": "stddev: 9.145984476682539e-7",
            "extra": "mean: 5.5618691182707884 usec\nrounds: 64692"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 148284.7197044772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010609300073305777",
            "extra": "mean: 6.7437831894813005 usec\nrounds: 24104"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 140945.09749125972,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010845410776015518",
            "extra": "mean: 7.094961213972071 usec\nrounds: 54994"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 82964.60394895829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016171517569014716",
            "extra": "mean: 12.053333016755227 usec\nrounds: 15789"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 735943.5351566391,
            "unit": "iter/sec",
            "range": "stddev: 3.972129841718204e-7",
            "extra": "mean: 1.3587998973143487 usec\nrounds: 79854"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 145372.39704336316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010675845393863325",
            "extra": "mean: 6.878884990124431 usec\nrounds: 28841"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 215358.98747157565,
            "unit": "iter/sec",
            "range": "stddev: 8.826670607753072e-7",
            "extra": "mean: 4.643409647029409 usec\nrounds: 35472"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 152368.34445848563,
            "unit": "iter/sec",
            "range": "stddev: 9.950508634181033e-7",
            "extra": "mean: 6.563043022840354 usec\nrounds: 41815"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 90789.97216950297,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012700448461022334",
            "extra": "mean: 11.014432278192807 usec\nrounds: 23316"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 225888.0564019906,
            "unit": "iter/sec",
            "range": "stddev: 8.24694968598364e-7",
            "extra": "mean: 4.42697155364602 usec\nrounds: 38142"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1400106.5126839764,
            "unit": "iter/sec",
            "range": "stddev: 1.0299081922539151e-7",
            "extra": "mean: 714.231375213747 nsec\nrounds: 193799"
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
          "id": "f4544aec9bba3e8d00b3b7eae6c0b546592c5c21",
          "message": "Merge pull request #35 from Mixser/MGG-XXX-version-0.1.0rc1\n\nMGG-XXX Set the version 0.1.0rc1",
          "timestamp": "2026-10-11T19:53:49+03:00",
          "tree_id": "2f1365c137ff8d4d2e9eb35503de06e47c4f453a",
          "url": "https://github.com/Mixser/zenmqtt/commit/f4544aec9bba3e8d00b3b7eae6c0b546592c5c21"
        },
        "date": 1791737810431,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 443595.15051214857,
            "unit": "iter/sec",
            "range": "stddev: 4.384703940194633e-7",
            "extra": "mean: 2.2543077823223707 usec\nrounds: 58980"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 423009.71454308974,
            "unit": "iter/sec",
            "range": "stddev: 4.770172903827961e-7",
            "extra": "mean: 2.364011902374728 usec\nrounds: 89310"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 329550.24612186715,
            "unit": "iter/sec",
            "range": "stddev: 5.372950810265608e-7",
            "extra": "mean: 3.034438638016376 usec\nrounds: 82380"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 319191.57541491033,
            "unit": "iter/sec",
            "range": "stddev: 5.316807086576449e-7",
            "extra": "mean: 3.132914766626034 usec\nrounds: 96007"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 194845.98055299115,
            "unit": "iter/sec",
            "range": "stddev: 6.825734918215559e-7",
            "extra": "mean: 5.132258808531263 usec\nrounds: 31390"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 250727.55647930838,
            "unit": "iter/sec",
            "range": "stddev: 5.50479368885753e-7",
            "extra": "mean: 3.988392875685072 usec\nrounds: 25069"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 235212.96386265394,
            "unit": "iter/sec",
            "range": "stddev: 5.765048535378435e-7",
            "extra": "mean: 4.251466345978796 usec\nrounds: 84403"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 186162.7977934769,
            "unit": "iter/sec",
            "range": "stddev: 6.483020603689976e-7",
            "extra": "mean: 5.371642518551791 usec\nrounds: 64132"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 178975.80280397664,
            "unit": "iter/sec",
            "range": "stddev: 6.370555301071159e-7",
            "extra": "mean: 5.587347475654297 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 109673.03513573976,
            "unit": "iter/sec",
            "range": "stddev: 8.823842040687106e-7",
            "extra": "mean: 9.118011540050142 usec\nrounds: 32149"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1025760.809943195,
            "unit": "iter/sec",
            "range": "stddev: 2.6908065146753286e-7",
            "extra": "mean: 974.8861433450343 nsec\nrounds: 80979"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 195900.8247454068,
            "unit": "iter/sec",
            "range": "stddev: 6.749906653823579e-7",
            "extra": "mean: 5.1046237365238385 usec\nrounds: 29878"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 287829.4712114273,
            "unit": "iter/sec",
            "range": "stddev: 5.511123774742958e-7",
            "extra": "mean: 3.474279391165759 usec\nrounds: 35674"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 203851.94004513213,
            "unit": "iter/sec",
            "range": "stddev: 6.387312586057247e-7",
            "extra": "mean: 4.905521133517804 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 124290.82414401066,
            "unit": "iter/sec",
            "range": "stddev: 7.805845261645803e-7",
            "extra": "mean: 8.045646224385326 usec\nrounds: 25943"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 293208.29706433404,
            "unit": "iter/sec",
            "range": "stddev: 4.916046561162126e-7",
            "extra": "mean: 3.410544687896693 usec\nrounds: 38657"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1771406.1658712376,
            "unit": "iter/sec",
            "range": "stddev: 4.642431971326312e-8",
            "extra": "mean: 564.5232692910753 nsec\nrounds: 84474"
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
          "id": "c33ba496e712c3d63b01519e117ede58bacbb393",
          "message": "Merge pull request #36 from Mixser/MGG-XXX-publish-to-pypi-only\n\nMGG-XXX Publish pre-releases to PyPI",
          "timestamp": "2026-10-11T19:59:20+03:00",
          "tree_id": "41635ebaeae2ce7324038f03e2c29c5e0f303766",
          "url": "https://github.com/Mixser/zenmqtt/commit/c33ba496e712c3d63b01519e117ede58bacbb393"
        },
        "date": 1791738110817,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 589164.4415940488,
            "unit": "iter/sec",
            "range": "stddev: 3.024191261351466e-7",
            "extra": "mean: 1.6973189985709096 usec\nrounds: 57320"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 582305.034621174,
            "unit": "iter/sec",
            "range": "stddev: 3.360210827774971e-7",
            "extra": "mean: 1.7173129898328339 usec\nrounds: 88677"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 490770.24623909104,
            "unit": "iter/sec",
            "range": "stddev: 3.8073598459328654e-7",
            "extra": "mean: 2.0376133387532724 usec\nrounds: 102723"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 477251.96712931443,
            "unit": "iter/sec",
            "range": "stddev: 3.665574625963323e-7",
            "extra": "mean: 2.0953292367028498 usec\nrounds: 103907"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 267819.51215729123,
            "unit": "iter/sec",
            "range": "stddev: 4.332537839650779e-7",
            "extra": "mean: 3.7338578953601296 usec\nrounds: 32462"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 350496.33994064736,
            "unit": "iter/sec",
            "range": "stddev: 3.427711448912312e-7",
            "extra": "mean: 2.8530968402390133 usec\nrounds: 25382"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 331762.88915961003,
            "unit": "iter/sec",
            "range": "stddev: 3.687728456671384e-7",
            "extra": "mean: 3.014200902738411 usec\nrounds: 93493"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 286232.25211221556,
            "unit": "iter/sec",
            "range": "stddev: 7.657715508168933e-7",
            "extra": "mean: 3.4936663937086876 usec\nrounds: 84261"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 280220.74684758985,
            "unit": "iter/sec",
            "range": "stddev: 4.6618573065986364e-7",
            "extra": "mean: 3.568615140919217 usec\nrounds: 97220"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 159189.29100835152,
            "unit": "iter/sec",
            "range": "stddev: 6.56615342190401e-7",
            "extra": "mean: 6.281829598371269 usec\nrounds: 34360"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1421795.3316436664,
            "unit": "iter/sec",
            "range": "stddev: 1.7117006177037554e-7",
            "extra": "mean: 703.3361115653335 nsec\nrounds: 69828"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 279077.0113616095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013370488325115128",
            "extra": "mean: 3.5832403218058912 usec\nrounds: 29086"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 394005.8031887027,
            "unit": "iter/sec",
            "range": "stddev: 3.858171053455687e-7",
            "extra": "mean: 2.5380336835319817 usec\nrounds: 36457"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 285966.86986955843,
            "unit": "iter/sec",
            "range": "stddev: 4.620449553136366e-7",
            "extra": "mean: 3.4969085770534964 usec\nrounds: 47592"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 177452.98846192413,
            "unit": "iter/sec",
            "range": "stddev: 5.247843026640287e-7",
            "extra": "mean: 5.635295345925203 usec\nrounds: 25956"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 401505.48364512704,
            "unit": "iter/sec",
            "range": "stddev: 5.135800702500825e-7",
            "extra": "mean: 2.490626008196331 usec\nrounds: 40295"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2695814.3153413385,
            "unit": "iter/sec",
            "range": "stddev: 2.8562294421269592e-8",
            "extra": "mean: 370.9454298499717 nsec\nrounds: 130685"
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
          "id": "3962593e42ede0cc7e26351b0e5899a63a47f3ae",
          "message": "Merge pull request #33 from Mixser/MGG-XXX-wait-across-reconnect-in-client\n\nMGG-XXX Move wait_across_reconnect from the protocol to the client",
          "timestamp": "2026-10-11T20:03:26+03:00",
          "tree_id": "7b96a0f229e58f18e1ddcdc45ab8bcf2f21dd4fa",
          "url": "https://github.com/Mixser/zenmqtt/commit/3962593e42ede0cc7e26351b0e5899a63a47f3ae"
        },
        "date": 1791738368403,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 323856.26286343444,
            "unit": "iter/sec",
            "range": "stddev: 6.734405955713989e-7",
            "extra": "mean: 3.0877895988742563 usec\nrounds: 50437"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 312130.9400763846,
            "unit": "iter/sec",
            "range": "stddev: 7.653429792755138e-7",
            "extra": "mean: 3.2037836420679104 usec\nrounds: 68456"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 242570.85109437903,
            "unit": "iter/sec",
            "range": "stddev: 9.946026277159807e-7",
            "extra": "mean: 4.122506869594656 usec\nrounds: 66234"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 235689.07903339085,
            "unit": "iter/sec",
            "range": "stddev: 8.686649509030767e-7",
            "extra": "mean: 4.242877964907007 usec\nrounds: 72643"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 143159.85575799178,
            "unit": "iter/sec",
            "range": "stddev: 0.000001069656237799121",
            "extra": "mean: 6.985198432237005 usec\nrounds: 28957"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 194724.11654862037,
            "unit": "iter/sec",
            "range": "stddev: 8.836654985225798e-7",
            "extra": "mean: 5.135470725067131 usec\nrounds: 25346"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 182681.08029191106,
            "unit": "iter/sec",
            "range": "stddev: 8.897208962999315e-7",
            "extra": "mean: 5.474020617800557 usec\nrounds: 63780"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 152844.32077762196,
            "unit": "iter/sec",
            "range": "stddev: 0.000001020011679122712",
            "extra": "mean: 6.542604886542899 usec\nrounds: 46126"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 146005.77281952533,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012091639797844189",
            "extra": "mean: 6.849044258243673 usec\nrounds: 50951"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 85029.96532957195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016747071580788727",
            "extra": "mean: 11.760559893492246 usec\nrounds: 26639"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 730466.5012287822,
            "unit": "iter/sec",
            "range": "stddev: 4.783192925942643e-7",
            "extra": "mean: 1.368988171692763 usec\nrounds: 72961"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 152626.61106957815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010702232072246773",
            "extra": "mean: 6.551937391469226 usec\nrounds: 28782"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 214671.0442276768,
            "unit": "iter/sec",
            "range": "stddev: 9.010911452734918e-7",
            "extra": "mean: 4.658290099615929 usec\nrounds: 35736"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 155585.42411979623,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010193790576024734",
            "extra": "mean: 6.427337301404464 usec\nrounds: 42674"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 89600.7946470519,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012856994992737484",
            "extra": "mean: 11.16061530412892 usec\nrounds: 22935"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 228476.28257489664,
            "unit": "iter/sec",
            "range": "stddev: 7.764933760732808e-7",
            "extra": "mean: 4.376821912235861 usec\nrounds: 36482"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1417586.7886949237,
            "unit": "iter/sec",
            "range": "stddev: 6.431336069019478e-8",
            "extra": "mean: 705.4241814151163 nsec\nrounds: 61539"
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
          "id": "1411fdb76cbaff99404974874af24ab2806da921",
          "message": "Merge pull request #37 from Mixser/MGG-XXX-readme-pypi\n\nMGG-XXX Update README for PyPI",
          "timestamp": "2026-10-11T20:29:21+03:00",
          "tree_id": "ff7867dedc2f4e1a4677a1056f21399e780909bf",
          "url": "https://github.com/Mixser/zenmqtt/commit/1411fdb76cbaff99404974874af24ab2806da921"
        },
        "date": 1791739946888,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 435887.6866067161,
            "unit": "iter/sec",
            "range": "stddev: 4.279651847547951e-7",
            "extra": "mean: 2.2941689584873726 usec\nrounds: 57156"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 421706.1681682749,
            "unit": "iter/sec",
            "range": "stddev: 4.84219441701126e-7",
            "extra": "mean: 2.371319358081968 usec\nrounds: 79688"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 325284.20614416007,
            "unit": "iter/sec",
            "range": "stddev: 5.413543887135904e-7",
            "extra": "mean: 3.074234718782559 usec\nrounds: 86904"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 317211.309150499,
            "unit": "iter/sec",
            "range": "stddev: 5.462683135394058e-7",
            "extra": "mean: 3.1524727245003614 usec\nrounds: 99851"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 195262.91518620658,
            "unit": "iter/sec",
            "range": "stddev: 6.410020640466241e-7",
            "extra": "mean: 5.121300166221427 usec\nrounds: 32482"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 247426.77639616135,
            "unit": "iter/sec",
            "range": "stddev: 5.199151099446113e-7",
            "extra": "mean: 4.04159975959463 usec\nrounds: 24950"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 236335.64008157756,
            "unit": "iter/sec",
            "range": "stddev: 5.596673114351612e-7",
            "extra": "mean: 4.2312704070144616 usec\nrounds: 81847"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 188502.6830975548,
            "unit": "iter/sec",
            "range": "stddev: 6.465212123986692e-7",
            "extra": "mean: 5.304964277258989 usec\nrounds: 63517"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 180118.48443750106,
            "unit": "iter/sec",
            "range": "stddev: 6.427494161087814e-7",
            "extra": "mean: 5.551901034049551 usec\nrounds: 73207"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 111497.10433450018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012818247835421938",
            "extra": "mean: 8.96884278716262 usec\nrounds: 31028"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1025510.4940619766,
            "unit": "iter/sec",
            "range": "stddev: 3.619286342618218e-7",
            "extra": "mean: 975.1241023766308 nsec\nrounds: 76453"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 196176.02263435922,
            "unit": "iter/sec",
            "range": "stddev: 5.920026679224363e-7",
            "extra": "mean: 5.097462914027166 usec\nrounds: 29472"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 285163.15217416355,
            "unit": "iter/sec",
            "range": "stddev: 5.543147601330635e-7",
            "extra": "mean: 3.5067644342395594 usec\nrounds: 35956"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 204261.15974191052,
            "unit": "iter/sec",
            "range": "stddev: 6.33595373668626e-7",
            "extra": "mean: 4.89569334308846 usec\nrounds: 44121"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 125254.39371325335,
            "unit": "iter/sec",
            "range": "stddev: 7.921038608557698e-7",
            "extra": "mean: 7.983751869729329 usec\nrounds: 26071"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 295713.3473499715,
            "unit": "iter/sec",
            "range": "stddev: 4.640683468305289e-7",
            "extra": "mean: 3.381653242782166 usec\nrounds: 36403"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1840463.093149777,
            "unit": "iter/sec",
            "range": "stddev: 4.6746082937026545e-8",
            "extra": "mean: 543.3415121020413 nsec\nrounds: 87124"
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
          "id": "86cef29cd99647f19250e6cad17fa2f9dfeb3eb7",
          "message": "Merge pull request #38 from Mixser/MGG-XXX-ack-auth-qos2-fixes\n\nMGG-XXX Warn about blocked acks, close on AUTH, don't deliver duplicates before ack",
          "timestamp": "2026-10-11T20:29:46+03:00",
          "tree_id": "c43e340d393ff43f2ec19295c6cc405a35e5bf07",
          "url": "https://github.com/Mixser/zenmqtt/commit/86cef29cd99647f19250e6cad17fa2f9dfeb3eb7"
        },
        "date": 1791740092355,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 601398.0330731852,
            "unit": "iter/sec",
            "range": "stddev: 3.4945126365442774e-7",
            "extra": "mean: 1.6627922690234476 usec\nrounds: 44755"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 581702.72569129,
            "unit": "iter/sec",
            "range": "stddev: 3.355848799790688e-7",
            "extra": "mean: 1.719091136820116 usec\nrounds: 86222"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 489479.09447663603,
            "unit": "iter/sec",
            "range": "stddev: 4.067603947963921e-7",
            "extra": "mean: 2.0429881710662765 usec\nrounds: 95275"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 471370.82453135186,
            "unit": "iter/sec",
            "range": "stddev: 4.2463227677963677e-7",
            "extra": "mean: 2.1214719875678005 usec\nrounds: 100848"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 267312.74675416085,
            "unit": "iter/sec",
            "range": "stddev: 6.377416709714199e-7",
            "extra": "mean: 3.740936457922333 usec\nrounds: 32986"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 341508.44955146726,
            "unit": "iter/sec",
            "range": "stddev: 5.709346443436263e-7",
            "extra": "mean: 2.92818523615854 usec\nrounds: 24709"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 327885.5191274356,
            "unit": "iter/sec",
            "range": "stddev: 4.442735094268278e-7",
            "extra": "mean: 3.049844966197916 usec\nrounds: 59716"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 287126.2769373183,
            "unit": "iter/sec",
            "range": "stddev: 4.646475219673682e-7",
            "extra": "mean: 3.482788167863532 usec\nrounds: 60699"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 272914.24253708776,
            "unit": "iter/sec",
            "range": "stddev: 4.726464128753723e-7",
            "extra": "mean: 3.6641546835508403 usec\nrounds: 81573"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 155371.40540687888,
            "unit": "iter/sec",
            "range": "stddev: 6.8137925598999e-7",
            "extra": "mean: 6.436190735233745 usec\nrounds: 34194"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1405296.2570739528,
            "unit": "iter/sec",
            "range": "stddev: 1.8535079330157607e-7",
            "extra": "mean: 711.5937262098433 nsec\nrounds: 74851"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 273347.494822083,
            "unit": "iter/sec",
            "range": "stddev: 4.49997719500814e-7",
            "extra": "mean: 3.658347045217598 usec\nrounds: 28175"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 398012.0928812974,
            "unit": "iter/sec",
            "range": "stddev: 4.256420311575185e-7",
            "extra": "mean: 2.512486474370111 usec\nrounds: 35673"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 287061.9531347985,
            "unit": "iter/sec",
            "range": "stddev: 4.694952941416673e-7",
            "extra": "mean: 3.4835685784190984 usec\nrounds: 43206"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 181923.850870882,
            "unit": "iter/sec",
            "range": "stddev: 6.209515332952231e-7",
            "extra": "mean: 5.496805367811484 usec\nrounds: 24703"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 407127.5899929431,
            "unit": "iter/sec",
            "range": "stddev: 3.7220426160588755e-7",
            "extra": "mean: 2.4562324553276613 usec\nrounds: 37091"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2692064.7976744403,
            "unit": "iter/sec",
            "range": "stddev: 3.5328099326859465e-8",
            "extra": "mean: 371.4620839973307 nsec\nrounds: 129837"
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
          "id": "89f441ef64ca9daad96c7c60e5fbc86771806347",
          "message": "MGG-XXX Moved instrumentation to the zenmqtt.instrumentation package: MetricsCollector, the OpenTelemetry adapter and the monitors; Moved the warning about a blocked ack from IncomingFlow to AckBlockedMonitor; The protocol only calls metrics hooks; (#40)",
          "timestamp": "2026-10-11T20:45:37+03:00",
          "tree_id": "544502dc1d01bace68568232aad49bedaca2f672",
          "url": "https://github.com/Mixser/zenmqtt/commit/89f441ef64ca9daad96c7c60e5fbc86771806347"
        },
        "date": 1791740910543,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 322173.3387252315,
            "unit": "iter/sec",
            "range": "stddev: 7.611546050084765e-7",
            "extra": "mean: 3.1039191633819807 usec\nrounds: 39252"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 310814.1260125701,
            "unit": "iter/sec",
            "range": "stddev: 6.935015723564154e-7",
            "extra": "mean: 3.217356987048772 usec\nrounds: 63739"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 244270.91947323238,
            "unit": "iter/sec",
            "range": "stddev: 8.679959904205315e-7",
            "extra": "mean: 4.093815187483181 usec\nrounds: 66186"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 238965.88796257495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011559357353787037",
            "extra": "mean: 4.1846976927376875 usec\nrounds: 72380"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 143610.35275532072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011691756935056859",
            "extra": "mean: 6.9632862869139505 usec\nrounds: 27944"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 187102.61121368603,
            "unit": "iter/sec",
            "range": "stddev: 9.219701707729522e-7",
            "extra": "mean: 5.344660844192712 usec\nrounds: 26392"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 177291.43594209207,
            "unit": "iter/sec",
            "range": "stddev: 9.187230172003384e-7",
            "extra": "mean: 5.6404303720943725 usec\nrounds: 61010"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 146245.44313137123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011278895293252023",
            "extra": "mean: 6.837819890919317 usec\nrounds: 46383"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 138390.52474533202,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010925749148072207",
            "extra": "mean: 7.225928233455379 usec\nrounds: 52838"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 82332.93278620379,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016923694865907008",
            "extra": "mean: 12.145808076541226 usec\nrounds: 16517"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 726977.7075050658,
            "unit": "iter/sec",
            "range": "stddev: 3.928451992543437e-7",
            "extra": "mean: 1.3755579981013815 usec\nrounds: 84020"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 147938.5992641779,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011070058745562146",
            "extra": "mean: 6.759561094763871 usec\nrounds: 28865"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 215352.36998253845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010524496106177223",
            "extra": "mean: 4.643552332770164 usec\nrounds: 37510"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 151731.72616741856,
            "unit": "iter/sec",
            "range": "stddev: 9.709697983486703e-7",
            "extra": "mean: 6.590579473778705 usec\nrounds: 41693"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 90345.6448763321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015684186053213678",
            "extra": "mean: 11.068602159725916 usec\nrounds: 22225"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 221746.20274856055,
            "unit": "iter/sec",
            "range": "stddev: 8.106498022795713e-7",
            "extra": "mean: 4.5096600870947325 usec\nrounds: 38554"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1382034.01453132,
            "unit": "iter/sec",
            "range": "stddev: 1.1087303296153277e-7",
            "extra": "mean: 723.5711925217147 nsec\nrounds: 191242"
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
          "id": "6fe668a7561183bd62d2f35df4bdc3e5e437464e",
          "message": "Merge pull request #43 from Mixser/MGG-XXX-context-ownership\n\nMGG-XXX Make the state of ProtocolContext read-only for the parts",
          "timestamp": "2026-10-11T20:56:59+03:00",
          "tree_id": "f2a884ba9d705f98c1090502a7770b95fa144dcc",
          "url": "https://github.com/Mixser/zenmqtt/commit/6fe668a7561183bd62d2f35df4bdc3e5e437464e"
        },
        "date": 1791741558125,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 487794.8732602715,
            "unit": "iter/sec",
            "range": "stddev: 4.731427497543617e-7",
            "extra": "mean: 2.0500420459860647 usec\nrounds: 43500"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 467969.19113841996,
            "unit": "iter/sec",
            "range": "stddev: 4.974456365200968e-7",
            "extra": "mean: 2.13689281033078 usec\nrounds: 68682"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 363717.09459169715,
            "unit": "iter/sec",
            "range": "stddev: 5.915908259288286e-7",
            "extra": "mean: 2.749389607663571 usec\nrounds: 72881"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 353929.2168851137,
            "unit": "iter/sec",
            "range": "stddev: 5.423559212567476e-7",
            "extra": "mean: 2.825423707036321 usec\nrounds: 76121"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 212573.58380131246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010369990012177538",
            "extra": "mean: 4.7042533795482155 usec\nrounds: 28850"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 262484.7116251337,
            "unit": "iter/sec",
            "range": "stddev: 5.947021601632646e-7",
            "extra": "mean: 3.8097456945536137 usec\nrounds: 24679"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 243674.16740138593,
            "unit": "iter/sec",
            "range": "stddev: 6.386959017659634e-7",
            "extra": "mean: 4.103840840677937 usec\nrounds: 71419"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 211856.1439425016,
            "unit": "iter/sec",
            "range": "stddev: 7.192087786509768e-7",
            "extra": "mean: 4.7201840899709895 usec\nrounds: 50383"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 201363.4107202679,
            "unit": "iter/sec",
            "range": "stddev: 8.192149554529337e-7",
            "extra": "mean: 4.9661455197994755 usec\nrounds: 58803"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 119592.59900706686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012235478784652841",
            "extra": "mean: 8.36172144683392 usec\nrounds: 27011"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1099025.695154901,
            "unit": "iter/sec",
            "range": "stddev: 3.848561371301706e-7",
            "extra": "mean: 909.8968335395072 nsec\nrounds: 63984"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 213279.80984871168,
            "unit": "iter/sec",
            "range": "stddev: 8.305827415867914e-7",
            "extra": "mean: 4.6886763482644795 usec\nrounds: 27406"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 325040.19085282536,
            "unit": "iter/sec",
            "range": "stddev: 7.157256362250126e-7",
            "extra": "mean: 3.0765426188565987 usec\nrounds: 35008"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 220637.0721193788,
            "unit": "iter/sec",
            "range": "stddev: 6.96451750286327e-7",
            "extra": "mean: 4.532329904463815 usec\nrounds: 35386"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 126373.29736281486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012912709795028232",
            "extra": "mean: 7.913064079740063 usec\nrounds: 16261"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 317096.9865601338,
            "unit": "iter/sec",
            "range": "stddev: 5.372506935430619e-7",
            "extra": "mean: 3.15360928165226 usec\nrounds: 34347"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1949768.0942886188,
            "unit": "iter/sec",
            "range": "stddev: 4.494762470745855e-8",
            "extra": "mean: 512.8815077696993 nsec\nrounds: 85179"
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
          "id": "8c0a3b2a7b4220e61be82df854d2d9890f4ef032",
          "message": "Merge pull request #45 from Mixser/MGG-XXX-version-0.1.0rc2\n\nMGG-XXX Set the version 0.1.0rc2",
          "timestamp": "2026-10-11T20:58:34+03:00",
          "tree_id": "0c73cbfbc1c6336d8106f380b8c34c537745cb08",
          "url": "https://github.com/Mixser/zenmqtt/commit/8c0a3b2a7b4220e61be82df854d2d9890f4ef032"
        },
        "date": 1791741712323,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 369942.75961819134,
            "unit": "iter/sec",
            "range": "stddev: 4.0570972445666273e-7",
            "extra": "mean: 2.7031208855988287 usec\nrounds: 35273"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 353436.75456330855,
            "unit": "iter/sec",
            "range": "stddev: 4.310367781508715e-7",
            "extra": "mean: 2.8293605209100496 usec\nrounds: 53897"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 285537.95373388776,
            "unit": "iter/sec",
            "range": "stddev: 5.070746770269764e-7",
            "extra": "mean: 3.502161400694102 usec\nrounds: 57918"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 276466.40630788,
            "unit": "iter/sec",
            "range": "stddev: 5.178034366517732e-7",
            "extra": "mean: 3.6170759889227724 usec\nrounds: 66944"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 164147.68653623268,
            "unit": "iter/sec",
            "range": "stddev: 7.745430315535824e-7",
            "extra": "mean: 6.092074893661494 usec\nrounds: 28467"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 213899.57492358686,
            "unit": "iter/sec",
            "range": "stddev: 5.11560923124163e-7",
            "extra": "mean: 4.675091104586058 usec\nrounds: 24653"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 201751.1936709407,
            "unit": "iter/sec",
            "range": "stddev: 5.304294909766391e-7",
            "extra": "mean: 4.9566001658013255 usec\nrounds: 54275"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 172596.50779197572,
            "unit": "iter/sec",
            "range": "stddev: 6.56104889756947e-7",
            "extra": "mean: 5.7938599847296075 usec\nrounds: 43231"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 164951.28343559612,
            "unit": "iter/sec",
            "range": "stddev: 6.900132088915351e-7",
            "extra": "mean: 6.062395994575221 usec\nrounds: 47286"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 96357.01920304424,
            "unit": "iter/sec",
            "range": "stddev: 7.863864842178111e-7",
            "extra": "mean: 10.378071138676388 usec\nrounds: 25865"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 865333.0857062103,
            "unit": "iter/sec",
            "range": "stddev: 1.995291987485644e-7",
            "extra": "mean: 1.155624367677894 usec\nrounds: 33799"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 172061.84170389085,
            "unit": "iter/sec",
            "range": "stddev: 5.970620036364315e-7",
            "extra": "mean: 5.811863862999595 usec\nrounds: 19238"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 240666.47273881518,
            "unit": "iter/sec",
            "range": "stddev: 5.34265290095599e-7",
            "extra": "mean: 4.155128001918474 usec\nrounds: 34937"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 170693.35103683439,
            "unit": "iter/sec",
            "range": "stddev: 5.506767817778828e-7",
            "extra": "mean: 5.858459008073533 usec\nrounds: 42801"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 101829.42280439302,
            "unit": "iter/sec",
            "range": "stddev: 9.348913619578927e-7",
            "extra": "mean: 9.820344380434404 usec\nrounds: 21906"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 257488.24174255916,
            "unit": "iter/sec",
            "range": "stddev: 4.890749044095219e-7",
            "extra": "mean: 3.8836724862947953 usec\nrounds: 37803"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1559350.0764450873,
            "unit": "iter/sec",
            "range": "stddev: 4.055185562299661e-8",
            "extra": "mean: 641.29281493976 nsec\nrounds: 70403"
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
          "id": "7bf788372ea7302086bb0486faac34546854b714",
          "message": "Merge pull request #46 from Mixser/MGG-XXX-architecture-doc\n\nMGG-XXX Add the architecture document",
          "timestamp": "2026-10-11T21:13:09+03:00",
          "tree_id": "9b1a0232b4489eb10b00c549ab460e29e7f1114b",
          "url": "https://github.com/Mixser/zenmqtt/commit/7bf788372ea7302086bb0486faac34546854b714"
        },
        "date": 1791742546980,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 437633.86237844435,
            "unit": "iter/sec",
            "range": "stddev: 6.045628811955035e-7",
            "extra": "mean: 2.2850151370033815 usec\nrounds: 30323"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 419969.15201635467,
            "unit": "iter/sec",
            "range": "stddev: 6.660984673032581e-7",
            "extra": "mean: 2.381127268988217 usec\nrounds: 73325"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 326628.690701068,
            "unit": "iter/sec",
            "range": "stddev: 6.948006142155903e-7",
            "extra": "mean: 3.0615804075680675 usec\nrounds: 70068"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 315519.05959134153,
            "unit": "iter/sec",
            "range": "stddev: 5.975835619887076e-7",
            "extra": "mean: 3.169380643106613 usec\nrounds: 68358"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 189952.39635323727,
            "unit": "iter/sec",
            "range": "stddev: 9.02799821182962e-7",
            "extra": "mean: 5.26447688577927 usec\nrounds: 26023"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 229994.85871959632,
            "unit": "iter/sec",
            "range": "stddev: 7.156605821239084e-7",
            "extra": "mean: 4.347923277794543 usec\nrounds: 23357"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 221756.11809111488,
            "unit": "iter/sec",
            "range": "stddev: 6.432911221102451e-7",
            "extra": "mean: 4.509458447451363 usec\nrounds: 59503"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 184960.83494464538,
            "unit": "iter/sec",
            "range": "stddev: 7.498547605547565e-7",
            "extra": "mean: 5.406549988267934 usec\nrounds: 42550"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 178915.9779165333,
            "unit": "iter/sec",
            "range": "stddev: 7.525611107800877e-7",
            "extra": "mean: 5.589215740510965 usec\nrounds: 44141"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 106242.2529383537,
            "unit": "iter/sec",
            "range": "stddev: 0.000001237006580724818",
            "extra": "mean: 9.412451000829611 usec\nrounds: 25878"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 983433.0163301128,
            "unit": "iter/sec",
            "range": "stddev: 2.6745840783089525e-7",
            "extra": "mean: 1.016846072274155 usec\nrounds: 59411"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 188236.03494228824,
            "unit": "iter/sec",
            "range": "stddev: 8.488458051121608e-7",
            "extra": "mean: 5.312479092043096 usec\nrounds: 27358"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 290333.14010252757,
            "unit": "iter/sec",
            "range": "stddev: 7.909342579601595e-7",
            "extra": "mean: 3.4443191695128648 usec\nrounds: 31983"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 193787.46344294414,
            "unit": "iter/sec",
            "range": "stddev: 7.444413387953953e-7",
            "extra": "mean: 5.160292529936669 usec\nrounds: 39531"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 114927.35459458602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011350786956007054",
            "extra": "mean: 8.701148682379118 usec\nrounds: 21630"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 275867.4611686533,
            "unit": "iter/sec",
            "range": "stddev: 8.883820090299756e-7",
            "extra": "mean: 3.62492914446566 usec\nrounds: 34154"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1690632.803966787,
            "unit": "iter/sec",
            "range": "stddev: 4.945501585747517e-8",
            "extra": "mean: 591.4944970035287 nsec\nrounds: 82237"
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
          "id": "2cf2f7d00a99cb3a155a33a7bd698544d0bfc077",
          "message": "Merge pull request #47 from Mixser/MGG-XXX-session-module\n\nMGG-XXX Move the session to zenmqtt.session",
          "timestamp": "2026-10-11T21:18:15+03:00",
          "tree_id": "fddfeaf21e91106914a95c0087cb7bbf20e6de1f",
          "url": "https://github.com/Mixser/zenmqtt/commit/2cf2f7d00a99cb3a155a33a7bd698544d0bfc077"
        },
        "date": 1791742855360,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 326716.7244039213,
            "unit": "iter/sec",
            "range": "stddev: 6.475207198769434e-7",
            "extra": "mean: 3.060755465838032 usec\nrounds: 49535"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 316499.156790475,
            "unit": "iter/sec",
            "range": "stddev: 6.768871639622553e-7",
            "extra": "mean: 3.159566079545697 usec\nrounds: 76249"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 248157.8372616053,
            "unit": "iter/sec",
            "range": "stddev: 7.74559639190128e-7",
            "extra": "mean: 4.029693404145084 usec\nrounds: 62858"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 240567.74052723518,
            "unit": "iter/sec",
            "range": "stddev: 8.342167350205668e-7",
            "extra": "mean: 4.156833321909127 usec\nrounds: 73015"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 144443.64670342914,
            "unit": "iter/sec",
            "range": "stddev: 0.000001121796717692969",
            "extra": "mean: 6.923115158212492 usec\nrounds: 26329"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 190176.44923474875,
            "unit": "iter/sec",
            "range": "stddev: 8.967029189158256e-7",
            "extra": "mean: 5.258274639283156 usec\nrounds: 25437"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 179260.93708059462,
            "unit": "iter/sec",
            "range": "stddev: 9.04064675700641e-7",
            "extra": "mean: 5.578460183717584 usec\nrounds: 64107"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 149254.6629822308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010305590769495152",
            "extra": "mean: 6.699958178988705 usec\nrounds: 51290"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 140707.2452458036,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011536948945041775",
            "extra": "mean: 7.10695457261696 usec\nrounds: 53580"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 84323.39767345114,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015227006025178254",
            "extra": "mean: 11.859104680204858 usec\nrounds: 27264"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 732576.3439301357,
            "unit": "iter/sec",
            "range": "stddev: 4.7151447201397375e-7",
            "extra": "mean: 1.3650454430935979 usec\nrounds: 75501"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 148119.34290756274,
            "unit": "iter/sec",
            "range": "stddev: 0.000001037487598880821",
            "extra": "mean: 6.751312694008323 usec\nrounds: 23192"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 218202.17296558237,
            "unit": "iter/sec",
            "range": "stddev: 9.606182745734879e-7",
            "extra": "mean: 4.582905781409119 usec\nrounds: 39143"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 155382.4928494754,
            "unit": "iter/sec",
            "range": "stddev: 9.604805108797328e-7",
            "extra": "mean: 6.43573147567362 usec\nrounds: 48126"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 91246.38016224888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012991445481249018",
            "extra": "mean: 10.959338860586683 usec\nrounds: 23942"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 222682.12796918067,
            "unit": "iter/sec",
            "range": "stddev: 7.884858294112422e-7",
            "extra": "mean: 4.490706142966267 usec\nrounds: 39281"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1389313.4508715298,
            "unit": "iter/sec",
            "range": "stddev: 1.0495967200233119e-7",
            "extra": "mean: 719.779974326665 nsec\nrounds: 185529"
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
          "id": "4bfbfd290a302f182e0c42a0c3f993297f818037",
          "message": "Merge pull request #48 from Mixser/MGG-XXX-graceful-shutdown\n\nMGG-XXX Add graceful shutdown: disconnect(timeout=...)",
          "timestamp": "2026-10-11T21:36:42+03:00",
          "tree_id": "197098a590fd4821a97ec439ec5277e90d54c323",
          "url": "https://github.com/Mixser/zenmqtt/commit/4bfbfd290a302f182e0c42a0c3f993297f818037"
        },
        "date": 1791743948147,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 616774.7125187018,
            "unit": "iter/sec",
            "range": "stddev: 0.000001044871760849622",
            "extra": "mean: 1.6213375478970826 usec\nrounds: 45161"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 607852.7223262591,
            "unit": "iter/sec",
            "range": "stddev: 5.955749316009955e-7",
            "extra": "mean: 1.6451353482024211 usec\nrounds: 77888"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 517199.9845755632,
            "unit": "iter/sec",
            "range": "stddev: 3.406301877606204e-7",
            "extra": "mean: 1.9334880700366674 usec\nrounds: 107251"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 497989.7528629531,
            "unit": "iter/sec",
            "range": "stddev: 3.77771886745256e-7",
            "extra": "mean: 2.008073447798835 usec\nrounds: 83978"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 277259.30386373505,
            "unit": "iter/sec",
            "range": "stddev: 4.598196345907834e-7",
            "extra": "mean: 3.606731987221143 usec\nrounds: 32241"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 366356.23864627077,
            "unit": "iter/sec",
            "range": "stddev: 3.257577301138891e-7",
            "extra": "mean: 2.7295836524993193 usec\nrounds: 27417"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 346873.39327913366,
            "unit": "iter/sec",
            "range": "stddev: 3.818647098760061e-7",
            "extra": "mean: 2.8828962364238944 usec\nrounds: 97992"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 302624.32043489505,
            "unit": "iter/sec",
            "range": "stddev: 4.1589324123443114e-7",
            "extra": "mean: 3.3044270816136687 usec\nrounds: 84190"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 289009.294458085,
            "unit": "iter/sec",
            "range": "stddev: 4.089652942867952e-7",
            "extra": "mean: 3.460096333147618 usec\nrounds: 102104"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 164668.93905260434,
            "unit": "iter/sec",
            "range": "stddev: 5.306266502604785e-7",
            "extra": "mean: 6.072790689934212 usec\nrounds: 36047"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1390911.1239358436,
            "unit": "iter/sec",
            "range": "stddev: 1.6939375352540206e-7",
            "extra": "mean: 718.9531975057563 nsec\nrounds: 80594"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 286066.702946733,
            "unit": "iter/sec",
            "range": "stddev: 3.8372155058830325e-7",
            "extra": "mean: 3.495688207327663 usec\nrounds: 42060"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 413263.1709984426,
            "unit": "iter/sec",
            "range": "stddev: 3.237374145587647e-7",
            "extra": "mean: 2.419765588073098 usec\nrounds: 55411"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 291845.60694437614,
            "unit": "iter/sec",
            "range": "stddev: 4.74039356795734e-7",
            "extra": "mean: 3.4264692570499906 usec\nrounds: 77286"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 182493.53342956456,
            "unit": "iter/sec",
            "range": "stddev: 4.3900030157632384e-7",
            "extra": "mean: 5.479646216538194 usec\nrounds: 33871"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 421211.58638183307,
            "unit": "iter/sec",
            "range": "stddev: 3.001447846707112e-7",
            "extra": "mean: 2.3741037339212427 usec\nrounds: 55411"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2764428.02383949,
            "unit": "iter/sec",
            "range": "stddev: 3.205460637008633e-8",
            "extra": "mean: 361.73848310621185 nsec\nrounds: 191278"
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
          "id": "94feeebdeee7b076820c218f31bfa54aae5aa88a",
          "message": "Merge pull request #49 from Mixser/MGG-XXX-guard-metrics-hooks\n\nMGG-XXX Guard metrics hooks",
          "timestamp": "2026-10-11T21:36:51+03:00",
          "tree_id": "d8296d1ccafe03f6b8d154da066bfb3958fc1382",
          "url": "https://github.com/Mixser/zenmqtt/commit/94feeebdeee7b076820c218f31bfa54aae5aa88a"
        },
        "date": 1791744107235,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 327288.43840860255,
            "unit": "iter/sec",
            "range": "stddev: 6.8344663461929e-7",
            "extra": "mean: 3.0554088768377214 usec\nrounds: 50108"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 316023.594600423,
            "unit": "iter/sec",
            "range": "stddev: 7.286311758666622e-7",
            "extra": "mean: 3.1643206934102177 usec\nrounds: 67669"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 244593.6949486139,
            "unit": "iter/sec",
            "range": "stddev: 8.877692839730716e-7",
            "extra": "mean: 4.088412827689968 usec\nrounds: 64688"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 238714.2442365201,
            "unit": "iter/sec",
            "range": "stddev: 8.996672680064347e-7",
            "extra": "mean: 4.189109046250259 usec\nrounds: 71190"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 143242.1088968707,
            "unit": "iter/sec",
            "range": "stddev: 0.000001148365732210216",
            "extra": "mean: 6.981187359646912 usec\nrounds: 27626"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 190820.6715458827,
            "unit": "iter/sec",
            "range": "stddev: 9.401812928305374e-7",
            "extra": "mean: 5.240522381033286 usec\nrounds: 25200"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 180785.87445766447,
            "unit": "iter/sec",
            "range": "stddev: 9.605594332158654e-7",
            "extra": "mean: 5.5314056089828805 usec\nrounds: 62151"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 149649.51801800012,
            "unit": "iter/sec",
            "range": "stddev: 0.000001065661884290676",
            "extra": "mean: 6.682280125217098 usec\nrounds: 49535"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 142403.42216313726,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011349808159662426",
            "extra": "mean: 7.022303149810548 usec\nrounds: 53462"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 84575.24272939719,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015653672620453208",
            "extra": "mean: 11.823791073228737 usec\nrounds: 25832"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 741226.1500771702,
            "unit": "iter/sec",
            "range": "stddev: 4.2562605997402926e-7",
            "extra": "mean: 1.3491159208237435 usec\nrounds: 73878"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 150469.21148838344,
            "unit": "iter/sec",
            "range": "stddev: 0.000001193605715011192",
            "extra": "mean: 6.645877851743791 usec\nrounds: 28228"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 215964.3466261634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010092731440674063",
            "extra": "mean: 4.630393931323352 usec\nrounds: 37966"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 155342.99010619972,
            "unit": "iter/sec",
            "range": "stddev: 9.997941757003811e-7",
            "extra": "mean: 6.437368041624236 usec\nrounds: 43006"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 87714.72291381961,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026151007559213178",
            "extra": "mean: 11.400594641135761 usec\nrounds: 22691"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 222305.61238414477,
            "unit": "iter/sec",
            "range": "stddev: 8.483881530138015e-7",
            "extra": "mean: 4.498311982659246 usec\nrounds: 37938"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1423342.877197327,
            "unit": "iter/sec",
            "range": "stddev: 6.951166683434467e-8",
            "extra": "mean: 702.5714014665798 nsec\nrounds: 65881"
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
          "id": "2be6ae47ed78333ae02a5ef9918019b31365903a",
          "message": "Merge pull request #50 from Mixser/MGG-XXX-opentelemetry-tracing\n\nMGG-XXX Add optional OpenTelemetry tracing",
          "timestamp": "2026-10-11T21:45:21+03:00",
          "tree_id": "b36b7c821fa2a54641d5387b1d347ddf87c61037",
          "url": "https://github.com/Mixser/zenmqtt/commit/2be6ae47ed78333ae02a5ef9918019b31365903a"
        },
        "date": 1791744478125,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 592189.6706423834,
            "unit": "iter/sec",
            "range": "stddev: 2.9151636027621563e-7",
            "extra": "mean: 1.6886481638817514 usec\nrounds: 56316"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 578629.8086576308,
            "unit": "iter/sec",
            "range": "stddev: 3.100301781291832e-7",
            "extra": "mean: 1.7282206776037172 usec\nrounds: 113727"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 481723.6571458174,
            "unit": "iter/sec",
            "range": "stddev: 6.122537428643806e-7",
            "extra": "mean: 2.0758789508593734 usec\nrounds: 106907"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 471430.94483468554,
            "unit": "iter/sec",
            "range": "stddev: 3.493520812968759e-7",
            "extra": "mean: 2.1212014420280902 usec\nrounds: 110816"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 262546.7563127824,
            "unit": "iter/sec",
            "range": "stddev: 5.096965395710554e-7",
            "extra": "mean: 3.8088453807011056 usec\nrounds: 31639"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 345058.7830916339,
            "unit": "iter/sec",
            "range": "stddev: 3.3748293589899893e-7",
            "extra": "mean: 2.8980569369667073 usec\nrounds: 26784"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 302624.40430200007,
            "unit": "iter/sec",
            "range": "stddev: 0.000002830153156310646",
            "extra": "mean: 3.3044261658490144 usec\nrounds: 69243"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 288221.0264870049,
            "unit": "iter/sec",
            "range": "stddev: 5.731942932488285e-7",
            "extra": "mean: 3.4695594980995854 usec\nrounds: 77221"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 257031.72409827381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027105784265962975",
            "extra": "mean: 3.890570331379246 usec\nrounds: 96479"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 154602.10263332145,
            "unit": "iter/sec",
            "range": "stddev: 6.329165975363255e-7",
            "extra": "mean: 6.468217333186966 usec\nrounds: 34431"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1364270.6225922785,
            "unit": "iter/sec",
            "range": "stddev: 1.8089574821147582e-7",
            "extra": "mean: 732.9924015367856 nsec\nrounds: 73041"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 268168.7323325672,
            "unit": "iter/sec",
            "range": "stddev: 4.496778365240949e-7",
            "extra": "mean: 3.7289955145100895 usec\nrounds: 27645"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 380152.3070990485,
            "unit": "iter/sec",
            "range": "stddev: 3.817566914933985e-7",
            "extra": "mean: 2.6305246116511145 usec\nrounds: 36629"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 273762.1946561948,
            "unit": "iter/sec",
            "range": "stddev: 4.504170520664955e-7",
            "extra": "mean: 3.6528053161462024 usec\nrounds: 46989"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 168207.59553860663,
            "unit": "iter/sec",
            "range": "stddev: 6.1194999146622e-7",
            "extra": "mean: 5.94503474589221 usec\nrounds: 25557"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 386909.24680558353,
            "unit": "iter/sec",
            "range": "stddev: 4.996215560303483e-7",
            "extra": "mean: 2.5845854247636684 usec\nrounds: 37694"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2560485.78511424,
            "unit": "iter/sec",
            "range": "stddev: 6.889111268450501e-8",
            "extra": "mean: 390.55088913738433 nsec\nrounds: 192382"
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
          "id": "fa2c12836c25457d0d31e6e11174751a93c05b16",
          "message": "Merge pull request #51 from Mixser/MGG-XXX-close-broken-connection\n\nMGG-XXX Don't stop reconnecting when closing a broken connection fails",
          "timestamp": "2026-10-11T21:53:31+03:00",
          "tree_id": "35c53d8cf269a5ee7da448bd44a22034734206f0",
          "url": "https://github.com/Mixser/zenmqtt/commit/fa2c12836c25457d0d31e6e11174751a93c05b16"
        },
        "date": 1791744980044,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 320411.67041332816,
            "unit": "iter/sec",
            "range": "stddev: 7.824834320284677e-7",
            "extra": "mean: 3.1209849463660575 usec\nrounds: 36669"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 314645.097625075,
            "unit": "iter/sec",
            "range": "stddev: 7.578102864926684e-7",
            "extra": "mean: 3.1781839524847153 usec\nrounds: 67811"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 247606.73956367857,
            "unit": "iter/sec",
            "range": "stddev: 9.834410181909669e-7",
            "extra": "mean: 4.038662282626696 usec\nrounds: 64856"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 237477.6589383212,
            "unit": "iter/sec",
            "range": "stddev: 9.527657017040135e-7",
            "extra": "mean: 4.210922427274411 usec\nrounds: 68555"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 140794.12202585358,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014150029637657066",
            "extra": "mean: 7.102569238056495 usec\nrounds: 27521"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 191716.8628897582,
            "unit": "iter/sec",
            "range": "stddev: 9.806614106503754e-7",
            "extra": "mean: 5.216025262081531 usec\nrounds: 24701"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 178762.41754565312,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011829556080927076",
            "extra": "mean: 5.594016984831924 usec\nrounds: 64646"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 149865.1427774458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015594589405157543",
            "extra": "mean: 6.672665714435208 usec\nrounds: 50056"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 143977.4959911332,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012445810483145169",
            "extra": "mean: 6.945529876846757 usec\nrounds: 51478"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 84020.74958804202,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016385757435040213",
            "extra": "mean: 11.901821929738196 usec\nrounds: 25226"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 715252.5009462521,
            "unit": "iter/sec",
            "range": "stddev: 8.907268725640042e-7",
            "extra": "mean: 1.3981076594308133 usec\nrounds: 70240"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 152672.85989240595,
            "unit": "iter/sec",
            "range": "stddev: 0.000001259065987146616",
            "extra": "mean: 6.549952628808656 usec\nrounds: 28625"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 212564.75577615772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010400086688364106",
            "extra": "mean: 4.704448751857314 usec\nrounds: 35572"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 152985.19263119146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012021414457111225",
            "extra": "mean: 6.536580323892827 usec\nrounds: 42366"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 89302.99175422043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015050267226956056",
            "extra": "mean: 11.197833133655797 usec\nrounds: 21694"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 226212.50731430165,
            "unit": "iter/sec",
            "range": "stddev: 8.387213951372237e-7",
            "extra": "mean: 4.420622059639661 usec\nrounds: 36900"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1429773.6599187723,
            "unit": "iter/sec",
            "range": "stddev: 7.185410907734851e-8",
            "extra": "mean: 699.4114019814937 nsec\nrounds: 65493"
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
          "id": "18921e85ae1f3c49e9d8240bd7c005f76fae3ede",
          "message": "Merge pull request #52 from Mixser/MGG-XXX-integration-tests\n\nMGG-XXX Add integration tests against a real broker",
          "timestamp": "2026-10-11T21:58:59+03:00",
          "tree_id": "3d3bcf56227a75acfc62905a477ea618a8461640",
          "url": "https://github.com/Mixser/zenmqtt/commit/18921e85ae1f3c49e9d8240bd7c005f76fae3ede"
        },
        "date": 1791745283209,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 586896.3995720566,
            "unit": "iter/sec",
            "range": "stddev: 3.3180224775235276e-7",
            "extra": "mean: 1.7038782325622777 usec\nrounds: 37161"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 562914.5016049208,
            "unit": "iter/sec",
            "range": "stddev: 3.9946849454542406e-7",
            "extra": "mean: 1.7764687126533572 usec\nrounds: 65266"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 468583.62394325406,
            "unit": "iter/sec",
            "range": "stddev: 4.798729057645907e-7",
            "extra": "mean: 2.1340907981050163 usec\nrounds: 72887"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 459169.76827359595,
            "unit": "iter/sec",
            "range": "stddev: 3.956966698402485e-7",
            "extra": "mean: 2.177843728170167 usec\nrounds: 97324"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 265954.52438202413,
            "unit": "iter/sec",
            "range": "stddev: 5.836240226561046e-7",
            "extra": "mean: 3.7600413165506956 usec\nrounds: 30230"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 346556.1544013925,
            "unit": "iter/sec",
            "range": "stddev: 3.6665766028258455e-7",
            "extra": "mean: 2.8855352510686267 usec\nrounds: 25829"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 325834.8474218494,
            "unit": "iter/sec",
            "range": "stddev: 4.002843254293446e-7",
            "extra": "mean: 3.0690394471691596 usec\nrounds: 64542"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 278801.0746074607,
            "unit": "iter/sec",
            "range": "stddev: 4.89508239665027e-7",
            "extra": "mean: 3.5867867489677168 usec\nrounds: 70968"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 271299.8794955471,
            "unit": "iter/sec",
            "range": "stddev: 4.2444361593494797e-7",
            "extra": "mean: 3.685958142920639 usec\nrounds: 86222"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 156101.9761454338,
            "unit": "iter/sec",
            "range": "stddev: 6.98666218130556e-7",
            "extra": "mean: 6.406068806382957 usec\nrounds: 32933"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1370177.833797936,
            "unit": "iter/sec",
            "range": "stddev: 1.925664742296106e-7",
            "extra": "mean: 729.8322709163551 nsec\nrounds: 73261"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 273491.0308318013,
            "unit": "iter/sec",
            "range": "stddev: 4.122063291185272e-7",
            "extra": "mean: 3.6564270387901905 usec\nrounds: 28056"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 394029.58778855036,
            "unit": "iter/sec",
            "range": "stddev: 4.2161542788318073e-7",
            "extra": "mean: 2.5378804815455482 usec\nrounds: 35802"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 276311.750230475,
            "unit": "iter/sec",
            "range": "stddev: 4.778501381206004e-7",
            "extra": "mean: 3.6191005238318232 usec\nrounds: 45243"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 174326.4324997354,
            "unit": "iter/sec",
            "range": "stddev: 6.68543133837066e-7",
            "extra": "mean: 5.73636473632028 usec\nrounds: 23968"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 395332.2595815668,
            "unit": "iter/sec",
            "range": "stddev: 3.3283832648513904e-7",
            "extra": "mean: 2.529517831553727 usec\nrounds: 36284"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2596592.8669034475,
            "unit": "iter/sec",
            "range": "stddev: 3.6115689181381995e-8",
            "extra": "mean: 385.12005973140657 nsec\nrounds: 126567"
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
          "id": "801d765d9223e0ee6e6783e17e3a4c5c7551d679",
          "message": "Merge pull request #53 from Mixser/MGG-XXX-coverage\n\nMGG-XXX Collect coverage of unit and integration tests in CI",
          "timestamp": "2026-10-11T22:11:47+03:00",
          "tree_id": "6b8111e03d6d50f33e437dd1250273ae363dc55d",
          "url": "https://github.com/Mixser/zenmqtt/commit/801d765d9223e0ee6e6783e17e3a4c5c7551d679"
        },
        "date": 1791746080050,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 321760.882722678,
            "unit": "iter/sec",
            "range": "stddev: 7.460774266239666e-7",
            "extra": "mean: 3.1078979879039195 usec\nrounds: 31114"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 305052.4046238031,
            "unit": "iter/sec",
            "range": "stddev: 8.385720200759952e-7",
            "extra": "mean: 3.278125282222314 usec\nrounds: 64231"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 245095.70067059106,
            "unit": "iter/sec",
            "range": "stddev: 0.000001044798470856051",
            "extra": "mean: 4.080038928728502 usec\nrounds: 56231"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 236824.57841321974,
            "unit": "iter/sec",
            "range": "stddev: 9.601735915285494e-7",
            "extra": "mean: 4.22253469931303 usec\nrounds: 67350"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 139275.05253207075,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013607338640573377",
            "extra": "mean: 7.180036782034104 usec\nrounds: 23816"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 186385.47297347334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010520679607359461",
            "extra": "mean: 5.365225004109207 usec\nrounds: 12622"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 177641.4422124887,
            "unit": "iter/sec",
            "range": "stddev: 0.000001088915087609271",
            "extra": "mean: 5.6293170531898395 usec\nrounds: 52477"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 145560.3182230632,
            "unit": "iter/sec",
            "range": "stddev: 0.000001269750434165996",
            "extra": "mean: 6.870004216860497 usec\nrounds: 41501"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 140432.3853183837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013334450960465952",
            "extra": "mean: 7.120864590691334 usec\nrounds: 48010"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 83011.65231178021,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020780593804363127",
            "extra": "mean: 12.046501571178696 usec\nrounds: 22593"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 715532.7560113214,
            "unit": "iter/sec",
            "range": "stddev: 5.166424201710775e-7",
            "extra": "mean: 1.3975600580110656 usec\nrounds: 63372"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 147126.68562055117,
            "unit": "iter/sec",
            "range": "stddev: 0.000001298252725327335",
            "extra": "mean: 6.796863504279991 usec\nrounds: 23041"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 203565.24312414878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015609984174678966",
            "extra": "mean: 4.912429964235731 usec\nrounds: 29435"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 152111.59099620697,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012348912083228435",
            "extra": "mean: 6.574120969025535 usec\nrounds: 36034"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 88826.88277978008,
            "unit": "iter/sec",
            "range": "stddev: 0.00000149223704457893",
            "extra": "mean: 11.25785312627939 usec\nrounds: 18601"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 226017.10495134824,
            "unit": "iter/sec",
            "range": "stddev: 9.911355249423172e-7",
            "extra": "mean: 4.424443894258609 usec\nrounds: 32920"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1355428.10263733,
            "unit": "iter/sec",
            "range": "stddev: 1.2783434637340827e-7",
            "extra": "mean: 737.774285522224 nsec\nrounds: 197278"
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
          "id": "1f0921d7dc455b1af205f246a18079936597ce95",
          "message": "Merge pull request #54 from Mixser/MGG-XXX-version-0.1.0rc3\n\nMGG-XXX Set the version 0.1.0rc3",
          "timestamp": "2026-10-11T22:14:52+03:00",
          "tree_id": "2f2f178a99e5abf2e99073cc2b0c119986f42075",
          "url": "https://github.com/Mixser/zenmqtt/commit/1f0921d7dc455b1af205f246a18079936597ce95"
        },
        "date": 1791746257166,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 320816.86000180815,
            "unit": "iter/sec",
            "range": "stddev: 6.588708961554867e-7",
            "extra": "mean: 3.117043162863585 usec\nrounds: 37092"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 308891.36677869706,
            "unit": "iter/sec",
            "range": "stddev: 7.485252543270735e-7",
            "extra": "mean: 3.2373841018238707 usec\nrounds: 69945"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 245235.41349793243,
            "unit": "iter/sec",
            "range": "stddev: 8.457639749235253e-7",
            "extra": "mean: 4.077714493744725 usec\nrounds: 63172"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 239409.45337015114,
            "unit": "iter/sec",
            "range": "stddev: 9.801486066476095e-7",
            "extra": "mean: 4.1769445020782 usec\nrounds: 66543"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 142374.70976920467,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012881023194454627",
            "extra": "mean: 7.023719322209973 usec\nrounds: 25613"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 192203.2784407336,
            "unit": "iter/sec",
            "range": "stddev: 9.50132764377758e-7",
            "extra": "mean: 5.202824884739689 usec\nrounds: 23219"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 184940.2914211981,
            "unit": "iter/sec",
            "range": "stddev: 9.359295079552141e-7",
            "extra": "mean: 5.407150558244328 usec\nrounds: 63052"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 151441.7126123713,
            "unit": "iter/sec",
            "range": "stddev: 0.000001187961722478084",
            "extra": "mean: 6.603200549901268 usec\nrounds: 44009"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 143892.58108022023,
            "unit": "iter/sec",
            "range": "stddev: 0.000001153288330884567",
            "extra": "mean: 6.949628622218537 usec\nrounds: 49486"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 84660.75721471648,
            "unit": "iter/sec",
            "range": "stddev: 0.000001607751225212635",
            "extra": "mean: 11.811848049785352 usec\nrounds: 20895"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 714721.9235516123,
            "unit": "iter/sec",
            "range": "stddev: 5.893200735413352e-7",
            "extra": "mean: 1.3991455516444458 usec\nrounds: 67440"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 152431.55732641596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011579169995301883",
            "extra": "mean: 6.560321350378954 usec\nrounds: 26955"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 210547.4222365026,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010268326143656476",
            "extra": "mean: 4.7495238335272765 usec\nrounds: 33755"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 152184.71376665562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010948361548027712",
            "extra": "mean: 6.570962189627647 usec\nrounds: 39751"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 89912.20144537244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013603624591769844",
            "extra": "mean: 11.121961023360834 usec\nrounds: 22552"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 224069.40555351324,
            "unit": "iter/sec",
            "range": "stddev: 9.570037753326886e-7",
            "extra": "mean: 4.462902900687062 usec\nrounds: 36818"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1399794.8593826296,
            "unit": "iter/sec",
            "range": "stddev: 1.1202090175097398e-7",
            "extra": "mean: 714.3903932045039 nsec\nrounds: 192679"
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
          "id": "82cf04b77e6541d9eac25d81dc1b414198a39b9a",
          "message": "Merge pull request #55 from Mixser/MGG-XXX-coverage-pages-workflow\n\nMGG-XXX Publish coverage in a separate workflow",
          "timestamp": "2026-10-11T22:19:16+03:00",
          "tree_id": "785e80dbd13d64c20c3ed9534b3ef63b98cb3f33",
          "url": "https://github.com/Mixser/zenmqtt/commit/82cf04b77e6541d9eac25d81dc1b414198a39b9a"
        },
        "date": 1791746492987,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 594149.4030973566,
            "unit": "iter/sec",
            "range": "stddev: 3.0915300125551243e-7",
            "extra": "mean: 1.683078355017957 usec\nrounds: 60111"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 564360.7968872354,
            "unit": "iter/sec",
            "range": "stddev: 3.094502685971976e-7",
            "extra": "mean: 1.771916131516501 usec\nrounds: 98571"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 470779.0539577191,
            "unit": "iter/sec",
            "range": "stddev: 4.397163834591349e-7",
            "extra": "mean: 2.1241386837270175 usec\nrounds: 96666"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 460963.41851733153,
            "unit": "iter/sec",
            "range": "stddev: 4.925332164218287e-7",
            "extra": "mean: 2.1693695417663634 usec\nrounds: 114117"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 261516.65308724056,
            "unit": "iter/sec",
            "range": "stddev: 6.626958401653233e-7",
            "extra": "mean: 3.82384826432604 usec\nrounds: 32293"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 325902.67506710737,
            "unit": "iter/sec",
            "range": "stddev: 5.754001029748669e-7",
            "extra": "mean: 3.068400711329196 usec\nrounds: 26146"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 275083.418071495,
            "unit": "iter/sec",
            "range": "stddev: 0.000006702214263621656",
            "extra": "mean: 3.6352609219800267 usec\nrounds: 77161"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 279830.7797483953,
            "unit": "iter/sec",
            "range": "stddev: 6.192683405154396e-7",
            "extra": "mean: 3.5735882982534353 usec\nrounds: 83133"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 269003.8985697811,
            "unit": "iter/sec",
            "range": "stddev: 4.3318607387779324e-7",
            "extra": "mean: 3.717418243069048 usec\nrounds: 98854"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 154548.94524262875,
            "unit": "iter/sec",
            "range": "stddev: 5.560175258619498e-7",
            "extra": "mean: 6.470442088298207 usec\nrounds: 36737"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1362463.911897667,
            "unit": "iter/sec",
            "range": "stddev: 1.681483385666356e-7",
            "extra": "mean: 733.9643944089352 nsec\nrounds: 83133"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 270128.5116482265,
            "unit": "iter/sec",
            "range": "stddev: 4.7373006013184634e-7",
            "extra": "mean: 3.7019416939676666 usec\nrounds: 46376"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 385434.31231579825,
            "unit": "iter/sec",
            "range": "stddev: 5.396239048159483e-7",
            "extra": "mean: 2.5944758109150103 usec\nrounds: 36256"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 275628.22555260913,
            "unit": "iter/sec",
            "range": "stddev: 4.3217033076255223e-7",
            "extra": "mean: 3.628075455607249 usec\nrounds: 50480"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 174075.42487008503,
            "unit": "iter/sec",
            "range": "stddev: 5.493552227922163e-7",
            "extra": "mean: 5.744636273306897 usec\nrounds: 28175"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 387228.02284183446,
            "unit": "iter/sec",
            "range": "stddev: 3.4655452883522896e-7",
            "extra": "mean: 2.582457727777764 usec\nrounds: 39908"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2465219.3170595113,
            "unit": "iter/sec",
            "range": "stddev: 1.9331073483651507e-7",
            "extra": "mean: 405.64342210038734 nsec\nrounds: 196580"
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
          "id": "510ae0488b225a062e82e2e7f31cd07ba172e107",
          "message": "Merge pull request #56 from Mixser/MGG-XXX-manual-perf-compare\n\nMGG-XXX Make the performance comparison a manual step of CI",
          "timestamp": "2026-10-11T22:30:35+03:00",
          "tree_id": "780b9b2745e659995a6840f53beb75ccc60c1a69",
          "url": "https://github.com/Mixser/zenmqtt/commit/510ae0488b225a062e82e2e7f31cd07ba172e107"
        },
        "date": 1791747203493,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 314275.3215877272,
            "unit": "iter/sec",
            "range": "stddev: 6.561220821973622e-7",
            "extra": "mean: 3.181923400628384 usec\nrounds: 51319"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 303182.657360166,
            "unit": "iter/sec",
            "range": "stddev: 7.465789989537978e-7",
            "extra": "mean: 3.2983416950925704 usec\nrounds: 77376"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 239949.31642814408,
            "unit": "iter/sec",
            "range": "stddev: 7.856499494933685e-7",
            "extra": "mean: 4.167546775651944 usec\nrounds: 70742"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 234670.14126673702,
            "unit": "iter/sec",
            "range": "stddev: 8.269637990152156e-7",
            "extra": "mean: 4.261300541270623 usec\nrounds: 55054"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 141524.93349950438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011889335886054586",
            "extra": "mean: 7.065892738988652 usec\nrounds: 27475"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 186803.9559974201,
            "unit": "iter/sec",
            "range": "stddev: 9.01012379633067e-7",
            "extra": "mean: 5.353205689144028 usec\nrounds: 24960"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 176816.40112897623,
            "unit": "iter/sec",
            "range": "stddev: 8.748559997536892e-7",
            "extra": "mean: 5.655583948180034 usec\nrounds: 66011"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 145805.9177792997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010203025073716845",
            "extra": "mean: 6.858432190068295 usec\nrounds: 51637"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 138284.03267378392,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010530469360237253",
            "extra": "mean: 7.23149289664577 usec\nrounds: 55115"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 83018.36418687984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014306906313542543",
            "extra": "mean: 12.04552763469217 usec\nrounds: 25819"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 731833.7921025347,
            "unit": "iter/sec",
            "range": "stddev: 4.1318936282352384e-7",
            "extra": "mean: 1.366430480242013 usec\nrounds: 117427"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 146489.72837283285,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011549598661276858",
            "extra": "mean: 6.8264171905274305 usec\nrounds: 38184"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 212884.4649264554,
            "unit": "iter/sec",
            "range": "stddev: 8.730112620253276e-7",
            "extra": "mean: 4.697383627055489 usec\nrounds: 51133"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 151276.34381456694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010311627711474775",
            "extra": "mean: 6.610418884963205 usec\nrounds: 56648"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 89568.05726904399,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013910828797507386",
            "extra": "mean: 11.164694540557088 usec\nrounds: 25699"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 220968.65599156643,
            "unit": "iter/sec",
            "range": "stddev: 7.508137468478327e-7",
            "extra": "mean: 4.525528724934483 usec\nrounds: 45640"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1336232.9899963508,
            "unit": "iter/sec",
            "range": "stddev: 1.0456773738916329e-7",
            "extra": "mean: 748.3724825583979 nsec\nrounds: 190840"
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
          "id": "1b442a62c299f5f5d60b35b134eac1e891b1f1c4",
          "message": "Merge pull request #57 from Mixser/MGG-XXX-mqtt5-names\n\nMGG-XXX Use the names of the MQTT 5 specification",
          "timestamp": "2026-10-11T22:44:49+03:00",
          "tree_id": "fb977d5d25f23285524d4407c8b3d35acd64bdf1",
          "url": "https://github.com/Mixser/zenmqtt/commit/1b442a62c299f5f5d60b35b134eac1e891b1f1c4"
        },
        "date": 1791748043680,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 574616.8803162638,
            "unit": "iter/sec",
            "range": "stddev: 3.9155564823787627e-7",
            "extra": "mean: 1.7402899814735853 usec\nrounds: 38299"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 556255.8213608052,
            "unit": "iter/sec",
            "range": "stddev: 4.7202955599433494e-7",
            "extra": "mean: 1.7977339950414077 usec\nrounds: 76570"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 472525.9263428928,
            "unit": "iter/sec",
            "range": "stddev: 3.988112021506984e-7",
            "extra": "mean: 2.1162859945897248 usec\nrounds: 69823"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 460365.8780615348,
            "unit": "iter/sec",
            "range": "stddev: 4.5783229476629056e-7",
            "extra": "mean: 2.172185315320731 usec\nrounds: 98756"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 260007.73605521885,
            "unit": "iter/sec",
            "range": "stddev: 9.890899599551193e-7",
            "extra": "mean: 3.8460394108720903 usec\nrounds: 29941"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 326820.79300507274,
            "unit": "iter/sec",
            "range": "stddev: 4.505478984781022e-7",
            "extra": "mean: 3.0597808383155063 usec\nrounds: 22545"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 309537.81067751575,
            "unit": "iter/sec",
            "range": "stddev: 7.070617734961832e-7",
            "extra": "mean: 3.2306230951598507 usec\nrounds: 50201"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 272083.3610347086,
            "unit": "iter/sec",
            "range": "stddev: 6.057627298051678e-7",
            "extra": "mean: 3.6753441893583263 usec\nrounds: 65647"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 258971.7050821813,
            "unit": "iter/sec",
            "range": "stddev: 7.206979102250833e-7",
            "extra": "mean: 3.8614257093556343 usec\nrounds: 76517"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 154092.1706487623,
            "unit": "iter/sec",
            "range": "stddev: 6.59078636361966e-7",
            "extra": "mean: 6.489622385029542 usec\nrounds: 33031"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1368654.9977606265,
            "unit": "iter/sec",
            "range": "stddev: 2.375118347609073e-7",
            "extra": "mean: 730.6443198879086 nsec\nrounds: 69585"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 243072.0558738503,
            "unit": "iter/sec",
            "range": "stddev: 0.000003201734598442361",
            "extra": "mean: 4.114006426633346 usec\nrounds: 28942"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 225854.3579067061,
            "unit": "iter/sec",
            "range": "stddev: 0.000008610571568759274",
            "extra": "mean: 4.427632077894512 usec\nrounds: 3903"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 265610.9224821844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013756651392324081",
            "extra": "mean: 3.764905413733782 usec\nrounds: 48802"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 169034.23196925566,
            "unit": "iter/sec",
            "range": "stddev: 7.137426241296224e-7",
            "extra": "mean: 5.9159614496422375 usec\nrounds: 21660"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 386166.2369296209,
            "unit": "iter/sec",
            "range": "stddev: 3.9650886524720927e-7",
            "extra": "mean: 2.5895583413788987 usec\nrounds: 33064"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2486021.15233799,
            "unit": "iter/sec",
            "range": "stddev: 1.0092706261594447e-7",
            "extra": "mean: 402.2491920712523 nsec\nrounds: 193499"
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
          "id": "25c9dcc0c6e019010136893cdeda4a6978f09b05",
          "message": "Merge pull request #58 from Mixser/MGG-XXX-client-lifecycle\n\nMGG-XXX Add async with to the client, move credentials to connect()",
          "timestamp": "2026-10-11T22:47:50+03:00",
          "tree_id": "87080561ebce2f2aa5c290d98050c109a15372e5",
          "url": "https://github.com/Mixser/zenmqtt/commit/25c9dcc0c6e019010136893cdeda4a6978f09b05"
        },
        "date": 1791748223230,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 339805.1989170718,
            "unit": "iter/sec",
            "range": "stddev: 6.168946586092246e-7",
            "extra": "mean: 2.942862567102884 usec\nrounds: 41744"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 325845.0244332038,
            "unit": "iter/sec",
            "range": "stddev: 6.157639091316159e-7",
            "extra": "mean: 3.068943592861255 usec\nrounds: 63804"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 250734.15020360847,
            "unit": "iter/sec",
            "range": "stddev: 7.272405715013801e-7",
            "extra": "mean: 3.9882879902396655 usec\nrounds: 62957"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 244166.40292130498,
            "unit": "iter/sec",
            "range": "stddev: 7.076836099701796e-7",
            "extra": "mean: 4.0955675639055915 usec\nrounds: 73856"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 152189.78522762784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010542157966338025",
            "extra": "mean: 6.570743223694782 usec\nrounds: 26194"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 195823.77272536623,
            "unit": "iter/sec",
            "range": "stddev: 7.259826112393901e-7",
            "extra": "mean: 5.106632285153926 usec\nrounds: 24073"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 184497.17767959027,
            "unit": "iter/sec",
            "range": "stddev: 7.718147348553919e-7",
            "extra": "mean: 5.4201371130818305 usec\nrounds: 63196"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 149521.1931528732,
            "unit": "iter/sec",
            "range": "stddev: 8.289791030658256e-7",
            "extra": "mean: 6.688015116208857 usec\nrounds: 50608"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 142072.71973933722,
            "unit": "iter/sec",
            "range": "stddev: 8.479848673734072e-7",
            "extra": "mean: 7.0386489526962945 usec\nrounds: 52087"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 86706.4750431714,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012562591806011224",
            "extra": "mean: 11.533164039964689 usec\nrounds: 25317"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 795896.629007706,
            "unit": "iter/sec",
            "range": "stddev: 3.725474434989275e-7",
            "extra": "mean: 1.256444572766645 usec\nrounds: 63200"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 154112.9150408371,
            "unit": "iter/sec",
            "range": "stddev: 8.468374680630436e-7",
            "extra": "mean: 6.48874884843375 usec\nrounds: 26486"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 223867.31227188025,
            "unit": "iter/sec",
            "range": "stddev: 7.609912181720159e-7",
            "extra": "mean: 4.466931727779577 usec\nrounds: 31931"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 157741.226147419,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010082754125160355",
            "extra": "mean: 6.339496810208878 usec\nrounds: 38717"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 95730.72361952302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013758445021669499",
            "extra": "mean: 10.445967210844975 usec\nrounds: 21501"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 229418.980863509,
            "unit": "iter/sec",
            "range": "stddev: 6.513490656269928e-7",
            "extra": "mean: 4.358837251547822 usec\nrounds: 35220"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1300281.1133336993,
            "unit": "iter/sec",
            "range": "stddev: 1.0510028538006757e-7",
            "extra": "mean: 769.0644659416536 nsec\nrounds: 179889"
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
          "id": "b1314f61724eade353993bdadcd1fe1038eef6f7",
          "message": "Merge pull request #58 from Mixser/MGG-XXX-client-lifecycle\n\nMGG-XXX Add async with to the client, move credentials to connect()",
          "timestamp": "2026-10-11T22:47:50+03:00",
          "tree_id": "79392d25b75f137d0859a189be07c812fc9edcff",
          "url": "https://github.com/Mixser/zenmqtt/commit/b1314f61724eade353993bdadcd1fe1038eef6f7"
        },
        "date": 1791748428377,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 590451.1114741577,
            "unit": "iter/sec",
            "range": "stddev: 3.37467846694795e-7",
            "extra": "mean: 1.6936203193916202 usec\nrounds: 39765"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 571965.5466254132,
            "unit": "iter/sec",
            "range": "stddev: 3.527872323602426e-7",
            "extra": "mean: 1.7483570573437204 usec\nrounds: 92705"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 481269.9935828455,
            "unit": "iter/sec",
            "range": "stddev: 3.529380685222641e-7",
            "extra": "mean: 2.0778357540129098 usec\nrounds: 88130"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 459850.4042853411,
            "unit": "iter/sec",
            "range": "stddev: 3.4735102203727464e-7",
            "extra": "mean: 2.174620247543572 usec\nrounds: 111075"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 263843.6432303004,
            "unit": "iter/sec",
            "range": "stddev: 4.778867392173611e-7",
            "extra": "mean: 3.790123528301696 usec\nrounds: 31086"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 345773.1279522838,
            "unit": "iter/sec",
            "range": "stddev: 3.8289370668765063e-7",
            "extra": "mean: 2.8920697392597803 usec\nrounds: 19788"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 314939.6623047598,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036954549592935285",
            "extra": "mean: 3.175211380751159 usec\nrounds: 71577"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 273655.8377814301,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011967785341835548",
            "extra": "mean: 3.6542249860523843 usec\nrounds: 82454"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 270470.4817949687,
            "unit": "iter/sec",
            "range": "stddev: 4.5356740260342294e-7",
            "extra": "mean: 3.6972611331319114 usec\nrounds: 98961"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 153621.69178200266,
            "unit": "iter/sec",
            "range": "stddev: 7.064579761646075e-7",
            "extra": "mean: 6.509497378918683 usec\nrounds: 34718"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1340470.4631597025,
            "unit": "iter/sec",
            "range": "stddev: 1.9082797515253375e-7",
            "extra": "mean: 746.0067397851054 nsec\nrounds: 73148"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 269539.5511258135,
            "unit": "iter/sec",
            "range": "stddev: 4.3011216896857985e-7",
            "extra": "mean: 3.7100306646026433 usec\nrounds: 27915"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 390404.67845185415,
            "unit": "iter/sec",
            "range": "stddev: 4.0666136504533256e-7",
            "extra": "mean: 2.561444714150174 usec\nrounds: 36257"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 270401.22772348777,
            "unit": "iter/sec",
            "range": "stddev: 4.860154881994444e-7",
            "extra": "mean: 3.6982080607363206 usec\nrounds: 48755"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 175162.8316598905,
            "unit": "iter/sec",
            "range": "stddev: 6.326966378256405e-7",
            "extra": "mean: 5.708973704773603 usec\nrounds: 24301"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 399841.7833258624,
            "unit": "iter/sec",
            "range": "stddev: 3.197130686702494e-7",
            "extra": "mean: 2.500989245501193 usec\nrounds: 37566"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 2338703.009028605,
            "unit": "iter/sec",
            "range": "stddev: 5.811879867142572e-8",
            "extra": "mean: 427.58742608167086 nsec\nrounds: 115835"
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
          "id": "aa7686c9c15577b5967019791e855fb209b6e4a1",
          "message": "Merge pull request #60 from Mixser/MGG-XXX-qos-reason-code-enums\n\nMGG-XXX Add QoS and ReasonCode enums",
          "timestamp": "2026-10-11T22:56:10+03:00",
          "tree_id": "c859e5fcc9faee5e7a20cb438ed310ad24e21315",
          "url": "https://github.com/Mixser/zenmqtt/commit/aa7686c9c15577b5967019791e855fb209b6e4a1"
        },
        "date": 1791748743199,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 324275.84358209267,
            "unit": "iter/sec",
            "range": "stddev: 6.866985199847054e-7",
            "extra": "mean: 3.083794305963599 usec\nrounds: 44362"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 308752.0975412656,
            "unit": "iter/sec",
            "range": "stddev: 7.045462659689947e-7",
            "extra": "mean: 3.238844393166745 usec\nrounds: 68461"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 248246.28446572745,
            "unit": "iter/sec",
            "range": "stddev: 8.132180981508572e-7",
            "extra": "mean: 4.028257672223322 usec\nrounds: 66278"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 239209.04749463795,
            "unit": "iter/sec",
            "range": "stddev: 9.835994484115925e-7",
            "extra": "mean: 4.180443885687124 usec\nrounds: 66810"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 141742.12368002394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012082084646044428",
            "extra": "mean: 7.055065735133559 usec\nrounds: 27124"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 195275.64890635823,
            "unit": "iter/sec",
            "range": "stddev: 9.772918182259589e-7",
            "extra": "mean: 5.12096621161165 usec\nrounds: 24979"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 183278.95605950805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010036404247570873",
            "extra": "mean: 5.456163770789454 usec\nrounds: 59913"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 146373.1277036699,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013031806095128684",
            "extra": "mean: 6.831855106795861 usec\nrounds: 47642"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 143049.48974599404,
            "unit": "iter/sec",
            "range": "stddev: 0.000001146907824721962",
            "extra": "mean: 6.9905876754656795 usec\nrounds: 53065"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 84416.77050472106,
            "unit": "iter/sec",
            "range": "stddev: 0.000001554050642214485",
            "extra": "mean: 11.845987402989723 usec\nrounds: 25244"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 738624.6060296622,
            "unit": "iter/sec",
            "range": "stddev: 4.053681431954056e-7",
            "extra": "mean: 1.3538677046995662 usec\nrounds: 72701"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 150550.1016789925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011089378809485768",
            "extra": "mean: 6.6423070383056295 usec\nrounds: 27521"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 213067.2417625985,
            "unit": "iter/sec",
            "range": "stddev: 9.093858508925639e-7",
            "extra": "mean: 4.6933540403841585 usec\nrounds: 36284"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 155793.82274795405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010579418884397649",
            "extra": "mean: 6.41873973153491 usec\nrounds: 42168"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 89307.7243773552,
            "unit": "iter/sec",
            "range": "stddev: 0.000001381794673666653",
            "extra": "mean: 11.197239734545954 usec\nrounds: 21699"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 191307.17422714471,
            "unit": "iter/sec",
            "range": "stddev: 9.170093074124863e-7",
            "extra": "mean: 5.227195498756728 usec\nrounds: 32302"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1408668.9638771417,
            "unit": "iter/sec",
            "range": "stddev: 1.0477056885317337e-7",
            "extra": "mean: 709.8899923567963 nsec\nrounds: 184843"
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
          "id": "1b7ab8fdf0ecc5f5330c13df64bde9a597774f14",
          "message": "Merge pull request #62 from Mixser/MGG-XXX-version-0.1.0rc4\n\nMGG-XXX Set the version 0.1.0rc4",
          "timestamp": "2026-10-11T22:56:38+03:00",
          "tree_id": "e0a2075d1873af9190f304929f46446429c0fc26",
          "url": "https://github.com/Mixser/zenmqtt/commit/1b7ab8fdf0ecc5f5330c13df64bde9a597774f14"
        },
        "date": 1791748909917,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 444165.3230033389,
            "unit": "iter/sec",
            "range": "stddev: 4.490598975441081e-7",
            "extra": "mean: 2.251413940282958 usec\nrounds: 41936"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 427908.20598606387,
            "unit": "iter/sec",
            "range": "stddev: 4.335368844761482e-7",
            "extra": "mean: 2.336949808418883 usec\nrounds: 83002"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 327622.52738482616,
            "unit": "iter/sec",
            "range": "stddev: 4.939496088758297e-7",
            "extra": "mean: 3.0522931618355957 usec\nrounds: 80007"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 319460.8853883792,
            "unit": "iter/sec",
            "range": "stddev: 5.950476458744426e-7",
            "extra": "mean: 3.130273675865722 usec\nrounds: 90852"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 194982.25045180868,
            "unit": "iter/sec",
            "range": "stddev: 6.343173065814874e-7",
            "extra": "mean: 5.128671956974656 usec\nrounds: 29551"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 252194.37873064584,
            "unit": "iter/sec",
            "range": "stddev: 4.834645063959377e-7",
            "extra": "mean: 3.965195437873109 usec\nrounds: 25164"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 237890.39335309895,
            "unit": "iter/sec",
            "range": "stddev: 5.491956287887172e-7",
            "extra": "mean: 4.2036165727621775 usec\nrounds: 83064"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 192058.65299965505,
            "unit": "iter/sec",
            "range": "stddev: 5.926530204923492e-7",
            "extra": "mean: 5.206742754786456 usec\nrounds: 61144"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 181537.1610193751,
            "unit": "iter/sec",
            "range": "stddev: 6.347224146449983e-7",
            "extra": "mean: 5.508514038584485 usec\nrounds: 70413"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 111778.80174854549,
            "unit": "iter/sec",
            "range": "stddev: 8.275579482684843e-7",
            "extra": "mean: 8.946240113126033 usec\nrounds: 28295"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1045414.34137786,
            "unit": "iter/sec",
            "range": "stddev: 2.471308599331951e-7",
            "extra": "mean: 956.5585246152223 nsec\nrounds: 73687"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 196589.70740839056,
            "unit": "iter/sec",
            "range": "stddev: 5.834042325902626e-7",
            "extra": "mean: 5.086736295520421 usec\nrounds: 29753"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 283530.7433123914,
            "unit": "iter/sec",
            "range": "stddev: 5.351401416241514e-7",
            "extra": "mean: 3.526954390615094 usec\nrounds: 37865"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 205220.28809453285,
            "unit": "iter/sec",
            "range": "stddev: 6.577067178476551e-7",
            "extra": "mean: 4.872812572699241 usec\nrounds: 47277"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 124466.92799745004,
            "unit": "iter/sec",
            "range": "stddev: 8.635752428928067e-7",
            "extra": "mean: 8.034262724155022 usec\nrounds: 23302"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 252376.02902880745,
            "unit": "iter/sec",
            "range": "stddev: 5.030189470023053e-7",
            "extra": "mean: 3.9623414468014118 usec\nrounds: 32251"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1814189.7912657803,
            "unit": "iter/sec",
            "range": "stddev: 6.904105363184463e-8",
            "extra": "mean: 551.2102453747625 nsec\nrounds: 162893"
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
          "id": "5ddc404e27d3cdd820e897853f8613a48378409b",
          "message": "Merge pull request #63 from Mixser/MGG-XXX-rename-processing-to-trace\n\nMGG-XXX Rename client.processing() to client.trace()",
          "timestamp": "2026-10-11T23:42:55+03:00",
          "tree_id": "7254415f32310e6c07b1ea7c82a021fc42cc0734",
          "url": "https://github.com/Mixser/zenmqtt/commit/5ddc404e27d3cdd820e897853f8613a48378409b"
        },
        "date": 1791751532284,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos0]",
            "value": 488929.08332830074,
            "unit": "iter/sec",
            "range": "stddev: 4.7388985147685086e-7",
            "extra": "mean: 2.045286390395662 usec\nrounds: 51133"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[64B-qos1]",
            "value": 472200.0196573832,
            "unit": "iter/sec",
            "range": "stddev: 4.2379008183414353e-7",
            "extra": "mean: 2.1177466293321534 usec\nrounds: 87520"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos0]",
            "value": 363684.7450174632,
            "unit": "iter/sec",
            "range": "stddev: 4.857911463847472e-7",
            "extra": "mean: 2.7496341644794104 usec\nrounds: 79328"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish[16KiB-qos1]",
            "value": 355910.3274598107,
            "unit": "iter/sec",
            "range": "stddev: 5.195216104762887e-7",
            "extra": "mean: 2.809696496129126 usec\nrounds: 90671"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_publish_with_properties",
            "value": 208333.41222014432,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024867571268583063",
            "extra": "mean: 4.799998182448563 usec\nrounds: 31911"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos0]",
            "value": 261685.26909856495,
            "unit": "iter/sec",
            "range": "stddev: 7.436501698876453e-7",
            "extra": "mean: 3.8213843807285364 usec\nrounds: 26224"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[64B-qos1]",
            "value": 245105.84389459237,
            "unit": "iter/sec",
            "range": "stddev: 7.397710382418042e-7",
            "extra": "mean: 4.079870084329975 usec\nrounds: 69014"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos0]",
            "value": 210654.8675975854,
            "unit": "iter/sec",
            "range": "stddev: 6.108603881112914e-7",
            "extra": "mean: 4.747101319824723 usec\nrounds: 55310"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish[16KiB-qos1]",
            "value": 204508.0522901102,
            "unit": "iter/sec",
            "range": "stddev: 6.20103373643185e-7",
            "extra": "mean: 4.889783012462629 usec\nrounds: 60409"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_publish_with_properties",
            "value": 122663.16327568455,
            "unit": "iter/sec",
            "range": "stddev: 9.891903667435401e-7",
            "extra": "mean: 8.152406747839263 usec\nrounds: 29817"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_puback",
            "value": 1148382.669383681,
            "unit": "iter/sec",
            "range": "stddev: 2.379750952993519e-7",
            "extra": "mean: 870.7898740205515 nsec\nrounds: 80328"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_puback",
            "value": 222658.6880936534,
            "unit": "iter/sec",
            "range": "stddev: 6.169138651002744e-7",
            "extra": "mean: 4.491178891610938 usec\nrounds: 33797"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_properties",
            "value": 336532.85974058975,
            "unit": "iter/sec",
            "range": "stddev: 4.548960908666861e-7",
            "extra": "mean: 2.971478032697407 usec\nrounds: 38489"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_properties",
            "value": 221511.9623386567,
            "unit": "iter/sec",
            "range": "stddev: 7.246347985724129e-7",
            "extra": "mean: 4.514428879787352 usec\nrounds: 55596"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_pack_subscribe",
            "value": 135546.759156793,
            "unit": "iter/sec",
            "range": "stddev: 7.981170000438014e-7",
            "extra": "mean: 7.377527918932058 usec\nrounds: 26165"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_suback",
            "value": 280406.3290954106,
            "unit": "iter/sec",
            "range": "stddev: 4.637381494836512e-7",
            "extra": "mean: 3.5662533125625053 usec\nrounds: 37207"
          },
          {
            "name": "benchmarks/codec/test_codec.py::test_parse_variable_byte_integer",
            "value": 1994660.9968681133,
            "unit": "iter/sec",
            "range": "stddev: 4.173037803717273e-8",
            "extra": "mean: 501.33832343948916 nsec\nrounds: 97533"
          }
        ]
      }
    ]
  }
}