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

    // const cardList = this.props.cards.map((card, index) => (
    //   <li onClick={() => this.props.dispatch(addCardToBuilder(card.name))} className="grid-wrapper" key={index} name={card.name}>
    //     <img src={card.img} className="card-img" alt={card.name}/>
    //   </li>
    // ));
    // console.log(deck.cards)
    if (this.props.currentUser) {
      console.log(this.props.userSavedDecks);
    const savedDeckList = this.props.userSavedDecks.map((deck, index) => (
      <div key={index} className="saved-deck">Deck # {index + 1}
      <ul className="saved-deck-list">
      {deck.cards.map((card, index) => ( <li key={index} className="saved-deck-card">{card}</li> ))}
      </ul>
      <button onClick={() => this.props.dispatch(deleteDeck(this.props.currentUser.id, deck._id, this.props.userSavedDecks))}>Delete</button>
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

