import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid';
import styled from 'styled-components';
import { useField, Form, Field, Formik } from 'formik';
import * as yup from 'yup';
import {
  FormControl,
  Select,
  InputLabel,
  makeStyles,
  MenuItem,
  TextField,
  Box,
} from '@material-ui/core';

import { buttonTheme, Logo } from '../Landing/Landing-styles';
import { FormButton, InfoParagraph } from './StudentForm';
import { chooseUserRole } from '../../state/actions/authenticationActions';
import options from './coachFormState';

const CoachCardContainer = styled.div`
  max-width: 100%;
  margin: 2rem 0;

  .coach-card {
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
      margin-bottom: 1rem;
    }
  }
`;

const useStyles = makeStyles(theme => ({
  formControl: {
    width: 600,
  },
  textField: {
    width: 600,
    marginTop: '1em',
    marginBottom: '0.3em',
  },
  box: {
    '& > *': {
      marginTop: '0.3em',
      marginBottom: '0.3em',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  },
  description: {
    width: 600,
    paddingBottom: '2em',
  },
}));

const validationSchema = yup.object().shape({
  userLocation: yup.string().required('Please enter location'),
  experience: yup.number().required('please provide experience'),
  skills: yup.number().required('Please select a skill'),
  description: yup.string().required('Please enter description'),
  github: yup.string().required('Please enter github'),
  linkedin: yup.string().required('Please enter linkdein'),
});

const CoachForm = props => {
  const classes = useStyles();
  const initialValues = {
    userLocation: '',
    experience: '',
    skills: '',
    description: '',
    github: '',
    linkedin: '',
  };

  const MyTextField = ({ placeholder, ...props }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';

    return (
      <TextField
        placeholder={placeholder}
        {...field}
        helperText={errorText}
        error={!!errorText}
        className={classes.textField}
      />
    );
  };

  return (
    <CoachCardContainer className='coach-card-container'>
      <div className='coach-card'>
        <Link to='/userrole'>
          <Logo />
        </Link>
        <h1>Get Started</h1>
        <InfoParagraph>
          Tell us about yourself. What can you offer as a coach?
        </InfoParagraph>
        <div>
          <Box className={classes.box}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(false);
                props.chooseUserRole(props, values);
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ values, isSubmitting, errors }) => (
                <Form className={classes.box}>
                  <div>
                    <MyTextField
                      placeholder='Location'
                      name='userLocation'
                    />
                  </div>

                  <div>
                    <FormControl
                      className={classes.formControl}
                      error={!!errors.experience}
                    >
                      <InputLabel
                        style={{ color: '#bdbdbd' }}
                        className='input-label'
                      >
                        Experience
                      </InputLabel>
                      <Field
                        value={values.experience}
                        name='experience'
                        as={Select}
                      >
                        {options.expOptions.map(option => (
                          <MenuItem value={option.level} key={uuid()}>
                            {option.text}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </div>

                  <div>
                    <FormControl
                      className={classes.formControl}
                      error={!!errors.skills}
                    >
                      <InputLabel
                        style={{ color: '#bdbdbd' }}
                        className='input-label'
                      >
                        Skills
                      </InputLabel>
                      <Field
                        value={values.skills}
                        name='skills'
                        type='select'
                        as={Select}
                      >
                        {options.skillOptions.map(option => (
                          <MenuItem value={option.level} key={uuid()}>
                            {option.text}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </div>

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

                  <FormButton
                    className='submit-button'
                    theme={buttonTheme}
                    disabled={isSubmitting}
                    type='submit'
                  >
                    Submit
                  </FormButton>
                </Form>
              )}
            </Formik>
          </Box>
        </div>
      </div>
    </CoachCardContainer>
  );
};

export default connect(state => state, { chooseUserRole })(CoachForm);
