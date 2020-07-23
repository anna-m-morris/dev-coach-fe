import bookingreducer from "../booking";
import * as types from '../../actions/bookingActions';

const initialState = {
    coach: null,
    date: null,
    select: {},
    error: '',
    success: '',
    isLoading: false,
    rescheduled_coach: '',
  };

describe ('booking reducer', () => {
    it('should return default state', () => {
        const newState = bookingreducer(undefined,{});
        expect(newState).toEqual(initialState);
    })

    it ('STRIPE_PAYMENT_START should change state', () => {
        const strippaymentStarts = initialState.isLoading = true
        const updatedInitialState = initialState
 
       const newState =bookingreducer(undefined, {
           type:types.STRIPE_PAYMENT_START,
           payload:strippaymentStarts
       });
       expect(newState.isLoading).toEqual(updatedInitialState.isLoading)
     })

     it ('STRIPE_PAYMENT_ERROR should an error message message', () => {
        const stripeerror = initialState.error = "no feedback sorry"
        const updatedInitialState = initialState
 
       const newState =bookingreducer(undefined, {
           type:types.STRIPE_PAYMENT_ERROR,
           payload:{error:stripeerror}
           
       });
       expect(newState.error.error).toEqual(updatedInitialState.error)
     })

     it ('STRIPE_PAYMENT_SUCCESSFUL should stop the loading', () => {
        const stringNonloadinmg = initialState.isLoading = false
        const updatedInitialState = initialState
 
       const newState =bookingreducer(undefined, {
           type:types.STRIPE_PAYMENT_SUCCESSFUL,
           payload:stringNonloadinmg
           
       });
       expect(newState.isLoading).toEqual(updatedInitialState.isLoading)
     })

     
     it ('Save coach save new coach', () => {
        const newCoach = initialState.coach = "jose"
        const updatedInitialState = initialState
 
       const newState =bookingreducer(undefined, {
           type:types.SAVE_COACH,
           payload:{coach:newCoach}
           
       });
       expect(newState.coach.coach).toEqual(updatedInitialState.coach)
     })

  
})