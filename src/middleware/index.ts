import thunkMiddleware from 'redux-thunk';
import routerMiddleware from './router';
import { history } from '../utils';
import { createLogger } from 'redux-logger';
import { Middleware } from 'redux';

const middleware: Middleware[] = [
  thunkMiddleware,
  routerMiddleware(history)
];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default middleware;