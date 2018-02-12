import {API_BASE_URL} from '../config';


export const SHOW_LOGIN_FORM = 'SHOW_LOGIN_FORM';
export const showLoginForm = () => ({
    type: SHOW_LOGIN_FORM,
});

export const ADD_DECK_SUCCESS = 'SEARCH_CHARACTERS_SUCCESS';
export const addCheeseSuccess = deck => ({
    type: ADD_DECK_SUCCESS,
    deck
});

export const addDeck = deck => dispatch => 
{
  fetch(`${API_BASE_URL}/deck/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
     },
     body: JSON.stringify({
      deck: deck, 
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
    dispatch(addCheeseSuccess(deck));
  })
}

