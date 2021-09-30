import axios from 'axios';

export const Axios = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-type': 'application/json',
    },
});

Axios.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('jwt');
    return config;
});
