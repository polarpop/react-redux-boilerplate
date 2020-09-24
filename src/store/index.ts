import { createStore, applyMiddleware, compose } from 'redux';


import middleware from './middleware';
import rootReducer from '../reducers';

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      ...middleware
    )
  )
);