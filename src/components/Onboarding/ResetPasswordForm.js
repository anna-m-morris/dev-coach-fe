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
                placeholder='enter your email address'
              />
              {errors.email && touched.email && (
                <p className='error'>{errors.email}</p>
              )}
              <div className='form-button-container'>
                <StyledButton
                  className='form-button'
                  onClick={handleSubmit}
                  theme={buttonTheme}
                  type='submit'
                  disabled={isSubmitting}
                >
                  Send email -->
                </StyledButton>
              </div>
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

// export const StyledResetButton = styled(StyledButton)`
//   margin-top: 20px;
// `;

// export const GreyBackgroundContainer = styled.div`
//   height: 100vh;
//   background: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #11aa44;
// `;

// export const FormCard = styled.div`
//   background: white;
//   height: 20em;
//   width: 25em;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
//   border-radius: 6px;

//   h3 {
//     color: #292d38;
//     margin-top: 0.5rem;
//   }
// `;

// export const FormContainer = styled.div`
//   height: 30%;
//   width: 100%;

//   form {
//     width: 100%;
//     height: 95%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-evenly;
//     align-items: center;

//     div {
//       width: 70%;
//       height: 60px;
//       align-self: center;
//     }
//   }

//   input {
//     align-self: center;
//     background: #f7f7f7;
//     height: 2em;
//     width: 92%;
//     font-family: Ubuntu, sans-serif;
//     border-radius: 4px;
//     border: 1px solid #c8c8c8;
//     padding: 0.5em;
//     font-size: 16px;
//     color: #808080;
//     transition: ease-out 0.1s;

//     :hover {
//       background: #ffffff;
//       transition: ease-in 0.1s;
//     }

//     :focus {
//       outline: none;
//     }
//   }

//   button {
//     width: 98%;
//   }
// `;

// const StyledError = styled.p`
//   padding: 0;
//   margin: 0;
//   color: red;
//   font-size: 0.8rem;
// `;
