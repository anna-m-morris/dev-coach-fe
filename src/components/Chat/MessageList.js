import React, { Component } from 'react';
import styled from 'styled-components';

const StyledMessageList = styled.div`
  overflow-y: scroll;
  flex: 1;

  .ul {
    list-style: none;
  }

  .li {
    margin-top: 13;
    margin-bottom: 13;
  }

  .send-username {
    font-weight: bold;
  }

  .message {
    font-weight: bold;
  }
`;

class MessagesList extends Component {
  render() {
    return (
      <StyledMessageList>
        <ul className='ul'>
          {this.props.messages &&
            this.props.messages.map((message, index) => (
              <li key={index} className='li'>
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
  }
}

export default MessagesList;
