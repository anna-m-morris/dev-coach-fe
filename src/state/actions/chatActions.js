export const SAVE_FOR_CHAT = 'SAVE_FOR_CHAT';
export const SAVE_ROOM_ID = 'SAVE_ROOM_ID';

export const saveForChat = email => {
  return { type: SAVE_FOR_CHAT, payload: email };
};

export const saveRoomId = roomId => {
  return { type: SAVE_ROOM_ID, payload: roomId };
};
