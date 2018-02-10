// import {API_BASE_URL} from '../config'; (If needed)


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

export const fetchAllCards = cards => dispatch => {
  dispatch(fetchAllCardsRequest());
  fetch('https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Knights%20of%20the%20Frozen%20Throne?collectible=1', {
    method: 'GET',
    headers: {
      'X-Mashape-Key': 'nxJ4T31JaYmshZujaPeoLhL0g2lop1H7pi9jsn51LSvRMryZte'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      console.log('fetch recieved');
      return res.json();
    })
    .then(cards => {
     console.log(cards);
    dispatch(fetchAllCardsSuccess(cards));
    })
    .catch(err => dispatch(fetchAllCardsError(err)));
};

