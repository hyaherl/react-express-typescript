import React, { useState } from 'react';
import axios from '../../util/axios';
import Login from '../../components/user/Login';
import { useHistory } from 'react-router';
import jwtDecode from 'jwt-decode';

interface User {
    email: string;
    nickname: string;
    exp: number;
    iat: number;
}

type LoginContainerProps = {
    setUser: (e: User) => void;
};

function LoginContainer({ setUser }: LoginContainerProps) {
    const history = useHistory();
    const linkPage = (path: string) => {
        history.push(path);
    };

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });
    const { email, password } = loginForm;

    const formChange = (e: any) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        });
    };

    const signIn = () => {
        axios
            .post('/user/login', {
                email: email,
                password: password,
            })
            .then(res => {
                const jwt = res.data.token;
                window.localStorage.setItem('jwt', JSON.stringify(jwt));
                if (jwt) {
                    const token: User = jwtDecode(jwt);
                    setUser(token);
                    linkPage('/');
                }
            });
    };

    return (
        <div>
            <Login formChange={formChange} signIn={signIn} signUp={() => linkPage('/signUp')} />
        </div>
    );
}

export default LoginContainer;
