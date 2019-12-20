import axios from 'axios';
import * as types from './actionTypes';

const url = process.env.REACT_APP_BASE_URL;
// const url = 'http://localhost:3000/';

export const login = (props, values) => dispatch => {
  dispatch({ type: types.LOGIN_START });
  debugger;
  axios
    .post(`${url}user/login`, values)
    .then(res => {
      dispatch({
        type: types.LOGIN_SUCCESSFUL,
        payload: res.data.user,
        message: res.data.message,
      });
      debugger;
      localStorage.setItem('token', res.data.token);
      props.history.push('/dashboard');
    })
    .catch(err => {
      debugger;
      dispatch({
        type: types.LOGIN_ERROR,
        payload: err.response.data.message,
      });
    });
};

export const register = (props, values) => dispatch => {
  dispatch({ type: types.SIGN_UP });
  dispatch({ type: types.LOGIN_START });
  axios
    .post(`${url}user/register`, values)

    .then(res => {
      dispatch({ type: types.SIGN_UP_SUCCESSFUL });
      localStorage.setItem('user', JSON.stringify(res.data));
      dispatch({ type: types.LOGIN_SUCCESSFUL });
      localStorage.setItem('token', res.data.token);

      props.history.push('/dashboard');
    })
    .catch(err => {
      dispatch({ type: types.SIGN_UP_ERROR, payload: err });
    });
};
