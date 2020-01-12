import React, { Component } from "react";
import RegisterForm from "./../forms/RegisterForm";

class RegisterPage extends Component {
  render() {
    const { history, onRegisterFormSubmit } = this.props;
    // Method 1: destructuring props from 'this.props'
    // const { history, onRegisterFormSubmit } = this.props;

    return (
      <div>
        <h1>Register a new user</h1>
        <RegisterForm
          //Method 1: pass props here
          history={history}
          onRegisterFormSubmit={onRegisterFormSubmit}
          //Method 2: use spread operator here if you simply wan to pass all the customs props
          // {...this.props}
        />
      </div>
    );
  }
}

export default RegisterPage;
