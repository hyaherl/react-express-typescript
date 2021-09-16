import React, { useState } from 'react';
import axios from '../../util/axios';
import Login from '../../components/user/Login';
import SignUp from '../../components/user/SignUp';

function User() {
  const [user, setUser] = useState({
    id: '',
    password: '',
  });
  const { id, password } = user;

  const formChange = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const signIn = () => {
    axios
      .post('/user', {
        id: id,
        password: password,
      })
      .then(res => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <Login formChange={formChange} signIn={signIn} />
      {/* <SignUp /> */}
    </div>
  );
}

export default User;
