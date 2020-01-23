import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Upload, message } from 'antd';
import placeholder from '../../img/avatar_placeholder.PNG';
import {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
} from '../../state/actions/notificationActions';
import Notification from '../../components/Notifications/Notification';
import { updateUserInfo } from '../../state/actions/settingActions';

const StyledSettings = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  padding: 50px;
  padding-top: 0px;
  margin: 0 auto;
  font-family: ABeeZee;
  border: 1px solid #dbe2e8;
  align-content: center;
  align-items: center;
  background-color: #ffff;

  .paper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    border-radius: 120px;
    width: 50%;
    height: 120px;
    opacity: 0.7;
    z-index: 2;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    /* padding: 1rem; */
    img {
      width: 100%;
      height: 8rem;
      margin: 0;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .form {
    width: 100%;
    margin-top: 5px;
  }

  .button {
    display: flex;
    justify-content: space-between;
    button {
      width: 48%;
      background-color: #1976d2;
      background-color: #4fad65;
      padding: 18px;
      font-family: ABeeZee, Roboto, Helvetica, Arial, sans-serif;
      border-radius: 4px;
      border: none;
      margin-top: 17px;
      color: #ffff;
      font-weight: 500;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;

function Settings(props) {
  const {
    user,
    updateUserInfo,
    success,
    error,
    showErrorMessage,
    showSuccessMessage,
    closeMessage,
  } = props;

  const initialUserInfo = {
    first_name: user && user.first_name,
    last_name: user && user.last_name,
    email: user && user.email,
    password: '',
    confirm_password: '',
    avatar_url: user && user.avatar_url,
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const handleUpload = ({ file, onSuccess }) => {
    const image = new FormData();
    image.append('upload_preset', 'embouib2');
    image.append('file', file);
    const config = {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    };
    axios
      .post(
        'https://api.cloudinary.com/v1_1/ojokure/image/upload',
        image,
        config,
      )
      .then(res => {
        const secureUrl = res.data.secure_url;
        setUserInfo({
          ...userInfo,
          avatar_url: secureUrl,
        });
      });
  };

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const handlePictureChange = info => {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, avatar_url =>
        setUserInfo({
          ...userInfo,
          avatar_url,
        }),
      );
    }
  };
  function beforeUpload(file) {
    const isJpgOrPng =
      file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = e => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUserInfo(
      { ...userInfo, oldEmail: user.email },
      showErrorMessage,
      showSuccessMessage,
      closeMessage,
    );
  };

  const handleCancel = e => {
    e.preventDefault();
    props.history.push('/dashboard');
  };

  return (
    <StyledSettings>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className='paper'>
          <div className='image-container'>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              customRequest={handleUpload}
              beforeUpload={beforeUpload}
              onChange={handlePictureChange}
            >
              {userInfo.avatar_url ? (
                <img src={userInfo.avatar_url} alt='avatar' />
              ) : (
                <img src={placeholder} alt='placeholder' />
              )}
            </Upload>
          </div>
          <Typography component='h1' variant='h5'>
            Personal Information
          </Typography>
          <form className='form' noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='fname'
                  name='first_name'
                  variant='outlined'
                  required
                  fullWidth
                  id='first_name'
                  label={userInfo.first_name}
                  placeholder={userInfo.first_name}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='lastName'
                  placeholder={userInfo.last_name}
                  label={userInfo.last_name}
                  name='last_name'
                  autoComplete='lname'
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label={userInfo.email}
                  name='email'
                  autoComplete='email'
                  placeholder={userInfo.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='new password'
                  type='password'
                  id='password'
                  value={userInfo.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='confirm_password'
                  label='confirm new password'
                  type='password'
                  id='confirm_password'
                  value={userInfo.confirm_password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <div className='button'>
              <button onClick={handleCancel}>cancel</button>
              <button onClick={handleSubmit}>save changes</button>
            </div>
          </form>
        </div>
      </Container>
      <Notification
        onClose={closeMessage}
        variant='success'
        message='your profile has been updated successfully'
        open={success}
      />

      <Notification
        onClose={closeMessage}
        variant='error'
        message='unable to update user profile'
        open={error}
      />
    </StyledSettings>
  );
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  success: state.notificationsReducer.success,
  error: state.notificationsReducer.error,
});

export default connect(mapStateToProps, {
  updateUserInfo,
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
})(Settings);
