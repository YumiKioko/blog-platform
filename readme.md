# Microservices Blog Platform with Docker and Kubernetes

A complete blog platform built with microservices architecture, Docker containers, and Kubernetes orchestration.

## Features

- User authentication and authorization
- Blog post management
- Analytics and tracking
- Docker containerization
- Kubernetes deployment
- Redis caching
- MongoDB data storage

## Architecture

- **Frontend**: Nginx serving static content
- **Auth Service**: Node.js/Express for user management
- **Posts Service**: Node.js/Express for blog posts with Redis caching
- **Analytics Service**: Python/Flask for tracking and analytics
- **Database**: MongoDB for persistent data storage
- **Cache**: Redis for caching and analytics data

## Quick Start

### Prerequisites

- Docker and Docker Compose
- Kubernetes (Minikube or similar for local development)
- kubectl

### Using Docker Compose

```bash
# Start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs

# Stop services
docker-compose down