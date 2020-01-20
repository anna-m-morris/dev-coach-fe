import React, { Component } from 'react';
import UsernameForm from './UsernameForm';
import ChatScreen from './ChatScreen';
import { connect } from 'react-redux';
import { saveRoomId } from '../../state/actions/chatActions';
import axios from 'axios';

class Chat extends Component {
  state = {
    currentUsername: '',
    currentScreen: 'WhatIsYourUsernameScreen',
  };

  componentDidMount = () => {
    fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: this.props.user.email }),
    })
      .then(response => {
        axios
          .post('http://localhost:5000/chat/user_room', {
            userId: this.props.user.email,
          })
          .then(res => {
            if (res.rooms !== []) {
              res.rooms.map(room => {
                if (
                  room.member_user_ids.includes(
                    this.props.user.email,
                  ) &&
                  room.member_user_ids.includes(this.props.email)
                ) {
                  this.props.saveRoomId(room.id);
                  this.setState({
                    currentUsername: this.props.user.email,
                    currentScreen: 'ChatScreen',
                  });
                } else {

                }
              });
            }
          });
      })
      .catch(error => console.error('error', error));
  };

  // onUsernameSubmitted = username => {
  //   fetch('http://localhost:5000/chat', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username }),
  //   })
  //     .then(response => {
  //       console.log(response, username);
  //       this.setState({
  //         currentUsername: username,
  //         currentScreen: 'ChatScreen',
  //       });
  //     })
  //     .catch(error => console.error('error', error));
  // };

  render() {
    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />;
    }
    if (this.state.currentScreen === 'ChatScreen') {
      return (
        <ChatScreen currentUsername={this.state.currentUsername} />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    email: state.chatReducer.email,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, { saveRoomId })(Chat);
