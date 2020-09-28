import constants from '../../constants';
import { reducer } from '../../types';

const { app } = constants;


export default function error(
  state: reducer.State<Error | null> = null,
  action: reducer.Action<{
    error: Error
  }>
) {
  switch (action.type) {
    case app.APP_ERROR_CREATED:
      return action.payload.error;
    case app.APP_ERROR_DISMISSED:
      return null;
    default:
      return state;
  }
}