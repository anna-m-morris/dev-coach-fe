import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import Loader from 'react-loader-spinner';
import devices from '../../utils/devices';

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

    @media ${devices.mobile} {
      margin-top: 1rem;
    }
    .message {
      display: flex;
      flex-direction: row-reverse;
      max-width: 100%;
    }

    .message-time {
      color: #666363;
      margin: 0.2rem 2.85rem 0 0;

      @media ${devices.mobile} {
        margin: 0.1rem 2.85rem 0 0;
      }
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
      word-break: break-word;
      width: 70%;

      @media ${devices.tablet} {
        font-size: 0.95rem;
        padding: 0.35rem 0.8rem;
      }

      @media ${devices.mobile} {
        font-size: 0.8rem;
        padding: 0.2rem 0.8rem;
      }
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

    @media ${devices.mobile} {
      margin-top: 1rem;
    }
    .message {
      display: flex;
      max-width: 100%;
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
      word-break: break-word;
      width: 70%;

      @media ${devices.tablet} {
        font-size: 0.95rem;
        padding: 0.35rem 0.8rem;
      }

      @media ${devices.mobile} {
        font-size: 0.8rem;
        padding: 0.2rem 0.8rem;
      }
    }
  }
`;

const MessageList = ({ messages, userId, user, currentRoom }) => {
  const messagesEndRef = useRef(null);
  console.log('1', user);
  console.log('2', messages);

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
                        message.senderId ===
                        message.roomId.split(' ')[0]
                          ? currentRoom.customData.role_id_one_url
                          : currentRoom.customData.role_id_two_url
                      }
                      className='chat-avatar'
                    />
                    <p className='message-text'>{message.text}</p>
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
