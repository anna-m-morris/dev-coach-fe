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
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    margin: 0;
    margin-top: 2rem;
    color: white;

    .message {
      display: flex;
      flex-direction: row-reverse;
    }

    .message-time {
      color: #666363;
      margin: 0.2rem 2.85rem 0 0;
    }

    .message-text {
      display: flex;
      max-width: 100%;
      align-self: center;
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      background: #05728f;
      margin: 0;
      margin-right: 0.4rem;
      font-size: 1rem;
      word-wrap: break-word;
    }
  }

  .peer-message {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    margin: 0;
    margin-top: 2rem;
    color: #666363;

    .message {
      display: flex;
      width: 100%;
    }

    .message-time {
      margin: 0.2rem 0 0 2.85rem;
    }

    .message-text {
      display: flex;
      align-self: center;
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      background: #ebebeb;
      margin: 0;
      margin-left: 0.4rem;
      font-size: 1rem;
      word-wrap: break-word;
      max-width: 65%;
    }
  }
`;

const MessageList = ({ messages, userId, user, currentRoom }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(scrollToBottom, [messages]);
  return (
    <StyledMessageList className='message-list-container'>
      <div className='message-list'>
        {messages ? (
          messages.map(
            (message, index) =>
              currentRoom && (
                <div
                  key={index}
                  className={
                    message.senderId === userId
                      ? 'my-message'
                      : 'peer-message'
                  }
                >
                  <div className='message'>
                    <Avatar
                      src={
                        message.senderId === user.email &&
                        user.role_id === 1
                          ? currentRoom.customData.role_id_one_url
                          : currentRoom.customData.role_id_two_url
                      }
                      className='chat-avatar'
                    />
                    <div className='message-text'>{message.text}</div>
                  </div>
                  <div className='message-time'>
                    {message.createdAt.slice(11, 16)}
                  </div>
                </div>
              ),
          )
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
