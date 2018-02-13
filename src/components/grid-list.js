import React from 'react';
import {connect} from 'react-redux';
import {fetchAllCards} from '../actions/cardcalls';
import {addCardToBuilder} from '../actions/deckactions';
import './grid-list.css';

export class GridList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllCards());
  }

render () {
  const cardList = this.props.cards.map((card, index) => (
    <li onClick={() => this.props.dispatch(addCardToBuilder(card.name))} className="grid-wrapper" key={index} name={card.name}>
      <img src={card.img} className="card-img" alt={card.name}/>
    </li>
  ));

  return (
    <div className="grid-container">
    <ul className="grid-section">{cardList}</ul>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cardReducer.cards
});

export default connect(mapStateToProps)(GridList);