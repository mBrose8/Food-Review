import axios from 'axios';

const api = axios.create({
    baseURL: "http://10.3.60.241:3000"
})

export default api;