import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';

export const BOOKING_APPOINTMENT_START = 'BOOKING_APPOINTMENT_START';
export const BOOKING_APPOINTMENT_SUCCESSFUL =
  'BOOKING_APPOINTMENT_SUCCESSFUL';
export const BOOKING_APPOINTMENT_ERROR = 'BOOKING_APPOINTMENT_ERROR';
export const SAVE_DATE = 'SAVE_DATE';

const url = process.env.REACT_APP_BASE_URL;

// export const getAppointment = (
//   coach_student_id,
//   role_id,
// ) => dispatch => {
//   dispatch({ type: APPOINTMENTS_START });
//   axiosWithAuth()
//     .get(`${url}appointment/${coach_student_id}`, {
//       params: { role: role_id },
//     })
//     .then(res => {
//       dispatch({
//         type: GET_APPOINTMENTS_SUCCESSFUL,
//         payload: res.data.appointments,
//       });
//     })
//     .catch(err => {
//       dispatch({ type: APPOINTMENTS_ERROR, payload: err });
//     });
// };

// export const cancelAppointment = appointment_id => dispatch => {
//   dispatch({ type: APPOINTMENTS_START });
//   axiosWithAuth()
//     .put(`${url}appointment/${appointment_id}`)
//     .then(res => {
//       dispatch({
//         type: CANCEL_APPOINTMENT_SUCCESSFUL,
//         payload: res.data.appointment,
//       });
//     })
//     .catch(err => {
//       dispatch({ type: APPOINTMENTS_ERROR, payload: err });
//     });
// };

export const saveDate = date => {
  return { type: SAVE_DATE, payload: date };
};
