import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/auth';

const api = axios.create({
  baseURL: API_BASE,
});

export const register = (user) => api.post('/signup', user);
export const login = (credentials) => api.post('/login', credentials);
export const getAllUsers = (token) =>
  api.get('/all', { headers: { Authorization: `Bearer ${token}` } });

export default api;
