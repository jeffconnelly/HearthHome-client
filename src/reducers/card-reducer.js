import {
  ADD_CARD_TO_BUILDER
} from '../actions/useractions'

import {
  REMOVE_DB_CARDS,
  ENTER_CHOOSE_CLASS_MODE,
  ENTER_DB_MODE,
  LEAVE_DB_MODE
} from '../actions/useractions'

import {
FETCH_ALLCARDS_REQUEST,
FETCH_ALLCARDS_SUCCESS,
FETCH_ALLCARDS_ERROR,
FETCH_CARDSET_SUCCESS,
FETCH_CARD_SUCCESS,
FETCH_CLASS_SUCCESS,
CHOSEN_CLASS
} from '../actions/cardcalls'


const initialState = {
  cards: [],
  dbcards: [],
  dbcardssaved: [],
  loading: false,
  error: null,
  enterChooseClassMode: false,
  enterDbMode: false,
  Class: null,
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
    if (state.enterDbMode === true) {
      console.log(action.card);
      console.log(state.dbcardssaved);
      return {
        ...state,
        dbcards: [...state.dbcards, [{cardName: action.card, rarity: action.rarity}]],
        dbcardssaved: [...state.dbcardssaved, action.card],
        loading: false,
      }
    }
    else return {
      ...state
    }
    case REMOVE_DB_CARDS:
    return {
      ...state,
      dbcards: [],
      dbcardssaved: [],
    }
    case ENTER_CHOOSE_CLASS_MODE:
    return {
      ...state,
      enterChooseClassMode: true,
      enterDbMode: false,
    }
    case ENTER_DB_MODE:
    return {
      ...state,
      enterChooseClassMode: false,
      enterDbMode: true
    }
    case LEAVE_DB_MODE:
    return {
      ...state,
      enterChooseClassMode: false,
      enterDbMode: false,
      dbcards: [],
      dbcardssaved: []
    }
    case CHOSEN_CLASS:
    console.log(action.Class);
    return {
      ...state,
      Class: action.Class,
    }
      default: return state;
  }
}

export default cardReducer;



