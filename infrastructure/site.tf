module "kyeotic_site" {
  source = "./site"
  site_name = "${local.kyeotic_apex}"
  cert_arn = "${module.cert_kyeotic.arn}"
}

module "kye_site" {
  source = "./site"
  site_name = "${local.kye_dev_apex}"
  cert_arn = "${module.cert_kye.arn}"
}

module "kye_tim_site" {
  source = "./site"
  site_name = "${local.kye_dev_tim}"
  cert_arn = "${module.cert_kye.arn}"
}