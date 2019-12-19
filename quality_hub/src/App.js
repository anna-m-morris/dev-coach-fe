import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './utils/PrivateRoute';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import StudentForm from './components/StudentForm';

function App() {
  return (
    <>
      <Route exact path='/' component={Landing} />
      <Route path='/login/' component={LoginForm} />
      <Route path='/register/' component={SignUpForm} />
      <Route path='/student/' component={StudentForm} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
    </>
  );
}

export default connect(state => state)(App);
