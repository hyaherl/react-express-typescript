import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

type SignUpProps = {
    formChange: (e: any) => void;
    signUp: () => void;
};

function SignUp({ formChange, signUp }: SignUpProps) {
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
            <h1>Sign Up</h1>
            <Grid container direction="column" alignItems="center">
                <TextField id="email" name="email" label="email" onChange={formChange} />
                <TextField id="password" name="password" label="password" type="password" onChange={formChange} />
                <TextField id="nickname" name="nickname" label="nickname" onChange={formChange} />
                <Button onClick={signUp}>Sign Up</Button>
            </Grid>
        </Box>
    );
}

export default SignUp;
