const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/user/logIn', (req, res) => {
  const user = new User(req.body.email, req.body.password);
  console.log('Log In Email :: ' + user.getEmail());
  console.log('Log In Password :: ' + user.getPassword());
  res.json(user);
});

router.post('/user/signUp', (req, res) => {
  const user = new User(req.body.email, req.body.password);
  console.log('Sign Up Email :: ' + user.getEmail());
  console.log('Sign Up Password :: ' + user.getPassword());
  res.json(user);
});

module.exports = router;
