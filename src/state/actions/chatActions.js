export const SAVE_FOR_CHAT = 'SAVE_FOR_CHAT';

export const saveForChat = email => {
  return { type: SAVE_FOR_CHAT, payload: email };
};
