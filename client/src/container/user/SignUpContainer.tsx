import React, { useState } from 'react';
import axios from '../../util/axios';
import SignUp from '../../components/user/SignUp';
import { useHistory } from 'react-router-dom';

function SignUpContainer() {
    const history = useHistory();
    const linkPage = (path: string) => {
        history.push(path);
    };

    const [signUpForm, setSignUpForm] = useState({
        email: '',
        password: '',
        nickname: '',
    });
    const { email, password, nickname } = signUpForm;

    const formChange = (e: any) => {
        const { name, value } = e.target;
        setSignUpForm({
            ...signUpForm,
            [name]: value,
        });
    };

    const signUp = () => {
        axios
            .post('/user/signUp', {
                email: email,
                password: password,
                nickname: nickname,
            })
            .then(res => {
                console.log(res.data);
                linkPage('/login');
            });
    };

    return (
        <div>
            <SignUp formChange={formChange} signUp={signUp} />
        </div>
    );
}

export default SignUpContainer;
