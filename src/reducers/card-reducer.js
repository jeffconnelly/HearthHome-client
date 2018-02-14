import {
  ADD_CARD_TO_BUILDER
} from '../actions/deckactions'

import {
  REMOVE_DB_CARDS
} from '../actions/useractions'

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
  dbcards: [],
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
    return {
      ...state,
      cards: action.card,
      loading: false,
      error: null
    }
    case FETCH_CLASS_SUCCESS:
    console.log(action.cards);
    return {
      ...state,
      cards: action.cards,
      loading: false,
      error: null
    }
    case ADD_CARD_TO_BUILDER:
    console.log(action.card);
    return {
      ...state,
      dbcards: [...state.dbcards, action.card],
      loading: false,
    }
    case REMOVE_DB_CARDS:
    return {
      ...state,
      dbcards: []
    }
      default: return state;
  }
}

export default cardReducer;



