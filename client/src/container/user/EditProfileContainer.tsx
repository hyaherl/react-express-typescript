import React, { useEffect } from 'react';
import SignUp from '../../components/auth/SignUp';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Axios } from '../../util/Axios';

function EditProfileContainer({ profile, linkPage }: any) {
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
            email: profile ? profile.email : '',
            password: '',
            confirmPassword: '',
            nickname: profile ? profile.nickname : '',
        },
        validationSchema: SignUpSchema,
        onSubmit: values => {
            editProfile(values.email, values.password, values.nickname);
        },
    });

    useEffect(() => {
        console.log('hello');
    }, [profile]);

    const editProfile = (email: string, password: string, nickname: string) => {
        Axios.put('/user/modify', {
            email: email,
            password: password,
            nickname: nickname,
        }).then(() => {
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
