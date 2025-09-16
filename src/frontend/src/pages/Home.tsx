import React, { useState, useEffect } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [servicesStatus, setServicesStatus] = useState({
    auth: 'checking',
    posts: 'checking',
    analytics: 'checking'
  });

  useEffect(() => {
    // Simulate service status checking
    const checkServices = async () => {
      setTimeout(() => {
        setServicesStatus({
          auth: 'online',
          posts: 'online', 
          analytics: 'online'
        });
      }, 1000);
    };

    checkServices();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return '#28a745';
      case 'offline': return '#dc3545';
      case 'checking': return '#ffc107';
      default: return '#6c757d';
    }
  };

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Our Blog Platform</h1>
        <p>A modern microservices-based blogging platform built with Docker and React</p>
        <div className="hero-stats">
          <div className="stat">
            <h3>3+</h3>
            <span>Microservices</span>
          </div>
          <div className="stat">
            <h3>2+</h3>
            <span>Databases</span>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <span>Dockerized</span>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>? Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">??</div>
            <h3>User Authentication</h3>
            <p>Secure JWT-based authentication system with user registration and login</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">??</div>
            <h3>Blog Management</h3>
            <p>Create, read, and manage blog posts with a clean interface</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">??</div>
            <h3>Real-time Analytics</h3>
            <p>Track page views and user engagement metrics in real-time</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">??</div>
            <h3>Dockerized</h3>
            <p>Complete containerization with Docker and microservices architecture</p>
          </div>
        </div>
      </div>

      <div className="status-section">
        <h2>?? Service Status</h2>
        <div className="status-grid">
          <div className="status-item">
            <div 
              className="status-indicator" 
              style={{ backgroundColor: getStatusColor(servicesStatus.auth) }}
            ></div>
            <span>Auth Service</span>
            <span className="status-text">{servicesStatus.auth}</span>
          </div>
          <div className="status-item">
            <div 
              className="status-indicator" 
              style={{ backgroundColor: getStatusColor(servicesStatus.posts) }}
            ></div>
            <span>Posts Service</span>
            <span className="status-text">{servicesStatus.posts}</span>
          </div>
          <div className="status-item">
            <div 
              className="status-indicator" 
              style={{ backgroundColor: getStatusColor(servicesStatus.analytics) }}
            ></div>
            <span>Analytics Service</span>
            <span className="status-text">{servicesStatus.analytics}</span>
          </div>
        </div>
      </div>

      <div className="tech-stack">
        <h2>??? Technology Stack</h2>
        <div className="tech-grid">
          <div className="tech-item">React + TypeScript</div>
          <div className="tech-item">Node.js + Express</div>
          <div className="tech-item">Python + Flask</div>
          <div className="tech-item">MongoDB</div>
          <div className="tech-item">Redis</div>
          <div className="tech-item">Docker</div>
          <div className="tech-item">JWT Auth</div>
          <div className="tech-item">Nginx</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
