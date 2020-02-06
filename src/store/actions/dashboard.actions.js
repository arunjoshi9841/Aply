import { authenticatedInstance } from "../../api";

export const SET_APPLICATION_MODAL = "SET_APPLICATION_MODAL";
export const GET_ALL_JOBS = "GET_ALL_JOBS";
export const JOB_ERROR = "JOB_ERROR";
export function setApplicationModal(value) {
  return {
    type: SET_APPLICATION_MODAL,
    payload: value
  };
}
export function createJob(job) {
  const request = authenticatedInstance.post("/jobs", job);
  return dispatch =>
    request.then(response =>
      Promise.all([dispatch(getJobs()), dispatch(setApplicationModal(false))])
    ).catch(error => {
      dispatch({
        type: JOB_ERROR,
        payload: error.response.data.error.message
      });
    });
}

export function getJobs() {
  const request = authenticatedInstance.get("/jobs");
  return dispatch =>
    request.then(response => dispatch(setAllJobs(response.data)));
}
export function setAllJobs(data) {
  return {
    type: GET_ALL_JOBS,
    payload: data
  };
}
