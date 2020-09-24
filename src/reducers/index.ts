import { combineReducers } from "redux";
import { user } from './user';
import { theme } from './theme';
import { routes } from './routes';
import { history } from '../utils';
import { connectRouter } from 'connected-react-router'

export const reducers = {
  user: user,
  theme: theme,
  router: connectRouter(history),
  routes
};

const rootReducer = combineReducers(reducers);

export default rootReducer;