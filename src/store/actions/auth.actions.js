import { homeInstance } from "../../api";
import history from "../../history";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SET_AUTHENTICATION = "SET_AUTHENTICATION";
export const SET_UNAUTHORIZED = "SET_UNAUTHORIZED";

export function addUser(user) {
  return dispatch => {
    return homeInstance
      .post("/signup", user)
      .then(response => {
        return Promise.all([
          dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
          })
        ]);
      })
      .catch(error => {
        dispatch({
          type: REGISTER_ERROR,
          payload: error.response.data.error.message
        });
      });
  };
}

export function login(user) {
  return dispatch => {
    return homeInstance
      .post("/login", user)
      .then(response => {
        return Promise.all([
          localStorage.setItem("jwt", response.data.token),
          dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data.user
          }),
          history.push(`/${response.data.user.userName}/Dashboard`)
        ]);
      })
      .catch(error => {
        dispatch({
          type: LOGIN_ERROR,
          payload: error.response.data.error.message
        });
      });
  };
}
export function setAuthentication() {
  return dispatch => {
    dispatch({
      type: SET_AUTHENTICATION,
      payload: localStorage.getItem("jwt")
    });
  };
}

export function setUnauthorized() {
  return dispatch => {
    dispatch({
      type: SET_UNAUTHORIZED
    });
  };
}
