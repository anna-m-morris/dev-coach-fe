import React, { useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Lobby from './Lobby';
import Room from './Room';

const StyledVideoChat = styled.div`
  main {
    background: #ffffff;
    flex-grow: 1;
  }

  form {
    max-width: 300px;
    margin: 0 auto;
  }

  h2 {
    font-weight: 300;
    margin-bottom: 1em;
    text-align: center;
  }

  form > div {
    width: 100%;
    margin-bottom: 1em;
  }
  form > div > label {
    display: block;
    margin-bottom: 0.3em;
  }
  form > div > input {
    display: block;
    width: 100%;
    font-size: 16px;
    padding: 0.4em;
    border-radius: 6px;
    border: 1px solid #333e5a;
  }

  button {
    background: #333e5a;
    color: #fff;
    font-size: 16px;
    padding: 0.4em;
    border-radius: 6px;
    border: 1px solid transparent;
  }
  button:hover {
    filter: brightness(150%);
  }

  .room {
    position: relative;
  }
  .room button {
    position: absolute;
    top: 0;
    right: 20px;
  }
  .room > h3 {
    text-align: center;
    font-weight: 300;
    margin-bottom: 1em;
  }

  .local-participant {
    text-align: center;
    margin-bottom: 2em;
  }
  .remote-participants {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0 2em 2em;
  }
  .participant {
    background: #333e5a;
    padding: 10px;
    border-radius: 6px;
    display: inline-block;
    margin-right: 10px;
  }
  .participant:last-child {
    margin-right: 0;
  }
  .participant h3 {
    text-align: center;
    padding-bottom: 0.5em;
    color: #fff;
  }

  video {
    width: 100%;
    max-width: 600px;
    display: block;
    margin: 0 auto;
    border-radius: 6px;
  }
`;

const VideoChat = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);

  const handleUsernameChange = useCallback(event => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback(event => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      await axios
        .post(`${process.env.REACT_APP_BASE_URL}video/token`, {
          identity: username,
          room: roomName,
        })
        .then(res => setToken(res.data.token));
    },
    [roomName, username],
  );

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  let render;
  if (token) {
    render = (
      <StyledVideoChat>
        <Room
          roomName={roomName}
          token={token}
          handleLogout={handleLogout}
        />
      </StyledVideoChat>
    );
  } else {
    render = (
      <StyledVideoChat>
        <Lobby
          username={username}
          roomName={roomName}
          handleUsernameChange={handleUsernameChange}
          handleRoomNameChange={handleRoomNameChange}
          handleSubmit={handleSubmit}
        />
      </StyledVideoChat>
    );
  }
  return render;
};

export default VideoChat;
