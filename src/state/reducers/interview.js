import * as types from '../actions/interviewActions';

const initialState = {
  peerId: null,
};

function interviewReducer(state = initialState, action) {
  switch (action.type) {
    case types.VIDEO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        peerId: action.payload,
      };

    case types.FINISH_INTERVIEW_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default interviewReducer;
