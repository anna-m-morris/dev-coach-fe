import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';

export const APPOINTMENTS_START = 'GET_APPOINTMENTS_START';
export const APPOINTMENTS_ERROR = 'GET_APPOINTMENTS_ERROR';
export const GET_APPOINTMENTS_SUCCESSFUL =
  'GET_APPOINTMENTS_SUCCESSFUL';
export const CANCEL_APPOINTMENT_SUCCESSFUL =
  'CANCEL_APPOINTMENT_SUCCESSFUL';
export const SAVE_DATE = 'SAVE_DATE';

const url = process.env.REACT_APP_BASE_URL;

export const getAppointment = (
  coach_student_id,
  role_id,
) => dispatch => {
  dispatch({ type: APPOINTMENTS_START });
  axiosWithAuth()
    .get(`${url}appointment/${coach_student_id}`, {
      params: { role: role_id },
    })
    .then(res => {
      debugger;
      dispatch({
        type: GET_APPOINTMENTS_SUCCESSFUL,
        payload: res.data.appointments,
      });
    })
    .catch(err => {
      dispatch({ type: APPOINTMENTS_ERROR, payload: err });
    });
};

export const cancelAppointment = appointment_id => dispatch => {
  dispatch({ type: APPOINTMENTS_START });
  axiosWithAuth()
    .put(`${url}appointment/${appointment_id}`)
    .then(res => {
      debugger;
      dispatch({
        type: CANCEL_APPOINTMENT_SUCCESSFUL,
        payload: res.data.appointment,
      });
    })
    .catch(err => {
      dispatch({ type: APPOINTMENTS_ERROR, payload: err });
    });
};

export const saveDate = (date) => {
  debugger
  return { type: SAVE_DATE, payload: date}
}