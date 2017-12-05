SUBDOMAIN      := rui
ROOT_DOMAIN    := esayemm.com
NAME           := $(SUBDOMAIN).$(ROOT_DOMAIN)
EXAMPLE_OUTPUT := ./example_build
export

.PHONY: deploy build.example

deploy: build.example
	./node_modules/kontinuum-s3-deploy/script.sh --name $(NAME) $(EXAMPLE_OUTPUT)
	./node_modules/kontinuum-route53/script.sh --name $(NAME) --root $(ROOT_DOMAIN)

build.example:
	rm -rf $(EXAMPLE_OUTPUT)
	BABEL_REACT=true NODE_PATH=./example:./example/app:./src ./node_modules/jbs-fe/bin.js build \
							--app-index ./example/app/index.js \
							--html-index ./example/index.html \
							--context ./example \
							--output-path $(EXAMPLE_OUTPUT)
							# --favicon-path ./example/assets/images/cat.jpg \

story:
	@NODE_PATH=./src ./node_modules/@storybook/react/bin/index.js -p 9001 -c .storybook
