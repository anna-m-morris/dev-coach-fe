import React, { useEffect, useState } from 'react';
import {
  ChatkitProvider,
  TokenProvider,
} from '@pusher/chatkit-client-react';

import { connect } from 'react-redux';

import { getRooms } from '../../state/actions/chatActions';

import './App.css';
import Chat from './Chat';
import UserList from './UserList';
import chatkitLogo from './chatkit-logo.svg';

const instanceLocator = 'v1:us1:02d03086-c977-4990-bbb8-d915c9090f74';

const tokenProvider = new TokenProvider({
  url: `${process.env.REACT_APP_BASE_URL}chat/auth`,
});

function App(props) {
  const userId = props.user.email;
  const [otherUserId, setOtherUserId] = useState(
    props.peer
      ? props.peer.email
      : props.rooms
      ? props.rooms[0].member_user_ids.filter(
          id => id !== props.user.email,
        )[0]
      : null,
  );

  useEffect(() => {
    props.getRooms(props.user.email);
  }, [props.user]);

  const startChat = otherUser => {
    setOtherUserId(otherUser);
  };

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
              <UserList
                userId={userId}
                startChat={startChat}
                rooms={props.rooms}
              />
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
    roomId: state.chatReducer.roomId,
    messages: state.chatReducer.messages,
    rooms: state.chatReducer.rooms,
    user: state.userReducer.user,
    id: state.chatReducer.id,
  };
};

export default connect(mapStateToProps, { getRooms })(App);
