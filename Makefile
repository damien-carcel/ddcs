SHELL = bash

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help

# Environment Variables

O ?=

# Docker Compose services

.PHONY: pull
pull: ## Pull all Docker images used in docker-compose.yaml
	@docker-compose pull

# Application dependencies

yarn.lock: package.json
	@docker-compose run --rm node yarn install

node_modules: yarn.lock
	@docker-compose run --rm node yarn install --frozen-lockfile --check-files

.PHONY: install
install: node_modules ## Install project dependencies

.PHONY: upgrade
upgrade: ## Upgrades project dependencies to their latest version (works only if project dependencies were installed at least once)
	@docker-compose run --rm node yarn upgrade-interactive --latest
	@docker-compose run --rm node yarn upgrade

# Serve and build-prod

.PHONY: serve
serve: pull node_modules ## Run the application using Vue CLI development server (hit CTRL+c to stop the server)
	@docker-compose run --rm --service-ports node yarn serve

.PHONY: build
build: pull node_modules ## Build the production artifacts
	@docker-compose run --rm --service-ports node yarn build

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
	@docker-compose run --rm node yarn run -s stylelint

.PHONY: eslint
eslint: ## Lint the TypeScript code
	@docker-compose run --rm node yarn run -s lint

.PHONY: type-check
type-check: ## Look for type errors
	@docker-compose run --rm  node yarn run type-check

.PHONY: unit
unit: ## Execute unit tests (use "make unit O=path/to/test" to run a specific test)
	@docker-compose run --rm -e JEST_JUNIT_OUTPUT_DIR="tests/reports" -e JEST_JUNIT_OUTPUT_NAME="unit.xml" node yarn run test:unit ${O}

.PHONY: end-to-end
end-to-end: ## Execute end to end tests in headless mode (use "make end-to-end O=path/to/test" to run a specific test)
	@docker-compose run --rm -e MOCHA_FILE="tests/reports/e2e.xml" cypress yarn run test:e2e --headless ${O}

.PHONY: end-to-end-x11-sharing
end-to-end-x11-sharing: ## Execute end to end tests with X11 sharing
	@docker-compose run --rm -e DISPLAY -v "/tmp/.X11-unix:/tmp/.X11-unix" cypress yarn run test:e2e
