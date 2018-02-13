import {
  SHOW_LOGIN_FORM,
  GET_SAVED_DECKS_SUCCESS,
  STOP_CYCLE
} from '../actions/useractions'

const initialState = {
  showLoginForm: false,
  userLoggedIn: false,
  userSavedDecks: [],
  stopCycle: false,
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
    // console.log(action.decks)
    // if (action.decks !== state.userSavedDecks) {
      console.log(action.decks)
      return {
        ...state,
        userLoggedIn: true,
        showLoginForm: false,
        userSavedDecks: action.decks
      }
    case STOP_CYCLE: 
    return {
      ...state,
      stopCycle: true
    }
    default: return state;
  }
}

export default userReducer;
