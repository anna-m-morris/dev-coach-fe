import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { startChat } from '../../state/actions/chatActions';

const StyledChatLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin-left: 45%;
`;

const ChatLoader = props => {
  const { user, peer, startChat } = props;

  useEffect(() => {
    const id =
      user.role_id === 1
        ? `${user.email} ${peer.email}`
        : `${peer.email} ${user.email}`;

    startChat(id, user, peer, props);
  }, [peer, props, startChat, user]);

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
    peer: state.chatReducer.id,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, {
  startChat,
})(ChatLoader);
