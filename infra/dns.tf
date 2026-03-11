data "cloudflare_zone" "domain" {
  name = "kye.dev"
}

resource "cloudflare_workers_domain" "portfolio" {
  for_each = local.domains

  account_id = local.cloudflare_account_id
  hostname   = each.value.domain
  service    = "portfolio"
  zone_id    = data.cloudflare_zone.domain.id
}
