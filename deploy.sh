#!/bin/bash

# npm run build

pushd deploy
terraform init
terraform apply
popd

# aws s3 sync build s3://tyrsius.com