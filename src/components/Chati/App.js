import React, { useEffect, useState } from 'react';
import {
  ChatkitProvider,
  TokenProvider,
} from '@pusher/chatkit-client-react';

import { connect } from 'react-redux';

// import { getRooms } from '../../state/actions/chatActions';

// import './App.css';
import Chat from './Chat';
// import UserList from './UserList';
import chatkitLogo from './chatkit-logo.svg';

const instanceLocator = 'v1:us1:02d03086-c977-4990-bbb8-d915c9090f74';

const tokenProvider = new TokenProvider({
  url: `${process.env.REACT_APP_BASE_URL}chat/auth`,
});

function App(props) {
  const userId = props.user.email;
  const otherUserId = props.peerId;

  // useEffect(() => {
  //   props.getRooms(props.user.email);
  // }, [props.user]);

  // const startChat = otherUser => {
  //   const y = otherUserId;
  //   debugger;
  //   setOtherUserId(otherUser);
  // };
console.log(userId, otherUserId)
  return (
    <div className='App'>
      {userId && otherUserId ? (
        <>
          <div className='App__chatwindow'>
            <ChatkitProvider
              instanceLocator={instanceLocator}
              tokenProvider={tokenProvider}
              userId={userId}
            >
              {/* <UserList
                userId={userId}
                startChat={startChat}
                rooms={props.rooms}
              /> */}
              <Chat otherUserId={otherUserId} />
            </ChatkitProvider>
          </div>
        </>
      ) : (
        <p>You dont have a chat open</p>
      )}
      <div className='App__backdrop'>
        <img
          className='App__backdrop__logo'
          src={chatkitLogo}
          alt='Chatkit logo'
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    peerId: state.interviewReducer.peerId,
    // rooms: state.chatReducer.rooms,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(App);
