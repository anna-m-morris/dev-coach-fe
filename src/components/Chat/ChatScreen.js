import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client';
import MessageList from './MessageList';
import SendMessageForm from './SendMessage';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ChatList from './ChatList';

const StyledChatScreen = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .chat-container {
    display: flex;
    flex: 1;
    width: 100%;
  }

  .whos-online-list-container {
    width: 300px;
    flex: none;
    padding: 20;
    background-color: #2c303b;
    color: white;
  }

  .chat-list-container {
    padding: 20;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

class ChatScreen extends Component {
  state = {
    currentUser: {},
    currentRoom: {},
    messages: [],
  };

  sendMessage = text => {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id,
    });
  };

  componentDidMount = () => {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:02d03086-c977-4990-bbb8-d915c9090f74',
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:5000/chat/auth',
      }),
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser });
        return currentUser.subscribeToRoom({
          roomId: this.props.roomId,
          messageLimit: 100,
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message],
              });
            },
          },
        });
      })
      .then(currentRoom => {
        this.setState({ currentRoom });
      })
      .catch(error => console.error('error', error));
  };

  render() {
    return (
      <StyledChatScreen>
        <div className='chat-container'>
          <aside className='whos-online-list-container'>
            <h2>Your Chats</h2>
            <ChatList/>
          </aside>
          <section className='chat-list-container'>
            <MessageList messages={this.state.messages} />
            <SendMessageForm onSubmit={this.sendMessage} />
          </section>
        </div>
      </StyledChatScreen>
    );
  }
}

const mapStateToProps = state => {
  return {
    roomId: state.chatReducer.roomId,
  };
};

export default connect(mapStateToProps)(ChatScreen);
