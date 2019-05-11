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

locals {
  kyeotic_apex     = "kyeotic.com"
  kyeotic_www   = "www.kyeotic.com"
  kye_dev_apex     = "kye.dev"
  kye_dev_tim      = "tim.kye.dev"
  kye_dev_www = "www.kye.dev"
}
