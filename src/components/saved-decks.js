import React from 'react';
import './saved-decks.css';
import {connect} from 'react-redux';

export class SavedDecks extends React.Component {

  render () {

    console.log(this.props)

    if (this.props.currentUser !== null) {
      return (
        <div className="saved-decks-section">
        <h1>Saved Decks Section</h1>
        <h2>You can now save your decks - Woot!</h2>

      </div>
      )
    }
    else {
      return (
        <div className="saved-decks-section">
          <h1>Saved Decks Section</h1>
          <h2>Login to save your decks!</h2>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser,
});

export default connect(mapStateToProps)(SavedDecks);