import * as types from '../actions/chatActions';

const initialState = {
  email: null,
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_FOR_CHAT:
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
}

export default chatReducer;
