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
      <Field type="text" name="first_name" placeholder="first name" />
      <Field type="text" name="last_name" placeholder="last name" />
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <Field
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
      />

      <button>Submit!</button>
    </Form>
  );
}

const FormikSignUpForm = withFormik({
  mapPropsToValues(
      { first_name, last_name, email, password, confirm_password }
      ) {
    return {
      first_name: 'first_name' || '',
      last_name: 'last_name' || '',
      email: 'email' || '',
      password: 'password' || '',
      confirm_password: 'confirm_password' || ''
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
      'http://localhost:5000/user/register',
      props,
      values
    );
  }
})(SignUpForm);

export default connect(state => state, { register })(FormikSignUpForm);
