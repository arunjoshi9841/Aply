import { authenticatedInstance } from "../../api";

export const SET_USER = "SET_USER";
export const GET_USER = "GET_USER";

export function setUser(value) {
  return dispatch => {
    dispatch({
      type: SET_USER,
      payload: value
    });
  };
}
export function getUser() {
  return async dispatch => {
    return await authenticatedInstance
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
