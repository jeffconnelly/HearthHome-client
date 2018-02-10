import React from 'react';
import {connect} from 'react-redux';
import {fetchAllCards} from '../actions/cardcalls';

export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllCards());
  }

render () {

  return (
    <div>Hello world</div>
  );

  }
}


const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(mapStateToProps)(App);

