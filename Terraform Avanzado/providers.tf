terraform{
    required_providers {
      google = {
        source = "hashicorp/google"
        version = "~> 4.60"
      }
    }
}

provider "google"{
    project = "banded-charmer-433803-u1"
    region = "us-central1"
    credentials = file("./key.json")
}