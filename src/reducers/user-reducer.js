import {
  SHOW_LOGIN_FORM,
  HIDE_LOGIN_FORM,
  GET_SAVED_DECKS_SUCCESS,
} from '../actions/useractions'

import {
LOGOUT
} from '../actions/auth'

const initialState = {
  showLoginForm: false,
  userLoggedIn: false,
  userSavedDecks: [],
};

export function userReducer(state=initialState, action) {
  switch (action.type) {
    case SHOW_LOGIN_FORM:
    return {
      ...state,
      showLoginForm: true,
      userLoggedIn: false
    }
    case HIDE_LOGIN_FORM:
    console.log(action);
    return {
      ...state,
      showLoginForm: false,
      userLoggedIn: false
    }
    case GET_SAVED_DECKS_SUCCESS:
      console.log(action.decks)
      return {
        ...state,
        userLoggedIn: true,
        showLoginForm: false,
        userSavedDecks: action.decks
      }
    case LOGOUT:
    return {
      ...state,
      userLoggedIn: false
    }
    default: return state;
  }
}

export default userReducer;
