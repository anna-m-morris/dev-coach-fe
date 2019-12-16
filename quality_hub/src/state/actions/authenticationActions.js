import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";

const appURL = process.env.REACT_APP_BASE_URL;

export const LOGIN = "LOGIN";
export const LOADING_USER = "LOADING_USER";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const genericAction = (type, payload) => ({
  type,
  payload
});

export const login = () => dispatch => {
  dispatch(genericAction(LOADING_USER, true));

  dispatch(genericAction(LOGIN, userId));

  dispatch(genericAction(LOGIN_ERROR, errorMessage));
};
