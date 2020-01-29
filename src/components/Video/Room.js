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

  return (
    <div className='room'>
      <div className='settings'>
        <button onClick={handleLogout}>Log out</button>
        <button onClick={handleAudio}>audio</button>
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
    </div>
  );
};

export default Room;
