#!/bin/bash

# npm run build

pushd infrastructure/edge
zip ../lambda.zip lambda.js
popd

pushd infrastructure/terraform
terraform init
terraform apply
popd

# aws s3 sync build s3://tyrsius.com