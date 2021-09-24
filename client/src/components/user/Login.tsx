import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    div: {
        margin: '0 auto',
    },
}));

type LogInProps = {
    formChange: (e: any) => void;
    signIn: () => void;
    signUp: () => void;
};

function Login({ formChange, signIn, signUp }: LogInProps) {
    const classes = useStyles();
    return (
        <div>
            <h1>Login</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.div}>
                    <TextField id="email" name="email" label="email" onChange={formChange} />
                    <TextField id="password" name="password" label="password" type="password" onChange={formChange} />
                    <Button onClick={signIn}>Sign In</Button>
                    <Button onClick={signUp}>Sign Up</Button>
                </div>
            </form>
        </div>
    );
}

export default Login;
