import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import {
  getRooms,
  saveForChat,
} from '../../state/actions/chatActions';

const ChatList = props => {
  const { user, rooms, saveForChat, getRooms } = props;

  useEffect(() => {
    getRooms(user.email);
  }, []);

  return (
    <div>
      {rooms &&
        user &&
        rooms.map(room => (
          <Link key={uuid()} to='/chat'>
            <p
              onClick={() =>
                saveForChat(
                  user.role_id === 2
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
              {user.role_id === 2
                ? room.custom_data.role_id_one
                : room.custom_data.role_id_two}
            </p>
          </Link>
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    rooms: state.chatReducer.rooms,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, { getRooms, saveForChat })(
  ChatList,
);
