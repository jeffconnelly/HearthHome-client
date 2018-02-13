import React from 'react';
import './navbar.css';
import {showLoginForm } from '../actions/useractions';
import {connect} from 'react-redux';

export class NavBar extends React.Component {

  render () {
    console.log(this.props)
    return (
      <div className="navbar">
        <ul className="nav-bar-ul">
        <li className="login-text" href="#" onClick={() => this.props.dispatch(showLoginForm())}>Login</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ShowLoginForm: state.userReducer.showLoginForm,
  userLoggedIn: state.userReducer.userLoggedIn
});

export default connect(mapStateToProps)(NavBar);