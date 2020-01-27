import React from 'react';
import { connect } from 'react-redux';
import RescheduleAppointmentStepper from './RescheduleAppointmentStepper';
import StyledBooking from './BookingStyles';

const Reschedule = props => {
  return (
    <StyledBooking className='booking-container'>
      <RescheduleAppointmentStepper />
    </StyledBooking>
  );
};

export default connect(state => state)(Reschedule);
