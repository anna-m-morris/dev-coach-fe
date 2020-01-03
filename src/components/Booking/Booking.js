import React from 'react';
import Calendar from './Calendar';
import Select from './SelectInfo';

// async handleToken(token, title, price) {
//   const product = {
//     name: title, price: price
//   }

//   console.log(token, product)
//   const response = await axios.post(
//     "https://bookr-build-week.herokuapp.com/payment",
//     { token, product }
//   );
//   const { status } = response.data;
//   console.log("Response:", response.data);
//   if (status === "success") {
//     toast("Success! Check email for details", { type: "success" });
//   } else {
//     toast("Something went wrong", { type: "error" });
//   }
// };
// "react-stripe-checkout": "^2.6.3",
//     "react-toastify": "^5.3.2",

const Booking = () => {
  return (
    <div>
      <Calendar />
      <Select />
    </div>
  );
};

export default Booking;
