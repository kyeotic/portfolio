
apply:
	cd infrastructure && \
	terraform init && \
	terraform apply

destroy:
	cd infrastructure && \
	terraform init && \
	terraform destroy

pack: 
	npm run build

sync:
	aws s3 sync build s3://kyeotic.com
	aws s3 cp build/index.html s3://kyeotic.com/index.html --cache-control max-age=0

	aws s3 sync build s3://kye.dev
	aws s3 cp build/index.html s3://kye.dev/index.html --cache-control max-age=0

	aws s3 sync build s3://tim.kye.dev
	aws s3 cp build/index.html s3://tim.kye.dev/index.html --cache-control max-age=0

deploy: pack sync