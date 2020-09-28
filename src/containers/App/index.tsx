import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import { useSelector } from 'react-redux';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Helmet } from 'react-helmet-async';

import { ErrorBoundary, LazyRoute } from '../../components';
import { Routes } from '../../types/routes';


export default function MainApp(props: any) {

  const theme = useSelector((state: any) => state.app.theme);

  const title = useSelector((state: any) => state.app.title);

  const routes = useSelector(({ user, routes }: { user: any, routes: any }) => {
    if (user?.authenticated) {
      return routes;
    }
    return routes.filter((route: Routes.Route) => !route.secure);
  });

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <CssBaseline />
      <ErrorBoundary>
        <ConnectedRouter history={props.history}>
          <Switch>
            {routes.map((route: Routes.Route, index: number) => (
              <LazyRoute
                route={{ ...route.props }}
                component={route.component}
                key={route.id}></LazyRoute>
            ))}
          </Switch>
        </ConnectedRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}