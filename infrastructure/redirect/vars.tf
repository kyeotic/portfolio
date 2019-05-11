variable site_name {}
variable redirect_to {}
variable cert_arn {}

output cloudfront_domain {
  value = "${aws_cloudfront_distribution.redirect.domain_name}"
}

output cloudfront_hosted_zone_id {
  value = "${aws_cloudfront_distribution.redirect.hosted_zone_id}"
}
