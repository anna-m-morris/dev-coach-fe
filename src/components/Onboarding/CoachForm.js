import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid';
import styled from 'styled-components';
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
import { Autocomplete } from '@material-ui/lab/';
import { countries } from '../../utils/countries';
import { buttonTheme, Logo } from '../Landing/Landing-styles';
import { FormButton, InfoParagraph } from './StudentForm';
import { chooseUserRole } from '../../state/actions/authenticationActions';

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
    },
  },
  description: {
    width: 600,
    paddingBottom: '2em',
  },
}));
const CoachForm = props => {
  const classes = useStyles();
  const [hasError, setError] = useState(false);
  const [formValues, setFormValues] = useState({
    userLocation: {
      value: '',
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
          text: "I've worked for 1 - 2 years as a junior developer",
        },
        {
          level: 3,
          text: "I've worked for 2+ years as a mid-level developer",
        },
        {
          level: 4,
          text:
            "I've worked for 4+ years and am a senior level developer",
        },
        {
          level: 5,
          text:
            "I've worked for 8+ years and have held senior positions as a tech lead or engineering manager",
        },
        {
          level: 5,
          text:
            "I've worked as a developer for over 10 years including at a highly senior level",
        },
      ],
    },
    skills: {
      value: '',
      options: [
        {
          level: 1,
          text: "I'm a junior developer",
        },
        {
          level: 2,
          text: "I'm a mid-level developer",
        },
        {
          level: 3,
          text: "I'm a senior developer",
        },
        {
          level: 4,
          text: "I'm a tech lead or experienced senior developer",
        },
      ],
    },
    description: {
      value: '',
    },
    github: {
      value: '',
    },
    linkedin: {
      value: '',
    }
  });
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
          <Box
            className={classes.box}
            display='flex'
            flexDirection='column'
            justifyContent='space-evenly'
            alignItems='center'
          >
            <FormControl error={hasError} required className={classes.formControl}>
              <Autocomplete
                name='location'
                options={countries}
                getOptionLabel={option => option.name}
                value={formValues.userLocation.value}
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
              {hasError && <FormHelperText>This is required!</FormHelperText>}
            </FormControl>
            <FormControl error={hasError} required className={classes.formControl}>
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
              
              {hasError && <FormHelperText>This is required!</FormHelperText>}
            </FormControl>
            <FormControl error={hasError} required className={classes.formControl}>
              <InputLabel>Skill level</InputLabel>
              <Select
                placeholder='Skill level'
                name='skills'
                value={formValues.skills.value}
                onChange={event =>
                  setFormValues({
                    ...formValues,
                    skills: {
                      ...formValues.skills,
                      value: event.target.value,
                    },
                  })
                }
              >
                {formValues.skills.options.map(el => (
                  <MenuItem key={uuid()} value={el.level}>
                    {el.text}
                  </MenuItem>
                ))}
              </Select>
              {hasError && <FormHelperText>This is required!</FormHelperText>}
            </FormControl>
            <FormControl error={hasError} className={classes.description}>
              <TextField
                fullWidth
                multiline
                label='Description'
                value={formValues.description.value}
                onChange={event =>
                  setFormValues({
                    ...formValues,
                    description: {
                      ...formValues.description,
                      value: event.target.value,
                    }
                  })
                }
              ></TextField>
              {hasError && <FormHelperText>This is required!</FormHelperText>}
              </FormControl>
              <FormControl error={hasError}>
                <TextField
                  value={formValues.github.value}
                  onChange={event =>
                    setFormValues({
                      ...formValues,
                      github: {
                        ...formValues.github,
                        value: event.target.value
                      }
                    })
                  }
                  placeholder='Link to your GitHub profile (optional)'
                  className={classes.textField}
                />
                {hasError && <FormHelperText>This is required!</FormHelperText>}
              </FormControl>
              <FormControl error={hasError}>
                <TextField
                  value={formValues.linkedin.value}
                  onChange={event =>
                    setFormValues({
                      ...formValues,
                      linkedin: {
                        ...formValues.linkedin,
                        value: event.target.value,
                      }
                    })
                  }
                  placeholder='Link to your LinkedIn profile (optional)'
                  className={classes.textField}
                />
                {hasError && <FormHelperText>This is required!</FormHelperText>}
              </FormControl>
            <FormButton
              className='submit-button'
              theme={buttonTheme}
              onClick={() => {
                console.log(formValues)
                setError(false)
                if (Object.keys(formValues).map(el => formValues[el].value).some(el => Boolean(el) === false)) {
                  setError(true);
                } else {
                  props.chooseUserRole(props, {
                    userLocation: formValues.userLocation.value,
                    experience: formValues.experience.value,
                    skills: formValues.skills.value,
                    description: formValues.description.value,
                    github: formValues.github.value,
                    linkedin: formValues.linkedin.value,
                  })
                }
              }
            }
            >
              Submit
            </FormButton>
          </Box>
        </div>
      </div>
    </CoachCardContainer>
  );
};
export default connect(state => state, { chooseUserRole })(CoachForm);
