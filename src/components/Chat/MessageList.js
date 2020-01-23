import React from 'react';
import styled from 'styled-components';

const StyledMessageList = styled.div`
  overflow-y: scroll;
  flex: 1;
  height: 80vh;

  .ul {
    list-style: none;
  }

  .my-message {
    color: blue;
  }

  .peer-message {
    color: red;
  }

  .send-username {
    font-weight: bold;
  }

  .message {
    font-weight: bold;
  }
`;

const MessageList = ({ messages, userId }) => {
  return (
    <StyledMessageList>
      <ul className='ul'>
        {messages &&
          messages.map((message, index) => (
            <li
              key={index}
              className={
                message.senderId === userId
                  ? 'my-message'
                  : 'peer-message'
              }
            >
              <div>
                <span className='send-username'>
                  {message.senderId}
                </span>{' '}
              </div>
              <p className='message'>{message.text}</p>
            </li>
          ))}
      </ul>
    </StyledMessageList>
  );
};

export default MessageList;
