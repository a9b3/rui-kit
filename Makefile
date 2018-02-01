PORT ?= 5021
EXAMPLE_OUTPUT ?= ./exampleBuild

all: help

help:
	@echo ""
	@echo "  deps          - Installs dependencies"
	@echo "  dev           - Runs development server         PORT ?= $(PORT)"
	@echo "  story         - Runs storybook server           PORT ?= $(PORT)"
	@echo "  lint          - Runs linter with fix"
	@echo "  test          - Runs tests                      FILE ?= *"
	@echo "  test.watch    - TDD                             FILE ?= *"
	@echo "  build         - Transpile source code"
	@echo "  build.example - Transpile example site code"
	@echo "  push          - Push to aws"
	@echo ""

deps:
	@yarn

dev: deps
	@PORT=$(PORT) BABEL_REACT=true NODE_PATH=./example:./example/app:./src \
		./node_modules/jbs-fe/bin.js dev \
			--app-index ./example/app/index.js \
			--html-index ./example/index.html \
			--context ./example \
			--favicon-path ./example/assets/images/cat.jpg

story: deps
	@NODE_PATH=./src ./node_modules/@storybook/react/bin/index.js -p $(PORT) -c .storybook

lint:
	@./node_modules/prettier/bin-prettier.js "{src,example}/**/*.js"
	@./node_modules/eslint/bin/eslint.js . --fix

test:
	@BABEL_REACT=true NODE_PATH=./src \
		./node_modules/jbs-fe/bin.js test --single-run

test.watch:
	@BABEL_REACT=true NODE_PATH=./src:./src/app \
		./node_modules/jbs-fe/bin.js test

.PHONY: build
build:
	@rm -rf ./build
	@BABEL_REACT=true NODE_PATH=./src ./node_modules/jbs-fe/bin.js build:package \
		--input src \
		--output build \
		--es-input-file src/index.js \
		--es-output-file build/index.es.js

.PHONY: build.example
build.example:
	@rm -rf $(EXAMPLE_OUTPUT)
	@BABEL_REACT=true NODE_PATH=./example:./example/app:./src ./node_modules/jbs-fe/bin.js build \
		--app-index ./example/app/index.js \
		--html-index ./example/index.html \
		--context ./example \
		--output-path $(EXAMPLE_OUTPUT)

push: build.example
	@./node_modules/kontinuum-push/build/bin/index.js push \
		--domain adeptlr.com \
		--source ./build
