import 'dotenv/config';
import * as express from 'express';

const app: express.Application = express();
const port = process.env.PORT || 8080;

app.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'Hello TypeScript!',
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
