import React from 'react';
import {
  ChatkitProvider,
  TokenProvider,
} from '@pusher/chatkit-client-react';

import { connect } from 'react-redux';
import Chat from './Chat';

const instanceLocator = 'v1:us1:02d03086-c977-4990-bbb8-d915c9090f74';

const tokenProvider = new TokenProvider({
  url: `${process.env.REACT_APP_BASE_URL}chat/auth`,
});

function App(props) {
  const userId = props.user.email;
  const otherUserId = props.peerId;

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
              <Chat otherUserId={otherUserId} />
            </ChatkitProvider>
          </div>
        </>
      ) : (
        <p>You dont have a chat open</p>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    peerId: state.interviewReducer.peerId,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(App);
