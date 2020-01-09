import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { register } from '../../state/actions/authenticationActions';
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
            <div>
              <Field type='text' name='city' placeholder='Location' />
            </div>
            <div>
              <Field
                type='text'
                name='experience'
                placeholder='Select Level Of Experience'
              />
            </div>
            <div>
              <Field type='text' name='skills' placeholder='Skills' />
            </div>
            <div>
              <Field
                type='text'
                name='description'
                placeholder='Description'
              />
            </div>
            <div>
              <StyledButton
                theme={buttonTheme}
                onClick={handleUserRoleSubmit}
                type='submit'
              >
                {' '}
                Submit{' '}
              </StyledButton>
            </div>
          </Form>
        </FormContainer>
      </RegisterCard>
    </ThisGreyBackgroundContainer>
  );
}

const FormikStudentForm = withFormik({
  mapPropsToValues({ city, experience, skills, description }) {
    return {
      city: city || '',
      experience: experience || '',
      skills: skills || '',
      description: description || '',
    };
  },
  validationSchema: Yup.object().shape({
    city: Yup.string(),
    experience: Yup.string(),
    skills: Yup.string(),
    description: Yup.string().required(),
  }),
  handleSubmit(values, { props, resetForm }) {
    resetForm();
    props.register(props, values);
  },
})(StudentForm);

export default connect(state => state, { register })(
  FormikStudentForm,
);
