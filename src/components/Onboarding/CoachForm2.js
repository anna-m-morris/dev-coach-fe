import React from 'react';
import {
  Formik,
  withFormik,
  Form,
  Field,
  useField,
  FieldArray
} from 'formik';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  makeStyles,
} from '@material-ui/core';
import * as yup from 'yup';
import uuid from 'uuid';
import { countries } from '../../utils//countries';
import initialValues from './coachFormState';
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
    />
  );
};
const validationSchema = yup.object().shape({
  userLocation: yup.string().required('Please enter location'),
  experience: yup.number().required('please provide experience'),
  description: yup.string().required('Please enter description'),
  github: yup.string().required('Please enter Github'),
  linkedin: yup.string().required('Please enter LinkedIn')
});

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
    },
  },
  description: {
    width: 600,
    paddingBottom: '2em',
  },
}));

const App = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // async call
          console.log(data);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isSubmitting, errors }) => (
          <Form>
            <MyTextField placeholder='Location' name='userLocation' />
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
              <FormControl className={classes.formControl} error={!!errors.skills && errors.touched}>
                <InputLabel>Skills</InputLabel>
                <Field
                  name='skills'
                  type='select'
                  value={values.skills || ''}
                  as={Select}
                >
                  {initialValues.skills.options.map((option) => (
                    <MenuItem value={option.level} key={uuid()}>
                      {option.text}
                    </MenuItem>
                  ))}
                </Field>
                </FormControl>
              </div>
              <Button disabled={isSubmitting} type='submit'>
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default App;