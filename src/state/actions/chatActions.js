import axiosWithAuth from '../../utils/axiosWithAuth';

export const GET_ROOMS_ERROR = 'GET_ROOMS_ERROR';
export const GET_ROOMS_SUCCESSFUL = 'GET_ROOMS_SUCCESSFUL';
export const START_CHAT_FROM_SCRATCH_START =
  'START_CHAT_FROM_SCRATCH_START';
export const START_CHAT_FROM_SCRATCH_ERROR =
  'START_CHAT_FROM_SCRATCH_ERROR';
export const START_CHAT_FROM_SCRATCH_SUCCESSFUL =
  'START_CHAT_FROM_SCRATCH_SUCCESSFUL';
export const SAVE_FOR_CHAT = 'SAVE_FOR_CHAT';
export const SAVE_ROOM_ID = 'SAVE_ROOM_ID';

export const saveForChat = peer => {
  return { type: SAVE_FOR_CHAT, payload: peer };
};

export const saveRoomId = roomId => {
  return { type: SAVE_ROOM_ID, payload: roomId };
};

export const getRooms = email => dispatch => {
  axiosWithAuth()
    .post(`http://localhost:5000/chat/user_room`, {
      userId: email,
    })
    .then(res => {
      dispatch({
        type: GET_ROOMS_SUCCESSFUL,
        payload: res.data.rooms,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ROOMS_ERROR,
        payload: err,
      });
    });
};

export const startChatFromScratch = (
  id,
  user,
  peer,
  saveRoomId,
  props,
) => dispatch => {
  axiosWithAuth()
    .post('http://localhost:5000/chat/room_id', {
      roomId: id,
    })
    .then(() => {
      saveRoomId(id);
      dispatch({
        type: START_CHAT_FROM_SCRATCH_SUCCESSFUL,
      });
      props.history.push('/chat');
    })
    .catch(() => {
      axiosWithAuth()
        .post('http://localhost:5000/chat', {
          username: user.email,
        })
        .then(() => {
          axiosWithAuth()
            .post('http://localhost:5000/chat', {
              username: peer.email,
            })
            .then(() => {
              axiosWithAuth()
                .post('http://localhost:5000/chat/room', {
                  creatorId: user.email,
                  name: id,
                  userIds: [user.email, peer.email],
                  id,
                  customData: {
                    role_id_one: `${user.first_name} ${user.first_name}`,
                    role_id_two: peer.name,
                  },
                })
                .then(() => {
                  saveRoomId(id);
                  dispatch({
                    type: START_CHAT_FROM_SCRATCH_SUCCESSFUL,
                  });
                  props.history.push('/chat');
                });
            });
        });
    });
};
