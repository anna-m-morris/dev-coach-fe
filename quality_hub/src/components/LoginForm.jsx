import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

import { login } from "../state/actions/actionCreators";

function LoginForm(props) {
    console.log(props.userReducer)
  return (
    <Form>
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <button>Submit!</button>
      {props.userReducer.isLoading ? <h3>Loading</h3> : <h3>Couldn't fetch</h3>}
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

  handleSubmit(values, { props }) {
    props.login("https://reqres.in/api/login", props, values);
  },
})(LoginForm);

export default connect(state => state, { login })(FormikLoginForm);
