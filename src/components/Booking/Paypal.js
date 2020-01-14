import React, { useState, useRef, useEffect } from 'react';

const Paypal = props => {
  const {
    description,
    price,
    handlePaypalPayment,
    success,
    error,
  } = props;
  const paypalRef = useRef();

  useEffect(() => {
    handlePaypalPayment(
      description,
      price,
      paypalRef,
      success,
      error,
    );
  }, [description, price]);

  return (
    <div>
      <div ref={paypalRef} />
    </div>
  );
};

export default Paypal;
