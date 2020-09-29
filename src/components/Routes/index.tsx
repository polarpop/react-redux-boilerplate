import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router';

import { Routes } from '../../types/routes';
import AppLoading from '../AppLoading'

const LazyRouteComponent = ({ component }: any) => {
  let Lazy = React.lazy(component);
  return () => (
    <React.Suspense fallback={<AppLoading />}>
      <Lazy></Lazy>
    </React.Suspense>
  );
}

const mapStateToRoutes = (routes: Routes.Route[]) => {
  return routes.map((route: Routes.Route) => {
    return Object.assign({}, route, {
      component: route.lazyLoad ?
        LazyRouteComponent({ component: route.component }) :
        route.component
    })
  })
}


export default (): JSX.Element => {
  const routes = useSelector(({ user, routes }: { user: any, routes: Routes.Route[] }) => {
    if (user?.authenticated) {
      return mapStateToRoutes(routes);
    }
    return mapStateToRoutes(routes.filter((route: Routes.Route) => !route.secure));
  });

  return (
    <Switch>
      {routes.map((route: Routes.Route) =>
        <Route
          key={route.id}
          component={route.component}
          {...route.props}>
        </Route>
      )}
    </Switch>
  );
}