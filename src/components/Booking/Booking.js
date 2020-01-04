import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import {
  showErrorMessage,
  showSuccessMessage,
} from '../../state/actions/notificationActions';
import Calendar from './Calendar';
import Select from './SelectInfo';
import Notification from '../Notifications/Notification';

const Booking = props => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  async function handleToken(token, title, price) {
    const product = {
      name: title,
      price,
    };

    console.log(token, product);
    const response = await axios.post(
      'https://dev-coach-staging.herokuapp.com/payment/stripe',
      { token, product },
    );
    const { status } = response.data;
    console.log('Response:', response.data);
    if (status === 'success') {
      // toast('Success! Check email for details', { type: 'success' });
      props.showSuccessMessage();
      handleClick();
    } else {
      // toast('Something went wrong', { type: 'error' });
      props.showErrorMessage();
    }
  }

  return (
    <div>
      {/* <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      > */}
      <Notification
        onClose={handleClose}
        variant='success'
        message='This is a success message!'
        open={props.success}
      />
      <Notification
        onClose={handleClose}
        variant='error'
        message={`Your payment wasn't successful`}
        open={props.error}
      />
      {/* </Snackbar> */}
      <Calendar />
      <h1>{props.date.slice(0, 21)}</h1>
      <Select />
      <StripeCheckout
        stripeKey='pk_test_Grqfk8uqKNCJYpAQS2t89UB700wHJklrMa' // this key is only for testing we
        // will add later our real key to the env file
        token={token =>
          handleToken(
            token,
            'title', // title should be appointment topic
            props.price,
          )
        }
        amount={props.price * 100}
        name={'name'}
        billingAddress
        shippingAddress
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    price: 20, // we need to get the price from the coach here
    select: state.bookingReducer.select,
    date: state.bookingReducer.date,
  };
};

export default connect(mapStateToProps, {
  showErrorMessage,
  showSuccessMessage,
})(Booking);
