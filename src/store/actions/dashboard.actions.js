export const SET_MODAL = "SET_MODAL";
export function setApplicationModal(value) {
  console.log(value);
    return {
      type: SET_MODAL,
      payload: value
    };
  }