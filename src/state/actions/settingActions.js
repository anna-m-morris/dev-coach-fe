import axios from 'axios';
import * as types from './actionTypes';

const url = process.env.REACT_APP_BASE_URL;

export const updateUserInfo = (
  userId,
  userInfo,
  showError,
  showSuccess,
) => dispatch => {
  dispatch({ type: types.USER_INFO_UPDATE });
  axios
    .put(`${url}user/${userId}`, userInfo)
    .then(res => {
      showSuccess();
      dispatch({
        type: types.USER_INFO_UPDATE_SUCCESSFUL,
        payload: res.data.updatedUser,
        message: res.data.message,
      });
    })
    .catch(err => {
      showError();
      dispatch({
        type: types.USER_INFO_UPDATE_FAILED,
        payload: err.response.data.message,
      });
    });
};

// export const handleUpload = e => {
//   const fileList = e.target.files;
//   console.log('1', fileList);
//   const img = new FormData();
//   console.log('2', img);

//   img.append('upload_preset', 'embouib2');
//   img.append('file', fileList[0]);
//   console.log('3', img);

//   const config = {
//     headers: {
//       'X-Requested-With': 'XMLHttpRequest',
//     },
//   };
//   axios
//     .post(
//       'https://api.cloudinary.com/v1_1/ojokure/image/upload',
//       img,
//       config,
//     )
//     .then(res => {
//       setUserInfo({ ...userInfo, avatar_url: res.data.secure_url });
//       console.log('5', res.data.secure_url);
//       console.log('7', userInfo);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
