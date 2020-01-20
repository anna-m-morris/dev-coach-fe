// import React from 'react';
// import { PayPalButton } from 'react-paypal-button-v2';
// import StripeCheckout from 'react-stripe-checkout';
// import { connect } from 'react-redux';
// import styled from 'styled-components';
// import {
//   showErrorMessage,
//   showSuccessMessage,
//   closeMessage,
// } from '../../state/actions/notificationActions';
// import {
//   handleStripePayment,
//   saveDate,
//   bookAppointment,
// } from '../../state/actions/bookingActions';
// import DatePicker from './DatePicker';
// import Select from '../Inputs/SelectInfo';
// import Notification from '../Notifications/Notification';

// const StyledBooking = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
// `;

// const Booking = props => {
//   const {
//     date,
//     coach,
//     closeMessage,
//     success,
//     error,
//     showErrorMessage,
//     showSuccessMessage,
//     handleStripePayment,
//     saveDate,
//     select,
//     bookAppointment,
//     user,
//   } = props;

//   return (
//     <StyledBooking>
//       <Notification
//         onClose={closeMessage}
//         variant='success'
//         message='Your payment was successful!'
//         open={success}
//       />
//       <Notification
//         onClose={closeMessage}
//         variant='error'
//         message={`Your payment wasn't successful!`}
//         open={error}
//       />
//       <DatePicker date={date} saveDate={saveDate} />
//       <Select />
//       {Object.keys(select).length > 1 &&
//       date.slice(16, 24) !== '00:00:00' ? (
//         <div>
//           <StripeCheckout
//             stripeKey='pk_test_Grqfk8uqKNCJYpAQS2t89UB700wHJklrMa' // this key is only for testing we
//             // will add later our real key to the env file
//             token={token =>
//               handleStripePayment(
//                 token,
//                 `${coach.first_name} ${coach.last_name}`,
//                 coach.hourly_rate,
//                 showSuccessMessage,
//                 showErrorMessage,
//                 bookAppointment,
//                 coach,
//                 user,
//                 date,
//                 select.topic_id,
//                 select.length_id,
//                 props,
//               )
//             }
//             amount={
//               select.length_id === 2
//                 ? coach.hourly_rate * 100
//                 : coach.hourly_rate * 100 * 0.5
//             }
//             name={'name'}
//             billingAddress
//             shippingAddress
//           />
//           <PayPalButton
//             amount={
//               select.length_id === 2
//                 ? coach.hourly_rate
//                 : coach.hourly_rate * 0.5
//             }
//             onSuccess={(details, data) => {
//               showSuccessMessage();
//               bookAppointment(
//                 coach,
//                 user,
//                 date,
//                 select.topic_id,
//                 select.length_id,
//                 props,
//               );
//             }}
//             catchError={err => showErrorMessage()}
//             options={{
//               clientId:
//                 'ARVkifyBTBn77NG4ftQSS7eFFxTjcG0ghgVPQCZGyUQufKrNBaTOXSWEKpvDPa3XQi96rSIKEHioCFdP',
//             }}
//           />
//         </div>
//       ) : null}
//     </StyledBooking>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     coach: state.bookingReducer.coach,
//     select: state.bookingReducer.select,
//     date: state.bookingReducer.date,
//     success: state.notificationsReducer.success,
//     error: state.notificationsReducer.error,
//     user: state.userReducer.user,
//   };
// };

// export default connect(mapStateToProps, {
//   handleStripePayment,
//   showErrorMessage,
//   showSuccessMessage,
//   closeMessage,
//   saveDate,
//   bookAppointment,
// })(Booking);

import React from 'react';
import styled from 'styled-components';
import BookingStepper from './BookingStepper';

const StyledBooking = styled.div`
  width: 100%;
`;

const Booking = ({ history }) => {
  return (
    <StyledBooking className='booking-container'>
      <BookingStepper history={history} />
    </StyledBooking>
  );
};

export default Booking;
