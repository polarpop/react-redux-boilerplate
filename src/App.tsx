import React from 'react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import { createMaterialTheme, history } from './utils';
import { App } from './containers';


import { createStore } from './store';
import { primaryTheme } from './themes';



function Main() {
  const initialState = {
    app: {
      theme: createMaterialTheme(primaryTheme)(),
      useResponsiveFonts: true,
      title: 'Loading...',
      loading: true
    },
    routes: []
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
