import axios from 'axios';

const api = axios.create({
    baseURL: "http://172.22.95.97:3000"
})

export default api;