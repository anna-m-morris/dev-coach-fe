import * as types from '../actions/feedbackActions';

const initialState = {
  feedback: null,
};

function feedback(state = initialState, action) {
  switch (action.type) {
    // case types.TOGGLE_IMAGE_3:
    //   return {
    //     ...state,
    //     image3: !state.image3,
    //   };
    default:
      return state;
  }
}

export default feedback;
