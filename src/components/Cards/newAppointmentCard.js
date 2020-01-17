import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import CoachModal from '../Modals/CoachModal';
import Rating from '../DataVisualization/Rating';

const StyledCoachCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 17rem;
  height: 24rem;
  padding: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-radius: 0.8rem;
  margin: 0.5rem;
  color: #595959;
  font-weight: 300;
  text-align: left;
  background: white;
  box-shadow: 0 6px 10px #d3d3d3;

  h3 {
    text-align: center;
    font-weight: bold;
    font-size: 0.96rem;
    color: #3c4043;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .header-text {
      width: 100%;
    }

    .header-photo {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .picture {
        width: 5.5rem;
        height: 5.5rem;
      }
    }
  }

  .bullet-points {
  }

  .description {
  }

  .reviews {
    display: flex;
    justify-content: space-between;
  }

  .footer {
    display: flex;
    width: 100%;
    justify-content: space-around;

    a {
      text-decoration: none;
    }

    .button {
      background-color: #4fad65;
    }
  }
`;

export const NewAppointmentCard = props => {
  const { coach, saveCoach, getFeedback, feedback } = props;

  return (
    <StyledCoachCard>
      <div className='header'>
        <div className='header-text'>
          <h3>{`${coach.first_name} ${coach.last_name}`}</h3>
        </div>
        <div className='header-photo'>
          <Avatar
            className='picture'
            alt='Coach'
            src={coach.avatar_url}
          />
        </div>
      </div>

      <div className='bullet-points'>
        <p>
          <i className='fas fa-map-marker-alt' />
          {coach.location}
        </p>
        <p>
          <i className='fas fa-street-view' />{' '}
          {coach.experience_level === 3
            ? 'Expert in interviewing'
            : coach.experience_level === 2
            ? 'Advanced in interviewing'
            : 'Beginner in interviewing'}
        </p>
      </div>

      <div className='description'>
        <p>{`${coach.description &&
          coach.description.slice(0, 50)}...`}</p>{' '}
      </div>

      <div className='footer'>
        <Button
          className='cancel-button'
          variant='contained'
          color='secondary'
          startIcon={<DeleteIcon />}
        >
          Cancel
        </Button>
        <Link to='/appointment' onClick={() => saveCoach(coach)}>
          <Button
            className='button'
            variant='contained'
            color='primary'
            endIcon={<Icon>send</Icon>}
          >
            Message
          </Button>
        </Link>
      </div>
    </StyledCoachCard>
  );
};

export default NewAppointmentCard;
