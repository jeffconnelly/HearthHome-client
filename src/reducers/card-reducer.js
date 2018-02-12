import {
FETCH_ALLCARDS_REQUEST,
FETCH_ALLCARDS_SUCCESS,
FETCH_ALLCARDS_ERROR,
FETCH_CARDSET_SUCCESS,
FETCH_CARD_SUCCESS,
FETCH_CLASS_SUCCESS
} from '../actions/cardcalls'


const initialState = {
  cards: [],
  loading: false,
  error: null,
};

export function cardReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_ALLCARDS_REQUEST:
    return {
      ...state,
      loading: true,
      error: null
    }
    case FETCH_ALLCARDS_SUCCESS:
    console.log(action.cards);
    return {
      ...state,
      cards: action.cards,
      loading: false,
      error: null
    }
    case FETCH_ALLCARDS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case FETCH_CARDSET_SUCCESS:
    console.log(action.cards);
    return {
      ...state,
      loading: true,
      error: null
    }
    case FETCH_CARD_SUCCESS:
    console.log(action.card);
    // console.log(...state);
    return {
      cards: action.card,
      loading: true,
      error: null
    }
    case FETCH_CLASS_SUCCESS:
    console.log(action.cards);
    return {
      cards: action.cards,
      loading: true,
      error: null
    }
      default: return state;
  }
}

export default cardReducer;



