import jwtDecode from 'jwt-decode';
import { Token } from '../interface';

const isAuthenticated = () => {
    let isAuthenticated = false;
    const token = window.localStorage.getItem('jwt');

    if (token) {
        const jwt: Token = jwtDecode(token);
        const exp = new Date(jwt.exp * 1000);
        const now = new Date();
        isAuthenticated = exp > now ? true : false;
    }

    return isAuthenticated;
};

export { isAuthenticated };
