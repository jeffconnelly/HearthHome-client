import {enterDbMode} from '../actions/useractions';

const API_BASE_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards';
const API_KEY = 'nxJ4T31JaYmshZujaPeoLhL0g2lop1H7pi9jsn51LSvRMryZte';

//Fetch all Standard Cards Action
export const FETCH_ALLCARDS_REQUEST = 'SEARCH_CHARACTERS_REQUEST';
export const fetchAllCardsRequest = () => ({
    type: FETCH_ALLCARDS_REQUEST
});

export const FETCH_ALLCARDS_SUCCESS = 'SEARCH_CHARACTERS_SUCCESS';
export const fetchAllCardsSuccess = cards => ({
    type: FETCH_ALLCARDS_SUCCESS,
    cards
});

export const FETCH_ALLCARDS_ERROR = 'SEARCH_CHARACTERS_ERROR';
export const fetchAllCardsError = error => ({
    type: FETCH_ALLCARDS_ERROR,
    error
});

//This action fetches all cards in the Standard Set.
export const fetchAllCards = cards => dispatch => {
  dispatch(fetchAllCardsRequest());

  function getKoboldsSet(){
    return fetch(`${API_BASE_URL}/sets/Kobolds%20%26%20Catacombs?collectible=1`, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': `${API_KEY}`
      }})
      .then((res) => res.json());
  };

  function getWitchwoodSet(){
    return fetch(`${API_BASE_URL}/sets/The%20Witchwood?collectible=1`, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': `${API_KEY}`
      }})
      .then((res) => res.json());
  };

  function getKnightsSet(){
    return fetch(`${API_BASE_URL}/sets/Knights%20of%20the%20Frozen%20Throne?collectible=1`, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': `${API_KEY}`
      }})
      .then((res) => res.json());
  };

  function getUngoroSet(){
    return fetch(`${API_BASE_URL}/sets/Journey%20to%20Un'Goro?collectible=1`, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': `${API_KEY}`
      }})
      .then((res) => res.json());
  };

  function getMeanStreetsSet(){
    return fetch(`${API_BASE_URL}/sets/Mean%20Streets%20of%20Gadgetzan?collectible=1`, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': `${API_KEY}`
      }})
      .then((res) => res.json());
  };

  function getKarazhanSet(){
    return fetch(`${API_BASE_URL}/sets/One%20Night%20in%20Karazhan?collectible=1`, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': `${API_KEY}`
      }})
      .then((res) => res.json());
  };

  function getAllSets(){
    return Promise.all([getWitchwoodSet(), getKoboldsSet(), getKnightsSet(), getUngoroSet(), getMeanStreetsSet(), getKarazhanSet()])
  }

  getAllSets()
  .then(([WitchwoodCards, KoboldsCards, KnightsCards, UngoroCards, MeanStreetsCards, KarazhanCards]) => {
    const combinedCardsArray = [...WitchwoodCards, ...KoboldsCards, ...KnightsCards, ...UngoroCards, ...MeanStreetsCards, ...KarazhanCards];
    dispatch(fetchAllCardsSuccess(combinedCardsArray))
      })
    .catch(err => dispatch(fetchAllCardsError(err)));
};

//These actions fetch a specific card set
export const FETCH_CARDSET_SUCCESS = 'SEARCH_CHARACTERS_SUCCESS';
export const fetchCardSetSuccess = cards => ({
    type: FETCH_CARDSET_SUCCESS,
    cards
});

export const fetchCardSet = cardValue => dispatch => {
let finalCardValue;
  
  if (cardValue === 'The Witchwood') {
    finalCardValue = 'The%20Witchwood?collectible=1';
  }

  else if (cardValue === 'Kobolds & Catacombs') {
    finalCardValue = 'Kobolds%20%26%20Catacombs?collectible=1';
  }

  else if (cardValue === 'Knights of the Frozen Throne') {
    finalCardValue = 'Knights%20of%20the%20Frozen%20Throne?collectible=1';
  }

  else if (cardValue === 'Journey to Ungoro') {
    finalCardValue = `Journey%20to%20Un'Goro?collectible=1`;
  }

  else if (cardValue === 'Mean Streets of Gadgetzan') {
    finalCardValue = `Mean%20Streets%20of%20Gadgetzan?collectible=1`;
  }

  else if (cardValue === 'One Night in Karazhan') {
    finalCardValue = `One%20Night%20in%20Karazhan?collectible=1`;
  }

  else if (cardValue === 'Whispers of the Old Gods') {
    finalCardValue = `Whispers%20of%20the%20Old%20Gods?collectible=1`;
  }

fetch(`${API_BASE_URL}/sets/${finalCardValue}`, {
    method: 'GET',
    headers: {
      'X-Mashape-Key': `${API_KEY}`
    }})
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      console.log('fetch recieved');
      return res.json();
    })
    .then(cards => {
    dispatch(fetchCardSetSuccess(cards));
    })
    .catch(err => dispatch(fetchAllCardsError(err)));
};

//Actions that fetch a specific card
export const FETCH_CARD_SUCCESS = 'SEARCH_CARD_SUCCESS';
export const fetchCardSuccess = card => ({
    type: FETCH_CARD_SUCCESS,
    card
});

export const fetchCard = card => dispatch => {

fetch(`${API_BASE_URL}/${card}?collectible=1`, {
  method: 'GET',
  headers: {
    'X-Mashape-Key': `${API_KEY}`
  }})
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    console.log('fetch recieved');
    return res.json();
  })
  .then(card => {
  dispatch(fetchCardSuccess(card));
  })
  .catch(err => dispatch(fetchAllCardsError(err)));
};

//Actions that fetch a card list by class
export const FETCH_CLASS_SUCCESS = 'FETCH_CLASS_SUCCESS';
export const fetchClassCardsSuccess = cards => ({
    type: FETCH_CLASS_SUCCESS,
    cards
});

export const fetchClassCards = cards => dispatch => {
fetch(`${API_BASE_URL}/classes/${cards}?collectible=1`, {
    method: 'GET',
    headers: {
      'X-Mashape-Key': `${API_KEY}`
    }})
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      console.log('fetch recieved');
      return res.json();
    })
    .then(cards => {
    dispatch(fetchClassCardsSuccess(cards));
    })
    .catch(err => dispatch(fetchAllCardsError(err)));
  };

//Action to log the chosen Class
export const CHOSEN_CLASS = 'CHOSEN_CLASS';
export const chosenClass = Class => ({
    type: CHOSEN_CLASS,
    Class
});

  export const fetchClassNeutralCards = (cards, hero) => dispatch => {

    fetch(`${API_BASE_URL}/classes/${cards}?collectible=1`, {
        method: 'GET',
        headers: {
          'X-Mashape-Key': `${API_KEY}`
        }})
        .then(res => {
          if (!res.ok) {
            return Promise.reject(res.statusText);
          }
          console.log('fetch recieved');
          return res.json();
        })
        .then(cards => {
        dispatch(fetchClassCardsSuccess(cards));
        dispatch(enterDbMode());
        dispatch(chosenClass(hero));
        })
        .catch(err => dispatch(fetchAllCardsError(err)));
      };

     
export const fetchNeutralCards = (cards, hero) => dispatch => {
fetch(`${API_BASE_URL}/classes/${cards}?collectible=1`, {
            method: 'GET',
            headers: {
              'X-Mashape-Key': `${API_KEY}`
            }})
            .then(res => {
              if (!res.ok) {
                return Promise.reject(res.statusText);
              }
              console.log('fetch recieved');
              return res.json();
            })
            .then(cards => {
            dispatch(fetchClassCardsSuccess(cards));
            })
            .catch(err => dispatch(fetchAllCardsError(err)));
};