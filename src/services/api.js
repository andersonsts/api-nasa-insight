import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.nasa.gov/insight_weather/?api_key=${process.env.API_KEY}&feedtype=json&ver=1.0`,
});

export default api;
