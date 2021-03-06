import React from 'react';
import './filter-section.css';
import { connect } from 'react-redux';
import {fetchCardSet, fetchCard, fetchAllCards, fetchClassCards, fetchClassNeutralCards, fetchNeutralCards} from '../actions/cardcalls';
import {enterChooseClassMode, leaveDbMode} from '../actions/useractions';

export class FilterSection extends React.Component {

  render () {
    if (this.props.enterChooseClassMode === false && this.props.enterDbMode === false) {
      return (
      <section className="filter-section-main">
        <h1 className="filter-header">Hearthstone Card List</h1>
        <hr className="hr-line"></hr>
        <div className="filter-wrapper">
          <div className="filter-item">
          <form id="setListForm" onSubmit = {  (e) => {
            if (this.state.value !== null) {
            e.preventDefault(); 
              this.props.dispatch(fetchCardSet(this.state.value));
            }
          }}>
          <label htmlFor="set">Set </label>
          <select name="set" form="setListForm" onChange={(e) => {
            this.setState({ value: e.target.value })
          }}>
          <option defaultValue="Select Set">Select Set</option>
          <option value="The Witchwood">The Witchwood</option>
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
          }}}>
          <label htmlFor="set"> <span className="label-wrap">Class</span> </label>
          <span className="label-wrap"><select name="set" form="classForm" onChange={(e) => {
            this.setState({ value: e.target.value })
          }}>
          <option defaultValue="Select Set">Select Class</option>
          <option value="Druid">Druid</option>
          <option value="Hunter">Hunter</option>
          <option value="Mage">Mage</option>
          <option value="Paladin">Paladin</option>
          <option value="Priest">Priest</option>
          <option value="Rogue">Rogue</option>
          <option value="Shaman">Shaman</option>
          <option value="Warlock">Warlock</option>
          <option value="Warrior">Warrior</option>
          </select></span>
          <input className="filter-input" type="submit" value="Filter" ref={input => (this.input = input)} disabled={!this.state} />
          </form>
          </div>
  
          <div className="filter-item">
          <form onSubmit = { (e) => {
            e.preventDefault();
            this.props.dispatch(fetchCard(this.input.value))
          }}>
              <label htmlFor="search"> Search </label>
              <input className="search-input" type="search" ref={input => (this.input = input)} />
              <button className="filter-input">Filter</button>
          </form>
          </div>
        </div>

          <div className="filter-wrapper-special">
          <div className="filter-item-special">
          <div className="filter-item">
          <button className="all-cards-btn" onClick={() => this.props.dispatch(fetchAllCards())}
          >
          Grab All Cards
          </button>  
          </div>
          <button className="db-mode-btn" onClick={() => this.props.dispatch(enterChooseClassMode())}
          >
          Enter Deck Builder Mode
          </button> 
          </div> 
        </div>
      </section>
      );
    }

    else if (this.props.enterChooseClassMode === true && this.props.enterDbMode === false) return (
      <section className="filter-section">
      <h1 className="filter-header">Hearthstone Card List</h1>
      <hr className="hr-line"></hr>
      <h2>Choose Your Class</h2>
      <div className="db-mode-class-wrapper">
      <img onClick={() => this.props.dispatch(fetchClassNeutralCards('Mage', 'Mage'))} className="hero-img" src="https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/3/3c/Jaina_Proudmoore%28320%29.png" alt="Jaina Proudmoore"/>
      <img onClick={() => this.props.dispatch(fetchClassNeutralCards('Druid', 'Druid'))} className="hero-img" src="https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/f/fa/Malfurion_Stormrage%28621%29.png?version=19f80aa69e2bd7caa7fe66519a56a3be"  alt="Malfurion Stormrage"/>
      <img onClick={() => this.props.dispatch(fetchClassNeutralCards('Hunter', 'Hunter'))} className="hero-img" src="https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/a/a0/Rexxar%28484%29.png?version=02018dce868e603f5495b4dff74dcbf7"  alt="Rexxar"/>
      <img onClick={() => this.props.dispatch(fetchClassNeutralCards('Paladin', 'Paladin'))} className="hero-img" src="https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/4/4d/Uther_Lightbringer%28257%29.png/250px-Uther_Lightbringer%28257%29.png?version=fea64b3dc715b39fbff79d20346ced38"  alt="Uther Lightbringer"/>
      <img onClick={() => this.props.dispatch(fetchClassNeutralCards('Priest', 'Priest'))} className="hero-img" src="https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/8/80/Anduin_Wrynn%28110%29.png/250px-Anduin_Wrynn%28110%29.png?version=7a5312f9023ca42a6f08ac4117b3432d"  alt="Anduin Wrynn"/>
      <img onClick={() => this.props.dispatch(fetchClassNeutralCards('Rogue', 'Rogue'))} className="hero-img" src="https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/a/a4/Valeera_Sanguinar%282%29.png/250px-Valeera_Sanguinar%282%29.png?version=35a50a374b283d740a7aab740f5f6377"  alt="Valeera Sanguinar"/>
      <img onClick={() => this.props.dispatch(fetchClassNeutralCards('Shaman', 'Shaman'))} className="hero-img" src="https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/4/4b/Thrall%28319%29.png/250px-Thrall%28319%29.png?version=e99c70006f2da990c432fe9a55fc5be1"  alt="Thrall"/>
      <img onClick={() => this.props.dispatch(fetchClassNeutralCards('Warlock', 'Warlock'))} className="hero-img" src="https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/0/0a/Gul%27dan%28618%29.png/250px-Gul%27dan%28618%29.png?version=d54808871d68a28cb8b647b6e7f7be90"  alt="Gul'dan"/>
      <img onClick={() => this.props.dispatch(fetchClassNeutralCards('Warrior', 'Warrior'))}  className="hero-img" src="https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/c/c5/Garrosh_Hellscream%28635%29.png/250px-Garrosh_Hellscream%28635%29.png?version=b06686c37d1aafb707b9b4b6e924bc57" alt="Garrosh Hellscream"/>
      </div>
      </section>
    );

    else return (
      <section className="filter-section">
        <h1 className="filter-header">Hearthstone Card List</h1>
        <hr className="hr-line"></hr>
        <h2>Build Your {this.props.Class} Deck</h2>
        <h3>Click on the cards to add to your deck</h3>
        <div className="db-mode-wrapper">
        <p className="get-cards-text">Get Class Cards</p>
        <img onClick={() => this.props.dispatch(fetchClassCards(this.props.Class))} className="small-hero-img"src={`http://www.deckselect.eu/img/${this.props.Class}.png`} alt={this.props.Class} />
        <p className="get-cards-text">Get Neutral Cards</p>
        <img onClick={() => this.props.dispatch(fetchNeutralCards('Neutral'))} className="small-hero-img" src={`http://metastats.net/images/class/neutral.png`} alt="Neutral Card"/>
        </div>
        <div className="db-mode-btn-wrapper">
        <button className="db-mode-btn" onClick={() => this.props.dispatch(leaveDbMode())}
        >
        Leave Deck Builder Mode
        </button> 
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  enterChooseClassMode: state.cardReducer.enterChooseClassMode,
  enterDbMode: state.cardReducer.enterDbMode,
  leaveDbMode: state.cardReducer.leaveDbMode,
  Class: state.cardReducer.Class,
});

export default connect(mapStateToProps)(FilterSection);