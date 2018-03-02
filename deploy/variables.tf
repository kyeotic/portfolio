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
  default = "arn:aws:acm:us-east-1:902498034412:certificate/98bcfef0-f40a-4fa2-8cbb-9c0e38058470"
}

locals {
  kye_hosted_zone_id     = "Z17II5IIER1BTY"
  tyrsius_hosted_zone_id = "Z1BAMZ42AZF64R"
  bucket_domain         = "tyrsius.com"
  bucket_zone_id         = "${local.tyrsius_hosted_zone_id}"
  
  tyrsius_apex           = "tyrsius.com"
  tyrsius_alias          = "www.tyrsius.com"
  kye_apex               = "kye.plus"
  kye_alias              = "www.kye.plus"

  cloufront__domains     = ["tyrsius.com", "www.tyrsius.com", "www.kye.plus", "kye.plus"]
}
