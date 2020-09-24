import constants from '../constants';
import { RouteProps } from 'react-router';

export interface AppRoute {
  id: Number;
  component: () => Promise<any>;
  props: RouteProps;
  secure?: boolean;
}

export interface RouteAction {
  type: string;
  payload: AppRoute;
}

const defaultState: AppRoute[] = [{
  id: 1,
  component: () => import('../components/AppLoading'),
  props: {
    path: '/',
    exact: false
  },
  secure: false
}];

export function routes(state: AppRoute[] = defaultState, action: RouteAction) {
  switch (action.type) {
    case constants.routes.ROUTE_ADDED:
      const newRoutes = [...state];
      if (!state.find((route: any) => route.id === action.payload.id)) {
        newRoutes.push(action.payload);
      }
      return newRoutes;
    case constants.routes.ROUTE_REPLACED:
      return state.filter((route: any) => route.id !== action.payload.id);
    default:
      return state;
  }
}