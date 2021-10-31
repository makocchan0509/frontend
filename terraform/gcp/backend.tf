terraform {
  backend "gcs" {
    bucket  = "terraform-masem"
    prefix  = "state"
  }
}

