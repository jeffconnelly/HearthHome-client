import {API_BASE_URL} from '../config';

export const SHOW_LOGIN_FORM = 'SHOW_LOGIN_FORM';
export const showLoginForm = () => ({
    type: SHOW_LOGIN_FORM,
});

export const HIDE_LOGIN_FORM = 'HIDE_LOGIN_FORM';
export const hideLoginForm = () => ({
    type: HIDE_LOGIN_FORM,
});

//Add a new deck to deck builder action
export const ADD_DECK_SUCCESS = 'SEARCH_CHARACTERS_SUCCESS';
export const addDeckSuccess = deck => ({
    type: ADD_DECK_SUCCESS,
    deck
});

export const ADD_CARD_TO_BUILDER = 'ADD_CARD_TO_BUILDER';
export const addCardToBuilder = card => ({
    type: ADD_CARD_TO_BUILDER,
    card
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
    return res.json();
  })
  .then(user => {
    dispatch(getUserSavedDecks(user._id));
  });
}


//Action that grabs users saved decks and updates state to render
export const GET_SAVED_DECKS_SUCCESS = 'GET_SAVED_DECKS_SUCCESS';
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
  return res.json();
})
  .then(user => {
    console.log(user.decks);
    dispatch(getSavedDecksSuccess(user.decks));
  })
};

// Action to delete a deck
export const DELETE_DECK_SUCCESS = 'DELETE_DECK_SUCCESS';
export const deleteDeckSuccess = () => ({
    type: DELETE_DECK_SUCCESS,
});

export const deleteDeck = (userId, deckId, decks) => dispatch => 
{
  console.log(deckId);
  fetch(`${API_BASE_URL}/deck/${deckId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
     },
     body: JSON.stringify({
      userId: userId,
      deckId: deckId
  }),
})
  .then(res => {
    console.log(res)
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(user => {
    // console.log(user.decks);
    dispatch(getUserSavedDecks(user._id));
    // dispatch(getSavedDecksSuccess(user.decks));
    // console.log('fetch recieved');
  });
}
