import thunkMiddleware from 'redux-thunk';
import routerMiddleware from './router';
import { createLogger } from 'redux-logger';
import { history } from '../utils';
import { Middleware } from 'redux';

const middleware: Middleware[] = [
  thunkMiddleware,
  routerMiddleware(history)
];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default middleware;