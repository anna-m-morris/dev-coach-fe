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

  componentDidMount() {
    const id =
      this.props.user.role_id === 1
        ? `${this.props.user.email} ${this.props.email}`
        : `${this.props.email} ${this.props.user.email}`;

    axios
      .post('http://localhost:5000/chat', {
        username: this.props.user.email,
      })
      .then(response => {
        axios
          .post('http://localhost:5000/chat', {
            username: this.props.email,
          })
          .then(response => {
            axios
              .post('http://localhost:5000/chat/user_room', {
                userId: this.props.user.email,
              })
              .then(res => {
                debugger;
                console.log(res);
                if (res.data.rooms.length) {
                  res.data.rooms.map(room => {
                    if (room.id === id) {
                      debugger;
                      console.log(room)
                      this.props.saveRoomId(id);
                      this.setState({
                        currentUsername: this.props.user.email,
                        currentScreen: 'ChatScreen',
                      });
                    } else {
                      axios
                        .post('http://localhost:5000/chat/room', {
                          creatorId: this.props.user.email,
                          name: id,
                          userIds: [
                            this.props.user.email,
                            this.props.email,
                          ],
                          id: id,
                        })
                        .then(response => {
                          debugger;
                          console.log(response);
                          this.setState({
                            currentUsername: this.props.user.email,
                            currentScreen: 'ChatScreen',
                          });
                        })
                        .catch(err => {
                          debugger;
                          console.log(err);
                        });
                    }
                  });
                } else {
                  axios
                    .post('http://localhost:5000/chat/room', {
                      creatorId: this.props.user.email,
                      name: id,
                      userIds: [
                        this.props.user.email,
                        this.props.email,
                      ],
                      id: id,
                    })
                    .then(response => {
                      debugger;
                      console.log(response);
                      this.props.saveRoomId(id);
                      this.setState({
                        currentUsername: this.props.user.email,
                        currentScreen: 'ChatScreen',
                      });
                    })
                    .catch(err => {
                      debugger;
                      console.log(err);
                    });
                }
              });
          })
          .catch(error => console.log('error', error));
      })
      .catch(error => console.error('error', error));
  }

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


// refactor to sfc component => handle all 
// api requests with redux
// create new actions for specific api calls 
// create new redux state and pass the state per props
// refactor rest of the chat components
// 