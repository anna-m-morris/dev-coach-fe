import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  StyledButton,
  buttonTheme,
  Logo,
} from '../../Landing/Landing-styles';

import { login } from '../../../state/actions/authenticationActions';

// export const GreyBackgroundContainer = styled.div`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #f7f7f7;
// `;

// export const FormCard = styled.div`
//   background: white;
//   height: 30em;
//   width: 25em;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
//   border-radius: 1rem;

//   .message-container {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background: #408f53;
//     border-top-left-radius: 1rem;
//     border-top-right-radius: 1rem;
//     padding: 2rem 0;
//   }

//   h1 {
//     color: white;
//     margin: 0;
//   }
// `;

// export const FormContainer = styled.div`
//   height: 100%;
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

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  .form-card-container {
    background: white;
    margin-top: 8rem;
    height: 35em;
    width: 25em;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;

    .message-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #408f53;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      padding: 2rem 0;
      margin-bottom: 2rem;
    }

    .form-title {
      color: white;
      margin: 0;
    }
  }

  .form-container {
    height: 100%;
    width: 100%;

    .form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 1rem 2rem;
    }

    div {
      margin: 0.5rem 0;
    }

    .input-container {
      width: 100%;
      height: 4rem;
    }

    .form-input {
      border: none;
      background: #f4f4f4;
      border-radius: 2rem;
      width: 92%;
      padding: 1rem 1rem;
      font-size: 1rem;
      outline: none;
      transition: ease-out 0.1s;

      &:hover {
        transition: ease-in 0.1s;
        box-shadow: 0 2px 4px #d3d3d3;
      }
    }

    .error {
      padding: 0;
      margin: 0;
      color: red;
      font-size: 0.8rem;
    }

    .options-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8rem;
      margin: 0;
    }

    .remember-me {
      display: flex;
      align-items: center;

      p {
        margin-left: 0.3rem;
        color: #6d6d6d;
      }
    }

    .forgot-password {
      text-decoration: none;
      color: #408f53;
    }

    .form-button-container {
      width: 100%;
      .form-button {
        width: 100%;
        border-radius: 2rem;
      }
    }
  }

  .alternate-form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 0.8rem;
      color: #6d6d6d;
    }

    a {
      text-decoration: none;
      color: #408f53;
    }
  }
`;

const loadingButtonTheme = {
  text: '#292d38',
  background: 'lightgray',
};

const LoginForm = ({
  userReducer,
  errors,
  touched,
  isSubmitting,
}) => {
  return (
    <LoginContainer className='Login-container'>
      <div className='form-card-container'>
        <div className='message-container'>
          <h1 className='form-title'>Welcome back</h1>
        </div>
        <div className='form-container'>
          <Form className='form'>
            <div className='input-container'>
              <Field
                className='form-input'
                type='email'
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
      .email('Please enter a valid email')
      .required('Please enter an email address'),
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
