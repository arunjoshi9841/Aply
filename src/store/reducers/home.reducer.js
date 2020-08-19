import * as Actions from "../actions";

const initialState = {
  isModalOpen: false, 
  isEditModal: false,
  notification:false,
  notificationMessage:['success','']
};


export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_MODAL:
      return {
        ...state,
        isModalOpen: action.payload
      };
      case Actions.SET_EDIT_MODAL:
      return {
        ...state,
        isEditModal: action.payload
      };
      case Actions.LOGIN_SUCCESS:
        return{
          ...state,
          isModalOpen:false
        }
      case Actions.SET_NOTIFICATION:
        return {
          ...state, notification: true,
          notificationMessage: action.payload
        }
        case Actions.REGISTER_SUCCESS:{
          return{
            ...state,
            isModalOpen:false
          }
        }        
      case Actions.CLOSE_NOTIFICATION:
        return{
          ...state,
          notification:false,
          notificationMessage:['success','']
        }
    default:
      return state;
  }
}
