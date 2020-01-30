import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';
import * as types from './actionTypes';

const url = process.env.REACT_APP_BASE_URL;

export const saveRoleId = (handleNext, role) => dispatch => {
  dispatch({ type: types.SET_ROLE_ID, payload: role });
  handleNext();
};

export const login = (props, values) => dispatch => {
  dispatch({ type: types.LOGIN_START });
  axios
    .post(`${url}user/login`, values)
    .then(res => {
      dispatch({
        type: types.LOGIN_SUCCESSFUL,
        payload: res.data.user,
        message: res.data.message,
      });
      localStorage.setItem('token', res.data.token);
      props.history.push('dashboard');
    })
    .catch(err => {
      dispatch({
        type: types.LOGIN_ERROR,
        payload: err.data,
      });
    });
};

export const register = (props, values) => dispatch => {
  dispatch({ type: types.SIGN_UP_START });
  axios
    .post(`${url}user/register`, values)
    .then(res => {
      dispatch({
        type: types.SIGN_UP_SUCCESSFUL,
        payload: res.data.user,
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('id', res.data.user.id);
      props.handleNext();
    })
    .catch(err => {
      dispatch({
        type: types.SIGN_UP_ERROR,
        payload: err.response.data.message,
      });
    });
};

export const chooseUserRole = (props, values) => dispatch => {
  const id = localStorage.getItem('id');
  axiosWithAuth()
    .put(`${url}user/${id}`, {
      location: values.userLocation,
      role_id: props.userReducer.user.role_id,
      github: values.github,
      linkedin: values.linkedin,
    })
    .then(res => {
      dispatch({ type: types.USER_ROLE_CHOSEN });
      if (props.userReducer.user.role_id === 1) {
        axiosWithAuth()
          .post(`${url}profile/students`, {
            experience_level: values.experience,
            confidence_level: values.confidence,
            user_id: id,
          })
          .then(studentRes => {
            dispatch({
              type: types.SET_STUDENT_ID,
              id: studentRes.data.student.id,
            });
            localStorage.removeItem('id');
          })
          .catch(err => {});
      } else {
        axiosWithAuth()
          .post(`${url}profile/coaches`, {
            experience_level: values.experience,
            skill_level: values.skills,
            user_id: id,
            description: values.description,
            hourly_rate: values.hourly_rate,
          })
          .then(coachRes => {
            dispatch({
              type: types.SET_COACH_ID,
              id: coachRes.data.coach.id,
            });
            localStorage.removeItem('id');
          })
          .catch(coachErr => {});
      }
    })
    .catch(err =>
      dispatch({ type: types.USER_ROLE_ERROR, error: err }),
    );
};

export const logout = props => {
  localStorage.clear();
  props.history.push('/');
  return { type: types.LOGOUT };
};
