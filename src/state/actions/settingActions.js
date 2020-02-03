import axios from 'axios';
import * as types from './actionTypes';

const url = process.env.REACT_APP_BASE_URL;

export const updateUserInfo = (
  userInfo,
  showError,
  showSuccess,
  closeMessage,
) => dispatch => {
  dispatch({ type: types.USER_INFO_UPDATE });

  axios
    .put(`${url}user/settings`, userInfo)
    .then(res => {
      console.log(res);
      showSuccess();
      setTimeout(() => closeMessage(), 5000);
      dispatch({
        type: types.USER_INFO_UPDATE_SUCCESSFUL,
        payload: res.data.updatedUser,
        message: res.data.message,
      });
    })
    .catch(error => {
      showError();
      setTimeout(() => closeMessage(), 5000);
      dispatch({
        type: types.USER_INFO_UPDATE_FAILED,
        payload: error.response.data.message,
      });
    });
};

export const updatePasswordViaEmail = (
  props,
  userInfo,
  showError,
  showSuccess,
  closeMessage,
) => dispatch => {
  dispatch({ type: types.UPDATE_PASSWORD_VIA_EMAIL_START });
  axios
    .put(`${url}user/settings`, userInfo)
    .then(res => {
      showSuccess();
      setTimeout(() => closeMessage(), 5000);
      setTimeout(() => props.history.push('/login'), 6000);
      dispatch({
        type: types.UPDATE_PASSWORD_VIA_EMAIL_SUCCESSFUL,
        payload: res.data.updatedUser,
        message: res.data.message,
      });
    })
    .catch(err => {
      showError();
      setTimeout(() => closeMessage(), 5000);
      dispatch({
        type: types.UPDATE_PASSWORD_VIA_EMAIL_FAILED,
        payload: err.response.message,
      });
    });
};
