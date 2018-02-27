import {API_BASE_URL} from '../config';


//Shows and Hides Login Form Modal
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

//Grabs users saved decks and updates state
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
    // let namesArray = user.decks.filter(card => card.cardName === false);
    // console.log(namesArray);
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
    dispatch(getUserSavedDecks(user._id));
  });
}

//Actions to add and clear Deck Builder cards
export const ADD_CARD_TO_BUILDER = 'ADD_CARD_TO_BUILDER';
export const addCardToBuilder = (card, rarity, cost, img) => ({
    type: ADD_CARD_TO_BUILDER,
    card,
    rarity,
    cost,
    img
});

export const REMOVE_DB_CARDS = 'REMOVE_DB_CARDS';
export const removeDbCards = () => ({
    type: REMOVE_DB_CARDS,
});

//Actions to switch filter section state
export const ENTER_CHOOSE_CLASS_MODE = 'ENTER_CHOOSE_CLASS_MODE';
export const enterChooseClassMode = () => ({
    type: ENTER_CHOOSE_CLASS_MODE,
});

export const ENTER_DB_MODE = 'ENTER_DB_MODE';
export const enterDbMode = () => ({
    type: ENTER_DB_MODE,
});

export const LEAVE_DB_MODE = 'LEAVE_DB_MODE';
export const leaveDbMode = () => ({
    type: LEAVE_DB_MODE,
});