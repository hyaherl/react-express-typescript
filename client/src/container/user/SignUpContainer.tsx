import React from 'react';
import axios from '../../util/axios';
import SignUp from '../../components/user/SignUp';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';

function SignUpContainer() {
    const history = useHistory();
    const linkPage = (path: string) => {
        history.push(path);
    };

    const SignUpSchema = yup.object().shape({
        email: yup.string().email('Email must be a valid email address').required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .max(20, 'Password should be of maximum 20 characters length')
            .required('Password is required'),
        nickname: yup
            .string()
            .min(2, 'Nickname should be of minimum 2 characters length')
            .max(10, 'Nickname should be of maximum 10 characters length')
            .required('Nickname is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            nickname: '',
        },
        validationSchema: SignUpSchema,
        onSubmit: values => {
            signUp(values.email, values.password, values.nickname);
        },
    });

    const signUp = (email: string, password: string, nickname: string) => {
        axios
            .post('/user/signUp', {
                email: email,
                password: password,
                nickname: nickname,
            })
            .then(res => {
                linkPage('/login');
            });
    };

    return (
        <div>
            <SignUp formik={formik} />
        </div>
    );
}

export default SignUpContainer;
