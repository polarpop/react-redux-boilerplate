import React from 'react';
import { Route, RouteProps } from 'react-router';
import AppLoading from '../AppLoading';

type LazyRouteProps = {
  route: RouteProps,
  component: () => Promise<any>
}

const LazyRoute = ({ route, component }: LazyRouteProps) => {
  const LazyComponent = React.lazy(() => component());

  return (
    <React.Suspense fallback={<AppLoading></AppLoading>}>
      <Route {...route} component={LazyComponent}></Route>
    </React.Suspense>

  );
}

export default LazyRoute;