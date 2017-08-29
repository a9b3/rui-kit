SUBDOMAIN   := rui
ROOT_DOMAIN := esayemm.com
NAME        := $(SUBDOMAIN).$(ROOT_DOMAIN)
export

.PHONY: deploy

deploy:
	npm run build:example
	./node_modules/kontinuum-s3-deploy/script.sh --name $(NAME) ./example-build
	./node_modules/kontinuum-route53/script.sh --name $(NAME) --root $(ROOT_DOMAIN)
