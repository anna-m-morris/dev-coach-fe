import axios from "axios";

const appURL = process.env.REACT_APP_BASE_URL;

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const login = (url, props, values) => (dispatch) => {
  console.log(url, props, values);
  dispatch({ type: LOGIN_START });
  axios
    .post(url, values)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESSFUL });
      localStorage.setItem("token", res.data.token);
      props.history.push("/dashboard");
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, payload: err });
    });
};

/* export const genericAction = (type, payload) => ({
  type,
  payload
}); */

/* export const login = () => dispatch => {
  dispatch(genericAction(LOADING_USER, true));

  dispatch(genericAction(LOGIN, userId));

  dispatch(genericAction(LOGIN_ERROR, errorMessage));
};
 */
