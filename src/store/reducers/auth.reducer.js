import * as Actions from "../actions/auth.actions";
import { SET_USER } from "../actions/user.actions";
import {SET_MODAL, SET_EDIT_MODAL } from "../actions/home.actions";
const initialState = {
  isAuthenticated: false,
  loginError: "",
  registerError: "",
  initUser: {
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    dob: "",
    address:{
      country: "United States",
      city: "",
      zip: "",
    }
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loginError: "",
      };
    case Actions.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        registerError: "",
      };
    case Actions.REGISTER_ERROR:
      return {
        ...state,
        registerError: action.payload,
      };
    case Actions.SET_AUTHENTICATION:
      if (action.payload) {
        return {
          ...state,
          isAuthenticated: true,
        };
      } else {
        return state;
      }
    case SET_USER:
      return {
        ...state,
        initUser: action.payload,
      };
    case Actions.RESET_ERROR:
      return{
        ...state,
        loginError: "",
        registerError: "",
      }
    case SET_MODAL:
      return {
        ...state,
        loginError: "",
        registerError: "",
      }
      case SET_EDIT_MODAL:
      return {
        ...state,
        registerError: "",
      }

    case Actions.SET_UNAUTHORIZED:
      localStorage.removeItem("jwt");
      return { ...state, isAuthenticated: false, initUser: initialState.initUser };
    default:
      return state;
  }
}
