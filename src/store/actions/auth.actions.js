import { homeInstance } from "../../api";
import history from "../../history";
import { setNotification } from "./home.actions";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SET_AUTHENTICATION = "SET_AUTHENTICATION";
export const SET_UNAUTHORIZED = "SET_UNAUTHORIZED";
export const RESET_ERROR="RESET_ERROR";

export function addUser(user) {
  return (dispatch) => {
    return homeInstance
      .post("/signup", user)
      .then((response) => {        
        localStorage.setItem("jwt", response.data.token);
        return Promise.all([
          dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data.user,
          }),
          dispatch(setNotification(["success", "Signed up successfully"])),          
          history.push(`/${response.data.user.userName}/Dashboard`),
        ]);
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_ERROR,
          payload: error.response
            ? error.response.data.error.message
            : "Connection Error",
        });
        dispatch(setNotification(["error", "sign up failed"]));
      });
  };
}

export function login(user) {
  return (dispatch) => {
    return homeInstance
      .post("/login", user)
      .then((response) => {
        localStorage.setItem("jwt", response.data.token);
        return Promise.all([
          dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data.user,
          }),
          history.push(`/${response.data.user.userName}/Dashboard`),
        ]);
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_ERROR,
          payload: error.response
            ? error.response.data.error.message
            : "Connection Error",
        });
      });
  };
}
export function resetError(){
  return {
    type: RESET_ERROR
  }
}
export function setAuthentication() {
  return (dispatch) => {
    dispatch({
      type: SET_AUTHENTICATION,
      payload: localStorage.getItem("jwt"),
    });
  };
}

export function setUnauthorized() {
  return (dispatch) => {
    dispatch({
      type: SET_UNAUTHORIZED,
    });
  };
}
