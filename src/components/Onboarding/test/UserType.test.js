import userReducer from "../../../state/reducers/authentication";
import * as types from '../../../state/actions/actionTypes'

let initialState = {
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

     it ('Error message should come up if something went wrong while user choosing role ', () => {
      
        let newRole= initialState.userRoleError = "this is an error"
       
                 
       const newState =userReducer(undefined, {
           type:types.USER_ROLE_ERROR,
           error:newRole
       });
       expect(newState.userRoleError).toEqual("this is an error")
     })

     it ('new id should be generated when new coach signs up using SET_COACH_ID', () => {
      
        let newID= initialState.user= 1
       
                 
       const newState =userReducer(undefined, {
           type:types.SET_COACH_ID,
           id:newID
       });
       expect(newState.user).toEqual({id:1})
     })

     it ('new id should be generated when new student signs up using SET_STUDENT_ID', () => {
      
        let newID= initialState.user= 1
       
                 
       const newState =userReducer(undefined, {
           type:types.SET_STUDENT_ID,
           id:newID
       });
       expect(newState.user).toEqual({id:1})
     })

     it ('When updating a password via email STARTS, it should have a loading time', () => {
      
        let loadingPassword= initialState.isLoading= true
       
                 
       const newState =userReducer(undefined, {
           type:types.UPDATE_PASSWORD_VIA_EMAIL_START,
           payload:loadingPassword
       });
       expect(newState.isLoading).toEqual(true)
     })
     it ('if password is sucessfully, a message  through payload should be sent', () => {
      
        let passwordSucessful= initialState.userUpdatedViaEmail= "email sent"
       
                 
       const newState =userReducer(undefined, {
           type:types.UPDATE_PASSWORD_VIA_EMAIL_SUCCESSFUL,
           payload:passwordSucessful
       });
       expect(newState.userUpdatedViaEmail).toEqual("email sent")
     })

     it ('if user is updating, it should have a waiting time while loading', () => {
      
        let isLoading= initialState.isLoading= true
       
                 
       const newState =userReducer(undefined, {
           type:types.USER_INFO_UPDATE,
           payload:isLoading
           
       });
       expect(newState.isLoading).toEqual(true)
     })

     it ('once an user update fails it should stop loading', () => {
      
        let stopLoading= initialState.isLoading= false
       
                 
       const newState =userReducer(undefined, {
           type:types.SER_INFO_UPDATE_FAILED,
           payload:stopLoading
           
       });
       expect(newState.isLoading).toEqual(false)
     })

     it ('users info should fecth after logged', () => {
      
        let userInfo= initialState.user= "Jose Info"
       
                 
       const newState =userReducer(undefined, {
           type:types.FECTH_USER_SUCCESSFULLY,
           payload:userInfo
           
       });
       expect(newState.user).toEqual("Jose Info")
     })

     it ('user default state should return back once logged out', () => {
      
        let userInfo= initialState.user= null
       
                 
       const newState =userReducer(undefined, {
           type:types.LOGOUT,
           payload:userInfo
           
       });
       expect(newState.user).toEqual(null)
     })

     
     it ('once user logs out user should be as false on the isLoggedIn state', () => {
      
        let UserLoggedOut= initialState.isLoggedIn= false
       
                 
       const newState =userReducer(undefined, {
           type:types.LOGOUT,
           payload:UserLoggedOut
           
       });
       expect(newState.isLoggedIn).toEqual(false)
     })

   


   
})