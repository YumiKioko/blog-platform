import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost';

export const authAPI = {
  login: (username: string, password: string) =>
    axios.post(`${API_BASE_URL}:3001/login`, { username, password }),
  
  register: (userData: { username: string; password: string; email: string }) =>
    axios.post(`${API_BASE_URL}:3001/register`, userData),
  
  getProfile: (token: string) =>
    axios.get(`${API_BASE_URL}:3001/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    })
};

export const postsAPI = {
  getPosts: () => axios.get(`${API_BASE_URL}:3002/posts`),
  
  createPost: (postData: { title: string; content: string; author: string }, token: string) =>
    axios.post(`${API_BASE_URL}:3002/posts`, postData, {
      headers: { Authorization: `Bearer ${token}` }
    })
};

export const analyticsAPI = {
  trackPageView: (path: string) =>
    axios.post(`${API_BASE_URL}:3003/analytics/pageview`, { path }),
  
  getAnalytics: () => axios.get(`${API_BASE_URL}:3003/analytics/summary`)
};

export const healthAPI = {
  checkAuthHealth: () => axios.get(`${API_BASE_URL}:3001/health`),
  checkPostsHealth: () => axios.get(`${API_BASE_URL}:3002/health`),
  checkAnalyticsHealth: () => axios.get(`${API_BASE_URL}:3003/health`)
};