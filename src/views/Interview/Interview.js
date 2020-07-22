import React, { useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { finishInterview } from '../../state/actions/interviewActions';
import Lobby from '../../components/Interview/Lobby';
import Code from '../../components/Interview/Code';

const StyledVideoChat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .room {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .button {
    width: 100%;
    background-color: #4fad65;

    &:hover {
      background: #1e3f1f;
    }
  }

  .settings {
    display: flex;
    justify-content: flex-end;

    button {
      width: 10%;
    }
  }

  .videos {
    width: 100%;
    height: 425px;
    margin: 0px auto;
    position: relative;
    box-shadow: 1px 1px 11px #9e9e9e;
    border-radius: 6px;

    .my-video {
      width: 132px;
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
      object-fit: fill;
    }
  }
`;

export const VideoChat = ({
  user,
  peerId,
  history,
  idRole,
  finishInterview,
}) => {
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
      finishInterview(idRole.appointment_id);
      history.push('/givefeedback');
    },
    [history, idRole.appointment_id, finishInterview],
  );

  let render;
  if (token) {
    render = (
      <StyledVideoChat>
        <Code Room={{ roomName, token, handleLogout }} />
      </StyledVideoChat>
    );
  } else {
    render = (
      <StyledVideoChat style={{ height: '88vh' }}>
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
    idRole: state.feedbackReducer.idRole,
  };
};

export default connect(mapStateToProps, { finishInterview })(
  VideoChat,
);
