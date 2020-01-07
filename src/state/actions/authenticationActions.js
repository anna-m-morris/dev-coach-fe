import axios from 'axios';
import * as types from './actionTypes';

const url = process.env.REACT_APP_BASE_URL;

export const login = (props, values) => dispatch => {
  dispatch({ type: types.LOGIN_START });
  axios
    .post(`${url}user/login`, values)
    .then(res => {
      dispatch({
        type: types.LOGIN_SUCCESSFUL,
        payload: res.data.user,
      });
      localStorage.setItem('token', res.data.token);
      props.history.push('/dashboard');
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_ERROR, payload: err });
    });
};

export const register = (props, values) => dispatch => {
  dispatch({ type: types.SIGN_UP });
  dispatch({ type: types.LOGIN_START });
  axios
    .post(`${url}user/register`, values)
    .then(res => {
      dispatch({ type: types.SIGN_UP_SUCCESSFUL });
      dispatch({ type: types.LOGIN_SUCCESSFUL });
      console.log(res.data);
      localStorage.setItem('tempuser', res.data.token);
      localStorage.setItem('id', res.data.user_id);
      props.history.push('/userrole');
    })
    .catch(err => {
      dispatch({ type: types.SIGN_UP_ERROR, payload: err });
    });
};

export const chooseUserRole = (props, values) => dispatch => {
  const token = localStorage.getItem('tempuser');
  localStorage.setItem('token', token);
  localStorage.removeItem('tempuser');
  localStorage.removeItem('id');
  window.location.reload();
};
