import { RootStateOrAny } from 'react-redux';
import { createStore as createReduxStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import middlewares from '../middleware';
import rootReducer from '../reducers';

export function createStore<State = RootStateOrAny>(
  initialState?: State
) {
  const middleware = process.env.NODE_ENV !== 'production' ?
    composeWithDevTools(applyMiddleware(...middlewares)) :
    compose(applyMiddleware(...middlewares));

  return createReduxStore(
    rootReducer,
    initialState as State,
    middleware
  );
}