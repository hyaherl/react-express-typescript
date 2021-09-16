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

type LoginProps = {
  formChange: (e: any) => void;
  signUp: () => void;
};

function Login({ formChange, signUp }: LoginProps) {
  const classes = useStyles();
  return (
    <div>
      <h1>Sign Up</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.div}>
          <TextField id="id" name="id" label="id" onChange={formChange} />
          <TextField id="password" name="password" label="password" onChange={formChange} />
          <Button onClick={signUp}>Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
