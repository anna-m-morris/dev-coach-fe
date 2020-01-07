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
      dispatch({
        type: types.LOGIN_SUCCESSFUL,
        payload: res.data.user,
      });
      localStorage.setItem('temptoken', JSON.stringify(res.data));
      props.history.push('/userrole');
    })
    .catch(err => {
      dispatch({ type: types.SIGN_UP_ERROR, payload: err });
    });
};

export const chooseUserRole = (role) => dispatch => {
  // temp token is for the final signup state of choosing a user role - once this is done, log them in fully.
  // this is only applicable to users that have just signed up and are logging in for the first time
  const token = localStorage.getItem('temptoken');
  localStorage.removeItem('temptoken');
  localStorage.setItem('token', token);
  axios.post(`${url}user/role`, role)
    // TODO: post data to BE
  return { type: types.USER_ROLE_CHOSEN, role };
};
