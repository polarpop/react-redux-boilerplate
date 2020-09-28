import constants from '../constants';
import { reducer } from '../types';
import { Routes } from '../types/routes';
import { generateRouteId } from '../utils';

export const onRouteAdded = (route: Routes.Route): reducer.Action<Routes.Route> => ({
  type: constants.routes.ROUTE_ADDED,
  payload: Object.assign({}, route, {
    id: route.id ? route.id : generateRouteId()
  })
})

export const onRouteReplaced = (route: Routes.Route): reducer.Action<Routes.Route> => ({
  type: constants.routes.ROUTE_REPLACED,
  payload: route
});