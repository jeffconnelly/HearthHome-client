import React from 'react';
import './header.css';

export default function Header(props) {
  return (
    <div className="header">
      <div className="header-wrapper">
      <h1 className="header-text">HearthHome</h1>
      <h2 className="header-sub">Your Hearthstone Card Database and Deck Builder Site</h2>
      </div>
    </div>
  )
}