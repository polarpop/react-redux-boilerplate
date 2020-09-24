import { RootStateOrAny } from 'react-redux';
import { createStore as createReduxStore, applyMiddleware, compose, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import middlewares from '../middleware';
import rootReducer from '../reducers';

export function createStore<State = RootStateOrAny>(
  initialState?: State
): Store<State> {
  const middleware = process.env.NODE_ENV === 'production' ?
    compose(applyMiddleware(...middlewares)) :
    composeWithDevTools(applyMiddleware(...middlewares));

  return createReduxStore(
    rootReducer,
    initialState as State,
    middleware
  ) as Store<State>;
}