import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TelegramIcon from '@material-ui/icons/Telegram';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import CoachModal from '../Modals/CoachModal';
import Rating from '../DataVisualization/Rating';
import { mapExperience } from './AppointmentCard';

const StyledCoachCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 17rem;
  height: 24rem;
  padding: 2.4rem;
  border-radius: 0.8rem;
  margin: 0.5rem;
  color: #595959;
  font-weight: 300;
  text-align: left;
  background: white;
  box-shadow: 0 6px 10px #d3d3d3;

  h3 {
    font-weight: 400;
    font-size: 1rem;
    color: #3c4043;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-height: 5.5rem;
    .header-text {
      width: 100%;

      h3 {
        font-weight: bold;
      }
    }

    .header-photo {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .picture {
        width: 5rem;
        height: 5rem;
      }
    }
  }

  .bullet-points {
    * {
    }

    .location-bullet {
      .location-icon {
        margin-left: 0.1em;
        padding-right: 0.1em;
      }
    }

    .experience-bullet {
      .experience-icon {
      }
    }
  }

  .description {
  }

  .reviews {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 0;

    p {
      margin-left: 0.7rem;
    }
  }

  .footer {
    display: flex;
    width: 100%;
    justify-content: space-between;

    a {
      text-decoration: none;
      width: 47%;
    }



    .button {
      width: 100%;
      background-color: #4fad65;

      &:hover {
        background: #1e3f1f;
      }
    }
  }
`;

export const CoachCard = props => {
  const { coach, saveCoach, getFeedback, feedback, savePeer } = props;

  return (
    <StyledCoachCard>
      <div className='header'>
        <div className='header-text'>
          <h3>{`${coach.first_name} ${coach.last_name}`}</h3>
          <p>${coach.hourly_rate} per hour</p>
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
        <p className='location-bullet'>
          <i className='fas fa-map-marker-alt location-icon' />
          {'   '}
          {coach.location}
        </p>
        <p className='experience-bullet'>
          <i className='fas fa-street-view experience-icon' />
          {'  '}
          {mapExperience(coach.experience_level)}
        </p>
      </div>
      <div className='description'>
        <p>{`${coach.description &&
          coach.description.slice(0, 70)}...`}</p>{' '}
      </div>

      <div className='reviews'>
        <Rating rating={coach.rating} size='small' />
        <CoachModal
          coach={coach}
          getFeedback={getFeedback}
          feedback={feedback}
        />
      </div>

      <div className='footer'>
        <Link to='/start_chat' onClick={savePeer}>
          <Button
            variant='contained'
            color='primary'
            className='send-button'
            endIcon={<TelegramIcon />}
          >
            Chat
          </Button>
        </Link>
        <Link to='/appointment' onClick={saveCoach}>
          <Button
            className='button'
            variant='contained'
            color='primary'
            endIcon={<ShoppingCartIcon />}
          >
            Book
          </Button>
        </Link>
      </div>
    </StyledCoachCard>
  );
};

export default CoachCard;
