
import {homeInstance} from "../../api"
export const SET_MODAL = "SET_MODAL";
export function setLoginModal(value) {
  return {
    type: SET_MODAL,
    payload: value
  };
}
