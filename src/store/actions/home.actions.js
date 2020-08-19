export const SET_MODAL = "SET_MODAL";
export const CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION";
export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const SET_EDIT_MODAL = "SET_EDIT_MODAL";
export function setLoginModal(value) {
  return {
    type: SET_MODAL,
    payload: value
  };
}
export function setEditModal(value) {
  return {
    type: SET_EDIT_MODAL,
    payload: value
  };
}
export function setNotification(obj){
  return {
    type: SET_NOTIFICATION,
    payload: obj
  }
}
export function closeNotification() {
  return {
    type: CLOSE_NOTIFICATION
  };
}
