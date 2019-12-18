import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import { register } from '../state/actions/actionCreators';

function SignUpForm(props) {
  return (
    <Form>
      <Field type="text" name="first name" placeholder="first name" />
      <Field type="text" name="last name" placeholder="last name" />
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <Field
        type="password"
        name="confirm password"
        placeholder="confirm password"
      />

      <button>Submit!</button>
    </Form>
  );
}

const FormikSignUpForm = withFormik({
  mapPropsToValues(
      { firstName, lastName, email, password, confirmPassword }
      ) {
    return {
      firstName: 'first name' || '',
      lastName: 'last name' || '',
      email: 'email' || '',
      password: 'password' || '',
      confirmPassword: 'confirm password' || ''
    };
  },
  //   validationSchema: Yup.object().shape({
  //     firstName: Yup.string().required('Please enter your first name'),
  //     lastName: Yup.string().required('Please enter your last name'),
  //     password: Yup.string().required('Please enter your password').min(6),
  //     confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Your passwords don\'t match')
  //  })

  handleSubmit(values, { props }) {
      console.log(values)
    props.register(
      'https://dev-coach-production.herokuapp.com/user/register',
      props,
      values
    );
  }
})(SignUpForm);

export default connect(state => state, { register })(FormikSignUpForm);
