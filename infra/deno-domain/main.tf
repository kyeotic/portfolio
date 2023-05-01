#-------------------------------------------
# Required variables (do not add defaults here!)
#-------------------------------------------
variable "zone_name" {}
variable "domain_name" {}
variable "deno_acme" {}

#-------------------------------------------
# Configurable variables
#-------------------------------------------

variable "deno_a" {
  default = "34.120.54.55"
}
variable "deno_aaaa" {
  default = "2600:1901:0:6d85::"
}

#-------------------------------------------
# Main
#-------------------------------------------

data "aws_route53_zone" "domain" {
  name = "${var.zone_name}."
}

resource "aws_route53_record" "a" {
  name    = var.domain_name
  zone_id = data.aws_route53_zone.domain.zone_id
  type    = "A"
  ttl     = 300
  records = [var.deno_a]
}

resource "aws_route53_record" "aaaa" {
  name    = var.domain_name
  zone_id = data.aws_route53_zone.domain.zone_id
  type    = "AAAA"
  ttl     = 300
  records = [var.deno_aaaa]
}

resource "aws_route53_record" "acme" {
  name    = "_acme-challenge.${var.domain_name}"
  zone_id = data.aws_route53_zone.domain.zone_id
  type    = "CNAME"
  ttl     = 300
  records = [var.deno_acme]
}
