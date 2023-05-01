#-------------------------------------------
# Required variables (do not add defaults here!)
#-------------------------------------------

#-------------------------------------------
# Configurable variables
#-------------------------------------------
variable "region" {
  default = "us-west-2"
}

variable "domain_name" {
  default = "kye.dev"
}

variable "zone_name" {
  default = "kye.dev"
}

variable "deno_deploy_a" {
  default = "34.120.54.55"
}

variable "deno_deploy_aaaa" {
  default = "2600:1901:0:6d85::"
}

variable "deno_deploy_acme" {
  default = {
    name  = "_acme-challenge"
    value = "98b697f68feb1b814060641f._acme.deno.dev."
  }
}

# locals {
#   alt_domains = [
#     "kyeotic.com",
#     "www.kyeotic.com",
#     "tim.kye.dev",
#     "www.kye.dev"
#   ]
# }

