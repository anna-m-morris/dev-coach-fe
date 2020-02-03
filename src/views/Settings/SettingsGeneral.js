import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Notification from '../../components/Notifications/Notification';

import StyledSettings from './SettingsStyles';

export function SettingsGeneral(props) {
  const {
    user,
    updateUserInfo,
    success,
    error,
    showErrorMessage,
    showSuccessMessage,
    closeMessage,
    handleCancel,
  } = props;

  const initialUserInfo = {
    first_name: user && user.first_name,
    last_name: user && user.last_name,
    email: user && user.email,
    password: '',
    confirm_password: '',
    avatar_url: user && user.avatar_url,
    linkedIn_url: user && user.linkedIn_url,
    github_url: user && user.github_url,
    location: user && user.location,
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);
  console.log(user);
  console.log('2', userInfo);

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

  return (
    <StyledSettings className='setting-container'>
      <div className='paper'>
        <form className='form' noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                size='small'
                variant='outlined'
                fullWidth
                name='location'
                label='location'
                type='string'
                value={userInfo.location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size='small'
                variant='outlined'
                fullWidth
                id='linkedIn_url'
                name='linkedIn_url'
                label='linkedIn url'
                value={userInfo.linkedIn_url}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                size='small'
                variant='outlined'
                fullWidth
                name='github_url'
                label='github url'
                type='string'
                id='github_url'
                value={userInfo.github_url}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <div className='button'>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleSubmit}>Save Changes</button>
          </div>
        </form>
      </div>
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
