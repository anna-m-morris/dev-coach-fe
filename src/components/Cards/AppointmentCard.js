import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import CodeIcon from '@material-ui/icons/Code';
import TodayIcon from '@material-ui/icons/Today';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TelegramIcon from '@material-ui/icons/Telegram';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import devices from '../../utils/devices';
import { mapExperience } from '../../utils/mappers';

const StyledAppointmentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 17rem;
  height: 22rem;
  padding: 1.5rem;
  border-radius: 0.8rem;
  margin: 0.5rem;
  color: #595959;
  font-weight: 400;
  background: white;
  box-shadow: 0 6px 10px #d3d3d3;

  @media ${devices.mobile} {
    width: 14rem;
  }
  .header {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;

    .close-icon {
      margin-top: -4em;
      margin-left: -0.55em;
      opacity: 0.75;
      cursor: pointer;
    }

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
    font-size: 1rem;
    color: #3c4043;
    margin: 0;
  }

  h4 {
    text-align: center;
    font-weight: lighter;
    margin: 0;
  }

  .bullet-points {
    margin: 0;
  }

  .bullet {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 0.3em;
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

    .send-button {
      background-color: #4fad65;
      width: 110px;
    }

    .interview-button {
      width: 110px;
      background-color: #303f9f;
    }

    @media ${devices.mobile} {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const AppointmentCard = props => {
  const {
    appointment,
    startInterview,
    cancelAppointment,
    savePeer,
  } = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const time = appointment.appointment_datetime.slice(0, 15);
  const date = appointment.appointment_datetime.slice(16, 28);
  return (
    <>
      <StyledAppointmentCard className='appointment-card'>
        <div className='header'>
          <CloseIcon
            className='close-icon'
            onClick={handleClickOpen}
          ></CloseIcon>
          <div className='header-text'>
            <h3>{`${appointment.first_name} ${appointment.last_name}`}</h3>
            <h4>{mapExperience(appointment.experience_level)}</h4>
          </div>
          <div className='header-photo'>
            <Avatar
              className='picture'
              alt='appointment'
              src={appointment.avatar_url || null}
            />
          </div>
        </div>

        <div className='bullet-points'>
          <div className='bullet'>
            <CodeIcon className='icon' />
            {appointment.appointment_topic}
          </div>
          <div className='bullet'>
            <TodayIcon className='icon' />
            {date}
          </div>
          <div className='bullet'>
            <ScheduleIcon className='icon' />
            {time}
          </div>
          <div className='bullet'>
            <TimelapseIcon className='icon' />
            {appointment.appointment_length}
          </div>
        </div>
        <div className='footer'>
          <Button
            className='send-button'
            variant='contained'
            color='primary'
            startIcon={<TelegramIcon />}
            onClick={savePeer}
          >
            Chat
          </Button>
          <Button
            className='interview-button'
            variant='contained'
            color='primary'
            startIcon={<VideoCallIcon />}
            onClick={startInterview}
          >
            Start
          </Button>
        </div>
      </StyledAppointmentCard>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to cancel this appointment ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            No
          </Button>

          <Button
            color='primary'
            autoFocus
            onClick={cancelAppointment}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AppointmentCard;
