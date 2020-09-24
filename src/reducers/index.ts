import { combineReducers } from "redux";
import { user } from './user';
import { theme } from './theme';
import { routes } from './routes';
import { history } from '../utils';
import { connectRouter } from 'connected-react-router'

const router = connectRouter(history);

export const reducers = {
  user,
  theme,
  routes,
  router
};

const rootReducer = combineReducers(reducers);

export default rootReducer;