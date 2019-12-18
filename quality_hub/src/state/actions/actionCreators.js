import * as types from './actionTypes';
import axios from 'axios';

export const login = (url, props, values) => dispatch => {
  dispatch({ type: types.LOGIN_START });
  axios
    .post(url, values)
    .then(res => {
      dispatch({ type: types.LOGIN_SUCCESSFUL });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.token);
      props.history.push('/dashboard');
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_ERROR, payload: err });
    });
};

export const register = (url, props, values) => dispatch => {
  dispatch({ type: types.SIGN_UP });
  axios.post(url, values)
  .then(res => {
    dispatch({ type: types.SIGN_UP_SUCCESSFUL });
    localStorage.setItem('user', JSON.stringify(res.data));
    dispatch({ type: types.LOGIN_SUCCESSFUL });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('username', res.data.token);
    props.history.push('/dashboard');
  })
  .catch(err => {
    dispatch({ type: types.SIGN_UP_ERROR, payload: err });
  });
};
