import * as Actions from "../actions/dashboard.actions";

const initialState = {
  isModalOpen: false
};


export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_MODAL:
      return {
        ...state,
        isModalOpen: action.payload
      };
     default:
      return state;
  }
}
