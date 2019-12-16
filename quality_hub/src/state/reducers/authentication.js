import * as types from "../actions/authenticationActions";

const initialState = {
  user: {},
  loadingUser: false,
  loginError: undefined
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        userId: action.payload,
        loginError: undefined,
        signUpError: undefined
      };
    case types.LOADING_USER:
      return { ...state, loadingUser: action.payload };
    case types.LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
}

export default userReducer;
