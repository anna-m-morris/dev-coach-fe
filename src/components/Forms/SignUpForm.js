import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { StyledButton, buttonTheme, invertTheme } from '../Landing';
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

function SignUpForm(props) {
  return (
    <GreyBackgroundContainer>
      <RegisterCard>
        <h1>Sign up to get started now</h1>
        <FormContainer>
          <Form>
            <ShortInputContainer>
              <Field type='text' name='first_name' />
              <Field type='text' name='last_name' />
            </ShortInputContainer>
            <Field type='email' name='email' />
            <Field type='password' name='password' />
            <Field type='password' name='confirmPassword' />

            <StyledButton theme={buttonTheme}>
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
    first_name,
    last_name,
    email,
    password,
    confirm_password,
  }) {
    return {
      first_name: 'First Name' || '',
      last_name: 'Last Name' || '',
      email: 'Email Address' || '',
      password: 'Password' || '',
      confirm_password: 'Confirm Password' || '',
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    password: Yup.string()
      .required('Please enter your password')
      .min(6),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      "Your passwords don't match",
    ),
  }),

  handleSubmit(values, { props }) {
    console.log(values);
    props.register(
      'http://localhost:5000/user/register',
      props,
      values,
    );
  },
})(SignUpForm);

export default connect(state => state, { register })(
  FormikSignUpForm,
);
