const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  const hello = req.query.hello;
  res.json({message : 'Hello ' + hello});
  console.log('Hello ' + hello);
});

module.exports = router;