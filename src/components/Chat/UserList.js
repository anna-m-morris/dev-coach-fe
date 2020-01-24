import React, { useState } from 'react';
import uuid from 'uuid';
import styled from 'styled-components';

const UserListStyle = styled.div`
  .bg {
    /* background: black; */
    border-top: 1px solid #ced4da;
    padding: 1rem;
    border-bottom: none;
    cursor: pointer;

    &:hover {
      background: #4fad65;
      color: white;
      padding: 1rem;
      border-radius: 5px;
    }
  }

  .bgClicked {
    background: white;
    border-top: 1px solid #ced4da;
    padding: 1rem;
    border-bottom: none;
    cursor: pointer;

    &:hover {
      background: #4fad65;
      color: white;
      padding: 1rem;
      border-radius: 5px;
    }
  }
`;

const UserList = props => {
  const { user, rooms, startChat } = props;

  // const [bgColor, setBgColor] = useState('');

  // const changeColor = () => {
  //   setBgColor('black');
  // };
  // const getColor = () => (bgColor ? 'bg' : 'bgClicked');

  return (
    <>
      {rooms &&
        rooms.map(room => (
          <UserListStyle
            key={uuid()}
            onClick={() => startChat(room.id)}
          >
            {' '}
            <div className='bg'>
              {user.role_id === 2
                ? room.custom_data.role_id_one
                : room.custom_data.role_id_two}
            </div>
          </UserListStyle>
        ))}
    </>
  );
};

export default UserList;
