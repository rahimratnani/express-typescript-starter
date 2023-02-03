import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

import errorHandler from './utils/error-handler.middleware.js';
import userRouter from './modules/user/user.router.js';
import postRouter from './modules/post/post.router.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression());

// Routes
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Express TypeScript Starter' });
});

// 404
// eslint-disable-next-line
app.use('*', (req, res, next) => {
  res.status(404);
  throw new Error('Not found');
});

// Error handler
app.use(errorHandler);

export default app;
