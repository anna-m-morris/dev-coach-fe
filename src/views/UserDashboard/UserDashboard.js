import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';
import Pagination from 'antd/lib/pagination';
import 'antd/lib/pagination/style/index.css';
import Loader from 'react-loader-spinner';

import {
  getAppointment,
  cancelAppointment,
} from '../../state/actions/appointmentActions';
import { saveRescheduledCoach } from '../../state/actions/bookingActions';

import { saveIdRole } from '../../state/actions/feedbackActions';
import { startInterview } from '../../state/actions/interviewActions';

import EmptyAppointment from '../../components/Cards/EmptyAppointmentCard';
import NewAppointmentCard from '../../components/Cards/newAppointmentCard';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 65px;

  .top-data-card {
    margin-top: -3em;
    height: 8em;
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 1em;
    box-shadow: 0px 0px 4px rgba(82, 68, 110, 0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-bottom: -2em;
    color: #4a4a4a;
    .top-data-section {
    }
  }
  .appointments {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .pagination {
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .ant-pagination-item-active {
      border-color: #4fad65;
    }
    .ant-pagination-item-active a {
      color: #4fad65;
    }
  }
  @media (max-width: 768px) {
    max-width: 650px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    max-width: 350px;
    grid-template-columns: 1fr;
  }
  & > div.appointment-card {
    background: #fff;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0px 0px 4px rgba(82, 68, 110, 0.3);
  }
  .card-thumbnail {
    height: 80px;
    width: 80px;
    border-radius: 5px;
    position: relative;
    img {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .card-description {
    margin: 1.5rem 0 0;
    color: #000;
    h2,
    h3 {
      font-weight: bold;
    }
    h2 {
      font-size: 1.5rem;
      text-transform: uppercase;
    }
    h3 {
      font-size: 1.4rem;
    }
    p {
      font-weight: 600;
      margin-bottom: 0;
    }
  }

  .loaderStyled {
    margin-left: 30rem;
    margin-top: 20vh;
  }
`;

const UserDashboard = props => {
  const {
    coach,
    history,
    appointments,
    getAppointment,
    user,
    cancelAppointment,
    startInterview,
    saveIdRole,
  } = props;

  const [minValue, setMinValue] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(6);

  React.useEffect(() => {
    setTimeout(() => getAppointment(user.id, user.role_id), 1000);
  }, [getAppointment, user.id, user.role_id]);

  const handlePagination = value => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(6);
    } else {
      setMinValue(value * 6 - 6);
      setMaxValue(value * 6);
    }
  };

  const calculateFormattedMean = arr => {
    const sum = arr.reduce((a, c) => ({
      rating: a.rating + c.rating,
    }));
    return (sum.rating / arr.length).toString().slice(0, 4);
  };
  return (
    <StyledContainer>
      <div className='top-data-card'>
        <div className='top-data-section'>
          <h3>Average rating:</h3>
          <h3>
            {props.feedback && props.feedback.length
              ? `${calculateFormattedMean(props.feedback)}`
              : 'N/A'}
          </h3>
        </div>
        <div className='top-data-section'>
          <h3>Number of interviews completed:</h3>
          <h3>{props.feedback ? props.feedback.length : 'N/A'}</h3>
        </div>
        <div className='top-data-section'>
          <h3>Upcoming interviews:</h3>
          <h3>
            {props.appointments ? props.appointments.length : 'N/A'}
          </h3>
        </div>
      </div>
      {appointments ? (
        <StyledContainer>
          {appointments && appointments.length ? (
            <div className='appointments'>
              {appointments
                .slice(minValue, maxValue)
                .map(appointment => (
                  <NewAppointmentCard
                    key={uuid()}
                    appointment={appointment}
                    cancelAppointment={() => {
                      cancelAppointment(appointment.id, history, {
                        id: appointment.id,
                        first_name: appointment.first_name,
                        last_name: appointment.last_name,
                        email: appointment.email,
                      });
                    }}
                    startInterview={() =>
                      startInterview(appointment.user_id, props)
                    }
                    saveIdRole={() =>
                      saveIdRole(appointment.role_id, appointment.id)
                    }
                  />
                ))}
              <div className='pagination'>
                <Pagination
                  defaultCurrent={1}
                  defaultPageSize={6}
                  onChange={handlePagination}
                  total={appointments.length}
                />
              </div>
            </div>
          ) : (
            <EmptyAppointment />
          )}
        </StyledContainer>
      ) : (
        <div className='loaderStyled'>
          <Loader
            type='TailSpin'
            color='#2BAD60'
            height={80}
            width={80}
          />
        </div>
      )}
    </StyledContainer>
  );
};

const mapStateToProps = state => {
  return {
    coach: state.bookingReducer.coach,
    user: state.userReducer.user,
    appointments: state.appointmentsReducer.appointments,
    feedback: state.feedbackReducer.feedback,
  };
};

export default connect(mapStateToProps, {
  getAppointment,
  cancelAppointment,
  startInterview,
  saveIdRole,
  saveRescheduledCoach,
})(UserDashboard);
