import React from 'react';
import { connect } from 'react-redux';
import {
  getRooms,
  saveForChat,
} from '../../state/actions/chatActions';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

class Chats extends React.Component {
  componentDidMount = () => {
    this.props.getRooms(this.props.user.email);
  };
  render() {
    return (
      <div>
        {this.props.rooms &&
          this.props.rooms.map(room => (
            <Link key={uuid()} to='/chat'>
              <p onClick={() => this.props.saveForChat(room.member_user_ids[0])}>{room.member_user_ids[0]}</p>
            </Link>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rooms: state.chatReducer.rooms,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, { getRooms, saveForChat })(
  Chats,
);
