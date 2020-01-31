import * as types from '../actions/interviewActions';

const initialState = {
  peerId: null,
  interviewStarted: false,
};

function interviewReducer(state = initialState, action) {
  switch (action.type) {
    case types.VIDEO_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        peerId: action.payload,
      };

    case types.CHAT_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        interviewStarted: true,
      };

    default:
      return state;
  }
}

export default interviewReducer;
