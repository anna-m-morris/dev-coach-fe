import * as types from '../actions/interviewActions';

const initialState = {
  peerId: null,
};

function interviewReducer(state = initialState, action) {
  switch (action.type) {
    case types.VIDEO_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        peerId: action.payload,
      };

    default:
      return state;
  }
}

export default interviewReducer;
