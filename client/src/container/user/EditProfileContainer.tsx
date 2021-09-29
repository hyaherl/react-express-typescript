import React from 'react';
import SignUp from '../../components/user/SignUp';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { User } from '../../interface';
import axios from '../../util/axios';
import { useHistory } from 'react-router';

interface EditProfileContainerProps {
    user: User | null;
}

function EditProfileContainer({ user }: EditProfileContainerProps) {
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
            email: user ? user.email : '',
            password: '',
            confirmPassword: '',
            nickname: user ? user.nickname : '',
        },
        validationSchema: SignUpSchema,
        onSubmit: values => {
            editProfile(values.email, values.password, values.nickname);
        },
    });

    const editProfile = (email: string, password: string, nickname: string) => {
        axios
            .put(
                '/user/modify',
                {
                    email: email,
                    password: password,
                    nickname: nickname,
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + window.localStorage.getItem('jwt'),
                    },
                },
            )
            .then(res => {
                alert('Edit Success');
                linkPage('/user/profile');
            });
    };

    return (
        <div>
            <SignUp formik={formik} title={'Edit Profile'} />
        </div>
    );
}

export default EditProfileContainer;
