import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import axios from 'axios';
import Calendar from './Calendar';
import Select from './SelectInfo';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Booking = props => {
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
      toast('Success! Check email for details', { type: 'success' });
    } else {
      toast('Something went wrong', { type: 'error' });
    }
  }

  return (
    <div>
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

export default connect(mapStateToProps)(Booking);
