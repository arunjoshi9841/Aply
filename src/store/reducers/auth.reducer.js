import * as Actions from "../actions/auth.actions";

const initialState = {
  isAuthenticated: false,
  loginError: "",
  registerError: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loginError: ""
      };
    case Actions.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      };
    case Actions.REGISTER_SUCCESS:
      return state;

    case Actions.REGISTER_ERROR:
      return {
        ...state,
        registerError: action.payload
      };
    case Actions.SET_AUTHENTICATION:
      if (action.payload) {
        return {
          ...state,
          isAuthenticated: true
        };
      } else {
        return state;
      }
    case Actions.SET_UNAUTHORIZED:
      localStorage.removeItem('jwt');
      return {...state, isAuthenticated:false};
    default:
      return state;
  }
}
