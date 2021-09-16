const appName = "Server API";
const port = process.env.PORT || 3000;

// External Libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const moment = require('moment');

// Configuration
const app = express();

function createServer() {
    const routes = require('./routes');
    const user = require('./routes/User');

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

const server = createServer();

server.listen(port, () => console.log(`${appName} running on port ${port}!`));