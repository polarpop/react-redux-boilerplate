import loggingMiddleware from './logger';
import thunkMiddleware from 'redux-thunk';
import routerMiddleware from './router';

const middleware = [
  thunkMiddleware,
  routerMiddleware
];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(loggingMiddleware);
}

export default middleware;