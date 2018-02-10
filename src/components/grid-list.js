import React from 'react';
import {connect} from 'react-redux';
import {fetchAllCards} from '../actions/cardcalls';
import './grid-list.css';

export class GridList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllCards());
  }


render () {

  const cardList = this.props.cards.map((card, index) => (
    // console.log(card.img)
    <li className="list-wrapper" key={index} name={card.name}>
      <img src={card.img} class="card-img"/>
    </li>
  ));

console.log(this.props.cards);
  return (
    <div class="grid-container">
    <ul className="grid-section">{cardList}</ul>
    </div>
  );

  }
}

const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(mapStateToProps)(GridList);