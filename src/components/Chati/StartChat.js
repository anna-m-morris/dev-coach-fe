import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { startInterviewChat } from '../../state/actions/InterviewActions';

const StyledChatLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin-left: 45%;
`;

const ChatLoader = props => {
  const { user, peer, startInterviewChat } = props;

  useEffect(() => {
    startInterviewChat(user, peer, props);
  }, [peer, props, startInterviewChat, user]);

  return (
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
    peer: state.interviewReducer.peer,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, {
  startInterviewChat,
})(ChatLoader);
