import React from 'react';

import { connect } from 'react-redux';

import styled from 'styled-components';
import { withFormik, Form, Field, FieldArray } from 'formik';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import * as Yup from 'yup';
import axios from 'axios';
import { StyledButton, buttonTheme, invertTheme } from '../Landing';
import {
  GreyBackgroundContainer,
  FormCard,
  FormContainer,
} from './LoginForm';
import { register } from '../../state/actions/actionCreators';
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
const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 255px',
    transition: theme.transitions.create([
      'border-color',
      'box-shadow',
    ]),
    fontFamily: ['ABeeZee'].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const options = {
  city: '',
  experienceLevel: '',
  skills: '',
  description: '',
};
function InterviewerForm(props) {
  const classes = useStyles();

  // export function StudentForm(props) {
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
const FormikInterviewerForm = withFormik({
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
})(InterviewerForm);

export default connect(state => state)(FormikInterviewerForm);
