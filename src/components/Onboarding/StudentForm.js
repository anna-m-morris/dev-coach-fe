import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import uuid from 'uuid';
import {
  Formik,
  withFormik,
  Form,
  Field,
  useField,
  FieldArray
} from 'formik';
import * as yup from 'yup';
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
import initialValues from './StudentFormState';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  StyledButton,
  buttonTheme,
  Logo,
} from '../Landing/Landing-styles';
import { chooseUserRole } from '../../state/actions/authenticationActions';
import { countries } from '../../utils/countries';


const validationSchema = yup.object().shape({
  userLocation: yup.string().required('Please enter location'),
  experience: yup.number().required('please provide experience'),
  github: yup.string().required('Please enter Github'),
  linkedin: yup.string().required('Please enter LinkedIn')
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

const StudentForm = props => {
  const classes = useStyles();
  const MySelect = (props) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
      <Select {...field} helperText={errorText} error={!!errorText} />
    );
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
          <Box
            className={classes.box}
            display='flex'
            flexDirection='column'
            justifyContent='space-evenly'
            alignItems='center'
          >
            <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(formValues, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          props.chooseUserRole(props, {
            userLocation: formValues.userLocation,
            experience: formValues.experience,
            confidence: formValues.confidence,
            github: formValues.github,
            linkedin: formValues.linkedin,
          })
          console.log(formValues);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isSubmitting, errors }) => (
          <Form>
            <div>
            <MyTextField placeholder='Location' name='userLocation' />
            </div>
            <div>
              <MyTextField placeholder='GitHub' name='github' />
            </div>
            <div>
              <MyTextField placeholder='Linkedin' name='linkedin' />
            </div>
            <div>
              <div>
              <FormControl className={classes.formControl} error={!!errors.experience && errors.touched}>
                <InputLabel>Experience</InputLabel>
                <Field
                  name='experience'
                  type='select' 
                  value={values.experience|| ''}
                  as={Select}
                >
                  {initialValues.experience.options.map((option) => (
                    <MenuItem value={option.level} key={uuid()}>
                      {option.text}
                    </MenuItem>
                  ))}
                </Field>  
                </FormControl>
              </div>
              <div>
              <FormControl className={classes.formControl} error={!!errors.confidence}>
                <InputLabel>Confidence</InputLabel>
                <Field
                  name='confidence'
                  type='select'
                  value={values.confidence || ''}
                  as={Select}
                >
                  {initialValues.confidence.options.map((option) => (
                    <MenuItem value={option.level} key={uuid()}>
                      {option.text}
                    </MenuItem>
                  ))}
                </Field>
                </FormControl>
              </div>
              <FormButton className='submit-button' theme={buttonTheme} disabled={isSubmitting} type='submit'>
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
