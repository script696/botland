import * as express from 'express';
import { router } from 'routes';
import * as bodyParser from 'body-parser';
import { initProvider } from 'providers/InitProvider';

const { PORT = 6000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });
  next();
});

initProvider.initServer();

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
