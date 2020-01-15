import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import {
  FormControl,
  Select,
  InputLabel,
  withStyles,
  makeStyles,
  MenuItem,
  Button,
  InputBase,
  TextField,
  Box,
} from '@material-ui/core';

import { StyledButton, buttonTheme, Logo } from '../Landing';
import { chooseUserRole } from '../../state/actions/authenticationActions';
import {
  GreyBackgroundContainer,
  FormCard,
  FormContainer,
} from './LoginForm';

const NavLogo = styled(Logo)`
  a {
    width: 1.5rem;
    height: 1rem;
  }
`;

const StyledError = styled.p`
  padding: 0;
  margin: 0;
  color: red;
  font-size: 0.8rem;
`;

const ThisGreyBackgroundContainer = styled(GreyBackgroundContainer)`
  /* fonts should be global
  font-family: ABeeZee;
   */
`;

const StudentCard = styled(FormCard)`
  display: flex;
  h1 {
    margin: 0;
    margin-top: -0.2em;
    margin-bottom: 0.1em;
  }
`;
const StudentFormContainer = styled(FormContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -2em;
`;

const FormButton = styled(StyledButton)`
  width: 50% !important;
  margin-top: 1.6em;
`;

const InfoParagraph = styled.p`
  width: 85%;
  text-align: center;
  margin-top: 0.4em;
`;

const useStyles = makeStyles(theme => ({
  formControl: {
    width: 240,
  },
  textField: {
    width: 240,
    marginBottom: '-0.1em',
  },
  box: {
    '& > *': {
      marginTop: '0.1em',
      marginBottom: '0.2em',
    },
  },
}));

const StudentForm = props => {
  const classes = useStyles();
  return (
    <div>
      <ThisGreyBackgroundContainer>
        <StudentCard>
          <Link to='/userrole'>
            <NavLogo />
          </Link>
          <h1>Get started</h1>
          <InfoParagraph>
            Get started by letting us know where you're based, and
            your background in coding. We'll use this information to
            make sure you end up matched with the coach you need.
          </InfoParagraph>
          <StudentFormContainer>
            <Box
              className={classes.box}
              display='flex'
              flexDirection='column'
              justifyContent='space-evenly'
              alignItems='center'
            >
              <FormControl className={classes.formControl}>
                <TextField
                  variant='outlined'
                  placeholder='Location'
                  className={classes.textField}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel>Experience</InputLabel>
                <Select
                  placeholder='experience'
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='none'>None</MenuItem>
                  <MenuItem value='some'>Some</MenuItem>
                  <MenuItem value='lots'>Lots</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel>Confidence</InputLabel>
                <Select>
                  <MenuItem value='none'>None</MenuItem>
                  <MenuItem value='some'>Some</MenuItem>
                  <MenuItem value='lots'>Lots</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <FormButton theme={buttonTheme}>Submit</FormButton>
          </StudentFormContainer>
        </StudentCard>
      </ThisGreyBackgroundContainer>
    </div>
  );
};

/* const StudentForm = ({ touched, errors, isSubmitting }) => {
  return (
    <div>
      <ThisGreyBackgroundContainer>
        <FormCard>
          <Link to='/userrole'>
            <NavLogo />
          </Link>
          <h1>Student Form</h1>
          <FormContainer>
            <Form>
              <div>
                <Field
                  type='text'
                  name='userLocation'
                  placeholder='Location'
                />
                {errors.userLocation && touched.userLocation && (
                  <StyledError>{errors.userLocation}</StyledError>
                )}
              </div>
              <div>
                <Field
                  type='text'
                  name='experience'
                  placeholder='Select Level Of Experience'
                />
                {errors.experience && touched.experience && (
                  <StyledError>{errors.experience}</StyledError>
                )}
              </div>
              <div>
                <Field
                  type='text'
                  name='confidence'
                  placeholder='Select Confidence Level'
                />
                {errors.confidence && touched.confidence && (
                  <StyledError>{errors.confidence}</StyledError>
                )}
              </div>
              <div>
                <StyledButton
                  type='submit'
                  disabled={isSubmitting}
                  theme={buttonTheme}
                >
                  Submit
                </StyledButton>
              </div>
            </Form>
          </FormContainer>
        </FormCard>
      </ThisGreyBackgroundContainer>
    </div>
  );
};

const FormikStudentForm = withFormik({
  mapPropsToValues({ userLocation, experience, confidence }) {
    return {
      userLocation: userLocation || '',
      experience: experience || '',
      confidence: confidence || '',
    };
  },
  validationSchema: Yup.object().shape({
    userLocation: Yup.string().required('Please enter a location'),
    experience: Yup.string().required(
      'Please enter Your experience level',
    ),
    confidence: Yup.string().required(
      'Please enter your confidence level',
    ),
  }),
  handleSubmit(values, { resetForm, setSubmitting, props }) {
    resetForm();
    setSubmitting(false);
    props.chooseUserRole(props, values, 1);
  },
})(StudentForm);

export default connect(state => state, {
  chooseUserRole,
})(FormikStudentForm); */

export default connect(state => state, { chooseUserRole })(
  StudentForm,
);
