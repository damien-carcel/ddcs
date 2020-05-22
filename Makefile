SHELL = bash

# Environment Variables

ESL_OUT ?=
JEST_OUT ?=
SL_OUT ?=

SILENT =
ifneq (${SL_OUT},)
SILENT = -s
endif

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

yarn.lock: package.json
	docker-compose run --rm node yarn install

node_modules: yarn.lock
	docker-compose run --rm node yarn install --frozen-lockfile --check-files

# Serve the applications

.PHONY: serve
serve: node_modules
	docker-compose run --rm --service-ports node yarn serve

.PHONY: install
install: build-prod
	docker-compose up -d prod

# Clean the containers

.PHONY: down
down:
	docker-compose down -v

# Test the app

.PHONY: stylelint
stylelint:
	docker-compose run --rm node yarn run ${SILENT} stylelint ${SL_OUT}

.PHONY: eslint
eslint:
	docker-compose run --rm node yarn run lint ${ESL_OUT}

.PHONY: fix-eslint
fix-eslint:
	docker-compose run --rm node yarn run lint --fix

.PHONY: type-check
type-check:
	docker-compose run --rm node yarn run type-check

.PHONY: unit-tests
unit-tests:
	docker-compose run --rm -e JEST_JUNIT_OUTPUT_DIR="./reports" -e JEST_JUNIT_OUTPUT_NAME="jest.xml" node yarn run test:unit ${JEST_OUT}

.PHONY: tests
tests: node_modules
	$(MAKE) stylelint
	$(MAKE) eslint
	$(MAKE) type-check
	$(MAKE) unit-tests
