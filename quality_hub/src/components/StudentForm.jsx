import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function StudentForm({ touched, errors, isSubmitting }) {
  return (
    <Form>
      <div>
        {' '}
        {errors.studentLocation && touched.studentLocation && (
          <p>{errors.studentLocation}</p>
        )}
        <Field
          type='text'
          name='studentLocation'
          placeholder='Location'
        />
      </div>
      <div>
        {errors.experience && touched.experience && (
          <p>{errors.experience}</p>
        )}
        <Field
          type='text'
          name='experience'
          placeholder='Select Level Of Experience'
        />
      </div>
      <div>
        {errors.confidence && touched.confidence && (
          <p>{errors.confidence}</p>
        )}
        <Field
          type='text'
          name='confidence'
          placeholder='Select Confidence Level'
        />
      </div>
      <button type='submit' disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
}

const FormikStudentForm = withFormik({
  mapPropsToValues({ studentLocation, experience, confidence }) {
    return {
      studentLocation: studentLocation || '',
      experience: experience || '',
      confidence: confidence || '',
    };
  },
  validationSchema: Yup.object().shape({
    studentLocation: Yup.string().required('Please enter a location'),
    experience: Yup.string().required(
      'Please enter Your experience level',
    ),
    confidence: Yup.string().required(
      'Please enter your confidence level',
    ),
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    resetForm();
    setSubmitting(false);
  },
})(StudentForm);

export default FormikStudentForm;
