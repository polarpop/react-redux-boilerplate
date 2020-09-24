import { combineReducers } from "redux";
import { user } from './user';
import { routes } from './routes';
import { history } from '../utils';
import { app } from './app';
import { connectRouter } from 'connected-react-router'

const router = connectRouter(history);

export const reducers = {
  app,
  user,
  routes,
  router
};

const rootReducer = combineReducers(reducers);

export default rootReducer;