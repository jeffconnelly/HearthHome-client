import React from 'react';
import './navbar.css';
import {Link, Redirect} from 'react-router-dom';


export default function NavBar(props) {
  return (
    <div className="navbar">
      <ul className="nav-bar-ul">
      <li className="login-text" href="#" onClick={() => console.log('clicked')}>Login</li>
      </ul>
    </div>
  )

}