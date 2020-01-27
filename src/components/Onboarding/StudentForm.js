import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
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

const StudentForm = props => {

  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    userLocation: {
      value: '',
      hasError: false,
    },
    experience: {
      value: '',
      hasError: false,
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
          text: "I've completed a coding bootcamp or similar program",
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
          text: "I'm not confident, but not unconfident either",
        },
        {
          level: 5,
          text: "I'm confident in my interview ability",
        },
      ],
    },
    github: {
      hasError: false,
      value: '',
    },
    linkedin: {
      hasError: false,
      value: '',
    }
  });

  const submitDetails = formValues => {
    if (Object.keys(formValues).map(el => formValues[el].hasError).some(el => el === false)) {
      props.chooseUserRole(props, {
        userLocation: formValues.userLocation.value,
        experience: formValues.experience.value,
        confidence: formValues.confidence.value,
        github: formValues.github.value,
        linkedin: formValues.linkedin.value,
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValues(
      Object.fromEntries(Object.entries(formValues).map(([ key, val ]) => { 
        if (!val["value"]) {
          return [ key, { ...val, hasError: true }];
        }  
        return [key, { ...val, hasError: false }];
      })
       ))
    // if (Object.keys(formValues).map(el => formValues[el].hasError).some(el => el === false)) {
    //   props.chooseUserRole(props, {
    //     userLocation: formValues.userLocation.value,
    //     experience: formValues.experience.value,
    //     confidence: formValues.confidence.value,
    //     github: formValues.github.value,
    //     linkedin: formValues.linkedin.value,
    //   })
    // }
  }

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
            <form 
              onSubmit={handleSubmit}>
            <FormControl error={formValues.userLocation.hasError} required className={classes.formControl}>
              <Autocomplete
                name='location'
                options={countries}
                getOptionLabel={option => option.name}
                onChange={event =>
                  setFormValues({
                    ...formValues,
                    userLocation: {
                      ...formValues.userLocation,
                      value: event.target.innerText,
                    }
                  })
                }
                renderInput={params => (
                  <TextField
                    required
                    name='location'
                    {...params}
                    label='Select your location'
                    fullWidth
                  />
                )}
              />
              {formValues.userLocation.hasError && <FormHelperText>This is required!</FormHelperText>}
            </FormControl>
            <FormControl error={formValues.experience.hasError} required className={classes.formControl}>
              <InputLabel>Experience</InputLabel>
              <Select
                placeholder='experience'
                name='experience'
                value={formValues.experience.value}
                onChange={event => 
                  setFormValues({
                    ...formValues,
                    experience: {
                      ...formValues.experience,
                      value: event.target.value,
                    },
                  })
                }
              >
                {formValues.experience.options.map(el => (
                  <MenuItem value={el.level} key={uuid()}>
                    {el.text}
                  </MenuItem>
                ))}
              </Select>
              {formValues.experience.hasError && <FormHelperText>This is required!</FormHelperText>}
            </FormControl>
            <FormControl error={formValues.confidence.hasError} required className={classes.formControl}>
              <InputLabel>Confidence</InputLabel>
              <Select
                value={formValues.confidence.value}
                onChange={event =>
                  setFormValues({
                    ...formValues,
                    confidence: {
                      ...formValues.confidence,
                      value: event.target.value,
                    },
                  })
                }
              >
                {formValues.confidence.options.map(el => (
                  <MenuItem value={el.level} key={uuid()}>
                    {el.text}
                  </MenuItem>
                ))}
              </Select>
              {formValues.confidence.hasError && <FormHelperText>This is required!</FormHelperText>}
            </FormControl>
            <FormControl required error={formValues.github.hasError}>
              <TextField
                value={formValues.github.value}
                onChange={event =>
                  setFormValues({
                    ...formValues,
                    github: {
                      ...formValues.github,
                      value: event.target.value,
                    }
                  })
                }
                placeholder='Link to your GitHub profile (optional)'
                className={classes.textField}
              />
              {formValues.github.hasError && <FormHelperText>This is required!</FormHelperText>}
            </FormControl>
            <FormControl required error={formValues.linkedin.hasError}>
              <TextField
                value={formValues.linkedin.value}
                onChange={event =>
                  setFormValues({
                    ...formValues,
                    linkedin: {
                      ...formValues.linkedin,
                      value: event.target.value
                    }
                  })
                }
                placeholder='Link to your LinkedIn profile (optional)'
                className={classes.textField}
              />
              {formValues.linkedin.hasError && <FormHelperText>This is required!</FormHelperText>}
            </FormControl>
            <FormButton
              className='submit-button'
              theme={buttonTheme}
                // setFormValues(
                //   Object.fromEntries(Object.entries(formValues).map(([ key, val ]) => {
                //     if (!val["value"]) {
                //       return [ key, { ...val, hasError: true }];
                //     }  
                //     return [key, val];
                //   })
                //   ))
                // console.log(Object.keys(formValues).map(el => formValues[el].hasError))
                // if (Object.keys(formValues).map(el => formValues[el].hasError).some(el => el === false)) {
                //   props.chooseUserRole(props, {
                //     userLocation: formValues.userLocation.value,
                //     experience: formValues.experience.value,
                //     confidence: formValues.confidence.value,
                //     github: formValues.github.value,
                //     linkedin: formValues.linkedin.value,
                //   })
                // }
              // }}
            >
              Submit
            </FormButton>
            </form>
          </Box>
        </div>
      </div>
    </StudentCardContainer>
  );
};

export default connect(state => state, { chooseUserRole })(
  StudentForm,
);
