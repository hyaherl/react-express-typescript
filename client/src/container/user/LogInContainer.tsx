import React, { useState } from 'react';
import axios from '../../util/axios';
import LogIn from '../../components/user/LogIn';
import { useHistory } from 'react-router';

function LoginContainer() {
  const history = useHistory();
  const linkPage = (path: string) => {
    history.push(path);
  };

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const formChange = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const signIn = () => {
    axios
      .post('/user/logIn', {
        email: email,
        password: password,
      })
      .then(res => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <LogIn formChange={formChange} signIn={signIn} signUp={() => linkPage('/signUp')} />
    </div>
  );
}

export default LoginContainer;
