import React from 'react';
import {connect} from 'react-redux';
import NavBar from './navbar.js';
import Header from './header';
import GridList from './grid-list';
import FilterSection from './filter-section';
import DeckBuilder from './deck-builder';
import SavedDecks from './saved-decks';
import Modal from './modal.js';

import './app.css';

export class App extends React.Component {
   

render () {
  return (
    <section className="body-wrapper">
    <NavBar />
    <Modal />
    <Header />
    <FilterSection />
    <div className="card-section-wrapper">
    <GridList />
    <DeckBuilder />
    </div>
    <SavedDecks />
    </section>
  );
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(mapStateToProps)(App);

