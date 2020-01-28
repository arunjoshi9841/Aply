import * as Actions from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS:
      return action.payload;
    case Actions.SET_USER:
      return action.payload;
    case Actions.SET_UNAUTHORIZED:
      return state;
    default:
      return state;
  }
}
