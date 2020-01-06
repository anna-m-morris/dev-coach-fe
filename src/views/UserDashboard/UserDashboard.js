import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import styled from 'styled-components';
import {
  getAppointment,
  cancelAppointment,
} from '../../state/actions/appointmentActions';
import AppointmentCard from '../../components/Cards/AppointmentCard';

const StyledUserDashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const UserDashboard = props => {
  const { user, appointments } = props;
  useEffect(() => {
    props.getAppointment(user.id, user.role_id);
  }, []);

  console.log(appointments);

  return (
    <StyledUserDashboard>
      {appointments
        ? appointments.map(appointment => (
            <AppointmentCard
              key={uuid()}
              first_name={appointment.first_name}
              last_name={appointment.last_name}
              avatar_url={appointment.avatar_url}
              appointment_datetime={appointment.appointment_datetime}
              appointment_topic={appointment.appointment_topic}
              description={appointment.description}
              canceled={appointment.canceled}
              cancel={() => props.cancelAppointment(appointment.id)}
            />
          ))
        : null}
    </StyledUserDashboard>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    appointments: state.appointmentsReducer.appointments,
  };
};

export default connect(mapStateToProps, {
  getAppointment,
  cancelAppointment,
})(UserDashboard);
