import * as types from '../actions/notificationActions';

const initialState = {
  success: false,
  error: false,
  info: false,
};

function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_SUCCESS_MESSAGE:
      return {
        ...state,
        isLoading: true,
      };

    case types.SHOW_ERROR_MESSAGE:
      return { ...state, error: action.payload };

    case types.SHOW_INFO_MESSAGE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}

export default notificationsReducer;
