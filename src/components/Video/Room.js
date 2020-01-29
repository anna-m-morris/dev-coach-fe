import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Video from 'twilio-video';
import Participant from './Participant';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [audio, setAudio] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const participantConnected = participant => {
      setParticipants(prevParticipants => [
        ...prevParticipants,
        participant,
      ]);
    };

    const participantDisconnected = participant => {
      setParticipants(prevParticipants =>
        prevParticipants.filter(p => p !== participant),
      );
    };

    Video.connect(token, {
      name: roomName,
    }).then(room => {
      setRoom(room);
      room.on('participantConnected', participantConnected);
      room.on('participantDisconnected', participantDisconnected);
      room.participants.forEach(participantConnected);
    });

    return () => {
      setRoom(currentRoom => {
        if (
          currentRoom &&
          currentRoom.localParticipant.state === 'connected'
        ) {
          currentRoom.disconnect();
          return null;
        }
        return currentRoom;
      });
    };
  }, [roomName, token]);

  const remoteParticipants = participants.map(participant => (
    <Participant
      className='user-video'
      audio={false}
      key={participant.sid}
      participant={participant}
    />
  ));

  const handleAudio = () => {
    setAudio(!audio);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='room'>
      <div className='settings'>
        <Button
          className='button'
          variant='contained'
          color='primary'
          onClick={handleClickOpen}
        >
          End Session
        </Button>
        <Button
          onClick={handleAudio}
          className='button'
          variant='contained'
          color='primary'
        >
          {audio ? (
            <i className='fas fa-volume-up' />
          ) : (
            <i className='fas fa-volume-mute' />
          )}
        </Button>
      </div>
      {room ? (
        <div className='videos'>
          <Participant
            audio={audio}
            className='my-video'
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
          {remoteParticipants}
        </div>
      ) : (
        ''
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to end your interview, you don't can
            come back to your session ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            No
          </Button>

          <Button color='primary' autoFocus onClick={handleLogout}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Room;
