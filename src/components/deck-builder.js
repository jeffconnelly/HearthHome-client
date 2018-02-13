import React from 'react';
import './deck-builder.css';
import {connect} from 'react-redux';
import {addDeck} from '../actions/useractions';

export class DeckBuilder extends React.Component {

render () {

  const dbCardList = this.props.dbcards.map((card, index) => (
    <li key={index} className="list-wrapper">{card}</li>
  ));

  if (this.props.currentUser !== null) {
    return (
      <section className="deck-builder-wrapper">Deck Builder
      <ul className="db-cards-wrapper">
      <li className="db-card">{dbCardList} </li>
      </ul>
      <button onClick={() => this.props.dispatch(addDeck(this.props.dbcards, this.props.currentUser.id))}>Save Deck </button>
      </section>
    );
  }

  else return (
    <section className="deck-builder-wrapper">Deck Builder
    <ul className="db-cards-wrapper">
    <li className="db-card">{dbCardList} </li>
    </ul>
    </section>
    );
  }
}

const mapStateToProps = state => ({
  dbcards: state.cardReducer.dbcards,
  currentUser: state.authReducer.currentUser,
});

export default connect(mapStateToProps)(DeckBuilder);

