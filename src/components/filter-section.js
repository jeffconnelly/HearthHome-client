import React from 'react';
import './filter-section.css';
import { connect } from 'react-redux';
import {fetchCardSet, fetchCard, fetchAllCards, fetchClassCards} from '../actions/cardcalls';

export class FilterSection extends React.Component {

  render () {
    return (
      <section className="filter-section">
        <h1 className="filter-header">Filter Card List</h1>
        <hr class = "hr-line"></hr>
        <div className="filter-wrapper">

        <div className="filter-item">
        <form id="setListForm" onSubmit = {  (e) => {
          if (this.state.value !== null) {
          e.preventDefault(); 
            this.props.dispatch(fetchCardSet(this.state.value));
            console.log(this.state.value);
          }
        }}>
        <label htmlFor="set">Set </label>
        <select name="set" form="setListForm" onChange={(e) => {
          console.log(e.target.value); 
          this.setState({ value: e.target.value })
        }}>
        <option selected>Select Set</option>
        <option value="Kobolds & Catacombs">Kobolds & Catacombs</option>
        <option value="Knights of the Frozen Throne">Knights of the Frozen Throne</option>
        <option value="Journey to Ungoro">Journey to Ungoro</option>
        <option value="Mean Streets of Gadgetzan">Mean Streets of Gadgetzan</option>
        <option value="One Night in Karazhan">One Night in Karazhan</option>
        <option value="Whispers of the Old Gods">Whispers of the Old Gods</option>
        </select>
        <input className="filter-input" type="submit" value="Filter" ref={input => (this.input = input)} disabled={!this.state} />
        </form>
        </div>

        <div className="filter-item">
        <form id="classForm" onSubmit = { (e) => {
          if (this.state.value !== null) {
          e.preventDefault(); 
          this.props.dispatch(fetchClassCards(this.state.value));
          console.log(this.state.value);
        }}}>
        <label htmlFor="set"> Class </label>
        <select name="set" form="classForm" onChange={(e) => {
          console.log(e.target.value); 
          this.setState({ value: e.target.value })
        }}>
        <option selected disabled hidden>Select Class</option>
        <option value="Hunter">Hunter</option>
        <option value="Mage">Mage</option>
        <option value="Paladin">Paladin</option>
        <option value="Priest">Priest</option>
        <option value="Rogue">Rogue</option>
        <option value="Shaman">Shaman</option>
        <option value="Warlock">Warlock</option>
        <option value="Warrior">Warrior</option>
        </select>
        <input className="filter-input" type="submit" value="Filter" ref={input => (this.input = input)} disabled={!this.state} />
        </form>
        </div>

        <div className="filter-item">
        <form onSubmit = { (e) => {
          e.preventDefault();
          console.log(this.input.value);
          this.props.dispatch(fetchCard(this.input.value))
        }}>
            <label htmlFor="search"> Search </label>
            <input type="search" ref={input => (this.input = input)} />
            <button>Filter</button>
        </form>
        </div>

        <div className="filter-item">
        <button onClick={() => this.props.dispatch(fetchAllCards())}
        >
        Grab All Cards
        </button>  
        </div>
        </div>    
      </section>
    );
  }
}

export default connect ()(FilterSection);
