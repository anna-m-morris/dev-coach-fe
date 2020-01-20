import * as types from '../actions/chatActions';

const initialState = {
  email: null,
  roomId: null,
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_FOR_CHAT:
      return {
        ...state,
        email: action.payload,
      };

    case types.SAVE_ROOM_ID:
      return {
        ...state,
        roomId: action.payload,
      };

    default:
      return state;
  }
}

export default chatReducer;
