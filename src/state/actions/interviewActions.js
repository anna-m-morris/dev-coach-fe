import axiosWithAuth from '../../utils/axiosWithAuth';

export const VIDEO_SUCCESSFUL = 'VIDEO_SUCCESSFUL';
export const CHAT_SUCCESSFUL = 'CHAT_SUCCESSFUL';

const url = process.env.REACT_APP_BASE_URL;

export const startInterview = (peerId, props) => {
  // props.history.push('/video');
  props.history.push('/chati');

  return { type: VIDEO_SUCCESSFUL, payload: peerId };
};

export const startInterviewChat = (user, peer) => dispatch => {
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
          dispatch({
            type: CHAT_SUCCESSFUL,
          });
        });
    });
};
