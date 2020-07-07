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


describe ('FaqReducers that toggles images and text on FQA/General Page', () => {
    it('should return default state', () => {
        const newState = faqReducer(undefined,{});
        expect(newState).toEqual(initialState);
    })
   it ('should return a new state if receiving type TOGGLE_TEXT_1 -in order to test text toggles on FAQ Page', () => {
       const toggleText1 = initialState.text1 = true
       const updatedInitialState = initialState

      const newState =faqReducer(undefined, {
          type:types.TOGGLE_TEXT_1,
          payload:toggleText1
      });
      expect(newState.text1).toEqual(updatedInitialState.text1)
    })

    it ('should return a new state if receiving type TOGGLE_TEXT_2 - in order to test text toggles on FAQ Page', () => {
        const toggleText2 = initialState.text2 = true
        const updatedInitialState = initialState
       const newState =faqReducer(undefined, {
           type:types.TOGGLE_TEXT_2,
           payload:toggleText2
       });
       expect(newState.text2).toEqual(updatedInitialState.text2)
     })
     it ('should return a new state if receiving type TOGGLE_TEXT_3 - in order to test text toggles on FAQ Page', () => {
        const toggleText3 = initialState.text3 = true
        const updatedInitialState = initialState
        
       const newState =faqReducer(undefined, {
           type:types.TOGGLE_TEXT_3,
           payload:toggleText3
       });
       expect(newState.text3).toEqual(updatedInitialState.text3)
     })

     it ('should return a new state if receiving type TOGGLE_TEXT_4 - in order to test text toggles on FAQ Page', () => {
        const toggleText4 = initialState.text4 = true
        const updatedInitialState = initialState
 
       const newState =faqReducer(undefined, {
           type:types.TOGGLE_TEXT_4,
           payload:toggleText4
       });
       expect(newState.text4).toEqual(updatedInitialState.text4)
     })

     it ('should return a new state if receiving type TOGGLE_TEXT_4 - in order to test text toggles on FAQ Page', () => {
        const toggleText4 = initialState.text4 = true
        const updatedInitialState = initialState
 
       const newState =faqReducer(undefined, {
           type:types.TOGGLE_TEXT_4,
           payload:toggleText4
       });
       expect(newState.text4).toEqual(updatedInitialState.text4)
     })

     it ('should return a new state if receiving type TOGGLE_TEXT_5 - in order to test text toggles on FAQ Page', () => {
        const toggleText5 = initialState.text5 = true
        const updatedInitialState = initialState
 
       const newState =faqReducer(undefined, {
           type:types.TOGGLE_TEXT_5,
           payload:toggleText5
       });
       expect(newState.text5).toEqual(updatedInitialState.text5)
     })

     it ('should return a new state if receiving type TOGGLE_IMAGE_1 - in order to test image toggles on FAQ Page', () => {
        const toggleImage1 = initialState.image1 = false
        const updatedInitialState = initialState
 
       const newState =faqReducer(undefined, {
           type:types.TOGGLE_IMAGE_1,
           payload:toggleImage1
       });
       expect(newState.image1).toEqual(updatedInitialState.image1)
     })

     it ('should return a new state if receiving type TOGGLE_IMAGE_2 - in order to test image toggles on FAQ Page', () => {
        const toggleImage1 = initialState.image1 = false
        const updatedInitialState = initialState
 
       const newState =faqReducer(undefined, {
           type:types.TOGGLE_IMAGE_1,
           payload:toggleImage1
       });
       expect(newState.image1).toEqual(updatedInitialState.image1)
     })

     it ('should return a new state if receiving type TOGGLE_IMAGE_2 - in order to test image toggles on FAQ Page', () => {
        const toggleImage2 = initialState.image2 = false
        const updatedInitialState = initialState
 
       const newState =faqReducer(undefined, {
           type:types.TOGGLE_IMAGE_2,
           payload:toggleImage2
       });
       expect(newState.image2).toEqual(updatedInitialState.image2)
     })
     it ('should return a new state if receiving type TOGGLE_IMAGE_3 - in order to test image toggles on FAQ Page', () => {
        const toggleImage3 = initialState.image3 = false
        const updatedInitialState = initialState
 
       const newState =faqReducer(undefined, {
           type:types.TOGGLE_IMAGE_3,
           payload:toggleImage3
       });
       expect(newState.image3).toEqual(updatedInitialState.image3)
     })

     it ('should return a new state if receiving type TOGGLE_IMAGE_4 - in order to test image toggles on FAQ Page', () => {
        const toggleImage4 = initialState.image4 = false
        const updatedInitialState = initialState
 
       const newState =faqReducer(undefined, {
           type:types.TOGGLE_IMAGE_4,
           payload:toggleImage4
       });
       expect(newState.image4).toEqual(updatedInitialState.image4)
     })
     it ('should return a new state if receiving type TOGGLE_IMAGE_5 - in order to test image toggles on FAQ Page', () => {
        const toggleImage5 = initialState.image5 = false
        const updatedInitialState = initialState
 
       const newState =faqReducer(undefined, {
           type:types.TOGGLE_IMAGE_5,
           payload:toggleImage5
       });
       expect(newState.image5).toEqual(updatedInitialState.image5)
     })
})