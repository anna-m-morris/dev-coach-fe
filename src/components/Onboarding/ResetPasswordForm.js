import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  StyledButton,
  buttonTheme,
  Logo,
} from '../Landing/Landing-styles';
import { LoginContainer } from './Login/LoginStyles';
import {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
} from '../../state/actions/notificationActions';

import Notification from '../Notifications/Notification';
import { sendResetPasswordEmail } from '../../state/actions/authenticationActions';

const ResetContainer = styled(LoginContainer)`
  justify-content: center;

  .form-card-container {
    padding: 1rem;
    height: 18rem;

    h3 {
      margin: 0;
      padding: 0 2rem;
      text-align: center;
    }
  }

  .form {
    height: 100%;
  }

  .form-button-container {
    width: 100%;
    margin-top: 0.5rem;
    .form-button {
      width: 100%;
      border-radius: 2rem;
    }
  }
`;

const ResetPasswordForm = props => {
  const {
    sendResetPasswordEmail,
    success,
    error,
    showErrorMessage,
    showSuccessMessage,
    closeMessage,
    errors,
    touched,
    isSubmitting,
  } = props;

  const initialReset = {
    email: '',
  };

  const [resetUser, setResetUser] = useState(initialReset);

  const handleChange = e => {
    const { value, name } = e.target;
    setResetUser({
      ...resetUser,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    sendResetPasswordEmail(
      props,
      resetUser,
      showSuccessMessage,
      showErrorMessage,
      closeMessage,
    );
  };
  return (
    <ResetContainer className='reset-container'>
      <Notification
        onClose={closeMessage}
        variant='success'
        message='password reset email sent successfully'
        open={success}
      />
      <Notification
        onClose={closeMessage}
        variant='error'
        message='That email address is not recognized. Please try again'
        open={error}
      />
      <div className='form-card-container'>
        <Link to='/'>
          <Logo />
        </Link>
        <h3>Enter your email to reset your password</h3>
        <div className='form-container'>
          <Form className='form'>
            <div className='input-container'>
              <Field
                className='form-input'
                onChange={handleChange}
                value={resetUser.email}
                type='email'
                name='email'
                placeholder='Enter Your Email Address'
              />
              {errors.email && touched.email && (
                <p className='error'>{errors.email}</p>
              )}
            </div>
            <div className='form-button-container'>
              <StyledButton
                className='form-button'
                onClick={handleSubmit}
                theme={buttonTheme}
                type='submit'
                disabled={isSubmitting}
              >
                Send Email
              </StyledButton>
            </div>
          </Form>
        </div>
      </div>
    </ResetContainer>
  );
};

const FormikResetPasswordForm = withFormik({
  mapPropsToValues({ email }) {
    return {
      email: email || '',
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter an email address'),
  }),
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    resetForm();
    setSubmitting(false);
  },
})(ResetPasswordForm);

const mapStateToProps = state => {
  return {
    success: state.notificationsReducer.success,
    error: state.notificationsReducer.error,
    user: state.userReducer.user,
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps, {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
  sendResetPasswordEmail,
})(FormikResetPasswordForm);
