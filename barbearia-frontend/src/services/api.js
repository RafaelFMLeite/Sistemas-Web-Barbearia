// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  login(email, password) {
    return apiClient.post('/login', { email, password });
  },
  getProfissionais(token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return apiClient.get('/profissionais');
  },
  getServicos(token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return apiClient.get('/servicos');
  }
};