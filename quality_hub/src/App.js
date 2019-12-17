import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './utils/PrivateRoute';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Route path="/login/" component={LoginForm} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </>
  );
}

export default connect(state => state)(App);
