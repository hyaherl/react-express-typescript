import React from 'react';
import Login from '../../components/auth/Login';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Axios } from '../../util/Axios';

function LoginContainer({ setToken, linkPage }: any) {
    const LoginSchema = yup.object().shape({
        email: yup.string().email('Email must be a valid email address').required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .max(20, 'Password should be of maximum 20 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            login(values.email, values.password);
        },
    });

    const login = (email: string, password: string) => {
        Axios.post('/user/login', {
            email: email,
            password: password,
        })
            .then(res => {
                const jwt = res.data.token;
                window.localStorage.setItem('jwt', jwt);
                if (jwt) {
                    setToken(jwt);
                    alert('Login Success');
                    linkPage('/');
                }
            })
            .catch(err => {
                console.log(err);
                alert('Please check your Email and Password.');
            });
    };

    return (
        <div>
            <Login formik={formik} signUp={() => linkPage('/auth/signUp')} />
        </div>
    );
}

export default LoginContainer;
