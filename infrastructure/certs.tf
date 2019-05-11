provider "aws" {
  region = "us-east-1"
  alias  = "certs"
}

module "cert_kyeotic" {
  source = "github.com/azavea/terraform-aws-acm-certificate?ref=1.0.0"

  providers = {
    aws.acm_account     = "aws.certs"
    aws.route53_account = "aws"
  }

  domain_name           = "${local.kyeotic_apex}"
  subject_alternative_names = ["${local.kyeotic_www}"]
  hosted_zone_id        = "${data.aws_route53_zone.kyeotic_com.zone_id}"
  validation_record_ttl = "60"
}

module "cert_kye" {
  source = "github.com/azavea/terraform-aws-acm-certificate?ref=1.0.0"

  providers = {
    aws.acm_account     = "aws.certs"
    aws.route53_account = "aws"
  }

  domain_name           = "${local.kye_dev_apex}"
  subject_alternative_names = ["${local.kye_dev_tim}", "${local.kye_dev_www}"]
  hosted_zone_id        = "${data.aws_route53_zone.kye_dev.zone_id}"
  validation_record_ttl = "60"
}