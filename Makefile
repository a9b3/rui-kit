SUBDOMAIN   := rui
ROOT_DOMAIN := esayemm.com
NAME        := $(SUBDOMAIN).$(ROOT_DOMAIN)
export

.PHONY: deploy build.example

deploy: build.example
	./node_modules/kontinuum-s3-deploy/script.sh --name $(NAME) ./example-build
	./node_modules/kontinuum-route53/script.sh --name $(NAME) --root $(ROOT_DOMAIN)

build.example:
	rm -rf example-build
	BABEL_REACT=true NODE_PATH=./example:./src ./node_modules/jbs-fe/bin.js build \
							--app-index ./example/index.js \
							--html-index ./example/index.html \
							--context ./example \
							--favicon-path ./example/assets/images/cat.jpg \
							--output-path example-build
