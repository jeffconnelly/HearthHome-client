import React from 'react';
import './saved-decks.css';
import {connect} from 'react-redux';
import {getUserSavedDecks, stopCycle} from '../actions/useractions';

export class SavedDecks extends React.Component {

  componentWillMount() {
    this.setState({ value: false})
  }
  
  render () {
    // render () {
    //   const cardList = this.props.cards.map((card, index) => (
    //     <li onClick={() => this.props.dispatch(addCardToBuilder(card.name))} className="list-wrapper" key={index} name={card.name}>
    //       <img src={card.img} className="card-img" alt={card.name}/>
    //     </li>
    //   ));    
    
    if (this.props.currentUser && this.state.value === false) {
      console.log(this.props.userSavedDecks)
      this.props.dispatch(getUserSavedDecks(this.props.currentUser.id));
      // this.props.dispatch(stopCycle());
      // this.setState({ value: false })
      return (
        <div 
        // value={this.setState({value: true})}
         className="saved-decks-section">
        <h1>Saved Decks Section</h1>
        <h2>You can now save your decks - Woot!</h2>
      </div>
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
  // userSavedDecks: state.userReducer.userSavedDecks,
  // stopCycle: state.userReducer.stopCycle
});

export default connect(mapStateToProps)(SavedDecks);


// <button onClick={ this.props.dispatch(getUserSavedDecks/(this.props.currentUser.id))}></button>
// <input type="submit" value="Filter" ref={input => (this.input = input)} disabled={!this.state} />