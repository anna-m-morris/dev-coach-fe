export const TOGGLE_TEXT_1 = 'TOGGLE_TEXT_1';
export const TOGGLE_TEXT_2 = 'TOGGLE_TEXT_2';
export const TOGGLE_TEXT_3 = 'TOGGLE_TEXT_3';

export const TOGGLE_IMAGE_1 = 'TOGGLE_IMAGE_1';
export const TOGGLE_IMAGE_2 = 'TOGGLE_IMAGE_2';
export const TOGGLE_IMAGE_3 = 'TOGGLE_IMAGE_3';

export function showText1() {
  return { type: TOGGLE_TEXT_1 };
}

export function showText2() {
  return { type: TOGGLE_TEXT_2 };
}

export function showText3() {
  return { type: TOGGLE_TEXT_3 };
}

export function showImage1() {
  return { type: TOGGLE_IMAGE_1 };
}

export function showImage2() {
  return { type: TOGGLE_IMAGE_2 };
}

export function showImage3() {
  return { type: TOGGLE_IMAGE_3 };
}
