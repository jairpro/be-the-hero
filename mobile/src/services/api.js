import axios from 'axios';

const api = axios.create({
  // baseURL: 'exp://192.168.0.102:19000'
  baseURL: 'http://192.168.0.102:3340'
  // baseURL: 'http://192.168.0.1:3340'
  // baseURL: 'http://localhost:3340'
  // baseURL: 'http://192.168.0.102:3333'
});

export default api;
