import axiosWithAuth from '../../utils/axiosWithAuth';

export const VIDEO_SUCCESS = 'VIDEO_SUCCESS';
export const FINISH_INTERVIEW_SUCCESS = 'FINISH_INTERVIEW_SUCCESS';
export const FINISH_INTERVIEW_ERROR = 'FINISH_INTERVIEW_ERROR';

const url = 'http://localhost:5000/';
// process.env.REACT_APP_BASE_URL;

export const startInterview = (peerId, props) => {
  props.history.push('/interview');

  return { type: VIDEO_SUCCESS, payload: peerId };
};

export const finishInterview = appointment_id => dispatch => {
  debugger;
  axiosWithAuth()
    .put(`${url}appointment/${appointment_id}`, { finished: true })
    .then(res => {
      debugger;
      dispatch({
        type: FINISH_INTERVIEW_SUCCESS,
      });
    })
    .catch(err => {
      dispatch({ type: FINISH_INTERVIEW_ERROR, payload: err });
    });
};
