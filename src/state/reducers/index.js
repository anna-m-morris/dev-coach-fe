import { combineReducers } from 'redux';
// import your reducers here
import userReducer from './authentication';
import appointmentsReducer from './appointments';
import bookingReducer from './booking';
import notificationsReducer from './notifications';
import * as faqReducers from './faqReducers';

const appReducer = combineReducers({
  // add your reducers here
  userReducer,
  appointmentsReducer,
  bookingReducer,
  notificationsReducer,
  faqTextState1: faqReducers.faqShowTextReducer1,
  faqTextState2: faqReducers.faqShowTextReducer2,
  faqTextState3: faqReducers.faqShowTextReducer3,
  faqImageState1: faqReducers.faqShowImageReducer1,
  faqImageState2: faqReducers.faqShowImageReducer2,
  faqImageState3: faqReducers.faqShowImageReducer3,
});

/* const rootReducer = (state, action) => {
  //clears state on logout
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
}; */

export default appReducer;
