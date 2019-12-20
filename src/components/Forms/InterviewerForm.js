import React, { useState } from 'react';
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
  const [state, setState] = useState(options);
  const handleChange = event => {
    setState(event.target.value);
  };
  return (
    <ThisGreyBackgroundContainer>
      <RegisterCard>
        <h1> Interviewer Form </h1>
        <FormContainer>
          <Form>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor='current city'>
                current city
              </InputLabel>
              <NativeSelect
                id='current city'
                name='city'
                // value={city}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option>select a city </option>
                <option value={10}>Edinburgh</option>
                <option value={20}>Lagos</option>
                <option value={30}>Watford</option>
              </NativeSelect>
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor='demo-customized-select-native'>
                level of experience
              </InputLabel>
              <NativeSelect
                id='demo-customized-select-native'
                name='level_of_experience'
                // value={experienceLevel}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                {' '}
                <option> select your level of experience </option>
                <option value={10}> less than 1 year</option>
                <option value={20}>2 years and a above</option>
                <option value={20}>4 years and a above</option>
                <option value={30}>10 years and above</option>
              </NativeSelect>
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor='demo-customized-select-native'>
                skills
              </InputLabel>
              <NativeSelect
                id='demo-customized-select-native'
                name='skills'
                // value={skills}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option>select your top skill </option>
                <option value={10}>Vanilla JS</option>
                <option value={20}> React JS</option>
              </NativeSelect>
            </FormControl>
            <FormControl className={classes.margin}>
              <TextField
                className={classes.margin}
                id='outlined-multiline-static'
                label='Not more than 300 words'
                multiline
                rows='4'
                variant='outlined'
              />
            </FormControl>
            <StyledButton theme={buttonTheme}> Submit </StyledButton>
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
    // city: ['edinburgh', 'lagos', 'watford'],
    // level_of_experience: ['less than a year', 'Over two years'],
    // skills: ['Native JS', 'React JS', 'Node JS'],
    // value: '',
  }),
  handleSubmit(values, { props }) {
    props.register(
      'http://localhost:5000/user/register',
      props,
      values,
    );
  },
})(InterviewerForm);
export default connect(state => state, { register })(
  FormikInterviewerForm,
);
