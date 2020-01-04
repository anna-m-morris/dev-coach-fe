import { combineReducers } from 'redux';
// import your reducers here
import userReducer from './authentication';
import appointmentsReducer from './appointments';
import bookingReducer from './booking';
import notificationsReducer from './notifications';

const appReducer = combineReducers({
  // add your reducers here
  userReducer,
  appointmentsReducer,
  bookingReducer,
  notificationsReducer,
});

/* const rootReducer = (state, action) => {
  //clears state on logout
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
}; */

export default appReducer;
