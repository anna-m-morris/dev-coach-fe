import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import Loader from 'react-loader-spinner';

const StyledMessageList = styled.div`
  flex: 1;
  max-height: 100vh;
  overflow: auto;
  margin: 1rem 0;

  .message-list {
    list-style: none;
    padding: 0 1rem;
  }

  .my-message {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    margin: 0;
    margin-top: 2rem;
    color: white;

    .message-text {
      max-width: 70%;
      padding: 0.4rem 0.8rem;
      border-radius: 3px;
      background: #4fad65;
      margin: 0;
      margin-right: 0.4rem;
      font-size: 1rem;
      word-wrap: break-word;
    }
  }

  .peer-message {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: flex-end;
    margin: 0;
    margin-top: 2rem;
    color: #666363;

    .message-text {
      max-width: 70%;
      padding: 0.4rem 0.8rem;
      border-radius: 3px;
      background: #ebebeb;
      margin: 0;
      margin-left: 0.4rem;
      font-size: 1rem;
      word-wrap: break-word;
    }
  }
`;

const MessageList = ({ messages, userId }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <StyledMessageList className='message-list-container'>
      <div className='message-list'>
        {messages ? (
          messages &&
          messages.map((message, index) => (
            <div
              key={index}
              className={
                message.senderId === userId
                  ? 'my-message'
                  : 'peer-message'
              }
            >
              <p className='message-text'>{message.text}</p>
              <Avatar className='avatar' />
            </div>
          ))
        ) : (
          <Loader
            type='TailSpin'
            color='#2BAD60'
            height={50}
            width={50}
          />
        )}
      </div>
      <div ref={messagesEndRef}></div>
    </StyledMessageList>
  );
};

export default MessageList;
