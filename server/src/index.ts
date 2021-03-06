import 'dotenv/config';
import 'reflect-metadata';
import * as express from 'express';
import routes from './routes';
import { createConnection } from 'typeorm';
const cors = require('cors');
const app: express.Application = express();
const port = process.env.PORT || 3000;
const passport = require('passport');
const passportConfig = require('./config/passport');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
passportConfig();

app.use('/api', routes);

createConnection()
    .then(() => {
        app.listen(port, () => {
            console.log('┌───────────── DB CONNECTION ─────────────┐');
            console.log(`│ Server running at http://localhost:${port} │`);
            console.log('└─────────────────────────────────────────┘');
        });
    })
    .catch(error => console.log(error));

export default app;
