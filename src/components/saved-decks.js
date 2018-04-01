import React from 'react';
import './saved-decks.css';
import {connect} from 'react-redux';
import {getUserSavedDecks, deleteDeck} from '../actions/useractions';
import {hideRegistrationForm} from '../actions/useractions';

export class SavedDecks extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser && !this.props.currentUser) {
      console.log(nextProps.currentUser);
      this.props.dispatch(getUserSavedDecks(nextProps.currentUser.id));
      this.props.dispatch(hideRegistrationForm());
    }
  }

  render () {
    if (this.props.currentUser) {
      console.log(this.props.userSavedDecks);
      const savedDeckList = this.props.userSavedDecks.map((deck, index) => (
      <div key={index} className="saved-deck">
      <h2 className="saved-deck-header">Deck # {index + 1}</h2>
      <ul className="saved-deck-list">
      {deck.cards.map((card, index) => ( <li key={index} className="saved-deck-card">{card}</li> ))}
      </ul>
      <button className="delete-btn" onClick={() => this.props.dispatch(deleteDeck(this.props.currentUser.id, deck._id, this.props.userSavedDecks))}>Delete</button>
      </div>    
    ));

    return (
      <section className="saved-decks-section">
      <h1 className="saved-decks-header">Saved Decks</h1>
      <hr className="hr-line"></hr>
        <div className="saved-decks-wrapper"> {savedDeckList} </div>
      </section>
      )
    }
    else {
      return (
        <div className="saved-decks-section">
        <h1 className="saved-decks-header">Saved Decks </h1>
        <hr className="hr-line"></hr>
          <h2 className="saved-decks-sub-header">Login to save your decks!</h2>
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

