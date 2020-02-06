import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { Formik, Form, Field, useField } from 'formik';
import * as yup from 'yup';
import Loader from 'react-loader-spinner';
import {
  FormControl,
  Select,
  InputLabel,
  makeStyles,
  MenuItem,
  TextField,
  Box,
} from '@material-ui/core';
import { loadingButtonTheme } from './Login/LoginStyles';
import formOptions from './studentFormState';

import {
  StyledButton,
  buttonTheme,
  Logo,
} from '../Landing/Landing-styles';
import { chooseUserRole } from '../../state/actions/authenticationActions';

const validationSchema = yup.object().shape({
  userLocation: yup.string().required('Please enter location'),
  experience: yup.number().required('Please provide experience'),
});

const NavLogo = styled(Logo)`
  a {
    width: 1.5rem;
    height: 1rem;
  }
`;

export const FormButton = styled(StyledButton)`
  width: 50% !important;
  margin-top: 2em;
  display: flex;
`;

export const InfoParagraph = styled.p`
  width: 85%;
  text-align: center;
`;

const StudentCardContainer = styled.div`
  max-width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .student-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  },
}));

const StudentForm = props => {
  const classes = useStyles();
  const { userReducer } = props;
  const initialValues = {
    userLocation: '',
    experience: '',
    confidence: '',
    linkedin: '',
    github: '',
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
          <Box className={classes.box}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(
                formValues,
                { setSubmitting, resetForm },
              ) => {
                setSubmitting(true);
                props.chooseUserRole(props, formValues);
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ values, isSubmitting, errors }) => (
                <Form className={classes.box}>
                  <div>
                    <div>
                      <FormControl
                        className={classes.formControl}
                        error={!!errors.experience}
                      >
                        <InputLabel>Experience</InputLabel>
                        <Field
                          name='experience'
                          type='select'
                          placeholder='experience'
                          value={values.experience}
                          as={Select}
                        >
                          {formOptions.experience.map(option => (
                            <MenuItem
                              value={option.level}
                              key={uuid()}
                            >
                              {option.text}
                            </MenuItem>
                          ))}
                        </Field>
                      </FormControl>
                    </div>
                    <div>
                      <FormControl
                        className={classes.formControl}
                        error={!!errors.confidence}
                      >
                        <InputLabel>Confidence</InputLabel>
                        <Field
                          name='confidence'
                          value={values.confidence}
                          as={Select}
                        >
                          {formOptions.confidence.map(option => (
                            <MenuItem
                              value={option.level}
                              key={uuid()}
                            >
                              {option.text}
                            </MenuItem>
                          ))}
                        </Field>
                      </FormControl>
                    </div>
                    <div>
                      <MyTextField
                        placeholder='Location'
                        name='userLocation'
                      />
                    </div>
                    <div>
                      <MyTextField
                        placeholder='GitHub'
                        name='github'
                      />
                    </div>
                    <div>
                      <MyTextField
                        placeholder='Linkedin'
                        name='linkedin'
                      />
                    </div>
                    <FormButton
                      className='submit-button'
                      theme={
                        userReducer.isLoading
                          ? loadingButtonTheme
                          : buttonTheme
                      }
                      disabled={isSubmitting}
                      type='submit'
                    >
                      Submit
                    </FormButton>
                  </div>
                </Form>
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
