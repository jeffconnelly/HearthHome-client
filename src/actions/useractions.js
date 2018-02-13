import {API_BASE_URL} from '../config';

export const SHOW_LOGIN_FORM = 'SHOW_LOGIN_FORM';
export const showLoginForm = () => ({
    type: SHOW_LOGIN_FORM,
});

//Add a new deck to deck builder action
export const ADD_DECK_SUCCESS = 'SEARCH_CHARACTERS_SUCCESS';
export const addDeckSuccess = deck => ({
    type: ADD_DECK_SUCCESS,
    deck
});

export const addDeck = (deck, id) => dispatch => 
{
  fetch(`${API_BASE_URL}/deck/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
     },
     body: JSON.stringify({
      deck: deck, 
      id: id
  }),
})
  .then(res => {
    console.log(res)
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    console.log('fetch recieved');
    return res.json();
  })
  .then(deck => {
    console.log(deck);
    dispatch(addDeckSuccess(deck));
  })
}

//Action that grabs users saved decks and updates state to render

export const GET_SAVED_DECKS_SUCCESS = 'GET__SAVED_DECKS_SUCCESS';
export const getSavedDecksSuccess = decks => ({
    type: GET_SAVED_DECKS_SUCCESS,
    decks
});

export const getUserSavedDecks = (id) => dispatch => {
fetch(`${API_BASE_URL}/deck/${id}`)
  .then(res => {
    if (!res.ok) {
    return Promise.reject(res.statusText);
  }
  console.log('fetch recieved!');
  return res.json();
})
  .then(user => {
    console.log(user.decks);
    dispatch(getSavedDecksSuccess(user.decks));
  })
};


// fetch(`${API_BASE_URL}/classes/${cards}?collectible=1`, {
//   method: 'GET',
//   headers: {
//     'X-Mashape-Key': `${API_KEY}`
//   }})
//   .then(res => {
//     if (!res.ok) {
//       return Promise.reject(res.statusText);
//     }
//     console.log('fetch recieved');
//     return res.json();
//   })
//   .then(cards => {
//    console.log(cards);
//   dispatch(fetchClassCardsSuccess(cards));
//   })
//   .catch(err => dispatch(fetchAllCardsError(err)));
// };