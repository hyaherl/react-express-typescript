import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../../components/user/Login';

type LoginContainerProps = {
    login: (email: string, password: string) => void;
};

function LoginContainer({ login }: LoginContainerProps) {
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
        login(email, password);
        linkPage('/');
    };

    return (
        <div>
            <Login formChange={formChange} signIn={signIn} signUp={() => linkPage('/signUp')} />
        </div>
    );
}

export default LoginContainer;
