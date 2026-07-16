import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:3001'});

export const getProdutos = () => api.get('/produtos');
export const getProdutoPorId = (id) => api.get(`/produtos/${id}`);


export default api;