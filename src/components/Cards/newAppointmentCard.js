import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import TodayIcon from '@material-ui/icons/Today';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dom from '../../img/dom.jpeg';

const StyledCoachCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 17rem;
  height: 22rem;
  padding: 1.5rem;
  border-radius: 0.8rem;
  margin: 0.5rem;
  color: #595959;
  font-weight: 300;
  background: white;
  box-shadow: 0 6px 10px #d3d3d3;

  .header {
    display: flex;
    justify-content: space-around;
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

  h3 {
    text-align: center;
    font-weight: bold;
    font-size: 0.96rem;
    color: #3c4043;
    margin: 0;
  }

  h4 {
    text-align: center;
    font-weight: lighter;
    margin: 0;
  }

  .bullet-points {
  }

  .bullet {
    display: flex;
    align-items: center;
    padding: 0.2em;
  }

  .icon {
    margin-right: 0.3em;
  }

  .description {
    margin-bottom: 0.6em;
  }

  .reviews {
    display: flex;
    justify-content: space-between;
  }

  .footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    a {
      text-decoration: none;
    }

    .button {
      background-color: #4fad65;
    }

    .cancel-button {
    }
  }
`;

const mapExperience = experience => {
  switch (experience) {
    default:
      return '';
    case 1:
      return 'Junior developer';
    case 2:
      return 'Mid-level developer';
    case 3:
      return 'Senior developer';
    case 4:
      return 'Highly experienced developer';
  }
};

export const NewAppointmentCard = props => {
  const { coach, saveCoach } = props;

  const [openCancelModal, setOpenCancelModal] = React.useState(false);

  const Transition = React.forwardRef(function Transition(
    props,
    ref,
  ) {
    return <Slide direction='up' ref={ref} {...props} />;
  });

  const handleCancelModalOpen = () => {
    setOpenCancelModal(true);
  };

  const handleCancelModalClose = () => {
    setOpenCancelModal(false);
  };

  const time = coach.appointment_datetime.slice(0, 15);
  const date = coach.appointment_datetime.slice(16, 28);

  return (
    <>
      <StyledCoachCard>
        <div className='header'>
          <div className='header-text'>
            <h3>{`${coach.first_name} ${coach.last_name}`}</h3>
            <h4>{mapExperience(coach.experience_level)}</h4>
          </div>
          <div className='header-photo'>
            <Avatar className='picture' alt='Coach' src={Dom} />
          </div>
        </div>

        <div className='bullet-points'>
          <div className='bullet'>
            <CodeIcon className='icon' />
            {coach.appointment_topic}
          </div>
          <div className='bullet'>
            <TodayIcon className='icon' />
            {date}
          </div>
          <div className='bullet'>
            <ScheduleIcon className='icon' />
            {time}
          </div>
        </div>

        <div className='description'>
          <p>{`${coach.description &&
            coach.description.slice(0, 80)}...`}</p>{' '}
        </div>

        <div className='footer'>
          <Button
            onClick={handleCancelModalOpen}
            size='small'
            className='cancel-button'
            variant='contained'
            color='secondary'
            startIcon={<DeleteIcon />}
          >
            Cancel
          </Button>
          <Link to='/appointment' onClick={() => saveCoach(coach)}>
            <Button
              size='small'
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
      <Dialog
        open={openCancelModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCancelModalClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'> </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Are you sure you want to cancel your appointment ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelModalClose} color='primary'>
            No
          </Button>
          <Button onClick={props.cancel} color='primary'>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NewAppointmentCard;
