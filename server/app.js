const express = require('express');
const app = express();
const port = 3000;

const birds = require('./birds');

var myLogger = function (req, res, next) {
    console.log('::: LOGGED :::');
    req.requestTime = Date.now();
    next();
  };

app.use(myLogger);

app.get('/', (req, res) => {
    const hello = req.query.hello;
    res.send('Hello World! ' + 'Requested at: ' + req.requestTime + '');
    console.log('Hello World! ' + 'Requested at: ' + req.requestTime + '');
});

app.get('/json', (req, res) => {
    res.json({message : 'Hello World!'});
});

app.post('/', (req, res) => {
    res.send('Got a POST request');
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});

// module router
app.route('/book')
  .get((req, res) => {
    res.send('Get a random book');
  })
  .post((req, res) => {
    res.send('Add a book');
  })
  .put((req, res) => {
    res.send('Update the book');
  });

// express.Router
app.use('/birds', birds);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});