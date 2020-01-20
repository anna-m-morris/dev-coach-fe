import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client';
import MessageList from './MessageList';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      currentRoom: {},
      messages: [],
    };
  }

  componentDidMount() {
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
          roomId: '3211c38b-1300-438c-a72e-a705961e8f95',
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
  }

  render() {
    const styles = {
      container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
      chatContainer: {
        display: 'flex',
        flex: 1,
      },
      whosOnlineListContainer: {
        width: '300px',
        flex: 'none',
        padding: 20,
        backgroundColor: '#2c303b',
        color: 'white',
      },
      chatListContainer: {
        padding: 20,
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
      },
    };

    return (
      <div style={styles.container}>
        <div style={styles.chatContainer}>
          <aside style={styles.whosOnlineListContainer}>
            <h2>Who's online PLACEHOLDER</h2>
          </aside>
          <section style={styles.chatListContainer}>
            <MessageList
              messages={this.state.messages}
              style={styles.chatList}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default ChatScreen;
