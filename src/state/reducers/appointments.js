import * as types from '../actions/appointmentActions';

const initialState = {
  appointments: null,
  error: '',
  isLoading: false,
  rescheduler: '',
};

function appointmentsReducer(state = initialState, action) {
  switch (action.type) {
    case types.APPOINTMENTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case types.APPOINTMENTS_SUCCESSFUL:
      const filterFutureAndUncanceledAppointments = action.payload.filter(
        appointment => {
          return (
            new Date(appointment.appointment_datetime) >=
              new Date() &&
            !appointment.canceled &&
            !appointment.finished
          );
        },
      );

      filterFutureAndUncanceledAppointments.sort(
        (a, b) =>
          new Date(a.appointment_datetime) -
          new Date(b.appointment_datetime),
      );

      return {
        ...state,
        isLoading: false,
        appointments: filterFutureAndUncanceledAppointments,
      };

    case types.APPOINTMENTS_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case types.CANCEL_APPOINTMENT_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        rescheduler: {
          ...action.rescheduler,
          coach_id: action.payload.coach_id,
          student_id: action.payload.student_id,
        },
      };

    case types.BOOK_APPOINTMENT_SUCCESSFUL:
      return {
        ...state,
        rescheduler: null,
      };

    default:
      return state;
  }
}

export default appointmentsReducer;
