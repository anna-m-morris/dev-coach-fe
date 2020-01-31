import * as types from '../actions/chatActions';

const initialState = {
  peer: null,
  roomId: null,
  rooms: null,
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_PEER:
      return {
        ...state,
        peer: action.payload,
      };

    case types.SAVE_ROOM_ID:
      return {
        ...state,
        roomId: action.payload,
      };

    case types.GET_ROOMS_SUCCESSFUL:
      return {
        ...state,
        rooms: action.payload,
      };

    case types.START_CHAT_SUCCESSFUL:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default chatReducer;
