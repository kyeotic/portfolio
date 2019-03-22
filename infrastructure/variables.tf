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
  tyrsius_apex  = "tyrsius.com"
  tyrsius_www   = "www.tyrsius.com"
  kye_plus_apex = "kye.plus"
  kye_plus_www  = "www.kye.plus"

  kye_dev_apex = "kye.dev"
  kye_dev_www  = "www.kye.dev"
  kye_dev_tim  = "tim.kye.dev"

  cloufront__domains = ["tyrsius.com", "kye.dev"]
}
