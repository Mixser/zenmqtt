window.BENCHMARK_DATA = {
  "lastUpdate": 1791541926228,
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
      }
    ]
  }
}