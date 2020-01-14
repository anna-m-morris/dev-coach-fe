import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
} from '../../state/actions/notificationActions';
import { handleStripePayment } from '../../state/actions/bookingActions';
import Calendar from './Calendar';
import Select from './SelectInfo';
import Notification from '../Notifications/Notification';
import Paypal from './Paypal';

const Booking = props => {
  return (
    <div>
      <Notification
        onClose={props.closeMessage}
        variant='success'
        message='Your payment was successful!'
        open={props.success}
      />
      <Notification
        onClose={props.closeMessage}
        variant='error'
        message={`Your payment wasn't successful!`}
        open={props.error}
      />
      <Calendar />
      <h1>{props.date ? props.date.slice(0, 21) : null}</h1>
      <Select />
      <StripeCheckout
        stripeKey='pk_test_Grqfk8uqKNCJYpAQS2t89UB700wHJklrMa' // this key is only for testing we
        // will add later our real key to the env file
        token={token =>
          props.handleStripePayment(
            token,
            'title', // title should be appointment topic
            props.coach_price,
            props.showSuccessMessage,
            props.showErrorMessage,
          )
        }
        amount={props.coach_price * 100}
        name={'name'}
        billingAddress
        shippingAddress
      />
      <Paypal
        product={{
          price: props.coach_price,
          name: 'Appointment topic',
          description:
            'Appointment_topic, coach_name, coach_price, appointment_length',
          // image: chair,
        }}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    coach_price: state.bookingReducer.coach_price,
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
})(Booking);
