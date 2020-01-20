import React from 'react';
import { connect } from 'react-redux';
import { PayPalButton } from 'react-paypal-button-v2';
import StripeCheckout from 'react-stripe-checkout';

import { handleStripePayment } from '../../state/actions/bookingActions';

const Payment = props => {
  const {
    select,
    date,
    coach,
    showSuccessMessage,
    showErrorMessage,
    bookAppointment,
    user,
  } = props;

  return (
    <div>
      {Object.keys(select).length > 1 &&
      date.slice(16, 24) !== '00:00:00' ? (
        <div>
          <StripeCheckout
            stripeKey='pk_test_Grqfk8uqKNCJYpAQS2t89UB700wHJklrMa' // this key is only for testing we
            // will add later our real key to the env file
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
              )
            }
            amount={
              select.length_id === 2
                ? coach.hourly_rate * 100
                : coach.hourly_rate * 100 * 0.5
            }
            name={'name'}
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
              showSuccessMessage();
              bookAppointment(
                coach,
                user,
                date,
                select.topic_id,
                select.length_id,
                props,
              );
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
  );
};

const mapStateToProps = state => {
  return {
    coach: state.bookingReducer.coach,
    select: state.bookingReducer.select,
    date: state.bookingReducer.date,
    success: state.notificationsReducer.success,
    error: state.notificationsReducer.error,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, {
  handleStripePayment,
})(Payment);
