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
  default = "arn:aws:acm:us-east-1:539783510382:certificate/1958390f-ab4f-4ba4-93f8-7e9b1931e379"
}

locals {
  website_domain         = "tyrsius.com"
  website_zoneId         = "354543"
  s3_bucket_website_name = "${local.website_domain}"
}
