module "watcher" {
  source      = "github.com/kyeotic/tf-domain-heartbeat"
  lambda_name = "portfolio-watcher"
  watch_url   = "kye.dev"
}
