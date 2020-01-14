import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
} from '../../state/actions/notificationActions';
import {
  handleStripePayment,
  handlePaypalPayment,
  saveDate,
} from '../../state/actions/bookingActions';
import DatePicker from './DatePicker';
import Select from '../Inputs/SelectInfo';
import Notification from '../Notifications/Notification';
import Paypal from './Paypal';

const Booking = props => {
  const {
    date,
    coach,
    closeMessage,
    success,
    error,
    showErrorMessage,
    showSuccessMessage,
    handleStripePayment,
    handlePaypalPayment,
    saveDate,
  } = props;

  return (
    <div>
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
      <DatePicker date={date} saveDate={saveDate} />
      <Select />
      <StripeCheckout
        stripeKey='pk_test_Grqfk8uqKNCJYpAQS2t89UB700wHJklrMa' // this key is only for testing we
        // will add later our real key to the env file
        token={token =>
          handleStripePayment(
            token,
            'title', // title should be appointment topic
            coach.hourly_rate,
            showSuccessMessage,
            showErrorMessage,
          )
        }
        amount={coach.hourly_rate * 100}
        name={'name'}
        billingAddress
        shippingAddress
      />
      <Paypal
        price={coach.hourly_rate}
        name={'Appointment topic'}
        description={
          'Appointment_topic, coach_name, coach_price, appointment_length'
        }
        handlePaypalPayment={handlePaypalPayment}
        success={showSuccessMessage}
        error={showErrorMessage}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    coach: state.bookingReducer.coach,
    select: state.bookingReducer.select,
    date: state.bookingReducer.date,
    success: state.notificationsReducer.success,
    error: state.notificationsReducer.error,
  };
};

export default connect(mapStateToProps, {
  handleStripePayment,
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
  handlePaypalPayment,
  saveDate,
})(Booking);
