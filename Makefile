SOURCE=zenmqtt
TEST=tests
TEST_UNIT=$(TEST)/unit

.PHONY: fmt/black
fmt/black:
	@poetry run black $(SOURCE) $(TEST)

.PHONY: fmt/isort
fmt/isort:
	@poetry run isort --profile black $(SOURCE) $(TEST)
	
.PHONY: fmt
fmt: fmt/black fmt/isort

.PHONY: lint/black
lint/black:
	@poetry run black --check --diff $(SOURCE)

.PHONY: lint/flake8
lint/flake8:
	@poetry run flake8 $(SOURCE)

.PHONY: lint/mypy
lint/mypy:
	@poetry run mypy --show-error-codes --skip-cache-mtime-checks --no-site-packages --show-traceback $(SOURCE)
	
.PHONY: lint
lint: lint/black lint/flake8 lint/mypy

.PHONY: test
test:
	@poetry run pytest --disable-warnings --cov=$(SOURCE) $(TEST)

.PHONY: test/unit
test/unit:
	@poetry run pytest --disable-warnings --cov=$(SOURCE) $(TEST_UNIT)
