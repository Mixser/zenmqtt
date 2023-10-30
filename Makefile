SOURCE=gmqtt
TEST=tests

.PHONY: fmt/black
fmt/black:
	@black $(SOURCE) $(TEST)

.PHONY: fmt-istort
fmt/isort:
	@isort --profile black $(SOURCE) $(TEST)
	
.PHONY: fmt
fmt: fmt/black fmt/isort

.PHONY: lint/black
lint/black:
	@black --check --diff $(SOURCE)

.PHONY: lint/flake8
lint/flake8:
	@flake8 $(SOURCE)

.PHONY: lint/mypy
lint/mypy:
	@mypy --show-error-codes --skip-cache-mtime-checks --no-site-packages --show-traceback $(SOURCE)
	
.PHONY: lint
lint: lint/black lint/flake8 lint/mypy