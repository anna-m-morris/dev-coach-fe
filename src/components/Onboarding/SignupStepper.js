import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import styled from 'styled-components';

import SignUp from './SignUpForm';
import UserType from './UserType';
import CoachForm from './CoachForm';
import StudentForm from './StudentForm';

const SignupStepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #f2f2f2;
  max-width: 100%;

  .MuiStepIcon-root.MuiStepIcon-active,
  .MuiStepIcon-root.MuiStepIcon-completed {
    color: #4fad65;
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    background: '#f2f2f2',
    maxWidth: '100%',
  },
  stepper: {
    width: '100%',
    padding: '2rem 0 2rem 0',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  nextButton: {
    background: '#408f53',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Basic Info', 'Join as a coach or student', 'Last Step!'];
}

const SignupStepper = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <SignupStepperContainer className={classes.root}>
      <Stepper
        className={classes.stepper}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && <SignUp handleNext={handleNext} />}
      {activeStep === 1 && <UserType handleNext={handleNext} />}
      {activeStep === 2 && props.userReducer.user.role_id === 1 && (
        <StudentForm />
      )}
      {activeStep === 2 && props.userReducer.user.role_id === 2 && (
        <CoachForm />
      )}
    </SignupStepperContainer>
  );
};

export default connect(state => state)(SignupStepper);
