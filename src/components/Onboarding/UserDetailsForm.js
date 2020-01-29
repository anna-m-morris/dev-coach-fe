
const UserDetailsForm = () => {
    return
}
<Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(formValues, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          props.chooseUserRole(props, formValues)
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