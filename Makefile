SHELL = bash

# Environment Variables

O ?=

# Build Docker images

.PHONY: pull
pull:
	docker-compose pull

.PHONY: build-prod
build-prod: pull
	docker-compose build --pull prod

# Prepare the application dependencies

.PHONY: update-node-modules
update-node-modules:
	docker-compose run --rm node yarn upgrade-interactive --latest
	docker-compose run --rm node yarn upgrade

yarn.lock: package.json
	docker-compose run --rm node yarn install

node_modules: yarn.lock
	docker-compose run --rm node yarn install --frozen-lockfile --check-files

# Serve the applications

.PHONY: dev
dev: node_modules
	docker-compose run --rm --service-ports node yarn serve

.PHONY: prod
prod: build-prod
	docker-compose up -d prod

# Clean the containers

.PHONY: down
down:
	docker-compose down -v

# Test the app

.PHONY: stylelint
stylelint:
	docker-compose run --rm node yarn run -s stylelint ${O}

.PHONY: eslint
eslint:
	docker-compose run --rm node yarn run -s lint ${O}

.PHONY: type-check
type-check:
	docker-compose run --rm node yarn run type-check

.PHONY: unit-tests
unit-tests:
	docker-compose run --rm -e JEST_JUNIT_OUTPUT_DIR="./reports" -e JEST_JUNIT_OUTPUT_NAME="jest.xml" node yarn run test:unit ${O}

.PHONY: tests
tests: node_modules
	$(MAKE) stylelint
	$(MAKE) eslint
	$(MAKE) type-check
	$(MAKE) unit-tests
