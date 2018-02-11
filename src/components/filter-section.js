import React from 'react';
// import {reduxForm, Field} from 'redux-form';
import './filter-section.css';



export default function Header(props) {
  return (
    <div className="filter-section">
      <h1>Filter Section</h1>
      <form>
      <label htmlFor="set">Choose a Set </label>
      <select name="set">
      <option value="Kobolds & Catacombs">Kobolds & Catacombs</option>
      <option value="Knights of the Frozen Throne">Knights of the Frozen Throne</option>
      <option value="Journey to Ungoro">Journey to Ungoro</option>
      <option value="Mean Streets of Gadgetzan">Mean Streets of Gadgetzan</option>
      <option value="One Knight in Karazhan">One Knight in Karazhan</option>
      <option value="Whispers of the Old Gods">Whispers of the Old Gods</option>
      </select>
      <input type="submit" />
      </form>
    </div>
  )

}

