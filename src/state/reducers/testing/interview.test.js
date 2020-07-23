import interviewReducer from "../interview";
import * as types from '../../actions/appointmentActions';


const initialState = {
    peerId: null,
  };


describe ('interviewReducer ', () => {
    it('should return default state', () => {
        const newState = interviewReducer(undefined,{});
        expect(newState).toEqual(initialState);
    })

    it ('FINISH_INTERVIEW_SUCCESS should change state', () => {
        
       const newState =interviewReducer(undefined, {
           type:types.FINISH_INTERVIEW_SUCCESS,
           payload:initialState
       });
       expect(newState).toEqual(initialState)
     })

  
})