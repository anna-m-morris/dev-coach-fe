import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
} from '../../state/actions/notificationActions';
import {
  saveDate,
  rescheduleAppointment,
} from '../../state/actions/bookingActions';

import Notification from '../Notifications/Notification';

import Select from '../Inputs/SelectInfo';
import DatePicker from './DatePicker';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  nextButton: {
    background: '#4fad65',

    '&:hover': {
      background: '#4fad65',
    },
  },
  instruction: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
  },
}));

function getSteps() {
  return ['Select Topic', 'Select Time and Date'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Please select a topic and interview duration';
    case 1:
      return 'Please select a time and date';
    default:
      return "you're all caught up";
  }
}

const RescheduleAppointmentStepper = props => {
  const {
    date,
    rescheduler,
    closeMessage,
    success,
    error,
    showErrorMessage,
    showSuccessMessage,
    saveDate,
    select,
    rescheduleAppointment,
    user,
  } = props;

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <>
      <h3>
        Kindly reschedule cancelled appointment as bookings are
        non-refundable
      </h3>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Notification
        onClose={closeMessage}
        variant='success'
        message='You have successfully rescheduled!'
        open={success}
      />
      <Notification
        onClose={closeMessage}
        variant='error'
        message={`Reschedule wasn't successful!`}
        open={error}
      />

      <div className='instructions'>
        <Typography className={classes.instruction}>
          {getStepContent(activeStep)}
        </Typography>
      </div>

      <div className='steps-container'>
        {activeStep === 0 ? (
          <Select />
        ) : activeStep === 1 ? (
          <DatePicker date={date} saveDate={saveDate} />
        ) : (
          <div className='payment-container'>
            {Object.keys(select).length > 1 &&
              date.slice(16, 24) !== '00:00:00'}
          </div>
        )}
      </div>

      {activeStep === steps.length ? (
        <div>
          <Typography className={classes.instructions}></Typography>
        </div>
      ) : (
        <div className='buttons-container'>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
          >
            Back
          </Button>
          <Button
            className={classes.nextButton}
            variant='contained'
            color='primary'
            onClick={() =>
              activeStep === steps.length - 1
                ? rescheduleAppointment(
                    rescheduler,
                    user,
                    date,
                    select.topic_id,
                    select.length_id,
                    props,
                    showSuccessMessage,
                    showErrorMessage,
                    closeMessage,
                  )
                : handleNext()
            }
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    rescheduler: state.appointmentsReducer.rescheduler,
    select: state.bookingReducer.select,
    date: state.bookingReducer.date,
    success: state.notificationsReducer.success,
    error: state.notificationsReducer.error,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
  saveDate,
  rescheduleAppointment,
})(RescheduleAppointmentStepper);
