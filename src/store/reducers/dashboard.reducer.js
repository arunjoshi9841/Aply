import * as Actions from "../actions/dashboard.actions";
import { act } from "react-dom/test-utils";

const initialState = {
  isApplicationOpen:false,
  jobsAll:[],
  job:{},
  error:""
};


export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_APPLICATION_MODAL:
      return {
        ...state,
        job: action.payload?state.job:{},
        error:"",
        isApplicationOpen: action.payload
      };
      case Actions.GET_ALL_JOBS:
        return{
          ...state,
          jobsAll: action.payload
        }
      case Actions.JOB_ERROR:
        return{
          ...state,
          error: action.payload
        }
      case Actions.SET_JOB:
        return {
          ...state,
          job: action.payload
        }
     default:
      return state;
  }
}
