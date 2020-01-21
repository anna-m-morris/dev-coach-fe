import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import {
  getRooms,
  saveForChat,
  startChat,
} from '../../state/actions/chatActions';

const ChatList = props => {
  const { user, rooms, startChat } = props;

  return (
    <div>
      {rooms &&
        user &&
        rooms.map(room => (
          <p
            key={uuid()}
            onClick={
              // saveForChat(
              //   user.role_id === 2
              //     ? {
              //         email: room.member_user_ids[0],
              //         name: room.custom_data.role_id_one,
              //       }
              //     : {
              //         email: room.member_user_ids[1],
              //         name: room.custom_data.role_id_two,
              //       },
              // )
              startChat
            }
          >
            {user.role_id === 2
              ? room.custom_data.role_id_one
              : room.custom_data.role_id_two}
          </p>
        ))}
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     rooms: state.chatReducer.rooms,
//     user: state.userReducer.user,
//   };
// };

export default ChatList;
