SHELL = bash

# Environment Variables

O ?=

# Docker Compose services

.PHONY: pull
pull:
	docker-compose pull

.PHONY: down
down:
	docker-compose down -v

# Application dependencies

.PHONY: update-node-modules
update-node-modules:
	docker-compose run --rm node yarn upgrade-interactive --latest
	docker-compose run --rm node yarn upgrade

yarn.lock: package.json
	docker-compose run --rm node yarn install

node_modules: yarn.lock
	docker-compose run --rm node yarn install --frozen-lockfile --check-files

# Serve and build-prod

.PHONY: build
serve: node_modules
	docker-compose run --rm --service-ports node yarn serve

.PHONY: build
build: node_modules
	docker-compose run --rm --service-ports node yarn build

# Tests

.PHONY: stylelint
stylelint:
	docker-compose run --rm node yarn run -s stylelint

.PHONY: eslint
eslint:
	docker-compose run --rm node yarn run -s lint

.PHONY: type-check
type-check:
	docker-compose run --rm  node yarn run type-check

.PHONY: unit
unit:
	docker-compose run --rm -e JEST_JUNIT_OUTPUT_DIR="tests/reports" -e JEST_JUNIT_OUTPUT_NAME="unit.xml" node yarn run test:unit ${O}

.PHONY: end-to-end
end-to-end:
	docker-compose run --rm -e MOCHA_FILE="tests/reports/e2e.xml" cypress yarn run test:e2e --headless ${O}

.PHONY: end-to-end-x11-sharing
end-to-end-x11-sharing:
	docker-compose run --rm -e DISPLAY -v "/tmp/.X11-unix:/tmp/.X11-unix" cypress yarn run test:e2e

.PHONY: tests
tests: node_modules
	$(MAKE) stylelint
	$(MAKE) eslint
	$(MAKE) type-check
	$(MAKE) unit
	$(MAKE) end-to-end
