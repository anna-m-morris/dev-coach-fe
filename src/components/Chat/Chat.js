import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import UsernameForm from './UsernameForm';
import ChatScreen from './ChatScreen';
import {
  saveRoomId,
  startChat,
} from '../../state/actions/chatActions';

const ChatLoader = props => {
  const { user, peer, saveRoomId, startChat } = props;

  const [currentUsername, setCurrentUsername] = useState('');
  const [currentScreen, setCurrentScreen] = useState(
    'WhatIsYourUsernameScreen',
  );

  useEffect(() => {
    const id =
      user.role_id === 1
        ? `${user.email} ${peer.email}`
        : `${peer.email} ${user.email}`;

    startChat(id, user, peer, saveRoomId);
  }, []);

  if (currentScreen === 'ChatScreen') {
    return <ChatScreen currentUsername={user.email} />;
  }
  return <UsernameForm onSubmit={null} />;
};

const mapStateToProps = state => {
  return {
    peer: state.chatReducer.peer,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, { saveRoomId, startChat })(
  ChatLoader,
);

// refactor to sfc component => handle all
// api requests with redux
// create new actions for specific api calls
// create new redux state and pass the state per props
// refactor rest of the chat components
//
