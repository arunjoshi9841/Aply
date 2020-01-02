export const SET_MODAL = "SET_MODAL";
export const CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION";
export function setLoginModal(value) {
  return {
    type: SET_MODAL,
    payload: value
  };
}
export function closeNotification() {
  return {
    type: CLOSE_NOTIFICATION
  };
}
