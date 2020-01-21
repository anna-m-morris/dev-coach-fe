import axiosWithAuth from '../../utils/axiosWithAuth';

export const GET_ROOMS_START = 'GET_ROOMS_START';
export const GET_ROOMS_ERROR = 'GET_ROOMS_ERROR';
export const GET_ROOMS_SUCCESSFUL = 'GET_ROOMS_SUCCESSFUL';
export const START_CHAT_START = 'START_CHAT_START';
export const START_CHAT_ERROR = 'START_CHAT_ERROR';
export const START_CHAT_SUCCESSFUL = 'START_CHAT_SUCCESSFUL';
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
  axiosWithAuth()
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

export const startChat = (id, user, peer, saveRoomId) => dispatch => {
  axiosWithAuth()
    .post('http://localhost:5000/chat', {
      username: user.email,
    })
    .then(response => {
      axiosWithAuth()
        .post('http://localhost:5000/chat', {
          username: peer.email,
        })
        .then(response => {
          axiosWithAuth()
            .post('http://localhost:5000/chat/user_room', {
              userId: user.email,
            })
            .then(res => {
              debugger;
              console.log(res);
              if (res.data.rooms.length) {
                res.data.rooms.map(room => {
                  if (room.id === id) {
                    debugger;
                    console.log(room);
                    saveRoomId(id);
                    dispatch({
                      type: START_CHAT_SUCCESSFUL,
                      payload: true,
                    });
                  } else {
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
                      .then(response => {
                        debugger;
                        console.log(response);
                        const FirstElse = 'firstPost';
                        dispatch({
                          type: START_CHAT_SUCCESSFUL,
                          payload: true,
                        });
                      })
                      .catch(err => {
                        debugger;
                        console.log(err);
                      });
                  }
                });
              } else {
                axiosWithAuth()
                  .post('http://localhost:5000/chat/room', {
                    creatorId: user.email,
                    name: id,
                    userIds: [user.email, peer.email],
                    id,
                    customData: {
                      role_id_one: `${user.first_name} ${user.last_name}`,
                      role_id_two: peer.name,
                    },
                  })
                  .then(response => {
                    debugger;
                    console.log(response);
                    const secondElse = 'secondPost';
                    saveRoomId(id);
                    dispatch({
                      type: START_CHAT_SUCCESSFUL,
                      payload: true,
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
};
