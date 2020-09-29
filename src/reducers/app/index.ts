import { combineReducers } from "redux";
import { default as loading } from './loading';
import { default as theme } from './theme';
import { default as error } from './error';

const reducers = {
  loading,
  theme,
  error
}

export const app = combineReducers(reducers);