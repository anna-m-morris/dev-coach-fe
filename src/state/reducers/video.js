import * as types from '../actions/videoActions';

const initialState = {
  channel: null,
  error: '',
  isLoading: false,
};

function videoReducer(state = initialState, action) {
  switch (action.type) {
    case types.VIDEO_START:
      return {
        ...state,
        isLoading: true,
      };

    case types.VIDEO_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        channel: action.payload,
      };

    case types.VIDEO_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

export default videoReducer;
