import { RootStateOrAny } from 'react-redux';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import middlewares from '../middleware';
import rootReducer from '../reducers';

export function configureStore<State = RootStateOrAny>(initialState?: State): Store<State> {
  let middleware = applyMiddleware(...middlewares);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  } else {
    middleware = compose(middleware);
  }

  return createStore(
    rootReducer,
    initialState as any,
    middleware
  ) as Store<State>;
}