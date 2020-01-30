import React, { useState } from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { Avatar } from '@material-ui/core';

const UserListStyle = styled.div`
  border-bottom: 1px solid #ced4da;
  transition: ease-out 0.1s;
  cursor: pointer;
  overflow: auto;

  &:hover {
    transition: ease-in 0.1s;
    background: #05728f;
    color: white;
  }

  .recent-chat-avatar {
    height: 3.5rem;
    width: 3.5rem;
    margin-right: 0.8rem;
  }

  .bg {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
    padding: 1rem;
  }

  .bgClicked {
    background: #05728f;
    border-bottom: none;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
    padding: 1rem;
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
            <ChangeStyle
              clicked={room === clickedIndex}
              onClick={() => handleClick(room)}
              userRole={
                user.role_id === 2
                  ? room.custom_data.role_id_one
                  : room.custom_data.role_id_two
              }
              avatar={
                user.role_id === 2
                  ? room.custom_data.role_id_one_url
                  : room.custom_data.role_id_two_url
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
      <Avatar src={props.avatar} className='recent-chat-avatar' />
      {props.userRole}
    </div>
  );
};

export default UserList;
