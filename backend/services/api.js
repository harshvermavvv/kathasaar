import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // port yahi hai jo tumne backend me set kiya tha
});

export default api;
