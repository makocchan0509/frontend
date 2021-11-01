terraform {
  backend "gcs" {
    bucket = "terraform-masem"
    prefix = "keycloak-state"
  }
}
