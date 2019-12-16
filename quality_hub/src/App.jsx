import React from "react";
import LoginForm from "./components/LoginForm";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Route path="/login/" component={LoginForm} />
      <Route path="/dashboard" component={Dashboard} />
    </>
  );
}

export default connect(state => state)(App);
