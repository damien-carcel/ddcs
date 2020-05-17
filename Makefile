# Build Docker images

.PHONY: pull
pull:
	docker-compose pull

.PHONY: build
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
	docker-compose run --rm node yarn run stylelint

.PHONY: eslint
eslint:
	docker-compose run --rm node yarn run lint -f junit -o tests/results/eslint.xml

.PHONY: fix-eslint
fix-eslint:
	docker-compose run --rm node yarn run lint --fix

.PHONY: type-check
type-check:
	docker-compose run --rm node yarn run type-check

.PHONY: unit-tests
unit-tests:
	docker-compose run --rm node yarn run test:unit

.PHONY: tests
tests: node_modules
	$(MAKE) stylelint
	$(MAKE) eslint
	$(MAKE) type-check
	$(MAKE) unit-tests
