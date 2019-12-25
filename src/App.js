import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';
import LoginForm from './components/Forms/LoginForm';
import SignUpForm from './components/Forms/SignUpForm';
import Dashboard from './components/Dashboard';
import Marketplace from './components/Marketplace';
import Landing from './components/Landing';
import InterviewerForm from './components/Forms/InterviewerForm';
import StudentForm from './components/Forms/StudentForm';
import UserTypePage from './components/UserType/UserTypePage';
import UserDashboard from './views/UserDashboard/UserDashboard';

function App(props) {
  const routes = (
    <Switch>
      <PrivateRoute path={"/dashboard"} component={UserDashboard} />
      <PrivateRoute path={"/marketplace"} component={Marketplace} />
    </Switch>
  )
  return (
    <>
      <Route exact path='/' component={Landing} />
      <Route path='/login/' component={LoginForm} />
      <Route path='/register' component={SignUpForm} />
      <Route path='/interviewer' component={InterviewerForm} />
      <Route path='/student' component={StudentForm} />
      <Route path='/user/type' component={UserTypePage} />
      <PrivateRoute path='/dashboard' component={<Dashboard
          {...props}
        routes = {routes}
        />}/>
    </>
  );
}

export default connect(state => state)(App);
