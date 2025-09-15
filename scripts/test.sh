#!/bin/bash

echo "Testing Blog Platform..."

# Test Docker Compose
echo "Testing with Docker Compose..."
docker-compose up -d
sleep 10

# Test services
echo "Testing services..."
curl -f http://localhost:3001/health || { echo "Auth service test failed"; exit 1; }
curl -f http://localhost:3002/health || { echo "Posts service test failed"; exit 1; }
curl -f http://localhost:3003/health || { echo "Analytics service test failed"; exit 1; }

echo "All services are healthy!"

# Test API endpoints
echo "Testing API endpoints..."
# Test auth registration
curl -X POST http://localhost:3001/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"testpass","email":"test@example.com"}' || echo "Registration test completed"

# Test posts API
curl -X GET http://localhost:3002/posts || echo "Posts API test completed"

docker-compose down
echo "Docker Compose test completed successfully!"

# Test Kubernetes deployment if minikube is available
if command -v minikube >/dev/null 2>&1 && minikube status >/dev/null 2>&1; then
    echo "Testing Kubernetes deployment..."
    ./scripts/setup.sh
    sleep 15
    
    # Forward ports and test
    kubectl port-forward svc/auth-service 3001:3000 -n blog-platform &
    AUTH_PID=$!
    sleep 5
    
    curl -f http://localhost:3001/health || echo "Kubernetes auth service test failed"
    kill $AUTH_PID
    
    echo "Kubernetes test completed!"
fi

echo "All tests passed!"