import { reducer } from '../../types';
import constants from '../../constants';

export default function title(
  state: reducer.State<string> = "Not Found",
  action: reducer.Action<string>
) {
  switch (action.type) {
    case constants.app.APP_TITLE_CHANGE:
      return action.payload;
    default:
      return state;
  }
}