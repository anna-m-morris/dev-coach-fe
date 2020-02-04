import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import { StyledButton, buttonTheme } from '../Landing/Landing-styles';
import {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
} from '../../state/actions/notificationActions';
import { updatePasswordViaEmail } from '../../state/actions/settingActions';

import Notification from '../Notifications/Notification';

const url = process.env.REACT_APP_BASE_URL;

const AccountRecovery = props => {
  const {
    updatePasswordViaEmail,
    success,
    error,
    showErrorMessage,
    showSuccessMessage,
    closeMessage,
    errors,
    touched,
    isSubmitting,
    match,
  } = props;

  const initialReset = {
    email: '',
    password: '',
    confirm_password: '',
  };

  const [resetUser, setResetUser] = useState(initialReset);

  useEffect(() => {
    axios
      .get(`${url}user/accountRecovery`, {
        params: {
          token: match.params.token,
        },
      })
      .then(res => {
        const resetEmail = res.data.user.email;
        setResetUser(prevState => ({
          ...prevState,
          email: resetEmail,
        }));
      })
      .catch(error => {
        error.message = error;
      });
  }, [match.params.token]);

  const handleChange = e => {
    const { value, name } = e.target;
    setResetUser({
      ...resetUser,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    updatePasswordViaEmail(
      props,
      { ...resetUser, oldEmail: resetUser.email },
      showErrorMessage,
      showSuccessMessage,
      closeMessage,
    );
  };

  if (resetUser.email) {
    return (
      <div>
        <GreyBackgroundContainer>
          <Notification
            onClose={closeMessage}
            variant='success'
            message='Your password has been updated, try logging in again '
            open={success}
          />
          <Notification
            onClose={closeMessage}
            variant='error'
            message='Failed !, Please send another link'
            open={error}
          />
          <FormCard>
            <h3>Enter your new password</h3>
            <FormContainer>
              <Form>
                <div>
                  <Field
                    style={{ marginBottom: '5px' }}
                    value={resetUser.password}
                    type='password'
                    name='password'
                    placeholder='enter new password'
                    onChange={handleChange}
                  />
                  {errors.password && touched.password && (
                    <StyledError>{errors.email}</StyledError>
                  )}

                  <Field
                    value={resetUser.confirm_password}
                    type='password'
                    name='confirm_password'
                    placeholder='confirm new password'
                    onChange={handleChange}
                  />
                  {errors.password && touched.password && (
                    <StyledError>{errors.email}</StyledError>
                  )}
                  <StyledResetButton
                    onClick={handleSubmit}
                    theme={buttonTheme}
                    type='submit'
                    disabled={isSubmitting}
                  >
                    change my password
                  </StyledResetButton>
                </div>
              </Form>
            </FormContainer>
          </FormCard>
        </GreyBackgroundContainer>
      </div>
    );
  }
  if (!resetUser.email) {
    return (
      <div>
        <GreyBackgroundContainer>
          <Notification
            onClose={closeMessage}
            variant='success'
            message='Your password has been updated, try logging in again '
            open={success}
          />
          <Notification
            onClose={closeMessage}
            variant='error'
            message='Failed !, Please send another link'
            open={error}
          />
          <h2 style={{ color: 'red' }}>
            Oops! password reset link is invalid or has expired !
          </h2>
        </GreyBackgroundContainer>
      </div>
    );
  }
  return (
    <Loader type='TailSpin' color='#2BAD60' height={80} width={80} />
  );
};

const FormikAccountRecovery = withFormik({
  mapPropsToValues({ password, confirm_password }) {
    return {
      password: password || '',
      confirm_password: confirm_password || '',
    };
  },
  validationSchema: Yup.object().shape({
    password: Yup.string()
      .required('Please enter your new password')
      .min(3, 'must be 6 characters minimum'),
    confirm_password: Yup.string()
      .required('Please confirm new password')
      .min(3, 'must be 6 characters minimum'),
  }),
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    resetForm();
    setSubmitting(false);
  },
})(AccountRecovery);

const mapStateToProps = state => {
  return {
    success: state.notificationsReducer.success,
    error: state.notificationsReducer.error,
    user: state.userReducer.user,
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps, {
  updatePasswordViaEmail,
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
})(FormikAccountRecovery);

export const StyledResetButton = styled(StyledButton)`
  margin-top: 12px;
  height: 90%;
`;

export const GreyBackgroundContainer = styled.div`
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #11aa44;
`;

export const FormCard = styled.div`
  background: white;
  height: 15em;
  width: 25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 6px;

  h3 {
    color: #292d38;
    margin-top: 0.5rem;
  }
`;

export const FormContainer = styled.div`
  height: 30%;
  width: 100%;

  form {
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    div {
      width: 70%;
      height: 60px;
      align-self: center;
    }
  }

  input {
    align-self: center;
    background: #f7f7f7;
    height: 2em;
    width: 92%;
    font-family: 'Nunito', sans-serif;
    border-radius: 4px;
    border: 1px solid #c8c8c8;
    padding: 0.5em;
    font-size: 16px;
    color: #808080;
    transition: ease-out 0.1s;

    :hover {
      background: #ffffff;
      transition: ease-in 0.1s;
    }

    :focus {
      outline: none;
    }
  }

  button {
    width: 98%;
  }
`;

const StyledError = styled.p`
  padding: 0;
  margin: 0;
  color: red;
  font-size: 0.8rem;
`;
