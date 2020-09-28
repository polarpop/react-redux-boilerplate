import React from 'react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import { createMaterialTheme, history } from './utils';
import { App } from './containers';


import { createStore } from './store';
import { primaryTheme } from './themes';

const theme = createMaterialTheme(primaryTheme)();

function Main() {
  const initialState = {
    app: {
      theme,
      title: 'Welcome!',
      loading: true
    },
    routes: [],
    user: {}
  };
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
