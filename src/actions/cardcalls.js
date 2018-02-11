// import {API_BASE_URL} from '../config'; (If needed)

const API_BASE_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards';
const API_KEY = 'nxJ4T31JaYmshZujaPeoLhL0g2lop1H7pi9jsn51LSvRMryZte';

// const STANDARD_CARDSET_URLS = [`${API_BASE_URL}/sets/Kobolds%20%26%20Catacombs?collectible=1`, `${API_BASE_URL}/sets/Knights%20of%20the%20Frozen%20Throne?collectible=1`, `${API_BASE_URL}/sets/Journey%20to%20Un'Goro?collectible=1`, `${API_BASE_URL}/sets/Mean%20Streets%20of%20Gadgetzan?collectible=1`, `${API_BASE_URL}/sets/One%20Night%20in%20Karazhan?collectible=1` `${API_BASE_URL}/sets/Whispers%20of%20the%20Old%20Gods?collectible=1`];

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

function getKoboldsSet(){
  return fetch(`${API_BASE_URL}/sets/Kobolds%20%26%20Catacombs?collectible=1`, {
    method: 'GET',
    headers: {
      'X-Mashape-Key': 'nxJ4T31JaYmshZujaPeoLhL0g2lop1H7pi9jsn51LSvRMryZte'
    }})
    .then((res) => res.json());
};

function getKnightsSet(){
  return fetch(`${API_BASE_URL}/sets/Knights%20of%20the%20Frozen%20Throne?collectible=1`, {
    method: 'GET',
    headers: {
      'X-Mashape-Key': 'nxJ4T31JaYmshZujaPeoLhL0g2lop1H7pi9jsn51LSvRMryZte'
    }})
    .then((res) => res.json());
};


function getUngoroSet(){
  return fetch(`${API_BASE_URL}/sets/Journey%20to%20Un'Goro?collectible=1`, {
    method: 'GET',
    headers: {
      'X-Mashape-Key': 'nxJ4T31JaYmshZujaPeoLhL0g2lop1H7pi9jsn51LSvRMryZte'
    }})
    .then((res) => res.json());
};

function getAllSets(){
  return Promise.all([getKoboldsSet(), getKnightsSet(), getUngoroSet()])
}

  getAllSets()
  .then(([KoboldsCards, KnightsCards, UngoroCards]) => {
    const combinedCardsArray = [...KoboldsCards, ...KnightsCards, ...UngoroCards];
    console.log(combinedCardsArray);
    dispatch(fetchAllCardsSuccess(combinedCardsArray))
      })
    .catch(err => dispatch(fetchAllCardsError(err)));
  
};
//     })
//     .then(cards => {
//      console.log(cards);
//     dispatch(fetchAllCardsSuccess(cards));
//     })
//     .catch(err => dispatch(fetchAllCardsError(err)));
// };

// export const fetchAllCards = cards => dispatch => {
//   dispatch(fetchAllCardsRequest());
//   fetch(`${API_BASE_URL}/sets/Knights%20of%20the%20Frozen%20Throne?collectible=1`, {
//     method: 'GET',
//     headers: {
//       'X-Mashape-Key': 'nxJ4T31JaYmshZujaPeoLhL0g2lop1H7pi9jsn51LSvRMryZte'
//     }
//   })
//     .then(res => {
//       if (!res.ok) {
//         return Promise.reject(res.statusText);
//       }
//       console.log('fetch recieved');
//       return res.json();
//     })
//     .then(cards => {
//      console.log(cards);
//     dispatch(fetchAllCardsSuccess(cards));
//     })
//     .catch(err => dispatch(fetchAllCardsError(err)));
// };
