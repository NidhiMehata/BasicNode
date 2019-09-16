import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { config } from './config';
import { userRouter } from './resources/user/user.router';
import { connect } from './utils/db';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api', userRouter);

/**
 * function connects to database and starts http server on configured port and hostname
 */
export const start = async () => {
  try {
    await connect();
    await app.listen(config.port, config.hostURL);
    console.log(`REST API on http://localhost:${config.port}/api`);
  } catch (err) {
    console.error(err);
  }
};


start();
