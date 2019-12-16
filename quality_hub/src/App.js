import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Route path="/login/" component={LoginForm} />
      <Route path="/dashboard" component={Dashboard} />
    </>
  );
}

export default connect(state => state)(App);
