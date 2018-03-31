import React from 'react';
import {connect} from 'react-redux';
import  LoginForm from './login-form.js';
import  RegistrationForm from './registration-form.js';
import './modal.css';

export class Modal extends React.Component {


  render () {
    const loginStyle = {
      display: 'show'
    }

    if (this.props.ShowLoginForm === true) {
      return (
        <section style={loginStyle} className="login-modal">
        <LoginForm />
        </section>
      );
    }
    if (this.props.ShowRegistrationForm === true) {
      return (
        <section style={loginStyle} className="login-modal">
        <RegistrationForm />
        </section>
      );
    }
    else {
      return (
        <div></div>
      )
    }   
  }
}

const mapStateToProps = state => ({
  ShowLoginForm: state.userReducer.showLoginForm,
  ShowRegistrationForm: state.userReducer.showRegistrationForm,
  userLoggedIn: state.userReducer.userLoggedIn
});

export default connect(mapStateToProps)(Modal);