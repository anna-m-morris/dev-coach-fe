import * as types from '../actions/faqActions';

const initialState = {
  text1: false,
  text2: false,
  text3: false,
  text4: false,
  text5: false,
  image1: true,
  image2: true,
  image3: true,
  image4: true,
  image5: true,
};

function faqReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_TEXT_1:
      return {
        ...state,
        text1: !state.text1,
      };

    case types.TOGGLE_TEXT_2:
      return {
        ...state,
        text2: !state.text2,
      };
    case types.TOGGLE_TEXT_3:
      return {
        ...state,
        text3: !state.text3,
      };

    case types.TOGGLE_TEXT_4:
      return {
        ...state,
        text4: !state.text4,
      };

    case types.TOGGLE_TEXT_5:
      return {
        ...state,
        text5: !state.text5,
      };

    case types.TOGGLE_IMAGE_1:
      return {
        ...state,
        image1: !state.image1,
      };

    case types.TOGGLE_IMAGE_2:
      return {
        ...state,
        image2: !state.image2,
      };

    case types.TOGGLE_IMAGE_3:
      return {
        ...state,
        image3: !state.image3,
      };

    case types.TOGGLE_IMAGE_4:
      return {
        ...state,
        image4: !state.image4,
      };

    case types.TOGGLE_IMAGE_5:
      return {
        ...state,
        image5: !state.image5,
      };
    default:
      return state;
  }
}

export default faqReducer;
