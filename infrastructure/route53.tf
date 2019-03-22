data "aws_route53_zone" "tyrsius_com" {
  name = "tyrsius.com."
}

data "aws_route53_zone" "kye_plus" {
  name = "kye.plus."
}

data "aws_route53_zone" "kye_dev" {
  name = "kye.dev."
}

resource "aws_route53_record" "tyrsius_apex" {
  name    = "${local.tyrsius_apex}"
  zone_id = "${data.aws_route53_zone.tyrsius_com.zone_id}"
  type    = "A"

  alias {
    name                   = "${aws_cloudfront_distribution.site.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.site.hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "kye_dev_apex" {
  name    = "${local.kye_dev_apex}"
  zone_id = "${data.aws_route53_zone.kye_dev.zone_id}"
  type    = "A"

  alias {
    name                   = "${aws_cloudfront_distribution.site.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.site.hosted_zone_id}"
    evaluate_target_health = false
  }
}
