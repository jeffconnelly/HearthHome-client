import {
  SHOW_LOGIN_FORM,
  GET_SAVED_DECKS_SUCCESS
} from '../actions/useractions'

const initialState = {
  showLoginForm: false,
  userLoggedIn: false,
  userSavedDecks: []
};

export function userReducer(state=initialState, action) {
  switch (action.type) {
    case SHOW_LOGIN_FORM:
    return {
      ...state,
      showLoginForm: true,
      userLoggedIn: false
    }
    case GET_SAVED_DECKS_SUCCESS:
    console.log(action.decks)
    return {
      ...state,
      userSavedDecks: action.decks
    }
    default: return state;
  }
}

export default userReducer;
