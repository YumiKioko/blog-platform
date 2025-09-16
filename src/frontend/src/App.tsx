import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={
              <div className="page-container">
                <h2>?? Posts Management</h2>
                <p>View and manage all blog posts (Coming Soon)</p>
              </div>
            } />
            <Route path="/analytics" element={
              <div className="page-container">
                <h2>?? Analytics Dashboard</h2>
                <p>Real-time analytics and insights (Coming Soon)</p>
              </div>
            } />
            <Route path="/login" element={
              <div className="page-container">
                <h2>?? User Login</h2>
                <p>Secure authentication system (Coming Soon)</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
