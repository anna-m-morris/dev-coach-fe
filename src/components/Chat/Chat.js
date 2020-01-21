import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import {
  saveRoomId,
  startChat,
} from '../../state/actions/chatActions';

const ChatLoader = props => {
  const { user, peer, saveRoomId, startChat } = props;

  useEffect(() => {
    const id =
      user.role_id === 1
        ? `${user.email} ${peer.email}`
        : `${peer.email} ${user.email}`;

    startChat(id, user, peer, saveRoomId, props);
  }, []);

  return (
    <div className='loaderStyled'>
      <Loader
        type='TailSpin'
        color='#2BAD60'
        height={80}
        width={80}
      />
    </div>
  );
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
