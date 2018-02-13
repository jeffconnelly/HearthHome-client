import React from 'react';
import {connect} from 'react-redux';
import  LoginForm from './login-form.js';
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

    else {
      return (
        <div></div>
      )
    }   
  }
}

const mapStateToProps = state => ({
  ShowLoginForm: state.userReducer.showLoginForm,
  userLoggedIn: state.userReducer.userLoggedIn
});

export default connect(mapStateToProps)(Modal);