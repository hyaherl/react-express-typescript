import axios from 'axios';
const BASEURL = process.env.REACT_APP_BASEURL;

export const Axios = axios.create({
    baseURL: BASEURL,
    headers: {
        'Content-type': 'application/json',
    },
});

Axios.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('jwt');
    return config;
});
