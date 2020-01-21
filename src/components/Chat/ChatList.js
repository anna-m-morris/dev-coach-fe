import React from 'react';
import { connect } from 'react-redux';
import {
  getRooms,
  saveForChat,
} from '../../state/actions/chatActions';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

class ChatList extends React.Component {
  componentDidMount = () => {
    this.props.getRooms(this.props.user.email);
  };
  render() {
    return (
      <div>
        {this.props.rooms &&
          this.props.user &&
          this.props.rooms.map(room => (
            <Link key={uuid()} to='/chat'>
              <p
                onClick={() =>
                  this.props.saveForChat(
                    this.props.user.role_id === 2
                      ? {
                          email: room.member_user_ids[0],
                          name: room.custom_data.role_id_one,
                        }
                      : {
                          email: room.member_user_ids[1],
                          name: room.custom_data.role_id_two,
                        },
                  )
                }
              >
                {this.props.user.role_id === 2
                  ? room.custom_data.role_id_one
                  : room.custom_data.role_id_two}
              </p>
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
  ChatList,
);
