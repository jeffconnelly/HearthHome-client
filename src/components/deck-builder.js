import React from 'react';
import './deck-builder.css';
import {connect} from 'react-redux';


export class DeckBuilder extends React.Component {



render () {
  if (this.props.dbcards) {
    console.log(this.props.dbcards);
  }
  return (
    <section className="deck-builder-wrapper">Deck Builder
    
    <li>{this.props.dbcards}</li>
    
    </section>
  );

  }
}


const mapStateToProps = state => ({
  dbcards: state.dbcards
});

export default connect(mapStateToProps)(DeckBuilder);




