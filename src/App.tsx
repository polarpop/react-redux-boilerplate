import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router';

import { ErrorBoundary, LazyRoute } from './components';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './utils';
import { AppRoute } from './reducers/routes';

function App() {
  const theme = useSelector((state: any) => state.theme.theme);
  const routes = useSelector((state: any) => {
    if (state.user.authenticated) {
      return state.routes;
    }
    return state.routes.filter((route: any) => !route.secure);
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <Switch>
            {routes.map((route: AppRoute, index: number) => (
              <LazyRoute
                route={{ ...route.props }}
                component={route.component}
                key={index}></LazyRoute>
            ))}
          </Switch>
        </ConnectedRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );

}

export default App;
