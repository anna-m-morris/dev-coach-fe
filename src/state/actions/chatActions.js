import axios from 'axios';

export const GET_ROOMS_SUCCESSFUL = 'GET_ROOMS_SUCCESSFUL';
export const SAVE_FOR_CHAT = 'SAVE_FOR_CHAT';
export const SAVE_ROOM_ID = 'SAVE_ROOM_ID';

export const saveForChat = peer => {
  debugger;
  return { type: SAVE_FOR_CHAT, payload: peer };
};

export const saveRoomId = roomId => {
  debugger;
  return { type: SAVE_ROOM_ID, payload: roomId };
};

export const getRooms = email => dispatch => {
  axios
    .post(`http://localhost:5000/chat/user_room`, {
      userId: email,
    })
    .then(res => {
      debugger;
      dispatch({
        type: GET_ROOMS_SUCCESSFUL,
        payload: res.data.rooms,
      });
    })
    .catch(err => {
      debugger;
    });
};
