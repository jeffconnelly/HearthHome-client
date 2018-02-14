import React from 'react';
import './saved-decks.css';
import {connect} from 'react-redux';
import {getUserSavedDecks, deleteDeck} from '../actions/useractions';

export class SavedDecks extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser && !this.props.currentUser) {
      console.log(nextProps.currentUser);
      this.props.dispatch(getUserSavedDecks(nextProps.currentUser.id));
    }
  }

  render () {

    if (this.props.currentUser) {
      console.log(this.props.userSavedDecks);
    const savedDeckList = this.props.userSavedDecks.map((deck, index) => (
      <div key={index}>
      <ul key={index} className="savedDeckList">
      {' '}{deck.cards}{' '}
      </ul>
      <button onClick={() => this.props.dispatch(deleteDeck(this.props.currentUser.id, deck._id, this.props.userSavedDecks))}>Delete</button>
      </div>
    ));

    return (
      <section className="saved-decks-section">
        <h1>Saved Decks Section</h1>
        <h2>Your saved decks</h2>
        <div className="saved-decks-wrapper"> {savedDeckList} </div>
      </section>
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
  userSavedDecks: state.userReducer.userSavedDecks,
});

export default connect(mapStateToProps)(SavedDecks);

