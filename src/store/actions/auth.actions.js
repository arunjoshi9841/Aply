import instance from "../../api";
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
    return instance
      .post("/signup", user)
      .then((response) => {        
        localStorage.setItem("paperclip_token", response.data.token);
        Promise.all([
          dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data.user,
          }),
          dispatch(setNotification(["success", "Signed up successfully"]))
        ]).then(()=>{
          history.push(`/${response.data.user.userName}/Dashboard`)
        })
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
    return instance
      .post("/login", user)
      .then((response) => {
        Promise.all([          
        localStorage.setItem("paperclip_token", response.data.token),
          dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data.user,
          })         
        ]).then(()=>{
          history.push(`/${response.data.user.userName}/Dashboard`)
        })
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
      payload: localStorage.getItem("paperclip_token"),
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
