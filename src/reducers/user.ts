import constants from '../constants';

export function user(state = {}, action: any) {
  switch (action.type) {
    case constants.user.GET_CURRENT_USER:
      return {
        ...action.currentUser
      };
    case constants.user.AUTHENTICATE_USER:
      return {
        ...action.currentUser
      };
    default:
      return state;
  }
}