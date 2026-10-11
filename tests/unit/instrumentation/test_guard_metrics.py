import logging

from tests.unit.mqtt.protocol.helpers import FailingMetrics
from zenmqtt.instrumentation import metrics as metrics_module
from zenmqtt.instrumentation.metrics import MetricsCollector, guard_metrics


class PingMetrics(MetricsCollector):
    def __init__(self) -> None:
        self.pings: list[float] = []

    def on_ping(self, duration: float) -> None:
        self.pings.append(duration)


def test_default_collector_isnt_wrapped():
    assert type(guard_metrics(None)) is MetricsCollector

    default = MetricsCollector()
    assert guard_metrics(default) is default


def test_guarded_collector_isnt_wrapped_twice():
    guarded = guard_metrics(PingMetrics())
    assert guard_metrics(guarded) is guarded


def test_only_overridden_hooks_are_wrapped():
    metrics = PingMetrics()
    guarded = guard_metrics(metrics)

    # not overridden: the no-op of MetricsCollector, no extra call
    assert guarded.on_packet_sent.__func__ is MetricsCollector.on_packet_sent

    guarded.on_ping(0.5)
    assert metrics.pings == [0.5]


def test_hook_error_is_logged_once_per_interval(caplog, monkeypatch):
    now = [100.0]
    monkeypatch.setattr(metrics_module.time, "monotonic", lambda: now[0])
    guarded = guard_metrics(FailingMetrics())

    with caplog.at_level(logging.ERROR, logger="zenmqtt.instrumentation"):
        for _ in range(3):
            guarded.on_ping(0.1)

        now[0] += metrics_module._ERROR_LOG_INTERVAL
        guarded.on_ping(0.1)

    logs = [record for record in caplog.records if "hook_error" in record.message]
    assert len(logs) == 2
    assert "FailingMetrics.on_ping" in logs[0].message
    assert logs[0].exc_info is not None
    assert "1 errors since the last log" in logs[0].message
    # the errors suppressed within the interval are counted in the next log
    assert "3 errors since the last log" in logs[1].message
