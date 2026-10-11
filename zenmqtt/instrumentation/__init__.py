"""
Metrics and monitors of the client. The OpenTelemetry adapter is in
zenmqtt.instrumentation.opentelemetry, it needs the "otel" extra.
"""
from zenmqtt.instrumentation.metrics import MetricsCollector

__all__ = ["MetricsCollector"]
