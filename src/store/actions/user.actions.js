import instance  from "../../api";
import {REGISTER_ERROR} from "./auth.actions";
import {setNotification, setEditModal} from "./home.actions";

export const SET_USER = "SET_USER";
export const GET_USER = "GET_USER";

export function setUser(value) {
  return dispatch => {
    dispatch({
      type: SET_USER,
      payload: value
    });
  };
};
export function editUser(user) {
  return (dispatch) => {
    return instance
      .put("/users", user)
      .then((response) => {
        return Promise.all([
          dispatch({
            type: SET_USER,
            payload: response.data,
          }),
          dispatch(setEditModal(false)),
          dispatch(setNotification(["success", "Successfully edited profile."])),
        ]);
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_ERROR,
          payload: error.response
            ? error.response.data.error.message
            : "Connection Error",
        });
        dispatch(setNotification(["error", "Could not edit profile."]));
      });
  };
}
export function getUser() {
  return async dispatch => {
    return await instance
      .get("/users")
      .then(response => {
        dispatch({
          type: SET_USER,
          payload: response.data
        });
      })
      .catch(error => {
        console.log("error: " + error);
      });
  };
}
