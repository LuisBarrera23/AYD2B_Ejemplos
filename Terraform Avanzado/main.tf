resource "tls_private_key" "example_ssh"{
    algorithm = "RSA"
    rsa_bits = 2048
}

resource "local_file" "private_key"{
    content = tls_private_key.example_ssh.private_key_pem
    filename = "${path.module}/key.pem"
    file_permission = "0600"
}

resource "local_file" "public_key"{
    content = tls_private_key.example_ssh.public_key_openssh
    filename = "${path.module}/key.pub"
}

resource "google_compute_instance" "frontend"{
    name = var.instance_name
    machine_type = "e2-small"
    zone = "us-central1-c"

    boot_disk{
        initialize_params{
            image = "ubuntu-2004-focal-v20240307b"
        }
    }

    network_interface{
        network = "default"
        # Aquí especificamos la IP estática reservada
        access_config {
            nat_ip = "34.66.242.225"
        }
    }

    metadata = {
        ssh-keys = "desistemasanalisis:${tls_private_key.example_ssh.public_key_openssh}"
    }

    provisioner "remote-exec"{
        connection{
            type = "ssh"
            user = "desistemasanalisis"
            private_key = tls_private_key.example_ssh.private_key_pem
            host = self.network_interface[0].access_config[0].nat_ip
        }
    inline = [
    "sudo apt-get update",
    "sudo apt-get install -y software-properties-common",
    "sudo add-apt-repository --yes --update ppa:ansible/ansible",
    "sudo apt-get install -y ansible",
    "sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common",
    "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -",
    "sudo add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable\"",
    "sudo apt-get update",
    "sudo apt-get install -y docker-ce docker-ce-cli containerd.io",
    "mkdir -p /home/desistemasanalisis/ansible"
    ]
    }

    # agregar el file provisioner para copiar la carpeta local de ansible al destino remoto (vm)
    provisioner "file"{
        source = "C:/Users/luisb.ANGEL_BARRERA/Desktop/Ejemplo terraform AYD2B/ansible/playbook.yml"
        destination = "/home/desistemasanalisis/ansible/playbook.yml"

        connection{
            type = "ssh"
            user = "desistemasanalisis"
            private_key = tls_private_key.example_ssh.private_key_pem
            host = self.network_interface[0].access_config[0].nat_ip
        }

    }

    provisioner "remote-exec"{
        connection{
            type = "ssh"
            user = "desistemasanalisis"
            private_key = tls_private_key.example_ssh.private_key_pem
            host = self.network_interface[0].access_config[0].nat_ip
        }
        inline = [
            "ansible-playbook /home/desistemasanalisis/ansible/playbook.yml"
        ]
    }

    
}

resource "google_compute_firewall" "allow_http"{
    name = "allow-http"
    network = "default"

    allow{
        protocol = "tcp"
        ports = ["3000"]
    }

    source_ranges = ["0.0.0.0/0"]
}