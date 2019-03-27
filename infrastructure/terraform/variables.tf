variable "region" {
  default = "us-west-2"
}

data "aws_caller_identity" "current" {}

provider "aws" {
  region = "${var.region}"
}

provider "aws" {
  region = "us-east-1"
  alias  = "certs"
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
  default = "arn:aws:acm:us-east-1:902498034412:certificate/61c215d9-23d3-4690-ac02-4b2cc0004be1"
}

locals {
  edge_lambda_file = "../lambda.zip"
  tyrsius_apex     = "tyrsius.com"
  tyrsius_www      = "www.tyrsius.com"
  kye_plus_apex    = "kye.plus"
  kye_plus_www     = "www.kye.plus"

  kye_dev_apex = "kye.dev"
  kye_dev_www  = "www.kye.dev"
  kye_dev_tim  = "tim.kye.dev"

  cloufront__domains = ["${local.tyrsius_apex}", "${local.kye_dev_apex}", "${local.kye_dev_tim}", "${local.kye_plus_www}"]
}
