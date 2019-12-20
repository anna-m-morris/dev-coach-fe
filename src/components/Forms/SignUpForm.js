import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { StyledButton, buttonTheme } from '../Landing';
import {
  GreyBackgroundContainer,
  FormCard,
  FormContainer,
} from './LoginForm';

import { register } from '../../state/actions/actionCreators';

const ShortInputContainer = styled.div`
  display: flex;
  width: 74%;
  justify-content: space-between;

  input {
    width: 44%;
  }
`;

const RegisterCard = styled(FormCard)`
  width: 30em;
  height: 35em;

  h1 {
    font-size: 24px;
  }
`;

function SignUpForm({ isSubmitting, errors, touched }) {
  return (
    <GreyBackgroundContainer>
      <RegisterCard>
        <h1>Sign up to get started now</h1>
        <FormContainer>
          <Form>
            <ShortInputContainer>
              <div>
                {errors.firstName && touched.firstName && (
                  <p>{errors.firstName}</p>
                )}
                <Field
                  type='text'
                  name='firstName'
                  placeholder='First name'
                />
              </div>
              <div>
                {' '}
                {errors.lastName && touched.lastName && (
                  <p>{errors.lastName}</p>
                )}
                <Field
                  type='text'
                  name='lastName'
                  placeholder='Last name'
                />
              </div>
            </ShortInputContainer>
            <div>
              {errors.email && touched.email && <p>{errors.email}</p>}
              <Field type='email' name='email' placeholder='Email' />
            </div>
            <div>
              {' '}
              {errors.password && touched.password && (
                <p>{errors.password}</p>
              )}
              <Field
                type='password'
                name='password'
                placeholder='Password'
              />
            </div>
            <div>
              {' '}
              {errors.confirmPassword && touched.confirmPassword && (
                <p>{errors.confirmPassword}</p>
              )}
              <Field
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
              />
            </div>

            <StyledButton
              disabled={isSubmitting}
              theme={buttonTheme}
              type='submit'
            >
              Get Started
            </StyledButton>
          </Form>
        </FormContainer>
      </RegisterCard>
    </GreyBackgroundContainer>
  );
}

const FormikSignUpForm = withFormik({
  mapPropsToValues({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      password: password || '',
      confirmPassword: confirmPassword || '',
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    password: Yup.string()
      .required('Please enter your password')
      .min(
        6,
        'Please make sure your password is 6 characters or longer',
      ),
    confirmPassword: Yup.string()
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
