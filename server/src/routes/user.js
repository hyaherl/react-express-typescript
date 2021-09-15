const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/user', (req, res) => {
    const user = new User(req.body.id, req.body.password);
    console.log("Sign Up Id :: " + user.getId());
    console.log("Sign Up Password :: " + user.getPassword());
    res.json(user);
});

module.exports = router;