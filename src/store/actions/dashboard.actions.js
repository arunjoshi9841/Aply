import { authenticatedInstance } from "../../api";

export const SET_MODAL = "SET_MODAL";
export function setApplicationModal(value) {
    return {
      type: SET_MODAL,
      payload: value
    };
  }
  export function createJob(job){
    return dispatch => {
      return authenticatedInstance
        .post("/jobs", job)
        .then(response => {
         console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    };
  }