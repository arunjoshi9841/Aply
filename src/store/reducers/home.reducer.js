import * as Actions from "../actions/home.actions";

const initialState = {
  isModalOpen: true, 
  notification:false,
  notificationMessage:['success','Hello this is test']
};


export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_MODAL:
      return {
        ...state,
        isModalOpen: action.payload
      };
      case Actions.CLOSE_NOTIFICATION:
        return{
          ...state,
          notification:false
        }
    default:
      return state;
  }
}
