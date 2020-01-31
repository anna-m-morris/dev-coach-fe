import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { startInterviewChat } from '../../state/actions/interviewActions';
import Chat from './App';

const StyledChatLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin-left: 45%;
`;

const ChatLoader = props => {
  const {
    user,
    peerId,
    startInterviewChat,
    interviewStarted,
  } = props;

  useEffect(() => {
    startInterviewChat(user, peerId, props);
  }, []);

  return interviewStarted ? (
    <Chat />
  ) : (
    <StyledChatLoader>
      <Loader
        type='TailSpin'
        color='#2BAD60'
        height={80}
        width={80}
      />
    </StyledChatLoader>
  );
};

const mapStateToProps = state => {
  return {
    peerId: state.interviewReducer.peerId,
    interviewStarted: state.interviewReducer.interviewStarted,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, {
  startInterviewChat,
})(ChatLoader);

// WE NEED TO CREATE NEW CHAT ON PUSHER
// NEW BACKEND AUTH AS WELL
