import { combineReducers } from "redux";
import router from './router';
import { app } from './app';


export const reducers = {
  app,
  ...router
};

const rootReducer = combineReducers(reducers);

export default rootReducer;