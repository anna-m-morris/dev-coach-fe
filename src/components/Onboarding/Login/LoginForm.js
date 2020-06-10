import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Loader from 'react-loader-spinner';

import {
  StyledButton,
  buttonTheme,
} from '../../Landing/Landing-styles';
import {
  LoginContainer,
  StyledLoader,
  loadingButtonTheme,
} from './LoginStyles';
import Navigation from '../../Landing/Navigation/Navigation';
import { login } from '../../../state/actions/authenticationActions';

const LoginForm = ({
  userReducer,
  errors,
  touched,
  isSubmitting,
}) => {
  if (userReducer.isLoading) {
    return (
      <LoginContainer className='register-container'>
        <StyledLoader>
          <Loader
            type='TailSpin'
            color='#2BAD60'
            height={80}
            width={80}
          />
        </StyledLoader>
      </LoginContainer>
    );
  }
  return (
    <LoginContainer className='Login-container'>
      <div className='navigation-container'>
        <Navigation class='navigation' />
      </div>
      <div className='content-container'>
        <div className='form-card-container'>
          <div className='message-container'>
            <h1 className='form-title'>Welcome back</h1>
          </div>
          <div className='form-container'>
            <Form className='form'>
              <div className='input-container'>
                <Field
                  className='form-input'
                  name='email'
                  placeholder='Email'
                />
                {errors.email && touched.email && (
                  <p className='error'>{errors.email}</p>
                )}
              </div>
              <div className='input-container'>
                <Field
                  className='form-input'
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                {userReducer.loginError ? (
                  <p className='error'>{userReducer.loginError}</p>
                ) : (
                  errors.password &&
                  touched.password && (
                    <p className='error'>{errors.password}</p>
                  )
                )}
              </div>
              <div className='options-container'>
                <div className='remember-me'>
                  <input type='checkbox' />
                  <p>Remember Me</p>
                </div>
                <Link className='forgot-password' to='/resetPassword'>
                  <p>Forgot your password?</p>
                </Link>
              </div>
              <div className='form-button-container'>
                <StyledButton
                  className='form-button'
                  theme={
                    userReducer.isLoading
                      ? loadingButtonTheme
                      : buttonTheme
                  }
                  type='submit'
                  disabled={isSubmitting}
                >
                  Sign in
                </StyledButton>
              </div>
            </Form>
            <div className='alternate-form-container'>
              <p>Dont't have an account?</p>
              <Link to='/register'>Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required('Please enter an email or username'),
    password: Yup.string()
      .required('Please enter your password')
      .min(3, 'Must be 6 characters minimun'),
  }),
  handleSubmit: (values, { props, resetForm, setSubmitting }) => {
    resetForm();
    setSubmitting(false);

    props.login(props, values);
  },
})(LoginForm);

export default connect(state => state, { login })(FormikLoginForm);
