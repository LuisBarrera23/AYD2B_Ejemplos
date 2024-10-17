provider "google" {
  credentials = file("./key.json")
  project     = "banded-charmer-433803-u1"
  region      = "us-central1"
}

# VM resource
resource "google_compute_instance" "vm_instance" {
  name         = "ejemplo-simple"
  machine_type = "n1-standard-1"
  zone         = "us-central1-c"

  boot_disk {
    initialize_params {
      image = "ubuntu-2004-focal-v20240307b"
    }
  }

  network_interface {
    network = "default"

    # Assigning the external static IP
    access_config {
      nat_ip = "34.123.153.105"
    }
  }

}
