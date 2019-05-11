
module "kyeotic_redirect" {
  source = "./redirect"
  site_name = "${local.kyeotic_www}"
  redirect_to = "${local.kyeotic_apex}"
  cert_arn = "${module.cert_kyeotic.arn}"
}

module "kye_redirect" {
  source = "./redirect"
  site_name = "${local.kye_dev_www}"
  redirect_to = "${local.kye_dev_apex}"
  cert_arn = "${module.cert_kye.arn}"
}