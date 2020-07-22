import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { submitResource } from '../../state/actions/resourceHubActions';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  UFroot: {
    display: 'block',
    width: '60vw',
  },
  button: {
    padding: 10,
  },
  error: {
    color: 'red',
  },
});

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  link: yup
    .string()
    .url()
    .required(),
  thumbnail: yup.string().url(),
});

function ResourceUploadForm({ submitResource }) {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const onSubmit = async data => {
    await submitResource(data);
    window.location.reload();
  };

  return (
    <div className={classes.UFroot}>
      <form
        className={classes.form}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          type='text'
          fullWidth
          placeholder='title'
          name='title'
          inputRef={register({
            required: true,
            min: 3,
            maxLength: 160,
          })}
        />
        <p className={classes.error}>{errors.title?.message}</p>
        <TextField
          type='link'
          fullWidth
          placeholder='Link'
          name='link'
          inputRef={register}
        />
        <p className={classes.error}>{errors.link?.message}</p>
        <TextField
          type='text'
          fullWidth
          placeholder='Description'
          name='description'
          inputRef={register}
        />
        <p className={classes.error}>{errors.description?.message}</p>
        <TextField
          type='text'
          fullWidth
          placeholder='Thumbnail (optional)'
          name='thumbnail'
          inputRef={register}
        />
        <p className={classes.error}>{errors.thumbnail?.message}</p>
        <Button
          className={classes.button}
          type='submit'
          color='primary'
          variant='contained'
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default connect(null, {
  submitResource,
})(ResourceUploadForm);
