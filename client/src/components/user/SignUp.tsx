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

type SignUpProps = {
    formChange: (e: any) => void;
    signUp: () => void;
};

function SignUp({ formChange, signUp }: SignUpProps) {
    const classes = useStyles();
    return (
        <div>
            <h1>Sign Up</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.div}>
                    <TextField id="email" name="email" label="email" onChange={formChange} />
                    <TextField id="password" name="password" label="password" type="password" onChange={formChange} />
                    <TextField id="nickname" name="nickname" label="nickname" onChange={formChange} />
                    <Button onClick={signUp}>Sign Up</Button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
