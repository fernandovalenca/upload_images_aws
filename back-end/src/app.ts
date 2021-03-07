import express from 'express';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

import { mongoDB } from './database/MongoDB';
import routes from './routes';

const app = express();
app.use(cors())
app.use(cors())

dotenv.config();
mongoDB.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
app.use(routes);

export default app;