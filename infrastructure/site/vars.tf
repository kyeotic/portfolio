variable site_name { }
variable cert_arn { }

output cloudfront_domain {
 value = "${aws_cloudfront_distribution.site.domain_name}"
}

output cloudfront_hosted_zone_id {
  value = "${aws_cloudfront_distribution.site.hosted_zone_id}"
}
