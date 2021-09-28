import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

type LogInProps = {
    formChange: (e: any) => void;
    signIn: () => void;
    signUp: () => void;
};

function Login({ formChange, signIn, signUp }: LogInProps) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                margin: '0 auto',
            }}
            noValidate
            autoComplete="off"
        >
            <h1>Login</h1>
            <Grid container direction="column" alignItems="center">
                <TextField id="email" name="email" label="email" onChange={formChange} />
                <TextField id="password" name="password" label="password" type="password" onChange={formChange} />
                <Grid item>
                    <Button onClick={signIn}>Sign In</Button>
                    <Button onClick={signUp}>Sign Up</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
