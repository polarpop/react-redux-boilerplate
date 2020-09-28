import constants from '../../constants';
import { reducer, routes as Routes } from '../../types';

export default function routes(
  state: reducer.State<Routes.RouteState[]> = [],
  action: reducer.Action<Routes.RouteState>
) {
  switch (action.type) {
    case constants.routes.ROUTE_ADDED:
      if (!state.find((route: any, index: number) => action.payload.id === index)) {
        return [
          ...state,
          action.payload
        ] as Routes.RouteState[];
      }
      return state;
    case constants.routes.ROUTE_REPLACED:
      return state.filter(
        (route: any, index: number) => action.payload.id !== index
      ) as Routes.RouteState[];
    default:
      return state;
  }
}