import React, { Component } from 'react';
import UsernameForm from './UsernameForm';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      currentUsername: '',
    };
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this);
  }

  onUsernameSubmitted(username) {
    fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then(response => {
        this.setState({
          currentUsername: username,
        });
      })
      .catch(error => console.error('error', error));
  }

  render() {
    return <UsernameForm onSubmit={this.onUsernameSubmitted} />;
  }
}

export default Chat;
