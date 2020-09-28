import { combineReducers } from "redux";
import { default as loading } from './loading';
import { default as theme } from './theme';
import { default as title } from './title';
import { default as error } from './error';

const reducers = {
  loading,
  theme,
  title,
  error
}

export const app = combineReducers(reducers);