import axios from 'axios';
import * as types from './actionTypes';
import axiosWithAuth from '../../utils/axiosWithAuth';

const url = process.env.REACT_APP_BASE_URL;

export const updateUserInfo = (
  coachId,
  userInfo,
  showError,
  showSuccess,
  closeMessage,
) => dispatch => {
  dispatch({ type: types.USER_INFO_UPDATE });
  const updateUserTable = { ...userInfo };
  delete updateUserTable.hourly_rate;
  axios
    .put('http://localhost:5000/user/settings', updateUserTable)
    .then(res => {
      if (userInfo.role_id === 2 && userInfo.location) {
        const updateCoachTable = {
          hourly_rate: userInfo.hourly_rate,
        };

        axiosWithAuth()
          .put(
            `http://localhost:5000/profile/coachesSettings/${coachId}`,
            updateCoachTable,
          )
          .then(res => {
            showSuccess();
            setTimeout(() => closeMessage(), 5000);
            dispatch({
              type: types.USER_INFO_UPDATE_SUCCESSFUL,
              payload: res.data.coach,
              message: res.data.message,
            });
          });
      } else {
        showSuccess();
        setTimeout(() => closeMessage(), 5000);
        dispatch({
          type: types.USER_INFO_UPDATE_SUCCESSFUL,
          payload: res.data.updatedUser,
          message: res.data.message,
        });
      }
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
