resource "google_container_cluster" "primary" {
  name = "frontend-cluster"
  remove_default_node_pool = true
  initial_node_count       = 1
}
resource "google_container_node_pool" "primary_preemptible_nodes" {
  name = "frontend-node-pool"
  cluster = google_container_cluster.primary.name
  node_count = 2

  node_config {
    preemptible = true
    machine_type = "e2-medium"
    oauth_scopes = [
      "https://www.googleapis.com/auth/devstorage.read_only",
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
      "https://www.googleapis.com/auth/servicecontrol",
      "https://www.googleapis.com/auth/service.management.readonly",
      "https://www.googleapis.com/auth/trace.append"
    ]
  }
}

resource "google_compute_address" "static_region_ip" {
  name         = "static-region-ip"
  network_tier = "STANDARD"
}

output "static_region_ip" {
  value = google_compute_address.static_region_ip.address
}