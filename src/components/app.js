import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import GridList from './grid-list';
export class App extends React.Component {
   

render () {
  return (
    <section className="body-wrapper">
    <Header />
    <GridList />
    </section>
  );

  }
}

const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(mapStateToProps)(App);

