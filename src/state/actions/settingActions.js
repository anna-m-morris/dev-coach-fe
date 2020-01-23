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
      debugger;
      showSuccess();
      setTimeout(() => closeMessage(), 5000);
      dispatch({
        type: types.USER_INFO_UPDATE_SUCCESSFUL,
        payload: res.data.updatedUser,
        message: res.data.message,
      });
    })
    .catch(err => {
      showError();
      setTimeout(() => closeMessage(), 5000);
      dispatch({
        type: types.USER_INFO_UPDATE_FAILED,
        payload: err.response.data.message,
      });
    });
};
