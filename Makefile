SHELL = bash

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help

# Environment Variables

IO ?=
RUN_ON_CI ?= false
ifeq (${RUN_ON_CI},true)
	DC_RUN=docker-compose run --rm -T
else
	DC_RUN=docker-compose run --rm
endif

# Docker Compose services

.PHONY: pull
pull: ## Pull all Docker images used in docker-compose.yaml
	@docker-compose pull

# Application dependencies

yarn.lock: package.json
	@$(DC_RUN) node yarn install

node_modules: yarn.lock
	@$(DC_RUN) node yarn install --frozen-lockfile --check-files

.PHONY: install
install: node_modules ## Install project dependencies

.PHONY: upgrade
upgrade: ## Upgrades project dependencies to their latest version (works only if project dependencies were installed at least once)
	@$(DC_RUN) node yarn upgrade-interactive --latest
	@$(DC_RUN) node yarn upgrade

# Serve and build-prod

.PHONY: serve
serve: pull node_modules ## Run the application using Vue CLI development server (hit CTRL+c to stop the server)
	@$(DC_RUN) --service-ports node yarn serve

.PHONY: build
build: pull node_modules ## Build the production artifacts
	@$(DC_RUN) --service-ports node yarn build

# Tests

.PHONY: tests
tests: node_modules ## Execute all the tests
	@echo "Lint the stylesheets"
	@make stylelint
	@echo "Lint the TypeScript code"
	@make eslint
	@echo "Check type errors"
	@make type-check
	@echo "Execute unit tests"
	@make unit
	@echo "Execute end-to-end tests"
	@make end-to-end

.PHONY: stylelint
stylelint: ## Lint the LESS code
	@$(DC_RUN) node yarn run -s stylelint

.PHONY: eslint
eslint: ## Lint the TypeScript code
	@$(DC_RUN) node yarn run -s lint

.PHONY: type-check
type-check: ## Look for type errors
	@$(DC_RUN)  node yarn run type-check

.PHONY: unit
unit: ## Execute unit tests (use "make unit O=path/to/test" to run a specific test)
	@$(DC_RUN) -e JEST_JUNIT_OUTPUT_DIR="tests/reports" -e JEST_JUNIT_OUTPUT_NAME="unit.xml" node yarn run test:unit ${IO}

.PHONY: end-to-end
end-to-end: ## Execute end to end tests in headless mode (use "make end-to-end O=path/to/test" to run a specific test)
	@$(DC_RUN) -e MOCHA_FILE="tests/reports/e2e.xml" cypress yarn run test:e2e --headless ${IO}

.PHONY: end-to-end-x11-sharing
end-to-end-x11-sharing: ## Execute end to end tests with X11 sharing
	@$(DC_RUN) -e DISPLAY -v "/tmp/.X11-unix:/tmp/.X11-unix" cypress yarn run test:e2e
