import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { PayPalButton } from 'react-paypal-button-v2';
import StripeCheckout from 'react-stripe-checkout';

import {
  showErrorMessage,
  showSuccessMessage,
  showInfoMessage,
  closeMessage,
} from '../../state/actions/notificationActions';
import {
  handleStripePayment,
  saveDate,
  bookAppointment,
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
    fontSize: '1.5rem',
  },
}));

function getSteps() {
  return ['Select Topic', 'Select Time and Date', 'Select  Payment'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Please select a topic and interview duration';
    case 1:
      return 'Please select a time and date';
    case 2:
      return 'Please select payment method';
    default:
      return 'All Steps completed';
  }
}

const BookingStepper = props => {
  const {
    date,
    coach,
    closeMessage,
    success,
    error,
    info,
    showErrorMessage,
    showSuccessMessage,
    showInfoMessage,
    handleStripePayment,
    saveDate,
    select,
    bookAppointment,
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

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
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
        message='Your payment was successful!'
        open={success}
      />
      <Notification
        onClose={closeMessage}
        variant='error'
        message={`Your payment wasn't successful!`}
        open={error}
      />
      <Notification
        onClose={closeMessage}
        variant='warning'
        message='Please select your options.'
        open={info}
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
          <DatePicker
            date={date}
            saveDate={saveDate}
            select={select}
          />
        ) : (
          <div className='payment-container'>
            {Object.keys(select).length > 1 &&
            date.slice(16, 24) !== '00:00:00' ? (
              <div className='payment-buttons-container'>
                <StripeCheckout
                  className='stripe-checkout'
                  stripeKey='pk_test_Grqfk8uqKNCJYpAQS2t89UB700wHJklrMa' // development token
                  token={token =>
                    handleStripePayment(
                      token,
                      `${coach.first_name} ${coach.last_name}`,
                      coach.hourly_rate,
                      showSuccessMessage,
                      showErrorMessage,
                      bookAppointment,
                      coach,
                      user,
                      date,
                      select.topic_id,
                      select.length_id,
                      props,
                      closeMessage,
                    )
                  }
                  amount={
                    select.length_id === 2
                      ? coach.hourly_rate * 100
                      : coach.hourly_rate * 100 * 0.5
                  }
                  name={'Stripe'}
                  billingAddress
                  shippingAddress
                />
                <PayPalButton
                  amount={
                    select.length_id === 2
                      ? coach.hourly_rate
                      : coach.hourly_rate * 0.5
                  }
                  onSuccess={(details, data) => {
                    bookAppointment(
                      coach,
                      user,
                      date,
                      select.topic_id,
                      select.length_id,
                      props,
                      closeMessage,
                    );
                    showSuccessMessage();
                  }}
                  catchError={err => showErrorMessage()}
                  options={{
                    clientId:
                      'ARVkifyBTBn77NG4ftQSS7eFFxTjcG0ghgVPQCZGyUQufKrNBaTOXSWEKpvDPa3XQi96rSIKEHioCFdP',
                  }}
                />
              </div>
            ) : null}
          </div>
        )}
      </div>

      {activeStep === steps.length ? (
        <div>
          <Typography className={classes.instructions}>
            All steps completed
          </Typography>
          <Button onClick={handleReset}>Reset</Button>
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
          {activeStep === steps.length - 1 ? null : (
            <Button
              className={classes.nextButton}
              variant='contained'
              color='primary'
              onClick={() =>
                (activeStep === 0 &&
                  Object.keys(select).length === 2) ||
                (activeStep === 1 && date)
                  ? handleNext()
                  : showInfoMessage()
              }
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          )}
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    coach: state.bookingReducer.coach,
    select: state.bookingReducer.select,
    date: state.bookingReducer.date,
    success: state.notificationsReducer.success,
    error: state.notificationsReducer.error,
    info: state.notificationsReducer.info,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, {
  handleStripePayment,
  showErrorMessage,
  showSuccessMessage,
  showInfoMessage,
  closeMessage,
  saveDate,
  bookAppointment,
})(BookingStepper);
