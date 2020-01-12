import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = props => {
  const { token, ...rest } = props;

  if (!token) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
};

const mapStateToProps = state => {
  return {
    token: state.auth.token // take global state to create a prop
  };
};

export default connect(mapStateToProps)(PrivateRoute);
//inside connect: global state
//Connect() function can take a function as its first argument. This function needs to return an object of the props you would like added to the component.
