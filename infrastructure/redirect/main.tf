resource "aws_s3_bucket" "redirect" {
  bucket = "${var.site_name}"
  acl    = "public-read"

  policy = <<EOF
{
      "Id": "bucket_policy_site",
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "bucket_policy_site_main",
          "Action": [
            "s3:GetObject"
          ],
          "Effect": "Allow",
          "Resource": "arn:aws:s3:::${var.site_name}/*",
          "Principal": "*"
        }
      ]
    }
EOF

  website {
    redirect_all_requests_to = "${var.redirect_to}"
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

  aliases = ["${var.site_name}"]

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
    acm_certificate_arn      = "${var.cert_arn}"
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1"
  }

  restrictions = {
    geo_restriction = {
      restriction_type = "none"
    }
  }
}
