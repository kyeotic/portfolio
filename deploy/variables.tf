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
  website_zoneId         = "${local.tyrsius_hosted_zone_id}"
  website_domain         = "tyrsius.com"
  alternate_domains      = ["www.tyrsius.com"]
  s3_bucket_website_name = "${local.website_domain}"
}
