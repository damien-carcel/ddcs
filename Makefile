SHELL = bash

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help

# Environment Variables

IO ?=

# Application dependencies

yarn.lock: package.json
	@yarn install

node_modules: yarn.lock
	@yarn install --frozen-lockfile --check-files

.PHONY: install
install: node_modules ## Install project dependencies

.PHONY: upgrade
upgrade: ## Upgrades project dependencies to their latest version (works only if project dependencies were installed at least once)
	@yarn upgrade-interactive --latest
	@yarn upgrade

# Serve and build-prod

.PHONY: serve
serve: node_modules ## Run the application using Vue CLI development server (hit CTRL+c to stop the server)
	@yarn serve

.PHONY: build
build: node_modules ## Build the production artifacts
	@yarn build

# Tests

.PHONY: tests
tests: node_modules ## Execute all the tests
	@echo ""
	@echo "|----------------------|"
	@echo "| Lint the stylesheets |"
	@echo "|----------------------|"
	@echo ""
	@make stylelint
	@echo ""
	@echo "|--------------------------|"
	@echo "| Lint the TypeScript code |"
	@echo "|--------------------------|"
	@echo ""
	@make eslint
	@echo ""
	@echo "|-------------------|"
	@echo "| Check type errors |"
	@echo "|-------------------|"
	@echo ""
	@make type-check
	@echo ""
	@echo "|----------------|"
	@echo "| Run unit tests |"
	@echo "|----------------|"
	@echo ""
	@make unit
	@echo ""
	@echo "|-------------------------------|"
	@echo "| Run business acceptance tests |"
	@echo "|-------------------------------|"
	@echo ""
	@make acceptance
	@echo ""
	@echo "|--------------------------------|"
	@echo "| Run adapters integration tests |"
	@echo "|--------------------------------|"
	@echo ""
	@make integration
	@echo ""
	@echo "|----------------------|"
	@echo "| Run end-to-end tests |"
	@echo "|----------------------|"
	@echo ""
	@make end-to-end IO="--headless"

.PHONY: stylelint
stylelint: ## Lint the LESS code
	@yarn run -s stylelint

.PHONY: eslint
eslint: ## Lint the TypeScript code
	@yarn run -s lint

.PHONY: type-check
type-check: ## Look for type errors
	@yarn run type-check

.PHONY: unit
unit: ## Run unit tests — use "make unit IO=path/to/test" to run a specific test
	@JEST_JUNIT_OUTPUT_DIR="tests/reports" JEST_JUNIT_OUTPUT_NAME="unit.xml" yarn run test:unit ${IO}

.PHONY: acceptance
acceptance: ## Run business acceptance tests — use "make acceptance IO=path/to/test" to run a specific test
	@JEST_JUNIT_OUTPUT_DIR="tests/reports" JEST_JUNIT_OUTPUT_NAME="acceptance.xml" yarn run test:acceptance ${IO}

.PHONY: integration
integration: ## Run adapters integration tests — use "make integration IO=path/to/test" to run a specific test
	@JEST_JUNIT_OUTPUT_DIR="tests/reports" JEST_JUNIT_OUTPUT_NAME="integration.xml" yarn run test:integration ${IO}

.PHONY: end-to-end
end-to-end: ## Run end to end tests — use "make end-to-end IO='--headless'" for headless mode and "make end-to-end IO='--headless -s path/to/test'" to run a specific test (works only in headless mode)
	@MOCHA_FILE="tests/reports/e2e.xml" yarn run test:e2e ${IO}
