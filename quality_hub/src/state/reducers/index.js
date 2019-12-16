import { combineReducers } from "redux";
// import your reducers here

const initialState = {
  title: "Test state"
}

const initialReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

const appReducer = combineReducers({
  // add your reducers here
  initialReducer,
});

/* const rootReducer = (state, action) => {
  //clears state on logout
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
}; */

export default appReducer;
