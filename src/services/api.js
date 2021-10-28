import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backendcnc.herokuapp.com'
})

export default api;