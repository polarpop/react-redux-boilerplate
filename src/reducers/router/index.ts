import { combineReducers } from 'redux';
import { default as routerReducer } from './router';
import { default as routes } from './routes';

const reducers = {
  router: routerReducer,
  routes
};

export const router = combineReducers(reducers);