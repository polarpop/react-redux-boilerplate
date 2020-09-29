import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import { useSelector } from 'react-redux';

import { ConnectedRouter } from 'connected-react-router';
import { ErrorBoundary, RoutesContainer } from '../../components';


export default function MainApp({ history }: any) {

  const theme = useSelector(({ app }: any) => app.theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <RoutesContainer />
        </ConnectedRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}