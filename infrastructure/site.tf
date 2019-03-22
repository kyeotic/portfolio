data "aws_iam_policy_document" "website_s3_policy" {
  statement {
    sid       = "bucket_policy_site_main"
    actions   = ["s3:GetObject"]
    effect    = "Allow"
    resources = ["arn:aws:s3:::${local.tyrsius_apex}/*"]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.website_origin_access_identity.iam_arn}"]
    }
  }
}

resource "aws_cloudfront_origin_access_identity" "website_origin_access_identity" {
  comment = "site ${terraform.workspace} Access Identity"
}

resource "aws_s3_bucket" "site" {
  bucket = "${local.tyrsius_apex}"
  acl    = "private"
  policy = "${data.aws_iam_policy_document.website_s3_policy.json}"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

resource "aws_cloudfront_distribution" "site" {
  enabled         = true
  is_ipv6_enabled = true
  price_class     = "PriceClass_100"

  "origin" {
    origin_id = "origin-bucket-${aws_s3_bucket.site.id}"

    # domain_name = "${aws_s3_bucket.site.website_endpoint}"
    domain_name = "${local.tyrsius_apex}.s3.amazonaws.com"

    s3_origin_config {
      origin_access_identity = "${aws_cloudfront_origin_access_identity.website_origin_access_identity.cloudfront_access_identity_path}"
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

  "default_cache_behavior" {
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
    target_origin_id = "origin-bucket-${aws_s3_bucket.site.id}"

    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }

  ordered_cache_behavior {
    allowed_methods = ["GET", "HEAD", "DELETE", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods  = ["GET", "HEAD"]

    forwarded_values {
      query_string = "true"

      cookies {
        forward = "none"
      }
    }

    min_ttl          = "0"
    default_ttl      = "0"
    max_ttl          = "0"
    target_origin_id = "origin-bucket-${aws_s3_bucket.site.id}"
    path_pattern     = "/index.html"

    // This redirects any HTTP request to HTTPS. Security first!
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }

  "viewer_certificate" {
    acm_certificate_arn      = "${var.website_certifcate_arn}"
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1"
  }

  aliases = ["${local.cloufront__domains}"]

  restrictions = {
    geo_restriction ={
      restriction_type = "none"
    }
  }
}
