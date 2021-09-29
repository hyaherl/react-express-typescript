import React from 'react';
import { Axios } from '../../util/Axios';
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
        confirmPassword: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .max(20, 'Password should be of maximum 20 characters length')
            .oneOf([yup.ref('password')], 'Paswords must match')
            .required('Confirm Password is required'),
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
            confirmPassword: '',
            nickname: '',
        },
        validationSchema: SignUpSchema,
        onSubmit: values => {
            signUp(values.email, values.password, values.nickname);
        },
    });

    const signUp = (email: string, password: string, nickname: string) => {
        Axios.post('/user/signUp', {
            email: email,
            password: password,
            nickname: nickname,
        }).then(res => {
            if (res.data.message === 'exist') {
                alert('Email already exists.');
            } else {
                alert('Sign Up Success');
                linkPage('/user/login');
            }
        });
    };

    return (
        <div>
            <SignUp formik={formik} title={'Sign Up'} />
        </div>
    );
}

export default SignUpContainer;
