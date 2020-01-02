import * as Actions from "../actions";

const initialState = {
  };

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS:
      return action.payload;
      default:
        return state;
    }
  }
