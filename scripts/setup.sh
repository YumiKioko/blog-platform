#!/bin/bash

echo "Setting up Blog Platform..."

# Check prerequisites
command -v docker >/dev/null 2>&1 || { echo "Docker is required but not installed"; exit 1; }
command -v kubectl >/dev/null 2>&1 || { echo "kubectl is required but not installed"; exit 1; }

# Build Docker images
echo "Building Docker images..."
docker build -t auth-service:latest src/auth-service/
docker build -t posts-service:latest src/posts-service/
docker build -t analytics-service:latest src/analytics-service/
docker build -t frontend:latest src/frontend/

# Deploy to Kubernetes
echo "Deploying to Kubernetes..."
kubectl apply -f infra/k8s/namespace.yaml
kubectl apply -f infra/k8s/configmap.yaml
kubectl apply -f infra/k8s/secret.yaml
kubectl apply -f infra/k8s/mongodb.yaml
kubectl apply -f infra/k8s/redis.yaml
kubectl apply -f infra/k8s/ingress.yaml

kubectl apply -f src/auth-service/k8s/
kubectl apply -f src/posts-service/k8s/
kubectl apply -f src/analytics-service/k8s/
kubectl apply -f src/frontend/k8s/

echo "Setup complete!"
echo "Run 'kubectl get pods -n blog-platform' to check deployment status"
echo "Run 'minikube service frontend -n blog-platform' to access the application (if using Minikube)"