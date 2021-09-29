import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

interface LogInProps {
    formik: any;
    signUp: () => void;
}

function Login({ formik, signUp }: LogInProps) {
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
            <h1>Login</h1>
            <Grid container direction="column" alignItems="flex-start">
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={values.email}
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
                <Grid item>
                    <Button type="submit">Login</Button>
                    <Button onClick={signUp}>Sign Up</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
