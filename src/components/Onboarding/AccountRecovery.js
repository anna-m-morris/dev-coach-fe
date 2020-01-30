import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { StyledButton, buttonTheme } from '../Landing/Landing-styles';
import {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
} from '../../state/actions/notificationActions';

import Notification from '../Notifications/Notification';
import pattern from '../../img/pattern.jpg';
import axiosWithAuth from '../../utils/axiosWithAuth';

const AccountRecovery = props => {
  const {
    userReducer,
    success,
    error,
    showErrorMessage,
    showSuccessMessage,
    closeMessage,
    errors,
    touched,
    isSubmitting,
  } = props;

  useEffect(() => {
    axios.get('http://localhost:5000/accountRecovery', {
      params: {
        resetPasswordToken: props.match.params.token,
      },
    });
  }, []);
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
                  type='password'
                  name='password'
                  placeholder='enter new password'
                />
                {errors.password && touched.password && (
                  <StyledError>{errors.email}</StyledError>
                )}
                <StyledResetButton
                  theme={
                    userReducer.isLoading
                      ? loadingButtonTheme
                      : buttonTheme
                  }
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
};

const FormikAccountRecovery = withFormik({
  mapPropsToValues({ password }) {
    return {
      password: password || '',
    };
  },
  validationSchema: Yup.object().shape({
    password: Yup.string()
      .required('Please enter your new password')
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
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #11aa44;
  background-image: url(${pattern});
`;

export const FormCard = styled.div`
  background: white;
  height: 11em;
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
    font-family: Ubuntu, sans-serif;
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

const loadingButtonTheme = {
  text: '#292d38',
  background: 'lightgray',
};
