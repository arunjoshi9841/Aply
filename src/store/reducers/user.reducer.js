import * as Actions from "../actions";

const initialState = {
  };

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS:
      console.log(action.payload);
      return action.payload;
    case Actions.SET_UNAUTHORIZED:
    return initialState;
      default:
        return state;
    }
  }
