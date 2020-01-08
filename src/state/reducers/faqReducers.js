import * as types from '../actions/faqActions';

// const initialTextState = false;

// const initialImageState = true;

// export function faqShowTextReducer1(
//   state = initialTextState,
//   action,
// ) {
//   switch (action.type) {
//     case types.TOGGLE_TEXT_1:
//       return !state;
//     default:
//       return state;
//   }
// }

// export function faqShowTextReducer2(
//   state = initialTextState,
//   action,
// ) {
//   switch (action.type) {
//     case types.TOGGLE_TEXT_2:
//       return !state;
//     default:
//       return state;
//   }
// }

// export function faqShowTextReducer3(
//   state = initialTextState,
//   action,
// ) {
//   switch (action.type) {
//     case types.TOGGLE_TEXT_3:
//       return !state;
//     default:
//       return state;
//   }
// }

const initialState = {
  text1: false,
  text2: false,
  text3: false,
  image1: true,
  image2: true,
  image3: true,
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
    default:
      return state;
  }
}

export default faqReducer;

// export function faqShowImageReducer1(
//   state = initialImageState,
//   action,
// ) {
//   switch (action.type) {
//     case types.TOGGLE_IMAGE_1:
//       return !state;
//     default:
//       return state;
//   }
// }

// export function faqShowImageReducer2(
//   state = initialImageState,
//   action,
// ) {
//   switch (action.type) {
//     case types.TOGGLE_IMAGE_2:
//       return !state;
//     default:
//       return state;
//   }
// }

// export function faqShowImageReducer3(
//   state = initialImageState,
//   action,
// ) {
//   switch (action.type) {
//     case types.TOGGLE_IMAGE_3:
//       return !state;
//     default:
//       return state;
//   }
// }
