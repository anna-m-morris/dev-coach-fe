import React, { useState, useEffect, useRef } from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { Avatar } from '@material-ui/core';

const UserListStyle = styled.div`
  position: static;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ced4da;
  padding: 1rem;
  transition: ease-out 0.1s;
  cursor: pointer;
  overflow: auto;

  &:hover {
    transition: ease-in 0.1s;
    background: #4fad65;
    color: white;
  }

  .recent-chat-avatar {
    height: 3.5rem;
    width: 3.5rem;
  }

  .bg {
    font-size: 1rem;
    margin-left: 0.3rem;
  }

  .bgClicked {
    background: #4fad65;
    padding: 1rem;
    border-bottom: none;
    cursor: pointer;
    color: white;
  }
`;

const UserList = props => {
  const { user, rooms, startChat } = props;
  const [clickedIndex, setClickedindex] = useState(0);

  const handleClick = index => {
    setClickedindex(index);
  };

  return (
    <>
      {rooms ? (
        rooms &&
        rooms.map(room => (
          <UserListStyle
            className='recent-user'
            key={uuid()}
            onClick={() => startChat(room.id)}
          >
            <Avatar
              src={user.avatar_url}
              className='recent-chat-avatar'
            />
            <ChangeStyle
              clicked={room === clickedIndex}
              onClick={() => handleClick(room)}
              userRole={
                user.role_id === 2
                  ? room.custom_data.role_id_one
                  : room.custom_data.role_id_two
              }
            />
          </UserListStyle>
        ))
      ) : (
        <Loader
          type='TailSpin'
          color='#2BAD60'
          height={50}
          width={50}
        />
      )}
    </>
  );
};

const ChangeStyle = props => {
  return (
    <div
      className={props.clicked ? 'bgClicked' : 'bg'}
      onClick={props.onClick}
    >
      {props.userRole}
    </div>
  );
};

export default UserList;
