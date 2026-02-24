variable "region" {
  default = "us-west-2"
}

locals {
  deno = {
    apex = {
      zone   = "kye.dev"
      domain = "kye.dev"
      acme   = "98b697f68feb1b814060641f._acme.deno.dev."
    }
    tim = {
      zone   = "kye.dev"
      domain = "tim.kye.dev"
      acme   = "80a7cef2461bc99ec82cea30._acme.deno.dev."
    }
    www = {
      zone   = "kye.dev"
      domain = "www.kye.dev"
      acme   = "c7cc99277264edac23839c5c._acme.deno.dev."
    }
  }
}
