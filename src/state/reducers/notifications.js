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
        success: true,
      };

    case types.SHOW_ERROR_MESSAGE:
      return { ...state, error: true };

    case types.SHOW_INFO_MESSAGE:
      return {
        ...state,
        info: true,
      };

    case types.CLOSE_MESSAGE:
      return {
        success: false,
        error: false,
        info: false,
      };

    default:
      return state;
  }
}

export default notificationsReducer;
