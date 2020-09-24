import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router';

import { ErrorBoundary, LazyRoute } from '../../components';
import { ConnectedRouter } from 'connected-react-router';
import { AppRoute } from '../../reducers/routes';
import { Helmet } from 'react-helmet-async';

export default function MainApp({ history }: any) {

  const app = useSelector((state: any) => state.app);

  const dispatch = useDispatch();

  const routes = useSelector((state: any) => {
    if (state.user.authenticated) {
      return state.routes;
    }
    return state.routes.filter((route: any) => !route.secure);
  });

  return (
    <ThemeProvider theme={app.theme}>
      <Helmet>
        <title>{app.title}</title>
      </Helmet>
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