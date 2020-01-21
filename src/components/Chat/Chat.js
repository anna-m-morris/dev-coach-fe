import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import UsernameForm from './UsernameForm';
import ChatScreen from './ChatScreen';
import {
  saveRoomId,
  startChat,
} from '../../state/actions/chatActions';

const ChatLoader = props => {
  const { user, peer, saveRoomId, startChat, chatScreen } = props;

  useEffect(() => {
    const id =
      user.role_id === 1
        ? `${user.email} ${peer.email}`
        : `${peer.email} ${user.email}`;

    startChat(id, user, peer, saveRoomId);
  }, []);

  if (chatScreen) {
    return <ChatScreen currentUsername={user.email} />;
  }
  return <UsernameForm onSubmit={null} />;
};

const mapStateToProps = state => {
  return {
    peer: state.chatReducer.peer,
    chatScreen: state.chatReducer.chatScreen,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, { saveRoomId, startChat })(
  ChatLoader,
);
