import appointmentReducer from "../appointments";
import * as types from '../../actions/appointmentActions';

const initialState = {
    appointments: null,
    error: '',
    isLoading: false,
    rescheduler: '',
  };

describe ('appointmentReducer reducer and appointmentActions', () => {
    it('should return default state', () => {
        const newState = appointmentReducer(undefined,{});
        expect(newState).toEqual(initialState);
    })

    it ('GET_FEEDBACK_START should change state', () => {
        const appointmentStart = initialState.isLoading = true
        const updatedInitialState = initialState
 
       const newState =appointmentReducer(undefined, {
           type:types.APPOINTMENTS_START,
           payload:appointmentStart
       });
       expect(newState.isLoading).toEqual(updatedInitialState.isLoading)
     })

  
})