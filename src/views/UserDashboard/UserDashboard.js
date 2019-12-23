import React from 'react';
import { connect } from 'react-redux';
import {
  getAppointment,
  cancelAppointment,
} from '../../state/actions/appointmentActions';
import AppointmentCard from '../../components/Cards/AppointmentCard';

const UserDashboard = props => {
  React.useEffect(() => {
    props.getAppointment(props.user.id, props.user.role_id);
  }, []);

  return (
    <div>
      {props.appointments
        ? props.appointments.map(appointment => (
            <AppointmentCard
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
    </div>
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
