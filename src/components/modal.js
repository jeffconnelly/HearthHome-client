import React from 'react';
import {connect} from 'react-redux';
import  LoginForm from './login-form.js';


export class Modal extends React.Component {

  render () {
    console.log(this.props)

    if (this.props.showLoginForm === true) {
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