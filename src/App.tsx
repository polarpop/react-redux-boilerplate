import React from 'react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import { createMaterialTheme, history, generateRouteId } from './utils';
import { App } from './containers';

import { createStore } from './store';
import { primaryTheme } from './themes';

const theme = createMaterialTheme(primaryTheme)();

const initialState = {
  app: {
    theme,
    loading: true
  },
  routes: [{
    id: generateRouteId(),
    component: () => import('./containers/NotFound'),
    secure: false,
    lazyLoad: true,
    props: {
      path: '*'
    }
  }]
}

function Main() {

  const store = createStore(initialState);
  return (
    <Provider store={store}>
      <HelmetProvider>
        <App history={history} />
      </HelmetProvider>
    </Provider>
  );
}

export default Main;
