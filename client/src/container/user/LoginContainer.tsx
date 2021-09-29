import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../../components/user/Login';
import * as yup from 'yup';
import { useFormik } from 'formik';
import jwtDecode from 'jwt-decode';
import axios from '../../util/axios';
import { User } from '../../interface';

function LoginContainer({ setUser }: any) {
    const history = useHistory();
    const linkPage = (path: string) => {
        history.push(path);
    };

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
            })
            .catch(err => {
                console.log(err);
                alert('Please check your Email and Password.');
            });
    };

    return (
        <div>
            <Login formik={formik} signUp={() => linkPage('/signUp')} />
        </div>
    );
}

export default LoginContainer;
