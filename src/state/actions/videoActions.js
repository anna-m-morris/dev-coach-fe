export const VIDEO_START = 'VIDEO_START';
export const VIDEO_ERROR = 'VIDEO_ERROR';
export const VIDEO_SUCCESSFUL = 'VIDEO_SUCCESSFUL';

export const startVideo = channelName => {
  debugger
  return { type: VIDEO_SUCCESSFUL, payload: channelName };
};
