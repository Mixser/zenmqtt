SOURCE=zenmqtt
TEST=tests
TEST_UNIT=$(TEST)/unit
TEST_INTEGRATION=$(TEST)/integration

# sorts imports (the isort rules of ruff) and formats
.PHONY: fmt
fmt:
	@poetry run ruff check --select I --fix $(SOURCE) $(TEST) benchmarks
	@poetry run ruff format $(SOURCE) $(TEST) benchmarks

.PHONY: lint/ruff
lint/ruff:
	@poetry run ruff format --check --diff $(SOURCE) $(TEST) benchmarks
	@poetry run ruff check $(SOURCE) $(TEST) benchmarks

.PHONY: lint/mypy
lint/mypy:
	@poetry run mypy --show-error-codes --skip-cache-mtime-checks --no-site-packages --show-traceback $(SOURCE)
	
.PHONY: lint
lint: lint/ruff lint/mypy

.PHONY: test
test:
	@poetry run pytest --disable-warnings --cov=$(SOURCE) $(TEST)

.PHONY: test/unit
test/unit:
	@poetry run pytest --disable-warnings --cov=$(SOURCE) $(TEST_UNIT)

# the "infrastructure" profile of docker-compose.yaml: the MQTT 5 broker on
# localhost:1883; up waits until it accepts connections
.PHONY: local/infrastructure/up
local/infrastructure/up:
	@docker compose --profile infrastructure up -d --wait

.PHONY: local/infrastructure/down
local/infrastructure/down:
	@docker compose --profile infrastructure down

# needs a broker: MQTT_INTEGRATION_URL=tcp://localhost:1883 make test/integration
.PHONY: test/integration
test/integration:
	@poetry run pytest -W error --cov=$(SOURCE) $(TEST_INTEGRATION)

# needs a broker for publish and end-to-end: MQTT_URL=tcp://host:port make bench
.PHONY: bench
bench:
	@poetry run python -m benchmarks.run $(ARGS)

# micro-benchmarks of packing and parsing (pytest-benchmark)
.PHONY: bench-codec
bench-codec:
	@poetry run pytest benchmarks/codec --benchmark-only $(ARGS)
