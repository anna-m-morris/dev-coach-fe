import * as types from '../actions/actionTypes';

const initialState = {
  appointments: {},
  error: '',
  isLoading: false,
};

function appointmentsReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,

        appointments: action.payload,
      };
    case types.LOGIN_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default appointmentsReducer;