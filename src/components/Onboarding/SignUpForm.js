import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Loader from 'react-loader-spinner';

import { StyledButton, buttonTheme } from '../Landing/Landing-styles';
import {
  LoginContainer,
  loadingButtonTheme,
} from './Login/LoginStyles';

import { register } from '../../state/actions/authenticationActions';

const ShortInputContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 4rem;
`;

const RegisterContainer = styled(LoginContainer)`
  justify-content: center;

  .form-card-container {
    height: 32rem;
    width: 25rem;

    .form {
      padding-top: 2rem;
    }

    .message-container {
      text-align: center;
      margin-bottom: 0;
    }

    .short-input {
      width: 49%;

      .form-input {
        width: 84%;
      }
    }

    #short-input-one {
      margin-right: 1rem;
    }

    .form-button-container {
      margin: 0;
    }
  }
`;

const SignUpForm = ({
  userReducer,
  isSubmitting,
  errors,
  touched,
}) => {
  return (
    <RegisterContainer className='register-container'>
      <div className='form-card-container'>
        <div className='message-container'>
          <h1 className='form-title'>Sign Up</h1>
        </div>
        <div className='form-container'>
          <Form className='form'>
            <ShortInputContainer className='short-input-container'>
              <div id='short-input-one' className='short-input'>
                <Field
                  className='form-input'
                  type='text'
                  name='first_name'
                  placeholder='First Name'
                />
                {errors.first_name && touched.first_name && (
                  <p className='error'>{errors.first_name}</p>
                )}
              </div>
              <div className='short-input'>
                <Field
                  className='form-input'
                  type='text'
                  name='last_name'
                  placeholder='Last Name'
                />
                {errors.last_name && touched.last_name && (
                  <p className='error'>{errors.last_name}</p>
                )}
              </div>
            </ShortInputContainer>
            <div className='input-container'>
              <Field
                className='form-input'
                type='email'
                name='email'
                placeholder='Email'
              />
              {userReducer.signUpError ? (
                <p className='error'>{userReducer.signUpError}</p>
              ) : (
                errors.email &&
                touched.email && (
                  <p className='error'>{errors.email}</p>
                )
              )}
            </div>
            <div className='input-container'>
              <Field
                className='form-input'
                type='password'
                name='password'
                placeholder='Password'
              />
              {errors.password && touched.password && (
                <p className='error'>{errors.password}</p>
              )}
            </div>
            <div className='input-container'>
              <Field
                className='form-input'
                type='password'
                name='confirm_password'
                placeholder='Confirm Password'
              />
              {errors.confirm_password &&
                touched.confirm_password && (
                  <p className='error'>{errors.confirm_password}</p>
                )}
            </div>

            <div className='form-button-container'>
              <StyledButton
                className='form-button'
                disabled={isSubmitting}
                theme={
                  userReducer.isLoading
                    ? loadingButtonTheme
                    : buttonTheme
                }
                type='submit'
              >
                {' '}
                {userReducer.isLoading && (
                  <Loader
                    type='TailSpin'
                    color='white'
                    height={20}
                    width={20}
                  />
                )}
                Get Started
              </StyledButton>
            </div>
          </Form>
          <div className='alternate-form-container'>
            <p>Already have an account?</p>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      </div>
    </RegisterContainer>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues: () => ({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  }),
  validationSchema: Yup.object().shape({
    first_name: Yup.string().required('Please enter first name'),
    last_name: Yup.string().required('Please enter last name'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    password: Yup.string()
      .required('Please enter your password')
      .min(6, 'Must be 6 character minimum'),
    confirm_password: Yup.string()
      .oneOf(
        [Yup.ref('password'), null],
        "Your passwords don't match",
      )
      .required('Please confirm your password'),
  }),

  handleSubmit(values, { props, setSubmitting, resetForm }) {
    resetForm();
    setSubmitting(false);

    props.register(props, values);
  },
})(SignUpForm);

export default connect(state => state, { register })(
  FormikSignUpForm,
);
