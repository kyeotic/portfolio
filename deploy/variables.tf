variable "region" {
  default = "us-west-2"
}

data "aws_caller_identity" "current" {}

provider "aws" {
  region = "${var.region}"
}

terraform {
  backend "s3" {
    bucket               = "tyrsius-terraform-state"
    key                  = "portfolio"
    workspace_key_prefix = "portfolio"
    region               = "us-west-2"
  }
}

variable website_certifcate_arn {
  default = "arn:aws:acm:us-east-1:902498034412:certificate/2c5ae0da-cd9e-4083-9324-e68343e9d28e"
}

locals {
  bucket_domain = "tyrsius.com"

  tyrsius_apex = "tyrsius.com"
  tyrsius_www  = "www.tyrsius.com"
  kye_apex     = "kye.plus"
  kye_alias    = "www.kye.plus"

  kye_dev_apex  = "kye.dev"
  kye_dev_alias = "www.kye.dev"

  cloufront__domains = ["tyrsius.com", "www.tyrsius.com", "www.kye.plus", "kye.plus", "www.kye.dev", "kye.dev"]
}
