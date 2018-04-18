import React from 'react';
import './deck-builder.css';
import {connect} from 'react-redux';
import {addDeck, removeDbCards} from '../actions/useractions';

export class DeckBuilder extends React.Component {

render () {

  //Working on function to restrict each card to 2x.
  // let newArr = this.props.dbcards.reduce(function(a, b) {return a.concat(b);},[]);
  // console.log(newArr);

  // function countInArray(array) {
  //   let count = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     console.log(array[i].cardName);
  //     if (array[i.cardName] === array[i.cardName - 1]) {
  //       array.splice(array[i], 1);
  //     }
  //     else if (array[i] === array[i - 1]) {
  //       count++;
  //     }
  //   }
  //   return array;
  // }      
  // console.log(countInArray(newArr));

  const dbCardList = this.props.dbcards.map((cards, index) => (
    <div key={index}>
      {cards.map((card, index) => (
        <div className="card-wrapper"> 
          <span className="card-cost">{card.cardCost}</span>
          <img src={card.img} className="db-card-img" alt={card.name}/>
          <li key={index} className={`${card.rarity}`}>{card.cardName}
          </li>
        </div> ))}
    </div>
    ));

  if (this.props.currentUser !== null && this.props.enterDbMode === true)
  {
    return (
      <section className="deck-builder-wrapper">
      <h1 className="db-header">Deck Builder</h1>
      <hr className="hr-line"></hr>
      <ul className="db-cards-wrapper">
      {dbCardList}
      </ul>
      <div className="db-btn">
      <button className="clear-btn db-mode-btn" onClick={() => this.props.dispatch(addDeck(this.props.dbcardssaved, this.props.currentUser.id))}>
      Save Deck 
      </button>
      </div>
      <div className="db-btn">
      <button className="db-clear-btn" onClick={() => this.props.dispatch(removeDbCards())}>
      Clear
      </button>
      </div>
      </section>
    );
  }

  else return (
    <section className="deck-builder-wrapper">
    <h1 className="db-header">Deck Builder</h1>
    <hr className="hr-line"></hr>
    <ul className="db-cards-wrapper">
    {dbCardList}
    </ul>
    <div className="db-btn">
    <button className="db-clear-btn" onClick={() => this.props.dispatch(removeDbCards())}>
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
  enterDbMode: state.cardReducer.enterDbMode,
  dbcardssaved: state.cardReducer.dbcardssaved
});

export default connect(mapStateToProps)(DeckBuilder);

/*What next li iteration will look like:
const dbCardList = this.props.dbcards.map((cards, index) => (
  <div key={index}>
    {cards.map((card, index) => ( 
        <div className="list-wrapper">
        <li key={index} className={`${card.rarity}`}>
        <span className="card-cost">{card.cardCost}</span>
        <span className="card-name">{card.cardName}</span>
        <span className="card-img-wrapper">
          <img src={card.img} className="db-card-img" alt={card.name}/>
        </span>
        </li>
      </div> ))}
  </div>
  ));
  */