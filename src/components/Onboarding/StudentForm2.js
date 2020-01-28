import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Field, useField, FieldArray } from 'formik';
import * as yup from 'yup'
import uuid from 'uuid';
import {
  FormControl,
  Select,
  InputLabel,
  makeStyles,
  MenuItem,
  TextField,
  Box,
  FormHelperText,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  StyledButton,
  buttonTheme,
  Logo,
} from '../Landing/Landing-styles';
import { chooseUserRole } from '../../state/actions/authenticationActions';
import { countries } from '../../utils/countries';

const NavLogo = styled(Logo)`
  a {
    width: 1.5rem;
    height: 1rem;
  }
`;

export const FormButton = styled(StyledButton)`
  width: 50% !important;
  margin-top: 2em;
`;

export const InfoParagraph = styled.p`
  width: 85%;
  text-align: center;
`;

const StudentCardContainer = styled.div`
  max-width: 100%;
  margin: 2rem 0;

  .student-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50rem;
    background: #fff;
    box-shadow: 0 6px 8px #d3d3d3;
    padding: 1rem;
    border-radius: 6px;

    h1 {
      margin: 0;
    }

    .submit-button {
      margin: 1.5rem 0 1rem 0;
    }
  }
`;

const useStyles = makeStyles(theme => ({
  progress: {
    transition: 'width 2s',
  },
  formControl: {
    width: 600,
    height: 50,
  },
  textField: {
    width: 600,
    marginTop: '0.8em',
    marginBottom: '0.3em',
  },
  box: {
    '& > *': {
      marginTop: '0.3em',
      marginBottom: '0.3em',
    },
  },
}));

const validationSchema = yup.object().shape({
  userLocation: yup.string().required('Please enter location'),
  description: yup.string().required('Please enter description'),
  github: yup.string().required('Please enter github'),
  linkedin: yup.string().required('Please enter linkdein')
});

const StudentForm = props => {
  const classes = useStyles();

  const MyTextField = ({ placeholder, ...props }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
      <TextField
        className={classes.textField}
        placeholder={placeholder}
        {...field}
        helperText={errorText}
        error={!!errorText}
      />
    );
  };

  return (
    <StudentCardContainer className='student-card-container'>
      <div className='student-card'>
        <Link to='/userrole'>
          <NavLogo />
        </Link>
        <h1>Get started</h1>
        <InfoParagraph>
          Get started by letting us know where you're based, and your
          background in coding. We'll use this information to make
          sure you end up matched with the coach you need.
        </InfoParagraph>
        <div>
          <Box
            className={classes.box}
            display='flex'
            flexDirection='column'
            justifyContent='space-evenly'
            alignItems='center'
          >
            <Formik
              initialValues={{
                location: '',
                github: '',
                linkedin: '',
                confidence: {
                  hasError: false,
                  value: '',
                  options: [
                    {
                      level: 1,
                      text: 'None',
                    },
                    {
                      level: 2,
                      text:
                        "I'm not very confident in my ability to interview successfully",
                    },
                    {
                      level: 3,
                      text:
                        "I'm not as confident at interviewing as I'd like to be",
                    },
                    {
                      level: 4,
                      text:
                        "I'm not confident, but not unconfident either",
                    },
                    {
                      level: 5,
                      text: "I'm confident in my interview ability",
                    },
                  ],
                },
                experience: {
                  value: '',
                  options: [
                    {
                      level: 1,
                      text: 'None',
                    },
                    {
                      level: 2,
                      text: "I've taken some online courses",
                    },
                    {
                      level: 3,
                      text:
                        "I've finished a few online courses and built some personal projects",
                    },
                    {
                      level: 4,
                      text:
                        "I've completed a coding bootcamp or similar program",
                    },
                    {
                      level: 5,
                      text: "I've completed a CS degree",
                    },
                    {
                      level: 5,
                      text: "I'm a professional software developer",
                    },
                  ],
                },
              }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {({
                initialValues,
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <FieldArray name='experience'>
                    {arrayHelpers => (
                      <div>
                        <InputLabel>Experience</InputLabel>
                        <Field
                          name='experience'
                          type='select'
                          as={Select}
                          className={classes.textField}
                        >
                          {initialValues.experience.options.map(
                            option => (
                              <MenuItem
                                value={option.level}
                                key={uuid()}
                              >
                                {option.text}
                              </MenuItem>
                            ),
                          )}
                        </Field>
                      </div>
                    )}
                  </FieldArray>
                  <FieldArray name='experience'>
                    {arrayHelpers => (
                      <div>
                        <InputLabel>Confidence</InputLabel>
                        <Field
                          name='confidence'
                          type='select'
                          as={Select}
                          className={classes.textField}
                        >
                          {initialValues.confidence.options.map(
                            option => (
                              <MenuItem
                                value={option.level}
                                key={uuid()}
                              >
                                {option.text}
                              </MenuItem>
                            ),
                          )}
                        </Field>
                      </div>
                    )}
                  </FieldArray>
                  <MyTextField
                    placeholder='Location'
                    name='userLocation'
                  />
                  <div>
                    <MyTextField
                      placeholder='Description'
                      name='description'
                    />
                  </div>
                  <div>
                    <MyTextField placeholder='GitHub' name='github' />
                  </div>
                  <div>
                    <MyTextField
                      placeholder='Linkedin'
                      name='linkedin'
                    />
                  </div>
                  {errors.name && (
                    <FormHelperText>This is required!</FormHelperText>
                  )}
                  <FormButton
                    className='submit-button'
                    disabled={isSubmitting}
                  >
                    Submit
                  </FormButton>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                </form>
              )}
            </Formik>
          </Box>
        </div>
      </div>
    </StudentCardContainer>
  );
};

export default connect(state => state, { chooseUserRole })(
  StudentForm,
);
