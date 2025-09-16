import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Our Blog Platform</h1>
        <p>A modern microservices-based blogging platform built with Docker</p>
        <div className="stats">
          <div className="stat-item">
            <h3>3+</h3>
            <p>Microservices</p>
          </div>
          <div className="stat-item">
            <h3>2+</h3>
            <p>Databases</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Dockerized</p>
          </div>
        </div>
      </div>

      <div className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>User Authentication</h3>
            <p>JWT-based secure user registration and login system</p>
          </div>
          <div className="feature-card">
            <h3>Blog Management</h3>
            <p>Create, read, and manage blog posts with ease</p>
          </div>
          <div className="feature-card">
            <h3>Real-time Analytics</h3>
            <p>Track page views and user engagement metrics</p>
          </div>
          <div className="feature-card">
            <h3>Microservices Architecture</h3>
            <p>Decoupled services for scalability and maintainability</p>
          </div>
        </div>
      </div>

      <div className="health-status">
        <h2>Service Status</h2>
        <div className="status-grid">
          <div className="status-item">
            <span className="status-indicator online"></span>
            <span>Auth Service</span>
          </div>
          <div className="status-item">
            <span className="status-indicator online"></span>
            <span>Posts Service</span>
          </div>
          <div className="status-item">
            <span className="status-indicator online"></span>
            <span>Analytics Service</span>
          </div>
          <div className="status-item">
            <span className="status-indicator online"></span>
            <span>MongoDB</span>
          </div>
          <div className="status-item">
            <span className="status-indicator online"></span>
            <span>Redis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;