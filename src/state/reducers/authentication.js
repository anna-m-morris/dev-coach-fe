import * as types from '../actions/actionTypes';

const initialState = {
  user: null,
  loginError: '',
  signUpError: '',
  isLoading: false,
  isLoggedIn: false,
  welcomeMessage: '',
  userHasChosenRole: false,
  userRoleError: '',
  id: null,
  role_id: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        loginError: '',
        signUpError: '',
        welcomeMessage: '',
      };
    case types.LOGIN_SUCCESSFUL:
      console.log(action);
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload,
        welcomeMessage: action.message,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
        isLoading: false,
        isLoggedIn: false,
      };
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
        isLoading: false,
        isLoggedIn: false,
      };
    case types.USER_ROLE_CHOSEN:
      console.log(action);
      return {
        ...state,
        userHasChosenRole: true,
        user: {
          id: action.id,
          role_id: action.role,
        },
      };
    case types.USER_ROLE_ERROR:
      return {
        ...state,
        userRoleError: action.error,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
  }
}

export default userReducer;
