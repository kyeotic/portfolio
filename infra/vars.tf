variable "region" {
  default = "us-west-2"
}

variable "cloudflare_account_name" {
  default = "tim@kye.dev"
}

locals {
  domains = {
    apex = {
      zone   = "kye.dev"
      domain = "kye.dev"
    }
    tim = {
      zone   = "kye.dev"
      domain = "tim.kye.dev"
    }
    www = {
      zone   = "kye.dev"
      domain = "www.kye.dev"
    }
  }
}
