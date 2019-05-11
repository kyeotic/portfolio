data "aws_route53_zone" "kyeotic_com" {
  name = "kyeotic.com."
}

data "aws_route53_zone" "kye_dev" {
  name = "kye.dev."
}

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

resource "aws_route53_record" "kyeotic_apex" {
  name    = "${local.kyeotic_apex}"
  zone_id = "${data.aws_route53_zone.kyeotic_com.zone_id}"
  type    = "A"

  alias {
    name                   = "${module.kyeotic_site.cloudfront_domain}"
    zone_id                = "${module.kyeotic_site.cloudfront_hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "kye_dev_apex" {
  name    = "${local.kye_dev_apex}"
  zone_id = "${data.aws_route53_zone.kye_dev.zone_id}"
  type    = "A"

  alias {
    name                   = "${module.kye_site.cloudfront_domain}"
    zone_id                = "${module.kye_site.cloudfront_hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "kye_dev_tim" {
  name    = "${local.kye_dev_tim}"
  zone_id = "${data.aws_route53_zone.kye_dev.zone_id}"
  type    = "A"

  alias {
    name                   = "${module.kye_tim_site.cloudfront_domain}"
    zone_id                = "${module.kye_tim_site.cloudfront_hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "kyeotic_www" {
  name    = "${local.kyeotic_www}"
  zone_id = "${data.aws_route53_zone.kyeotic_com.zone_id}"
  type    = "A"

  alias {
    name                   = "${module.kyeotic_redirect.cloudfront_domain}"
    zone_id                = "${module.kyeotic_redirect.cloudfront_hosted_zone_id}"
    evaluate_target_health = false
  }
}


resource "aws_route53_record" "kye_dev_www" {
  name    = "${local.kye_dev_www}"
  zone_id = "${data.aws_route53_zone.kye_dev.zone_id}"
  type    = "A"

  alias {
    name                   = "${module.kye_redirect.cloudfront_domain}"
    zone_id                = "${module.kye_redirect.cloudfront_hosted_zone_id}"
    evaluate_target_health = false
  }
}
