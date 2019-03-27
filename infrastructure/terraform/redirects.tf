resource "aws_route53_record" "tyrsius_www" {
  name    = "${local.tyrsius_www}"
  zone_id = "${data.aws_route53_zone.tyrsius_com.zone_id}"
  type    = "A"

  alias {
    name                   = "${aws_cloudfront_distribution.redirect.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.redirect.hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "kye_plus_apex" {
  name    = "${local.kye_plus_apex}"
  zone_id = "${data.aws_route53_zone.kye_plus.zone_id}"
  type    = "A"

  alias {
    name                   = "${aws_cloudfront_distribution.redirect.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.redirect.hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "kye_plus_www" {
  name    = "${local.kye_plus_www}"
  zone_id = "${data.aws_route53_zone.kye_plus.zone_id}"
  type    = "A"

  alias {
    name                   = "${aws_cloudfront_distribution.redirect.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.redirect.hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "kye_dev_www" {
  name    = "${local.kye_dev_www}"
  zone_id = "${data.aws_route53_zone.kye_dev.zone_id}"
  type    = "A"

  alias {
    name                   = "${aws_cloudfront_distribution.redirect.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.redirect.hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_s3_bucket" "redirect" {
  bucket = "${local.kye_dev_www}"
  acl    = "private"

  policy = <<EOF
{
      "Id": "bucket_policy_redirect",
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "bucket_policy_redirect_main",
          "Action": [
            "s3:GetObject"
          ],
          "Effect": "Allow",
          "Resource": "arn:aws:s3:::${local.kye_dev_www}/*",
          "Principal": "*"
        }
      ]
    }
EOF

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

resource "aws_cloudfront_distribution" "redirect" {
  enabled         = true
  is_ipv6_enabled = true
  price_class     = "PriceClass_100"

  "origin" {
    origin_id = "origin-bucket-${aws_s3_bucket.redirect.id}"

    domain_name = "${aws_s3_bucket.redirect.website_endpoint}"

    custom_origin_config {
      origin_protocol_policy = "http-only"
      http_port              = "80"
      https_port             = "443"
      origin_ssl_protocols   = ["SSLv3", "TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  default_root_object = "index.html"

  custom_error_response {
    error_code         = "404"
    response_code      = "200"
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = "403"
    response_code      = "200"
    response_page_path = "/index.html"
  }

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD", "DELETE", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods  = ["GET", "HEAD"]

    "forwarded_values" {
      query_string = "true"

      cookies {
        forward = "none"
      }
    }

    min_ttl          = "0"
    default_ttl      = "300"
    max_ttl          = "1200"
    target_origin_id = "origin-bucket-${aws_s3_bucket.redirect.id}"

    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }

  "viewer_certificate" {
    acm_certificate_arn      = "${var.website_certifcate_arn}"
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1"
  }

  aliases = ["${local.redirect_domains}"]

  restrictions = {
    geo_restriction = {
      restriction_type = "none"
    }
  }
}
