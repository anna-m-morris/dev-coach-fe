import React, { useState, useEffect } from 'react';
import Video from 'twilio-video';
import Participant from './Participant';

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [audio, setAudio] = useState(false);

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

  const audioChanger = () => {
    setAudio(!audio);
  };

  const remoteParticipants = participants.map(participant => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <div className='room'>
      <button onClick={handleLogout}>Log out</button>
      <button onClick={audioChanger}>
        {audio ? (
          <i className='fas fa-microphone-alt' />
        ) : (
          <i className='fas fa-microphone-alt-slash' />
        )}
      </button>
      <div className='local-participant'>
        {room ? (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
            audio={audio}
          />
        ) : (
          ''
        )}
      </div>
      <h3>Remote Participants</h3>
      <div className='remote-participants'>{remoteParticipants}</div>
    </div>
  );
};

export default Room;
