import time
from logging import getLogger
from typing import Final

logger = getLogger(__name__)

# seconds between logs of a hook which keeps failing
_ERROR_LOG_INTERVAL: Final[float] = 60.0


class HookErrors:
    """
    Exceptions of instrumentation hooks: they are counted and logged, never
    raised into the client. The first error of a hook is logged, then one log
    per interval, so a hook which fails on every packet doesn't flood the logs
    but stays visible.
    """

    def __init__(self, owner: str, event: str) -> None:
        """
        :param owner: the class name of the instrumentation, used in the log
        :param event: the name of the log event, e.g. "mqtt_metrics.hook_error"
        """
        self._owner = owner
        self._event = event

        # number of exceptions per hook
        self.errors: dict[str, int] = {}
        self._logged_at: dict[str, float] = {}
        self._suppressed: dict[str, int] = {}

    def report(self, name: str, exc: Exception) -> None:
        self.errors[name] = self.errors.get(name, 0) + 1
        now = time.monotonic()
        logged_at = self._logged_at.get(name)

        if logged_at is not None and now - logged_at < _ERROR_LOG_INTERVAL:
            self._suppressed[name] = self._suppressed.get(name, 0) + 1
            return

        logger.error(
            "%s: %s.%s raised, %s errors since the last log; instrumentation "
            "doesn't affect the client",
            self._event,
            self._owner,
            name,
            self._suppressed.pop(name, 0) + 1,
            exc_info=exc,
        )
        self._logged_at[name] = now
