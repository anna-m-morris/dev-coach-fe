import React, { useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Lobby from './Lobby';
import Room from './Room';
import Code from '../Interview/Code';

const StyledVideoChat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 88vh; */

  .button {
    width: 100%;
    background-color: #4fad65;
    font-weight: bold;

    &:hover {
      background: #1e3f1f;
    }
  }

  .settings {
    display: flex;
    justify-content: space-around;

    button {
      width: 25%;
    }
  }

  .videos {
    width: 500px;
    height: 380px;
    margin: 0px auto;
    border: 4px solid #4fad65;
    position: relative;
    box-shadow: 1px 1px 11px #9e9e9e;
    border-radius: 6px;

    .my-video {
      width: 130px;
      position: absolute;
      right: 10px;
      bottom: 10px;
      border: 4px solid #4fad65;
      border-radius: 6px;
      z-index: 2;
    }

    .user-video {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
`;

const VideoChat = ({ user, peerId, history }) => {
  const username = user.email;
  const roomName =
    user.role_id === 1
      ? `${user.email}-${peerId}`
      : `${peerId}-${user.email}`;

  const [token, setToken] = useState(null);

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

  const handleLogout = useCallback(
    event => {
      setToken(null);
      history.push('/givefeedback');
    },
    [history],
  );

  let render;
  if (token) {
    render = (
      <StyledVideoChat>
        <Room
          roomName={roomName}
          token={token}
          handleLogout={handleLogout}
        />
        <Code />
      </StyledVideoChat>
    );
  } else {
    render = (
      <StyledVideoChat>
        <Lobby handleSubmit={handleSubmit} />
      </StyledVideoChat>
    );
  }
  return render;
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    peerId: state.interviewReducer.peerId,
  };
};

export default connect(mapStateToProps)(VideoChat);
