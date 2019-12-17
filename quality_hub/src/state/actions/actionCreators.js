import * as types from './actionTypes';
import axios from 'axios';

export const login = (url, props, values) => dispatch => {
  console.log(url, props, values);
  dispatch({ type: types.LOGIN_START });
  axios
    .post(url, values)
    .then(res => {
      dispatch({ type: types.LOGIN_SUCCESSFUL });
      localStorage.setItem('token', res.data.token);
      props.history.push('/dashboard');
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_ERROR, payload: err });
    });
};
