
provider "aws" {
  region = var.region
}

provider "cloudflare" {}

data "cloudflare_accounts" "self" {
  name = var.cloudflare_account_name
}

locals {
  cloudflare_account_id = data.cloudflare_accounts.self.accounts[0].id
}
data "aws_caller_identity" "current" {}

terraform {
  backend "s3" {}
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.0.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
  required_version = ">= 1.0.10"
}
