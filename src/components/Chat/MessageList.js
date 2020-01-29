import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const StyledMessageList = styled.div`
  flex: 1;
  max-height: 100vh;
  overflow: auto;

  .ul {
    list-style: none;
  }

  .my-message {
    margin-top: 2rem;
    background: #4fad65;
    width: 30%;
    color: white;
    box-shadow: 0 6px 8px #d3d3d3;
    border-radius: 10px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.3rem;
    margin-left: 67%;

    .username-div {
      border-bottom: 1px solid #ced4da;
      padding-bottom: 0.4rem;
    }
  }

  .peer-message {
    margin-top: 2rem;
    background: white;
    width: 30%;
    color: black;
    box-shadow: 0 6px 8px #d3d3d3;
    border-radius: 10px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.3rem;

    .username-div {
      border-bottom: 1px solid #ced4da;
      padding-bottom: 0.4rem;
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
    <StyledMessageList>
      <ul className='ul'>
        {messages ? (
          messages &&
          messages.map((message, index) => (
            <li
              key={index}
              className={
                message.senderId === userId
                  ? 'my-message'
                  : 'peer-message'
              }
            >
              <div className='username-div'>
                <span className='send-username'>
                  {message.senderId}
                </span>{' '}
              </div>
              <p className='message'>{message.text}</p>
            </li>
          ))
        ) : (
          <Loader
            type='TailSpin'
            color='#2BAD60'
            height={50}
            width={50}
          />
        )}
      </ul>
      <div ref={messagesEndRef}></div>
    </StyledMessageList>
  );
};

export default MessageList;
