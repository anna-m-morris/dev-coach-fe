import axiosWithAuth from '../../utils/axiosWithAuth';

export const GET_ROOMS_START = 'GET_ROOMS_START';
export const GET_ROOMS_ERROR = 'GET_ROOMS_ERROR';
export const GET_ROOMS_SUCCESSFUL = 'GET_ROOMS_SUCCESSFUL';
export const START_CHAT_FROM_SCRATCH_START =
  'START_CHAT_FROM_SCRATCH_START';
export const START_CHAT_FROM_SCRATCH_ERROR =
  'START_CHAT_FROM_SCRATCH_ERROR';
export const START_CHAT_FROM_SCRATCH_SUCCESSFUL =
  'START_CHAT_FROM_SCRATCH_SUCCESSFUL';
export const SAVE_ROOM_ID = 'SAVE_ROOM_ID';
export const SAVE_PEER = 'SAVE_PEER';

const url = process.env.REACT_APP_BASE_URL;

export const savePeer = (peer, props) => {
  debugger
  props.history.push('/start_chat');
  return { type: SAVE_PEER, payload: peer };
};

export const saveRoomId = roomId => {
  return { type: SAVE_ROOM_ID, payload: roomId };
};

export const getRooms = email => dispatch => {
  dispatch({
    type: GET_ROOMS_START,
  });
  axiosWithAuth()
    .post(`${url}chat/user_room`, {
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
    .post(`${url}chat/room_id`, {
      roomId: id,
    })
    .then(res => {
      if (res.data.message === 'successful') {
        saveRoomId(id);
        dispatch({
          type: START_CHAT_FROM_SCRATCH_SUCCESSFUL,
        });
        props.history.push('/chat');
      } else {
        axiosWithAuth()
          .post(`${url}chat`, {
            username: user.email,
          })
          .then(() => {
            axiosWithAuth()
              .post(`${url}chat`, {
                username: peer.email,
              })
              .then(() => {
                axiosWithAuth()
                  .post(`${url}chat/room`, {
                    creatorId: user.email,
                    name: id,
                    userIds: [user.email, peer.email],
                    id,
                    customData: {
                      role_id_one:
                        user.role_id === 1
                          ? `${user.first_name} ${user.last_name}`
                          : `${peer.name}`,
                      role_id_one_url:
                        user.role_id === 1
                          ? user.avatar_url
                          : peer.avatar_url,
                      role_id_two:
                        user.role_id === 1
                          ? peer.name
                          : `${user.first_name} ${user.last_name}`,
                      role_id_two_url:
                        user.role_id === 1
                          ? peer.avatar_url
                          : user.avatar_url,
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
      }
    });
};
