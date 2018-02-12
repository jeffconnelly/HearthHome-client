import React from 'react';
import './deck-builder.css';
import {connect} from 'react-redux';


export class DeckBuilder extends React.Component {

render () {

  const dbCardList = this.props.dbcards.map((card, index) => (
    <li className="list-wrapper">{card}</li>
  ));

  return (
    <section className="deck-builder-wrapper">Deck Builder
    
    <ul className="db-cards-wrapper">
    <li className="db-card">{dbCardList} </li>
    </ul>
    
    </section>
  );

  }
}


const mapStateToProps = state => ({
  dbcards: state.dbcards
});

export default connect(mapStateToProps)(DeckBuilder);

