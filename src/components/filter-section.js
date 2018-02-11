import React from 'react';
// import {reduxForm, Field} from 'redux-form';
import './filter-section.css';
import { connect } from 'react-redux';
import {fetchCardSet, fetchCard} from '../actions/cardcalls';


export class FilterSection extends React.Component {

  render () {
    return (
      <div className="filter-section">
        <h1>Filter Card List</h1>
        <form id="setListForm" onSubmit = { (e) => {
          e.preventDefault(); 
          this.props.dispatch(fetchCardSet(this.state.value));
          console.log(this.state.value);
        }}>
        <label htmlFor="set">Choose a Set </label>
        <select name="set" form="setListForm" onChange={(e) => {
          console.log(e.target.value); 
          this.setState({ value: e.target.value })
        }}>
        <option value="Kobolds & Catacombs">Kobolds & Catacombs</option>
        <option value="Knights of the Frozen Throne">Knights of the Frozen Throne</option>
        <option value="Journey to Ungoro">Journey to Ungoro</option>
        <option value="Mean Streets of Gadgetzan">Mean Streets of Gadgetzan</option>
        <option value="One Night in Karazhan">One Night in Karazhan</option>
        <option value="Whispers of the Old Gods">Whispers of the Old Gods</option>
        </select>
        <input type="submit" value="Filter" ref={input => (this.input = input)} />
        </form>

        <form onSubmit = { (e) => {
          e.preventDefault();
          console.log(this.input.value);
          this.props.dispatch(fetchCard(this.input.value))
        }}>
            <input type="search" ref={input => (this.input = input)} />
            <button>Search</button>
        </form>

      </div>
    );
  
  }
 
}


// ref={input => (this.input = input)}
export default connect ()(FilterSection);
