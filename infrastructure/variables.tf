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
  default = "arn:aws:acm:us-east-1:902498034412:certificate/5d781cbe-ee50-4a06-b643-825db86c13f1"
}

locals {
  edge_lambda_file = "../lambda.zip"
  kyeotic_apex     = "kyeotic.com"
  kyeotic_www   = "www.kyeotic.com"
  kye_dev_apex     = "kye.dev"
  kye_dev_tim      = "tim.kye.dev"
  kye_dev_www = "www.kye.dev"
}
