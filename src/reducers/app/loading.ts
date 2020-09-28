import constants from '../../constants';
import { reducer } from '../../types';

export default function loading(state: reducer.State<boolean> = false, action: reducer.Action<boolean>) {
  switch (action.type) {
    case constants.app.APP_LOADING:
      return true;
    case constants.app.APP_LOADED:
      return false;
    default:
      return state;
  }
}