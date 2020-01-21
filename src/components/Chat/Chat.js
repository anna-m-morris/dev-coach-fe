import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import UsernameForm from './UsernameForm';
import ChatScreen from './ChatScreen';
import { saveRoomId } from '../../state/actions/chatActions';

const ChatLoader = props => {
  const [currentUsername, setCurrentUsername] = useState('');
  const [currentScreen, setCurrentScreen] = useState(
    'WhatIsYourUsernameScreen',
  );

  useEffect(() => {
    const id =
      props.user.role_id === 1
        ? `${props.user.email} ${props.peer.email}`
        : `${props.peer.email} ${props.user.email}`;

    startChat(id, user, peer);
    
  }, []);

  if (currentScreen === 'ChatScreen') {
    return <ChatScreen currentUsername={currentUsername} />;
  }
  return <UsernameForm onSubmit={null} />;
};

const mapStateToProps = state => {
  return {
    peer: state.chatReducer.peer,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, { saveRoomId })(ChatLoader);

// refactor to sfc component => handle all
// api requests with redux
// create new actions for specific api calls
// create new redux state and pass the state per props
// refactor rest of the chat components
//
