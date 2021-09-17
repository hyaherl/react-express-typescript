import 'dotenv/config';
import * as express from 'express';
import routes from './routes';
import connectDB from './database/mongoDB';

connectDB();

const app: express.Application = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
