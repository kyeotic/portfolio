module "deno" {
  source = "./deno-domain"


  for_each = local.deno

  zone_name   = each.value.zone
  domain_name = each.value.domain
  deno_acme   = each.value.acme
}
