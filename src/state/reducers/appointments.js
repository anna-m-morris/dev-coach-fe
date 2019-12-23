import * as types from '../actions/appointmentActions';

const initialState = {
  appointments: {},
  error: '',
  isLoading: false,
};

function appointmentsReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_APPOINTMENTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_APPOINTMENTS_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        appointments: action.payload,
      };
    case types.GET_APPOINTMENTS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default appointmentsReducer;