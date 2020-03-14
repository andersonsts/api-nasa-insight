import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://api.nasa.gov/insight_weather/?api_key=kmkGUKNUDgfCkCchD0KtfYc4YkumfDofTIH6d7xj&feedtype=json&ver=1.0',
});

export default api;
