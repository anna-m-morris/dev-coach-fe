import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

function LoginForm(props) {
  return (
    <Form>
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <button>Submit!</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  handleSubmit(values, props) {
    axios
      .post("https://reqres.in/api/login", values)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.props.history.push('/dashboard')
      })
      .catch(err => {
        console.log(err);
      });
  }
})(LoginForm);

export default connect(state => state)(FormikLoginForm);
