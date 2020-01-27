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
            <form>
             
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
