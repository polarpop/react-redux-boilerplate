import constants from '../../constants';
import { reducer } from '../../types';
import { Routes } from '../../types/routes'

export default function routes(
  state: reducer.State<Routes.Route[]> = [],
  action: reducer.Action<Routes.Route>
) {
  switch (action.type) {
    case constants.routes.ROUTE_ADDED:
      if (!state.find((route: Routes.Route) => action.payload.id === route.id)) {
        return [
          ...state,
          action.payload
        ] as Routes.Route[];
      }
      return state;
    case constants.routes.ROUTE_REPLACED:
      return state.filter(
        (route: Routes.Route, index: number) => action.payload.id !== route.id
      ) as Routes.Route[];
    default:
      return state as Routes.Route[];
  }
}