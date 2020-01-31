import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { connect } from 'react-redux';
import LoginForm from './components/Onboarding/LoginForm';
import ResetPasswordForm from './components/Onboarding/ResetPasswordForm';
import AccountRecovery from './components/Onboarding/AccountRecovery';
import Dashboard from './components/Dashboard';
import UserDashboard from './views/UserDashboard/UserDashboard';
import Marketplace from './views/Marketplace/Marketplace';
import Landing from './components/Landing/Landing-2';
import MainFaq from './components/FAQ/Main';
import LandingFaq from './components/FAQ/LandingFaq';
import Booking from './components/Booking/Booking';
import Reschedule from './components/Reschedule/Reschedule';
import Feedback from './views/Feedback/Feedback';
import VideoChat from './components/Video/VideoChat';
import Chat from './components/Chat/ChatScreen';
// import Chati from './components/Chati/App';

import StartChat from './components/Chat/Chat';
// import StartChat from './components/Chati/StartChat';

import Settings from './views/Settings/Settings';
import SignUp from './components/Onboarding/SignupStepper';
import Code from './views/Code/Code';
import GiveFeedback from './views/Feedback/GiveFeedback';

const globalTheme = createMuiTheme({
  typography: {
    fontFamily: ['Ubuntu', 'Abeezee'].join(','),
  },
});

function App({ user, isLoggedIn }) {
  const routes = (
    <Switch>
      <Route path={'/dashboard'} component={UserDashboard} />
      {user && user.role_id === 1 ? (
        <Route path={'/marketplace'} component={Marketplace} />
      ) : null}
      <Route path={'/appointment'} component={Booking} />
      <Route path={'/reschedule'} component={Reschedule} />
      <Route path={'/feedback'} component={Feedback} />
      <Route path={'/video'} component={VideoChat} />
      <Route path={'/Settings'} component={Settings} />
      <Route path={'/FAQ'} component={MainFaq} />
      {user && user.role_id === 1 ? (
        <Route path={'/start_chat'} component={StartChat} />
      ) : null}
      <Route path={'/chat'} component={Chat} />
      <Route path={'/code'} component={Code} />
      <Route path={'/givefeedback'} component={GiveFeedback} />
      <Redirect to='/dashboard' />
    </Switch>
  );

  if (isLoggedIn) {
    return (
      <ThemeProvider theme={globalTheme}>
        <Dashboard routes={routes} />
      </ThemeProvider>
    );
  }

  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/login/' component={LoginForm} />
      <Route path='/resetPassword' component={ResetPasswordForm} />
      <Route
        path='/accountRecovery/:token'
        component={AccountRecovery}
      />
      <Route path='/register' component={SignUp} />
      <Route path='/faq' component={LandingFaq} />
      <Route path={'/video'} component={VideoChat} />
      <Redirect to='/' />
    </Switch>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    isLoggedIn: state.userReducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
