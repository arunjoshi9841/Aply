import instance from "../../api";
import { setNotification } from "./home.actions";
export const SET_APPLICATION_MODAL = "SET_APPLICATION_MODAL";
export const GET_ALL_JOBS = "GET_ALL_JOBS";
export const JOB_ERROR = "JOB_ERROR";
export const SET_JOB = "SET_JOB";
export function setApplicationModal(value) {
  return {
    type: SET_APPLICATION_MODAL,
    payload: value,
  };
}
export function createJob(job) {
  const request = instance.post("/jobs", job);
  return (dispatch) =>
    request
      .then((response) =>
        Promise.all([
          dispatch(getJobs()),
          dispatch(setApplicationModal(false)),
          dispatch(
            setNotification(["success", "Record successfully created."])
          ),
        ])
      )
      .catch((error) => {
        dispatch({
          type: JOB_ERROR,
          payload: error.response
            ? error.response.data.error.message
            : "Connection Error",
        });
        dispatch(setNotification(["error", "Could not create a record."]));
      });
}
export function updateJob(job) {
  const request = instance.put("/jobs", job);
  return (dispatch) =>
    request
      .then((response) =>
        Promise.all([
          dispatch(getJobs()),
          dispatch(setApplicationModal(false)),
          dispatch(
            setNotification(["success", "Record successfully updated."])
          ),
        ])
      )
      .catch((error) => {
        dispatch({
          type: JOB_ERROR,
          payload: error.response
            ? error.response.data.error.message
            : "Connection Error",
        });
        dispatch(setNotification(["error", "Could not update record."]));
      });
}
export function getJobs() {
  const request = instance.get("/jobs");
  return (dispatch) =>
    request.then((response) => dispatch(setAllJobs(response.data)));
}
export function setAllJobs(data) {
  return {
    type: GET_ALL_JOBS,
    payload: data,
  };
}

export function setJob(job) {
  return {
    type: SET_JOB,
    payload: job,
  };
}
