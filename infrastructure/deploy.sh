#!/bin/bash

# npm run build

pushd infrastructure/terraform
terraform init
terraform apply
popd

aws s3 sync build s3://kyeotic.com
aws s3 cp build/index.html s3://kyeotic.com/index.html --cache-control max-age=0