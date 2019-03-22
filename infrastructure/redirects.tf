module "tyrsius_www_redirect" {
  source  = "./redirect"
  zone_id = "${data.aws_route53_zone.tyrsius_com.zone_id}"
  name    = "${local.tyrsius_www}"
  target  = "${local.tyrsius_apex}"
  cert_arn = "${var.website_certifcate_arn}"
}

module "kye_plus_apex_redirect" {
  source  = "./redirect"
  zone_id = "${data.aws_route53_zone.kye_plus.zone_id}"
  name    = "${local.kye_plus_apex}"
  target  = "${local.kye_dev_apex}"
  cert_arn = "${var.website_certifcate_arn}"
}

module "kye_plus_www_redirect" {
  source  = "./redirect"
  zone_id = "${data.aws_route53_zone.kye_plus.zone_id}"
  name    = "${local.kye_plus_www}"
  target  = "${local.kye_dev_apex}"
  cert_arn = "${var.website_certifcate_arn}"
}

module "kye_dev_www_redirect" {
  source  = "./redirect"
  zone_id = "${data.aws_route53_zone.kye_dev.zone_id}"
  name    = "${local.kye_dev_www}"
  target  = "${local.kye_dev_apex}"
  cert_arn = "${var.website_certifcate_arn}"
}

module "kye_dev_tim_redirect" {
  source  = "./redirect"
  zone_id = "${data.aws_route53_zone.kye_dev.zone_id}"
  name    = "${local.kye_dev_tim}"
  target  = "${local.kye_dev_apex}"
  cert_arn = "${var.website_certifcate_arn}"
}