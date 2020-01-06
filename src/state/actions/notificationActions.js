export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';
export const SHOW_SUCCESS_MESSAGE = 'SHOW_SUCCESS_MESSAGE';
export const SHOW_INFO_MESSAGE = 'SHOW_INFO_MESSAGE';
export const CLOSE_MESSAGE = 'CLOSE_MESSAGE';

export const showSuccessMessage = () => {
  return { type: SHOW_SUCCESS_MESSAGE };
};

export const showErrorMessage = () => {
  return { type: SHOW_ERROR_MESSAGE };
};

export const showInfoMessage = () => {
  return { type: SHOW_INFO_MESSAGE };
};

export const closeMessage = () => {
  return { type: CLOSE_MESSAGE };
};
