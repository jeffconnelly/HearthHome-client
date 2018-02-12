import React from 'react';
import {connect} from 'react-redux';
import  LoginForm from './login-form.js';


export class Modal extends React.Component {

  render () {
    console.log(this.props.ShowLoginForm);

    if (this.props.ShowLoginForm === true) {
      return (
        <LoginForm />
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