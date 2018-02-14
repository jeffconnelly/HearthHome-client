import React from 'react';
import './deck-builder.css';
import {connect} from 'react-redux';
import {addDeck, removeDbCards} from '../actions/useractions';

export class DeckBuilder extends React.Component {

render () {

  console.log(this.props.userSavedDecks);

  const dbCardList = this.props.dbcards.map((card, index) => (
    <li key={index} className="list-wrapper">{card}</li>
  ));

  if (this.props.currentUser !== null) {
    return (
      <section className="deck-builder-wrapper">
      <h1 className="db-header">Deck Builder</h1>
      <hr class = "hr-line"></hr>
      <ul className="db-cards-wrapper">
      <li className="db-card">{dbCardList} </li>
      </ul>
      <div className="db-btn">
      <button onClick={() => this.props.dispatch(addDeck(this.props.dbcards, this.props.currentUser.id))}>
      Save Deck 
      </button>
      </div>
      <div className="db-btn">
      <button onClick={() => this.props.dispatch(removeDbCards())}>
      Clear
      </button>
      </div>
      </section>
    );
  }

  else return (
    <section className="deck-builder-wrapper">
    <h1 className="db-header">Deck Builder</h1>
    <hr class = "hr-line"></hr>
    <ul className="db-cards-wrapper">
    {dbCardList}
    </ul>
    <div className="db-btn">
    <button onClick={() => this.props.dispatch(removeDbCards())}>
      Clear
    </button>
    </div>
    </section>
    );
  }
}

const mapStateToProps = state => ({
  dbcards: state.cardReducer.dbcards,
  currentUser: state.authReducer.currentUser,
  userSavedDecks: state.userReducer.userSavedDecks,
});

export default connect(mapStateToProps)(DeckBuilder);

