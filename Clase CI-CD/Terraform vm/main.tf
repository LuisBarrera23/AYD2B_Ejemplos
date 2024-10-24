# Configuración del proveedor de GCP
provider "google" {
  credentials = file("./key.json")
  project     = "banded-charmer-433803-u1"
  region      = "us-central1"
}

# Crear un firewall para abrir el puerto 3000
resource "google_compute_firewall" "default" {
  name    = "allow-http-3000"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["3000"]
  }

  source_ranges = ["0.0.0.0/0"]  # Permitir conexiones desde cualquier dirección IP

  target_tags = ["http-server"]
}

# Crear un firewall para abrir el puerto 80 (HTTP)
resource "google_compute_firewall" "http-firewall" {
  name    = "allow-http"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["80"]
  }

  source_ranges = ["0.0.0.0/0"]  # Permitir conexiones desde cualquier dirección IP

  target_tags = ["http-server"]
}

# Crear un firewall para abrir el puerto 443 (HTTPS)
resource "google_compute_firewall" "https-firewall" {
  name    = "allow-https"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["443"]
  }

  source_ranges = ["0.0.0.0/0"]  # Permitir conexiones desde cualquier dirección IP

  target_tags = ["https-server"]
}

# Crear una instancia de máquina virtual con Ubuntu
resource "google_compute_instance" "default" {
  name         = "my-ubuntu-vm"
  machine_type = "e2-medium"    # Tipo de máquina, puedes ajustar según tus necesidades
  zone         = "us-central1-a" # Cambia la zona según tu preferencia

  tags = ["http-server", "https-server"]

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2004-lts" # Imagen de Ubuntu 20.04 LTS
    }
  }

  network_interface {
    network = "default"

    access_config {
      # Esto habilita la IP pública
    }
  }
}
