import axiosWithAuth from '../../utils/axiosWithAuth';

const GET_APPOINTMENTS_START = 'GET_APPOINTMENTS_START';
const GET_APPOINTMENTS_ERROR = 'GET_APPOINTMENTS_ERROR';
const GET_APPOINTMENTS_SUCCESSFUL = 'GET_APPOINTMENTS_SUCCESSFUL';

const url = process.env.REACT_APP_BASE_URL;

export const getAppointment = (
  coach_student_id,
  role_id,
) => dispatch => {
  dispatch({ type: GET_APPOINTMENTS_START });
  axiosWithAuth()
    .get(`${url}appointment/${coach_student_id}`, { role: role_id })
    .then(res => {
      debugger
      dispatch({
        type: GET_APPOINTMENTS_SUCCESSFUL,
        payload: res.data.appointments,
      });
    })
    .catch(err => {
      dispatch({ type: GET_APPOINTMENTS_ERROR, payload: err });
    });
};
