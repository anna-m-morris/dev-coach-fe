import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { StyledButton, buttonTheme } from '../Landing';

import { login } from '../../state/actions/actionCreators';

export const GreyBackgroundContainer = styled.div`
  height: 100vh;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormCard = styled.div`
  background: white;
  height: 30em;
  width: 25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #cdc7c7;

  h1 {
    color: #292d38;
    margin: 1.2em;
  }
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  /* margin-top: 1em; */

  form {
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  div {
    width: 75%;
    height: 60px;
  }

  input {
    background: #f2f2f2;
    height: 2em;
    width: 91%;
    font-family: Ubuntu, sans-serif;
    border-radius: 4px;
    border: 1px solid #c8c8c8;
    padding: 0.5em;
    font-size: 16px;
    color: #808080;

    :hover {
      background: #ffffff;
    }

    :focus {
      outline: none;
    }
  }

  button {
    width: 96%;
  }
`;

const StyledDetails = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;

  input {
    width: 10%;
    height: 1em;
    margin: 0;
  }

  p {
    color: #292d38;
  }

  div {
    width: 60%;
    display: flex;
    justify-content: flex-end;
  }

  a {
    text-decoration: none;
    font-weight: bold;
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

const ExtraLoginDetails = () => {
  return (
    <StyledDetails>
      <input type='checkbox' />
      <p>Remember Me</p>
      <div>
        <a href='/forgot-password'>
          <p>Forgot your password?</p>
        </a>{' '}
      </div>
    </StyledDetails>
  );
};

function LoginForm({ userReducer, errors, touched, isSubmitting }) {
  return (
    <GreyBackgroundContainer>
      <FormCard>
        <h1>Welcome Back!</h1>
        <FormContainer>
          <Form>
            <div>
              <Field type='email' name='email' placeholder='Email' />
              {errors.email && touched.email && (
                <StyledError>{errors.email}</StyledError>
              )}
            </div>
            <div>
              <Field
                type='password'
                name='password'
                placeholder='Password'
              />
              {errors.password && touched.password && (
                <StyledError>{errors.password}</StyledError>
              )}
            </div>
            <ExtraLoginDetails />
            <div>
              <StyledButton
                theme={
                  userReducer.isLoading
                    ? loadingButtonTheme
                    : buttonTheme
                }
                type='submit'
                disabled={isSubmitting}
              >
                Sign in to your account
              </StyledButton>
            </div>
            {/*             {props.userReducer.isLoading ? (
              <h3>Loading</h3>
            ) : (
              <h3>Couldn't fetch</h3>
            )} */}
          </Form>
        </FormContainer>
      </FormCard>
    </GreyBackgroundContainer>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || '',
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter an email address'),
    password: Yup.string()
      .required('Please enter your password')
      .min(6, 'Must be 6 characters minimun'),
  }),
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    resetForm();
    setSubmitting(false);

    props.login(props, values);
  },
})(LoginForm);

export default connect(state => state, { login })(FormikLoginForm);
