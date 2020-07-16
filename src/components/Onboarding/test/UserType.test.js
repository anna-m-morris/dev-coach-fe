import userReducer from "../../../state/reducers/authentication";
import * as types from '../../../state/actions/actionTypes'

const initialState = {
    user: null,
  loginError: '',
  signUpError: '',
  isLoading: false,
  isLoggedIn: false,
  welcomeMessage: '',
  userHasChosenRole: false,
  userRoleError: '',
  userUpdated: false,
  userUpdatedViaEmail: '',
  userUpdateError: '',
  };


describe ('userReducer that helps new user to join while registering', () => {
    it('userReducer should return default state everything a new user tries to signup', () => {
        const newState = userReducer(undefined,{});
        expect(newState).toEqual(initialState);
    })


    it ('userReducer should switch to load while waiting on creating a new user', () => {
       const whileLoading = initialState.isLoading = true
       const updatedInitialState = initialState

      const newState =userReducer(undefined, {
          type:types.SET_ROLE_ID_START,
          payload:whileLoading
      });
      expect(newState.isLoading).toEqual(updatedInitialState.isLoading)
    })

    it ('userReducer should stop loading and set a role id once done', () => {
      
        const newRoleId = initialState.user= 1
        
 
       const newState =userReducer(undefined, {
           type:types.SET_ROLE_ID,
           payload:newRoleId
       });
       expect(newState.user).toEqual({role_id:1})
     })

     it ('Once UserReducer starts Logging in it should start loading and reset initial welcome message', () => {
      
        let whileLoggingin = initialState.welcomeMessage = ""
                 
       const newState =userReducer(undefined, {
           type:types.LOGIN_START,
           payload:whileLoggingin
       });
       expect(newState.welcomeMessage).toEqual(whileLoggingin)
     })

     it ('Once UserReducer logs in the user, isLoggedIn should be true', () => {
      
        const loggedin = initialState.isLoggedIn = true
                 
       const newState =userReducer(undefined, {
           type:types.LOGIN_SUCCESSFUL,
           payload:loggedin
       });
       expect(newState.isLoggedIn).toEqual(true)
     })

     it ('if user was not able to login isLoggedin Will be false', () => {
      
        const notLoggedin = initialState.isLoggedIn = false
                 
       const newState =userReducer(undefined, {
           type:types.LOGIN_ERROR,
           payload:notLoggedin
       });
       expect(newState.isLoggedIn).toEqual(false)
     })

     it ('Once signUp starts isLoading will be true to show user a loading message', () => {
      
        const singningUp = initialState.isLoading = true
                 
       const newState =userReducer(undefined, {
           type:types.SIGN_UP_START,
           payload:singningUp
       });
       expect(newState.isLoading).toEqual(true)
     })

     it ('Once signUp is finished a new user info would be save to user', () => {
      
        const signedUp = initialState.user = 'jose'
                 
       const newState =userReducer(undefined, {
           type:types.SIGN_UP_SUCCESSFUL,
           payload:signedUp
       });
       expect(newState.user).toEqual('jose')
     })

     
     it ('If signed up failed user will not get logged in', () => {
      
        const notSignedup = initialState.isLoggedIn = false
                 
       const newState =userReducer(undefined, {
           type:types.SIGN_UP_ERROR,
           payload:notSignedup
       });
       expect(newState.isLoggedIn).toEqual(false)
     })

     it ('if user stars a new role it would load first', () => {
      
        const newRoleLoading = initialState.isLoading = true
                 
       const newState =userReducer(undefined, {
           type:types.USER_ROLE_START,
           payload:newRoleLoading
       });
       expect(newState.isLoading).toEqual(true)
     })

   


   
})