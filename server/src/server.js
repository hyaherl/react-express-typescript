// External Libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const moment = require('moment');

// Configuration
const app = express();

function createServer() {
    const routes = require('./routes');
    const user = require('./routes/user');

    const _log = function (req, res, next) {
        console.log(moment().format());
        next();
    };

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(_log);
    app.use(cors());

    app.use('/api', routes);
    app.use('/api', user);

    return app;
}

module.exports = createServer;