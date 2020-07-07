import faqReducer from "../../../state/reducers/faqReducers";
import * as types from '../../../state/actions/faqActions';

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


describe ('FaqReducers', () => {
    it('should return default state', () => {
        const newState = faqReducer(undefined,{});
        expect(newState).toEqual(initialState);
    })
   it ('should return a new state if receiving type TOGGLE_TEXT_1 in order to test toggles', () => {
       const toggleText1 = initialState.text1 = true
       const updatedInitialState = initialState

      const newState =faqReducer(undefined, {
          type:types.TOGGLE_TEXT_1,
          payload:toggleText1
      });
      expect(newState).toEqual(updatedInitialState)
    })
})