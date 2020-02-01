export const VIDEO_SUCCESSFUL = 'VIDEO_SUCCESSFUL';

const url = process.env.REACT_APP_BASE_URL;

export const startInterview = (peerId, props) => {
  props.history.push('/interview');

  return { type: VIDEO_SUCCESSFUL, payload: peerId };
};
