import * as Actions from "../actions/dashboard.actions";

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
     default:
      return state;
  }
}
