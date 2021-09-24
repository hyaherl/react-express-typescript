import React, { useState } from 'react';
import axios from '../../util/axios';
import SignUp from '../../components/user/SignUp';

function SignUpContainer() {
    const [user, setUser] = useState({
        email: '',
        password: '',
        nickname: '',
    });
    const { email, password, nickname } = user;

    const formChange = (e: any) => {
        const { name, value } = e.target;
        setUser({
            ...user,
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
            });
    };

    return (
        <div>
            <SignUp formChange={formChange} signUp={signUp} />
        </div>
    );
}

export default SignUpContainer;
