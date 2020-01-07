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

const RegisterCard = styled(FormCard)`
  width: 30em;
  height: 35em;
  font-family: ABeeZee;

  h1 {
    font-size: 24px;
  }
`;

const ThisGreyBackgroundContainer = styled(GreyBackgroundContainer)`
  font-family: ABeeZee;
`;

function StudentForm(props) {
  const handleUserRoleSubmit = () => {};
  return (
    <ThisGreyBackgroundContainer>
      <RegisterCard>
        <h1> Interviewer Form </h1>
        <FormContainer>
          <Form>
            <Field type='text' name='city' />
            <Field
              type='text'
              name='level_of_experience'
              placeholder=' select level of experience '
            />
            <Field type='text' name='skills' />
            <Field type='text' name='description' />
            <StyledButton
              theme={buttonTheme}
              onClick={handleUserRoleSubmit}
            >
              {' '}
              Submit{' '}
            </StyledButton>
          </Form>
        </FormContainer>
      </RegisterCard>
    </ThisGreyBackgroundContainer>
  );
}

const FormikStudentForm = withFormik({
  validationSchema: Yup.object().shape({
    city: Yup.array(),
    level_of_experience: Yup.array(),
    skills: Yup.array(),
    value: Yup.string().required(),
  }),
  mapPropsToValues: props => ({
    city: 'Location',
    level_of_experience: 'Experience',
    skills: 'Skills',
    description: 'Describe yourself in one line',
  }),
  handleSubmit(values, { props }) {
    props.register(
      'http://localhost:5000/user/register',
      props,
      values,
    );
  },
})(StudentForm);

export default connect(state => state)(FormikStudentForm);
