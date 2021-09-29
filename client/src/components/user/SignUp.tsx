import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

interface SignUpProps {
    formik: any;
}

function SignUp({ formik }: SignUpProps) {
    const { errors, touched, values, handleSubmit, handleChange } = formik;

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                margin: '0 auto',
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <h1>Sign Up</h1>
            <Grid container direction="column" alignItems="flex-start">
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    type="email"
                    onChange={handleChange}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                />
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                />
                <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                    helperText={touched.confirmPassword && errors.confirmPassword}
                />
                <TextField
                    id="nickname"
                    name="nickname"
                    label="Nickname"
                    value={values.nickname}
                    onChange={handleChange}
                    error={Boolean(touched.nickname && errors.nickname)}
                    helperText={touched.nickname && errors.nickname}
                />
                <Button type="submit">Sign Up</Button>
            </Grid>
        </Box>
    );
}

export default SignUp;
