import * as types from '../actions/actionTypes';

const initialState = {
  user: null,
  loginError: '',
  signUpError: '',
  isLoading: false,
  isLoggedIn: false,
  userHasChosenRole: false,
  userRole: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload,
      };
    case types.LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    default:
      return state;
    case types.USER_ROLE_CHOSEN:
      console.log(action);
      return {
        ...state,
        userHasChosenRole: true,
        userRole: action.role,
      };
  }
}

export default userReducer;
