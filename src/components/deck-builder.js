import React from 'react';
import './deck-builder.css';
import {connect} from 'react-redux';
import {addDeck, removeDbCards} from '../actions/useractions';

export class DeckBuilder extends React.Component {


  
render () {

// let newObj = this.props.dbcards;
// console.log(newObj);
// newObj.map((cards, index) => (
//   console.log(cards)
// ));
  // let newObj = this.props.dbcards;
  // newObj.map(sort(function(a, b) {
  //   return a.cardCost - b.cardCost;
  // });
  // .sort(function(a, b){return b.cardCost-a.cardCost})
  // console.log(newObj);
  // let obj = [...this.props.dbcards];
  // obj.sort(function(a, b){return a.cardCost - b.cardCost});
  // console.log(obj);

  // console.log(this.props.dbcards);
  const dbCardList = this.props.dbcards.map((cards, index) => (
  <div>
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
      <button onClick={() => this.props.dispatch(addDeck(this.props.dbcardssaved, this.props.currentUser.id))}>
      Save Deck 
      </button>
      </div>
      <div className="db-btn">
      <button className="clear-btn" onClick={() => this.props.dispatch(removeDbCards())}>
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
  enterDbMode: state.cardReducer.enterDbMode,
  dbcardssaved: state.cardReducer.dbcardssaved
});

export default connect(mapStateToProps)(DeckBuilder);

