import * as types from '../actions/faqActions';

const initialTextState = false;

const initialImageState = true;

export function faqShowTextReducer1(
  state = initialTextState,
  action,
) {
  switch (action.type) {
    case types.TOGGLE_TEXT_1:
      return !state;
    default:
      return state;
  }
}

export function faqShowTextReducer2(
  state = initialTextState,
  action,
) {
  switch (action.type) {
    case types.TOGGLE_TEXT_2:
      return !state;
    default:
      return state;
  }
}

export function faqShowTextReducer3(
  state = initialTextState,
  action,
) {
  switch (action.type) {
    case types.TOGGLE_TEXT_3:
      return !state;
    default:
      return state;
  }
}

export function faqShowImageReducer1(
  state = initialImageState,
  action,
) {
  switch (action.type) {
    case types.TOGGLE_IMAGE_1:
      return !state;
    default:
      return state;
  }
}

export function faqShowImageReducer2(
  state = initialImageState,
  action,
) {
  switch (action.type) {
    case types.TOGGLE_IMAGE_2:
      return !state;
    default:
      return state;
  }
}

export function faqShowImageReducer3(
  state = initialImageState,
  action,
) {
  switch (action.type) {
    case types.TOGGLE_IMAGE_3:
      return !state;
    default:
      return state;
  }
}
