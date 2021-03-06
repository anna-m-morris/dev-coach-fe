import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
import {
  saveIdRole,
  getFeedback,
} from '../../state/actions/feedbackActions';
import { startInterview } from '../../state/actions/interviewActions';
import { savePeer } from '../../state/actions/chatActions';
import EmptyAppointment from '../../components/Cards/EmptyAppointmentCard';
import devices from '../../utils/devices';
import AppointmentCard from '../../components/Cards/AppointmentCard';

const DashboardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  .loaderStyled {
    margin-top: 38vh;
  }

  .dashboard-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .appointment-title-container {
    display: flex;
  }

  .appointment-title {
    color: #595959;
    font-size: 2rem;
    font-weight: 500;

    @media ${devices.mobile} {
      margin-top: 40px;
      font-size: 1.6rem;
      text-align: center;
    }
  }
  .top-data-card {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 4px rgba(82, 68, 110, 0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-top: 1em;
    color: #4a4a4a;
    font-size: 1rem;

    @media ${devices.tablet} {
      width: 80%;
      flex-direction: column;
    }

    .top-data-section {
      text-align: center;
      outline: 1px solid rgb(234, 234, 234);
      width: 100%;
      height: 7em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .data {
        color: #4fad65;
        font-size: 1.4rem;
        font-weight: bolder;
        margin: 0.1rem;
      }
      p {
        font-size: 1.3rem;
        margin: 0.8rem 0;
      }
    }
  }

  .appointments {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
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

  .pagination {
    margin: 2rem 0 1rem 0;
    padding: 0;
    .ant-pagination-item-active {
      border-color: #4fad65;
    }
    .ant-pagination-item-active a {
      color: #4fad65;
    }
  }
`;

export const UserDashboard = props => {
  const {
    loadingAppointment,
    history,
    appointments,
    getAppointment,
    user,
    cancelAppointment,
    startInterview,
    saveIdRole,
    getFeedback,
    savePeer,
  } = props;

  const [minValue, setMinValue] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(6);

  React.useEffect(() => {
    getAppointment(user.id, user.role_id);
    getFeedback(user.id, user.role_id);
  }, [getAppointment, getFeedback, user.id, user.role_id]);

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
    <DashboardContainer className='dashboard-container'>
      {loadingAppointment ? (
        <div className='loaderStyled'>
          <Loader
            type='TailSpin'
            color='#2BAD60'
            height={80}
            width={80}
          />
        </div>
      ) : (
        <div className='dashboard-content'>
          <div className='top-data-card'>
            <div className='top-data-section'>
              <p className='data'>
                {props.feedback && props.feedback.length
                  ? `${calculateFormattedMean(props.feedback)}`
                  : 0}
              </p>
              <p>Average rating</p>
            </div>
            <div className='top-data-section'>
              <p className='data'>
                {props.feedback ? props.feedback.length : 0}
              </p>
              <p>Interviews completed</p>
            </div>
            <div className='top-data-section'>
              <p className='data'>
                {props.appointments ? props.appointments.length : 0}
              </p>
              <p>Upcoming interviews</p>
            </div>
          </div>
          <div className='appointment-title-container'>
            <h2 className='appointment-title'>
              Scheduled Interviews
            </h2>
          </div>
          {appointments && appointments.length ? (
            <div className='appointments'>
              {appointments
                .slice(minValue, maxValue)
                .map(appointment => (
                  <AppointmentCard
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
                    startInterview={() => {
                      startInterview(appointment.email, props);
                      saveIdRole(appointment.role_id, appointment.id);
                    }}
                    savePeer={() => {
                      savePeer(
                        {
                          email: appointment.email,
                          name: `${appointment.first_name} ${appointment.last_name}`,
                          avatar_url: appointment.avatar_url,
                        },
                        props,
                      );
                    }}
                  />
                ))}
            </div>
          ) : (
            <EmptyAppointment role_id={user.role_id} />
          )}
        </div>
      )}
      {appointments && appointments.length > 0 && (
        <div className='pagination'>
          <Pagination
            defaultCurrent={1}
            defaultPageSize={6}
            onChange={handlePagination}
            total={appointments.length}
          />
        </div>
      )}
    </DashboardContainer>
  );
};

const mapStateToProps = state => {
  return {
    coach: state.bookingReducer.coach,
    user: state.userReducer.user,
    appointments: state.appointmentsReducer.appointments,
    loadingAppointment: state.appointmentsReducer.isLoading,
    feedback: state.feedbackReducer.feedback,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    getAppointment,
    cancelAppointment,
    startInterview,
    saveIdRole,
    saveRescheduledCoach,
    getFeedback,
    savePeer,
  })(UserDashboard),
);
