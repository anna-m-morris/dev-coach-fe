import React from 'react';
import { connect } from 'react-redux';
import RescheduleAppointmentStepper from './RescheduleAppointmentStepper';
import StyledBooking from './BookingStyles';

const Reschedule = ({ history }) => {
  return (
    <StyledBooking className='booking-container'>
      <RescheduleAppointmentStepper history={history} />
    </StyledBooking>
  );
};

export default connect(state => state)(Reschedule);
