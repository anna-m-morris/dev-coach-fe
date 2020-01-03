import * as types from '../actions/bookingActions';

const initialState = {
  error: '',
  isLoading: false,
  timePicker: false,
  date: null,
};

function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case types.BOOKING_APPOINTMENTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case types.BOOKING_APPOINTMENTS_ERROR:
      return { ...state, error: action.payload };

    case types.BOOKING_APPOINTMENT_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
      };

    case types.SAVE_DATE:
      return {
        ...state,
        timePicker: !state.timePicker,
        date: action.payload,
      };

    default:
      return state;
  }
}

export default bookingReducer;
