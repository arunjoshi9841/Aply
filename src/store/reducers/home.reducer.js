import * as Actions from "../actions/home.actions";

const initialState = {
  isModalOpen: true
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
