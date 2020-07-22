import axiosWithAuth from '../../utils/axiosWithAuth';

export const GET_RESOURCE_START = 'GET_RESOURCE_START';
export const GET_RESOURCE_SUCCESS = 'GET_RESOURCE_SUCCESS';
export const GET_RESOURCE_ERROR = 'GET_RESOURCE_SUCCESS';
export const SUBMIT_RESOURCE_START = 'SUBMIT_RESOURCE_START';
export const SUBMIT_RESOURCE_SUCCESS = 'SUBMIT_RESOURCE_SUCCESS';
export const SUBMIT_RESOURCE_ERROR = 'SUBMIT_RESOURCE_SUCCESS';
export const UPDATE_RESOURCE_START = 'UPDATE_RESOURCE_START';
export const UPDATE_RESOURCE_SUCCESS = 'UPDATE_RESOURCE_SUCCESS';
export const UPDATE_RESOURCE_ERROR = 'UPDATE_RESOURCE_SUCCESS';
export const USER_RESOURCE_UPDATE = 'USER_RESOURCE_UPDATE';

const url = process.env.REACT_APP_BASE_URL;

export const getResources = () => dispatch => {
  dispatch({
    type: GET_RESOURCE_START,
  });
  axiosWithAuth()
    .get(`${url}resources`)
    .then(response => {
      dispatch({
        type: GET_RESOURCE_SUCCESS,
        payload: response.data,
      });
      console.log(`getResource res:`, response);
    })
    .catch(err => {
      dispatch({
        type: GET_RESOURCE_ERROR,
        payload: err.response.data,
      });
    });
};

export const submitResource = values => dispatch => {
  const { id } = JSON.parse(
    localStorage.getItem('state'),
  ).userReducer.user;
  dispatch({
    type: SUBMIT_RESOURCE_START,
  });
  axiosWithAuth()
    .post(`${url}resources`, {
      title: values.title,
      description: values.description,
      link: values.link,
      thumbnail: values.thumbnail,
      user_id: id,
    })
    .then(response => {
      console.log(response);
      dispatch({
        type: SUBMIT_RESOURCE_SUCCESS,
        payload: response.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SUBMIT_RESOURCE_ERROR,
        payload: err,
      });
    });
};

export const updateResourceInfo = (
  resourceInfo,
  showError,
  showSuccess,
  closeMessage,
  resourceId,
  user_id,
) => async dispatch => {

  dispatch({ type: USER_RESOURCE_UPDATE });
  const updateResourceTable = { ...resourceInfo };
  axiosWithAuth()
    .put(`${url}resources/${resourceId}`, updateResourceTable)
    .then(response => {
      if (resourceInfo.title && user_id.id) {
        axiosWithAuth()
          .put(`${url}resources/${resourceId}`, updateResourceTable)
          .then(response => {
            showSuccess();
            setTimeout(() => closeMessage(), 5000);
            dispatch({
              type: UPDATE_RESOURCE_START,
              payload: response.data.resource,
              message: response.data.message,
            });
          });
      } else {
        showSuccess();
        setTimeout(() => closeMessage(), 5000);
        dispatch({
          type: UPDATE_RESOURCE_SUCCESS,
          payload: response.data.updatedResource,
          message: response.data.message,
        });
      }
    })
    .catch(error => {
      showError();
      setTimeout(() => closeMessage(), 5000);
      dispatch({
        type: UPDATE_RESOURCE_ERROR,
        payload: error.response.data.message,
      });
    });
};
