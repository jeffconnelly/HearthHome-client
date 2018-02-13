import React from 'react';
import './saved-decks.css';
import {connect} from 'react-redux';
import {getUserSavedDecks} from '../actions/useractions';

export class SavedDecks extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser && !this.props.currentUser) {
      this.props.dispatch(getUserSavedDecks(nextProps.currentUser.id));
    }
  }

  render () {

    if (this.props.currentUser) {
      console.log(this.props.userSavedDecks);
    const savedDeckList = this.props.userSavedDecks.map((deck, index) => (
      <div>
      <ul key={index} className="savedDeckList">
      {deck.cards}
      </ul>
      <button>Delete</button>
      </div>
    ));

    return (
      <section className="saved-decks-section">
        <h1>Saved Decks Section</h1>
        <h2>You can now save your decks - Woot!</h2>
        <div className="saved-decks-wrapper"> {savedDeckList} </div>
      </section>
      )
    }
    else {
      return (
        <div className="saved-decks-section">
          <h1>Saved Decks Section</h1>
          <h2>Login to save your decks!</h2>
        </div>
      )
    }
  }
}


const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser,
  userSavedDecks: state.userReducer.userSavedDecks,
  // stopCycle: state.userReducer.stopCycle
});

export default connect(mapStateToProps)(SavedDecks);



// <button onClick={ this.props.dispatch(getUserSavedDecks/(this.props.currentUser.id))}></button>
// <input type="submit" value="Filter" ref={input => (this.input = input)} disabled={!this.state} />

 // render () {
    //   const cardList = this.props.cards.map((card, index) => (
    //     <li onClick={() => this.props.dispatch(addCardToBuilder(card.name))} className="list-wrapper" key={index} name={card.name}>
    //       <img src={card.img} className="card-img" alt={card.name}/>
    //     </li>
    //   ));    

 // this.props.dispatch(stopCycle());
      // this.setState({ value: false })

      // "_id" : ObjectId("5a8318ece51dab7dc32b1d35"),
      // "username" : "BrunoPup",
      // "password" : "$2a$10$tO7im5VDOn/jZYBQVnTMseHbEh/GCoduejqAB6MY8GUz0P/pZ.erq",
      // "lastName" : "Connelly",
      // "firstName" : "Bruno",