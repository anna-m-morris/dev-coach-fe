import feedbackReducer from "../feedback";
import * as types from '../../actions/feedbackActions';

const initialState = {
    feedback: null,
    idRole: null,
    giveFeedback: null,
    rating: 3,
    isLoading: false,
    error: null,
  };

describe ('feedbackReducer reducer and feedbackActions', () => {
    it('should return default state', () => {
        const newState = feedbackReducer(undefined,{});
        expect(newState).toEqual(initialState);
    })

    it ('GET_FEEDBACK_START should change state', () => {
        const GETFEEDBACKSTART = initialState.isLoading = true
        const updatedInitialState = initialState
 
       const newState =feedbackReducer(undefined, {
           type:types.GET_FEEDBACK_START,
           payload:GETFEEDBACKSTART
       });
       expect(newState.isLoading).toEqual(updatedInitialState.isLoading)
     })

     it ('GET_FEEDBACK_SUCCESSFUL should get a feedback message', () => {
        const GETFEEDBACKSUCCESSFUL = initialState.feedback = "Great work team"
        const updatedInitialState = initialState
 
       const newState =feedbackReducer(undefined, {
           type:types.GET_FEEDBACK_SUCCESSFUL,
           payload:GETFEEDBACKSUCCESSFUL
       });
       expect(newState.feedback).toEqual(updatedInitialState.feedback)
     })
     it ('GET_FEEDBACK_ERROR should an error message message', () => {
        const noFeedback = initialState.error = "no feedback sorry"
        const updatedInitialState = initialState
 
       const newState =feedbackReducer(undefined, {
           type:types.GET_FEEDBACK_ERROR,
           payload:{error:noFeedback}
           
       });
       expect(newState.error.error).toEqual("no feedback sorry")
     })
  
})